import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Leaf, Book, Thermometer, Weight, Microscope, Users, TestTube, BadgeCheck, Target, Shield, Zap, Coffee, Clock, Brain, Phone, Pill, Salad, DollarSign } from 'lucide-react';

const Index = () => {
  const primaryServices = [{
    title: "Naturopathy",
    description: "Finally find what others couldn't and get your health back on track using natural remedies that actually work"
  }, {
    title: "Nutrition Guidance",
    description: "Stop the conflicting health advice everywhere. Get a simple plan tailored just for you"
  }, {
    title: "Live Blood Analysis",
    description: "See exactly what's going on in your body without you knowing. No more guessing what's wrong"
  }, {
    title: "Functional Medicine",
    description: "Advanced screening that looks at the big picture everyone else missed. Finally get answers"
  }, {
    title: "MLS Laser Therapy",
    description: "Natural treatment that gives you less pain and better range of motion. Feel your body getting stronger"
  }, {
    title: "Personal Training",
    description: "Exercise that works with your body, not against it. Start reaching PBs in the gym again"
  }];
  const primaryConditions = [{
    name: "Gut Health",
    description: "Finally solve your gut problems and bloating that's been going on for ages. No more feeling sick after food"
  }, {
    name: "Weight Management",
    description: "Stop trying everything and nothing working. Get results you've wanted for years by fixing what's actually wrong"
  }, {
    name: "Fatigue",
    description: "Stop feeling tired all the time and sluggish in the morning. Get your energy back and feel like yourself again"
  }, {
    name: "Skin Conditions",
    description: "Resolve stubborn skin issues that have been taking ages to heal. Finally gain confidence in your skin again"
  }];
  const additionalConditions = ["Allergies & Food Sensitivities", "Asthma", "Children's Health", "Cardiovascular Health", "Chronic Inflammation & Pain", "Diabetes", "Detoxification (Environmental Toxins / Liver Support)", "Headaches (Migraines)", "Immune Health (Cold & Flu, Bacterial Infections)", "Insomnia (Poor Sleep Quality)", "Men's Health", "Mental Health (Stress, Anxiety & Depression)", "Musculoskeletal Issues", "Thyroid", "Athletic Performance and Recovery"];
  return <div className="min-h-screen bg-background">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full inline-block">
                  Best Naturopath in Brisbane - NXTLVL Health
                </h1>
                <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Not Feeling Like Yourself? <span className="text-primary">Transform in 6 Weeks!</span>
                </h2>
                
                {/* Mobile Image - placed right after headline */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Mitchell Potts preparing natural herbal remedies at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/6e297df5-ddda-4561-bd5a-b77a997a6f3b.jpg" />
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
                
                {/* Mobile spacing for body text */}
                <div className="lg:space-y-0 space-y-6 mt-8 lg:mt-0">
                  <p className="text-xl text-muted-foreground leading-relaxed py-[20px]">
                    I know exactly how frustrating it is to feel <strong>bloated, drained, and just out of it</strong>, but still have your doctor, friends, and family, tell you there's nothing wrong.
                  </p>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    That's why, as the <strong>best Naturopath Brisbane</strong> has to offer, I'm here to tell you that <strong>you're not crazy</strong>, I'm here to give you the <strong>answers you've been looking for</strong>.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight">
                  <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                  <span className="text-center">Book a Free 15-Minute Chat</span>
                </Button>
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-4 py-3 h-auto">
                  <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                  Call Mitch
                </Button>
              </div>
              
              {/* Google 5 Star Badge */}
              <div className="mt-6">
                <script defer async src='https://cdn.trustindex.io/loader.js?7985f8c47d89745a18661502ab0'></script>
              </div>
            </div>
            
            {/* Desktop Image - only visible on large screens */}
            <div className="relative hidden lg:block">
              <img alt="Mitchell Potts preparing natural herbal remedies at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/6e297df5-ddda-4561-bd5a-b77a997a6f3b.jpg" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <Users className="h-8 w-8 text-primary mx-auto" />
              <div>
                <h3 className="text-xl font-bold text-foreground">1000+</h3>
                <p className="text-sm text-muted-foreground">Patients Helped</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <BadgeCheck className="h-8 w-8 text-primary mx-auto" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Real Testing</h3>
                <p className="text-sm text-muted-foreground">No Guessing</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <TestTube className="h-8 w-8 text-primary mx-auto" />
              <div>
                <h3 className="text-xl font-bold text-foreground">90% of Patients</h3>
                <p className="text-sm text-muted-foreground">See Results in Just 6 Weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section that relates to them and really targets their pains and desires */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">If This Sounds Like You...</h2>
          </div>

          <div className="mb-12">
            <img src="/lovable-uploads/fe4256a1-0181-4c24-bf85-f8c27507574d.png" alt="Woman feeling tired and unwell sitting on couch" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">You Feel Tired All the Time</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">You're <strong>sluggish in the morning</strong> no matter how much sleep you get. Your body feels heavy and drained</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Coffee className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">You <strong>need caffeine just to function</strong>, then crash hard by afternoon feeling even more exhausted</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Brain fog makes you <strong>forget things mid-sentence</strong> and you feel foggy and confused</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Your Body Feels Out of Control</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground"><strong>Bloating and gut issues</strong> after meals that make your stomach feel tight and uncomfortable</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Your skin breaks out randomly and your <strong>clothes feel tight</strong> around your swollen belly</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">You're <strong>trying everything and nothing is working</strong>. You feel stuck and frustrated</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-4">You've Been Struggling for Ages</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Your doctor says <strong>you're fine, but you don't feel fine</strong>. You've been <strong>dealing with health issues for years</strong> 
              and there's <strong>conflicting health advice everywhere</strong>. You <strong>didn't know what you were doing wrong</strong>.
            </p>
            <p className="text-xl font-semibold text-primary">
              You want someone who <strong>listens and tailors everything to you</strong>. Someone who gets it. Someone who can finally give you <strong>real answers</strong>.
            </p>
          </div>

          <div className="text-center mt-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Then You've Come to The Right Place</h2>
          </div>
        </div>
      </section>

      {/* 3. What is Naturopathy Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Naturopathy Works When Everything Else Failed</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You've tried pills, diets, and quick fixes. But naturopathy is different. It's the <strong>missing piece</strong> 
              that helps solve what others couldn't.
            </p>
          </div>

          {/* Mobile Image positioned after heading */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/1bd48616-2927-4298-ac11-2883825577b5.png" alt="Professional consultation at NXTLVL Health showing personalised patient care" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Here's What Makes Naturopathy Different</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">We Find The ACTUAL Problem</h4>
                    <p className="text-muted-foreground">While doctors just treat symptoms, we dig deep to find <strong>what's really going on in your body</strong> that you didn't know about</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Your Body Heals Itself (When You Remove What's Blocking It)</h4>
                    <p className="text-muted-foreground">Instead of forcing your body with drugs, we <strong>remove what's stopping you getting better</strong> so your body can heal naturally</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">No More Quick Fixes</h4>
                    <p className="text-muted-foreground">We don't just <strong>cover up your symptoms</strong>. We fix what's actually wrong so you <strong>get better for good</strong></p>
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="/lovable-uploads/1bd48616-2927-4298-ac11-2883825577b5.png" alt="Professional consultation at NXTLVL Health showing personalised patient care" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Why Everything You've Tried Before Didn't Work</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-content-center mx-auto">
                  <Pill className="h-6 w-6 text-red-500" />
                </div>
                <h4 className="font-semibold">Prescription Drugs</h4>
                <p className="text-sm text-muted-foreground">Just cover symptoms while your body gets sicker underneath. Side effects create new problems.</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-content-center mx-auto">
                  <Salad className="h-6 w-6 text-red-500" />
                </div>
                <h4 className="font-semibold">Generic Diets</h4>
                <p className="text-sm text-muted-foreground">One-size-fits-all approaches ignore YOUR unique body and why YOU got sick.</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-content-center mx-auto">
                  <DollarSign className="h-6 w-6 text-red-500" />
                </div>
                <h4 className="font-semibold">Expensive Supplements</h4>
                <p className="text-sm text-muted-foreground">Random vitamins without testing is like cooking with every ingredient in your kitchen. Just a waste of money.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">We Test, Don't Guess</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Advanced screening shows us <strong>exactly what's wrong</strong> in your body. No more trial and error
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Personalised Medicine</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Custom formulas made specifically for YOUR body. Not generic solutions
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Lasting Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Fix the root cause so you <strong>stay healthy</strong>. Not just feel better temporarily
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Mitch As Your Naturopath?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The naturopath who <strong>finally listens</strong> and has the advanced screening to prove what's really going wrong in your body. No more guessing games.
            </p>
          </div>
          
          {/* Mobile Image positioned after heading */}
          <div className="lg:hidden mb-12">
            <img alt="Mitchell Potts performing microscopy analysis at NXTLVL Health clinic" className="rounded-2xl shadow-lg w-full h-auto mx-auto" src="/lovable-uploads/aa4b685d-0956-463f-ad98-180c34dbdb0d.png" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Why Mitch Gets Results When Others Don't</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Microscope className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">He Actually SEES What's Wrong</h4>
                    <p className="text-muted-foreground">Live blood analysis reveals exactly what your body needs. <strong>No more guessing</strong> why you feel terrible</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Customised Plan Just For YOU</h4>
                    <p className="text-muted-foreground">Every treatment plan is <strong>individually tailored</strong> to your unique health profile, symptoms, and lifestyle. Not a cookie-cutter approach</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Medicine Made Just For YOU</h4>
                    <p className="text-muted-foreground">Custom herbal formulas designed specifically for your unique health issues. <strong>Not generic solutions</strong></p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Someone Who Actually Listens</h4>
                    <p className="text-muted-foreground">He believes your symptoms are real and <strong>digs deep to find the root cause</strong>. Not just quick fixes</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img alt="Mitchell Potts performing microscopy analysis at NXTLVL Health clinic" className="rounded-2xl shadow-lg w-full h-auto" src="/lovable-uploads/aa4b685d-0956-463f-ad98-180c34dbdb0d.png" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Complete Solution You've Been Looking For</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop jumping from specialist to specialist. Mitch combines advanced screening with proven natural treatments 
              to give you <strong>everything you need</strong> to finally feel like yourself again.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryServices.map((service, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
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

      {/* 6. Primary Conditions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Health Problems That Actually Get Fixed Here</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tired of being told "it's all in your head"? These are the <strong>real health issues</strong> Mitch specialises in solving.
              The ones other practitioners just can't figure out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {primaryConditions.map((condition, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{condition.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {condition.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>

          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Plus All These Other Stubborn Health Issues</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {additionalConditions.map((condition, index) => <Badge key={index} variant="secondary" className="justify-start p-3 text-sm">
                  {condition}
                </Badge>)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Our Patients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from real people who <strong>finally got their health back on track</strong> and are <strong>seeing results they've wanted for years</strong>.
            </p>
          </div>
          
          {/* Trustindex Reviews Shortcode */}
          <div className="w-full" dangerouslySetInnerHTML={{
          __html: '[trustindex no-registration=google]'
        }} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready To Finally Feel Like Yourself Again?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stop wasting time with doctors who don't listen and treatments that don't work. Book your <strong>free 15-minute consultation</strong> with Mitch and discover why thousands of people are finally getting the answers they've been searching for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Free 15-Minute Call Now
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3">
                <Phone className="mr-2 h-4 w-4" />
                Call Mitch
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">NXTLVL Health - Naturopath</h3>
              <p className="text-muted-foreground">
                Suite 2/665 Brunswick St<br />
                New Farm, QLD 4005<br />
                Australia
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Contact</h3>
              <p className="text-muted-foreground">
                Phone: (07) 3180 8853<br />
                Email: info@nxtlvlhealth.com.au
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 7:00 PM<br />
                Saturday: 8:00 AM - 12:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="py-8 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm">
            © 2024 NXTLVL Health - Mitchell Potts Naturopathy. All rights reserved. | Brisbane, Queensland, Australia
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;
