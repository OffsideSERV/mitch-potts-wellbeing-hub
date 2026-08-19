import React, { useState } from 'react';
import SEO from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ChevronDown, ChevronUp, Activity, Heart, TestTube, Eye, Beaker, Stethoscope, Brain, Leaf } from 'lucide-react';
const GutHealth = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Service Schema for Gut Health Naturopath
  const gutHealthServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://nxtlvlhealth.com.au/what-we-treat/gut-health-naturopath-brisbane#service",
    "name": "Gut Health Naturopath Brisbane",
    "alternateName": ["Digestive Health Naturopath", "IBS Treatment Brisbane", "Gut Healing Brisbane", "Functional Digestive Medicine"],
    "description": "Expert gut health naturopath services in Brisbane specialising in IBS, SIBO, digestive disorders, and gut healing. Personalised natural treatment plans to restore digestive health and overall wellbeing.",
    "url": "https://nxtlvlhealth.com.au/what-we-treat/gut-health-naturopath-brisbane",
    "image": "https://nxtlvlhealth.com.au/lovable-uploads/8c8b4eb3-73e7-4d27-a130-784ffb35035c.png",
    "provider": {
      "@type": "Organization",
      "@id": "https://nxtlvlhealth.com.au/#organization",
      "name": "NXTLVL Health - Naturopath",
      "image": "https://nxtlvlhealth.com.au/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png",
      "priceRange": "$$"
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
    "areaServed": ["Brisbane", "New Farm", "Fortitude Valley", "Newstead", "Teneriffe", "Kangaroo Point", "East Brisbane", "Norman Park", "Bulimba", "Hawthorne", "Morningside", "Ascot", "Hamilton", "Clayfield", "Wilston", "Windsor", "Kelvin Grove", "Paddington", "Red Hill", "Auchenflower", "Toowong", "Queensland"],
    "availableChannel": {
      "@type": "ServiceChannel",
      "name": "Online Naturopathic Consultations",
      "serviceLocation": {
        "@type": "Place",
        "name": "NXTLVL Health"
      },
      "serviceUrl": "https://nxtlvlhealth.com.au/what-we-treat/gut-health-naturopath-brisbane"
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

  // Digestive complaints covered on this hub, each summarised briefly and linked out where a dedicated page exists
  const digestiveComplaints = [{
    title: "BLOATING, WIND AND ABDOMINAL DISTENSION",
    description: "One of the most common reasons Brisbane clients book in. Bloating can come from fermentation of certain carbohydrates, sluggish motility, low stomach acid, or an overgrowth of bacteria higher up the digestive tract. We work out which of these is driving your bloat rather than guessing.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "IRRITABLE BOWEL SYNDROME (IBS)",
    description: "A diagnosis of exclusion covering a cluster of symptoms — cramping, urgency, alternating bowel habits — once more serious causes have been ruled out. It's broad enough that two people with an IBS label can need completely different plans.",
    icon: <TestTube className="h-6 w-6 text-primary" />
  }, {
    title: "SMALL INTESTINAL BACTERIAL OVERGROWTH (SIBO)",
    description: "Excess bacteria colonising the small intestine, producing hydrogen or methane gas that causes bloating, discomfort and altered bowel habits. Breath testing can confirm it, and treatment usually runs in structured phases.",
    icon: <Beaker className="h-6 w-6 text-primary" />
  }, {
    title: "REFLUX AND HEARTBURN",
    description: "Burning, regurgitation or a lump-in-throat feeling after meals. Often assumed to mean 'too much acid', when low stomach acid, delayed emptying, or a stressed nervous system are frequently the real drivers.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "CONSTIPATION",
    description: "Infrequent, hard or incomplete-feeling bowel motions. We look at fibre and fluid intake, motility, thyroid function, pelvic floor coordination and gut flora balance rather than reaching straight for a laxative.",
    icon: <Stethoscope className="h-6 w-6 text-primary" />
  }, {
    title: "DIARRHOEA AND URGENCY",
    description: "Loose, frequent or urgent motions that can stem from infection, bile acid issues, food intolerance, inflammation or an anxious gut-brain connection. Stool testing helps rule pathogens in or out early.",
    icon: <TestTube className="h-6 w-6 text-primary" />
  }, {
    title: "FOOD INTOLERANCES AND SENSITIVITIES",
    description: "Reactions to foods like dairy, gluten, fructose or histamine-rich meals that cause bloating, pain, fatigue or skin flares. We map genuine triggers with structured elimination and testing rather than long-term blanket restriction.",
    icon: <Eye className="h-6 w-6 text-primary" />
  }, {
    title: "COELIAC DISEASE AND NON-COELIAC GLUTEN SENSITIVITY",
    description: "Where gluten is suspected, we help you understand what proper testing looks like, support you if coeliac disease is confirmed, and help those with non-coeliac sensitivity manage symptoms without unnecessary anxiety around food.",
    icon: <Leaf className="h-6 w-6 text-primary" />
  }, {
    title: "GUT-SKIN CONNECTIONS (ACNE, ECZEMA, ROSACEA)",
    description: "Persistent skin flares that haven't resolved with topical treatment alone often trace back to gut inflammation, dysbiosis or intolerances. Calming the gut is frequently the missing piece in long-term skin clarity.",
    icon: <Eye className="h-6 w-6 text-primary" />
  }, {
    title: "GUT-MOOD LINKS (ANXIETY, LOW MOOD, BRAIN FOG)",
    description: "The gut and brain communicate constantly via the vagus nerve, immune signalling and neurotransmitter production. Digestive imbalance can show up as mood and cognition symptoms just as often as bowel symptoms.",
    icon: <Brain className="h-6 w-6 text-primary" />
  }, {
    title: "PARASITES AND DYSBIOSIS",
    description: "An imbalanced or infected microbiome — too few beneficial species, opportunistic overgrowth, or a genuine parasitic infection — can sit quietly behind years of 'unexplained' digestive symptoms. Comprehensive stool mapping brings this into view.",
    icon: <TestTube className="h-6 w-6 text-primary" />
  }];

  const functionalTestingOptions = [{
    title: "COMPREHENSIVE STOOL MAPPING",
    description: "Species-level analysis of your gut flora, inflammatory markers, digestive function and any pathogens or parasites present, using a kit posted to your door.",
    icon: <TestTube className="h-6 w-6 text-primary" />
  }, {
    title: "SIBO BREATH TESTING",
    description: "A home breath test that measures hydrogen and methane gas to identify small intestinal bacterial overgrowth, posted out and completed from your own kitchen table.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "FOOD INTOLERANCE ASSESSMENT",
    description: "Structured elimination and reintroduction, sometimes paired with lab testing, to identify which specific foods are genuinely triggering your symptoms.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "BLOOD PANELS FOR NUTRIENT STATUS AND INFLAMMATION",
    description: "Pathology referrals to check iron, B12, vitamin D, inflammatory markers and coeliac antibodies where relevant, so nothing is missed.",
    icon: <Beaker className="h-6 w-6 text-primary" />
  }, {
    title: "HORMONE AND STRESS MARKERS",
    description: "Where the gut-brain axis looks like a major contributor, hormone testing can reveal how stress physiology is feeding into digestive symptoms.",
    icon: <Brain className="h-6 w-6 text-primary" />
  }];

  const philosophyPoints = [{
    title: "TESTING BEFORE GUESSING",
    description: "Rather than starting with a generic 'gut reset', we use targeted testing to see what's actually happening in your digestive tract before recommending a single herb or supplement.",
    icon: <TestTube className="h-6 w-6 text-primary" />
  }, {
    title: "THE LABEL ISN'T THE PLAN",
    description: "IBS, SIBO, and reflux are starting points for investigation, not treatment protocols in themselves. Two clients with the same diagnosis can walk away with very different plans.",
    icon: <Stethoscope className="h-6 w-6 text-primary" />
  }, {
    title: "WHOLE-BODY, NOT JUST BOWEL SYMPTOMS",
    description: "Skin, mood, energy and hormones are considered alongside bowel habits, because the gut rarely operates in isolation from the rest of your physiology.",
    icon: <Brain className="h-6 w-6 text-primary" />
  }, {
    title: "PRACTICAL, SUSTAINABLE CHANGE",
    description: "Plans are built to fit around your work, travel and social life. Restrictive elimination diets are a short-term investigative tool, not a long-term lifestyle.",
    icon: <Leaf className="h-6 w-6 text-primary" />
  }];

  const healingPlanComponents = [{
    title: "GUT-SPECIFIC HERBAL MEDICINE",
    description: "Targeted herbal remedies chosen for your specific pattern — carminatives, bitters, antimicrobials or motility support — rather than a one-size-fits-all gut tonic.",
    icon: <Leaf className="h-6 w-6 text-primary" />
  }, {
    title: "TARGETED NUTRITIONAL SUPPLEMENTS",
    description: "Probiotics, prebiotics or digestive enzymes matched to what your testing and history actually indicate you need.",
    icon: <TestTube className="h-6 w-6 text-primary" />
  }, {
    title: "FOOD-FIRST NUTRITION STRATEGIES",
    description: "Anti-inflammatory, low-irritant or structured elimination approaches depending on what's driving your symptoms, always with an eye on reintroducing variety.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "NERVOUS SYSTEM AND STRESS SUPPORT",
    description: "Practical tools for calming a wound-up nervous system, since chronic stress can drive digestive symptoms just as much as diet does.",
    icon: <Brain className="h-6 w-6 text-primary" />
  }, {
    title: "REVIEW AND ADJUSTMENT OVER TIME",
    description: "Your plan is revisited and refined at follow-up video consults as your gut responds, rather than being set in stone at the first appointment.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }];

  return <>
      <SEO title="Gut Health Naturopath Brisbane | Every Digestive Complaint We Treat" description="From bloating and IBS to SIBO, reflux and gut-skin links: see the full range of digestive complaints our Brisbane naturopath treats online, and how testing-led care works." canonical="/what-we-treat/gut-health-naturopath-brisbane" keywords="gut health naturopath Brisbane, digestive health Brisbane, IBS treatment Brisbane, gut healing Brisbane, functional medicine Brisbane" serviceSchema={gutHealthServiceSchema} />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Gut Health Naturopath Brisbane: Every Digestive Complaint We Treat, and How
                </h1>
                
                {/* Mobile Image - placed right after headline */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Expert naturopath gut health consultation and functional testing with NXTLVL Health in Brisbane" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/8c8b4eb3-73e7-4d27-a130-784ffb35035c.png" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Gut Health Naturopath</p>
                        <p className="text-xs text-muted-foreground">Digestive Care • Online Australia-Wide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book an Appointment Today!
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
                    <p className="text-sm text-muted-foreground">Digestive Care • Online Australia-Wide</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">One Hub for the Full Range of Digestive Complaints</h2>
          </div>

          {/* Mobile Image positioned after heading */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/97a7e7b6-599f-4426-96b9-2ce7a68c115d.png" alt="Personalised gut naturopath treatment plan for digestive health restoration" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  "Gut health" gets used as a catch-all term, but the complaints that sit under it are genuinely different problems with different mechanisms. Bloating after lunch is not the same as small intestinal bacterial overgrowth. Constipation from slow motility is not the same as constipation from a coordination issue in the pelvic floor. This page is the map: a plain-English rundown of every digestive complaint Mitchell Potts works with as a Brisbane naturopath, seeing clients Australia-wide by video consult.
                </p>
                <p>
                  If you already know exactly what you're dealing with, use the "where to go next" grid further down to jump to a page written specifically for IBS, SIBO or working with Mitch directly. If you're not sure yet, keep reading — that's exactly what this hub is for.
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

      {/* Digestive Complaints Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Digestive Complaints We See Most Often</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Each of these is summarised briefly below. Where we've written a dedicated deep-dive, you'll find the link in the description or in the grid further down the page.
              </p>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {digestiveComplaints.map((complaint, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => toggleDropdown(index)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {complaint.icon}
                      <CardTitle className="text-lg">{complaint.title}</CardTitle>
                    </div>
                    {openDropdown === index ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardHeader>
                {openDropdown === index && <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {complaint.description}
                    </CardDescription>
                  </CardContent>}
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              For a much more detailed breakdown of IBS diagnosis and treatment specifically, see our dedicated <a href="/what-we-treat/ibs-brisbane" className="text-primary hover:underline">IBS in Brisbane</a> and <a href="/what-we-treat/sibo-naturopath" className="text-primary hover:underline">SIBO naturopath</a> pages.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How Mitch Approaches Digestive Complaints, Generally</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Across all of the complaints above, the same underlying approach applies. It's less a "programme" and more a way of working through your case methodically.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <img src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" alt="Advanced functional digestive testing and SIBO breath tests for accurate diagnosis" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {philosophyPoints.map((point, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => toggleDropdown(index + 20)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {point.icon}
                      <CardTitle className="text-lg">{point.title}</CardTitle>
                    </div>
                    {openDropdown === index + 20 ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardHeader>
                {openDropdown === index + 20 && <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {point.description}
                    </CardDescription>
                  </CardContent>}
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Curious what this looks like week to week for IBS specifically? Our <a href="/what-we-treat/ibs-clinic" className="text-primary hover:underline">structured IBS programme</a> walks through it stage by stage. For everything else, read on for how testing generally fits into your plan.
            </p>
          </div>
        </div>
      </section>

      {/* How Testing-Led Care Works Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How Testing-Led Care Works, From Booking to Results</h2>
          </div>

          <div className="mb-12">
            <img src="/lovable-uploads/507d386f-e7d8-4e14-a144-56b40f6d528f.png" alt="Step-by-step gut healing process with herbal medicine and natural treatment protocols" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Video Consultation</h3>
              <p className="text-muted-foreground">
                An hour-long video consult from wherever you are in Australia, unpacking your symptoms, history, diet and lifestyle in real detail — no waiting rooms involved.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Testing Kits Posted Out</h3>
              <p className="text-muted-foreground">
                When testing is warranted, kits for stool analysis, SIBO breath testing or similar are posted straight to your door, with clear instructions for completing them at home.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Results Interpreted Together</h3>
              <p className="text-muted-foreground">
                Once results are in, we go through them together on a follow-up video call, translating the data into what it actually means for your specific complaint.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">A Plan Built Around You</h3>
              <p className="text-muted-foreground">
                Your plan is reviewed and adjusted at each check-in as your gut responds, rather than handed over once and left to run on autopilot.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">Testing Options We Draw On:</h3>
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
            <h3 className="text-2xl font-bold mb-8">A Personalised Plan May Then Include:</h3>
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

      {/* Where to Go Next Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Where to Go Next</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              This page is deliberately broad. If one complaint is your main concern, these pages go much deeper on that specific topic:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <a href="/what-we-treat/ibs-brisbane" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-primary">Understanding an IBS diagnosis</h3>
              <p className="text-muted-foreground">What an IBS label actually means, how it's diagnosed, and the questions worth asking before you accept it as the final answer.</p>
            </a>
            <a href="/what-we-treat/ibs-naturopath" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-primary">The naturopathic method for treating IBS</h3>
              <p className="text-muted-foreground">The specific reasoning and tools naturopathy brings to IBS treatment, beyond generic dietary advice.</p>
            </a>
            <a href="/what-we-treat/ibs-clinic" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-primary">A structured, week-by-week IBS programme</h3>
              <p className="text-muted-foreground">See exactly what a staged IBS programme with Mitch looks like from week one through to long-term maintenance.</p>
            </a>
            <a href="/what-we-treat/sibo-naturopath" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-primary">SIBO testing and treatment in detail</h3>
              <p className="text-muted-foreground">Breath testing, treatment phases and relapse prevention for small intestinal bacterial overgrowth specifically.</p>
            </a>
            <a href="/what-we-treat/gut-health-specialist" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow md:col-span-2">
              <h3 className="text-lg font-bold mb-2 text-primary">Who Mitch is, and who this suits</h3>
              <p className="text-muted-foreground">Background, approach and the kinds of clients who tend to get the most out of working with Mitch directly.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Gut-Brain and Gut-Skin Snapshot Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Skin and Mood Come Up in Gut Consults</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Up to <a href="https://www.co-biome.com/education/patient/the-important-role-of-serotonin-in-your-gut/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">90% of the body's serotonin is produced in the gut</a>, and the gut lining plays a direct role in systemic inflammation that can surface as skin flares. That's why a gut consult often ends up touching on sleep, mood and skin, even when bowel symptoms were the original reason for booking.
              </p>
              <p>
                None of this means every skin or mood issue is "just the gut" — but for many clients, addressing digestive imbalance is the piece that finally moves the needle after other approaches have stalled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Mitch Section */}
      <section className="py-20 px-4">
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
                <p className="text-base">He's worked with thousands of clients across Brisbane and Australia-wide via video consults</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Whatever combination of digestive complaints brought you here, Mitch helps you get your life back—naturally.
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
                Tired of living with <a href="/what-we-treat/ibs-brisbane" className="text-primary hover:underline">IBS</a>, <a href="/what-we-treat/sibo-naturopath" className="text-primary hover:underline">SIBO</a>, bloating, or a digestive complaint that hasn't been given a proper name yet? Start with an hour-long video consult and we'll work out what's actually going on. Or read more about <a href="/what-we-treat/gut-health-specialist" className="text-primary hover:underline">who Mitch is and who he suits</a> before you book.
              </p>
              <p>
                Every consult runs via video, testing kits are posted to your door, and clients join us from right across Australia — not just Brisbane.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="https://nxtlvlhealth.com.au/book-now/">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book an Appointment Today!
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
