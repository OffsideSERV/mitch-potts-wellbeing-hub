
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Brain, Shield, Users, Activity } from "lucide-react";

const AnxietyNaturopathy = () => {
  return (
    <>
      <Helmet>
        <title>Naturopath for Anxiety | Best in Brisbane | Free Consult!</title>
        <meta name="description" content="Not feeling like yourself lately? Feeling on edge? Not sure what to do? Mitchell is a 5-star Naturopath for Anxiety that will finally give you answers." />
      </Helmet>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopath <span className="text-primary">Anxiety</span> | Calm Your Mind Naturally at NXTLVL Health
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Woman receiving anxiety support from naturopath at NXTLVL Health Brisbane" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Brain className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Anxiety Support</p>
                        <p className="text-xs text-muted-foreground">Natural • Holistic • Effective</p>
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
                alt="Woman receiving anxiety support from naturopath at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Brain className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Anxiety Support</p>
                    <p className="text-sm text-muted-foreground">Natural • Holistic • Effective</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feeling Overwhelmed Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Feeling Overwhelmed, Anxious, or Always on Edge?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
              alt="Naturopath having consultation with female patient at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Do you often feel nervous, unsettled, or stuck in a loop of worry that just won't go away? Is your mind racing at night, making it hard to fall asleep? Do you feel tight in your chest, short of breath, or exhausted from trying to manage everyday stress?
                </p>
                <p>
                  You're not alone. <strong>Anxiety symptoms affect millions of people</strong>, and for many, they're not just in the mind. They show up in the body too: through tension, gut issues, poor sleep, and low energy.
                </p>
                <p>
                  At NXTLVL Health, we understand that <strong>treating anxiety goes beyond short-term fixes or medications</strong>. Mitch, a compassionate and experienced <strong>naturopath for anxiety</strong>, offers a holistic approach that supports your mind, body, and nervous system naturally. Naturopathic doctors (NDs) focus on treating the whole person and addressing underlying causes of anxiety.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
                alt="Naturopath having consultation with female patient at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* CTA Button */}
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

      {/* What Is Anxiety Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Is Anxiety?</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                <strong>Anxiety is more than just feeling stressed</strong>. It's a persistent mental and physical state of worry, fear, and unease. When this nervous tension becomes chronic, it may evolve into an anxiety disorder like:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { text: "Generalized Anxiety Disorder (GAD)", link: "https://www.mayoclinic.org/diseases-conditions/generalized-anxiety-disorder/symptoms-causes/syc-20360803" },
                { text: "Panic Disorder", link: null },
                { text: "Social Anxiety", link: null },
                { text: "Anxiety with depression", link: null },
                { text: "Health anxiety", link: null }
              ].map((condition, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {condition.link ? (
                        <a 
                          href={condition.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary underline"
                        >
                          {condition.text}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{condition.text}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                Whether your anxiety is mild or severe, constant or intermittent, <strong>Mitch can help explore the root cause</strong> and create a tailored plan to help you feel calm, clear, and in control again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signs and Symptoms Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Signs and Symptoms of Anxiety</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              <strong>Every person's experience with anxiety is different</strong>. Some people feel it mentally. Others experience physical symptoms of anxiety in their body. Common signs include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Restlessness and nervousness",
              "Tight chest or muscle tension",
              "Racing heart or high blood pressure",
              "Difficulty sleeping or constant fatigue",
              "Poor digestion or upset stomach",
              "Irritability, worry, or fear",
              "Trouble concentrating or brain fog"
            ].map((symptom, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{symptom}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
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

      {/* How a Naturopath Can Help Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How a Naturopath for Anxiety Can Help</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
              alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  <strong>Conventional medicine often treats anxiety with medication</strong> like SSRIs, beta blockers, or sedatives. While these can help some people, they don't always work long term and may come with unwanted side effects.
                </p>
                <p>
                  That's where <strong>naturopathic care comes in</strong>. At NXTLVL Health, Mitch uses naturopathic medicine and natural therapies to:
                </p>
                <ul className="space-y-3">
                  {[
                    "Support your nervous system",
                    "Improve gut health and the gut-brain axis",
                    "Identify nutrient deficiencies or hormone imbalances",
                    "Reduce nervous tension and calm stress hormones",
                    "Strengthen emotional resilience and overall mental health"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  The goal? <strong>To help your body function properly</strong> so you can manage stress naturally, without always needing to rely on medication. Many patients prefer a naturopathic approach for anxiety management compared to medication alone.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
                alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our Approach Different Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Makes Our Naturopathic Approach Different?</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              <strong>Mitch takes the time to truly understand</strong> what's going on in your life, your body, and your mind. No rushed appointments. No generic advice.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Just <strong>expert, tailored strategies</strong> that work with your body, not against it.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-center">We explore:</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Nutritional deficiencies (like B vitamins, magnesium, or iron)",
                "Gut health and microbial imbalances",
                "Food allergies or intolerances",
                "Past trauma or chronic stress",
                "Lifestyle habits and sleep quality",
                "Environmental factors (mould, toxins, noise, cigarette smoke)",
                "Hormone imbalances (thyroid, cortisol, estrogen, etc.)"
              ].map((factor, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{factor}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              <strong>Naturopathic treatment includes assessing</strong> a patient's history, dietary habits, and lifestyle factors.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
              These are just some of the <strong>underlying causes</strong> that can trigger or worsen anxiety.
            </p>
          </div>

          {/* CTA Button */}
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

      {/* Gut-Brain Connection Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Gut-Brain Connection in Anxiety</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                <strong>Your gut and brain are closely connected</strong> through the gut-brain axis. Research suggests that poor gut health may directly affect mood, stress hormones, and neurotransmitter production (like serotonin and GABA). <strong>Research on the gut-brain connection supports</strong> the importance of a nutritional diet and supplementation with probiotics.
              </p>
              <p>Many people with anxiety also suffer from:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Poor digestion",
                "Bloating or food sensitivities",
                "Constipation or diarrhoea",
                "Inflammation",
                "Frequent infections or lowered immune system"
              ].map((symptom, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Activity className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{symptom}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                We often use <strong>microbiome testing</strong> to explore gut bacteria, intestinal health, and inflammation markers, then use diet and natural therapies to restore balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initial Consultation Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect at Your Initial Consultation</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              <strong>Mitch's approach to treating anxiety starts with understanding your full story</strong>. Your first visit includes: <strong>Naturopathic doctors spend between one and two hours</strong> face-to-face with patients during their initial appointment.
            </p>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-showing-patient-results-on-a-computer-scaled.jpeg" 
              alt="Naturopath showing patient results on a computer at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "A full health history and symptom review",
              "Mental health assessment and lifestyle overview",
              "Evaluation of current medications or supplements",
              "Lab testing (if needed) for nutrient status, inflammation, and hormone levels"
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

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              From there, we create a <strong>personalised treatment plan</strong> designed to work with your body's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Natural Treatments Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural Treatments We Use for Anxiety</h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">1. Nutritional Therapy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Your brain needs specific nutrients to function properly</strong>, especially during times of stress. Mitch may recommend foods or supplements to correct deficiencies and support neurotransmitter balance.
                </p>
                <p className="text-muted-foreground mb-4">Important nutrients include:</p>
                <ul className="space-y-2">
                  {[
                    "Magnesium (to calm the nervous system)",
                    "B vitamins (for energy and nervous system support)",
                    "Omega-3s (to reduce inflammation and support brain health)",
                    "Vitamin D (linked to anxiety and depression when low)",
                    "Amino acids like tryptophan or GABA (to support mood)"
                  ].map((nutrient, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{nutrient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">2. Herbal Medicine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Certain herbs have calming effects</strong> on the nervous system. Mitch may prescribe gentle, effective herbal medicine to:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Soothe anxiety symptoms",
                    "Support adrenal and stress hormone balance",
                    "Improve sleep quality and emotional regulation"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  Popular herbs include passionflower, ashwagandha, lemon balm, and rhodiola. Each is chosen based on your symptoms, health history, and medical status. <strong>Passionflower is used in herbal formulas for anxiety</strong> and has been shown to have comparable positive effects as anti-anxiety medication.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">3. Gut Health and Immune Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We focus on <strong>restoring balance in the digestive system</strong> with:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Probiotic-rich foods and prebiotic fibres",
                    "Herbal antimicrobials (if needed)",
                    "Digestive enzymes and gut-healing nutrients",
                    "Removing food allergens and artificial additives"
                  ].map((treatment, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{treatment}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  In naturopathic care, <strong>dietary modifications may include</strong> reducing processed foods and increasing whole foods high in omega-3s.
                </p>
                <p className="text-muted-foreground mt-4">
                  This gut-first approach supports both the nervous system and immune system, <strong>helping reduce inflammation and manage stress naturally</strong>. Chronic inflammation can affect brain regions relevant to reward and threat sensitivity and lead to anxiety symptoms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">4. Lifestyle and Stress Management Techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Anxiety often develops or worsens in response to lifestyle stress</strong>. Mitch helps you adopt simple tools to reduce nervous tension and build resilience. <strong>Naturopathic doctors advocate for calming practices</strong> such as mindfulness, yoga, and breathing techniques for anxiety management.
                </p>
                <p className="text-muted-foreground mb-4">This may include:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Deep breathing and relaxation training",
                    "Sleep support and healthy sleep routines",
                    "Movement or nature exposure",
                    "Journaling, meditation, or emotional expression"
                  ].map((technique, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{technique}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  <strong>Exercise is recommended by NDs</strong> as it can effectively decrease symptoms of anxiety and depression.
                </p>
                <p className="text-muted-foreground mt-4">
                  Even small changes in routine can reduce anxiety and improve mental health over time.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
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

      {/* All Ages Support Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Anxiety in Children, Teens, and Adults</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              <strong>Mitch provides naturopathic anxiety support</strong> for:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Children",
                description: "experiencing emotional overwhelm, tantrums, or nervous behaviour"
              },
              {
                icon: Brain,
                title: "Teens",
                description: "with mood swings, anxiety symptoms, or sleep issues"
              },
              {
                icon: Heart,
                title: "Adults",
                description: "dealing with generalised anxiety disorder, panic attacks, or nervous exhaustion"
              }
            ].map((group, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <group.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{group.title}</h3>
                  <p className="text-sm text-muted-foreground">{group.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              <strong>Every age group gets a different, age-appropriate plan</strong> tailored to their unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Many of our clients report:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "I feel calmer without needing more medication.",
              "I'm sleeping better and not as tense.",
              "My gut symptoms and anxiety are finally improving.",
              "I feel more in control of my thoughts and emotions."
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground italic">"{testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              These changes are possible with <strong>the right care and consistent support</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose NXTLVL Health for Naturopathic Anxiety Support?</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" 
              alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Experienced naturopathic doctor for anxiety and mental health",
              "Whole-person care that gets to the root cause",
              "Evidence-based treatments that are natural and gentle",
              "Personalised plans to suit your body, lifestyle, and goals",
              "Support for both adults and children",
              "Functional testing options when needed"
            ].map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-base text-muted-foreground">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              <strong>Mitch brings years of experience</strong> in naturopathic medicine and a calm, grounded presence to help you feel safe, heard, and cared for.
            </p>
          </div>
        </div>
      </section>

      {/* Feel Like Yourself Again Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Help You Feel Like Yourself Again</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                <strong>You don't have to live with constant anxiety</strong>. With the right guidance, it's possible to feel calm, grounded, and in control again, without relying solely on prescription medication.
              </p>
              <p>
                Whether you're managing <strong>generalised anxiety, panic disorder, or stress-related tension</strong>, Mitch is here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your Free 15-Minute Consult</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Let's <strong>uncover the underlying cause of your anxiety</strong> and start your journey to real relief. Book your free 15-minute consultation with Mitch at NXTLVL Health today.
              </p>
              <p className="font-medium">
                <strong>Feel like yourself again, with natural anxiety support that works.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Your Free 15-Minute Consult
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

export default AnxietyNaturopathy;
