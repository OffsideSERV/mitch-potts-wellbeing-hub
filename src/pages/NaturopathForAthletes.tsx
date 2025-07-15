import React, { useState } from 'react';
import SEO from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, ChevronDown, ChevronUp, Activity, Heart, TestTube, Eye, Beaker, Stethoscope, Brain, Leaf, Target, Zap, ShieldCheck, Trophy, Timer, FlameKindling } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

const NaturopathForAthletes = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const athleteIssues = [
    {
      title: "RECURRING INJURIES",
      description: "Persistent injuries that keep coming back, preventing you from training at your full potential.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "GUT ISSUES", 
      description: "Digestive problems that affect nutrient absorption and energy levels during training.",
      icon: <TestTube className="h-6 w-6 text-primary" />
    },
    {
      title: "SLEEP TROUBLES",
      description: "Poor sleep quality affecting recovery, performance, and mental clarity.",
      icon: <Brain className="h-6 w-6 text-primary" />
    },
    {
      title: "SLOWER RECOVERY",
      description: "Extended recovery times between training sessions limiting your progress.",
      icon: <Timer className="h-6 w-6 text-primary" />
    },
    {
      title: "POOR ENERGY PRODUCTION",
      description: "Low energy levels that don't match your training intensity and dedication.",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "WEAK IMMUNE FUNCTION",
      description: "Frequent illnesses that interrupt your training schedule and performance goals.",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />
    },
    {
      title: "LOW MOOD OR MENTAL BURNOUT",
      description: "Mental fatigue and mood changes that affect motivation and performance mindset.",
      icon: <Heart className="h-6 w-6 text-primary" />
    }
  ];

  const treatmentApproaches = [
    {
      title: "Nutritional Medicine",
      icon: "🌿",
      description: "Personalised nutrition plans to support energy production, recovery, hormone balance, and overall performance."
    },
    {
      title: "Herbal Medicine",
      icon: "🌿",
      description: "Targeted herbs to support immune function, reduce inflammation, and aid recovery with adaptogenic properties."
    },
    {
      title: "Live Blood Analysis",
      icon: "🌿",
      description: "Real-time view into your health showing inflammation, nutrient issues, and immune system stress."
    },
    {
      title: "Functional Testing",
      icon: "🌿",
      description: "Comprehensive testing of hormones, digestion, adrenal function, and nutrient levels."
    },
    {
      title: "Laser Therapy (MLS)",
      icon: "🌿",
      description: "Support tissue repair, muscle relaxation, and reduce inflammation for injury recovery."
    },
    {
      title: "Personal Training & Lifestyle Coaching",
      icon: "🌿",
      description: "Movement and lifestyle guidance for injury prevention and optimal health."
    }
  ];

  const athleteTypes = [
    "Strength & conditioning athletes",
    "Endurance athletes", 
    "CrossFit and HIIT athletes",
    "Runners and cyclists",
    "MMA and combat sports",
    "Dancers and performers",
    "Team sports athletes",
    "Active individuals with recurring injuries or health challenges"
  ];

  const commonChallenges = [
    "Chronic fatigue or burnout",
    "Poor digestion and gut health issues",
    "Recurring injuries or slow healing",
    "Sleep problems and restlessness",
    "Low mood, anxiety, or mental burnout",
    "Weakened immune system and constant colds",
    "Inflammation and joint pain",
    "Hormonal imbalance (e.g., cortisol, testosterone, estrogen)",
    "Blood sugar crashes and poor recovery"
  ];

  const assessmentAreas = [
    "Your training load",
    "Your diet",
    "Your mental health",
    "Your recovery strategies", 
    "Your full health history",
    "Your stress levels and lifestyle"
  ];

  const faqItems = [
    {
      question: "Is this suitable for elite athletes?",
      answer: "Absolutely. We've supported everyone from competitive athletes to active professionals looking for better performance and recovery."
    },
    {
      question: "Will this interfere with my current training plan or treatments?",
      answer: "Not at all. We work alongside your team to support your performance and health."
    },
    {
      question: "Do you offer online consultations?",
      answer: "Yes — get full support from anywhere in Australia with our virtual consults."
    }
  ];

  return (
    <>
      <SEO 
        title="Naturopath for Athletes | Book a FREE 15-Min Consult!"
        description="Boost performance, recover faster, and feel stronger with a trusted naturopath for athletes in Brisbane. Book your free 15-min consult at NXTLVL Health today."
        canonical="/what-we-treat/naturopath-for-athletes"
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text text-transparent">
                    Naturopath for Athletes Brisbane | Boost Performance, Recover Faster, Feel Strong Again
                  </h1>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Feel Like Your Body Isn't Keeping Up With Your Training?</strong><br />
                      You push hard. You train smart. But something still feels off — your energy's low, your recovery is slow, and those little injuries just won't go away.
                    </p>
                    <p>
                      At <strong className="text-foreground">NXTLVL Health</strong>, we help athletes in Brisbane and beyond perform better, recover faster, and feel stronger — naturally. With our expert <strong className="text-foreground">naturopathic care</strong>, we focus on <strong className="text-foreground">root causes</strong>, not just symptoms. Whether you're chasing <strong className="text-foreground">peak performance</strong> or trying to bounce back from injury, we're here to support your body from the inside out.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg hover-scale">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free 15-Min Consult
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg hover-scale">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (07) 3180 8853
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <LazyImage
                    src="/lovable-uploads/4748db27-c782-4bc2-b09d-d93a2b5b2433.png"
                    alt="Professional athlete training with focus and determination, representing peak athletic performance"
                    className="w-full h-[600px] object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Athletes Choose Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Why Athletes Choose Naturopathic Support
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                You already take care of your body. But training hard places <strong className="text-foreground">increased demands</strong> on your system. Without proper support, it can lead to:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {athleteIssues.map((issue, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale bg-gradient-to-br from-card to-card/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      {issue.icon}
                      <CardTitle className="text-lg">{issue.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {issue.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Naturopathic medicine</strong> takes a <strong className="text-foreground">comprehensive approach</strong> to address these issues at the root — so you can get back to performing at your best.
              </p>
            </div>
          </div>
        </section>

        {/* Meet Mitch Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-muted/20 via-muted/10 to-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <LazyImage
                  src="/lovable-uploads/513ad908-d0fa-42db-97e1-3f4975f91e54.png"
                  alt="Mitch Potts, naturopath and personal trainer, demonstrating exercise form in a professional fitness setting"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Meet Mitch – The Naturopath Who Trains, Competes, and Gets It
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Mitch Potts</strong> isn't just a <strong className="text-foreground">naturopath for athletes</strong> — he's also a trained personal trainer who understands the unique pressure athletes face. From elite competitors to weekend warriors, Mitch helps you achieve your <strong className="text-foreground">athletic goals</strong> without burning out your body.
                  </p>
                  <p>
                    At <strong className="text-foreground">NXTLVL Health</strong>, located in <strong className="text-foreground"><a href="/areas-we-serve/naturopath-new-farm" className="text-primary hover:text-primary-dark transition-colors">New Farm, Brisbane</a></strong>, we bring together <strong className="text-foreground">natural therapies</strong>, <strong className="text-foreground">nutritional medicine</strong>, <strong className="text-foreground">functional testing</strong>, and <strong className="text-foreground">sports performance</strong> strategies to give athletes the edge they've been looking for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Naturopathy Supports Performance */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                How Naturopathy Supports Athletic Performance
              </h2>
              <div className="max-w-4xl mx-auto space-y-4 text-lg text-muted-foreground">
                <p>
                  Athletes are different. Your body works harder. It recovers slower. And it demands more from every system — digestion, immunity, hormones, and beyond.
                </p>
                <p>
                  That's where <strong className="text-foreground">sports naturopathy</strong> comes in.
                </p>
                <p>
                  Using a blend of <strong className="text-foreground">natural supplements</strong>, <strong className="text-foreground">herbal medicine</strong>, <strong className="text-foreground">nutrition</strong>, and <strong className="text-foreground">functional diagnostics</strong>, we support:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Faster tissue repair and recovery</h3>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/5 to-accent/10">
                <CardContent className="p-6">
                  <Zap className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold mb-2">Improved energy levels and stamina</h3>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <Heart className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Balanced hormones for optimal adrenal hormone profile</h3>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/5 to-accent/10">
                <CardContent className="p-6">
                  <ShieldCheck className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold mb-2">Stronger immune system function</h3>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <Brain className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Better sleep and mental clarity</h3>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/5 to-accent/10">
                <CardContent className="p-6">
                  <FlameKindling className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold mb-2">Reduced inflammation and pain</h3>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <Activity className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Optimal glucose metabolism for stable energy</h3>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/5 to-accent/10">
                <CardContent className="p-6">
                  <TestTube className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold mb-2"><a href="/what-we-treat/gut-health-naturopath-brisbane" className="text-accent hover:text-accent-dark transition-colors">Gut health</a> for better nutrient absorption</h3>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <Leaf className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Antioxidant support to mitigate free radical production</h3>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                We don't just guess. We test. Every <strong className="text-foreground">treatment plan</strong> is built for your body, your sport, and your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Body Telling You Something Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-muted/20 via-muted/10 to-muted/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Body Is Telling You Something — Are You Listening?
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>Let's be real — intense exercise isn't always healthy.</p>
              <p>
                Long-term stress from heavy training can <strong className="text-foreground">decrease immune fighting capacity</strong>, throw off your gut, mess with your hormones, and leave you feeling drained no matter how much you rest.
              </p>
              <p>If you're feeling like something's "off," you're not broken — you're just out of balance.</p>
              <p>We're here to help you <strong className="text-foreground">regain optimal health</strong>, naturally.</p>
            </div>
          </div>
        </section>

        {/* NXTLVL Health Difference */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The NXTLVL Health Difference
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <TestTube className="h-6 w-6 text-primary" />
                    ✅ We Test, We Don't Guess
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Through <strong className="text-foreground"><a href="/services/live-blood-analysis-brisbane" className="text-primary hover:text-primary-dark transition-colors">live blood analysis</a></strong> and advanced <strong className="text-foreground">functional testing</strong>, we can pinpoint imbalances affecting your <strong className="text-foreground">sports performance</strong> — from nutrient deficiencies to inflammation, gut bugs, and hormonal disruption.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Heart className="h-6 w-6 text-primary" />
                    ✅ We Treat the Whole Person
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This isn't just about muscles and macros. We take a <strong className="text-foreground">holistic approach</strong>, addressing <strong className="text-foreground">mental health</strong>, <strong className="text-foreground">immune function</strong>, <strong className="text-foreground">digestion</strong>, sleep, and <strong className="text-foreground">emotional aspects</strong> of your training life, recognizing that mental and emotional wellness are key to optimizing <strong className="text-foreground">athletic performance</strong>.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Trophy className="h-6 w-6 text-primary" />
                    ✅ Real Plans, Real Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your plan will include <strong className="text-foreground">natural solutions</strong>, tailored <strong className="text-foreground">nutrition</strong>, and <strong className="text-foreground">professional advice</strong> — all designed to support your <strong className="text-foreground">recovery</strong> and <strong className="text-foreground">performance</strong> goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-muted/20 via-muted/10 to-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Naturopathic Treatments We Use to Support Athletes
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We combine different <strong className="text-foreground">naturopathic treatments</strong> to support your body where it needs it most, including reducing inflammation to help athletes recover and perform better.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentApproaches.map((treatment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <span className="text-2xl">{treatment.icon}</span>
                      {treatment.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-base">
                      {treatment.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Athletes We Support */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  We Support All Types of Athletes
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're on the field, in the gym, on the bike, or running marathons — <strong className="text-foreground">naturopathic care</strong> can help you <strong className="text-foreground">perform better</strong> and recover smarter.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {athleteTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10">
                      <Trophy className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <LazyImage
                  src="/lovable-uploads/98dc86b9-d19c-4674-90b5-465183ac0c06.png"
                  alt="Diverse group of athletes from different sports showing the variety of athletic disciplines supported"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Challenges */}
        <section className="py-16 px-4 bg-gradient-to-r from-muted/20 via-muted/10 to-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Common Health Challenges We See in Athletes
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Athletes often push through the warning signs. But ignoring your body only leads to longer-term setbacks. Here's what we help with every day:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {commonChallenges.map((challenge, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-card to-card/50 shadow-md">
                  <Activity className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{challenge}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                If any of that sounds familiar, it's time to work with someone who actually gets it.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Naturopath */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Why Work With a Naturopath for Athletes?
              </h2>
              <div className="max-w-4xl mx-auto space-y-4 text-lg text-muted-foreground">
                <p>
                  Unlike <strong className="text-foreground">conventional treatments</strong> or <strong className="text-foreground">sports medicine</strong>, which often focus on short-term fixes, <strong className="text-foreground">naturopathic doctors</strong> and <strong className="text-foreground">naturopathic practitioners</strong> take time to understand the <strong className="text-foreground">whole person</strong>.
                </p>
                <p>We look at:</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {assessmentAreas.map((area, index) => (
                <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-6 flex items-center gap-3">
                    <Stethoscope className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-medium">{area}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                Then we build a plan that works for your goals, schedule, and body — not a one-size-fits-all approach.
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 px-4 bg-gradient-to-r from-muted/20 via-muted/10 to-muted/20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What You Can Expect
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">👋</div>
                  <CardTitle className="text-xl">Step 1: Free 15-Min Discovery Call</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    We talk through your goals, symptoms, and challenges to see if we're the right fit.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">🧪</div>
                  <CardTitle className="text-xl">Step 2: Deep Testing & Assessment</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    If we move forward, we do real testing — blood analysis, <strong className="text-foreground">gut health</strong>, adrenal hormones, nutrient status, and more.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">🧠</div>
                  <CardTitle className="text-xl">Step 3: Custom Plan for Your Body</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    You get a <strong className="text-foreground">personalised care</strong> plan that includes <strong className="text-foreground">nutrition</strong>, <strong className="text-foreground">supplements</strong>, <strong className="text-foreground">herbal medicine</strong>, and <strong className="text-foreground">lifestyle changes</strong> — all built to help you recover and perform.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <CardTitle className="text-xl">Step 4: Ongoing Support & Adjustments</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    We check in often, refine your plan, and guide you every step — so you keep moving forward and feeling your best. Regular consultations ensure your <strong className="text-foreground">treatment plan</strong> adapts as your health and <strong className="text-foreground">performance</strong> needs evolve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Science-Backed Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              This Isn't Woo-Woo. It's Science-Backed Natural Medicine That Works.
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Everything we do is based on science and real results. No fluff. No guesswork. Just smart, natural strategies that have helped hundreds of athletes improve their <strong className="text-foreground">well-being</strong>, reduce downtime, and stay in the game longer. Athletes are increasingly turning to <strong className="text-foreground">naturopathy</strong> for its <strong className="text-foreground">holistic approach</strong> and <strong className="text-foreground">personalized care</strong>.
              </p>
              <p>
                And yes, it works <strong className="text-foreground">alongside</strong> your GP, physio, coach, or sports doctor. You don't have to choose — you just have to get the right support.
              </p>
            </div>
          </div>
        </section>

        {/* Still Wondering Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-muted/20 via-muted/10 to-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Still Wondering If Naturopathy Is Right for You?
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground">Ask yourself:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                "Are you feeling tired all the time, even with rest?",
                "Are you catching colds often or struggling to bounce back after training?",
                "Are you eating \"well\" but still feeling off?",
                "Are injuries becoming more common?",
                "Is your mental focus or motivation dropping?"
              ].map((question, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card shadow-md">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{question}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                If you said yes to any of the above — it's time to try something different.
              </p>
            </div>
          </div>
        </section>

        {/* Get Back to Peak Performance */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get Back to Peak Performance — Naturally
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                You don't need to guess anymore. You don't need to push through pain. And you definitely don't need to accept feeling "off" as your new normal.
              </p>
              <p>
                At <strong className="text-foreground">NXTLVL Health</strong>, we help athletes in Brisbane and beyond <strong className="text-foreground">train harder</strong>, <strong className="text-foreground">recover smarter</strong>, and feel like themselves again — with the power of <strong className="text-foreground">naturopathic care</strong>.
              </p>
              <p>Let's build a plan that finally works for your body.</p>
            </div>
            
            <Card className="max-w-2xl mx-auto border-primary/20 shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <CardTitle className="text-2xl text-primary">Book Your Free 15-Min Consult Today</CardTitle>
                <CardDescription className="text-lg">
                  Spaces are limited, and athletes book fast. Let's chat about your goals and build a path to real results.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <Button size="lg" className="text-lg hover-scale w-full">
                  <Calendar className="mr-2 h-5 w-5" />
                  👉 Book Free Consult
                </Button>
                <div className="space-y-2 text-muted-foreground">
                  <p>📍 In-Person in Brisbane or Online Across Australia</p>
                  <p>📞 Call Mitch Now: (07) 3180 8853</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-muted/20 via-muted/10 to-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <CardTitle className="flex items-center justify-between text-lg">
                      <span>Q: {faq.question}</span>
                      {openDropdown === index ? (
                        <ChevronUp className="h-5 w-5 text-primary" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  {openDropdown === index && (
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Performance Starts with Your Health
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                At <strong className="text-foreground">NXTLVL Health</strong>, we support athletes like you to <strong className="text-foreground">recover</strong>, rebalance, and reach that next level — not with band-aids, but with real solutions.
              </p>
              <p>Your body deserves the best. Let's make it happen.</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-foreground mb-2">
                <strong>NXTLVL Health – Brisbane's Trusted Naturopath for Athletes</strong>
              </p>
              <p className="text-lg text-muted-foreground">
                Feel Better. Train Stronger. Recover Faster.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NaturopathForAthletes;