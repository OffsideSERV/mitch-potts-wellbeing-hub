
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Baby } from "lucide-react";

const ClayfieldNaturopathy = () => {
  return (
    <>
      <SEO 
        title="Best Naturopath Clayfield | Book a Free 15-Min Consult!"
        description="Not feeling like yourself and not getting answers? Mitchell is a 5-star Naturopath in Clayfield that will find and heal the root cause of your problems."
        canonical="/areas-we-serve/naturopath-clayfield-brisbane"
        keywords="naturopath Clayfield, Clayfield naturopathy, natural health Clayfield, holistic health Clayfield Brisbane"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopath <span className="text-primary">Clayfield</span> | Personalised Natural Health Support Near You
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopath consultation at NXTLVL Health near Clayfield" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/5ab885c2-6334-4880-bd61-dce3bd826f8e.png"
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Natural Health Care</p>
                        <p className="text-xs text-muted-foreground">Clayfield • Naturopathy</p>
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
                    <span className="text-center">Book a Free 15-Min Consult!</span>
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
                alt="Naturopath consultation at NXTLVL Health near Clayfield" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/5ab885c2-6334-4880-bd61-dce3bd826f8e.png"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Natural Health Care</p>
                    <p className="text-sm text-muted-foreground">Clayfield • Naturopathy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for a Naturopath Near Clayfield Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Looking for a Naturopath Near Clayfield?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png" 
              alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  If you're based in Clayfield and searching for a <strong>kind, experienced naturopath</strong> who takes the time to really listen, NXTLVL Health is just around the corner. While we're not located directly in Clayfield, our clinic is close by—and we regularly see clients from this beautiful Brisbane suburb.
                </p>
                <p>
                  Whether you're feeling tired, stressed, run-down, or struggling with a chronic health issue, we're here to help you feel your best again—<strong>naturally</strong>.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png" 
                alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Helping You Feel Better, Naturally Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Helping You Feel Better, Naturally</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/d515fc10-3cc2-4062-adf8-2638cee1c7bc.png" 
              alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  At NXTLVL Health, we offer a <strong>holistic approach to health and wellbeing</strong>. That means we look at your whole body—not just one symptom or one part. Naturopathy is a holistic approach to healthcare that views the body as a whole. Whether it's your digestion, hormones, skin, or mood, <strong>everything in your body is connected</strong>. And when we support the root cause, your body can begin to heal.
                </p>
                <p>
                  We use <strong>natural therapies, herbal medicine, nutritional medicine, and functional testing</strong> to help you feel more balanced, calm, and full of energy.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/d515fc10-3cc2-4062-adf8-2638cee1c7bc.png" 
                alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free 15-Min Consult CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4">Not Sure If We're Right for You?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Book a free 15-minute consultation to discuss your health concerns and see how we can help.
          </p>
          <Button asChild className="text-lg px-8 py-4">
            <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
              Book a Free 15-Min Consult!
            </a>
          </Button>
        </div>
      </section>

      {/* Our Naturopathic Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Naturopathic Services</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              We help people with a <strong>wide range of health concerns</strong> every day. Whether you're starting your health journey, managing an ongoing condition, or just wanting more energy and vitality, we'll support you every step of the way.
            </p>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/95e81372-7d61-43a1-b42c-b1cf39f1ff92.png" 
              alt="Naturopath checking blood pressure of patient at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Some of the areas we support include:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Digestive issues like bloating, reflux, IBS, and constipation",
              "Mental health symptoms such as anxiety, low mood, and stress",
              "Hormonal imbalances like PMS, menopause, and irregular cycles",
              "Skin conditions like acne, eczema, and perioral dermatitis",
              "Fatigue, burnout, and chronic tiredness",
              "Women's health and fertility",
              "General health and wellness support"
            ].map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We believe <strong>every person is unique</strong>. That's why we create tailored support plans that match your body, lifestyle, and goals. Empowering clients with knowledge and tools is a key component of personalized health plans. <strong>No cookie-cutter plans. Just what works for you.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Why Clayfield Locals Trust NXTLVL Health Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Clayfield Locals Trust NXTLVL Health</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Even though our clinic isn't in Clayfield, many of our clients live just around the corner and are happy to make the short trip for <strong>high-quality naturopathic care</strong>.
            </p>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/001a23d3-f9a1-4973-a6a1-a0bf46a7cfbb.png" 
              alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Here's why Clayfield clients choose us:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "We take the time to listen",
              "We focus on the root cause, not just the symptoms",
              "We offer natural treatments that support your body",
              "We work with you—not just at you",
              "We believe in long-lasting results, not quick fixes"
            ].map((reason, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Your wellbeing matters to us. That's why we offer a <strong>supportive space</strong> where you feel heard, understood, and empowered to take control of your health.
            </p>
          </div>
        </div>
      </section>

      {/* A Collaborative Approach to Your Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Collaborative Approach to Your Health</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/95e81372-7d61-43a1-b42c-b1cf39f1ff92.png" 
              alt="Naturopath showing patient results on a computer at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Your health is personal. It's not just about fixing one problem—it's about helping your <strong>whole body and mind feel better</strong>. True health encompasses the mind, body, and spirit.
                </p>
                <p>
                  At NXTLVL Health, we take a <strong>collaborative approach</strong>. That means we work with you to create a simple, clear plan that fits your daily life. We may also work alongside other medical professionals if needed, so you get the most complete care possible.
                </p>
                <p>
                  We combine <strong>herbal medicine, nutrition, and lifestyle guidance</strong> to support your healing process from the inside out.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/95e81372-7d61-43a1-b42c-b1cf39f1ff92.png" 
                alt="Naturopath showing patient results on a computer at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free 15-Min Consult CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Health Journey?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Take the first step with a free 15-minute consultation to see how we can support your health goals.
          </p>
          <Button asChild className="text-lg px-8 py-4">
            <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
              Book a Free 15-Min Consult!
            </a>
          </Button>
        </div>
      </section>

      {/* Supporting Your Mental Health, Gently Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Supporting Your Mental Health, Gently</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Mental health can affect every part of your life—your sleep, your focus, your mood, your energy. At NXTLVL Health, we offer <strong>gentle, supportive strategies</strong> to help with:
            </p>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/27a9d38d-9848-4b64-aa99-831c8689e952.png" 
              alt="Woman dealing with health concerns at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Anxiety",
              "Depression", 
              "Low motivation",
              "Poor concentration",
              "Emotional overwhelm"
            ].map((condition, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center space-y-3">
                    <Brain className="h-8 w-8 text-primary" />
                    <span className="text-muted-foreground font-medium">{condition}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our <strong>naturopathic approach to mental health</strong> uses nutrition, herbs, and lifestyle changes to support your nervous system and help you feel more calm, centred, and clear.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We also offer <strong>natural therapies</strong> to reduce stress, improve sleep, and help your body feel safe again.
            </p>
          </div>
        </div>
      </section>

      {/* Hormonal Balance and Women's Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Hormonal Balance and Women's Health</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Many women come to us feeling confused, overwhelmed, or frustrated with their hormones. Whether it's irregular periods, PMS, perimenopause, or recovering after the pill, <strong>we're here to help</strong>.
            </p>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png" 
              alt="Naturopath checking patient vitals at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We look at the <strong>underlying cause of hormone symptoms</strong> and create a plan to support your body back to balance. This might include:
              </p>
              
              <div className="grid gap-4">
                {[
                  "Herbal medicine to support hormone pathways",
                  "Prescribing supplements to correct deficiencies",
                  "Functional blood tests to explore your hormones deeper",
                  "Nutritional guidance for a healthy lifestyle"
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Women from Clayfield often visit our clinic for help with hormonal concerns because they want <strong>real answers, not just temporary solutions</strong>.
              </p>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png" 
                alt="Naturopath checking patient vitals at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A Focus on Gut Health and Digestive Support Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Focus on Gut Health and Digestive Support</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              <strong>So many health problems start in the gut.</strong> If your digestion isn't working well, it can affect your mood, energy, skin, hormones, and even immune health.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              At NXTLVL Health, we look closely at your digestive issues and use <strong>naturopathic treatments</strong> to support healing from the inside out.
            </p>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" 
              alt="Gut health and digestive support at NXTLVL Health clinic" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">This might include:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Functional testing to explore gut bacteria and inflammation",
              "Tailored herbal medicine and probiotics",
              "Food and lifestyle guidance to rebuild gut health",
              "Nutritional medicine to support absorption and healing"
            ].map((approach, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Activity className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {approach}
                      {index === 1 && (
                        <>
                          <br />
                          <br />
                          <a 
                            href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/herbal-medicine" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 underline"
                          >
                            Learn about the effectiveness of Herbal Medicine
                          </a>
                        </>
                      )}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our goal is to help you <strong>enjoy food again, reduce symptoms, and support your overall vitality</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Free 15-Min Consult CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4">Want to Learn More About Our Approach?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Schedule a free consultation to discuss your specific health concerns and treatment options.
          </p>
          <Button asChild className="text-lg px-8 py-4">
            <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
              Book a Free 15-Min Consult!
            </a>
          </Button>
        </div>
      </section>

      {/* Stress, Fatigue, and Burnout Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stress, Fatigue, and Burnout</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png" 
              alt="Stress and fatigue support at NXTLVL Health clinic" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  <strong>Feeling tired all the time?</strong> Many of our Clayfield clients come to us when they're completely exhausted—mentally, emotionally, and physically.
                </p>
                <p>
                  We understand how draining it can be to push through each day with no energy, poor sleep, and constant overwhelm. That's why we support your <strong>adrenal health, your nervous system, and your daily life</strong>.
                </p>
                <p>
                  You don't have to do it alone. With the right guidance and tailored support, your body can recover, recharge, and feel strong again. The human body has a <strong>remarkable capacity to heal and maintain optimal health</strong>.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png" 
                alt="Stress and fatigue support at NXTLVL Health clinic" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Natural Support for the Whole Family Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural Support for the Whole Family</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/27a9d38d-9848-4b64-aa99-831c8689e952.png" 
              alt="Family health support at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center">
            <p>
              At NXTLVL Health, we welcome <strong>people of all ages and stages</strong>. Whether you're a parent, student, professional, or retiree—your health matters. And we're here to support you.
            </p>
            <p>
              We love working with the <strong>Clayfield community</strong> and helping families feel confident in their health decisions. We're also happy to work alongside massage therapists, doctors, or other wellness providers to give you the care you need.
            </p>
            <p>
              We believe <strong>health is a team effort</strong>. And you're at the centre of it.
            </p>
          </div>
        </div>
      </section>

      {/* Our Holistic Approach to Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Holistic Approach to Health</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              When you visit NXTLVL Health, we start with a <strong>thorough health consultation</strong>. We ask about your symptoms, lifestyle, medical history, and health goals. Appointments can be booked online or by phone at naturopath clinics.
            </p>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/001a23d3-f9a1-4973-a6a1-a0bf46a7cfbb.png" 
              alt="Holistic health approach at NXTLVL Health natural medicine clinic" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">From there, we build a personalised plan using:</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Naturopathic medicine",
              "Herbal remedies",
              "Nutritional support",
              "Functional testing and blood tests",
              "Stress and lifestyle advice",
              "Relaxation techniques"
            ].map((approach, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center space-y-3">
                    <Heart className="h-8 w-8 text-primary" />
                    <span className="text-muted-foreground font-medium">{approach}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our goal is always to help you <strong>enjoy life, feel good in your body, and experience better health—naturally</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Mitch Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Mitch – Your Naturopath Near Clayfield</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png" 
              alt="Mitch, experienced naturopath at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mitch is an <strong>experienced, compassionate naturopath</strong> who's helped hundreds of people transform their health. He has a special interest in:
              </p>
              
              <div className="grid gap-4">
                {[
                  "Mental health",
                  "Women's hormones",
                  "Digestive problems",
                  "Fatigue and burnout"
                ].map((specialty, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground font-medium">{specialty}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Mitch takes the time to understand what's going on in your body and in your life. His approach is <strong>practical, evidence-based, and tailored to you</strong>.
                </p>
                <p>
                  With <strong>over a decade in the field</strong>, Mitch combines clinical experience, ongoing education, and a warm, supportive presence to help you feel truly cared for.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png" 
                alt="Mitch, experienced naturopath at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Take the Next Step Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" 
              alt="Ready to start your health journey at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center">
            <p>
              If you've been looking for a <strong>naturopath Clayfield locals trust</strong>, NXTLVL Health is just a short drive away—and we're ready to help.
            </p>
            <p>
              Whether you're managing stress, dealing with hormonal changes, or just want to feel more balanced, we'll help you <strong>get to the root of the problem</strong> and support your journey to optimal health.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your First Appointment Today</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                You deserve to <strong>feel good in your body, your mind, and your daily life</strong>. Book your first consultation with Mitch at NXTLVL Health today and take the first step toward real, lasting change.
              </p>
              <p>
                <strong>We're here for you, every step of the way.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book a Free 15-Min Consult!
                </a>
              </Button>
              <Button variant="outline" asChild className="text-base sm:text-lg px-6 py-4">
                <a href="tel:0731808853">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
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

export default ClayfieldNaturopathy;
