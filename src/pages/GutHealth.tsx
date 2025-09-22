import React, { useState } from 'react';
import SEO from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, ChevronDown, ChevronUp, Activity, Heart, TestTube, Eye, Beaker, Stethoscope, Brain, Leaf } from 'lucide-react';
const GutHealth = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Service Schema for Gut Health Naturopath
  const gutHealthServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nxtlvlhealth.com.au/what-we-treat/gut-health-naturopath-brisbane#service",
    "name": "Gut Health Naturopath Brisbane",
    "alternateName": ["Digestive Health Naturopath", "IBS Treatment Brisbane", "Gut Healing Brisbane", "Functional Digestive Medicine"],
    "description": "Expert gut health naturopath services in Brisbane specialising in IBS, SIBO, digestive disorders, and gut healing. Personalised natural treatment plans to restore digestive health and overall wellbeing.",
    "url": "https://www.nxtlvlhealth.com.au/what-we-treat/gut-health-naturopath-brisbane",
    "image": "https://www.nxtlvlhealth.com.au/lovable-uploads/8c8b4eb3-73e7-4d27-a130-784ffb35035c.png",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.nxtlvlhealth.com.au/#organization",
      "name": "NXTLVL Health - Naturopath",
      "image": "https://www.nxtlvlhealth.com.au/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png",
      "telephone": "(07) 3180 8853",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 2/665 Brunswick St",
        "addressLocality": "New Farm",
        "addressRegion": "QLD",
        "addressCountry": "AU",
        "postalCode": "4005"
      }
    },
    "serviceType": "Naturopathic Medicine",
    "category": "Digestive Health Treatment",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gut Health Naturopathy Services",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gut Health Consultation",
          "description": "Comprehensive assessment and personalised treatment plan for digestive health issues including IBS, SIBO, inflammatory bowel disease, leaky gut syndrome, acid reflux, food allergies and sensitivities"
        },
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Functional Digestive Testing",
          "description": "Advanced testing including stool analysis, SIBO breath tests, food intolerance testing, and nutrient deficiency assessments"
        },
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Personalised Gut Healing Programme",
          "description": "Tailored treatment plan using herbal medicine therapy, nutritional supplementation, anti-inflammatory nutrition plans, probiotic therapy, and stress management support"
        },
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }]
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-27.4646",
        "longitude": "153.0448"
      },
      "geoRadius": "50000"
    },
    "areaServed": ["Brisbane", "New Farm", "Fortitude Valley", "Newstead", "Teneriffe", "Kangaroo Point", "East Brisbane", "Norman Park", "Bulimba", "Hawthorne", "Morningside", "Ascot", "Hamilton", "Clayfield", "Wilston", "Windsor", "Kelvin Grove", "Paddington", "Red Hill", "Auchenflower", "Toowong", "Queensland"],
    "availableChannel": {
      "@type": "ServiceChannel",
      "name": "In-Person Naturopathic Consultations",
      "serviceLocation": {
        "@type": "Place",
        "name": "NXTLVL Health",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Suite 2/665 Brunswick St",
          "addressLocality": "New Farm",
          "addressRegion": "QLD",
          "addressCountry": "AU",
          "postalCode": "4005"
        }
      },
      "servicePhone": "(07) 3180 8853",
      "serviceUrl": "https://www.nxtlvlhealth.com.au/what-we-treat/gut-health-naturopath-brisbane"
    },
    "serviceOutput": ["IBS Treatment", "SIBO Treatment", "Digestive Disorder Management", "Gut Healing", "Food Intolerance Management", "Inflammatory Bowel Disease Support", "Leaky Gut Treatment", "Microbiome Restoration", "Digestive Enzyme Support", "Anti-inflammatory Nutrition"],
    "audience": {
      "@type": "PeopleAudience",
      "audienceType": "Individuals with digestive disorders, IBS sufferers, SIBO patients, chronic digestive symptoms"
    },
    "potentialAction": [{
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://nxtlvlhealth.com.au/book-now/",
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
      },
      "result": {
        "@type": "Reservation",
        "name": "Gut Health Naturopath Consultation"
      }
    }]
  };
  const gutHealthSigns = [{
    title: "CONSTANT BLOATING, GAS, OR ABDOMINAL PAIN",
    description: "Persistent digestive discomfort that affects your daily life and makes you feel uncomfortable after eating.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "TROUBLE WITH BOWEL MOVEMENTS (DIARRHOEA, CONSTIPATION, OR BOTH)",
    description: "Irregular bowel patterns that may alternate between loose stools and constipation, indicating digestive imbalance.",
    icon: <TestTube className="h-6 w-6 text-primary" />
  }, {
    title: "FOOD INTOLERANCES OR SENSITIVITIES",
    description: "Reactions to certain foods that cause digestive upset, skin issues, or other systemic symptoms.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "SKIN CONDITIONS LIKE ACNE OR ECZEMA",
    description: "Skin problems that may be linked to gut inflammation and poor digestive health affecting your body's ability to eliminate toxins.",
    icon: <Eye className="h-6 w-6 text-primary" />
  }, {
    title: "LOW ENERGY AND UNEXPLAINED FATIGUE",
    description: "Persistent tiredness that may be related to poor nutrient absorption and gut dysfunction affecting your overall vitality.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "ANXIETY, DEPRESSION, OR FREQUENT OVERWHELM",
    description: "Mental health symptoms that may be connected to the gut-brain axis and imbalanced gut bacteria affecting neurotransmitter production.",
    icon: <Brain className="h-6 w-6 text-primary" />
  }, {
    title: "A HISTORY OF ANTIBIOTIC USE OR CHRONIC STRESS",
    description: "Past treatments or lifestyle factors that may have disrupted your natural gut flora balance.",
    icon: <Beaker className="h-6 w-6 text-primary" />
  }, {
    title: "BEING TOLD 'YOUR RESULTS ARE FINE,' BUT YOU STILL FEEL OFF",
    description: "Standard medical tests showing normal results while you continue to experience digestive and health symptoms.",
    icon: <Stethoscope className="h-6 w-6 text-primary" />
  }];
  const conditionsWeWorkWith = [{
    title: "IRRITABLE BOWEL SYNDROME (IBS)",
    description: "A common digestive disorder causing cramping, abdominal pain, bloating, gas, and changes in bowel habits.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "SMALL INTESTINAL BACTERIAL OVERGROWTH (SIBO)",
    description: "An overgrowth of bacteria in the small intestine that can cause bloating, gas, diarrhoea, and malabsorption.",
    icon: <TestTube className="h-6 w-6 text-primary" />
  }, {
    title: "ULCERATIVE COLITIS",
    description: "An inflammatory bowel disease that causes inflammation and ulcers in the digestive tract.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "CROHN'S DISEASE",
    description: "A type of inflammatory bowel disease that causes inflammation of the digestive tract lining.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "LEAKY GUT SYNDROME",
    description: "Increased intestinal permeability that allows toxins and bacteria to leak through the intestinal wall.",
    icon: <Eye className="h-6 w-6 text-primary" />
  }, {
    title: "ACID REFLUX AND HEARTBURN",
    description: "Stomach acid flowing back into the esophagus, causing burning sensations and digestive discomfort.",
    icon: <Beaker className="h-6 w-6 text-primary" />
  }, {
    title: "FOOD ALLERGIES AND SENSITIVITIES",
    description: "Immune reactions to specific foods that can cause digestive symptoms and systemic inflammation.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "POOR NUTRIENT ABSORPTION",
    description: "Difficulty absorbing essential vitamins and minerals from food, leading to deficiencies and health issues.",
    icon: <TestTube className="h-6 w-6 text-primary" />
  }, {
    title: "AUTOIMMUNE CONDITIONS",
    description: "Conditions where the immune system attacks healthy tissues, often linked to gut health imbalances.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "SKIN CONDITIONS LINKED TO GUT IMBALANCES",
    description: "Skin problems like eczema, acne, and psoriasis that may be connected to digestive health issues.",
    icon: <Eye className="h-6 w-6 text-primary" />
  }, {
    title: "CHRONIC FATIGUE, HORMONAL IMBALANCE, AND MENTAL HEALTH ISSUES",
    description: "Systemic health problems that may be rooted in poor gut health and microbiome imbalances.",
    icon: <Brain className="h-6 w-6 text-primary" />
  }];
  const functionalTestingOptions = [{
    title: "STOOL TESTS TO ANALYSE GUT FLORA AND PATHOGENS",
    description: "Comprehensive analysis of your gut microbiome, beneficial bacteria levels, and potential harmful organisms.",
    icon: <TestTube className="h-6 w-6 text-primary" />
  }, {
    title: "SIBO BREATH TESTS FOR DETECTING BACTERIAL OVERGROWTH",
    description: "Specialized testing to identify small intestinal bacterial overgrowth that may be causing digestive symptoms.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "FOOD INTOLERANCE TESTING",
    description: "Identify specific foods that may be triggering your digestive symptoms and inflammatory responses.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "BLOOD TESTS FOR NUTRIENT DEFICIENCIES AND INFLAMMATION",
    description: "Assess vitamin and mineral levels, inflammatory markers, and autoimmune indicators affecting your health.",
    icon: <Beaker className="h-6 w-6 text-primary" />
  }, {
    title: "HORMONE TESTING TO EXPLORE THE GUT-BRAIN AXIS",
    description: "Evaluate hormonal imbalances that may be connected to your digestive health and overall wellbeing.",
    icon: <Brain className="h-6 w-6 text-primary" />
  }];
  const healingPlanComponents = [{
    title: "GUT-SPECIFIC HERBAL MEDICINE",
    description: "Targeted herbal remedies designed to heal the digestive tract, reduce inflammation, and restore gut function.",
    icon: <Leaf className="h-6 w-6 text-primary" />
  }, {
    title: "TARGETED NUTRITIONAL SUPPLEMENTS",
    description: "Probiotics, prebiotics, digestive enzymes, and other supplements specifically chosen for your gut health needs.",
    icon: <TestTube className="h-6 w-6 text-primary" />
  }, {
    title: "ANTI-INFLAMMATORY NUTRITION AND HEALTHY DIET STRATEGIES",
    description: "Personalised nutrition plans that reduce inflammation and support optimal digestive function.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "NERVOUS SYSTEM SUPPORT AND STRESS MANAGEMENT",
    description: "Techniques to support the gut-brain connection and manage stress that can impact digestive health.",
    icon: <Brain className="h-6 w-6 text-primary" />
  }, {
    title: "SUPPORT FOR IMMUNE FUNCTION, MENTAL HEALTH, AND JOINT PAIN",
    description: "Holistic approach addressing the interconnected systems affected by gut health imbalances.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }];
  const gutBrainBenefits = [{
    title: "ANXIETY AND EMOTIONAL STABILITY",
    description: "Improved gut health can help regulate neurotransmitter production, leading to better emotional balance and reduced anxiety.",
    icon: <Brain className="h-6 w-6 text-primary" />
  }, {
    title: "FOCUS, COGNITION, AND CLARITY",
    description: "A healthy gut supports better brain function, improving mental clarity, focus, and cognitive performance.",
    icon: <Eye className="h-6 w-6 text-primary" />
  }, {
    title: "ENERGY LEVELS AND MOTIVATION",
    description: "Optimal gut health improves nutrient absorption and reduces inflammation, leading to increased energy and motivation.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "RESILIENCE TO CHRONIC STRESS",
    description: "A balanced gut microbiome helps your body better cope with and recover from chronic stress.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }];
  const naturalTreatmentMethods = [{
    title: "HIGH-QUALITY DIGESTIVE ENZYMES",
    description: "Supplemental enzymes to support proper digestion and nutrient absorption when your body's natural production is insufficient.",
    icon: <TestTube className="h-6 w-6 text-primary" />
  }, {
    title: "HERBAL ANTIMICROBIALS TO REBALANCE GUT FLORA",
    description: "Natural antimicrobial herbs that help eliminate harmful bacteria while supporting beneficial microorganisms.",
    icon: <Leaf className="h-6 w-6 text-primary" />
  }, {
    title: "ANTI-INFLAMMATORY FOODS TO SUPPORT YOUR DIGESTIVE SYSTEM",
    description: "Specific foods and nutrients that reduce inflammation in the gut and promote healing of the digestive tract.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "PROBIOTIC AND PREBIOTIC THERAPY",
    description: "Targeted probiotic strains and prebiotic fibers to restore and maintain a healthy gut microbiome.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "TAILORED DIET PLANS FOR FOOD SENSITIVITIES AND NUTRIENT ABSORPTION",
    description: "Personalised nutrition strategies that eliminate trigger foods and optimise nutrient uptake for healing.",
    icon: <Beaker className="h-6 w-6 text-primary" />
  }, {
    title: "CHINESE MEDICINE PRINCIPLES (IF APPROPRIATE)",
    description: "Traditional Chinese Medicine approaches that may complement naturopathic treatment for digestive health.",
    icon: <Eye className="h-6 w-6 text-primary" />
  }];
  return <>
      <SEO title="Highly Trusted Gut Health Naturopath | Mitchell Potts" description="Feeling tired, bloated, foggy or just flat? Our gut health naturopath will the real cause of your symptoms—so you can finally feel like YOU again." canonical="/what-we-treat/gut-health-naturopath-brisbane" keywords="gut health naturopath Brisbane, digestive health Brisbane, IBS treatment Brisbane, gut healing Brisbane, functional medicine Brisbane" serviceSchema={gutHealthServiceSchema} />
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
                  <img alt="Expert naturopath gut health consultation and functional testing at NXTLVL Health Brisbane clinic" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/8c8b4eb3-73e7-4d27-a130-784ffb35035c.png" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Gut Health Naturopath</p>
                        <p className="text-xs text-muted-foreground">Digestive Care • Natural Healing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book an Appointment Today!
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
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
            
            {/* Desktop Image - only visible on large screens */}
            <div className="relative hidden lg:block">
              <img alt="Professional naturopath gut health assessment and digestive disorder treatment at NXTLVL Health Brisbane" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/8c8b4eb3-73e7-4d27-a130-784ffb35035c.png" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Gut Health Naturopath</p>
                    <p className="text-sm text-muted-foreground">Digestive Care • Natural Healing</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Find the Root Cause of Your Digestive Issues</h2>
          </div>

          {/* Mobile Image positioned after heading */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/97a7e7b6-599f-4426-96b9-2ce7a68c115d.png" alt="Personalised gut naturopath treatment plan for digestive health restoration" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
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
              <img src="/lovable-uploads/97a7e7b6-599f-4426-96b9-2ce7a68c115d.png" alt="Comprehensive naturopath gut health analysis and IBS treatment at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Gut Health Matters Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Your Gut Health Matters More Than You Think</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Your gut is more than just a digestive organ. Often called your "second brain," the gut is deeply connected to your <strong>immune system</strong>, <strong>mental health</strong>, hormones, and even your skin. If your gut is out of balance, the effects can show up almost anywhere.
              </p>
              <p>
                Here are just a few signs that you could benefit from seeing a <strong>naturopath for gut health</strong>:
              </p>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {gutHealthSigns.map((sign, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => toggleDropdown(index)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {sign.icon}
                      <CardTitle className="text-lg">{sign.title}</CardTitle>
                    </div>
                    {openDropdown === index ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardHeader>
                {openDropdown === index && <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {sign.description}
                    </CardDescription>
                  </CardContent>}
              </Card>)}
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Makes Our Gut Naturopath Services Different From Others?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                At NXTLVL Health, we don't treat symptoms in isolation. We take a <strong>whole-body approach</strong> to understand how your <strong>digestive function</strong> affects everything else in your life, from your mood to your metabolism.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <img src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" alt="Advanced functional digestive testing and SIBO breath tests for accurate diagnosis" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">Here's what sets us apart:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
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
              We look beyond your medical history and symptoms. Instead, we examine your <strong>gut flora</strong>, your <strong>digestive tract</strong>, and your <strong>overall health</strong> from a fresh, evidence-based perspective. Learn about <a href="/blog/gut-health/7-worst-foods-for-gut-health" className="text-primary hover:underline">foods that harm gut health</a> or discover <a href="/blog/gut-health/best-tea-for-stomach-pain-and-bloating" className="text-primary hover:underline">natural teas for digestive relief</a> while you embark on your healing journey with our <a href="/what-we-treat/ibs-brisbane" className="text-primary hover:underline">comprehensive IBS treatment in Brisbane</a>.
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
              Our <strong>gut health naturopath</strong> services are ideal for individuals struggling with a <strong>wide range</strong> of digestive disorders and related issues. Whether you need specialized <a href="/what-we-treat/ibs-naturopath" className="text-primary hover:underline">IBS naturopathy</a>, comprehensive <a href="/what-we-treat/ibs-clinic" className="text-primary hover:underline">IBS clinic support</a>, expert <a href="/what-we-treat/sibo-naturopath" className="text-primary hover:underline">SIBO treatment</a>, or our dedicated <a href="/what-we-treat/gut-health-specialist" className="text-primary hover:underline">gut health specialist services</a>, including:
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {conditionsWeWorkWith.map((condition, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => toggleDropdown(index + 20)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {condition.icon}
                      <CardTitle className="text-lg">{condition.title}</CardTitle>
                    </div>
                    {openDropdown === index + 20 ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardHeader>
                {openDropdown === index + 20 && <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {condition.description}
                    </CardDescription>
                  </CardContent>}
              </Card>)}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How It Works: Your Gut Health Consult Process</h2>
          </div>

          <div className="mb-12">
            <img src="/lovable-uploads/507d386f-e7d8-4e14-a144-56b40f6d528f.png" alt="Step-by-step gut healing process with herbal medicine and natural treatment protocols" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">In-Depth Health Review</h3>
              <p className="text-muted-foreground">
                We begin with a 60–75 minute initial consultation, diving deep into your symptoms, <strong>dietary changes</strong>, lifestyle, and medical history to understand your digestive health story. No rushing, just a real, personalised conversation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Functional Testing (If Needed)</h3>
              <p className="text-muted-foreground">
                When appropriate, we may suggest advanced diagnostic tools to get <strong>accurate results</strong>. All testing is optional and tailored to your situation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Personalised Gut Healing Plan</h3>
              <p className="text-muted-foreground">
                Based on what we uncover, your <strong>gut naturopath</strong> will create a step-by-step plan focusing on <strong>natural remedies</strong> and <strong>naturopathic treatments</strong>.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Ongoing Support & Check-Ins</h3>
              <p className="text-muted-foreground">
                Your gut didn't become unbalanced overnight, so it takes time to heal. That's why we offer ongoing support to monitor progress and adjust your treatment.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">Functional Testing Options Include:</h3>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {functionalTestingOptions.map((test, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => toggleDropdown(index + 40)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {test.icon}
                      <CardTitle className="text-lg">{test.title}</CardTitle>
                    </div>
                    {openDropdown === index + 40 ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardHeader>
                {openDropdown === index + 40 && <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {test.description}
                    </CardDescription>
                  </CardContent>}
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-8">Your Personalised Gut Healing Plan May Include:</h3>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {healingPlanComponents.map((component, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => toggleDropdown(index + 50)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {component.icon}
                      <CardTitle className="text-lg">{component.title}</CardTitle>
                    </div>
                    {openDropdown === index + 50 ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardHeader>
                {openDropdown === index + 50 && <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {component.description}
                    </CardDescription>
                  </CardContent>}
              </Card>)}
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
                The <strong>gut-brain axis</strong> refers to the two-way communication between your <strong>digestive tract</strong> and your <strong>nervous system</strong>. In fact, up to <a href="https://www.co-biome.com/education/patient/the-important-role-of-serotonin-in-your-gut/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">90% of your body's serotonin is made in the gut</a>. That means your gut health can directly influence your <strong>mental health</strong>, emotions, and even sleep quality.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">By improving your gut, we can also support:</h3>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto mb-16">
            {gutBrainBenefits.map((benefit, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => toggleDropdown(index + 60)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {benefit.icon}
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                    {openDropdown === index + 60 ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardHeader>
                {openDropdown === index + 60 && <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>}
              </Card>)}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              A <strong>healthy gut microbiome</strong> equals a more balanced, energetic, and happier you.
            </p>
          </div>
        </div>
      </section>

      {/* Healing the Gut Naturally Section */}
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

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">We may use:</h3>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto mb-16">
            {naturalTreatmentMethods.map((method, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => toggleDropdown(index + 70)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {method.icon}
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                    </div>
                    {openDropdown === index + 70 ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardHeader>
                {openDropdown === index + 70 && <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {method.description}
                    </CardDescription>
                  </CardContent>}
              </Card>)}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Everything is explained clearly and practically, so you know exactly what you're doing and why.
            </p>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Mitch Section */}
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
            <img src="/lovable-uploads/39fb88b6-708c-4f0e-95a2-a91eb10c7d5b.png" alt="Mitchell Potts, experienced gut naturopath specialising in digestive disorders and microbiome restoration" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">Why people love working with Mitch:</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">He listens, really listens</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">He builds plans that fit your life, not the other way around</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">He focuses on long-term results, not band-aid fixes</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">He supports your entire health journey—physical, mental, and emotional</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg md:col-span-2 lg:col-span-2">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">He's walked this path with thousands of clients across Brisbane and beyond</p>
              </div>
            </div>
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
                Tired of living with <strong>digestive problems</strong> like <a href="/what-we-treat/ibs-brisbane" className="text-primary hover:underline">IBS</a>, <a href="/what-we-treat/sibo-naturopath" className="text-primary hover:underline">SIBO</a>, bloating, or just feeling off? If you're ready to get real answers and real results, it's time to work with a <strong>gut health naturopath</strong> who truly understands how to heal the body from the inside out. Learn more about working with our dedicated <a href="/what-we-treat/gut-health-specialist" className="text-primary hover:underline">gut health specialist</a> for comprehensive care.
              </p>
              <p>
                Whether you're local to Brisbane or joining us via <strong>online consultations</strong>, NXTLVL Health is here to guide you every step of the way.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book an Appointment Today!
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="tel:0731808853">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Mitch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>;
};
export default GutHealth;