import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const FreeReport = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling will be wired up later
    console.log({ name, email });
  };

  return (
    <>
      <SEO
        title="Free Report: 7 Overlooked Habits Causing Bloating | NXTLVL Health"
        description="Expert Naturopath Mitchell Potts reveals 7 crazily overlooked habits causing women to bloat after every meal. Get the free report instantly."
        canonical="https://nxtlvlhealth.com.au/free-report"
      />

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
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[hsl(174_70%_65%)] text-xs sm:text-sm uppercase tracking-widest font-semibold mb-6">
                  <Sparkles className="h-4 w-4" />
                  Free Naturopath Report
                </div>

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
                  After helping <strong className="font-bold text-white">thousands of patients in Brisbane</strong> with their gut health, Naturopath Mitchell Potts reveals <strong className="font-bold text-white">7 habits that most women do mindlessly</strong> on a daily basis that are making their gut scream for help and <strong className="font-bold text-white">blow up like a balloon</strong>. Report uncovers everything you need to know.
                </p>

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
                    Get Access To Report
                  </Button>
                  <p className="text-center text-sm text-white/70 italic">
                    You'll be emailed access immediately.
                  </p>
                </form>
              </div>

              {/* COLUMN 2 — intentionally blank for now */}
              <div className="hidden lg:block" aria-hidden="true" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FreeReport;
