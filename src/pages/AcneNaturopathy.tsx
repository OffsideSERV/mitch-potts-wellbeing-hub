
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Zap, Target, Sparkles } from "lucide-react";

const AcneNaturopathy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Acne Naturopathy | <span className="text-primary">Heal Your Skin</span> From the Inside Out at NXTLVL Health
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Woman with healthy skin after acne naturopathy treatment at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Sparkles className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Acne Naturopathy</p>
                        <p className="text-xs text-muted-foreground">Natural • Inside Out • Lasting</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
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
                alt="Woman with healthy skin after acne naturopathy treatment at NXTLVL Health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Acne Naturopathy</p>
                    <p className="text-sm text-muted-foreground">Natural • Inside Out • Lasting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struggling With Acne Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Struggling With Acne That Just Won't Go Away?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/KzhzvfYCqwWucZxbOivI.png" 
              alt="Healthy lifestyle and nutrition consultation at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Do you feel like you've tried every cream, face wash, and topical treatment out there? Does your acne keep coming back no matter what you do? Are you tired of hiding your skin and feeling self-conscious?
                </p>
                <p>
                  You're not alone. Acne is one of the most common skin conditions, and it can affect teens and adults alike. At NXTLVL Health, we understand how deeply acne can impact your confidence, your daily life, and your overall well being.
                </p>
                <p>
                  That's why Mitch, our <strong>trusted naturopath for acne</strong>, takes a different approach—one that gets to the root cause. A <strong>comprehensive health assessment</strong> is essential in the naturopathic approach to acne, including running lab work to assess digestion and nutritional status.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/KzhzvfYCqwWucZxbOivI.png" 
                alt="Healthy lifestyle and nutrition consultation at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is Acne Naturopathy Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Is Acne Naturopathy?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                <strong>Acne naturopathy</strong> is a natural, holistic way of treating acne by looking at the whole body. Instead of just treating the symptoms on your skin, we dig deeper to find what's really causing the breakouts. That includes things like hormonal imbalances, poor gut health, stress, diet, and lifestyle.
              </p>
              <p>
                Mitch uses a <strong>naturopathic approach to acne</strong> that supports healthy skin from the inside out. By balancing hormones, improving gut health, and reducing inflammation, we help your body restore balance so your skin can heal naturally. <a href="https://betterhealthpractice.com.au/should-i-see-a-naturopath-for-acne/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Learn more about how effective Naturopathy is for Acne</a>.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
              alt="Naturopath consultation for acne treatment at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>
        </div>
      </section>

      {/* Do Any of These Sound Like You Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Do Any of These Sound Like You?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "You have acne that won't go away, even with good skincare",
              "You break out around your period (hormonal acne)",
              "You've developed post pill acne after stopping the pill",
              "You have oily, acne prone skin with clogged pores",
              "Your skin feels red, sore, and inflamed",
              "You feel anxious or down about your skin",
              "You've tried everything, but nothing seems to work long-term"
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

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Causes Acne Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Causes Acne?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Acne happens when dead skin cells and excess oil block your pores. This creates the perfect environment for bacteria, which causes acne lesions like whiteheads, blackheads, and pimples.
              </p>
              <p>
                But acne isn't just about the skin—it's about what's happening inside your body. Here are some of the common root causes:
              </p>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
              alt="Naturopath analyzing root causes of acne at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid gap-4">
                {[
                  "Hormonal imbalances (like excess androgens or stress hormones), which can lead to excessive oil production and stimulate an inflammatory response",
                  "Poor gut health and digestion",
                  "High blood sugar or insulin resistance",
                  "Chronic stress and lack of sleep",
                  "Processed foods and refined sugars",
                  "Liver congestion and poor detox pathways"
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
                alt="Naturopath analyzing root causes of acne at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* How a Naturopath for Acne Can Help Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How a Naturopath for Acne Can Help</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                At NXTLVL Health, we don't just look at your skin. We look at your whole body.
              </p>
              <p>
                Mitch, our experienced <strong>skin naturopath</strong>, uses testing, deep health assessments, and natural treatments to understand what's going on. <strong>Hormone testing</strong> can provide a comprehensive view of how your body processes hormones. Then he builds a treatment plan that fits your unique needs and lifestyle.
              </p>
            </div>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-showing-patient-results-on-a-computer-scaled.jpeg" 
              alt="Naturopath showing acne treatment results to patient at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Initial Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your first visit includes a full health history, discussion of your acne symptoms, lifestyle factors, diet, digestion, sleep, stress, and more. We may also recommend hormone or gut testing to uncover deeper issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Personalised Acne Treatment Plans May Include:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Dietary changes to eliminate processed foods, high glycemic foods, and hydrogenated oils",
                    "Anti inflammatory foods to reduce acne flare ups",
                    "Gut healing protocols to improve digestion and restore balance, including incorporating fermented foods and probiotics",
                    "Herbal medicine to balance hormones and support liver function",
                    "Essential nutrients like zinc, vitamin A, and omega-3s to support healthy skin",
                    "Stress management techniques like deep breathing, mindfulness, and sleep hygiene"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Gut Health Matters Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Gut Health Matters for Clearer Skin</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" 
              alt="NXTLVL Health clinic interior showing gut health consultation area" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Many people don't realise that <strong>poor gut health can lead to acne</strong>. If your gut isn't working well, toxins can build up, inflammation can rise, and your immune system can become overactive. The <strong>microbiome</strong> plays a crucial role in overall health, including skin health. This can trigger inflammation and acne development.
                </p>
                <p>
                  Mitch focuses on improving gut health with <strong>probiotic rich foods</strong>, herbal remedies, and gut-healing nutrients. When your gut is healthier, your skin gets healthier too.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" 
                alt="NXTLVL Health clinic interior showing gut health consultation area" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hormonal Acne Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Hormonal Acne and the Naturopathic Approach</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                <strong>Hormonal acne</strong> usually shows up on the jawline, chin, and neck—especially around your cycle. It may also appear after stopping oral contraceptive pills (post pill acne). <strong>Hormonal acne affects approximately 80% of women between the ages of 11 to 30.</strong> Naturopathic doctors focus on balancing hormone levels naturally, using herbs, nutrients, and lifestyle shifts that support hormone regulation without the side effects of medication.
              </p>
              <p>
                We also look at your stress hormones, blood sugar, and liver function to make sure your body can detox properly and keep your skin clear. <strong>Detoxification</strong> is the process of eliminating toxins from the body, and it is important for overall health and well-being.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/kcF6c6jGP3wRQF0L9ySy.png" 
              alt="Woman experiencing hormonal balance and clear skin after naturopathic treatment" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Foods That Help and Hurt Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Foods That Help and Hurt</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Helpful Foods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Helpful Foods for Acne Prone Skin:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Whole foods like leafy greens, berries, and cruciferous veggies",
                    "Lean proteins and healthy fats (avocado, nuts, seeds)",
                    "Anti inflammatory spices like turmeric and ginger",
                    "Probiotic rich foods like sauerkraut, kefir, and miso"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Foods That May Trigger */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-destructive">Foods That May Trigger Acne Flare Ups:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Refined sugars and sugary drinks",
                    "Dairy products (in some people)",
                    "Processed foods and trans fats",
                    "Excess caffeine or alcohol"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-4 h-4 border-2 border-destructive rounded mt-1 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Topical Treatments vs Natural Support Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Topical Treatments vs. Natural Support</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                <strong>Topical treatments</strong> like tea tree oil or salicylic acid can help manage acne on the surface. But they don't fix the internal imbalances causing acne. <strong>High cortisol levels</strong> can lead to inflammation and contribute to acne development. That's why we focus on a <strong>naturopathic approach to acne</strong> that treats the root cause while still supporting the skin from the outside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Benefits of Acne Naturopathy at NXTLVL Health</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Clearer skin, naturally",
              "Improved self esteem and confidence",
              "Better gut health and digestion",
              "Balanced hormones and mood",
              "More energy, better sleep, and less stress",
              "Tools to manage acne flare ups long term"
            ].map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-base text-muted-foreground">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              <strong>Regular exercise</strong> can reduce stress levels and promote overall health and well-being, which may help in managing acne
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Help</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Teens and adults with acne prone skin",
              "Women with hormonal acne or post pill acne",
              "People tired of harsh topical treatments that don't work",
              "Anyone looking for a natural, long term solution to acne"
            ].map((item, index) => (
              <Card key={index}>
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

      {/* Real Results Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Real Results From Real People</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Many of our clients see improvements within 4–8 weeks. They tell us:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              '"My breakouts are smaller and less painful."',
              '"My skin is finally starting to clear."',
              '"I feel better, and I look better too."',
              '"I\'m not hiding my face anymore."'
            ].map((testimonial, index) => (
              <Card key={index} className="bg-primary/5">
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
        </div>
      </section>

      {/* Why Choose Mitch Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Mitch as Your Naturopath for Acne?</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" 
              alt="NXTLVL Health natural medicine clinic in New Farm Brisbane with Mitch" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Experienced naturopath with a special interest in skin health",
              "Deep understanding of acne symptoms and root causes",
              "Compassionate, one-on-one care",
              "Proven naturopathic treatments that support whole body health",
              "Real strategies that work—not just quick fixes"
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Take the First Step Toward Clearer Skin</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                You don't have to feel stuck with your skin. There is another way. A gentler, smarter, and more natural way to treat acne.
              </p>
              <p>
                <strong>Book your free 15-minute consultation</strong> with Mitch today and learn how acne naturopathy can change your skin—and your life—for the better.
              </p>
              <p>
                <strong>Let's get your confidence back, and your skin glowing again.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Your Free 15-Minute Consultation
                </a>
              </Button>
              <Button variant="outline" asChild className="text-base sm:text-lg px-6 py-4">
                <a href="tel:0731808853">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Call Mitch About Your Acne
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcneNaturopathy;
