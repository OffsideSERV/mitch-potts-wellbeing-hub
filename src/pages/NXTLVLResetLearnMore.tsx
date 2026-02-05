import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowLeft, Calendar, Brain, Heart, Dumbbell, Moon, Zap, Users, BookOpen, MessageCircle, Target, Activity, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import mitchPottsProfile from "@/assets/mitch-potts-profile.png";

const NXTLVLResetLearnMore = () => {
  return (
    <>
      <Helmet>
        <title>Learn More About NXTLVL Reset - 12 Week Health Transformation | Brisbane</title>
        <meta 
          name="description" 
          content="Discover how the NXTLVL Reset 12-week program can help you overcome fatigue, improve gut health, manage stress, and rebuild your energy. Led by Naturopath Mitchell Potts."
        />
        <meta name="keywords" content="NXTLVL Reset, 12 week program, naturopath Brisbane, gut health, stress management, fatigue, energy, Mitchell Potts" />
        <link rel="canonical" href="https://www.nxtlvlhealth.com.au/nxtlvl-reset/learn-more" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)' }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--nxt-orange))_0%,transparent_50%)] opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Link to="/nxtlvl-reset" className="inline-flex items-center text-nxt-white/70 hover:text-nxt-orange mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to NXTLVL Reset
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-nxt-white mb-6 leading-tight">
                12 Weeks to Rebuild and
                <span className="block text-nxt-orange">Reclaim Your Health</span>
              </h1>
              <p className="text-xl md:text-2xl text-nxt-white/80 mb-8 leading-relaxed">
                A guided reset to fuel your body, rebuild your energy and take back control of your gut, stress, sleep and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-nxt-orange hover:bg-nxt-orange-light text-nxt-black font-semibold px-8 py-4 text-lg" asChild>
                  <a href="https://nxtlvl-health-quiz.scoreapp.com" target="_blank" rel="noopener noreferrer">
                    Take the Health Quiz
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-nxt-white bg-nxt-white text-nxt-black hover:bg-nxt-orange hover:border-nxt-orange px-8 py-4 text-lg" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/nxtlvl-30-15-min-call" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Discovery Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Does This Feel Familiar Section */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-nxt-orange font-medium mb-2">Be honest...</p>
              <h2 className="text-3xl md:text-5xl font-bold text-nxt-black mb-8">
                Does this feel familiar?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: Moon, text: "Tired even after a full night of sleep" },
                  { icon: Activity, text: "Your gut feels bloated or unsettled most days" },
                  { icon: Brain, text: "Your mind feels foggy or flat" },
                  { icon: Zap, text: "Stress is hard to switch off" },
                  { icon: Target, text: "Your weight, mood or energy will not shift no matter what you try" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                    <div className="p-2 bg-nxt-orange/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-nxt-orange" />
                    </div>
                    <p className="text-lg text-nxt-grey">{item.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center p-8 bg-nxt-black rounded-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-nxt-white mb-4">
                  Your body is asking for a <span className="text-nxt-orange">RESET</span>
                </h3>
                <p className="text-xl text-nxt-white/80">
                  You can feel better than this.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Promise Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-nxt-black mb-6">
                Feel <span className="text-nxt-orange">Lighter</span>, Clearer and More Energised
              </h2>
              <p className="text-xl text-nxt-grey mb-8">
                in just <strong>12 weeks</strong>
              </p>
              <p className="text-lg text-nxt-grey max-w-2xl mx-auto">
                Join now to <strong>reset your gut, energy, stress, sleep</strong> and <strong>performance</strong>. 
                The NXTLVL Reset combines evidence-based nutrition, practitioner-grade supplements and 
                structured lifestyle strategies to help busy professionals restore their energy and health.
              </p>
            </div>
          </div>
        </section>

        {/* Meet Your Guide Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-nxt-orange font-medium mb-2">Led by Naturopath</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-nxt-black mb-6">
                    Mitchell Potts (BHSc)
                  </h2>
                  <p className="text-lg text-nxt-grey mb-8">
                    Mitchell has helped hundreds of clients to transform their health through evidence-based 
                    naturopathic care. His approach combines the best of traditional wisdom with modern 
                    functional medicine.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Overcome fatigue & burnout",
                      "Improve gut health & digestion",
                      "Sleep better & manage stress",
                      "Rebuild strength & mood",
                      "Create sustainable routines that last long-term",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="p-1 bg-nxt-orange rounded-full">
                          <Check className="h-4 w-4 text-nxt-black" />
                        </div>
                        <span className="text-nxt-grey">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-nxt-orange/20 to-nxt-orange/5 rounded-2xl p-8 text-center">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                    <img 
                      src={mitchPottsProfile} 
                      alt="Mitchell Potts - Naturopath" 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: '40% center' }}
                    />
                  </div>
                  <p className="text-lg font-semibold text-nxt-black">Mitchell Potts</p>
                  <p className="text-nxt-grey">Bachelor of Health Science (Naturopathy)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 3 Phases Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-nxt-black mb-6">
                  Our Clear Framework
                </h2>
                <p className="text-xl text-nxt-grey max-w-2xl mx-auto">
                  The reset program follows a clear framework that <strong>restores your body step by step</strong>.
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    phase: "Phase 1",
                    title: "Detox & Foundation",
                    description: "Calm the gut, lower inflammation and reset your system. This is where your body begins to let go of the overwhelm.",
                    color: "from-teal-500 to-teal-600",
                    icon: Sparkles,
                  },
                  {
                    phase: "Phase 2",
                    title: "Gut & Nervous System Reset",
                    description: "Repair the gut lining, support digestion and rebuild stress balance. Your energy begins to lift and your body starts to feel lighter.",
                    color: "from-nxt-orange to-orange-500",
                    icon: Heart,
                  },
                  {
                    phase: "Phase 3",
                    title: "Integration & Resilience",
                    description: "Build routines that last. Strengthen your body and mind. This is where you regain confidence in your health and yourself.",
                    color: "from-slate-700 to-slate-800",
                    icon: Target,
                  },
                ].map((phase, index) => (
                  <div key={index} className="relative">
                    <div className={`bg-gradient-to-r ${phase.color} rounded-2xl p-8 md:p-12 text-white`}>
                      <div className="flex items-start gap-6">
                        <div className="p-3 bg-white/20 rounded-xl">
                          <phase.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <p className="text-white/80 font-medium mb-1">{phase.phase}</p>
                          <h3 className="text-2xl md:text-3xl font-bold mb-4">{phase.title}</h3>
                          <p className="text-lg text-white/90 max-w-2xl">{phase.description}</p>
                        </div>
                      </div>
                    </div>
                    {index < 2 && (
                      <div className="absolute left-12 -bottom-4 w-1 h-8 bg-gradient-to-b from-slate-300 to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-nxt-black mb-6">
                  What's Included?
                </h2>
                <p className="text-xl text-nxt-grey max-w-2xl mx-auto">
                  The 12 Week NXTLVL Reset is packed with everything you need to reset, rebuild and reclaim your health.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Core Inclusions */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                  <h3 className="text-2xl font-bold text-nxt-black mb-6 flex items-center gap-3">
                    <div className="p-2 bg-nxt-orange/10 rounded-lg">
                      <Dumbbell className="h-6 w-6 text-nxt-orange" />
                    </div>
                    Core Program
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Phase-by-phase supplement protocol",
                      "Practitioner grade supplements",
                      "Nutrition plans & guidance",
                      "Private fitness app access",
                      "Exercise programming with video demos",
                      "Strength & fitness testing",
                      "Recovery tools",
                      "Group coaching sessions",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-nxt-orange flex-shrink-0" />
                        <span className="text-nxt-grey">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support & Resources */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                  <h3 className="text-2xl font-bold text-nxt-black mb-6 flex items-center gap-3">
                    <div className="p-2 bg-teal-500/10 rounded-lg">
                      <Users className="h-6 w-6 text-teal-600" />
                    </div>
                    Support & Resources
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "1:1 Naturopathic consultations",
                      "Group coaching calls",
                      "Accountability check-ins",
                      "Online support",
                      "Health optimisation testing",
                      "Symptom tracking",
                      "Educational modules",
                      "Wellness webinars",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-teal-600 flex-shrink-0" />
                        <span className="text-nxt-grey">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mindset & Habits */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                  <h3 className="text-2xl font-bold text-nxt-black mb-6 flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Brain className="h-6 w-6 text-purple-600" />
                    </div>
                    Mindset & Habits
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Mental strength and confidence coaching",
                      "Weekly habit-building protocols",
                      "Stress management tools",
                      "Community support",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-nxt-grey">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bonus Access */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                  <h3 className="text-2xl font-bold text-nxt-black mb-6 flex items-center gap-3">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                      <BookOpen className="h-6 w-6 text-amber-600" />
                    </div>
                    Bonus Access
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Access to further testing and analysis of genetics, gut health, hormones, heavy metals and more",
                      "Continued discounts on ongoing supplementation",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-amber-600 flex-shrink-0" />
                        <span className="text-nxt-grey">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competition Section */}
        <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <p className="text-teal-100 font-medium mb-2">Join the NXTLVL Reset!</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Register today and go in the draw to <span className="underline decoration-4 underline-offset-4">WIN</span>
              </h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <p className="text-2xl md:text-3xl font-semibold">
                  A 12 week online exercise program<br />
                  <span className="text-teal-200">OR</span><br />
                  A 12 week personalised nutrition plan!
                </p>
              </div>
              <Button size="lg" className="bg-nxt-black hover:bg-nxt-black/90 text-white font-semibold px-8 py-4 text-lg" asChild>
                <a href="https://nxtlvl-health-quiz.scoreapp.com" target="_blank" rel="noopener noreferrer">
                  Enter Now - Take the Health Quiz
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-nxt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-nxt-white mb-6">
                Ready to Reset Your Health?
              </h2>
              <p className="text-xl text-nxt-white/80 mb-8 max-w-2xl mx-auto">
                Join busy professionals who have already transformed their energy, digestion, 
                and overall wellbeing with the NXTLVL Reset program.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button size="lg" className="bg-nxt-orange hover:bg-nxt-orange-light text-nxt-black font-semibold px-8 py-4 text-lg" asChild>
                  <a href="https://nxtlvl-health-quiz.scoreapp.com" target="_blank" rel="noopener noreferrer">
                    Start With A 5-minute Health Quiz
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-nxt-white bg-nxt-white text-nxt-black hover:bg-nxt-orange hover:border-nxt-orange px-8 py-4 text-lg" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/nxtlvl-30-15-min-call" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Free Discovery Call
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-4 text-nxt-white/60">
                <MessageCircle className="h-5 w-5" />
                <p>Have questions? Book a free discovery call to learn more about the program.</p>
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
