
import React from 'react';
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Calendar, Heart, Brain, Users, Target, Clock, Shield } from "lucide-react";

const IBSTreatmentBrisbane = () => {
  return (
    <>
      <SEO 
        title="Best Treatment for IBS in Brisbane | Book a Free Consult"
        description="Feeling tired, bloated, foggy or just flat? Our treatment for IBS in Brisbane will heal the real cause of your symptoms, so you can finally feel like YOU again."
        canonical="/what-we-treat/ibs-brisbane"
        keywords="IBS treatment Brisbane, irritable bowel syndrome Brisbane, IBS specialist Brisbane, natural IBS treatment, gut health Brisbane"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  IBS Brisbane | <span className="text-primary">Personalised IBS Treatment</span> at NXTLVL Health
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="IBS treatment consultation at NXTLVL Health Brisbane" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png"
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">IBS Treatment</p>
                        <p className="text-xs text-muted-foreground">Natural • Personalised • Effective</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="text-base sm:text-lg px-6 py-3 h-auto">
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Free 15-Min Consult
                  </a>
                </Button>
                <Button variant="outline" asChild className="text-base sm:text-lg px-6 py-3 h-auto">
                  <a href="tel:0731808853">
                    <Phone className="mr-2 h-4 w-4" />
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
                alt="IBS treatment consultation at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">IBS Treatment</p>
                    <p className="text-sm text-muted-foreground">Natural • Personalised • Effective</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feel Like Yourself Again Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Feel Like Yourself Again | IBS Support That Actually Helps</h2>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" 
                alt="Woman dealing with IBS symptoms and digestive issues" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Do you feel <strong>bloated, sore, or tired</strong> after every meal you eat? Does your tummy always act up, with <strong>constipation, diarrhoea, or cramps</strong> you just can't explain?
              </p>
              <p>
                If so, you might be dealing with <strong>irritable bowel syndrome (IBS)</strong>, a chronic condition that can affect every part of your day. But you're not alone. Many IBS sufferers across Brisbane are struggling with the same thing, and here at NXTLVL Health, we're here to help you <strong>finally get answers and heal</strong>.
              </p>
                <p>
                  Mitch, a trusted naturopath in Brisbane, is experienced in helping IBS patients with <strong>personalised care, advanced testing, and natural methods</strong>. Our comprehensive approach includes working at our specialized <a href="/what-we-treat/ibs-clinic" className="text-primary hover:underline">IBS clinic</a> and collaborating with our <a href="/what-we-treat/gut-health-specialist" className="text-primary hover:underline">gut health specialist</a>. Together, we'll create a treatment plan that helps you regain control over your life and feel good in your body again.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is IBS Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What is IBS?</h2>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/5ab885c2-6334-4880-bd61-dce3bd826f8e.png" 
                alt="Naturopath explaining IBS to patient at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Irritable bowel syndrome (IBS) is a <strong>common functional gut disorder</strong> that affects the way your digestive system works. It's not the same as inflammatory bowel disease or coeliac disease, but the symptoms can still be <strong>severe and deeply uncomfortable</strong>. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4014048/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">IBS affects 10-20% of the population</a>, with a higher prevalence in women than men.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Types of IBS</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Constipation predominant IBS</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Diarrhoea predominant IBS</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Mixed IBS (constipation and diarrhoea)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Common Symptoms</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Abdominal pain and cramping</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Bloating and gas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Changes in bowel habits</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Feeling full or nauseous after eating</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Fatigue and poor sleep</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Food reactions or food intolerances</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                But IBS is <strong>way more than just a tummy problem</strong>. It can lead to <strong>anxiety, low energy, and an impaired quality of life</strong>. Chronic symptoms of IBS can also result in social embarrassment and isolation, as individuals may avoid social situations due to their symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why IBS Happens Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why IBS Happens</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              There's <strong>no one cause of IBS</strong>. Most IBS sufferers have a mix of different triggers, like underlying causes that need to be investigated for effective management.
            </p>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/95e81372-7d61-43a1-b42c-b1cf39f1ff92.png" 
                alt="Naturopath explaining IBS causes to patient on computer screen" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Food reactions (like lactose intolerance or fermentable carbohydrates)</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Brain className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Psychological factors like stress and anxiety</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Imbalanced gut microbiota (often linked to <a href="/what-we-treat/sibo-naturopath" className="text-primary hover:underline">SIBO</a>)</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Visceral hypersensitivity - when the gut is extra sensitive to pressure</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Past illness, infections, or food poisoning</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Negative changes to the digestive system from medication or antibiotics</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                That's why here at NXTLVL Health, we <strong>don't offer a one-size-fits-all approach</strong>. We uncover the underlying causes of your symptoms, so your body can finally heal.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Our IBS Brisbane Treatment Approach Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our IBS Brisbane Treatment Approach</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              If you've been searching for a <strong>really effective IBS treatment in Brisbane</strong>, you've found it. We use a <strong>natural, holistic approach</strong> that blends science, gut testing, and lifestyle adjustments to create a change that lasts.
            </p>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/001a23d3-f9a1-4973-a6a1-a0bf46a7cfbb.png" 
                alt="Mitch at NXTLVL Health planning IBS treatment approach" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Step 1: We Listen</h3>
                <p className="text-muted-foreground text-lg">
                  <strong>Your story matters.</strong> We'll talk about your medical history, daily life, symptoms, food habits, stress, sleep, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Step 2: We Test</h3>
                <p className="text-muted-foreground text-lg mb-4">
                  We use <strong>advanced tools</strong> like microbiome testing, functional testing, and stool analysis to check for:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Imbalances in your gut microbiota</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Inflammation or infection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Nutritional deficiencies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Food intolerances</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Step 3: We Build Your Personalised Treatment Plan</h3>
                <p className="text-muted-foreground text-lg mb-4">
                  Your treatment plan might include:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>A low FODMAP diet or elimination diet</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Support for digestive health with herbs and natural supplements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Gut directed hypnotherapy or cognitive behavioural therapy (CBT)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Lifestyle modifications to reduce stress and improve sleep</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Support with dietary restrictions like gluten free diet or dairy-free plans</span>
                  </li>
                </ul>
                <p className="text-muted-foreground text-lg mt-4">
                  A <strong>low-FODMAP diet</strong> contains only a very small amount of fermentable carbohydrates, which can help manage IBS symptoms.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Step 4: We Heal</h3>
                <p className="text-muted-foreground text-lg">
                  We help you improve digestion, calm your abdominal pain, and rebuild a healthy gut with <strong>real methods that are natural and effective</strong>. This is about <strong>long-term change, not short-term fixes</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Step 5: We Support You Long-Term</h3>
                <p className="text-muted-foreground text-lg">
                  IBS is a <strong>chronic condition</strong> for many people. We'll guide you with ongoing care, check-ins, and new strategies to help you stay healthy for the long haul.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose NXTLVL Health for IBS in Brisbane?</h2>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/d515fc10-3cc2-4062-adf8-2638cee1c7bc.png" 
                alt="Mitch working on IBS treatment plans at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground"><strong>Personalised care</strong> – Every plan is built just for you</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground"><strong>Gut-brain connection support</strong> – We understand how stress, anxiety, and mental health impact gut issues</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground"><strong>Modern testing</strong> – Get insights into your gut that GPs often miss</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground"><strong>Natural medicine</strong> – We focus on root cause healing, not symptom-masking</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground"><strong>Compassionate guidance</strong> – You'll feel heard, seen, and supported</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How IBS Affects Your Life Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How IBS Affects Your Life</h2>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/27a9d38d-9848-4b64-aa99-831c8689e952.png" 
                alt="Woman affected by IBS symptoms holding her stomach" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                Irritable bowel syndrome IBS can impact <strong>more than your tummy</strong>. It can affect your <strong>energy, confidence, relationships, work, and mood</strong>.
              </p>
              <p>
                Many people with IBS <strong>avoid social events, feel isolated, and struggle with fatigue and low self-esteem</strong>. If you feel like this, you are not alone.
              </p>
              <p>
                But with the right help, you can <strong>feel better, have more freedom, and get your life back</strong> to how it was.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Symptoms Real Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Real Symptoms. Real Solutions.</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Most IBS sufferers have lived with <strong>trigger symptoms for years</strong>. But there is a way forward.
            </p>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png" 
                alt="Naturopath providing comprehensive IBS care at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                By <strong>healing the gut lining, rebalancing the microbiome, and using natural treatment strategies</strong>, you can experience:
              </p>
            </div>

            <div className="bg-muted/50 shadow-lg rounded-xl">
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Less bloating and pain</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">More energy and clearer thinking</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Improved bowel habits</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Better food tolerance</span>
                  </div>
                  <div className="flex items-start space-x-3 md:col-span-2">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Greater freedom in your daily life</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Help</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We support <strong>IBS patients across Brisbane</strong> who are:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Struggling with gut health and digestive symptoms</span>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Frustrated by flare-ups that don't make sense</span>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Confused by different foods and diets</span>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Trying to manage multiple medical conditions at once</span>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Ready for a natural way to feel better</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* It's Time to Restore Balance Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">It's Time to Restore Balance</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                If you're dealing with <strong>functional constipation, gastroesophageal reflux disease, or unpredictable IBS symptoms</strong> that leave you feeling anxious, tired, and overwhelmed, we're here to give you the help you've been looking for.
              </p>
              <p>
                NXTLVL Health combines the <strong>best of science, lifestyle, and natural therapies</strong> to bring you real relief from IBS symptoms. Together, we'll help you <strong>restore your balance, feel more confident with food, and improve your overall quality of life</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your Free 15-Min Consult Today</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                You don't have to <strong>keep guessing</strong>. You don't have to <strong>suffer in silence</strong>. And you definitely don't have to do this alone.
              </p>
              <p>
                If you're looking for <strong>real IBS treatment in Brisbane</strong>, book your free consult now. Mitch is here to help you <strong>finally feel better, get clarity, and take back control</strong> of your health journey.
              </p>
              <p className="font-semibold text-primary">
                Start today and take your first step toward <strong>better gut health, more energy, and real peace of mind</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Free 15-Min Consult
                </a>
              </Button>
              <Button variant="outline" asChild className="text-base sm:text-lg px-6 py-4">
                <a href="tel:0731808853">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Mitch Today
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default IBSTreatmentBrisbane;
