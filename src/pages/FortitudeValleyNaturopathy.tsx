
import SEO from "@/components/SEO";
import { Button } from '@/components/ui/button';
import { Phone, Calendar, Check, Heart, TestTube, Activity, Beaker, Stethoscope, Shield } from 'lucide-react';

const FortitudeValleyNaturopathy = () => {
  const specialtyAreas = [
    "Digestive disorders (IBS, bloating, reflux, SIBO)",
    "Hormonal imbalances and fatigue", 
    "Mental health support, including anxiety and mood issues",
    "Chronic conditions and inflammation",
    "Nutrient deficiencies and immune dysfunction",
    "Skin conditions such as acne and eczema",
    "Weight loss and metabolism support",
    "Stress and emotional health management",
    "Autoimmune and mystery symptoms",
    "Sleep problems and burnout"
  ];

  const services = [
    {
      title: "Nutritional Medicine",
      description: "We look at how food is affecting your symptoms and energy. We help you make changes that support healing, not stress your body more. You'll get easy-to-follow nutrition plans, not hard-to-stick-to diets.",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "Herbal Medicine", 
      description: "We use carefully chosen herbs to support your immune system, hormones, digestion, and mood. All our herbal medicine formulas are evidence-based and made to suit your individual needs.",
      icon: <TestTube className="h-6 w-6 text-primary" />
    },
    {
      title: "Functional Testing",
      description: "We offer a range of in-depth testing to uncover what's going on beneath the surface — including gut tests, hormone panels, nutrient status, and food intolerances.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "Live Blood Analysis",
      description: "With just one drop of blood, we can spot signs of inflammation, poor digestion, low immunity, and more — helping us guide your plan from the very first visit. At NXTLVL Health, we also use live blood analysis to gain real-time insights into your health, allowing us to tailor your care even further.",
      icon: <Beaker className="h-6 w-6 text-primary" />
    },
    {
      title: "Lifestyle Coaching",
      description: "We guide you with simple, realistic steps to improve your energy, mindset, and wellbeing. We focus on habits that make a real difference without adding more stress to your life.",
      icon: <Shield className="h-6 w-6 text-primary" />
    }
  ];

  const healthConditions = [
    {
      title: "Digestive Issues",
      items: [
        "Bloating, gas, reflux, IBS",
        "Irregular bowel movements", 
        "Food intolerances",
        "Poor nutrient absorption",
        "Gut inflammation"
      ],
      description: "Your gut is the foundation of good health. When your digestion is off, everything else suffers. We use natural therapies and testing to rebuild your gut health from the inside out."
    },
    {
      title: "Hormonal Imbalances",
      items: [
        "PMS, perimenopause, menopause",
        "PCOS, endometriosis",
        "Thyroid issues",
        "Adrenal fatigue", 
        "Sleep problems, low libido"
      ],
      description: "We help balance your hormones through nutrition, herbs, and lifestyle — helping you feel calm, steady, and more like yourself again. Naturopaths are particularly skilled at addressing hormonal imbalances, including PMS, PCOS, and perimenopause, ensuring a comprehensive approach to your health."
    },
    {
      title: "Chronic Health Conditions", 
      items: [
        "Fatigue and burnout",
        "Autoimmune symptoms",
        "Chronic pain and inflammation",
        "Poor immunity",
        "Unexplained symptoms that don't go away"
      ],
      description: "We specialise in complex, long-standing conditions that other treatments haven't resolved. We focus on the root causes, not just masking the effects."
    },
    {
      title: "Mental Health and Emotional Support",
      items: [
        "Anxiety, stress, low mood",
        "Brain fog and overwhelm", 
        "Poor sleep and emotional burnout",
        "Nervous system regulation"
      ],
      description: "Your mind and body are deeply connected. We use gentle, supportive tools to help you feel calm, clear, and confident again — without dependency on medication. Naturopaths also support mental health by addressing stress and mood disorders like anxiety or low mood, helping you regain emotional balance."
    },
    {
      title: "Skin and Immune System",
      items: [
        "Acne, eczema, rashes",
        "Allergies and sensitivities",
        "Recurring infections", 
        "Chronic sinus or immune issues"
      ],
      description: "When your skin or immune system is inflamed, it's often a sign of deeper imbalance. We treat it at the source — not just at the surface."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Free Discovery Call",
      description: "We start with a 15-minute chat to understand your concerns and see if we're the right fit."
    },
    {
      number: "2", 
      title: "Initial Consultation",
      description: "You'll meet with Mitch for an in-depth 60–75 minute session, where we go deep into your health history, symptoms, lifestyle, medications, and goals."
    },
    {
      number: "3",
      title: "Personalised Treatment Plan", 
      description: "After your consult, you'll receive a simple, step-by-step plan tailored to you. This may include nutrition, herbs, testing, stress support, and lifestyle adjustments."
    },
    {
      number: "4",
      title: "Ongoing Support",
      description: "We review your progress regularly and make changes as needed. You'll feel supported and confident as you move toward your health goals."
    }
  ];

  const benefits = [
    "Just minutes from Fortitude Valley — easy access from Fortitude Valley Train Station",
    "Appointments available in-clinic or online",
    "We take your symptoms seriously", 
    "We focus on real healing, not just managing symptoms",
    "We use natural solutions, not band-aids",
    "We listen, support, and educate — so you feel empowered",
    "We're known as one of Brisbane's best naturopaths for people who've tried everything else"
  ];

  const questions = [
    "Are your symptoms affecting your work, mood, or relationships?",
    "Do you feel like something is off, even if tests say everything is \"normal\"?",
    "Are you tired of trying treatment after treatment with no real change?",
    "Do you want a plan that looks at your whole body and your whole life?",
    "Do you want to work with someone who actually listens?"
  ];

  return (
    <>
      <SEO 
        title="Best Naturopath Fortitude Valley | Book a FREE 15-Min Consult!"
        description="Looking for a naturopath near Fortitude Valley? NXTLVL Health offers natural, personalised care to treat the root cause. Book your free 15-min consult today."
        canonical="/areas-we-serve/naturopath-fortitude-valley"
        keywords="naturopath Fortitude Valley, natural health Fortitude Valley, holistic health Brisbane, functional medicine Fortitude Valley, gut health Brisbane"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                      Naturopath <span className="text-primary">Fortitude Valley</span> | Natural Healing Near You
                    </h1>
                    
                    {/* Mobile Image */}
                    <div className="lg:hidden mb-8">
                      <img 
                        src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
                        alt="Professional naturopath consultation at NXTLVL Health clinic near Fortitude Valley" 
                        className="rounded-2xl shadow-lg w-full h-auto"
                      />
                    </div>

                    <h2 className="text-xl lg:text-2xl text-muted-foreground">
                      Looking for a naturopath near Fortitude Valley who actually listens — and gets results?
                    </h2>
                    
                    <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                      <p>
                        If you're tired of feeling unwell, dealing with symptoms that never seem to go away, or just want to feel like yourself again, you're in the right place.
                      </p>
                      <p>
                        At NXTLVL Health, we support people from Fortitude Valley, Brisbane and beyond with natural, effective solutions for complex and chronic health issues. Whether it's gut health, mental health, fatigue, or hormonal imbalance — we help you get to the root causes so you can finally move forward.
                      </p>
                      <p>
                        We're not located in Fortitude Valley — we're just around the corner in New Farm, near Fortitude Valley Train Station. Our clinic is just a few minutes away and we work with many local clients who want real answers and lasting change.
                      </p>
                      <p className="font-medium text-lg">
                        Let's get you back to feeling good in your body again.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                        <Calendar className="h-5 w-5 mr-2" />
                        Book Free Consultation
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="tel:0731808853">
                        <Phone className="h-5 w-5 mr-2" />
                        Call (07) 3180 8853
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
                    src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
                    alt="Professional naturopath consultation at NXTLVL Health clinic near Fortitude Valley" 
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Why People in Fortitude Valley Choose NXTLVL Health
                  </h2>
                  
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      Finding a naturopath can feel overwhelming. You want someone who understands what you're going through. Someone who listens — and actually helps.
                    </p>
                    <p>
                      At NXTLVL Health, we take a different approach. We look at your whole body, your whole life, and your story — not just your symptoms.
                    </p>
                    <p>
                      Many of our clients come to us after trying everything else — doctors, specialists, medications, and diets — and still not feeling better. That's because they were treating symptoms. We treat the root causes.
                    </p>
                    <p className="font-semibold text-primary text-xl">
                      In fact, 90% of clients at NXTLVL Health report feeling better within the first 6 weeks of treatment.
                    </p>
                    <p>
                      Our focus is always on real results, compassionate care, and lasting change.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 lg:mt-0">
                  <img 
                    src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" 
                    alt="Woman receiving naturopathic consultation at NXTLVL Health near Fortitude Valley" 
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Mitch Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                <div className="mb-12 lg:mb-0">
                  <img 
                    src="/lovable-uploads/611cabfc-2300-478c-a789-817b8bac2f8e.png" 
                    alt="Mitchell Potts, experienced naturopath at NXTLVL Health serving Fortitude Valley clients" 
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Meet Mitch – Your Naturopath Near Fortitude Valley
                  </h2>
                  
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      Mitchell Potts is a highly qualified naturopath with advanced training in nutritional medicine, herbal medicine, and functional testing. He also brings years of experience as a personal trainer, giving him a well-rounded approach to holistic health.
                    </p>
                    <p>
                      Mitch works with clients across Brisbane, including many from Fortitude Valley QLD, who are seeking real solutions for ongoing health problems.
                    </p>
                    <p>
                      He is known for listening deeply, explaining things clearly, and helping people finally get results when nothing else has worked. His goal? To help you feel stronger, clearer, and more balanced — mentally, physically, and emotionally.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      Mitch's special interest areas include:
                    </h3>
                    <div className="space-y-2">
                      {specialtyAreas.map((area, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Holistic Approach Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                A Holistic Approach That Looks at the Whole You
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
                <p>
                  Your health is more than a symptom. It's a picture of how your body, mind, and environment work together.
                </p>
                <p>
                  At NXTLVL Health, we use a holistic approach to help you achieve optimal health. That means we look at your nutrition, lifestyle, environment, emotional stress, and more — and how these affect your body. A holistic approach ensures that we treat you mentally, physically, and emotionally, addressing all aspects of your wellbeing.
                </p>
                <p>
                  We don't give you one-size-fits-all advice. Your treatment is tailored to you — your body, your goals, your life.
                </p>
                <p className="font-medium text-lg">
                  Using advanced tools and natural therapies, we help restore balance across all systems. The result? You feel better, faster — and in control of your health again.
                </p>
              </div>

              <img 
                src="/lovable-uploads/0aadec6a-7f1f-4a21-854c-39d8c3a218d0.png" 
                alt="Naturopath using advanced diagnostic tools for holistic health assessment at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Natural Health Services for Fortitude Valley Clients
                </h2>
                <p className="text-xl text-muted-foreground">
                  Here's what we use to help you heal, feel better, and stay well long-term:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Health Conditions Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Health Conditions We Help People in Fortitude Valley Manage
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our Fortitude Valley clients come to us with a wide range of health concerns — some that are new, and others they've been dealing with for years.
                </p>
              </div>

              <div className="space-y-12">
                {healthConditions.map((condition, index) => (
                  <div key={index} className="bg-background rounded-lg p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      {condition.title}
                    </h3>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        {condition.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div>
                        <p className="text-muted-foreground leading-relaxed">
                          {condition.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  What to Expect When You Work With Us
                </h2>
                <p className="text-xl text-muted-foreground">
                  Whether you come to our New Farm clinic from Fortitude Valley or book an online appointment, your care will be personal, detailed, and supportive every step of the way.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mr-4">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <img 
                  src="/lovable-uploads/778efa12-2a50-4463-9137-b9811fb860b1.png" 
                  alt="Modern naturopathic clinic equipment and consultation room at NXTLVL Health" 
                  className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Clients Love Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
                Why Clients Near Fortitude Valley Love NXTLVL Health
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg shadow-sm">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Is This Right For You Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Is NXTLVL Health Right for You?
                </h2>
                <p className="text-xl text-muted-foreground">
                  If you're in Fortitude Valley QLD and you're ready to stop guessing, stop managing, and start healing — then yes.
                </p>
              </div>

              <div className="space-y-6 mb-12">
                <h3 className="text-2xl font-semibold text-foreground text-center">
                  Ask yourself:
                </h3>
                
                <div className="space-y-4">
                  {questions.map((question, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg shadow-sm">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{question}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-8">
                  If any of those feel true — it's time for a different approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Conveniently Located for Fortitude Valley Residents
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
                <p>
                  NXTLVL Health is based in New Farm, just a few minutes from Fortitude Valley. Many of our clients walk, drive, or take public transport — we're easy to get to and even easier to work with.
                </p>
                <p>
                  If you prefer not to travel, we also offer full online consultations, giving you access to expert care from the comfort of home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Your Health Journey Starts Here
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
                <p>
                  At NXTLVL Health, we believe your body is designed to heal — when it's given the right support.
                </p>
                <p>
                  Let's get you out of symptom-chasing mode and into real, lasting wellbeing. Whether you're just starting your journey or you've been struggling for years, we're ready to help.
                </p>
                <p className="font-medium text-xl">
                  Book your free 15-minute consult and take the first step toward a healthier, more vibrant life.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Your Free Consultation
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:0731808853">
                    <Phone className="h-5 w-5 mr-2" />
                    Call (07) 3180 8853
                  </a>
                </Button>
              </div>

              <div className="space-y-2 text-muted-foreground">
                <p className="font-semibold">NXTLVL Health | Just minutes from Fortitude Valley</p>
                <p>📍 In-person at our New Farm clinic or online Australia-wide</p>
                <p>📞 Call us: (07) 3180 8853</p>
                <p>💻 Book online anytime</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FortitudeValleyNaturopathy;
