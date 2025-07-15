import React, { useState } from 'react';
import SEO from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, ChevronDown, ChevronUp, Activity, Heart, TestTube, Brain, Leaf, Target, Zap, Trophy, Timer, Shield, Users } from 'lucide-react';

const NaturopathForAthletes = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const athleteTypes = [
    {
      title: "Strength & conditioning athletes",
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      title: "Endurance athletes", 
      icon: <Timer className="h-6 w-6 text-primary" />
    },
    {
      title: "CrossFit and HIIT athletes",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "Runners and cyclists",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "MMA and combat sports",
      icon: <Trophy className="h-6 w-6 text-primary" />
    },
    {
      title: "Dancers and performers",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "Team sports athletes",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Active individuals with recurring injuries or health challenges",
      icon: <Shield className="h-6 w-6 text-primary" />
    }
  ];

  const commonChallenges = [
    {
      title: "Chronic fatigue or burnout",
      description: "Persistent exhaustion that doesn't improve with rest, often stemming from overtraining and inadequate recovery support.",
      icon: <Timer className="h-6 w-6 text-primary" />
    },
    {
      title: "Poor digestion and gut health issues",
      description: "Digestive problems that affect nutrient absorption and energy levels, crucial for athletic performance.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "Recurring injuries or slow healing",
      description: "Frequent injuries or extended recovery times that prevent consistent training and performance.",
      icon: <Shield className="h-6 w-6 text-primary" />
    },
    {
      title: "Sleep problems and restlessness",
      description: "Poor sleep quality that affects recovery, hormone production, and next-day performance.",
      icon: <Brain className="h-6 w-6 text-primary" />
    },
    {
      title: "Low mood, anxiety, or mental burnout",
      description: "Mental health challenges that can impact motivation, focus, and overall athletic performance.",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "Weakened immune system and constant colds",
      description: "Frequent illness that disrupts training schedules and affects long-term athletic goals.",
      icon: <TestTube className="h-6 w-6 text-primary" />
    },
    {
      title: "Inflammation and joint pain",
      description: "Chronic inflammation that affects mobility, performance, and increases injury risk.",
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      title: "Hormonal imbalance (e.g., cortisol, testosterone, estrogen)",
      description: "Hormonal disruptions that affect energy, recovery, muscle development, and overall wellbeing.",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "Blood sugar crashes and poor recovery",
      description: "Energy fluctuations and inadequate recovery that limit training capacity and performance gains.",
      icon: <Trophy className="h-6 w-6 text-primary" />
    }
  ];

  const naturopathicTreatments = [
    {
      title: "🌿 Nutritional Medicine",
      description: "We design personalised nutrition plans to support energy production, recovery, hormone balance, and overall performance. From key micronutrients to the right carbs and proteins for your training load, we tailor plans to your specific nutritional needs, sporting goals, and health challenges.",
      subtitle: "We don't do fad diets — we do food that works for your body.",
      icon: <Leaf className="h-6 w-6 text-primary" />
    },
    {
      title: "🌿 Herbal Medicine",
      description: "We use targeted herbs to support immune function, reduce inflammation, support mental health, and aid recovery. Many herbs also have anti-viral, anti-bacterial, and adaptogenic properties to help your body handle training stress.",
      icon: <Leaf className="h-6 w-6 text-primary" />
    },
    {
      title: "🌿 Live Blood Analysis",
      description: "One small drop of blood gives us a real-time view into your health — showing inflammation, nutrient issues, and immune system stress that can affect your ability to recover or perform.",
      icon: <TestTube className="h-6 w-6 text-primary" />
    },
    {
      title: "🌿 Functional Testing",
      description: "We test hormones, digestion, adrenal function, and nutrient levels to uncover what's really holding you back. Then we build a plan that supports optimal adrenal hormone profiles, glucose regulation, and tissue repair.",
      icon: <Brain className="h-6 w-6 text-primary" />
    },
    {
      title: "🌿 Laser Therapy (MLS)",
      description: "Perfect for injury recovery, MLS Laser Therapy supports tissue repair, muscle relaxation, and helps reduce inflammation — without medication.",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "🌿 Personal Training & Lifestyle Coaching",
      description: "Because Mitch is also a qualified PT, we guide you through movement and lifestyle habits that support injury prevention, recovery time, and overall health — all tailored to your training demands.",
      icon: <Activity className="h-6 w-6 text-primary" />
    }
  ];

  const faqs = [
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
        keywords="naturopath for athletes Brisbane, sports naturopathy, athletic performance Brisbane, athlete recovery Brisbane, sports nutrition Brisbane"
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="space-y-8 lg:mt-0 mt-12">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    Naturopath for Athletes Brisbane | Boost Performance, Recover Faster, Feel Strong Again
                  </h1>
                  
                  {/* Mobile Image - placed right after headline */}
                  <div className="relative lg:hidden mb-8 -mx-4">
                    <img alt="Athletic performance naturopath consultation at NXTLVL Health Brisbane showing athlete working with health professional" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" />
                    <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                      <div className="flex items-center space-x-3">
                        <Trophy className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold text-sm">Naturopath for Athletes</p>
                          <p className="text-xs text-muted-foreground">Performance • Recovery • Natural Health</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p><strong>Feel Like Your Body Isn't Keeping Up With Your Training?</strong></p>
                    <p>You push hard. You train smart. But something still feels off — your energy's low, your recovery is slow, and those little injuries just won't go away.</p>
                    <p>At <strong>NXTLVL Health</strong>, we help athletes in Brisbane and beyond perform better, recover faster, and feel stronger — naturally. With our expert <strong>naturopathic care</strong>, we focus on <strong>root causes</strong>, not just symptoms. Whether you're chasing <strong>peak performance</strong> or trying to bounce back from injury, we're here to support your body from the inside out.</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6" asChild>
                    <a href="https://nxtlvlhealth.com.au/book-now/">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Free 15-Min Consult
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                    <a href="tel:0731808853">
                      <Phone className="mr-2 h-4 w-4" />
                      Call (07) 3180 8853
                    </a>
                  </Button>
                </div>

                {/* Google 5 Star Badge */}
                <div className="mt-6">
                  <script defer async src='https://cdn.trustindex.io/loader.js?46476cb4757e774210564760f2f'></script>
                </div>
              </div>
              
              {/* Desktop Image - only visible on large screens */}
              <div className="relative hidden lg:block">
                <img alt="Athletic performance naturopath consultation at NXTLVL Health Brisbane showing athlete working with health professional" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Trophy className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">Naturopath for Athletes</p>
                      <p className="text-sm text-muted-foreground">Performance • Recovery • Natural Health</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Athletes Choose Naturopathic Support */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Athletes Choose Naturopathic Support</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>You already take care of your body. But training hard places <strong>increased demands</strong> on your system. Without proper support, it can lead to:</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Recurring injuries</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Activity className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Gut issues</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Brain className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Sleep troubles — optimizing sleep is essential for <strong>athletic performance</strong></span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Timer className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Slower recovery</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Zap className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Poor <strong>energy production</strong></span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <TestTube className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Weak <strong>immune function</strong></span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                <strong>Naturopathic medicine</strong> takes a <strong>comprehensive approach</strong> to address these issues at the root — so you can get back to performing at your best.
              </p>
            </div>
          </div>
        </section>

        {/* Meet Mitch Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="space-y-6 lg:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold">Meet Mitch – The Naturopath Who Trains, Competes, and Gets It</h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    <strong>Mitch Potts</strong> isn't just a <strong>naturopath for athletes</strong> — he's also a trained personal trainer who understands the unique pressure athletes face. From elite competitors to weekend warriors, Mitch helps you achieve your <strong>athletic goals</strong> without burning out your body.
                  </p>
                  <p>
                    At <strong>NXTLVL Health</strong>, located in <a href="/areas-we-serve/naturopath-new-farm" className="text-primary hover:underline">New Farm, Brisbane</a>, we bring together <a href="/what-we-treat" className="text-primary hover:underline">natural therapies</a>, <strong>nutritional medicine</strong>, <strong>functional testing</strong>, and <strong>sports performance</strong> strategies to give athletes the edge they've been looking for.
                  </p>
                </div>
              </div>
              <div className="relative lg:order-2 mb-8 lg:mb-0">
                <img alt="Mitch Potts, Brisbane naturopath specializing in athletic performance and sports recovery at NXTLVL Health clinic" className="rounded-2xl shadow-lg w-full h-auto" src="/lovable-uploads/71de30e1-0b5e-4389-b8b6-851e3e131f87.png" />
              </div>
            </div>
          </div>
        </section>

        {/* How Naturopathy Supports Athletic Performance */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">How Naturopathy Supports Athletic Performance</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>Athletes are different. Your body works harder. It recovers slower. And it demands more from every system — digestion, immunity, hormones, and beyond.</p>
                <p>That's where <strong>sports naturopathy</strong> comes in.</p>
                <p>Using a blend of <strong>natural supplements</strong>, <strong>herbal medicine</strong>, <strong>nutrition</strong>, and <strong>functional diagnostics</strong>, we support:</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Trophy className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                We don't just guess. We test. Every <strong>treatment plan</strong> is built for your body, your sport, and your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Body Telling You Something Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Your Body Is Telling You Something — Are You Listening?</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>Let's be real — intense exercise isn't always healthy.</p>
                <p>
                  Long-term stress from heavy training can <strong>decrease immune fighting capacity</strong>, throw off your gut, mess with your hormones, and leave you feeling drained no matter how much you rest.
                </p>
                <p>If you're feeling like something's "off," you're not broken — you're just out of balance.</p>
                <p>We're here to help you <strong>regain optimal health</strong>, naturally.</p>
              </div>
            </div>
          </div>
        </section>

        {/* NXTLVL Health Difference */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">The NXTLVL Health Difference</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <TestTube className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">✅ We Test, We Don't Guess</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Through <a href="/services/live-blood-analysis-brisbane" className="text-primary hover:underline">live blood analysis</a> and advanced <strong>functional testing</strong>, we can pinpoint imbalances affecting your <strong>sports performance</strong> — from nutrient deficiencies to inflammation, gut bugs, and hormonal disruption.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">✅ We Treat the Whole Person</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This isn't just about muscles and macros. We take a <strong>holistic approach</strong>, addressing <a href="/what-we-treat/naturopath-anxiety" className="text-primary hover:underline">mental health</a>, <strong>immune function</strong>, <a href="/what-we-treat/gut-health-naturopath-brisbane" className="text-primary hover:underline">digestion</a>, sleep, and <strong>emotional aspects</strong> of your training life, recognizing that mental and emotional wellness are key to optimizing <strong>athletic performance</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">✅ Real Plans, Real Results</CardTitle>
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
              {naturopathicTreatments.map((treatment, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      {treatment.icon}
                      <CardTitle className="text-2xl">{treatment.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg mb-4">{treatment.description}</p>
                    {treatment.subtitle && (
                      <p className="text-muted-foreground italic">{treatment.subtitle}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Athletes We Support Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">We Support All Types of Athletes</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Whether you're on the field, in the gym, on the bike, or running marathons — <strong>naturopathic care</strong> can help you <strong>perform better</strong> and recover smarter.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {athleteTypes.map((type, index) => (
                <Card key={index} className="border-0 shadow-md text-center">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-3">
                      {type.icon}
                      <span className="font-medium text-center">{type.title}</span>
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
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>Athletes often push through the warning signs. But ignoring your body only leads to longer-term setbacks. Here's what we help with every day:</p>
              </div>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {commonChallenges.map((challenge, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardHeader 
                    className="cursor-pointer hover:bg-muted/20 transition-colors"
                    onClick={() => toggleDropdown(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {challenge.icon}
                        <CardTitle className="text-lg">{challenge.title}</CardTitle>
                      </div>
                      {openDropdown === index ? 
                        <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      }
                    </div>
                  </CardHeader>
                  {openDropdown === index && (
                    <CardContent>
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </CardContent>
                  )}
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

        {/* Why Work With a Naturopath for Athletes */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">Why Work With a Naturopath for Athletes?</h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Unlike <strong>conventional treatments</strong> or <strong>sports medicine</strong>, which often focus on short-term fixes, <strong>naturopathic doctors</strong> and <strong>naturopathic practitioners</strong> take time to understand the <strong>whole person</strong>.
                  </p>
                  <p>We look at:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Your <strong>training</strong> load</li>
                    <li>Your <strong>diet</strong></li>
                    <li>Your <strong>mental health</strong></li>
                    <li>Your <strong>recovery</strong> strategies</li>
                    <li>Your full <strong>health history</strong></li>
                    <li>Your stress levels and lifestyle</li>
                  </ul>
                  <p>Then we build a plan that works for your goals, schedule, and body — not a one-size-fits-all approach.</p>
                </div>
              </div>
              <div className="relative mt-8 lg:mt-0">
                <img alt="Comprehensive athletic assessment and naturopathic consultation for performance optimization at NXTLVL Health Brisbane" className="rounded-2xl shadow-lg w-full h-auto" src="/lovable-uploads/51106bb9-7ee7-49df-9e6f-6507f621c37b.png" />
              </div>
            </div>
          </div>
        </section>

        {/* What You Can Expect Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">What You Can Expect</h2>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">👋</span>
                  </div>
                  <CardTitle className="text-xl">Step 1: Free 15-Min Discovery Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We talk through your goals, symptoms, and challenges to see if we're the right fit.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🧪</span>
                  </div>
                  <CardTitle className="text-xl">Step 2: Deep Testing & Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">If we move forward, we do real testing — blood analysis, <strong>gut health</strong>, adrenal hormones, nutrient status, and more.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <CardTitle className="text-xl">Step 3: Custom Plan for Your Body</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">You get a <strong>personalised care</strong> plan that includes <strong>nutrition</strong>, <strong>supplements</strong>, <strong>herbal medicine</strong>, and <strong>lifestyle changes</strong> — all built to help you recover and perform.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <CardTitle className="text-xl">Step 4: Ongoing Support & Adjustments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We check in often, refine your plan, and guide you every step — so you keep moving forward and feeling your best. Regular consultations ensure your <strong>treatment plan</strong> adapts as your health and <strong>performance</strong> needs evolve.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Science-Backed Section */}
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
          </div>
        </section>

        {/* Still Wondering Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Still Wondering If Naturopathy Is Right for You?</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>Ask yourself:</p>
                <ul className="space-y-2 list-disc list-inside text-left max-w-2xl mx-auto">
                  <li>Are you feeling tired all the time, even with rest?</li>
                  <li>Are you catching colds often or struggling to bounce back after training?</li>
                  <li>Are you eating "well" but still feeling off?</li>
                  <li>Are injuries becoming more common?</li>
                  <li>Is your mental focus or motivation dropping?</li>
                </ul>
                <p>If you said yes to any of the above — it's time to try something different.</p>
              </div>
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
                <p>Let's build a plan that finally works for your body.</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">📞 Book Your Free 15-Min Consult Today</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Spaces are limited, and athletes book fast. Let's chat about your goals and build a path to real results.
              </p>

              <div className="space-y-4 max-w-md mx-auto">
                <Button size="lg" className="w-full text-lg py-6" asChild>
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    👉 <strong>Book Free Consult</strong>
                  </a>
                </Button>
                <p className="text-muted-foreground">📍 In-Person in Brisbane or Online Across Australia</p>
                <p className="text-muted-foreground">📞 Call Mitch Now: (07) 3180 8853</p>
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

            <div className="space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardHeader 
                    className="cursor-pointer hover:bg-muted/20 transition-colors"
                    onClick={() => toggleDropdown(index + 20)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Q: {faq.question}</CardTitle>
                      {openDropdown === index + 20 ? 
                        <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      }
                    </div>
                  </CardHeader>
                  {openDropdown === index + 20 && (
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
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Your Performance Starts with Your Health</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
                <p>
                  At <strong>NXTLVL Health</strong>, we support athletes like you to <strong>recover</strong>, rebalance, and reach that next level — not with band-aids, but with real solutions.
                </p>
                <p>Your body deserves the best. Let's make it happen.</p>
              </div>
              
              <div className="text-center">
                <p className="text-xl font-bold text-foreground mb-2">
                  <strong>NXTLVL Health – Brisbane's Trusted Naturopath for Athletes</strong>
                </p>
                <p className="text-lg text-muted-foreground">
                  Feel Better. Train Stronger. Recover Faster.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NaturopathForAthletes;