
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Baby, MapPin, Clock, Shield, Zap, Stethoscope, Target, Leaf, Microscope } from "lucide-react";

const NewsteadNaturopathy = () => {
  // Service Schema for Newstead Naturopathy
  const newsteadNaturopathyServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nxtlvlhealth.com.au/areas-we-serve/naturopath-newstead#service",
    "name": "Naturopathy Services Newstead Brisbane",
    "alternateName": ["Newstead Naturopath", "Naturopathic Care Newstead", "Natural Health Newstead"],
    "description": "Comprehensive naturopathic services for residents of Newstead and surrounding areas. Our qualified naturopath provides natural health solutions for digestive disorders, hormonal imbalances, chronic fatigue, women's health, children's health, and mental health support through evidence-based natural medicine.",
    "url": "https://www.nxtlvlhealth.com.au/areas-we-serve/naturopath-newstead",
    "image": [
      "https://www.nxtlvlhealth.com.au/lovable-uploads/71b09125-3a64-4d93-934e-f899eab6b427.png",
      "https://www.nxtlvlhealth.com.au/lovable-uploads/225024a0-804b-437d-aaf9-9d543e7f73e2.png",
      "https://www.nxtlvlhealth.com.au/lovable-uploads/4ddbff79-0110-49a0-af33-498a6ef47123.png"
    ],
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.nxtlvlhealth.com.au/#organization",
      "name": "NXTLVL Health - Naturopath",
      "image": "https://www.nxtlvlhealth.com.au/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png",
      "telephone": "(07) 3180 8853",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 2/665 Brunswick St",
        "addressLocality": "New Farm",
        "addressRegion": "QLD",
        "addressCountry": "AU",
        "postalCode": "4005"
      },
      "priceRange": "$$"
    },
    "serviceType": "Healthcare Service",
    "category": ["Naturopathy", "Natural Medicine", "Holistic Health", "Functional Medicine"],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-27.4646",
        "longitude": "153.0448"
      },
      "geoRadius": "25000"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Newstead",
        "containedInPlace": {
          "@type": "State",
          "name": "Queensland",
          "containedInPlace": {
            "@type": "Country",
            "name": "Australia"
          }
        }
      },
      "New Farm",
      "Fortitude Valley",
      "Teneriffe",
      "Kangaroo Point",
      "East Brisbane",
      "Norman Park",
      "Bulimba",
      "Hawthorne",
      "Morningside",
      "Brisbane Northside"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Newstead Naturopathic Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Women's Health Naturopathy",
            "description": "Natural treatment for hormonal imbalances, PCOS, irregular periods, PMS, and menopause support"
          },
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digestive Health Treatment",
            "description": "Natural solutions for IBS, gut issues, bloating, reflux, and SIBO"
          },
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Children's Health Naturopathy",
            "description": "Natural care for food allergies, mood swings, digestive issues, and fussy eating in children"
          },
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mental Health Support",
            "description": "Natural approach to anxiety, burnout, and mood changes through targeted nutritional medicine"
          },
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chronic Condition Management",
            "description": "Natural treatment for chronic fatigue, autoimmune conditions, and inflammatory disorders"
          },
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pregnancy Care & Fertility Support",
            "description": "Safe, research-backed care for preconception, pregnancy, and post-partum support"
          },
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Weight Management Support",
            "description": "Natural, non-restrictive approach to weight loss tailored to your body and lifestyle"
          },
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Initial Naturopathic Consultation",
            "description": "Comprehensive 75-minute initial consultation including case taking, health assessment, and personalised treatment plan"
          },
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "name": "In-Person and Telehealth Consultations",
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
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-27.4646",
          "longitude": "153.0448"
        }
      },
      "servicePhone": "(07) 3180 8853",
      "serviceUrl": "https://www.nxtlvlhealth.com.au/areas-we-serve/naturopath-newstead"
    },
    "serviceOutput": [
      "Personalised treatment plans",
      "Natural health solutions",
      "Functional testing recommendations",
      "Nutritional guidance",
      "Herbal medicine prescriptions",
      "Lifestyle recommendations",
      "Ongoing health monitoring"
    ],
    "audience": {
      "@type": "PeopleAudience",
      "geographicArea": "Newstead, Queensland, Australia",
      "audienceType": "Patients seeking natural health solutions"
    },
    "performer": {
      "@type": "Person",
      "name": "Mitchell Potts",
      "jobTitle": "Naturopath & Nutritional Medicine Practitioner",
      "description": "Qualified naturopath with extensive experience in natural medicine, specialising in gut health, hormonal imbalances, and chronic health conditions",
      "worksFor": {
        "@type": "LocalBusiness",
        "@id": "https://www.nxtlvlhealth.com.au/#organization"
      }
    },
    "potentialAction": [
      {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://nxtlvlhealth.com.au/book-now/",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Naturopathic Consultation Appointment"
        }
      },
      {
        "@type": "CommunicateAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "tel:(07) 3180 8853",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        }
      }
    ],
    "isRelatedTo": [
      {
        "@type": "Service",
        "name": "Gut Health Specialist",
        "url": "https://www.nxtlvlhealth.com.au/what-we-treat/gut-health-specialist-brisbane"
      },
      {
        "@type": "Service", 
        "name": "IBS Treatment",
        "url": "https://www.nxtlvlhealth.com.au/what-we-treat/ibs-treatment-brisbane"
      },
      {
        "@type": "Service",
        "name": "Functional Medicine",
        "url": "https://www.nxtlvlhealth.com.au/functional-medicine"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Top Naturopath in Newstead Brisbane | Mitchell Potts"
        description="Not feeling like yourself and not getting answers? Mitchell is a 5-star Naturopath in Newstead Brisbane that will find and heal the root cause of your problems."
        canonical="/areas-we-serve/naturopath-newstead"
        keywords="naturopath Newstead, Newstead naturopathy, natural health Newstead, holistic health Newstead Brisbane"
        serviceSchema={newsteadNaturopathyServiceSchema}
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopath <span className="text-primary">Newstead</span> | Natural, Root-Cause Healing Near You
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopath having consultation with female patient at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/71b09125-3a64-4d93-934e-f899eab6b427.png"
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Natural Health Care</p>
                        <p className="text-xs text-muted-foreground">Newstead • Naturopathy</p>
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
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-center">Book an Appointment Today</span>
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
                alt="Naturopath having consultation with female patient at NXTLVL Health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/71b09125-3a64-4d93-934e-f899eab6b427.png"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Natural Health Care</p>
                    <p className="text-sm text-muted-foreground">Newstead • Naturopathy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for a Trusted Naturopath Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Looking for a Trusted Naturopath Near Newstead?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/225024a0-804b-437d-aaf9-9d543e7f73e2.png" 
              alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  If you're tired of feeling <strong>"not quite right"</strong> and you're looking for a <strong>holistic approach that actually delivers long-term results</strong> for your health, you've come to the right place. At NXTLVL Health, we support many people like you from Newstead who are looking for <strong>clarity, support, and answers to their health</strong> that they couldn't get from doctors.
                </p>
                <p>
                  Our clinic, based just minutes from Newstead QLD, offers <strong>evidence-based natural medicine, functional testing, and personalised treatment plans</strong> designed to get you feeling better physically, mentally, and emotionally. Whether you're struggling with digestive issues, hormonal imbalances, or chronic fatigue, our qualified naturopath Mitchell Potts is here to guide you every step of the way.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/225024a0-804b-437d-aaf9-9d543e7f73e2.png" 
                alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients From Newstead Choose Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Clients From Newstead Choose NXTLVL Health</h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  We're Just Minutes From Newstead
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Although we're not located in Newstead itself, our clinic is just a <strong>short walk or drive away</strong>, conveniently located near New Farm and Fortitude Valley.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Brain className="h-6 w-6" />
                  Real Answers, Not Guesswork
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you've been told everything is "normal," but still feel exhausted, anxious, or unwell, we'll help you <strong>get to the root cause of the problem</strong>. From your gut health to your nervous system, we explore what's really going on inside.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Heart className="h-6 w-6" />
                  A Naturopathic Approach That Respects Your Whole Story
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We take time to really listen to you and what you've been going through. Our <strong>holistic approach considers your whole life</strong>: your stress levels, your dietary habits, your emotional wellbeing, and even your medical history. You are way more than just your symptoms, and the help you get should reflect that.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Work With</h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Heart className="h-6 w-6" />
                  Women's Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We help with PMS, hormonal imbalances, painful periods, PCOS, and menopause. We help you <strong>understand your cycle and help you feel in control of your health again</strong>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Activity className="h-6 w-6" />
                  Gut Health & Digestive Complaints
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground space-y-3">
                  <p>
                    From Irritable Bowel Syndrome (IBS) to bloating, reflux, and SIBO, we create <strong>gut-healing protocols for you that fix the root cause</strong> of your discomfort.
                  </p>
                  <a 
                    href="https://www.kathleenmcfarlane.com.au/health-and-wellness/irritable-bowel-syndrome-ibs-help/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline inline-block"
                  >
                    Find out how effective Naturopathy is for IBS
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Baby className="h-6 w-6" />
                  Children's Health Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We help with food allergies, mood swings, digestive issues, and fussy eating and much more in <strong>children of all ages</strong>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Brain className="h-6 w-6" />
                  Mental Health & Chronic Stress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If anxiety, burnout, or mood changes are affecting your life, we help <strong>heal your nervous system and mental health</strong> with targeted nutritional medicine and sometimes even herbal medicine.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Weight Loss & Metabolic Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We take a <strong>natural, non-restrictive approach to weight loss</strong>. There's no fad diets just real advice that's tailored to your body and lifestyle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Heart className="h-6 w-6" />
                  Pregnancy Care & Fertility Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Whether you're trying to conceive, preparing for pregnancy, or need support post-partum, we offer <strong>safe, research-backed care for every stage</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  Autoimmune Conditions & Chronic Disease
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From fatigue to inflammation, we help to <strong>heal your immune system and overall health</strong> without adding pressure or overwhelm to it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect From Your First Consultation</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/4ddbff79-0110-49a0-af33-498a6ef47123.png" 
              alt="Naturopath showing patient results on a computer at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  We Listen to Your Full Health Story
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  During your initial consultation, we explore your symptoms, your past diagnoses, your lifestyle, your emotional health, and <strong>your health goals</strong>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Microscope className="h-6 w-6" />
                  We Use Functional Testing When Needed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This could include <strong>stool testing, hormone panels, nutrient profiles, or food sensitivity testing</strong>, depending on your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  You Get a Personalised Treatment Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every plan we give includes <strong>natural remedies, dietary recommendations, and lifestyle changes</strong> tailored to your condition, your goals, and even your schedule.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  We Focus on Lifestyle Changes That Work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our advice is <strong>very practical and very realistic</strong>. Whether it's changing your breakfast or adding five minutes of mindfulness, we keep it doable for you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Modalities & Therapies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Modalities & Therapies</h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Leaf className="h-6 w-6" />
                  Western Herbal Medicine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Herbal formulas crafted for hormonal support</strong>, digestive healing, liver detoxification, and nervous system regulation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Zap className="h-6 w-6" />
                  Nutritional Medicine & Clinical Supplements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use <strong>practitioner-grade supplements and diet strategies</strong> to correct deficiencies, support organ systems, and restore energy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  Natural Pain Relief & Anti-Inflammatory Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We support conditions such as joint pain, menstrual cramping, and muscle aches with <strong>anti-inflammatory herbs and nutritional support</strong>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Activity className="h-6 w-6" />
                  Gut Healing Protocols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For IBS, food intolerances, or SIBO, we <strong>support your microbiome, reduce inflammation, and improve digestion naturally</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Brain className="h-6 w-6" />
                  Stress & Nervous System Regulation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Calm an overworked nervous system</strong> using herbal adaptogens, magnesium, and mind-body practices for long-term emotional resilience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serving Clients Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Serving Clients Across Newstead QLD & Surrounds</h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Located Minutes from Gasworks Plaza & Fortitude Valley
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our New Farm location is <strong>highly accessible for Newstead locals</strong>. We're just around the corner, literally.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Popular with Locals from New Farm, Kelvin Grove & Spring Hill
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We also help people from West End, Spring Hill, and other Brisbane QLD suburbs who are looking for <strong>natural, long-term health care</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Mitch Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Mitch at NXTLVL Health?</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/93084f16-17e1-4c12-bcc4-c9affd3dde25.png" 
              alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Stethoscope className="h-6 w-6" />
                  Bachelor of Health Science (Endeavour College of Natural Health)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your care is led by a <strong>university-qualified naturopath</strong> with a strong foundation in natural medicine and clinical practice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Years of Clinical Experience Supporting Complex Health Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mitch has <strong>changed the lives of hundreds of people</strong> dealing with chronic illness, digestive conditions, fatigue, skin concerns, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  Straight-Talking, Results-Based Natural Healthcare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We don't do fluff. You'll get <strong>honest answers, clear communication, and a plan that works with your life</strong> not against it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conditions We Commonly See Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Conditions We Commonly See at Our Clinic</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Irritable Bowel Syndrome (IBS), Gas & Bloating",
              "Hormonal Imbalances & Irregular Cycles",
              "Chronic Fatigue & Low Energy",
              "Skin Conditions Like Eczema, Acne & Psoriasis",
              "Joint Pain, Muscle Tension & Inflammation",
              "Allergy Testing & Food Sensitivities"
            ].map((condition, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{condition}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* We Collaborate Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">We Collaborate With Your Other Practitioners</h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Working With Personal Trainers, Massage Therapists, Allied Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you're currently seeing a Personal Trainer or Massage Therapist, we can <strong>integrate our recommendations into your wellness routine</strong>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Stethoscope className="h-6 w-6" />
                  Respecting Your Medical History & Existing Diagnosis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our treatments will <strong>work alongside conventional medicine</strong>. We value your previous care and work within an integrated model.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your Initial Consultation Today</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Book your initial consultation today and get the <strong>answers and support you've been looking for</strong>.
              </p>
              <h3 className="text-xl font-semibold text-foreground">In-Clinic or Telehealth Options Available for Newstead Residents</h3>
              <p>
                Whether you're based in Newstead QLD or nearby, we're here to <strong>support your health journey on your terms</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://nxtlvlhealth.com.au/book-now/">
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

export default NewsteadNaturopathy;
