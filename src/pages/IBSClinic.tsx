
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Calendar, Heart, Brain, Users, Target, Clock, Shield } from "lucide-react";

const IBSClinic = () => {
  return (
    <>
      <Helmet>
        <title>Best IBS Clinic in Brisbane | Book a Free 15-Min Consult!</title>
        <meta name="description" content="Feeling tired, bloated, foggy or just flat? Our IBS Clinic in Brisbane will heal the real cause of your symptoms, so you can finally feel like YOU again." />
      </Helmet>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  IBS Clinic | <span className="text-primary">Find Real Relief</span> at NXTLVL Health
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="IBS clinic consultation at NXTLVL Health Brisbane" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">IBS Clinic</p>
                        <p className="text-xs text-muted-foreground">Natural • Expert Care • Real Relief</p>
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
                alt="IBS clinic consultation at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">IBS Clinic</p>
                    <p className="text-sm text-muted-foreground">Natural • Expert Care • Real Relief</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Feel Like Yourself Again At Our IBS Clinic</h2>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Sad-woman-dealing-with-gut-issues-and-bloating-scaled.jpeg" 
                alt="Woman feeling uncomfortable with digestive issues and IBS symptoms" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                <strong>If you can relate to what's below, our IBS Clinic can help:</strong>
              </p>
              <p>
                Do you feel <strong>bloated, uncomfortable, or like your gut just isn't working right</strong>? Do you have to think twice before eating certain foods? Are you constantly dealing with <strong>stomach pain, constipation, or diarrhoea</strong>? If this sounds like you, you may be living with Irritable Bowel Syndrome (IBS).
              </p>
              <p>
                At NXTLVL Health, our <strong>IBS clinic is here to help you</strong>. Led by Mitch, a trusted naturopath and gut health expert, we work with people just like you to uncover the real reason behind your digestive troubles. Whether you're struggling with <strong>long-term gastrointestinal symptoms</strong> or just starting to notice gut issues, you'll receive <strong>natural support, expert guidance, and a clear plan</strong> to finally feel great.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is IBS Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Is IBS?</h2>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
                alt="Naturopath explaining IBS to patient at NXTLVL Health clinic" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Irritable bowel syndrome (IBS) is a <strong>common disorder that affects the gastrointestinal tract</strong>. It can cause a range of issues, like <strong>abdominal pain, abdominal bloating, constipation, and diarrhoea</strong>. IBS affects around 1 in 5 people. Some people experience symptoms worse after eating certain foods, or during times of stress or anxiety. These are known as <strong>trigger symptoms</strong>.
              </p>
              <p>
                IBS doesn't look the same for everyone. You might have mostly <strong>constipation (<a href="https://www.healthline.com/health/ibs-constipation" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">IBS-C</a>), mostly diarrhoea (<a href="https://www.webmd.com/ibs/what-is-ibs-d" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">IBS-D</a>), or a mix of both (<a href="https://www.healthline.com/health/irritable-bowel-syndrome/ibs-m-causes-symptoms-treatment" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">IBS-M</a>)</strong>. Females are more likely than males to be affected by IBS. That's why <strong>personalised care is so important</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do These Symptoms Sound Familiar Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Do These Symptoms Sound Familiar?</h2>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/AdobeStock_1076682494-scaled.jpeg" 
                alt="Woman experiencing IBS symptoms and abdominal discomfort" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Abdominal pain that comes and goes</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Bloating or feeling full all the time</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Frequent trips to the bathroom</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Constipation or diarrhoea (or both)</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Feeling tired, foggy, or low in energy</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Worrying about what foods might set you off</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Embarrassment or discomfort around your gut</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Incomplete bowel movements and pain relieved by passing wind or faeces</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How Our IBS Clinic Helps Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How Our IBS Clinic Helps</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              At NXTLVL Health, we believe in a <strong>full-body approach to IBS treatment</strong>. That means we don't just examine your digestive system; we look at how your <strong>gut, lifestyle, stress, diet, and other factors</strong> all connect.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Here's what makes our care different from other IBS clinics:
            </p>
            
            {/* Image right under text */}
            <div className="mb-12 mt-8">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" 
                alt="Mitch at NXTLVL Health planning IBS treatment approach" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground"><strong>We listen to your story:</strong> Your symptoms, health history, lifestyle, and goals.</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Brain className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground"><strong>We use natural therapies</strong> that support your body, rather than cover symptoms.</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground"><strong>We offer testing</strong> like stool tests, food sensitivity checks, and functional gut testing.</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground"><strong>We build your plan:</strong> Diet, herbs, supplements, and lifestyle — all personalised.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground">
                <a 
                  href="https://nxtlvlhealth.com.au/what-we-treat/gut-health-specialist/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline"
                >
                  Click here to learn about Mitchell, our Specialist in Gut Health
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Causes Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Common Causes of IBS Symptoms</h2>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-showing-patient-results-on-a-computer-scaled.jpeg" 
                alt="Naturopath explaining IBS causes to patient on computer screen" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                IBS can be triggered by many things. It often shows up after a <strong>gut infection or food poisoning</strong>, but it can also develop from <strong>chronic stress, anxiety, poor diet, or even hormonal changes</strong>. Some patients also show signs of inflammatory bowel disease (IBD), like ulcerative colitis, or have coeliac disease. <strong>IBS can lead to anxiety and depression</strong> in some individuals.
              </p>
              <p>
                Your symptoms could also be related to other conditions in the <strong>small intestine or large intestine</strong> that need proper testing and personalised care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect From Your Appointment</h2>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-checking-blood-pressure-of-patient-scaled.jpeg" 
                alt="Naturopath providing comprehensive IBS care at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Your first visit will involve a <strong>full chat about your symptoms and health journey</strong>. This includes a physical examination, as well as talking through your <strong>bowel function, stool patterns, and dietary habits</strong>. We may also recommend stool testing or other functional testing if needed.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Your Treatment Plan Might Include:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Targeted herbs and supplements to support gut healing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Diet changes to reduce trigger foods (like fermentable oligosaccharides and milk products)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Stress reduction strategies to help you feel calmer and in control</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Lifestyle changes to improve digestion, sleep, and energy</span>
                  </li>
                </ul>
                <p className="text-muted-foreground text-lg mt-6">
                  <strong>Diet and lifestyle changes are often the best long-term strategy</strong> to ease IBS symptoms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testing at Our IBS Clinic Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Testing at Our IBS Clinic</h2>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
                alt="Naturopath conducting testing for IBS diagnosis at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-1 gap-6">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground"><strong>Stool tests</strong> – to check your gut bacteria, inflammation, and digestion markers</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground"><strong>Food allergy and sensitivity panels</strong> – to see what foods might be causing issues</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Brain className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground"><strong>Other testing options</strong> – including hormone, liver, and microbiome testing if needed</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                This helps us <strong>accurately diagnose IBS, uncover the exact cause of your symptoms, and rule out other illnesses</strong> or chronic conditions. In IBS, medical tests such as blood tests, endoscopy, and imaging tests don't show anything abnormal. In more severe cases, we may refer you for a colonoscopy, CT scan, or testing with a flexible tube via your doctor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Treatments Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural Treatments That Work</h2>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-doing-work-at-desk-scaled.jpg" 
                alt="Mitch planning natural IBS treatments at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid gap-4">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">Personalised diet based on your trigger symptoms</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">Herbal medicine to calm inflammation and restore gut balance</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">Digestive enzymes to support nutrient absorption and ease discomfort</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">Guidance from a clinical psychologist if stress or trauma is a factor</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">Easy, effective supplements that are based on what your body actually needs</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8 space-y-4">
              <p className="text-lg text-muted-foreground">
                <strong>Counseling can be suggested for patients with IBS</strong> if depression or stress worsens their symptoms.
              </p>
              <p className="text-lg text-muted-foreground">
                <a 
                  href="https://nxtlvlhealth.com.au/what-we-treat/ibs-naturopath/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline"
                >
                  Click here to learn about our IBS Naturopathy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose NXTLVL Health?</h2>
            
            {/* Image right under heading */}
            <div className="mb-12">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
                alt="Happy patient consulting with naturopath at NXTLVL Health IBS clinic" 
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
                    <span className="text-lg text-muted-foreground">We specialise in treating IBS symptoms naturally</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">We help you manage gastrointestinal symptoms, not just mask them</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">We offer a tailored treatment plan to fit your goals and lifestyle</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">We look at the whole picture — from gut to brain, from stress to food</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8 space-y-4">
              <p className="text-lg text-muted-foreground">
                At NXTLVL Health, <strong>we're not just another one of those IBS clinics. We're a team that genuinely cares</strong> about your health, your body, and your life.
              </p>
              <p className="text-lg text-muted-foreground">
                <a 
                  href="https://nxtlvlhealth.com.au/what-we-treat/gut-health-naturopath-brisbane/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline"
                >
                  Click here to explore our Gut Health Naturopathy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Help You Get Your Life Back Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Help You Get Your Life Back</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                Living with IBS can feel like a <strong>daily struggle</strong>. You're constantly checking where the nearest bathroom is, stressing about what to eat, or hiding how you feel. <strong>But it doesn't have to be this way</strong>.
              </p>
              <p>
                With the right support, the right testing, and the right plan, <strong>you can feel better</strong>. IBS symptoms can have a huge impact on your quality of life, but they don't have to define it.
              </p>
              <p>
                You can <strong>wake up without bloating. Eat without fear. Travel without worry. And just live life again</strong>.
              </p>
              <p className="font-semibold text-primary">
                If you're ready to take that step, our <strong>IBS clinic is here for you</strong>.
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

export default IBSClinic;
