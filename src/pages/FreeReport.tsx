import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import mitchAnalysis from "@/assets/mitch-analysis.png";
import nxtlvlLogoWhite from "@/assets/nxtlvl-logo-white.png";
import {
  Sparkles,
  Pill,
  Utensils,
  Wheat,
  Smile,
  Candy,
} from "lucide-react";

const bullets = [
  { icon: Pill, text: "How to <strong>stop bloating</strong> without pills." },
  { icon: Utensils, text: "What you should <strong>never do while eating</strong>." },
  { icon: Wheat, text: "The <strong>shocking truth</strong> about fibre." },
  { icon: Smile, text: "Have you been <strong>chewing wrong</strong>? (And does it really matter?)" },
  { icon: Candy, text: "The <strong>dirty truth</strong> behind \"sugar-free\" snacks." },
];

const sendReportEmail = async (name: string, email: string) => {
  const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-report-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ name, email }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(details || "Failed to send report email");
  }
};

const ReportCover = () => (
  <div className="report-float relative" style={{ transformStyle: "preserve-3d" }}>
    {/* Stacked pages peeking from the right side */}
    <div className="absolute top-2 left-2 right-[-10px] bottom-2 bg-white rounded-r-md rounded-l-sm shadow-lg" style={{ transform: "translateZ(-6px)" }} aria-hidden="true" />
    <div className="absolute top-3 left-3 right-[-7px] bottom-3 bg-[hsl(0_0%_96%)] rounded-r-md rounded-l-sm shadow-md" style={{ transform: "translateZ(-3px)" }} aria-hidden="true" />
    <div className="absolute top-4 left-4 right-[-4px] bottom-4 bg-[hsl(0_0%_92%)] rounded-r-md rounded-l-sm" style={{ transform: "translateZ(-1px)" }} aria-hidden="true" />

    {/* Cover */}
    <div
      className="relative w-[360px] sm:w-[400px] md:w-[440px] lg:w-[460px] xl:w-[560px] aspect-[3/4] rounded-r-lg rounded-l-sm overflow-hidden border border-white/10"
      style={{
        background:
          "linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(0 0% 14%) 50%, hsl(0 0% 6%) 100%)",
        boxShadow:
          "0 40px 80px -20px rgba(0,0,0,0.7), 0 20px 40px -15px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      {/* Spine accent on the left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[hsl(174_75%_45%)] via-[hsl(174_75%_38%)] to-[hsl(174_75%_30%)]" aria-hidden="true" />
      <div className="absolute left-2 top-0 bottom-0 w-px bg-white/10" aria-hidden="true" />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, hsl(174 75% 45% / 0.18), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Cover content */}
      <div className="relative h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 xl:p-10">
        {/* Top: tag + logo */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[hsl(174_75%_58%)]/40 bg-[hsl(174_75%_58%)]/10 text-[hsl(174_75%_65%)] text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
            <Sparkles className="h-3 w-3" />
            Confidential Guide
          </div>
          <div className="h-px w-16 bg-[hsl(174_75%_58%)] mb-6" />
        </div>

        {/* Headline */}
        <div className="flex-1 flex items-center">
          <h2 className="text-white font-bold leading-[1.18] tracking-tight text-[18px] sm:text-[20px] md:text-[22px] xl:text-[26px]">
            Expert Naturopath Reveals{" "}
            <span className="text-[hsl(174_75%_58%)]">
              7 Crazily Overlooked Habits
            </span>{" "}
            That Cause{" "}
            <span className="text-[hsl(174_75%_58%)]">Women</span>{" "}
            To{" "}
            <span className="text-[hsl(174_75%_58%)]">Bloat</span>{" "}
            After Every Single Meal{" "}
            <span className="italic text-white/85">
              (#3 Will Shock You).
            </span>
          </h2>
        </div>

        {/* Bottom: prepared by */}
        <div className="pt-6 border-t border-white/15">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-1">
            Prepared By
          </p>
          <p className="text-white font-semibold text-lg">
            Mitchell Potts
          </p>
        </div>
      </div>

      {/* Soft sheen highlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)",
        }}
        aria-hidden="true"
      />
    </div>
  </div>
);

const FreeReport = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await sendReportEmail(name, email);
      toast.success("Check your inbox — your guide is on its way!");
      window.location.href = "/naturopath-in-brisbane?welcome=1";
    } catch (err) {
      console.error("send-report-email failed:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Free Guide: 7 Overlooked Habits Causing Bloating | NXTLVL Health"
        description="Expert Naturopath Mitchell Potts reveals 7 crazily overlooked habits causing women to bloat after every meal. Get the free guide instantly."
        canonical="https://nxtlvlhealth.com.au/free-report"
      />

      <style>{`
        @keyframes report-float {
          0%   { transform: rotateY(-22deg) rotateX(6deg) translateY(0px); }
          50%  { transform: rotateY(-19deg) rotateX(4deg) translateY(-12px); }
          100% { transform: rotateY(-22deg) rotateX(6deg) translateY(0px); }
        }
        .report-float {
          animation: report-float 6s ease-in-out infinite;
          transform-origin: center center;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .report-float { animation: none; transform: rotateY(-18deg) rotateX(4deg); }
        }
      `}</style>

      <div className="min-h-screen bg-background text-white">
        <section className="relative overflow-hidden min-h-screen flex items-center">
          {/* Background image + overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${mitchAnalysis})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90"
            aria-hidden="true"
          />
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/40 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary/30 blur-3xl" />
          </div>

          {/* Logo */}
          <div className="absolute top-5 left-5 sm:top-7 sm:left-8 z-10">
            <a href="/" aria-label="NXTLVL Health home">
              <img
                src={nxtlvlLogoWhite}
                alt="NXTLVL Health logo"
                className="h-14 sm:h-16 md:h-20 w-auto"
                loading="eager"
              />
            </a>
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-16 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* COLUMN 1 */}
              <div>
                {/* Headline */}
                <h1
                  className="font-bold leading-[1.15] tracking-tight mb-6 text-3xl sm:text-4xl md:text-5xl"
                  style={{
                    textShadow:
                      "0 2px 8px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.4)",
                  }}
                >
                  Expert Naturopath Reveals{" "}
                  <span className="text-[hsl(174_75%_58%)]">
                    7 Crazily Overlooked Habits
                  </span>{" "}
                  That Cause{" "}
                  <span className="text-[hsl(174_75%_58%)]">Women</span> To{" "}
                  <span className="text-[hsl(174_75%_58%)]">Bloat</span> After
                  Every Single Meal{" "}
                  <span className="italic font-semibold">
                    (No Doctor Will Tell You This.)
                  </span>
                </h1>

                {/* Sub-headline */}
                <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8">
                  After helping <strong className="font-bold text-white">thousands of patients in Brisbane</strong> with their gut health, Naturopath Mitchell Potts reveals <strong className="font-bold text-white">7 habits that most women do mindlessly</strong> on a daily basis that are making their gut scream for help and <strong className="font-bold text-white">blow up like a balloon</strong>. Guide uncovers everything you need to know.
                </p>

                {/* Mobile report cover */}
                <div className="lg:hidden flex justify-center mb-8" style={{ perspective: "1800px" }}>
                  <div style={{ transform: "translateX(-2%)" }}>
                    <ReportCover />
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-8">
                  {bullets.map((b, i) => {
                    const Icon = b.icon;
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/20 border border-primary/40 text-[hsl(174_75%_58%)] flex items-center justify-center mt-0.5">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span
                          className="text-white/90 text-base sm:text-lg leading-relaxed pt-1"
                          dangerouslySetInnerHTML={{ __html: b.text }}
                        />
                      </li>
                    );
                  })}
                </ul>

                {/* Opt-In Form */}
                <form
                  onSubmit={handleSubmit}
                  className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-5 sm:p-6 space-y-3"
                >
                  <Input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                    className="h-12 bg-white/95 text-foreground placeholder:text-muted-foreground border-0"
                  />
                  <Input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={255}
                    className="h-12 bg-white/95 text-foreground placeholder:text-muted-foreground border-0"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 text-base sm:text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Get Access To Guide
                  </Button>
                  <p className="text-center text-sm text-white/70 italic">
                    You'll be emailed access immediately.
                  </p>
                </form>
              </div>

              {/* COLUMN 2 — animated report mockup (desktop only) */}
              <div className="hidden lg:flex items-center lg:justify-end" style={{ perspective: "1800px" }}>
                <ReportCover />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FreeReport;
