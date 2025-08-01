import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Target, Leaf, Shield, Microscope } from "lucide-react";

const GutHealthSpecialist = () => {
  // Service Schema for Gut Health Specialist
  const gutHealthSpecialistSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nxtlvlhealth.com.au/what-we-treat/gut-health-specialist#service",
    "name": "Gut Health Specialist Brisbane",
    "alternateName": ["Digestive Health Specialist", "Microbiome Specialist", "SIBO Specialist Brisbane", "Gut Health Doctor"],
    "description": "Leading gut health specialist in Brisbane specialising in digestive disorders, microbiome restoration, SIBO, IBS, and comprehensive gut healing. Expert naturopathic care for optimal digestive health and wellbeing.",
    "url": "https://www.nxtlvlhealth.com.au/what-we-treat/gut-health-specialist",
    "image": "https://www.nxtlvlhealth.com.au/lovable-uploads/85472ace-cbc5-4079-9a2e-27bb7dcce090.png",
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
    "category": "Digestive Health Specialist",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gut Health Specialist Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Comprehensive Gut Health Assessment",
            "description": "Detailed evaluation of digestive system function, microbiome analysis, and personalised treatment planning for optimal gut health"
          },
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Advanced Gut Microbiome Testing",
            "description": "Specialised testing including stool analysis, SIBO breath tests, food intolerance testing, and functional digestive assessments"
          },
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personalised Gut Healing Programme",
            "description": "Customised treatment plans using natural therapies, herbal medicine, nutritional support, and lifestyle modifications for digestive restoration"
          },
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock"
        }
      ]
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
    "areaServed": [
      "Brisbane",
      "New Farm",
      "Fortitude Valley",
      "Newstead",
      "Teneriffe",
      "Kangaroo Point",
      "East Brisbane",
      "Norman Park",
      "Bulimba",
      "Hawthorne",
      "Morningside",
      "Ascot",
      "Hamilton",
      "Clayfield",
      "Wilston",
      "Windsor",
      "Kelvin Grove",
      "Paddington",
      "Red Hill",
      "Auchenflower",
      "Toowong",
      "Queensland"
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "name": "In-Person Gut Health Consultations",
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
      "serviceUrl": "https://www.nxtlvlhealth.com.au/what-we-treat/gut-health-specialist"
    },
    "serviceOutput": [
      "SIBO Treatment",
      "IBS Management", 
      "Digestive Disorder Resolution",
      "Microbiome Restoration",
      "Leaky Gut Healing",
      "Food Intolerance Management",
      "Inflammatory Bowel Disease Support",
      "Gut-Brain Axis Optimisation",
      "Digestive Health Education",
      "Natural Gut Healing Protocols"
    ],
    "audience": {
      "@type": "PeopleAudience",
      "audienceType": "Individuals with digestive disorders, gut health issues, microbiome imbalances, SIBO, IBS, and chronic digestive symptoms"
    },
    "potentialAction": [
      {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://calendly.com/nxtlvlhealth-info/15-min-consult",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Gut Health Specialist Consultation"
        }
      }
    ]
  };
  return (
    <>
      <SEO 
        title="Best Gut Health Specialist in Brisbane | Book a Free Consult"
        description="Feeling tired, bloated, foggy or just flat? Our gut health specialist Mitch will the real cause of your symptoms, so you can finally feel like YOU again."
        canonical="/what-we-treat/gut-health-specialist"
        keywords="gut health specialist Brisbane, digestive health Brisbane, gut health doctor, microbiome specialist, SIBO specialist Brisbane"
        serviceSchema={gutHealthSpecialistSchema}
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Gut Health Specialist | <span className="text-primary">Feel Better From the Inside Out</span> at NXTLVL Health
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                   <img 
                     alt="Gut health specialist consultation at NXTLVL Health" 
                     className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                     src="/lovable-uploads/85472ace-cbc5-4079-9a2e-27bb7dcce090.png" 
                   />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Gut Health Specialist</p>
                        <p className="text-xs text-muted-foreground">Natural Healing • Root Cause</p>
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
                 alt="Gut health specialist consultation at NXTLVL Health" 
                 className="rounded-2xl shadow-2xl w-full h-auto" 
                 src="/lovable-uploads/85472ace-cbc5-4079-9a2e-27bb7dcce090.png" 
               />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Gut Health Specialist</p>
                    <p className="text-sm text-muted-foreground">Natural Healing • Root Cause</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Not Feeling Right Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Not Feeling Right? Your Gut Could Be the Key</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
             <img 
               src="/lovable-uploads/09a6a7fe-ea21-4642-87aa-dad3d0f73026.png" 
               alt="Woman discussing gut health issues with naturopath at NXTLVL Health" 
               className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
             />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Do you feel bloated all of the time? Does your stomach ache after meals? Do you struggle with gas, reflux, or bowel issues?
                </p>
                <p>
                  You're not alone, and you're definitely not making it up.
                </p>
                <p>
                  Many people live with gut issues that make everyday life hard. And often, they're told it's "just stress" or to try another diet. But at NXTLVL Health, we know the gut is the core of your health, and we treat it accordingly.
                </p>
                <p>
                  Mitch, a trusted gut health specialist in Brisbane, helps you find out why your gut isn't feeling quite right. Whether it's <a href="/what-we-treat/sibo-naturopath" className="text-primary hover:underline">small intestinal bacterial overgrowth (SIBO)</a>, <a href="/what-we-treat/ibs-naturopath" className="text-primary hover:underline">irritable bowel syndrome (IBS)</a>, or a sensitive tummy, you'll get real support that helps you feel like yourself again. We also offer specialized care at our <a href="/what-we-treat/ibs-clinic" className="text-primary hover:underline">IBS clinic</a> for comprehensive treatment.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
               <img 
                 src="/lovable-uploads/09a6a7fe-ea21-4642-87aa-dad3d0f73026.png" 
                 alt="Woman discussing gut health issues with naturopath at NXTLVL Health" 
                 className="rounded-2xl shadow-lg w-full h-auto" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* What Does a Gut Health Specialist Do Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Does a Gut Health Specialist Do?</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
             <img 
               src="/lovable-uploads/bed9e40f-2f68-4ae1-8b4a-a0b9a84accbd.png" 
               alt="Naturopath examining gut health samples under microscope at NXTLVL Health" 
               className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
             />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              A gut health specialist checks exactly how your whole digestive system works. From how you digest food to how your gut talks to your brain, everything matters.
            </p>
            <p>
              At NXTLVL Health, Mitch uses testing, food plans, supplements, and natural support to find out what's wrong with your gut and fix it in a natural and effective way. Naturopaths aim to treat the underlying causes of gut issues rather than just the symptoms, ensuring long-term health improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Do Any of These Sound Familiar Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Do Any of These Sound Familiar?</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
             <img 
               src="/lovable-uploads/7576859d-ce00-418a-abd7-2ba07fdeb7dc.png" 
               alt="Gut health consultation and assessment at NXTLVL Health clinic" 
               className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
             />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "You always feel bloated or gassy",
              "Your belly hurts after every meal",
              "You have trouble with going to the toilet, either too much or not enough",
              "You're sensitive to a lot of foods",
              "You feel tired, foggy, or moody for no reason",
              "Your skin is breaking out or feels itchy",
              "You've been told you're \"fine,\" but you don't feel fine"
            ].map((symptom, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{symptom}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              If you said yes to any of those, your gut may not be working properly. And when your gut doesn't feel good, everything else doesn't feel good.
            </p>
          </div>
        </div>
      </section>

      {/* Why Gut Health Affects Everything Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Gut Health Affects Everything</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
             <img 
               src="/lovable-uploads/778efa12-2a50-4463-9137-b9811fb860b1.png" 
               alt="Holistic gut health approach at NXTLVL Health Brisbane clinic" 
               className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
             />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-12">
            <p>
              Your gut does a lot more than just digest food. It's connected to your brain, your immune system, and your hormones. A healthy gut microbiome is critical for maintaining overall health, influencing everything from digestion to mental well-being.
            </p>
            <p>
              When your gut isn't happy, you may notice problems with your:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: Brain, title: "Mental health" },
              { icon: Activity, title: "Energy and sleep" },
              { icon: Shield, title: "Immune system" },
              { icon: Heart, title: "Skin and mood" },
              { icon: Target, title: "Weight" }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              And that's because 70% of your immune system is in your gut. So if you want better gut health, you need to care for your whole body, too. Untreated digestive conditions can worsen over time, potentially leading to more severe health issues.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions We Help With Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Conditions We Help With</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Mitch supports people with many kinds of digestive problems, including:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { text: "Small intestinal bacterial overgrowth (SIBO)", link: "/what-we-treat/sibo-naturopath" },
              { text: "Irritable bowel syndrome (IBS)", link: "/what-we-treat/ibs-naturopath" },
              { text: "Leaky gut", link: null },
              { text: "Ulcerative colitis", link: null },
              { text: "Inflammatory bowel disease (IBD)", link: null },
              { text: "Reflux, bloating, constipation, diarrhoea", link: null },
              { text: "Food intolerances", link: null },
              { text: "Abdominal pain", link: null },
              { text: "Digestive issues linked to mental health", link: null }
            ].map((condition, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      {condition.link ? (
                        <a href={condition.link} className="text-primary hover:underline">{condition.text}</a>
                      ) : (
                        condition.text
                      )}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              IBD is on the rise in Australia, which has one of the highest rates of Inflammatory Bowel Disease in the world.
            </p>
          </div>

          <div className="text-center mt-8">
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

      {/* Why Choose Mitch Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Mitch as Your Gut Health Specialist?</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
             <img 
               src="/lovable-uploads/108aecf4-9e98-4025-803d-5e64dbd22b5b.png" 
               alt="Mitch Potts, gut health specialist at NXTLVL Health Brisbane" 
               className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
             />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Microscope className="h-6 w-6" />
                  He Finds the Root Cause
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mitch looks deep into your digestive health. Using gut microbiome testing, stool analysis, and functional testing, he checks what's really going on in your gut. Functional testing includes microbiome stool testing and SIBO testing to uncover the root causes of your symptoms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Personalised Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The plan Mitch gives is built just for you. There's no generic diets or supplement stacks. It's just clear steps that work with your lifestyle. Personalized care for gut health focuses on creating tailored wellness plans that address your unique needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Leaf className="h-6 w-6" />
                  Natural Care That Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use herbal medicine, clinical nutrition, and easy lifestyle changes that support your whole body, not just the gut. Nutrition is essential for healing the gut and reducing inflammation, making it a cornerstone of our approach.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Real Results, Real Fast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most clients start seeing changes in the first 2–6 weeks. From better digestion to clearer skin and less brain fog.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Your Gut Heals With Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How Your Gut Heals With Us</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
             <img 
               src="/lovable-uploads/3b9f2e82-d4ec-4e42-8cd1-91f945cdb35e.png" 
               alt="Gut health specialist explaining treatment plan to patient at NXTLVL Health" 
               className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
             />
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Step 1: We Listen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We talk about everything, your symptoms, your diet, your mood, and your daily life. This gives us the full picture of your health. Gut microbiome testing guides individualised treatment plans, ensuring that every recommendation is tailored to your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Step 2: We Test</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use advanced tools like gut microbiome testing, stool analysis, and live blood screening to find the root problem.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Step 3: We Build Your Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We create a treatment plan just for you. It might include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Natural herbs to calm inflammation and kill bad bacteria</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Supplements to fix nutrient problems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Easy food swaps to support your gut</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Tips to manage stress, sleep better, and boost mood</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Step 4: We Heal and Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We help your gut lining grow stronger, your digestion get better, and your immune system work the way it should. Improved gut health can also lead to better energy levels and enhanced mental health, helping you feel your best.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Step 5: We Help You Stay Better</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We don't just fix your symptoms, we help you stay well. We'll show you how to improve gut health long term with simple lifestyle changes that are realistic to stick with.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Functional Testing Matters Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Functional Testing Matters</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-12">
            <p>
              Most regular tests don't show why you're feeling sick. Functional testing looks deeper at your: gut bacteria (both good and bad), inflammation markers, digestive enzyme levels, nutrient absorption, and food sensitivities. Stool testing can provide a comprehensive picture of gut health, offering valuable insights for treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Gut bacteria (both good and bad)",
              "Inflammation markers",
              "Digestive enzyme levels",
              "Nutrient absorption",
              "Food sensitivities"
            ].map((test, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Microscope className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{test}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              With this info, we can make the right plan for your unique body.
            </p>
          </div>
        </div>
      </section>

      {/* The Tools We Use Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Tools We Use to Support Gut Health</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Leaf,
                title: "Herbal Medicine",
                description: "To calm inflammation, reduce symptoms, and help your gut lining heal"
              },
              {
                icon: Heart,
                title: "Nutrition & Supplements",
                description: "To support digestion, energy, and immune function"
              },
              {
                icon: Activity,
                title: "Diet Changes",
                description: "Like low-FODMAP or anti-inflammatory food plans that suit your body"
              },
              {
                icon: Brain,
                title: "Mind-Body Support",
                description: "To help you handle stress and feel more at peace"
              }
            ].map((tool, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <tool.icon className="h-6 w-6" />
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* It's Not Just About Food Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">It's Not Just About Food</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-12">
            <p>
              Yes, diet is important, but so is your:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: Brain, title: "Stress" },
              { icon: Activity, title: "Sleep" },
              { icon: Heart, title: "Movement" },
              { icon: Target, title: "Hormones" }
            ].map((factor, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <factor.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">{factor.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We heal your whole body, not just your meals. Because a healthy gut needs a happy mind and body too.
            </p>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Common Mistakes People Make With Gut Health</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Trying random supplements without testing",
              "Cutting out lots of foods without knowing why",
              "Taking probiotics too soon",
              "Ignoring stress, sleep, or mental health"
            ].map((mistake, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">{mistake}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              You don't need to go at it alone. We'll help you avoid the confusion and find a plan that makes sense for you.
            </p>
          </div>

          <div className="text-center mt-8">
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

      {/* Who We Work With Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Work With</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Mitch helps people of all ages, including those who are:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Feeling bloated or in pain after meals",
              "Struggling with chronic digestive issues",
              "Trying to manage IBS, IBD, or leaky gut",
              "Looking to heal after antibiotics or food poisoning",
              "Wanting to reduce inflammation naturally",
              "Working on mental health or chronic fatigue"
            ].map((client, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{client}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens After You Start Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Happens After You Start?</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Most people say this 2-6 weeks after starting work with Mitch:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "\"I don't feel bloated anymore\"",
              "\"My energy is finally back\"",
              "\"I'm can eat without fear again\"",
              "\"I feel clearer, lighter, and stronger\""
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground italic">{testimonial}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              And you can feel that too. With the right gut support and a clear path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Feel Good Again?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Your gut might be the missing piece to feeling like yourself again.
              </p>
              <p>
                If you're tired of feeling unwell, if nothing has worked, if you're ready for something different, this is your sign.
              </p>
              <p className="font-semibold text-foreground">
                Mitch is the gut health specialist Brisbane locals trust to help them heal their digestive system, improve their overall health, and enjoy life again.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Your Consultation Today
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

export default GutHealthSpecialist;
