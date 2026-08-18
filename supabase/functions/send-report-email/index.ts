const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email } = await req.json();

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not configured");

    const greeting = name ? `Hey ${name},` : "Hey there,";

    const html = `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #1a1a1a; line-height: 1.6;">
        <p>${greeting}</p>
        <p>Here's your access to the guide as promised, we hope it serves your gut well:</p>
        <p><a href="https://nxtlvlhealth.com.au/guide" style="color: #009485; font-weight: bold;">https://nxtlvlhealth.com.au/guide</a></p>
        <p>— The NXTLVL Health Team</p>
      </div>
    `;

    const text = `${greeting}\n\nHere's your access to the guide as promised, we hope it serves your gut well:\n\nhttps://nxtlvlhealth.com.au/guide\n\n— The NXTLVL Health Team`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "NXTLVL Health <nxtlvlhealth@offsideservleads.online>",
        to: [email],
        subject: "Access To Your Guide",
        html,
        text,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Resend error:", res.status, data);
      return new Response(JSON.stringify({ error: "Failed to send", details: data }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("send-report-email error:", e);
    const msg = e instanceof Error ? e.message : "Unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
