
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Scale, Users, Zap, Target } from "lucide-react";

const WeightLoss = () => {
  // Service Schema for Weight Loss Naturopath
  const weightLossNaturopathSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nxtlvlhealth.com.au/what-we-treat/weight-loss-naturopath-brisbane#service",
    "name": "Weight Loss Naturopath Brisbane",
    "alternateName": ["Natural Weight Loss Brisbane", "Holistic Weight Loss", "Naturopathic Weight Loss", "Sustainable Weight Loss"],
    "description": "Expert weight loss naturopath in Brisbane specialising in root-cause weight loss solutions. Personalised natural treatment plans addressing hormonal imbalances, metabolic issues, and sustainable healthy weight management.",
    "url": "https://www.nxtlvlhealth.com.au/what-we-treat/weight-loss-naturopath-brisbane",
    "image": "https://www.nxtlvlhealth.com.au/lovable-uploads/aeafb801-21a6-4748-a8c0-7cfe86dda52d.png",
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
    "category": "Weight Loss and Metabolic Health",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Weight Loss Naturopathy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Comprehensive Weight Loss Assessment",
            "description": "Detailed health review examining hormonal imbalances, metabolic function, thyroid health, insulin resistance, and lifestyle factors affecting weight management"
          },
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Functional Weight Loss Testing",
            "description": "Advanced testing including hormone panels, food intolerance testing, metabolic assessments, body composition analysis, and nutritional status evaluation"
          },
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personalised Weight Loss Programme",
            "description": "Customised treatment plans using herbal medicine, natural supplements, sustainable meal planning, stress management, and lifestyle modifications for healthy weight loss"
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
      "name": "In-Person and Online Weight Loss Consultations",
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
      "serviceUrl": "https://www.nxtlvlhealth.com.au/what-we-treat/weight-loss-naturopath-brisbane"
    },
    "serviceOutput": [
      "Sustainable Weight Loss",
      "Hormonal Balance Restoration",
      "Metabolic Function Improvement",
      "Insulin Sensitivity Enhancement", 
      "Thyroid Health Optimisation",
      "Stress Management Support",
      "Nutritional Status Correction",
      "Body Composition Improvement",
      "Energy Level Enhancement",
      "Digestive Health Support"
    ],
    "audience": {
      "@type": "PeopleAudience",
      "audienceType": "Individuals seeking natural weight loss, those with hormonal imbalances, metabolic dysfunction, PCOS, thyroid issues, and sustainable healthy weight management"
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
          "name": "Weight Loss Naturopath Consultation"
        }
      }
    ]
  };
  return (
    <>
      <SEO 
        title="Weight Loss Naturopath | The Best in Brisbane"
        description="Tried everything and still not dropping the weight? Our weight loss naturopath finds out what's really going on—and helps your body transform the way you like."
        canonical="/what-we-treat/weight-loss-naturopath-brisbane"
        keywords="weight loss naturopath Brisbane, natural weight loss, holistic weight loss, naturopathic weight loss"
        serviceSchema={weightLossNaturopathSchema}
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Weight Loss Naturopath <span className="text-primary">Brisbane</span> | Personalised, Root-Cause Solutions
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/aeafb801-21a6-4748-a8c0-7cfe86dda52d.png"
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Scale className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Weight Loss Naturopathy</p>
                        <p className="text-xs text-muted-foreground">Root Cause • Natural Solutions</p>
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
                    <span className="text-center">Book an Appointment Today!</span>
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
                alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/aeafb801-21a6-4748-a8c0-7cfe86dda52d.png"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Scale className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Weight Loss Naturopathy</p>
                    <p className="text-sm text-muted-foreground">Root Cause • Natural Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struggling to Lose Weight Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Struggling to Lose Weight Despite Doing Everything "Right"?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/726dc878-88f1-4c71-b05b-bf998ac39785.png" 
              alt="Naturopath having consultation with female patient at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  If you're exhausted from dieting, working out, and "eating healthy" but still can't seem to shift the weight, you're not alone. At NXTLVL Health, our <strong>weight loss naturopath service</strong> is built for people like you people who are doing their best but still feel stuck.
                </p>
                 <p>
                   Our approach isn't about calorie counting or quick fixes it's about <strong>uncovering the root causes of your weight gain</strong> and treating them with science-backed, natural solutions. Our <a href="/functional-medicine" className="text-primary hover:underline">functional medicine approach</a> uses advanced tools like <a href="/services/live-blood-analysis-brisbane" className="text-primary hover:underline">live blood analysis</a> to identify underlying imbalances. Whether you're facing hormonal imbalances, insulin resistance, digestive problems, poor sleep, or chronic stress, we'll help your body work with you, not against you.
                 </p>
                 <p>
                   With support from <strong>Brisbane naturopath Mitchell Potts</strong>, you'll get a personalised treatment plan that supports sustainable weight loss, improved energy levels, and better overall health. Our comprehensive approach includes <a href="/services/personal-trainer-newstead" className="text-primary hover:underline">expert personal training</a> and advanced treatments like <a href="/services/mls-laser-therapy-treatment-brisbane" className="text-primary hover:underline">MLS laser therapy</a> to support your weight loss journey. Whether you're from <a href="/areas-we-serve/naturopath-clayfield-brisbane" className="text-primary hover:underline">Clayfield</a>, <a href="/areas-we-serve/naturopath-new-farm" className="text-primary hover:underline">New Farm</a>, <a href="/areas-we-serve/naturopath-hamilton" className="text-primary hover:underline">Hamilton</a>, or anywhere across Brisbane, our personalized approach is here to help.
                 </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/726dc878-88f1-4c71-b05b-bf998ac39785.png" 
                alt="Naturopath having consultation with female patient at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Naturopathic Weight Loss Works Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Naturopathic Weight Loss Actually Works</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Forget generic advice. <strong>Naturopathic weight loss focuses on treating the whole person</strong> not just the number on the scale. We consider all the underlying causes of weight gain including your thyroid hormones, gut health, lifestyle factors, and stress hormone levels.
              </p>
              <p>
                We get to know your full story your medical history, health goals, dietary changes you've tried, and how your body's been responding. Then, we craft a treatment that aligns with your individual needs. Our <a href="/what-we-treat/wellness-clinic-brisbane" className="text-primary hover:underline">wellness clinic</a> approach ensures you get holistic support from <a href="/" className="text-primary hover:underline">Brisbane's leading naturopaths</a>. Read more about <a href="/blog/naturopathy/naturopathy-for-weight-loss" className="text-primary hover:underline">naturopathy for weight loss</a> and our <a href="/blog/naturopathy/naturopathy-vs-homeopathy" className="text-primary hover:underline">evidence-based approach</a>.
              </p>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/2020f836-b7f6-4db1-8574-8110e92396a4.png" 
              alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">You May Benefit From Seeing a Naturopath for Weight Loss If You:</h3>
              <ul className="space-y-4">
                {[
                  "Feel like you're doing everything right, but the scale won't move",
                  "Experience fluid retention, stubborn belly fat, or chronic bloating",
                  <>Have <a href="https://my.clevelandclinic.org/health/diseases/8541-thyroid-disease" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">thyroid dysfunction</a>, PCOS, or are in peri/menopause</>,
                  "Struggle with fatigue, mood swings, or low motivation",
                  "Experience emotional eating or blood sugar crashes",
                  "Have a history of chronic fatigue, digestive health issues, or cardiovascular disease"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-6 bg-primary/10 rounded-lg">
                <p className="text-lg font-medium text-foreground">
                  If any of the above sounds like you, working with a qualified naturopath could be the next step toward healthy weight loss.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/2020f836-b7f6-4db1-8574-8110e92396a4.png" 
                alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What's Included In Your Weight Loss Naturopathy Program</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/611cabfc-2300-478c-a789-817b8bac2f8e.png" 
              alt="Naturopath showing patient results on a computer at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Initial Consultation and Full Health Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your first session will go deep into your health history, lifestyle, and underlying health issues. We'll review your family history, stress levels, sleep, hormone levels, and more to get the full picture of what's really going on.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Functional Testing (If Needed)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Depending on your symptoms, we may recommend:</p>
                  <ul className="space-y-2">
                    {[
                      "Hormone testing (cortisol, oestrogen, thyroid hormones)",
                      "Food Intolerance testing",
                      "Blood tests for nutrient status, inflammation, or metabolic imbalances",
                      "Body composition scans to assess muscle mass and fat percentage",
                      "Tests for Heavy Metal load or Digestive Health markers"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Mind-Body Support and Accountability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand the emotional toll of weight issues. You'll receive mindset coaching and emotional support to help address deeper stress hormone imbalances and support your journey toward body confidence and better mental health.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Personalised Weight Loss Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Every naturopathic treatment plan is custom-built to suit your unique needs. It may include:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Herbal remedies to support hormone balance and appetite regulation",
                      "Natural supplements for metabolism, cravings, and energy levels",
                      "A sustainable meal plan designed for fat loss and hormone health",
                      "Stress management and nervous system support",
                      "Guidance for lifestyle changes and regular exercise that won't burn you out"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground">
                    All recommendations are practical, easy to follow, and designed for long-term weight loss.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Ongoing Support & Plan Adjustments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You won't be left on your own. We provide regular follow-ups to review your progress, adapt your plan, and support your results. It's not just a service it's a partnership.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Health Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose NXTLVL Health For Naturopathic Weight Loss?</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/fee05240-1244-4024-9a2b-a3742433d32f.png" 
              alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Years of experience in naturopathic medicine, nutrition, and functional testing",
              "Advanced knowledge of naturopathic principles and natural weight loss protocols",
              "Customised plans built around your real life, not unrealistic programs",
              "Care that goes beyond the scale focusing on your health goals, energy, and confidence",
              "Appointments available in-clinic or via online consultations"
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Conditions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Common Conditions We Work With</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Hormone imbalances (thyroid, insulin, oestrogen, cortisol)",
              "Metabolic Syndrome and insulin resistance",
              "Gut health conditions linked to weight gain",
              "Chronic stress and mental health concerns",
              "Autoimmune conditions that affect metabolic process"
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
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Work With a Weight Loss Naturopath in Brisbane?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                This isn't just about fitting into smaller clothes. It's about <strong>better health, higher energy, and feeling like yourself again</strong>. At NXTLVL Health, we take your health seriously and we're here to help you succeed with real, lasting results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://nxtlvlhealth.com.au/book-now/">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Your Initial Consultation Today
                </a>
              </Button>
              <Button variant="outline" asChild className="text-base sm:text-lg px-6 py-4">
                <a href="tel:0731808853">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Talk to a Brisbane Naturopath Who Gets It
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

export default WeightLoss;
