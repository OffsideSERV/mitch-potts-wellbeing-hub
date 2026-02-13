import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Heart, Brain, Zap, Moon, Dumbbell, Users, BookOpen, Shield } from "lucide-react";
import Footer from "@/components/Footer";

const NXTLVLResetLearnMore = () => {
  return (
    <>
      <Helmet>
        <title>Learn More About NXTLVL Reset | 12 Week Health Transformation</title>
        <meta
          name="description"
          content="Discover how the NXTLVL Reset 12-week program helps busy professionals overcome fatigue, gut issues, and stress through evidence-based nutrition, supplements, and structured lifestyle strategies."
        />
        <meta name="keywords" content="NXTLVL Reset program details, 12 week health reset, naturopath Brisbane, gut reset program, stress management program, energy restoration" />
        <link rel="canonical" href="https://www.nxtlvlhealth.com.au/nxtlvl-reset/learn-more" />
      </Helmet>

      <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)' }}>

        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--nxt-orange))_0%,transparent_50%)] opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <img src="/nxtlvl-reset-logo.jpeg" alt="NXTLVL Reset" className="h-20 md:h-28 mx-auto" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-nxt-white mb-6 leading-tight">
                12 Weeks to Rebuild &amp;
                <span className="block text-nxt-orange">Reclaim Your Health</span>
              </h1>
              <p className="text-xl md:text-2xl text-nxt-white/80 mb-4 max-w-3xl mx-auto leading-relaxed">
                A guided reset to fuel your body, rebuild your energy and take back control of your gut, stress, sleep and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <Button size="lg" className="bg-nxt-orange hover:bg-nxt-orange-light text-nxt-black font-semibold px-8 py-4 text-lg transition-nxt shadow-orange" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/nxtlvl-30-15-min-call" target="_blank" rel="noopener noreferrer">
                    Book Your Discovery Call
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-nxt-white bg-white text-nxt-black hover:bg-nxt-orange hover:text-nxt-black hover:border-nxt-orange px-8 py-4 text-lg transition-nxt" asChild>
                  <a href="https://nxtlvl-health-quiz.scoreapp.com" target="_blank" rel="noopener noreferrer">
                    Take the Health Quiz
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Does This Feel Familiar? */}
        <section className="py-16 md:py-20" style={{ background: 'linear-gradient(180deg, #1a1a1a, #111)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-nxt-white/60 text-lg mb-2">Be honest…</p>
              <h2 className="text-3xl md:text-5xl font-bold text-nxt-white mb-10">
                Does this feel <span className="text-nxt-orange">familiar?</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Moon, text: "Tired even after a full night of sleep" },
                  { icon: Heart, text: "Your gut feels bloated or unsettled most days" },
                  { icon: Brain, text: "Your mind feels foggy or flat" },
                  { icon: Zap, text: "Stress is hard to switch off" },
                  { icon: Dumbbell, text: "Your weight, mood or energy will not shift no matter what you try" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                    <item.icon className="h-6 w-6 text-nxt-orange flex-shrink-0 mt-1" />
                    <p className="text-nxt-white/90 text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-2xl md:text-3xl font-bold text-nxt-white mb-2">
                  Your body is asking for a <span className="bg-nxt-orange text-nxt-black px-3 py-1 rounded-md font-extrabold">RESET</span>
                </p>
                <p className="text-nxt-orange text-xl mt-4 font-medium">You can feel better than this.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Program Framework */}
        <section className="py-16 md:py-20" style={{ background: '#111' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-bold text-nxt-white mb-4">
                  A Clear Framework That <span className="text-nxt-orange">Restores Your Body</span> Step by Step
                </h2>
                <p className="text-nxt-white/70 text-lg max-w-3xl mx-auto">
                  Our reset program follows a structured, evidence-based approach designed to progressively rebuild your health from the inside out.
                </p>
              </div>

              <div className="space-y-8">
                {/* Phase 1 */}
                <Card className="bg-white/5 border-white/10 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-nxt-orange text-nxt-black font-bold text-sm px-3 py-1 rounded-full">Phase 1</span>
                      <span className="text-nxt-white/50 text-sm">Weeks 1–4</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-nxt-white mb-4">Detox &amp; Foundation</h3>
                    <p className="text-nxt-white/80 text-lg mb-4">
                      Calm the gut, lower inflammation and reset your system. This is where your body begins to let go of the overwhelm.
                    </p>
                    <p className="text-nxt-white/60">
                      During this foundational phase, we focus on removing dietary triggers, introducing targeted supplements to reduce gut inflammation, and establishing the daily habits that will carry you through the full 12 weeks. You'll begin to notice improved digestion, reduced bloating, and a clearer headspace as your body starts to detoxify and recalibrate.
                    </p>
                  </CardContent>
                </Card>

                {/* Phase 2 */}
                <Card className="bg-white/5 border-white/10 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-nxt-orange text-nxt-black font-bold text-sm px-3 py-1 rounded-full">Phase 2</span>
                      <span className="text-nxt-white/50 text-sm">Weeks 5–8</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-nxt-white mb-4">Gut &amp; Nervous System Reset</h3>
                    <p className="text-nxt-white/80 text-lg mb-4">
                      Repair the gut lining, support digestion and rebuild stress balance. Your energy begins to lift and your body starts to feel lighter.
                    </p>
                    <p className="text-nxt-white/60">
                      With the foundation in place, Phase 2 targets deeper gut repair — restoring the intestinal lining, rebalancing gut flora, and calming your nervous system. You'll work on stress resilience techniques, optimise your nutrition plan, and start to feel a real shift in energy, mood, and mental clarity. This is where the transformation truly accelerates.
                    </p>
                  </CardContent>
                </Card>

                {/* Phase 3 */}
                <Card className="bg-white/5 border-white/10 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-nxt-orange text-nxt-black font-bold text-sm px-3 py-1 rounded-full">Phase 3</span>
                      <span className="text-nxt-white/50 text-sm">Weeks 9–12</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-nxt-white mb-4">Integration &amp; Resilience</h3>
                    <p className="text-nxt-white/80 text-lg mb-4">
                      Build routines that last. Strengthen your body and mind. This is where you regain confidence in your health and yourself.
                    </p>
                    <p className="text-nxt-white/60">
                      The final phase is all about locking in your results for the long term. You'll solidify the habits, nutrition strategies, and movement patterns that keep you feeling your best. We focus on building resilience — both physical and mental — so you leave the program empowered, confident, and equipped with a sustainable health blueprint that lasts well beyond the 12 weeks.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Led by Mitchell Potts */}
        <section className="py-16 md:py-20" style={{ background: 'linear-gradient(180deg, #111, #1a1a1a)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-nxt-orange font-semibold text-sm uppercase tracking-wider mb-2 block">Your Practitioner</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-nxt-white mb-6">
                    Led by Naturopath<br />
                    <span className="text-nxt-orange">Mitchell Potts (BHSc)</span>
                  </h2>
                  <p className="text-nxt-white/80 text-lg mb-6 leading-relaxed">
                    The NXTLVL Reset combines evidence-based nutrition, practitioner-grade supplements and structured lifestyle strategies to help busy professionals restore their energy and health.
                  </p>
                  <p className="text-nxt-white/70 mb-6">
                    Mitchell has helped hundreds of clients to:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Overcome fatigue & burnout",
                      "Improve gut health & digestion",
                      "Sleep better & manage stress",
                      "Rebuild strength & mood",
                      "Create sustainable routines that last long-term"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-nxt-white/90">
                        <CheckCircle className="h-5 w-5 text-nxt-orange flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-nxt-orange/20 rounded-2xl blur-xl" />
                    <img
                      src="/lovable-uploads/naturopath-consultation-mitch.png"
                      alt="Mitchell Potts - Naturopath & NXTLVL Reset Creator"
                      className="relative rounded-2xl w-full max-w-md shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 md:py-20" style={{ background: '#111' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-bold text-nxt-white mb-4">
                  What's <span className="text-nxt-orange">Included?</span>
                </h2>
                <p className="text-nxt-white/70 text-lg max-w-3xl mx-auto">
                  The 12 Week NXTLVL Reset is packed with everything you need to reset, rebuild and reclaim your health. From supplements and nutrition to movement and support, it's all here for you.
                </p>
              </div>

              {/* Core Inclusions */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-nxt-orange mb-6 uppercase tracking-wider">Core Inclusions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Phase-by-phase supplement protocol", desc: "Carefully designed supplement stacks that change with each phase of your program to target exactly what your body needs at each stage." },
                    { title: "Practitioner-grade supplements", desc: "High-quality, evidence-based supplements you won't find on supermarket shelves — selected specifically for gut repair, nervous system support, and energy restoration." },
                    { title: "Nutrition plans & guidance", desc: "Personalised meal frameworks and nutrition strategies designed to reduce inflammation, support gut healing, and fuel sustained energy throughout your day." },
                    { title: "Private fitness app access", desc: "Full access to a dedicated fitness app with structured workout programs tailored to your fitness level and recovery needs." },
                    { title: "Exercise programming with video demos", desc: "Follow along with professional video demonstrations so you can train with confidence — whether at home or in the gym." },
                    { title: "Strength & fitness testing", desc: "Baseline and progress fitness assessments to track your physical improvements and keep you motivated throughout the 12 weeks." },
                    { title: "Recovery tools", desc: "Guided recovery protocols including stretching routines, breathwork, and stress management techniques to support your body between sessions." },
                    { title: "Group coaching", desc: "Regular group coaching sessions that provide accountability, motivation, and a supportive community of like-minded people on the same journey." },
                  ].map((item, i) => (
                    <Card key={i} className="bg-white/5 border-white/10">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-nxt-orange flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-nxt-white font-semibold mb-1">{item.title}</p>
                            <p className="text-nxt-white/60 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Also Included */}
              <div>
                <h3 className="text-xl font-bold text-nxt-orange mb-6 uppercase tracking-wider">Also Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: Users, title: "1:1 Naturopathic consultations", desc: "Private sessions with Mitchell to review your progress, adjust your plan, and address your individual health concerns." },
                    { icon: Users, title: "Group coaching calls", desc: "Live group sessions for education, Q&A, and community connection with fellow Reset participants." },
                    { icon: Shield, title: "Accountability check-ins", desc: "Regular check-ins to keep you on track, celebrate wins, and troubleshoot any challenges along the way." },
                    { icon: Zap, title: "Online support", desc: "Ongoing access to your practitioner and program resources between sessions for questions and guidance." },
                    { icon: Heart, title: "Health optimisation testing", desc: "Targeted health assessments to identify areas for improvement and track your transformation with data." },
                    { icon: BookOpen, title: "Symptom tracking", desc: "Tools and frameworks to monitor your symptoms, energy, mood, and digestion throughout the program." },
                    { icon: BookOpen, title: "Educational modules", desc: "In-depth learning modules covering gut health, nutrition, stress management, sleep optimisation, and more." },
                    { icon: Users, title: "Wellness webinars", desc: "Exclusive webinars on advanced health topics to deepen your understanding and keep you inspired." },
                    { icon: Brain, title: "Mental strength & confidence coaching", desc: "Mindset tools and coaching to build mental resilience, self-belief, and a positive relationship with your health." },
                    { icon: BookOpen, title: "Weekly habit-building protocols", desc: "Step-by-step weekly habit guides that make sustainable change simple and achievable." },
                    { icon: Users, title: "Community support", desc: "Connect with a community of like-minded people who understand your journey and cheer you on." },
                    { icon: Brain, title: "Stress management tools", desc: "Practical techniques for managing stress including breathwork, mindfulness, and nervous system regulation." },
                    { icon: Heart, title: "Access to further testing", desc: "Opportunity for deeper investigation into genetics, hormones, heavy metals, gut health and more at discounted rates." },
                    { icon: Shield, title: "Continued discounts on supplementation", desc: "Ongoing access to practitioner-grade supplements at discounted rates even after your program ends." },
                  ].map((item, i) => (
                    <Card key={i} className="bg-white/5 border-white/10">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3">
                          <item.icon className="h-5 w-5 text-nxt-orange flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-nxt-white font-semibold text-sm mb-1">{item.title}</p>
                            <p className="text-nxt-white/50 text-xs">{item.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feel Lighter Section */}
        <section className="py-16 md:py-20" style={{ background: 'linear-gradient(180deg, #111, #1a1a1a)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-nxt-white mb-6">
                Feel <span className="text-nxt-orange">Lighter, Clearer</span> and More Energised in Just 12 Weeks
              </h2>
              <p className="text-xl text-nxt-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join now to <strong className="text-nxt-white">reset</strong> your gut, energy, stress, sleep and <strong className="text-nxt-white">performance</strong>. The NXTLVL Reset isn't just another health program — it's a complete system designed to help you feel like yourself again.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                {[
                  { value: "90%", label: "Report improved energy levels" },
                  { value: "85%", label: "Experience better digestion" },
                  { value: "80%", label: "Feel less stressed & anxious" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <p className="text-4xl font-bold text-nxt-orange mb-2">{stat.value}</p>
                    <p className="text-nxt-white/70 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20" style={{ background: '#1a1a1a' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-nxt-white mb-6">
                Ready to <span className="text-nxt-orange">Reset?</span>
              </h2>
              <p className="text-xl text-nxt-white/70 mb-8 max-w-2xl mx-auto">
                Take the first step today. Book a free discovery call with Mitchell to find out if the NXTLVL Reset is right for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <Button size="lg" className="bg-nxt-orange hover:bg-nxt-orange-light text-nxt-black font-semibold px-8 py-4 text-lg transition-nxt shadow-orange" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/nxtlvl-30-15-min-call" target="_blank" rel="noopener noreferrer">
                    Book Your Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-nxt-white bg-white text-nxt-black hover:bg-nxt-orange hover:text-nxt-black hover:border-nxt-orange px-8 py-4 text-lg transition-nxt" asChild>
                  <a href="https://nxtlvl-health-quiz.scoreapp.com" target="_blank" rel="noopener noreferrer">
                    Take the 5-Minute Health Quiz
                  </a>
                </Button>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-nxt-white mb-4">Have Questions?</h3>
                <p className="text-nxt-white/70 mb-4">
                  Not sure if the NXTLVL Reset is right for you? Book a free discovery call and chat with Mitchell — no pressure, no obligation.
                </p>
                <a
                  href="https://calendly.com/nxtlvlhealth-info/nxtlvl-30-15-min-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nxt-orange hover:text-nxt-orange-light underline transition-nxt font-medium"
                >
                  Book Your Free Discovery Call →
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default NXTLVLResetLearnMore;
