
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, ChevronDown, ChevronUp, Heart, Activity, TestTube, Eye, Beaker, Users } from 'lucide-react';

const GutHealth = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const gutHealthSigns = [
    {
      title: "CONSTANT BLOATING, GAS, OR ABDOMINAL PAIN",
      description: "Persistent digestive discomfort that affects your daily life and makes you feel uncomfortable after eating.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "TROUBLE WITH BOWEL MOVEMENTS", 
      description: "Experiencing diarrhoea, constipation, or alternating between both, making it difficult to maintain regular digestive patterns.",
      icon: <TestTube className="h-6 w-6 text-primary" />
    },
    {
      title: "FOOD INTOLERANCES OR SENSITIVITIES",
      description: "Reactions to certain foods that cause digestive upset, skin issues, or other symptoms that affect your quality of life.",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "SKIN CONDITIONS LIKE ACNE OR ECZEMA",
      description: "Skin problems that may be linked to gut imbalances, as your digestive health directly affects your skin's appearance.",
      icon: <Eye className="h-6 w-6 text-primary" />
    },
    {
      title: "LOW ENERGY AND UNEXPLAINED FATIGUE",
      description: "Persistent tiredness that doesn't improve with rest, often linked to poor nutrient absorption and gut dysfunction.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "ANXIETY, DEPRESSION, OR FREQUENT OVERWHELM",
      description: "Mental health symptoms that may be connected to the gut-brain axis and imbalanced gut bacteria affecting neurotransmitter production.",
      icon: <Beaker className="h-6 w-6 text-primary" />
    },
    {
      title: "HISTORY OF ANTIBIOTIC USE OR CHRONIC STRESS",
      description: "Past treatments or lifestyle factors that may have disrupted your natural gut flora balance and digestive function.",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "TOLD 'YOUR RESULTS ARE FINE,' BUT YOU STILL FEEL OFF",
      description: "Standard medical tests show normal results, but you continue to experience symptoms that affect your daily wellbeing.",
      icon: <TestTube className="h-6 w-6 text-primary" />
    }
  ];

  const conditionsWeWorkWith = [
    {
      title: "IRRITABLE BOWEL SYNDROME (IBS)",
      description: "Comprehensive treatment for IBS symptoms including abdominal pain, bloating, and irregular bowel movements using natural approaches.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "SMALL INTESTINAL BACTERIAL OVERGROWTH (SIBO)",
      description: "Targeted protocols to address bacterial overgrowth in the small intestine and restore proper digestive function.",
      icon: <Beaker className="h-6 w-6 text-primary" />
    },
    {
      title: "ULCERATIVE COLITIS",
      description: "Natural support for inflammatory bowel conditions to reduce inflammation and promote healing of the digestive tract.",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "CROHN'S DISEASE",
      description: "Complementary naturopathic care to support conventional treatment and improve quality of life for Crohn's patients.",
      icon: <TestTube className="h-6 w-6 text-primary" />
    },
    {
      title: "LEAKY GUT SYNDROME",
      description: "Therapeutic protocols to heal intestinal permeability and restore the protective barrier of your digestive tract.",
      icon: <Eye className="h-6 w-6 text-primary" />
    },
    {
      title: "ACID REFLUX AND HEARTBURN",
      description: "Natural approaches to address the root causes of acid reflux and provide lasting relief from digestive discomfort.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "FOOD ALLERGIES AND SENSITIVITIES",
      description: "Identification and management of food triggers through testing and targeted elimination protocols.",
      icon: <Beaker className="h-6 w-6 text-primary" />
    },
    {
      title: "AUTOIMMUNE CONDITIONS LINKED TO GUT HEALTH",
      description: "Support for autoimmune conditions that may be triggered or worsened by gut imbalances and intestinal permeability.",
      icon: <Heart className="h-6 w-6 text-primary" />
    }
  ];

  const functionalTesting = [
    {
      title: "STOOL TESTS TO ANALYSE GUT FLORA AND PATHOGENS",
      description: "Comprehensive analysis of your gut microbiome, including beneficial bacteria, harmful pathogens, and digestive markers.",
      icon: <TestTube className="h-6 w-6 text-primary" />
    },
    {
      title: "SIBO BREATH TESTS FOR BACTERIAL OVERGROWTH",
      description: "Specialized testing to detect small intestinal bacterial overgrowth using hydrogen and methane breath analysis.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "FOOD INTOLERANCE TESTING",
      description: "Identification of specific foods that may be triggering your symptoms and causing digestive inflammation.",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "BLOOD TESTS FOR NUTRIENT DEFICIENCIES",
      description: "Assessment of vitamin and mineral levels, inflammatory markers, and autoimmune indicators that affect gut health.",
      icon: <Beaker className="h-6 w-6 text-primary" />
    },
    {
      title: "HORMONE TESTING FOR GUT-BRAIN AXIS",
      description: "Evaluation of hormones that influence digestion and the connection between your gut and mental health.",
      icon: <Eye className="h-6 w-6 text-primary" />
    }
  ];

  const naturalTreatments = [
    {
      title: "HIGH-QUALITY DIGESTIVE ENZYMES",
      description: "Supplementation with specific enzymes to improve food breakdown and nutrient absorption in your digestive system.",
      icon: <Beaker className="h-6 w-6 text-primary" />
    },
    {
      title: "HERBAL ANTIMICROBIALS FOR GUT FLORA BALANCE",
      description: "Natural antimicrobial herbs to address harmful bacteria while supporting beneficial microorganisms.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "ANTI-INFLAMMATORY FOODS AND NUTRITION",
      description: "Therapeutic nutrition plans featuring foods that reduce inflammation and support digestive healing.",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "PROBIOTIC AND PREBIOTIC THERAPY",
      description: "Strategic use of beneficial bacteria and their food sources to restore healthy gut microbiome balance.",
      icon: <TestTube className="h-6 w-6 text-primary" />
    },
    {
      title: "TAILORED DIET PLANS FOR FOOD SENSITIVITIES",
      description: "Personalized dietary protocols to eliminate trigger foods and optimize nutrient absorption and gut healing.",
      icon: <Eye className="h-6 w-6 text-primary" />
    }
  ];

  const whyChooseMitch = [
    {
      title: "HE LISTENS, REALLY LISTENS",
      description: "Mitch takes the time to understand your complete health story, ensuring no detail is overlooked in your gut health journey.",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "BUILDS PLANS THAT FIT YOUR LIFE",
      description: "Treatment protocols are designed around your lifestyle, preferences, and practical needs for sustainable long-term success.",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "FOCUSES ON LONG-TERM RESULTS",
      description: "Rather than quick fixes, Mitch addresses root causes to create lasting improvements in your digestive health and overall wellbeing.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "SUPPORTS YOUR ENTIRE HEALTH JOURNEY",
      description: "Comprehensive care that addresses physical, mental, and emotional aspects of health for complete healing and transformation.",
      icon: <TestTube className="h-6 w-6 text-primary" />
    },
    {
      title: "EXTENSIVE EXPERIENCE ACROSS BRISBANE",
      description: "Thousands of successful client outcomes treating digestive disorders and autoimmune conditions throughout Brisbane and beyond.",
      icon: <Beaker className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Gut Health Naturopath in <span className="text-primary">Brisbane</span> | Personalised Digestive Care That Works
                </h1>
                
                {/* Mobile Image - placed right after headline */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Gut health consultation with naturopath at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Gut Health Naturopathy</p>
                        <p className="text-xs text-muted-foreground">Digestive Health • Natural Treatment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight" asChild>
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-center">Book Your Gut Health Consultation</span>
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
                <script defer async src='https://cdn.trustindex.io/loader.js?46476cb4757e774210564760f2f'></script>
              </div>
            </div>
            
            {/* Desktop Image - only visible on large screens */}
            <div className="relative hidden lg:block">
              <img alt="Gut health consultation with naturopath at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto" src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Gut Health Naturopathy</p>
                    <p className="text-sm text-muted-foreground">Digestive Health • Natural Treatment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get to the Root Cause of Your Digestive Issues</h2>
          </div>

          {/* Mobile Image positioned after heading */}
          <div className="lg:hidden mb-12">
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" alt="Woman discussing gut health with naturopath in Brisbane at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  If your gut feels off, everything feels off. Whether it's bloating, brain fog, fatigue, or mood swings, your digestive system plays a crucial role in your overall wellbeing. At NXTLVL Health in Brisbane, our <strong>gut health naturopath</strong> services are designed to uncover the <strong>underlying cause</strong> of your digestive issues, and treat it the natural way.
                </p>
                <p>
                  Led by experienced naturopath Mitchell Potts, we take a comprehensive approach that blends science with nature to get to the <strong>root cause</strong> of your gut problems. Whether you're dealing with <strong>Irritable Bowel Syndrome</strong>, <strong>Crohn's disease</strong>, <strong>acid reflux</strong>, or <strong>Leaky Gut Syndrome</strong>, we craft a personalised gut health plan that works with your body, so you can feel better from the inside out.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" alt="Woman discussing gut health with naturopath in Brisbane at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Gut Health Matters Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Gut Health Matters More Than You Think</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Your gut is more than just a digestive organ. Often called your "second brain," the gut is deeply connected to your <strong>immune system</strong>, <strong>mental health</strong>, hormones, and even your skin. If your gut is out of balance, the effects can show up almost anywhere.
              </p>
              <p>
                Here are just a few signs that you could benefit from seeing a <strong>naturopath for gut health</strong>:
              </p>
            </div>
          </div>

          {/* Add image after heading and description */}
          <div className="mb-12">
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" alt="Naturopath examining gut health diagnostics at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {gutHealthSigns.map((sign, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/20 transition-colors"
                  onClick={() => toggleDropdown(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {sign.icon}
                      <CardTitle className="text-lg">{sign.title}</CardTitle>
                    </div>
                    {openDropdown === index ? 
                      <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    }
                  </div>
                </CardHeader>
                {openDropdown === index && (
                  <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {sign.description}
                    </CardDescription>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              You don't have to accept poor digestion or constant discomfort as your "normal." Our <strong>naturopathic approaches</strong> are designed to help you regain control of your health.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Makes Our Gut Naturopath Services Different?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                At NXTLVL Health, we don't treat symptoms in isolation. We take a <strong>whole-body approach</strong> to understand how your <strong>digestive function</strong> affects everything else in your life, from your mood to your metabolism.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">A personalised treatment plan based on your unique needs</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base"><strong>Functional testing</strong> to detect <strong>bacterial overgrowth</strong>, <strong>nutrient absorption</strong> issues, and more</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">Integration of <strong>Herbal Medicine</strong>, <strong>nutritional supplements</strong>, and <strong>lifestyle modifications</strong></p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">Collaboration with other health professionals if needed</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We look beyond your medical history and symptoms. Instead, we examine your <strong>gut flora</strong>, your <strong>digestive tract</strong>, and your <strong>overall health</strong> from a fresh, evidence-based perspective.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions We Work With Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Conditions We Work With</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our <strong>gut health naturopath</strong> services are ideal for individuals struggling with a <strong>wide range</strong> of digestive disorders and related issues, including:
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {conditionsWeWorkWith.map((condition, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/20 transition-colors"
                  onClick={() => toggleDropdown(index + 10)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {condition.icon}
                      <CardTitle className="text-lg">{condition.title}</CardTitle>
                    </div>
                    {openDropdown === index + 10 ? 
                      <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    }
                  </div>
                </CardHeader>
                {openDropdown === index + 10 && (
                  <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {condition.description}
                    </CardDescription>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How It Works: Your Gut Health Consult Process</h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">In-Depth Health Review</h3>
              <p className="text-muted-foreground">
                We begin with a 60–75 minute initial consultation, diving deep into your symptoms, <strong>dietary changes</strong>, lifestyle, and medical history to understand your digestive health story.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Functional Testing</h3>
              <p className="text-muted-foreground">
                When appropriate, we may suggest advanced diagnostic tools to get <strong>accurate results</strong> and understand your gut health completely.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Personalised Gut Healing Plan</h3>
              <p className="text-muted-foreground">
                Based on what we uncover, your <strong>gut naturopath</strong> will create a step-by-step plan using natural remedies and treatments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Ongoing Support</h3>
              <p className="text-muted-foreground">
                Your gut didn't become unbalanced overnight, so we offer ongoing support to monitor progress and adjust your treatment.
              </p>
            </div>
          </div>

          {/* Functional Testing Details */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">Functional Testing (If Needed)</h3>
            <div className="space-y-4 max-w-4xl mx-auto">
              {functionalTesting.map((test, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardHeader 
                    className="cursor-pointer hover:bg-muted/20 transition-colors"
                    onClick={() => toggleDropdown(index + 20)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {test.icon}
                        <CardTitle className="text-lg">{test.title}</CardTitle>
                      </div>
                      {openDropdown === index + 20 ? 
                        <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      }
                    </div>
                  </CardHeader>
                  {openDropdown === index + 20 && (
                    <CardContent className="pt-0">
                      <CardDescription className="text-base leading-relaxed">
                        {test.description}
                      </CardDescription>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground">All testing is optional and tailored to your situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gut-Brain Connection Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Gut-Brain Connection: Why It Matters</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                The <strong>gut-brain axis</strong> refers to the two-way communication between your <strong>digestive tract</strong> and your <strong>nervous system</strong>. In fact, up to 90% of your body's serotonin is made in the gut. That means your gut health can directly influence your <strong>mental health</strong>, emotions, and even sleep quality.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Anxiety & Emotional Stability</h3>
              <p className="text-sm text-muted-foreground">Better gut health supports emotional balance and reduces anxiety</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Focus & Cognition</h3>
              <p className="text-sm text-muted-foreground">Improved gut function enhances mental clarity and focus</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <TestTube className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Energy & Motivation</h3>
              <p className="text-sm text-muted-foreground">Healthy digestion increases energy levels and drive</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Beaker className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Stress Resilience</h3>
              <p className="text-sm text-muted-foreground">Balanced gut supports better response to chronic stress</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A <strong>healthy gut microbiome</strong> equals a more balanced, energetic, and happier you.
            </p>
          </div>
        </div>
      </section>

      {/* Natural Healing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Healing the Gut Naturally: What We Use</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Unlike <strong>conventional medicine</strong>, which often treats symptoms in isolation, we rely on <strong>natural treatment</strong> methods backed by research and guided by your body's response.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/DSC_4578-scaled.jpeg" alt="Natural gut health treatments and supplements at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {naturalTreatments.map((treatment, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/20 transition-colors"
                  onClick={() => toggleDropdown(index + 30)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {treatment.icon}
                      <CardTitle className="text-lg">{treatment.title}</CardTitle>
                    </div>
                    {openDropdown === index + 30 ? 
                      <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    }
                  </div>
                </CardHeader>
                {openDropdown === index + 30 && (
                  <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {treatment.description}
                    </CardDescription>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Everything is explained clearly and practically, so you know exactly what you're doing and why.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Mitch Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Clients Choose Mitch at NXTLVL Health</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              With extensive experience in <strong>naturopathic medicine</strong>, <strong>Functional Medicine</strong>, and <strong>nutritional science</strong>, Mitch Potts is more than just a naturopath—he's your gut health partner.
            </p>
          </div>

          {/* Add image after heading and description */}
          <div className="mb-12">
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" alt="Mitch Potts, naturopath at NXTLVL Health clinic in New Farm Brisbane" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {whyChooseMitch.map((reason, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/20 transition-colors"
                  onClick={() => toggleDropdown(index + 40)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {reason.icon}
                      <CardTitle className="text-lg">{reason.title}</CardTitle>
                    </div>
                    {openDropdown === index + 40 ? 
                      <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    }
                  </div>
                </CardHeader>
                {openDropdown === index + 40 && (
                  <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {reason.description}
                    </CardDescription>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              From <strong>autoimmune disorders</strong> to <strong>digestive discomfort</strong>, Mitch helps you get your life back—naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your Gut Health Consultation Today</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Tired of living with <strong>digestive problems</strong>, bloating, or just feeling off? If you're ready to get real answers and real results, it's time to work with a <strong>gut health naturopath</strong> who truly understands how to heal the body from the inside out.
              </p>
              <p>
                Whether you're local to Brisbane or joining us via <strong>online consultations</strong>, NXTLVL Health is here to guide you every step of the way.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3" asChild>
                <a href="https://nxtlvlhealth.com.au/book-now/">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Gut Health Consultation
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3" asChild>
                <a href="tel:0731808853">
                  <Phone className="mr-2 h-4 w-4" />
                  Call to Speak With Mitch Directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GutHealth;
