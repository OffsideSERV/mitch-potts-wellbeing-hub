import React, { useMemo } from 'react';
import SEO from '@/components/SEO';
import LazyImage from '@/components/LazyImage';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Leaf, Book, Thermometer, Weight, Microscope, Users, TestTube, BadgeCheck, Target, Shield, Zap, Coffee, Clock, Brain, Phone, Pill, Salad, DollarSign, CheckCircle, Star, Gift, ArrowRight, Video } from 'lucide-react';
const Index = () => {
  const services = useMemo(() => [{
    title: "Naturopathy",
    description: "We offer powerful yet gentle support for your whole body. We work with chronic fatigue, gut health, hormonal imbalance, and more.",
    icon: <Leaf className="h-8 w-8 text-primary" />
  }, {
    title: "Nutritional Medicine",
    description: "You'll get a fully personalised nutrition plan built for your needs and goals. No more fad diets, just simple, powerful food support.",
    icon: <Salad className="h-8 w-8 text-primary" />
  }, {
    title: "Live Blood Analysis",
    description: "We use this tool to spot inflammation, nutrient absorption issues, gut problems and more, right from a single drop of blood.",
    icon: <Microscope className="h-8 w-8 text-primary" />
  }, {
    title: "Functional Testing",
    description: "Dig deeper into hormones, digestive function, immune markers, and nutrients to find the real cause of your symptoms.",
    icon: <TestTube className="h-8 w-8 text-primary" />
  }, {
    title: "MLS Laser Therapy",
    description: "A fast, drug-free solution for pain, injury, and recovery. Great for improving range of motion and chronic pain relief.",
    icon: <Zap className="h-8 w-8 text-primary" />
  }, {
    title: "Personal Training & Lifestyle Support",
    description: "Workouts and lifestyle coaching that help support both healing and performance – all tailored for your life and schedule.",
    icon: <Target className="h-8 w-8 text-primary" />
  }], []);
  const conditions = useMemo(() => ["Digestive disorders (IBS, SIBO, bloating, reflux)", "Hormonal imbalances (PMS, PCOS, peri menopause)", "Chronic fatigue and burnout", "Skin issues (eczema, acne)", "Mental health and stress", "Poor sleep and insomnia", "Autoimmune support", "Food intolerances and allergies", "Weight management", "Immune system support", "Mood disorders like anxiety or low mood"], []);
  const whyDifferent = useMemo(() => [{
    title: "We Test, We Don't Guess",
    description: "Our live blood analysis and functional testing show us exactly what's going on in your body. There's no guessing, just real answers.",
    icon: <TestTube className="h-6 w-6 text-primary" />
  }, {
    title: "We Treat the Root Cause of Problems",
    description: "From gut health to hormonal imbalances, mental health struggles, and any health condition, we focus on what's really driving your health issues.",
    icon: <Target className="h-6 w-6 text-primary" />
  }, {
    title: "The Plans are Built Just for You",
    description: "There's no cookie-cutter diets or generic advice at NXTLVL Health. Every protocol is custom-made for your body, your goals, and your life, including nutritional changes designed for your needs and your lifestyle.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "Real Support the Whole Way",
    description: "You're not alone. We stay with you the whole time, checking in, making changes, and helping you feel confident in your health journey.",
    icon: <Shield className="h-6 w-6 text-primary" />
  }], []);
  return <div className="min-h-screen bg-background">
      <SEO 
        title="Best Naturopath Brisbane | NXTLVL Health - Natural Medicine Experts" 
        description="Looking for the best naturopath in Brisbane? NXTLVL Health offers expert natural medicine, functional testing, and holistic health care. Book your free 15-minute consultation today!" 
        canonical="/" 
        keywords="best naturopath brisbane, naturopath brisbane, natural medicine brisbane, functional medicine brisbane, gut health brisbane, naturopaths brisbane, good naturopath brisbane, holistic health brisbane, live blood analysis brisbane, nutritional medicine brisbane, herbal medicine brisbane" 
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Best Naturopath Brisbane - <span className="text-primary">Feel Like Yourself Again</span> with Expert Natural Medicine
                </h1>
                
                {/* Mobile Image - placed right after headline */}
                <div className="relative lg:hidden mb-20 -mx-4">
                  <LazyImage alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/f459679d-99b6-4b58-affb-e2cedb040e6e.png" width={800} height={600} />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Microscope className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Advanced Screening Method</p>
                        <p className="text-xs text-muted-foreground">Live Blood Analysis • Natural Medicine</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-center">Book a Free 15-Min Consult</span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-4 py-3 h-auto" asChild>
                  <a href="tel:0731808853">
                    <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                    Call Mitch Now
                  </a>
                </Button>
              </div>
              
              {/* Google 5 Star Badge */}
              <div className="mt-6">
                <script defer async src='https://cdn.trustindex.io/loader.js?7985f8c47d89745a18661502ab0'></script>
              </div>
            </div>
            
            {/* Desktop Image - only visible on large screens */}
            <div className="relative hidden lg:block">
              <LazyImage alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/f459679d-99b6-4b58-affb-e2cedb040e6e.png" width={800} height={600} />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Microscope className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Advanced Screening Method</p>
                    <p className="text-sm text-muted-foreground">Live Blood Analysis • Natural Medicine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Boosters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 justify-between">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-1">1000+</h3>
              <p className="text-sm text-muted-foreground">Patients Helped</p>
            </div>
            
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-1">Real Testing</h3>
              <p className="text-sm text-muted-foreground">No Guessing</p>
            </div>
            
            <div className="text-center">
              <TestTube className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-1">90% of Patients</h3>
              <p className="text-sm text-muted-foreground">See Results in Just 6 Weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Finally A Brisbane Naturopath Who Gets It */}
      <section className="py-24 px-4 mt-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Finally – A Best Naturopath Brisbane Who Truly Gets It</h2>
          </div>

          <div className="mb-12">
            <LazyImage src="/lovable-uploads/9e5ed0a0-bb35-4fde-9965-94edcb9294a8.png" alt="Woman dealing with health concerns needing naturopathic care" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" width={800} height={600} />
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6 text-lg text-muted-foreground">
            <p>
              Best naturopath Brisbane has to offer? You've found it. Are you feeling <strong>bloated, exhausted, foggy, or just not like yourself</strong>? And yet, every test you get comes back "normal"? Well, you're not alone, and you're definitely not making it up.
            </p>
            <p>
              At NXTLVL Health, we offer the <strong>best naturopath Brisbane</strong> experience through our comprehensive <strong>natural health clinic</strong>. Mitch, our <strong>experienced naturopath</strong> and <strong>highly qualified</strong> practitioner, is here to help you achieve <strong>optimal health</strong> on your <strong>health journey</strong>. As the <strong>best naturopath Brisbane</strong> locals trust, he brings proven expertise and a modern, <strong>holistic approach</strong> to your <strong>health care</strong>. Our <strong>naturopathic care</strong> focuses on both <strong>physical health</strong> and <strong>mental health</strong>, using <strong>natural medicine</strong> and <strong>proven methods</strong> to find the <strong>root cause</strong> of your <strong>health concerns</strong> and <strong>chronic health conditions</strong>.
            </p>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-base sm:text-lg px-6 py-4 h-auto" asChild>
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Does This Sound Like You */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Does This Sound Like You?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">You're Always Tired</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  You sleep, but still feel wrecked. You rely on caffeine just to think straight. And the brain fog? It's making everything harder.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Thermometer className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Your Gut Feels Like a Mess</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Bloating. Gas. Food reactions. Even healthy meals can set off discomfort. It's unpredictable and exhausting.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Book className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">You've Tried Everything</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  You've seen doctors. You've tried all the diets. You've read all the blogs. But you still feel like something's not right.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NEW: Gut Health Guide Lead Magnet Section - MOBILE OPTIMIZED */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 md:px-4 md:py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              FREE VIDEO GUIDE
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Stop Feeling Bloated After Every Meal
            </h2>
          </div>
          
          {/* Mobile-First Layout */}
          <div className="space-y-8 lg:hidden">
            {/* Teal box positioned right below heading on mobile */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transform rotate-1 mx-auto max-w-sm">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-4 sm:p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 rounded-full p-2 sm:p-3">
                      <Video className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">Gut Freedom Guide</h3>
                      <p className="text-primary-foreground/80 text-sm">15-Minute Video</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span>Why you feel bloated after eating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span>The 5 worst foods for gut health</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span>Simple 3-step healing protocol</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span>When to seek professional help</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold transform -rotate-12 shadow-lg">
                FREE!
              </div>
            </div>
            
            {/* Content below on mobile */}
            <div className="space-y-6 text-center">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Watch our free 15-minute video guide and discover the simple steps to eliminate bloating, improve digestion, and feel comfortable in your body again.
              </p>
              
              <div className="space-y-3 sm:space-y-4 text-left max-w-md mx-auto">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground">Identify the root causes of your bloating</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground">Learn which foods to avoid and which to embrace</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground">Get proven strategies that work in just 15 minutes</p>
                </div>
              </div>
              
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto group w-full sm:w-auto" asChild>
                <a href="/gut-freedom">
                  <Gift className="mr-2 h-5 w-5" />
                  Get Your Free Video Guide Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <p className="text-xs sm:text-sm text-muted-foreground">
                ✓ Instant access • ✓ No spam • ✓ Evidence-based advice
              </p>
            </div>
          </div>
          
          {/* Desktop Layout (hidden on mobile) */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Watch our free 15-minute video guide and discover the simple steps to eliminate bloating, improve digestion, and feel comfortable in your body again.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">Identify the root causes of your bloating</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">Learn which foods to avoid and which to embrace</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">Get proven strategies that work in just 15 minutes</p>
                </div>
              </div>
              
              <Button size="lg" className="text-base sm:text-lg px-8 py-4 h-auto group" asChild>
                <a href="/gut-freedom">
                  <Gift className="mr-2 h-5 w-5" />
                  Get Your Free Video Guide Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <p className="text-sm text-muted-foreground">
                ✓ Instant access • ✓ No spam • ✓ Evidence-based advice
              </p>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-1">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 rounded-full p-3">
                      <Video className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Gut Freedom Guide</h3>
                      <p className="text-primary-foreground/80">15-Minute Video</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Why you feel bloated after eating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>The 5 worst foods for gut health</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Simple 3-step healing protocol</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>When to seek professional help</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold transform -rotate-12 shadow-lg">
                FREE!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Say NXTLVL Health is the Best */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why People Say NXTLVL Health is the Best Naturopath Brisbane Has</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">Thousands helped with real, lasting results</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">We provide support throughout your <strong>health journey</strong>, addressing both <strong>physical and emotional</strong> needs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground"><strong>Live blood analysis</strong> for real-time insights into your health</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">Personalised <strong>natural treatments</strong> based on you, no guesswork</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">90% of clients feel better in just their first 6 weeks</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <LazyImage src="/lovable-uploads/7f8808bd-07aa-4759-8e99-de3701adb7e7.png" alt="Woman consulting with Brisbane naturopath at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" width={800} height={600} />
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-base sm:text-lg px-6 py-4 h-auto" asChild>
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Naturopathy Actually Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Naturopathy Actually Works</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                The <strong>best naturopath Brisbane</strong> clinics understand that <strong>naturopathy</strong> and <strong>naturopathic medicine</strong> don't just cover up symptoms. We find the <strong>root cause</strong> and <strong>underlying cause</strong> of your <strong>health problems</strong> and <strong>health issues</strong>. Unlike <strong>modern medicine</strong>, which often treats symptoms in isolation, our <strong>naturopathic care</strong> uses <strong>natural medicine</strong> and <strong>modern science</strong> to help your body heal naturally and achieve <strong>better health</strong>.
              </p>
              <p>
                Our comprehensive <strong>holistic approach</strong> blends <strong>nutritional medicine</strong>, <strong>herbal medicine</strong>, <strong>nutritional supplements</strong>, lifestyle support, and <strong>functional testing</strong> as part of our <strong>natural healthcare</strong> and evidence-based <strong>health care</strong> philosophy. We address <strong>digestive health</strong>, <strong>hormonal imbalances</strong>, <strong>chronic pain</strong>, <strong>chronic fatigue</strong>, <strong>skin conditions</strong>, <strong>mood disorders</strong>, and many other <strong>health conditions</strong> to help you feel your best again.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <LazyImage src="/lovable-uploads/29a3a739-d347-46de-b287-0c187b12d5b7.png" alt="Naturopath performing live blood analysis at NXTLVL Health Brisbane" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* What Makes NXTLVL Health Different */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Makes NXTLVL Health Different?</h2>
          </div>

          <div className="mb-12">
            <LazyImage src="/lovable-uploads/889bad55-c07b-401c-8b1d-ee0484fff02d.png" alt="Naturopath checking patient vitals at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" width={800} height={600} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {whyDifferent.map((item, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    {item.icon}
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center">
            <Button size="lg" className="text-base sm:text-lg px-6 py-4 h-auto" asChild>
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Natural Health Services */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Best Naturopath Brisbane Services - <a href="/services" className="text-primary hover:underline">Natural Health Solutions</a></h2>
          </div>

          <div className="mb-12">
            <LazyImage src="/lovable-uploads/17548d2b-e4a0-4571-aba5-1705f04c994e.png" alt="Natural health services at NXTLVL Health Brisbane" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" width={800} height={600} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4 text-center">
                  <div className="mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Health Conditions We Treat - <a href="/what-we-treat" className="text-primary hover:underline">Expert Naturopathic Care</a></h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As the <strong>best naturopath Brisbane</strong> has to offer, we provide <strong>natural treatments</strong> for <strong>chronic health conditions</strong>, <strong>digestive disorders</strong>, <strong>hormonal imbalances</strong>, and more. Our <strong>experienced practitioners</strong> use <strong>proven methods</strong> to address your <strong>health needs</strong> and support your <strong>wellness journey</strong>.
            </p>
          </div>

          <div className="mb-12">
            <LazyImage src="/lovable-uploads/61e65ac0-1104-41b0-8fad-b262f20e0290.png" alt="Health conditions we help with at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" width={800} height={600} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
            {conditions.map((condition, index) => <Badge key={index} variant="secondary" className="justify-start p-3 text-sm">
                {condition}
              </Badge>)}
          </div>

          <div className="text-center">
            <Button size="lg" className="text-base sm:text-lg px-6 py-4 h-auto" asChild>
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Children's Health Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Children's Health: Naturopathy for Kids</h2>
          </div>

          <div className="mb-12">
            <LazyImage src="/lovable-uploads/87b88ea1-0f03-408b-89c7-477dbb81bc30.png" alt="Children's naturopathic health care" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" width={800} height={600} />
          </div>

          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We help support children's development and <strong>well being</strong> through gentle, safe, and <strong>natural approach</strong> care. As the <strong>best naturopath Brisbane</strong> families trust, Mitch works closely with parents to create custom plans for issues like <strong>skin conditions</strong>, <strong>digestive disorders</strong>, or <strong>sleep disturbances</strong>. Learn more about our <a href="/childrens-health" className="text-primary hover:underline">children's health services</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Why Mitch is Called the Best */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Mitch is Called the Best Naturopath in Brisbane</h2>
          </div>

          <div className="mb-12">
            <LazyImage src="/lovable-uploads/eb18265f-6c19-482a-a611-fefbc994ee40.png" alt="Mitch Potts - Best naturopath in Brisbane" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" width={800} height={600} />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">He Sees What Others Miss</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <strong>Live blood analysis</strong> reveals what standard tests often miss – from gut bugs to nutrient deficiencies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Your Plan is 100% Personal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No cookie-cutter formulas. Everything is made for your body, lifestyle, and goals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">He Actually Cares</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Mitch listens deeply. You'll feel supported, understood, and finally empowered with a plan that makes sense.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-base sm:text-lg px-6 py-4 h-auto" asChild>
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Virtual Appointments Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Virtual Appointments: Online Consultations for Busy Lives</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              If you can't make it to our <strong>Brisbane naturopath clinic</strong>, we've got you covered. Our online consultations offer the same in-depth support and results as the <strong>best naturopath Brisbane</strong> clinic experience. Whether you're managing <strong>chronic health conditions</strong>, seeking <strong>preventative care</strong>, or just want to take better care of your <strong>own health</strong>, our virtual appointments provide comprehensive <strong>naturopathic care</strong> from the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Merged Section: This Is What You've Been Looking For + Ready to Get Your Life Back */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">This is What You've Been Looking For</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              From <strong>hormonal imbalances</strong> to <strong>chronic pain</strong> and <strong>skin conditions</strong>, from <strong>digestive disorders</strong> to total <strong>chronic fatigue</strong> and burnout — we see you. As the <strong>best naturopath Brisbane</strong> has available, we've got a personalized plan to help you achieve <strong>optimal health</strong> and live a <strong>healthy lifestyle</strong>. You don't need to navigate your <strong>healing journey</strong> alone. Visit our <a href="/gut-health" className="text-primary hover:underline">gut health specialist page</a> or learn about our <a href="/functional-medicine" className="text-primary hover:underline">functional medicine approach</a>.
            </p>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 mt-16">Ready to Get Your Life Back?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your <strong>debilitating symptoms</strong> are real. Your <strong>healing journey</strong> to <strong>better health</strong> is possible with the <strong>best naturopath Brisbane</strong> team. We <strong>provide support</strong> through evidence-based <strong>natural treatments</strong> and <strong>nutritional support</strong>. Let's work together to help you achieve <strong>optimal health</strong> and a <strong>balanced life</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3" asChild>
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Free 15-Min Consult
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3" asChild>
                <a href="tel:0731808853">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Mitch Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>;
};
export default Index;
