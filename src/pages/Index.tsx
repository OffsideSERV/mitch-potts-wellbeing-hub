import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Leaf, Book, Thermometer, Weight, Microscope, Users, TestTube, BadgeCheck, Target, Shield, Zap, Coffee, Clock, Brain, Phone, Pill, Salad, DollarSign, CheckCircle, Star } from 'lucide-react';

const Index = () => {
  const services = [{
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
  }];
  const conditions = ["Digestive disorders (IBS, SIBO, bloating, reflux)", "Hormonal imbalances (PMS, PCOS, peri menopause)", "Chronic fatigue and burnout", "Skin issues (eczema, acne)", "Mental health and stress", "Poor sleep and insomnia", "Autoimmune support", "Food intolerances and allergies", "Weight management", "Immune system support", "Mood disorders like anxiety or low mood"];
  const whyDifferent = [{
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
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Best Naturopath Brisbane | <span className="text-primary">Feel Like Yourself Again</span> at NXTLVL Health
                </h1>
                
                {/* Mobile Image - placed right after headline */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" />
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
              <img alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto" src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" />
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Finally – A Brisbane Naturopath Who Truly Gets It</h2>
          </div>

          <div className="mb-12">
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Sad-woman-dealing-with-gut-issues-and-bloating-scaled.jpeg" alt="Woman dealing with health concerns needing naturopathic care" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6 text-lg text-muted-foreground">
            <p>
              Are you feeling <strong>bloated, exhausted, foggy, or just not like yourself</strong>? And yet, every test you get comes back "normal"? Well, you're not alone, and you're definitely not making it up.
            </p>
            <p>
              At NXTLVL Health, Mitch is here to help you feel better on your <strong>health journey</strong>, naturally. As one of the <strong>best naturopaths in Brisbane</strong>, he brings local expertise and a modern, <strong>holistic approach</strong> to your care. Mitch is extremely knowledgeable in <strong>naturopathy</strong> and <strong>holistic health</strong>, and as a <strong>qualified naturopath</strong>, he listens, he digs deep, and he finds the <strong>root cause</strong> of your <strong>health concerns</strong>, so you can finally feel clear, calm, and in control again.
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
              <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" alt="Woman consulting with Brisbane naturopath at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
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
                <strong>Naturopathy</strong> doesn't cover up symptoms. It finds the <strong>root cause</strong> of your problems. Unlike <strong>modern medicine</strong>, which often treats symptoms in isolation, our <strong>naturopathic care</strong> uses <strong>natural medicine</strong> and science to help your body heal, naturally.
              </p>
              <p>
                Our <strong>holistic approach</strong> blends <strong>nutritional medicine</strong>, <strong>herbal medicine</strong>, lifestyle support, and <strong>functional testing</strong> as part of our <strong>natural healthcare</strong> and comprehensive <strong>health care</strong> philosophy to fix the <strong>underlying causes</strong> of your problems, and help you feel your best again, inside and out.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" alt="Naturopath performing live blood analysis at NXTLVL Health Brisbane" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
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
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-standing-next-to-female-patient-thats-lying-down-while-he-checks-her-vitals-scaled.jpeg" alt="Naturopath checking patient vitals at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Natural Health Services</h2>
          </div>

          <div className="mb-12">
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/01/DSC_4546-scaled.jpeg" alt="Natural health services at NXTLVL Health Brisbane" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What We Help With</h2>
          </div>

          <div className="mb-12">
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/DSC_4530-scaled.jpeg" alt="Health conditions we help with at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
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
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/AdobeStock_513537271-scaled.jpeg" alt="Children's naturopathic health care" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We help support children's development and wellbeing through gentle, safe, and natural care. Mitch works closely with parents to create custom plans for issues like eczema, digestive issues, or sleep problems.
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
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" alt="Mitch Potts - Best naturopath in Brisbane" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
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
              If you can't make it to our Brisbane clinic, we've got you. Our online consultations offer the same in-depth support and results. Whether you're managing chronic health conditions or just want to take better care of yourself, we're here.
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
              From hormonal imbalances to chronic skin issues, from digestive discomfort to total burnout — we see you. And we've got a plan to help. You don't need to do this alone.
            </p>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 mt-16">Ready to Get Your Life Back?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your symptoms are real. Your healing is possible. Let's do this together.
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
