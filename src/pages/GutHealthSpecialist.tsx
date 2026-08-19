import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Target, Leaf, Shield, Microscope } from "lucide-react";
const GutHealthSpecialist = () => {
  // Service Schema for Gut Health Specialist
  const gutHealthSpecialistSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://nxtlvlhealth.com.au/what-we-treat/gut-health-specialist#service",
    "name": "Gut Health Specialist Brisbane",
    "alternateName": ["Digestive Health Specialist", "Microbiome Specialist", "SIBO Specialist Brisbane", "Gut Health Doctor"],
    "description": "Meet Mitch Potts, the Brisbane gut health specialist behind NXTLVL Health. What specialisation actually changes in practice, his background and training, and an honest guide to who this style of care suits.",
    "url": "https://nxtlvlhealth.com.au/what-we-treat/gut-health-specialist",
    "image": "https://nxtlvlhealth.com.au/lovable-uploads/85472ace-cbc5-4079-9a2e-27bb7dcce090.png",
    "provider": {
      "@type": "Organization",
      "@id": "https://nxtlvlhealth.com.au/#organization",
      "name": "NXTLVL Health - Naturopath",
      "image": "https://nxtlvlhealth.com.au/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png",
      "priceRange": "$$"
    },
    "serviceType": "Naturopathic Medicine",
    "category": "Digestive Health Specialist",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gut Health Specialist Services",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Specialist Digestive Case Review",
          "description": "In-depth video consultation with a practitioner who works with digestive cases exclusively, reviewing history, prior testing and treatment attempts"
        },
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Test Interpretation by a Specialist",
          "description": "Reading stool, breath and functional test results in the context of hundreds of similar digestive cases, rather than as a one-off"
        },
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ongoing Specialist Support",
          "description": "Video-based follow-up and dose adjustment from a practitioner who sees digestive presentations every day"
        },
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }]
    },
    "areaServed": ["Brisbane", "New Farm", "Fortitude Valley", "Newstead", "Teneriffe", "Kangaroo Point", "East Brisbane", "Norman Park", "Bulimba", "Hawthorne", "Morningside", "Ascot", "Hamilton", "Clayfield", "Wilston", "Windsor", "Kelvin Grove", "Paddington", "Red Hill", "Auchenflower", "Toowong", "Queensland"],
    "availableChannel": {
      "@type": "ServiceChannel",
      "name": "Online Gut Health Consultations",
      "serviceLocation": {
        "@type": "Place",
        "name": "NXTLVL Health"
      },
      "serviceUrl": "https://nxtlvlhealth.com.au/what-we-treat/gut-health-specialist"
    },
    "serviceOutput": ["Specialist Digestive Assessment", "Test Interpretation", "Treatment Personalisation", "Referral Guidance", "Ongoing Case Management"],
    "audience": {
      "@type": "PeopleAudience",
      "audienceType": "People weighing up a generalist versus a gut health specialist for digestive symptoms"
    },
    "potentialAction": [{
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://calendly.com/nxtlvlhealth-info/15-min-consult",
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
      },
      "result": {
        "@type": "Reservation",
        "name": "Gut Health Specialist Consultation"
      }
    }]
  };
  return <>
      <SEO title="Working With a Gut Health Specialist | Mitch Potts, NXTLVL Health" description="What changes when you see a gut health specialist instead of a generalist, who Mitch Potts is, and an honest look at who this approach suits online, Australia-wide." canonical="/what-we-treat/gut-health-specialist" keywords="gut health specialist Brisbane, digestive health Brisbane, gut health doctor, microbiome specialist, SIBO specialist Brisbane" serviceSchema={gutHealthSpecialistSchema} />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Working With a Gut Health Specialist: <span className="text-primary">Who Mitch Is, and Who He Is Not For</span>
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                   <img alt="Professional gut health specialist consultation and comprehensive digestive health assessment at NXTLVL Health Brisbane" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/85472ace-cbc5-4079-9a2e-27bb7dcce090.png" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Mitch Potts</p>
                        <p className="text-xs text-muted-foreground">Gut Health Specialist • Online, Australia-Wide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-lg text-muted-foreground leading-relaxed">
                <p>
                  Not every practitioner who "helps with gut issues" works with digestive cases all day, every day. This page explains what actually changes when you work with a specialist rather than a generalist, who Mitch Potts is and how he trained, and — just as importantly — who this kind of care is not right for.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight">
                  <a href="/#free-consult">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-center">Book a Free 15-Min Consult</span>
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
               <img alt="Expert gut health specialist providing personalized digestive care and natural treatment at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/85472ace-cbc5-4079-9a2e-27bb7dcce090.png" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Mitch Potts</p>
                    <p className="text-sm text-muted-foreground">Gut Health Specialist • Online, Australia-Wide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generalist vs Specialist Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Generalist Care vs a Practitioner Who Only Sees Digestive Cases</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
             <img src="/lovable-uploads/09a6a7fe-ea21-4642-87aa-dad3d0f73026.png" alt="Patient discussing digestive symptoms and bloating concerns with naturopath" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>A generalist practitioner sees a bit of everything — skin, hormones, sleep, weight, digestion — and treats each case with a broad toolkit. There's nothing wrong with that model, and for plenty of health concerns it's exactly what's needed.</p>
                <p>
                  A gut health specialist works differently. Mitch's caseload is weighted heavily towards digestive presentations, so the volume of cases he sees informs how he approaches each new one. That includes people already carrying an <a href="/what-we-treat/ibs-brisbane" className="text-primary hover:underline">IBS diagnosis from Brisbane GPs and specialists</a>, people who've been through the standard <a href="/what-we-treat/ibs-naturopath" className="text-primary hover:underline">IBS naturopath</a> approach without lasting change, and people investigating <a href="/what-we-treat/sibo-naturopath" className="text-primary hover:underline">SIBO</a> after a positive breath test.
                </p>
                <p>
                  For the detail on how those specific conditions are actually assessed and treated week by week, that lives on the condition pages linked above and on the <a href="/what-we-treat/ibs-clinic" className="text-primary hover:underline">IBS clinic</a> page. This page is about the practitioner, not the protocol.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
               <img src="/lovable-uploads/09a6a7fe-ea21-4642-87aa-dad3d0f73026.png" alt="Comprehensive consultation for IBS, SIBO and digestive disorders with NXTLVL Health in Brisbane" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* What Specialisation Actually Changes Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Specialisation Actually Changes in Practice</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
             <img src="/lovable-uploads/bed9e40f-2f68-4ae1-8b4a-a0b9a84accbd.png" alt="Advanced microbiome testing and functional digestive analysis for root cause identification" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              "Specialist" isn't just a title — it changes four concrete things about how a case gets handled.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Brain className="h-6 w-6" />
                  Pattern Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Seeing digestive cases repeatedly means unusual symptom combinations stop looking random. A cluster of bloating, skin flares and food reactions that might puzzle a generalist is often a familiar pattern to someone who works with gut cases daily.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Microscope className="h-6 w-6" />
                  Test Interpretation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Stool and breath test reports are dense. Knowing which markers matter for your specific symptom picture, and which are noise, comes from having interpreted a large number of them in context — not from reading the report in isolation.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Dosing and Sequencing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Herbs and supplements that are right in theory can still be wrong in order or dose for a sensitive gut. A specialist has typically adjusted these variables across many similar cases and has a clearer sense of what sequence tends to be tolerated.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  Knowing When to Refer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Part of doing this well is recognising the presentations that sit outside naturopathic scope — red-flag symptoms, unexplained weight loss, rectal bleeding, or a picture that needs a GP or gastroenterologist first. That's covered honestly further down this page.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Mitch Is Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who Mitch Is</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
             <img src="/lovable-uploads/7576859d-ce00-418a-abd7-2ba07fdeb7dc.png" alt="Digestive health evaluation and symptom assessment at NXTLVL Health Brisbane" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              Mitch Potts is a Brisbane-based naturopath with a Bachelor of Health Science (Naturopathy). Like a good number of his clients, he first came to natural medicine after his own health issues weren't resolved through the standard route — that experience shaped how he now approaches digestive cases himself.
            </p>
            <p>
              He has completed advanced screening training in metagenomic stool testing and broader functional testing, alongside specific advanced training in digestive disorders. In practice, that means his consultations lean on test data rather than guesswork wherever possible, and his caseload is built around gut, IBS and SIBO presentations specifically, rather than being one interest among many.
            </p>
            <p>
              All consultations run as hour-long video calls, and any testing kits are posted straight to your door, so location isn't a barrier — Mitch works with clients across Brisbane suburbs like New Farm, Bulimba, Paddington and Ascot, and with people right across Australia.
            </p>
          </div>
        </div>
      </section>

      {/* What Working With Mitch Is Actually Like Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Working With Mitch Is Actually Like</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
             <img src="/lovable-uploads/778efa12-2a50-4463-9137-b9811fb860b1.png" alt="Comprehensive holistic approach to digestive wellness and immune system support" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-12">
            <p>
              The first video consultation is a proper look at your case — your history, what's already been tried, and any test results you can bring with you. Mitch takes the time to hear the full story rather than triaging symptoms in a few minutes, because getting the case history right is what makes pattern recognition possible in the first place.
            </p>
            <p>
              From there, if testing is warranted, kits are posted to you and results are talked through in plain language, not left as a PDF you have to interpret alone. Follow-up consults are where doses get adjusted and the plan gets refined based on how you're actually responding — this is the ongoing, ask-questions-anytime relationship, not a one-off consult and a generic handout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[{
              icon: Users,
              title: "You're heard properly"
            }, {
              icon: Microscope,
              title: "Testing guides decisions"
            }, {
              icon: Target,
              title: "Doses are adjusted, not fixed"
            }, {
              icon: Shield,
              title: "You're told if something's outside scope"
            }, {
              icon: Heart,
              title: "Support continues between consults"
            }].map((item, index) => <Card key={index}>
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Who This Is a Good Fit For Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who This Is a Good Fit For</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {["You've had digestive symptoms investigated by a GP or specialist already and want a deeper, ongoing look at contributing factors", "You've tried generic elimination diets or one-size-fits-all supplement stacks without lasting change", "You want test results explained and acted on, not just handed over", "You're comfortable with video consultations and posted testing kits rather than an in-person clinic", "You're prepared to work through a process over weeks, not expecting a single quick fix", "You have an existing IBS or SIBO diagnosis and want a practitioner focused specifically on digestive cases"].map((fit, index) => <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{fit}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Who This Is Not For Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who This Is Not a Good Fit For — See a GP or Gastroenterologist First</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Being honest about scope is part of working with a specialist properly. Mitch will always say so if your case needs medical assessment before or alongside naturopathic care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {["You have rectal bleeding, unexplained weight loss, persistent vomiting or difficulty swallowing — see a GP promptly", "You have new or worsening symptoms that haven't been assessed by a doctor at all", "You need a formal diagnosis such as colonoscopy, endoscopy or imaging — that requires a GP referral to a gastroenterologist", "You're currently under specialist care for a diagnosed condition and haven't discussed adding naturopathic support with that specialist", "You're looking for an emergency or same-day medical response — this is a scheduled video consultation service, not urgent care", "You want a practitioner who sees you in person at a clinic — all consultations here are conducted online"].map((notFit, index) => <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">{notFit}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              If any of the above applies, a GP or gastroenterologist should be your first port of call. Naturopathic care can often sit alongside medical treatment once anything serious has been ruled out or is being actively managed — it isn't a replacement for it.
            </p>
          </div>
        </div>
      </section>

      {/* Training and Approach Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Mitch's Training and Philosophy</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
             <img src="/lovable-uploads/108aecf4-9e98-4025-803d-5e64dbd22b5b.png" alt="Mitchell Potts, experienced naturopath and microbiome specialist at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Microscope className="h-6 w-6" />
                  Bachelor of Health Science (Naturopathy)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mitch's naturopathy degree forms the clinical foundation for how he assesses and manages digestive cases.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Advanced Screening Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specific training in metagenomic stool testing and functional testing underpins how results are interpreted for each client.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Leaf className="h-6 w-6" />
                  Advanced Digestive Disorder Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Additional advanced training focused specifically on digestive disorders sits behind the day-to-day case work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Heart className="h-6 w-6" />
                  A Philosophy Built on Listening First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mitch's approach is to look past the symptom list to what's actually driving it, and to build a plan around your life rather than a generic template.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Explore the Condition Pages Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Want the Detail on a Specific Condition?</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              This page is about the practitioner and the process. For the condition-specific detail, testing and treatment steps, see:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[{
              text: "IBS support for Brisbane clients — symptoms, testing and what to expect",
              link: "/what-we-treat/ibs-brisbane"
            }, {
              text: "The IBS naturopath approach in full — diet, herbs and gut repair",
              link: "/what-we-treat/ibs-naturopath"
            }, {
              text: "The IBS clinic programme — structured, ongoing digestive care",
              link: "/what-we-treat/ibs-clinic"
            }, {
              text: "SIBO naturopath page — breath testing, treatment and relapse prevention",
              link: "/what-we-treat/sibo-naturopath"
            }, {
              text: "Back to the gut health hub for an overview of all digestive services",
              link: "/what-we-treat/gut-health-naturopath-brisbane"
            }].map((condition, index) => <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      <a href={condition.link} className="text-primary hover:underline">{condition.text}</a>
                    </span>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-8">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="/#free-consult">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Talk to a Gut Health Specialist?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                If your situation matches the "good fit" list above, a free 15-minute chat is the easiest way to find out whether working with Mitch makes sense for you.
              </p>
              <p>
                And if it doesn't — if your case needs a GP or gastroenterologist first — Mitch will tell you that too, rather than take you on regardless.
              </p>
              <p className="font-semibold text-foreground">
                Mitch is the gut health specialist Brisbane locals turn to for ongoing, test-informed digestive care, delivered entirely online, Australia-wide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="/book-now">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Your Consultation Today
                </a>
              </Button>
              
            </div>
          </div>
        </div>
      </section>
      </div>
    </>;
};
export default GutHealthSpecialist;
