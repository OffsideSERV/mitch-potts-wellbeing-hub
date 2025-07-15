
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Zap, Target, Sparkles, Trophy, Activity, Dumbbell, Timer } from "lucide-react";

const NaturopathForAthletes = () => {
  return (
    <>
      <SEO 
        title="Naturopath for Athletes | Book a FREE 15-Min Consult!"
        description="Boost performance, recover faster, and feel stronger with a trusted naturopath for athletes in Brisbane. Book your free 15-min consult at NXTLVL Health today."
        canonical="/what-we-treat/naturopath-for-athletes"
        keywords="naturopath for athletes Brisbane, sports naturopathy, athletic performance, natural sports medicine, athlete recovery Brisbane"
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="space-y-8 lg:mt-0 mt-12">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    Naturopath for Athletes Brisbane | <span className="text-primary">Boost Performance, Recover Faster, Feel Strong Again</span>
                  </h1>
                  
                  {/* Mobile Image */}
                  <div className="relative lg:hidden mb-8 -mx-4">
                    <img 
                      alt="Athletic performance training with naturopathic support at NXTLVL Health Brisbane" 
                      className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                      src="/lovable-uploads/513ad908-d0fa-42db-97e1-3f4975f91e54.png"
                    />
                    <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                      <div className="flex items-center space-x-3">
                        <Trophy className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold text-sm">Sports Naturopathy</p>
                          <p className="text-xs text-muted-foreground">Performance • Recovery • Natural</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground">
                    <strong>Feel Like Your Body Isn't Keeping Up With Your Training?</strong><br />
                    You push hard. You train smart. But something still feels off — your energy's low, your recovery is slow, and those little injuries just won't go away.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    At <strong>NXTLVL Health</strong>, we help athletes in Brisbane and beyond perform better, recover faster, and feel stronger — naturally. With our expert <strong>naturopathic care</strong>, we focus on <strong>root causes</strong>, not just symptoms. Whether you're chasing <strong>peak performance</strong> or trying to bounce back from injury, we're here to support your body from the inside out.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild 
                    className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight"
                  >
                    <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                      <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-center">Book a Free 15-Min Consult</span>
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild 
                    className="text-base sm:text-lg px-4 py-3 h-auto"
                  >
                    <a href="tel:0731808853">
                      <svg className="mr-2 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      Call Mitch
                    </a>
                  </Button>
                </div>

                {/* Google 5 Star Badge */}
                <div className="mt-6">
                  <script defer async src='https://cdn.trustindex.io/loader.js?46476cb4757e774210564760f2f'></script>
                </div>
              </div>
              
              {/* Desktop Image */}
              <div className="relative hidden lg:block">
                <img 
                  alt="Athletic performance training with naturopathic support at NXTLVL Health Brisbane" 
                  className="rounded-2xl shadow-2xl w-full h-auto" 
                  src="/lovable-uploads/513ad908-d0fa-42db-97e1-3f4975f91e54.png"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Trophy className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">Sports Naturopathy</p>
                      <p className="text-sm text-muted-foreground">Performance • Recovery • Natural</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Athletes Choose Naturopathic Support Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Athletes Choose Naturopathic Support</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                You already take care of your body. But training hard places <strong>increased demands</strong> on your system. Without proper support, it can lead to:
              </p>
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden mb-12">
              <img 
                src="/lovable-uploads/4b9725be-487a-42cc-bb60-fc545a412113.png" 
                alt="Athletes training with naturopathic support for optimal performance at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto mx-auto"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="grid gap-4">
                  {[
                    "Recurring injuries",
                    "Gut issues",
                    "Sleep troubles — optimizing sleep is essential for athletic performance",
                    "Slower recovery",
                    "Poor energy production",
                    "Weak immune function",
                    "Low mood or mental burnout"
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground">
                  <strong>Naturopathic medicine</strong> takes a <strong>comprehensive approach</strong> to address these issues at the root — so you can get back to performing at your best.
                </p>
              </div>
              {/* Desktop Image */}
              <div className="relative hidden lg:block">
                <img 
                  src="/lovable-uploads/4b9725be-487a-42cc-bb60-fc545a412113.png" 
                  alt="Athletes training with naturopathic support for optimal performance at NXTLVL Health" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book a Free 15-Min Consult
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Meet Mitch Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Mitch – The Naturopath Who Trains, Competes, and Gets It</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>
                  <strong>Mitch Potts</strong> isn't just a <strong>naturopath for athletes</strong> — he's also a trained <a href="/services/personal-training" className="text-primary hover:text-primary/80 underline">personal trainer</a> who understands the unique pressure athletes face. From elite competitors to weekend warriors, Mitch helps you achieve your <strong>athletic goals</strong> without burning out your body.
                </p>
                <p>
                  At <strong>NXTLVL Health</strong>, located in <a href="/areas-we-serve/naturopath-new-farm" className="text-primary hover:text-primary/80 underline">New Farm, Brisbane</a>, we bring together <strong>natural therapies</strong>, <strong>nutritional medicine</strong>, <strong>functional testing</strong>, and <strong>sports performance</strong> strategies to give athletes the edge they've been looking for.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png" 
                alt="Mitch Potts, naturopath and personal trainer specializing in athlete care at NXTLVL Health New Farm" 
                className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
              />
            </div>
          </div>
        </section>

        {/* How Naturopathy Supports Athletic Performance Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">How Naturopathy Supports Athletic Performance</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>
                  Athletes are different. Your body works harder. It recovers slower. And it demands more from every system — digestion, immunity, hormones, and beyond.
                </p>
                <p>
                  That's where <strong>sports naturopathy</strong> comes in.
                </p>
                <p>
                  Using a blend of <strong>natural supplements</strong>, <strong>herbal medicine</strong>, <strong>nutrition</strong>, and <strong>functional diagnostics</strong>, we support:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                "Faster tissue repair and recovery",
                "Improved energy levels and stamina",
                "Balanced hormones for optimal adrenal hormone profile",
                "Stronger immune system function",
                "Better sleep and mental clarity",
                "Reduced inflammation and pain",
                "Optimal glucose metabolism for stable energy",
                "Gut health for better nutrient absorption",
                "Antioxidant support to mitigate free radical production caused by excessive exercise"
              ].map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-base text-muted-foreground">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
                We don't just guess. We test. Every <strong>treatment plan</strong> is built for your body, your sport, and your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Your Body Is Telling You Something Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Your Body Is Telling You Something — Are You Listening?</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>
                  Let's be real — intense exercise isn't always healthy.
                </p>
                <p>
                  Long-term stress from heavy training can <strong>decrease immune fighting capacity</strong>, throw off your <a href="/what-we-treat/gut-health" className="text-primary hover:text-primary/80 underline">gut health</a>, mess with your hormones, and leave you feeling drained no matter how much you rest.
                </p>
                <p>
                  If you're feeling like something's "off," you're not broken — you're just out of balance.
                </p>
                <p>
                  We're here to help you <strong>regain optimal health</strong>, naturally.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/95e81372-7d61-43a1-b42c-b1cf39f1ff92.png" 
                alt="Naturopath consultation for athlete health optimization at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
              />
            </div>
          </div>
        </section>

        {/* The NXTLVL Health Difference Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">The NXTLVL Health Difference</h2>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <Target className="h-6 w-6 mr-2" />
                    ✅ We Test, We Don't Guess
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Through <a href="/services/live-blood-analysis" className="text-primary hover:text-primary/80 underline">live blood analysis</a> and advanced <strong>functional testing</strong>, we can pinpoint imbalances affecting your <strong>sports performance</strong> — from nutrient deficiencies to inflammation, gut bugs, and hormonal disruption.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <Heart className="h-6 w-6 mr-2" />
                    ✅ We Treat the Whole Person
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This isn't just about muscles and macros. We take a <strong>holistic approach</strong>, addressing <strong>mental health</strong>, <strong>immune function</strong>, <strong>digestion</strong>, sleep, and <strong>emotional aspects</strong> of your training life, recognizing that mental and emotional wellness are key to optimizing <strong>athletic performance</strong>. For athletes dealing with stress and performance anxiety, we also offer specialized support for <a href="/what-we-treat/naturopath-anxiety" className="text-primary hover:text-primary/80 underline">anxiety management</a>.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <Zap className="h-6 w-6 mr-2" />
                    ✅ Real Plans, Real Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your plan will include <strong>natural solutions</strong>, tailored <strong>nutrition</strong>, and <strong>professional advice</strong> — all designed to support your <strong>recovery</strong> and <strong>performance</strong> goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Naturopathic Treatments Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Naturopathic Treatments We Use to Support Athletes</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                We combine different <strong>naturopathic treatments</strong> to support your body where it needs it most, including reducing inflammation to help athletes recover and perform better.
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">🌿 Nutritional Medicine</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We design personalised nutrition plans to support <strong>energy production</strong>, <strong>recovery</strong>, hormone balance, and <strong>overall performance</strong>. From key <strong>micronutrients</strong> to the right carbs and proteins for your training load, we tailor plans to your specific nutritional needs, sporting goals, and <strong>health challenges</strong>. Our <a href="/services/naturopathic-nutritionist" className="text-primary hover:text-primary/80 underline">naturopathic nutritionist</a> approach ensures optimal fueling for your athletic performance.
                    </p>
                    <p className="text-muted-foreground italic">
                      We don't do fad diets — we do food that works for your body.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">🌿 Herbal Medicine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We use targeted herbs to support <strong>immune function</strong>, reduce inflammation, support <strong>mental health</strong>, and aid <strong>recovery</strong>. Many herbs also have <strong>anti-viral</strong>, <strong>anti-bacterial</strong>, and adaptogenic properties to help your body handle training stress.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">🌿 Live Blood Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    One small drop of blood gives us a real-time view into your health — showing inflammation, nutrient issues, and <strong>immune system</strong> stress that can affect your ability to recover or perform.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">🌿 Functional Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We test hormones, digestion, adrenal function, and nutrient levels to uncover what's really holding you back. Then we build a plan that supports <strong>optimal adrenal hormone profiles</strong>, glucose regulation, and <strong>tissue repair</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">🌿 Laser Therapy (MLS)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Perfect for injury recovery, <a href="/services/mls-laser-therapy" className="text-primary hover:text-primary/80 underline">MLS Laser Therapy</a> supports <strong>tissue repair</strong>, <strong>muscle relaxation</strong>, and helps <strong>reduce inflammation</strong> — without medication.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">🌿 Personal Training & Lifestyle Coaching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Because Mitch is also a qualified PT, we guide you through movement and lifestyle habits that support <strong>injury prevention</strong>, <strong>recovery time</strong>, and <strong>overall health</strong> — all tailored to your training demands.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* We Support All Types of Athletes Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">We Support All Types of Athletes</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Whether you're on the field, in the gym, on the bike, or running marathons — <strong>naturopathic care</strong> can help you <strong>perform better</strong> and recover smarter.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Strength & conditioning athletes",
                "Endurance athletes",
                "CrossFit and HIIT athletes",
                "Runners and cyclists",
                "MMA and combat sports",
                "Dancers and performers",
                "Team sports athletes",
                "Active individuals with recurring injuries or health challenges"
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Activity className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Common Health Challenges Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Common Health Challenges We See in Athletes</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Athletes often push through the warning signs. But ignoring your body only leads to longer-term setbacks. Here's what we help with every day:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Chronic fatigue or burnout",
                "Poor digestion and gut health issues",
                "Recurring injuries or slow healing",
                "Sleep problems and restlessness",
                "Low mood, anxiety, or mental burnout",
                "Weakened immune system and constant colds",
                "Inflammation and joint pain",
                "Hormonal imbalance (e.g., cortisol, testosterone, estrogen)",
                "Blood sugar crashes and poor recovery"
              ].map((challenge, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{challenge}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                If any of that sounds familiar, it's time to work with someone who actually gets it.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With a Naturopath for Athletes Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Work With a Naturopath for Athletes?</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>
                  Unlike <strong>conventional treatments</strong> or <strong>sports medicine</strong>, which often focus on short-term fixes, <strong>naturopathic doctors</strong> and <strong>naturopathic practitioners</strong> take time to understand the <strong>whole person</strong>.
                </p>
                <p>We look at:</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Your training load",
                "Your diet",
                "Your mental health",
                "Your recovery strategies",
                "Your full health history",
                "Your stress levels and lifestyle"
              ].map((aspect, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{aspect}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Then we build a plan that works for your goals, schedule, and body — not a one-size-fits-all approach.
              </p>
            </div>
          </div>
        </section>

        {/* What You Can Expect Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">What You Can Expect</h2>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">👋 Step 1: Free 15-Min Discovery Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We talk through your goals, symptoms, and challenges to see if we're the right fit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">🧪 Step 2: Deep Testing & Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If we move forward, we do real testing — blood analysis, <strong>gut health</strong>, adrenal hormones, nutrient status, and more.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">🧠 Step 3: Custom Plan for Your Body</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You get a <strong>personalised care</strong> plan that includes <strong>nutrition</strong>, <strong>supplements</strong>, <strong>herbal medicine</strong>, and <strong>lifestyle changes</strong> — all built to help you recover and perform.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">📈 Step 4: Ongoing Support & Adjustments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We check in often, refine your plan, and guide you every step — so you keep moving forward and feeling your best. Regular consultations ensure your <strong>treatment plan</strong> adapts as your health and <strong>performance</strong> needs evolve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Science-Backed Natural Medicine Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">This Isn't Woo-Woo. It's Science-Backed Natural Medicine That Works.</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>
                  Everything we do is based on science and real results. No fluff. No guesswork. Just smart, natural strategies that have helped hundreds of athletes improve their <strong>well-being</strong>, reduce downtime, and stay in the game longer. Athletes are increasingly turning to <strong>naturopathy</strong> for its <strong>holistic approach</strong> and <strong>personalized care</strong>.
                </p>
                <p>
                  And yes, it works <strong>alongside</strong> your GP, physio, coach, or sports doctor. You don't have to choose — you just have to get the right support.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/5ab885c2-6334-4880-bd61-dce3bd826f8e.png" 
                alt="Science-backed naturopathic medicine for athletes at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
              />
            </div>
          </div>
        </section>

        {/* Still Wondering Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Still Wondering If Naturopathy Is Right for You?</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
                Ask yourself:
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
              {[
                "Are you feeling tired all the time, even with rest?",
                "Are you catching colds often or struggling to bounce back after training?",
                "Are you eating \"well\" but still feeling off?",
                "Are injuries becoming more common?",
                "Is your mental focus or motivation dropping?"
              ].map((question, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{question}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
                If you said yes to any of the above — it's time to try something different.
              </p>
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book a Free 15-Min Consult
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Get Back to Peak Performance Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get Back to Peak Performance — Naturally</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>
                  You don't need to guess anymore. You don't need to push through pain. And you definitely don't need to accept feeling "off" as your new normal.
                </p>
                <p>
                  At <strong>NXTLVL Health</strong>, we help athletes in Brisbane and beyond <strong>train harder</strong>, <strong>recover smarter</strong>, and feel like themselves again — with the power of <strong>naturopathic care</strong>.
                </p>
                <p>
                  Let's build a plan that finally works for your body.
                </p>
              </div>
            </div>

            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold mb-6">📞 Book Your Free 15-Min Consult Today</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Spaces are limited, and athletes book fast. Let's chat about your goals and build a path to real results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild className="text-base sm:text-lg px-6 py-4">
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Book Free Consult
                  </a>
                </Button>
                <Button variant="outline" asChild className="text-base sm:text-lg px-6 py-4">
                  <a href="tel:0731808853">
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    Call Mitch Now: (07) 3180 8853
                  </a>
                </Button>
              </div>

              <div className="text-muted-foreground">
                <p>📍 In-Person in Brisbane or Online Across Australia</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Q: Is this suitable for elite athletes?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely. We've supported everyone from competitive athletes to active professionals looking for better <strong>performance</strong> and <strong>recovery</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Q: Will this interfere with my current training plan or treatments?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Not at all. We work alongside your team to support your <strong>performance</strong> and <strong>health</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Q: Do you offer online consultations?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes — get full support from anywhere in Australia with our virtual consults.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Your Performance Starts with Your Health</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
                <p>
                  At <strong>NXTLVL Health</strong>, we support athletes like you to <strong>recover</strong>, rebalance, and reach that next level — not with band-aids, but with real solutions.
                </p>
                <p>
                  Your body deserves the best. Let's make it happen.
                </p>
                <p className="font-semibold">
                  <strong>NXTLVL Health – Brisbane's Trusted Naturopath for Athletes</strong><br />
                  Feel Better. Train Stronger. Recover Faster.
                </p>
              </div>

              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Start Your Athletic Transformation Today
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NaturopathForAthletes;
