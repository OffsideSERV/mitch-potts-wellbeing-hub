
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Sparkles, Leaf, Stethoscope } from "lucide-react";

const IndooroopillyNaturopathy = () => {
  return (
    <>
      <SEO 
        title="Naturopath Indooroopilly | Natural Health Clinic Brisbane"
        description="Expert naturopath serving Indooroopilly and surrounding Brisbane areas. Specialising in natural health solutions, gut health, hormones, and holistic wellness."
        canonical="/areas-we-serve/naturopath-indooroopilly"
        keywords="naturopath Indooroopilly, natural health Indooroopilly, holistic health Brisbane, naturopathy clinic Indooroopilly"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopath <span className="text-primary">Indooroopilly</span> | Personalised Natural Health Support Near You
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="NXTLVL Health naturopath consultation near Indooroopilly" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Leaf className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Naturopathy Near You</p>
                        <p className="text-xs text-muted-foreground">Natural • Personalised • Caring</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-0">
                <Button 
                  asChild 
                  className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight"
                >
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
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
                alt="NXTLVL Health naturopath consultation near Indooroopilly" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Leaf className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Naturopathy Near You</p>
                    <p className="text-sm text-muted-foreground">Natural • Personalised • Caring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for a Naturopath Near Indooroopilly Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Looking for a Naturopath Near Indooroopilly?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/507d386f-e7d8-4e14-a144-56b40f6d528f.png" 
              alt="NXTLVL Health natural medicine clinic near Indooroopilly" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  If you're in Indooroopilly QLD and searching for a <strong>kind and caring naturopath</strong>, you're in the right place. NXTLVL Health isn't located directly in Indooroopilly, but we're just a <strong>short drive away</strong>—and we regularly support clients from the area, including Chapel Hill and surrounding suburbs. <strong>Naturopathy is a holistic approach to healthcare</strong> that focuses on supporting the body's innate ability to heal.
                </p>
                <p>
                  We help people who feel <strong>tired, stressed, or unwell</strong> find their way back to better health using <strong>natural therapies, herbal medicine, and nutrition</strong>. Whether you're dealing with food intolerances, chronic health conditions, or just want to feel like yourself again, we're here to help.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/507d386f-e7d8-4e14-a144-56b40f6d528f.png" 
                alt="NXTLVL Health natural medicine clinic near Indooroopilly" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Natural Therapies Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural Therapies That Support Your Body</h2>
          </div>

          {/* Image under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/0aadec6a-7f1f-4a21-854c-39d8c3a218d0.png" 
              alt="Natural therapies and holistic health analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              At NXTLVL Health, we <strong>don't just treat symptoms</strong>—we <strong>look for the root causes</strong>. Our goal is to understand what's really going on in your body and create a personalised plan to help you feel better. <strong>A holistic approach aims to address the root causes of imbalances</strong> to promote long-term health. This includes looking at:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Gut health",
              "Sleep issues", 
              "Anxiety and depression",
              "Hormone issues",
              "Weight management",
              "Nutritional deficiencies"
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
            <p>
              Using <strong>herbal medicine, nutritional medicine, and evidence-based strategies</strong>, we help restore balance and promote optimal health. <strong>Naturopathy aims to support the body's innate ability to heal</strong> through nutritional guidance and lifestyle modifications.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Mitch Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Mitch – Your Trusted Practitioner</h2>
          </div>

          {/* Image under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
              alt="Mitch providing naturopathy consultation at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Mitch is an <strong>experienced naturopath</strong> who has a <strong>special interest in gut health, chronic conditions, and women's wellness</strong>. With a background in health science and natural healthcare, Mitch offers <strong>personalised care that is both compassionate and practical</strong>. <strong>Qualified naturopaths have achieved a minimum degree level qualification</strong> in Health Science.
            </p>
            <p>
              Many clients from Indooroopilly come to see Mitch because they want a <strong>practitioner who takes the time to listen</strong> and create a plan that suits their health needs and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions We Support Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Conditions We Support</h2>
          </div>

          {/* Image under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/778efa12-2a50-4463-9137-b9811fb860b1.png" 
              alt="Naturopath discussing health conditions and treatment options" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              Whether you're facing a <strong>chronic health condition</strong> or just <strong>not feeling your best</strong>, we can help. Common health concerns we support include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Digestive issues (bloating, IBS, reflux, constipation)",
              "Weight loss and healthy weight management",
              "Allergies and food intolerances",
              "Sleep problems and fatigue",
              "Hormonal imbalances (PMS, menopause, irregular cycles)",
              "Anxiety, stress, and depression",
              "Nutritional deficiencies"
            ].map((condition, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{condition}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong>Each plan is tailored to your unique situation</strong>. We use a combination of dietary advice, lifestyle changes, and supplements when needed.
            </p>
          </div>
        </div>
      </section>

      {/* Why Indooroopilly Locals Choose NXTLVL Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Indooroopilly Locals Choose NXTLVL Health</h2>
          </div>

          {/* Image under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/6d0b6778-ba4b-478d-9180-3b79fe27577c.png" 
              alt="Natural health solutions trusted by Indooroopilly residents" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              Clients from Indooroopilly choose NXTLVL Health because we offer:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "A holistic approach to health",
              "Natural solutions that work with the body",
              "Support for long-term change—not just short-term fixes",
              "A welcoming and professional environment",
              "Flexible appointment options (in person or book online)"
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
            <p>
              We're here to <strong>walk beside you on your health journey</strong>—offering support, education, and practical steps to help you feel better.
            </p>
          </div>
        </div>
      </section>

      {/* Medical Nutrition Therapy Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Medical Nutrition Therapy for Chronic Health Conditions</h2>
          </div>

          {/* Image under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/7bb7f8b7-68b3-4f02-9a8a-a38103492671.png" 
              alt="Medical nutrition therapy and natural supplements for chronic conditions" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              Many people are <strong>told their blood tests are "normal,"</strong> yet they still feel unwell. That's where <strong>medical nutrition therapy</strong> can help. By addressing what your body needs at a cellular level, we can support you through chronic conditions like:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Autoimmune issues",
              "Ongoing fatigue",
              "Mood imbalances",
              "Inflammatory health conditions"
            ].map((condition, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Stethoscope className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{condition}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
            <p>
              Our treatments combine <strong>nutrition, herbal medicine, and lifestyle advice</strong>. We believe <strong>food is powerful medicine</strong>—and we'll help you use it in a way that's personalised and easy to follow. In naturopathy, the <strong>focus is on educating individuals about informed health decisions</strong>, including nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Gut Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Focus on Gut Health and Digestive Wellness</h2>
          </div>

          {/* Image under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/cd8ab112-2bd6-4be4-be10-c3befc93ee7d.png" 
              alt="Gut health and digestive wellness focus at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              <strong>Your gut affects everything</strong>—from energy and skin to hormones and mental clarity. If your digestion isn't right, <strong>you won't feel your best</strong>. <strong>Naturopathy optimises digestion</strong>, helping to improve overall health and well-being.
            </p>
            <p>
              We help clients from Indooroopilly with <strong>gut-related issues</strong> such as:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Bloating and discomfort",
              "Reflux and indigestion",
              "Constipation or diarrhoea",
              "Food reactions and intolerances"
            ].map((issue, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Activity className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{issue}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
            <p>
              We use <strong>functional testing when needed</strong> and recommend <strong>targeted therapies</strong> to restore gut balance.
            </p>
          </div>
        </div>
      </section>

      {/* Mental Health Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Supporting Mental Health Naturally</h2>
          </div>

          {/* Image under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/82a0148f-2f85-443c-b857-1901ae6c2d7f.png" 
              alt="Natural mental health support and wellness at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              <strong>Anxiety and depression are more common than you might think</strong>—but they <strong>don't have to define your life</strong>. Mitch supports mental health with <strong>gentle, natural strategies</strong> that work alongside your current lifestyle.
            </p>
            <p>
              This may include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Herbal support for the nervous system",
              "Nutrition to boost mood and energy",
              "Sleep and stress management techniques",
              "Gut-brain axis support"
            ].map((support, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Brain className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{support}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong>You don't have to do it alone</strong>. There are <strong>natural options</strong> that can help you feel more calm, confident, and in control.
            </p>
          </div>
        </div>
      </section>

      {/* Hormones and Weight Management Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Hormones and Weight Management</h2>
          </div>

          {/* Image under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/962a87f9-09a3-44b2-999e-17a243fd6ab5.png" 
              alt="Hormone balance and weight management support at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              Whether you're dealing with <strong>hormone fluctuations</strong> or <strong>struggling to manage your weight</strong>, we can help. Mitch works with many women and men on: <strong>Naturopathy can balance hormones</strong>, providing a natural way to address hormonal imbalances and related symptoms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Hormone balance",
              "PMS and menopause symptoms",
              "Sustainable weight loss",
              "Stress-related weight gain"
            ].map((area, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
            <p>
              Our approach is <strong>kind, science-based, and personalised</strong>—so you can feel better without the pressure of <strong>extreme diets</strong> or unsustainable routines.
            </p>
          </div>
        </div>
      </section>

      {/* First Consultation Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect at Your First Consultation</h2>
          </div>

          {/* Image under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/d0e8c359-9fb6-4deb-be11-eb99c346b1c6.png" 
              alt="First naturopathy consultation and health assessment" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              <strong>Your first appointment is all about understanding you</strong>. We'll look at your:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Health history",
              "Current symptoms",
              "Diet and lifestyle habits",
              "Blood tests (if needed)",
              "Health goals"
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

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
            <p>
              Then, we'll <strong>build a clear plan</strong> that makes sense and fits into your life. <strong>You'll leave with confidence and a real path forward</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Flexible Appointment Options Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Flexible Appointment Options</h2>
          </div>

          {/* Image under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/9e5ed0a0-bb35-4fde-9965-94edcb9294a8.png" 
              alt="Flexible appointment options including online consultations" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              We welcome Indooroopilly clients for <strong>in-person visits</strong> and also offer <strong>online consultations</strong> for added convenience. Whether you're in Chapel Hill, Toowong, or elsewhere in Brisbane, <strong>our doors are open to you</strong>.
            </p>
            <p>
              To get started, you can <strong>easily book online</strong> or call our team. We're happy to answer any questions and help you choose the <strong>best time for your first visit</strong>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                </svg>
                Book Your Free 15-Minute Consult
              </a>
            </Button>
            <Button variant="outline" asChild className="text-base sm:text-lg px-6 py-4">
              <a href="tel:0731808853">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call Our Team
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Natural Healthcare Matters Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Natural Healthcare Matters</h2>
          </div>

          {/* Image under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/fe4256a1-0181-4c24-bf85-f8c27507574d.png" 
              alt="Importance of natural healthcare and holistic wellness approach" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              Many of our clients have <strong>tried everything before coming to us</strong>. They're tired of <strong>quick fixes</strong> and want something real—something that <strong>works with their body, not against it</strong>. <strong>Holistic approaches empower individuals</strong> to take control of their health through education and lifestyle changes.
            </p>
            <p>
              Natural therapies offer:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Fewer side effects",
              "Long-term benefits",
              "Support for root causes",
              "A more holistic view of your health"
            ].map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Sparkles className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
            <p>
              Our job is to <strong>help you understand your body better</strong> and support it with everything it needs to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Work Together</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                If you've been searching for a <strong>naturopath Indooroopilly locals trust</strong>, NXTLVL Health is here to help. We're <strong>nearby, we're experienced, and we truly care</strong>.
              </p>
              <p>
                <strong>You don't have to keep pushing through tiredness, discomfort, or stress alone</strong>. Let's find the answers together—and get you <strong>feeling better, naturally</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Start Your Natural Health Journey
                </a>
              </Button>
              <Button variant="outline" asChild className="text-base sm:text-lg px-6 py-4">
                <a href="tel:0731808853">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Get in Touch Today
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

export default IndooroopillyNaturopathy;
