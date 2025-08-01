
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Zap, Target, Sparkles } from "lucide-react";

const HormonalAcneNaturopathy = () => {
  return (
    <>
      <SEO 
        title="Best Hormonal Acne Naturopath in Brisbane | Free Consult!"
        description="Skin breaking out and have no idea why? No problem, Mitch's Hormonal Acne Naturopathy will finally give you answers. Book a free 15-min consult today!"
        canonical="/what-we-treat/hormonal-acne-naturopath"
        keywords="hormonal acne naturopath Brisbane, hormonal acne treatment, natural acne treatment, acne specialist Brisbane, hormonal balance Brisbane"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Hormonal Acne Naturopathy | <span className="text-primary">Balance Your Skin and Hormones</span> Naturally at NXTLVL Health
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopath Mitch checking a patient's blood pressure at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/95e81372-7d61-43a1-b42c-b1cf39f1ff92.png"
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Sparkles className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Hormonal Acne</p>
                        <p className="text-xs text-muted-foreground">Natural • Hormone Balance • Clear</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
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
                alt="Naturopath Mitch checking a patient's blood pressure at NXTLVL Health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/95e81372-7d61-43a1-b42c-b1cf39f1ff92.png"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Hormonal Acne</p>
                    <p className="text-sm text-muted-foreground">Natural • Hormone Balance • Clear</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finally, Real Relief Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Finally, Real Relief from Hormonal Acne</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                Do you break out around your period? Do <strong>painful cysts</strong> keep popping up on your jawline, chin, or cheeks? Have you tried every acne treatment with no long-term results?
              </p>
              <p>
                <strong>Hormonal acne is more than skin deep.</strong> It's painful, frustrating, and can impact your confidence and wellbeing. If this sounds like you, you're not alone.
              </p>
                <p>
                  At NXTLVL Health, Mitch is a <strong>trusted hormonal acne naturopath</strong> who helps women and teens understand the root cause of their breakouts. Using a holistic approach, he creates natural treatment plans to support hormone balance, skin health, gut health, and overall wellbeing. Whether you're dealing with hormonal acne specifically or other <a href="/what-we-treat/acne-naturopathy" className="text-primary hover:underline">general acne concerns</a>, our comprehensive <a href="/what-we-treat/naturopathy-for-skin" className="text-primary hover:underline">skin naturopathy approach</a> addresses the whole person.
                </p>
            </div>

            <div className="text-center mt-12">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book a Free 15-Min Consult
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Hormonal Acne Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">What Is Hormonal Acne?</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong>Hormonal acne is a type of acne caused by shifts in hormone levels.</strong> This can include androgens (male hormones like testosterone), estrogen, progesterone, insulin, and cortisol. These fluctuations can increase oil production, slow skin cell turnover, and trigger inflammation in the skin. <strong>Blood tests are essential</strong> for identifying the root cause of hormonal acne, particularly to assess hormone levels such as androgens, blood sugar, and insulin.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <img 
              src="/lovable-uploads/d515fc10-3cc2-4062-adf8-2638cee1c7bc.png" 
              alt="Naturopath analyzing hormonal acne causes at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Hormonal acne often shows up as:</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              <span><a href="https://my.clevelandclinic.org/health/diseases/21737-cystic-acne" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Deep, painful cystic acne</a></span>,
              "Pimples around the jawline, chin, neck, or cheeks",
              "Acne flare ups around the menstrual cycle",
              "Post pill acne (after stopping oral contraceptive pills)",
              "Persistent acne that doesn't respond to typical treatments"
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hormonal Acne Happens Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Why Hormonal Acne Happens</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong>Hormonal imbalances are common,</strong> especially during puberty, perimenopause, post-birth control, or times of high stress. Other contributors include:
              </p>
            </div>
          </div>

          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/27a9d38d-9848-4b64-aa99-831c8689e952.png" 
              alt="Woman dealing with hormonal acne symptoms" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid gap-4">
                {[
                  "Poor gut health",
                  "Blood sugar spikes and insulin resistance",
                  "Nutrient deficiencies",
                  "Refined sugars and processed foods",
                  "Disrupted detox pathways",
                  "High cortisol levels from chronic stress"
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-destructive">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/27a9d38d-9848-4b64-aa99-831c8689e952.png" 
                alt="Woman dealing with hormonal acne symptoms" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center mt-12 max-w-4xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground">
              <strong>Dietary adjustments can reduce insulin resistance</strong> and may alleviate acne symptoms.
            </p>
            <p className="text-lg text-muted-foreground">
              These internal imbalances contribute to acne development by <strong>increasing sebum (oil) production, clogging pores with dead skin cells, and triggering inflammation.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* How a Hormonal Acne Naturopath Can Help Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">How a Hormonal Acne Naturopath Can Help</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                Mitch takes a <strong>unique approach to acne treatment.</strong> Rather than relying on short-term solutions or harsh topical treatments, he helps you understand what's causing your acne from within.
              </p>
              <p>
                As a <strong>naturopath hormonal acne specialist,</strong> Mitch focuses on:
              </p>
            </div>
          </div>

          <div className="mb-12">
            <img 
              src="/lovable-uploads/95e81372-7d61-43a1-b42c-b1cf39f1ff92.png" 
              alt="Hormonal acne naturopath showing treatment results at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Finding the root cause of your hormonal acne",
              "Balancing hormone levels naturally",
              "Supporting gut and liver health",
              "Improving digestion and blood sugar stability",
              "Strengthening the skin barrier with nutrition"
            ].map((item, index) => (
              <Card key={index} className="text-center border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-base text-muted-foreground">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              This results in <strong>clearer skin, improved energy, better moods, and lasting health changes.</strong>
            </p>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Initial Consultation Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">What to Expect in Your Initial Consultation</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                Your first appointment at NXTLVL Health includes a <strong>full health assessment.</strong> Mitch will ask about your acne symptoms, menstrual cycle, gut health, digestion, sleep, stress, and skincare.
              </p>
              <p>
                You may also receive recommendations for <strong>functional testing</strong> such as:
              </p>
            </div>
          </div>

          <div className="mb-12">
            <img 
              src="/lovable-uploads/5ab885c2-6334-4880-bd61-dce3bd826f8e.png" 
              alt="Initial consultation for hormonal acne at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Hormone blood tests",
              "Gut microbiome and digestive health analysis",
              "Inflammatory markers and nutrient panels"
            ].map((item, index) => (
              <Card key={index} className="text-center border-t-4 border-t-secondary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-base text-muted-foreground">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              These tests help us create a <strong>customised acne management plan</strong> based on your body's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Plan Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Your Personalised Acne Treatment Plan</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
              <p>
                Once we understand what's happening inside your body, Mitch builds a <strong>treatment plan designed to:</strong>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              "Balance hormones",
              "Reduce acne flare ups",
              "Improve gut health and digestion",
              "Reduce inflammation",
              "Clear detox pathways",
              "Support clearer skin, naturally"
            ].map((item, index) => (
              <Card key={index} className="text-center border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-base text-muted-foreground">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Treatment Sections */}
          <div className="space-y-20">
            {/* Nutritional Therapy */}
            <div className="space-y-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">Nutritional Therapy</h3>
              
              <div className="lg:hidden mb-8">
                <img 
                  src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" 
                  alt="Nutritional therapy consultation for hormonal acne at NXTLVL Health" 
                  className="rounded-2xl shadow-lg w-full h-auto mx-auto"
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      We'll support healthy skin with foods that <strong>reduce inflammation and stabilise blood sugar.</strong> This may involve removing high glycemic foods, processed snacks, refined sugars, and hydrogenated oils. Instead, you'll add in a <strong>whole-food diet emphasizing consuming foods in their most natural state,</strong> which can be highly beneficial for acne treatment.
                    </p>
                  </div>
                  
                  <div className="grid gap-3">
                    {[
                      "Green leafy vegetables",
                      "Whole grains",
                      "Healthy fats (avocado, nuts, olive oil)",
                      "Fatty fish",
                      "Probiotic rich foods",
                      "Lean proteins"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-lg text-muted-foreground">
                    These dietary changes can <strong>reduce acne and support healthy hormone function.</strong>
                  </p>
                </div>
                
                <div className="relative hidden lg:block">
                  <img 
                    src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" 
                    alt="Nutritional therapy consultation for hormonal acne at NXTLVL Health" 
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Herbal Medicine */}
            <div className="space-y-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">Herbal Medicine and Supplements</h3>
              
              <div className="text-center mb-8">
                <p className="text-lg text-muted-foreground mb-6 max-w-4xl mx-auto">
                  <strong>Herbs and natural ingredients can:</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                {[
                  "Regulate menstrual cycles",
                  "Reduce stress-related cortisol levels",
                  "Support liver detox pathways",
                  "Calm inflammatory skin conditions"
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <Heart className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center space-y-4">
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                  <strong>Indole-3-Carbinol (I3C)</strong> aids the liver in metabolizing and excreting estrogens.
                </p>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                  Mitch uses <strong>therapeutic doses tailored to your body,</strong> including key nutrients like zinc (which may help reduce acne lesions), vitamin A, and omega-3s.
                </p>
              </div>
            </div>

            {/* Stress Management */}
            <div className="space-y-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">Stress Management Techniques</h3>
              
              <div className="text-center mb-8">
                <p className="text-lg text-muted-foreground mb-6 max-w-4xl mx-auto">
                  <strong>Chronic stress affects the skin and hormones.</strong> Mitch provides gentle tools like:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
                {[
                  "Deep breathing",
                  "Mindfulness",
                  "Sleep support",
                  "Lifestyle adjustments"
                ].map((item, index) => (
                  <Card key={index} className="text-center border-t-4 border-t-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <Sparkles className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-base text-muted-foreground">{item}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center space-y-4">
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                  <strong>Effective stress management techniques</strong> include deep breathing, yoga, meditation, and journaling.
                </p>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                  These techniques <strong>reduce cortisol levels,</strong> helping your skin stay calm and balanced.
                </p>
              </div>
            </div>

            {/* Gut Health */}
            <div className="space-y-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">Gut Health and Digestion</h3>
              
              <div className="lg:hidden mb-8">
                <img 
                  src="/lovable-uploads/001a23d3-f9a1-4973-a6a1-a0bf46a7cfbb.png" 
                  alt="Gut health consultation for hormonal acne at NXTLVL Health" 
                  className="rounded-2xl shadow-lg w-full h-auto mx-auto"
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      <strong>Gut bacteria influence immune function, hormone metabolism, and nutrient absorption.</strong> Poor gut health can contribute to acne and inflammation.
                    </p>
                    <p>
                      Your <strong>acne naturopath plan</strong> may include:
                    </p>
                  </div>
                  
                  <div className="grid gap-3">
                    {[
                      "Prebiotic and probiotic support",
                      "Herbal antimicrobials",
                      "Digestive enzymes",
                      "Support for leaky gut"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-lg text-muted-foreground">
                    <strong>Improving gut health leads to improved skin health</strong> and reduces acne-prone triggers.
                  </p>
                </div>
                
                <div className="relative hidden lg:block">
                  <img 
                    src="/lovable-uploads/001a23d3-f9a1-4973-a6a1-a0bf46a7cfbb.png" 
                    alt="Gut health consultation for hormonal acne at NXTLVL Health" 
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hormonal Acne in Women Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Hormonal Acne in Women: It's More Than Just Skin Deep</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong>Many women experience acne linked to their hormonal cycle.</strong> This includes:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Pre-menstrual acne",
              "Mid-cycle (ovulation) breakouts",
              "Acne during perimenopause",
              "Post pill acne"
            ].map((item, index) => (
              <Card key={index} className="text-center border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-base text-muted-foreground">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              These patterns reveal <strong>valuable clues about what your hormones are doing.</strong> Mitch helps decode those signs and guide your body back to balance.
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png" 
              alt="Hormonal acne consultation for women at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="text-center">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Common Signs Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Common Signs You Have Hormonal Acne</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Acne flares up at the same time each month",
              "Pimples show up along the jawline and neck",
              "Your skin is oily and congested",
              "You feel tired, moody, or bloated around your period",
              "You have irregular or painful cycles"
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Conventional Treatments Don't Work Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Why Conventional Acne Treatments Often Don't Work</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong>Most conventional acne treatments</strong> like antibiotics, oral contraceptives, or prescription creams treat surface symptoms. But they don't address the internal causes of hormonal acne.
              </p>
              <p>
                <strong>These approaches can:</strong>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Disrupt gut bacteria",
              "Mask symptoms without healing the cause",
              "Create dependency or side effects",
              "Worsen skin after stopping (e.g. post pill acne)"
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 border-2 border-destructive rounded mt-1 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our <strong>holistic approach is about lasting results</strong> and healthier skin from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* Supporting All of You Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Supporting All of You – Not Just Your Skin</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong>Hormonal acne is personal.</strong> It affects your skin, your confidence, and your life. That's why Mitch supports every part of your journey:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              "Your skin",
              "Your body",
              "Your hormones",
              "Your mental health",
              "Your confidence"
            ].map((item, index) => (
              <Card key={index} className="text-center border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-base text-muted-foreground">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              It's not just about looking better — <strong>it's about feeling better, inside and out.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* What Makes NXTLVL Different Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">What Makes NXTLVL Health Different</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "We don't do one-size-fits-all protocols",
              "We address the cause of your acne",
              "We use evidence-based natural treatments",
              "We create simple, practical plans that work",
              "We support you every step of the way"
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Mitch is a <strong>hormonal acne naturopath with years of experience</strong> treating skin conditions through nutrition, lifestyle, herbal medicine, and functional testing. His goal is to help you <strong>feel empowered and confident in your skin again.</strong>
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png" 
              alt="NXTLVL Health hormonal acne naturopath Mitch working at clinic" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="text-center">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Real Stories, Real Results</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              <strong>Many women who come to NXTLVL Health say:</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              '"My breakouts are finally going away."',
              '"I don\'t feel so overwhelmed by my cycle anymore."',
              '"My skin and my mood are both so much better."',
              '"I\'m not hiding behind makeup all the time now."'
            ].map((testimonial, index) => (
              <Card key={index} className="bg-primary/5 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 9V5a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z"/>
                      </svg>
                    </div>
                    <p className="text-muted-foreground italic">{testimonial}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Your journey might be different, but with the right support, <strong>you can see real changes too.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Who We Help</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              <strong>We support clients with:</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Hormonal acne",
              "Cystic acne",
              "Acne related to menstrual cycles",
              "Acne from oral contraceptive pills or IUDs",
              "Acne and digestive issues",
              "Post pill acne",
              "Acne and PCOS symptoms"
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Ready to Clear Up Hormonal Acne Naturally?</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                <strong>You don't need to live with acne forever.</strong> With the right approach, you can:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {[
                "Reduce acne flare ups",
                "Improve your energy and mood",
                "Balance your hormones naturally",
                "Heal your gut and digestion",
                "Support clearer, healthier skin"
              ].map((benefit, index) => (
                <Card key={index} className="text-center border-t-4 border-t-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-base text-muted-foreground">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Book your <strong>free 15-minute consult</strong> with Mitch at NXTLVL Health and take the first step toward long-term acne relief.
              </p>
              <p className="font-semibold text-xl">
                Feel confident in your skin again — from the inside out.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Your Free 15-Minute Consultation
                </a>
              </Button>
              <Button variant="outline" asChild className="text-base sm:text-lg px-6 py-4">
                <a href="tel:0731808853">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Call Mitch
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

export default HormonalAcneNaturopathy;
