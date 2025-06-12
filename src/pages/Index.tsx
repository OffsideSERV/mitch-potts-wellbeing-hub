
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Leaf, Book, Thermometer, Weight, Microscope, Users, TestTube, BadgeCheck, Target, Shield, Zap, Coffee, Clock, Brain, Phone, Pill, Salad, DollarSign } from 'lucide-react';

const Index = () => {
  const primaryServices = [{
    title: "Naturopathy",
    description: "Undeniably good naturopathy in Brisbane to finally uncover what your doctor couldn't and get your health back on track using natural remedies that actually work",
    subtitle: "Naturopathy is what Mitch used to help hundreds of patients really take charge of their health."
  }, {
    title: "Nutrition Guidance",
    description: "There's no need to play guessing games with fad diets. Get a fully customised nutrition plan that's made just for you.",
    subtitle: "We simplify your food strategy so you know exactly what to eat, when to eat it, and why it works for your body."
  }, {
    title: "Live Blood Analysis",
    description: "Mitch will find out exactly what's going on in your body by examining your blood under a microscope.",
    subtitle: "Live blood analysis gives us insights no basic blood test can—like inflammation, nutrient absorption, or gut bugs you didn't know were there."
  }, {
    title: "Functional Medicine",
    description: "Advanced screening that looks at the big picture everyone else missed. You'll get the answers you need.",
    subtitle: "We check your hormones, gut, liver, immune function—everything that affects how you feel day to day."
  }, {
    title: "MLS Laser Therapy",
    description: "A natural laser treatment that gives you less pain and better range of motion. You'll feel your body getting stronger within just the first few sessions.",
    subtitle: "Especially helpful for injuries or stubborn aches. You'll notice a change in how your body moves, often faster than expected."
  }, {
    title: "Personal Training",
    description: "Exercise that works with your body, not against it. You'll start hitting PBs in the gym again",
    subtitle: "Get stronger without burnout. Mitch helps you train smarter, with workouts that support your healing—not sabotage it."
  }];
  const primaryConditions = [{
    name: "Gut Health",
    description: "You'll finally solve your gut problems and bloating that's been going on for ages. You won't feel sick after eating food again."
  }, {
    name: "Weight Management",
    description: "You'll finally drop the weight that's been driving you crazy. You'll look in the mirror and see yourself in the dream body you've wanted for years by fixing what's actually wrong"
  }, {
    name: "Fatigue",
    description: "You'll stop feeling tired all the time and sluggish in the morning. You'll finally get your energy back and truly feel like yourself again."
  }, {
    name: "Skin Conditions (Eczema, Acne, etc)",
    description: "You'll finally say goodbye to the skin issues that have been taking ages to heal. You'll gain confidence and spend some more time staring at that bathroom mirror."
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
                  Not Feeling Like Yourself? <span className="text-primary">Transform in Just 6 Weeks!</span>
                </h2>
                
                {/* Mobile Image - placed right after headline */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Mitchell Potts preparing natural herbal remedies at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/6e297df5-ddda-4561-bd5a-b77a997a6f3b.jpg" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Microscope className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Advanced Screening Clinic</p>
                        <p className="text-xs text-muted-foreground">Live Blood Analysis • Natural Medicine</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile spacing for body text */}
                <div className="lg:space-y-0 space-y-6 mt-8 lg:mt-0">
                  <p className="text-xl text-muted-foreground leading-relaxed py-[20px]">
                    I know how frustrating it must be to feel <strong>bloated, drained, and just out of it</strong>, but still have your doctor tell you that there's nothing wrong.
                  </p>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    That's why, as the <strong>best Naturopath Brisbane</strong> has to offer, I'm here to tell you that <strong>you're not crazy</strong>, and I'm here to give you the <strong>answers you've been looking for</strong>.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight" asChild>
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-center">Book an Appointment Today!</span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-4 py-3 h-auto" asChild>
                  <a href="tel:0731808853">
                    <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                    Call Mitch
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
                <h3 className="text-xl font-bold text-foreground">Real Testing From a Qualified Naturopath</h3>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">If This Sounds Like Your Symptoms...</h2>
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
                  <div>
                    <p className="text-muted-foreground mb-2">You're <strong>sluggish in the morning</strong> no matter how much sleep you get. Your body feels heavy and drained.</p>
                    <p className="text-sm text-muted-foreground italic">Even with a full night's sleep, you wake up foggy and slow. You drag yourself out of bed and spend the day feeling like you're moving through mud.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Coffee className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground mb-2">You <strong>need caffeine just to function properly</strong>, and then you crash hard by the afternoon feeling even more exhausted.</p>
                    <p className="text-sm text-muted-foreground italic">Coffee works—but only for a little while. Then your body crashes harder. You feel wired but tired, and you can't figure out why your energy disappears so fast.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground mb-2">Brain fog makes you <strong>forget things mid-sentence</strong>.</p>
                    <p className="text-sm text-muted-foreground italic">You lose your train of thought, you forget simple words, and you feel frustrated because your mind just isn't working like it used to.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Your Body Feels Out of Control</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-muted-foreground mb-2"><strong>Bloating and gut issues after every meal</strong> makes your stomach feel tight and uncomfortable</p>
                    <p className="text-sm text-muted-foreground italic">Even so-called healthy foods seem to set you off. It's like your body's reacting to everything and you can't keep track anymore.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-muted-foreground mb-2">You're <strong>embarrassed about how your skin breaks out randomly</strong>, and your clothes feel tight around your belly</p>
                    <p className="text-sm text-muted-foreground italic">One minute your skin is fine, the next it's inflamed. You're trying to eat clean, but your body still feels puffy, sore, or swollen. Your confidence takes a hit.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-muted-foreground mb-2">You're <strong>trying everything but nothing is working</strong>. You feel stuck and frustrated</p>
                    <p className="text-sm text-muted-foreground italic">You've cut out gluten, sugar, dairy—maybe even tried detoxes or supplements—but you're still not getting better. It's exhausting and disheartening.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-4">You've Been Struggling for Ages</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Your doctor says <strong>you're fine, but you don't feel fine</strong>. You've <strong>searched for answers online</strong>, 
              but it's left you <strong>even more confused than before</strong>. You have <strong>no idea what you're doing wrong</strong>.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              You've gone down the rabbit hole of Google, tried wellness trends, and followed influencers—but now you're overloaded with advice and unsure what's actually right for you.
            </p>
            <p className="text-xl font-semibold text-primary">
              You want someone who <strong>listens to you, and tailors everything to you and your life</strong>. Someone who gets it. Someone who can finally give you <strong>answers</strong>.
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              You've tried pills, diets, and other quick fixes. But naturopathy's a way different type of healthcare. It's a <strong>holistic approach to health</strong> 
              that's natural and heals your problems at the root.
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Instead of masking symptoms, we zoom out and ask: why is this happening? We treat the person—not just the problem—with natural, proven methods that bring your body back into balance.
            </p>
            <p className="text-lg text-primary mt-4">
              <a href="https://www.torrens.edu.au/stories/blog/health/naturopathy-explained#:~:text=What%20does%20a%20Naturopath%20do,whole%20health%20of%20the%20individual." className="hover:underline font-semibold">Click here to learn more about naturopathy</a>
            </p>
          </div>

          {/* Mobile Image positioned after heading */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/1bd48616-2927-4298-ac11-2883825577b5.png" alt="Professional consultation at NXTLVL Health showing personalised patient care" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">What Makes Our Naturopathy in Brisbane Different</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">We Find The ACTUAL Problem</h4>
                    <p className="text-muted-foreground mb-2">While doctors just treat symptoms, our natural clinic digs deep to find <strong>what's really going on in your body, and what's causing your symptoms</strong></p>
                    <p className="text-sm text-muted-foreground italic">We don't stop at surface-level answers. Our advanced testing and deep consultations mean we uncover issues others often miss—like inflammation, gut imbalances, or hidden deficiencies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Your Body Heals Itself Through This Holistic Approach</h4>
                    <p className="text-muted-foreground mb-2">Instead of forcing your body with drugs, we <strong>remove what's stopping you from getting better</strong> so your body can heal naturally</p>
                    <p className="text-sm text-muted-foreground italic">We gently reset your body's systems using nutrition, herbs, and supportive therapies. When the blocks are cleared, healing happens.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">No More Quick Fixes</h4>
                    <p className="text-muted-foreground mb-2">We don't just <strong>cover up your symptoms</strong>. We fix what's actually wrong so you <strong>get better for good</strong></p>
                    <p className="text-sm text-muted-foreground italic">Because you don't want a short-term band-aid—you want long-term freedom from feeling unwell.</p>
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
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Pill className="h-6 w-6 text-red-500" />
                </div>
                <h4 className="font-semibold">Prescription Drugs</h4>
                <p className="text-sm text-muted-foreground mb-2">They just cover symptoms while your body gets sicker underneath. Side effects create new problems.</p>
                <p className="text-xs text-muted-foreground italic">Medications can help temporarily, but they rarely solve the deeper issue—and they often add to your list of concerns with fatigue, weight gain, or gut troubles.</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Salad className="h-6 w-6 text-red-500" />
                </div>
                <h4 className="font-semibold">Generic Diets</h4>
                <p className="text-sm text-muted-foreground mb-2">These are one-size-fits-all approaches that ignore YOUR unique body and lifestyle</p>
                <p className="text-xs text-muted-foreground italic">What works for your friend won't always work for you. Your body has different needs, triggers, and healing timelines.</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="h-6 w-6 text-red-500" />
                </div>
                <h4 className="font-semibold">Expensive Supplements</h4>
                <p className="text-sm text-muted-foreground mb-2">Taking random vitamins and supplements without testing is like cooking pasta with every ingredient in your kitchen. It's just a waste of money.</p>
                <p className="text-xs text-muted-foreground italic">You don't need more supplements—you need the right ones, targeted to your real deficiencies and health goals.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">We Test, We Don't Guess</CardTitle>
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
                  Custom formulas made specifically for YOUR body, like herbal medicine, nutrition, movement, etc. There's no generic solutions
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
                  Mitch will fix the root cause of your problems so you <strong>stay healthy long-term</strong>. Not just feel better for the time being
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why is Mitch The Best Naturopath in Brisbane?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Because he's the top naturopath who <strong>actually listens</strong> and he uses natural therapies and naturopathic medicine in his consultations to heal your health concerns properly.
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              He explains things clearly, takes time with every consult, and backs everything with real testing and tailored strategies—so you always know what's happening and why.
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
                    <p className="text-muted-foreground mb-2">His live blood analysis will reveal exactly what your body needs.</p>
                    <p className="text-sm text-muted-foreground italic">You'll see your health in real-time under the microscope, and finally understand what's happening on a cellular level.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Customised Plan Just For YOU</h4>
                    <p className="text-muted-foreground mb-2">All his natural treatments are <strong>individually made</strong> for each unique health profile, symptoms, and lifestyle. It's not some cookie-cutter approach</p>
                    <p className="text-sm text-muted-foreground italic">You'll feel heard, seen, and supported. Your plan will feel like it was made just for you—because it was.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Someone Who Really Cares</h4>
                    <p className="text-muted-foreground mb-2">He cares deeply about helping people in his wellness clinic feel better, you will never feel like "just another patient".</p>
                    <p className="text-sm text-muted-foreground italic">Clients say they feel safe, seen, and hopeful again. That's the difference that gets results.</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Holistic Approach You've Been Looking For</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop jumping from specialist to specialist. Mitch's naturopath clinic combines many different services to help people on their health journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryServices.map((service, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-3">
                    {service.description}
                  </CardDescription>
                  {service.subtitle && (
                    <CardDescription className="text-sm leading-relaxed italic text-muted-foreground">
                      {service.subtitle}
                    </CardDescription>
                  )}
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
              Tired of being told that "it's all in your head"? Well you won't hear that once with Mitch, here are the <strong>real health issues</strong> Mitch specialises in solving. The ones other practitioners just can't figure out.
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
              These are <strong>real stories from real people</strong> who finally got their health back on track because of NXTLVL Health and are now <strong>seeing results they've wanted for years</strong>.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Work With The Best Naturopath in Brisbane and Transform?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stop wasting time with doctors who don't listen and treatments that don't work. Book your <strong>free 15-minute consultation</strong> with Mitch and discover why thousands of people are finally getting the answers they've been searching for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3" asChild>
                <a href="https://nxtlvlhealth.com.au/book-now/">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book an Appointment Today!
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3" asChild>
                <a href="tel:0731808853">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Mitch
                </a>
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
            © 2025 NXTLVL Health - Mitchell Potts Naturopathy. All rights reserved. | Brisbane, Queensland, Australia
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;
