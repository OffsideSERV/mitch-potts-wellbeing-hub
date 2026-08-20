import { useEffect, useRef } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import mitchAnalysis from "@/assets/mitch-analysis.png";
import nxtlvlLogoWhite from "@/assets/nxtlvl-logo-white.png";
import habit1 from "@/assets/report-habit-1.png";
import habit2 from "@/assets/report-habit-2.png";
import habit3 from "@/assets/report-habit-3.png";
import habit4 from "@/assets/report-habit-4.png";
import habit5 from "@/assets/report-habit-5.png";
import habit6 from "@/assets/report-habit-6.png";
import habit7 from "@/assets/report-habit-7.png";
import {
  Utensils,
  Brain,
  Smartphone,
  Droplets,
  Wheat,
  Candy,
  Wind,
  CheckCircle2,
  Sparkles,
  Heart,
} from "lucide-react";

const habits = [
  {
    number: "01",
    image: habit1,
    icon: Utensils,
    title: "Not Chewing Food Enough Before Swallowing",
    intro:
      "This is a massive one. <strong>Most people only chew a few times before swallowing it down the hatch.</strong> This puts an intense amount of pressure on your stomach to break it all down.",
    body: [
      "If you don't chew well, food doesn't break down properly, and bits of food get left in the gut, undigested. This food produces gases like hydrogen, methane, and sulphur, which <strong>blow up your belly like a balloon.</strong> Sound familiar? Well, now you know why.",
      "The key is to <strong>keep chewing until the food feels like a paste inside your mouth.</strong> If you feel like you could chew more, DO IT, it takes a lot of stress off your digestive system, and your gut will thank you for it.",
    ],
  },
  {
    number: "02",
    image: habit2,
    icon: Brain,
    title: "Eating While Stressed",
    intro:
      "Have you ever heard of the terms <strong>'Fight or Flight'</strong> and <strong>'Rest &amp; Digest'</strong>? Well these aren't just sayings, they're practically instructions that you can follow.",
    body: [
      "You see, when it comes to eating (digesting), your body is designed to do it in a calm and relaxed state. Your gut works its best when you eat without stress, that's why 'Digest' is associated with 'Rest'.",
      "When you're stressed, your brain tells the gut to slow down. <strong>It stops stomach acid, stops enzyme production, and food just sits in your gut and ferments.</strong> This is part of what we call the <strong>gut-brain axis</strong>. It's a two-way connection between your brain and your gut, and when it's out of balance, symptoms show up quickly.",
    ],
    tipTitle: "Easy ways to signal your gut it's digestion time:",
    tips: [
      "Take 3 deep breaths before starting your meal.",
      "Avoid stressful conversations at the dinner table.",
      "If you're really struggling to relax, use calming rituals like soft music, herbal teas, or calming herbs such as passionflower, oats green, or skullcap.",
    ],
  },
  {
    number: "03",
    image: habit3,
    icon: Smartphone,
    title: "Eating While Distracted",
    intro:
      "Not only does your gut slow down when you're stressed, but it <strong>also slows down when you eat while distracted.</strong>",
    body: [
      "This includes having meals as you walk, drive, work, and scroll through social media.",
      "Your brain needs to <strong>signal to your gut that it's digestion time</strong>, so the next time you eat, keep the following in mind:",
    ],
    tipTitle: "Keep this in mind at every meal:",
    tips: [
      "Keep your phone far away from you.",
      "Eat sitting down, away from a laptop, and away from your TV.",
      "Smell your food before taking a bite, this keeps you in the present moment.",
    ],
  },
  {
    number: "04",
    image: habit4,
    icon: Droplets,
    title: "Drinking Too Much Water With Your Meals",
    intro:
      "This is one of the most common mistakes I see in practice. We're always told to \"drink more water,\" but <strong>timing is everything.</strong> When you gulp down a large glass of water while eating, you are essentially <strong>drowning your digestive fire.</strong>",
    body: [
      "Your stomach needs a specific level of acidity (<strong>hydrochloric acid</strong>) to break down proteins from food and activate digestive enzymes. When you fill up that acid with liters of water, <strong>it gets diluted and your stomach can't do its job properly.</strong>",
      "This means food just sits in your gut, half-digested, beginning to ferment and release the very gases that leave you feeling tight and bloated.",
    ],
    tipTitle: "How you can avoid this:",
    tips: [
      "Stop drinking liquids 15 minutes before your meal.",
      "Wait at least 30-60 minutes after eating before reaching for your water bottle.",
      "If you must drink during a meal, stick to small sips of room-temperature water or ginger tea to aid digestion.",
    ],
  },
  {
    number: "05",
    image: habit5,
    icon: Wheat,
    title: "Taking The Wrong Type of Fibre",
    intro:
      "We've been conditioned to think that if we're bloated or backed up, we just need \"more fibre.\" But for many women, throwing a massive scoop of harsh, insoluble fibre (like wheat bran or certain psyllium husks) into an already inflamed gut is like <strong>throwing petrol on a fire.</strong>",
    body: [
      "If your gut microbiome is out of balance, certain fibres act as a <strong>buffet for the wrong kind of bacteria.</strong> They ferment too quickly, creating a <strong>massive buildup of pressure</strong>, which leads to bloating.",
    ],
    tipTitle: "How to always stay on the safe side:",
    tips: [
      "Switch to gentle fibres like partially hydrolysed guar gum (PHGG) or cooked, cooled root veggies.",
      "Focus on taking 'soluble' fibre that moves through the system smoothly without the explosive gas production.",
      "Introduce fibre in your diet slowly, don't go from zero to hero overnight, you'll overwhelm your gut and make things worse.",
    ],
  },
  {
    number: "06",
    image: habit6,
    icon: Candy,
    title: 'Falling For The "Sugar-Free" Marketing Trap',
    intro:
      "I see so many women trying to do the \"right thing\" by choosing sugar-free snacks, protein bars, or \"diet\" treats. And while they might sound healthier, to make those foods taste good, manufacturers pack them with <strong>sugar alcohols like Sorbitol, Xylitol, and Erythritol.</strong>",
    body: [
      "These are known as <strong>polyols</strong>, and they are notorious for causing <strong>\"osmotic\" bloating.</strong> Your body can't fully absorb them, so they sit in your large intestine, <strong>drawing in water and being fermented by bacteria.</strong>",
    ],
    tipTitle: "A golden rule you can follow:",
    tips: [
      "Check your snack labels for any ingredients ending in '-itol' and avoid them at all costs.",
      "If you want something sweet, stick to a small piece of whole fruit or high quality dark chocolate.",
      'Always remember: "Sugar-Free" does NOT mean "Gut-Friendly."',
    ],
  },
  {
    number: "07",
    image: habit7,
    icon: Wind,
    title: "Drinking Through Straws",
    intro:
      "It sounds so innocent, doesn't it? Whether it's your iced coffee, iced tea, or a green smoothie, using a straw is a <strong>one-way ticket to \"Aerophagia\"</strong>, which is just a fancy medical term for <strong>swallowing air.</strong>",
    body: [
      "Every time you take a sip through a straw, you're <strong>sucking in the air that's trapped in the top of the straw</strong> before the liquid reaches your mouth. That air has nowhere to go but down into your digestive tract. This trapped gas is often what causes that <strong>sharp, stabbing pain high up in your abdomen</strong>, and also bloats your stomach.",
    ],
    tipTitle: "A guideline you can follow daily:",
    tips: [
      "Ditch straws entirely and sip directly from the glass/bottle.",
      'Avoid "sports-cap" water bottles that require a sucking motion.',
    ],
  },
];

const Report = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    const el = containerRef.current;
    if (el) {
      el.querySelectorAll(".reveal").forEach((c) => observer.observe(c));
    }
    return () => observer.disconnect();
  }, []);


  return (
    <>
      <SEO
        title="7 Habits That Cause Bloating After Every Meal | Guide"
        description="The free NXTLVL Health guide: seven overlooked daily habits a naturopath says make women bloat after every meal, and exactly what to do instead."
        canonical="/guide"
        keywords="bloating, gut health, naturopath Brisbane, women bloating causes, bloated after eating, NXTLVL Health"
      />

      <style>{`
        .reveal {
          opacity: 0;
          transform: translate3d(0, 30px, 0);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .reveal.animate-in {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
        .reveal.delay-1 { transition-delay: 0.1s; }
        .reveal.delay-2 { transition-delay: 0.2s; }
        .reveal.delay-3 { transition-delay: 0.3s; }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .float-slow { animation: float-slow 6s ease-in-out infinite; }

        @keyframes bounce-arrow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .bounce-arrow { animation: bounce-arrow 2s ease-in-out infinite; }

        .hero-headline-shadow {
          text-shadow: 0 2px 8px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.4);
        }

        @media (prefers-reduced-motion: reduce), (max-width: 767px) {
          .reveal, .reveal.animate-in {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .float-slow, .bounce-arrow { animation: none; }
        }
      `}</style>

      <div ref={containerRef} className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${mitchAnalysis})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" aria-hidden="true" />
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/40 blur-3xl float-slow" />
            <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary/30 blur-3xl float-slow" />
          </div>

          <div className="absolute top-5 left-5 sm:top-7 sm:left-8 z-10">
            <a href="/" aria-label="NXTLVL Health home">
              <img
                src={nxtlvlLogoWhite}
                alt="NXTLVL Health logo"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain"
                loading="eager"
              />
            </a>
          </div>

          <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28 text-center">
            <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[hsl(174_70%_65%)] text-xs sm:text-sm uppercase tracking-widest font-semibold mb-8">
              <Sparkles className="h-4 w-4" />
              Naturopath's Confidential Guide
            </div>

            <h1 className="reveal delay-1 font-bold leading-[1.1] tracking-tight mb-8 max-w-4xl mx-auto hero-headline-shadow">
              <span className="block text-3xl sm:text-5xl md:text-6xl text-white/90 mb-3">
                Expert Naturopath Reveals
              </span>
              <span className="block text-3xl sm:text-5xl md:text-6xl text-[hsl(174_75%_58%)] mb-3">
                7 Crazily Overlooked Habits
              </span>
              <span className="block text-3xl sm:text-5xl md:text-6xl text-white/90 font-semibold">
                That Cause Women To Bloat After Every Single Meal
              </span>
            </h1>

            <p className="reveal delay-2 text-xl sm:text-2xl text-white font-bold max-w-2xl mx-auto italic">
              (No Doctor Will Tell You This.)
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section id="report-start" className="py-16 md:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="reveal mb-8 text-sm uppercase tracking-widest text-primary font-semibold">
              An Open Letter
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p className="reveal text-2xl md:text-3xl font-semibold leading-snug text-foreground">
                To the women that go doctor to doctor only to be more and more confused about their bloating, this one's for you.
              </p>

              <p className="reveal">
                I've heard your same frustrations from thousands of other women in my online consults with women across Brisbane, and I know it's not your fault.
              </p>

              <p className="reveal">
                You feel like a balloon after eating anything, you go to your GP to try and get answers, <strong className="font-bold text-foreground">they give you another pill that solves nothing</strong> (or even gives you more issues), and you're left more lost with each visit.
              </p>

              <p className="reveal italic text-foreground/80 border-l-4 border-primary pl-5">
                Why is this? What's happening here? Why does it feel like no one can help you on this seemingly simple problem?
              </p>

              <p className="reveal">
                I'll tell you exactly why, <strong className="font-bold text-foreground">it all stems from your daily habits</strong>, habits that you do without a second thought.
              </p>

              <p className="reveal">
                These overlooked habits are <strong className="font-bold text-foreground">silent but deadly killers for your gut health</strong>, leaving your tummy screaming for help after every meal.
              </p>

              <p className="reveal font-semibold text-foreground">
                So, if you keep reading on, I'll uncover the 7 detrimental habits that destroy your gut, and that most women I've helped were mindlessly doing on a daily basis. Let's jump in.
              </p>
            </div>

          </div>
        </section>

        {/* HABITS */}
        <section className="pb-16 md:pb-24 bg-gradient-to-b from-background to-muted/40">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-12 md:space-y-20">
            {habits.map((h, i) => {
              const Icon = h.icon;
              return (
                <article
                  key={h.number}
                  id={`habit-${i + 1}`}
                  className="reveal scroll-mt-24"
                >
                  {/* Habit header card */}
                  <div className="relative bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
                    {/* Top stripe */}
                    <div className="h-2 bg-primary" />

                    <div className="p-6 sm:p-10">
                      <div className="flex items-start gap-5 sm:gap-7 mb-6">
                        <div className="flex-shrink-0 relative">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary to-[hsl(174_60%_38%)] text-white flex items-center justify-center shadow-lg">
                            <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                          </div>
                          <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider shadow-md">
                            #{i + 1}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="text-xs uppercase tracking-widest text-primary font-bold mb-2">
                            Habit {h.number}
                          </div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                            {h.title}
                          </h3>
                        </div>
                      </div>

                      {h.image && (
                        <div className="mb-7 -mx-6 sm:-mx-10 overflow-hidden">
                          <img
                            src={h.image}
                            alt={h.title}
                            loading="lazy"
                            className="w-full h-56 sm:h-72 md:h-80 object-cover"
                          />
                        </div>
                      )}

                      <div className="space-y-5 text-base sm:text-lg leading-relaxed text-foreground/85">
                        <p
                          className="text-lg sm:text-xl font-medium text-foreground/95 border-l-4 border-primary pl-5 italic [&_strong]:text-primary [&_strong]:font-bold [&_strong]:not-italic"
                          dangerouslySetInnerHTML={{ __html: h.intro }}
                        />
                        {h.body.map((p, idx) => (
                          <p
                            key={idx}
                            className="[&_strong]:text-foreground [&_strong]:font-bold"
                            dangerouslySetInnerHTML={{ __html: p }}
                          />
                        ))}
                      </div>

                      {h.tips && (
                        <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary/8 to-[hsl(174_60%_45%)]/10 border border-primary/20 p-6 sm:p-7">
                          <div className="flex items-center gap-2 mb-4">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <h4 className="font-bold text-foreground">{h.tipTitle}</h4>
                          </div>
                          <ul className="space-y-3">
                            {h.tips.map((tip, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                                  {idx + 1}
                                </span>
                                <span className="text-foreground/85 leading-relaxed">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* CLOSING */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="reveal text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs uppercase tracking-widest font-bold mb-5">
                <Heart className="h-4 w-4" />
                Where To Go From Here?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Your Next Meal Can Be A Turning Point
              </h2>
            </div>

            <div className="reveal space-y-5 text-lg leading-relaxed text-foreground/90">
              <p>
                If you've been doing just three or four of these habits daily, it's no wonder you're feeling the way you do. But the good news is, you have the power to change this starting with your very next meal.
              </p>
              <p className="font-semibold text-foreground">
                By removing these 7 triggers, you're giving your gut the space it needs to heal itself.
              </p>
            </div>

            <div className="reveal mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/8 to-transparent border-l-4 border-primary">
              <p className="text-foreground/85 mb-2">To your health,</p>
              <p className="text-2xl font-bold text-primary">Mitchell Potts</p>
              <p className="text-sm text-foreground/70">Naturopath at NXTLVL Health</p>
            </div>

            {/* CTA */}
            <div className="reveal mt-14 text-center bg-gradient-to-br from-[hsl(174_100%_18%)] to-[hsl(174_60%_30%)] rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                Ready To Finally Beat The Bloat For Good?
              </h3>
              <p className="text-white/85 mb-8 max-w-xl mx-auto">
                Book a FREE 15-minute consult with Mitch and get a personalised gut plan made just for you.
              </p>
              <div className="flex flex-col items-center gap-2">
                <Button
                  asChild
                  className="bg-white text-[hsl(174_100%_22%)] hover:bg-white/90 font-bold text-base sm:text-lg px-8 py-6 rounded-full shadow-xl"
                >
                  <a href="/#free-consult">Book Free Consult With Mitch</a>
                </Button>
                <p className="text-xs text-white/70 font-medium mt-1">
                  Brisbane's #1 Most Wanted Bloat Killer
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Report;
