import React, { useState } from 'react';
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, ChevronDown, ChevronUp, Zap, Activity, Heart, Shield, Target, CheckCircle } from 'lucide-react';
const MLSLaser = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Service Schema for MLS Laser Therapy
  const mlsLaserServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://nxtlvlhealth.com.au/services/mls-laser-therapy-treatment-brisbane#service",
    "name": "MLS Laser Therapy Treatment",
    "alternateName": ["MLS Laser Therapy", "Multiwave Locked System Laser", "Class IV Laser Therapy"],
    "description": "Advanced MLS Laser Therapy treatment in Brisbane for pain relief, injury recovery, and accelerated healing. Non-invasive laser treatment for chronic pain, sports injuries, arthritis, and inflammatory conditions.",
    "url": "https://nxtlvlhealth.com.au/services/mls-laser-therapy-treatment-brisbane",
    "image": "https://nxtlvlhealth.com.au/lovable-uploads/8f5feae9-391d-4644-af47-61593b7bc840.png",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://nxtlvlhealth.com.au/#organization",
      "name": "NXTLVL Health - Naturopath",
      "image": "https://nxtlvlhealth.com.au/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png",
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
    "serviceType": "Medical Treatment",
    "category": "Laser Therapy",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "MLS Laser Therapy Services",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MLS Laser Therapy Session",
          "description": "Individual MLS laser therapy treatment session for pain relief and healing acceleration"
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
      "name": "In-Person Treatment",
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
      "serviceUrl": "https://nxtlvlhealth.com.au/services/mls-laser-therapy-treatment-brisbane"
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
        "name": "MLS Laser Therapy Appointment"
      }
    }]
  };
  const conditions = [{
    title: "SPORTS INJURIES",
    description: "Sprains, strains, and overuse injuries recover faster with targeted laser therapy that reaches deep into affected tissues.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "JOINT PAIN",
    description: "Whether it's knees, shoulders, elbows, or hips, MLS laser helps reduce inflammation and improve mobility in arthritic joints.",
    icon: <Target className="h-6 w-6 text-primary" />
  }, {
    title: "TENDINOPATHY AND ARTICULAR DISEASES",
    description: "Chronic tendon issues and joint diseases respond well to the dual-wavelength approach of MLS therapy.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "ARTHRITIS & ARTHRITIC JOINT PAIN",
    description: <>
          Reduce inflammation and pain in arthritic joints while improving function and quality of life. {" "}
          <a href="https://www.healwithlaser.com.au/blog/managing-arthritis-pain-with-non-invasive-mls-laser-therapy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Learn more
          </a>
        </>,
    icon: <Shield className="h-6 w-6 text-primary" />
  }, {
    title: "CHRONIC CONDITIONS",
    description: "Including Bursitis, Chronic Fatigue Syndrome, and other long-standing inflammatory conditions.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "POST-SURGERY RECOVERY",
    description: "Speed up healing after surgery and reduce scar tissue formation with targeted laser therapy.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "NERVE PAIN & INJURIES",
    description: "Including neuropathic pain, nerve injuries, and conditions affecting nerve function.",
    icon: <Zap className="h-6 w-6 text-primary" />
  }, {
    title: "PLANTAR FASCIITIS & ACHILLES ISSUES",
    description: "Targeted treatment for foot and ankle conditions that often resist traditional therapy approaches.",
    icon: <Target className="h-6 w-6 text-primary" />
  }];
  const benefits = [{
    title: "PAIN RELIEF FROM THE VERY FIRST SESSION",
    description: "Many clients experience noticeable pain reduction after their initial treatment session.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />
  }, {
    title: "BETTER JOINT FUNCTION OVER TIME",
    description: "Improved mobility and range of motion as inflammation reduces and healing progresses.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "FASTER HEALING POST-INJURY OR SURGERY",
    description: "Accelerated tissue repair and recovery through enhanced cellular activity and blood flow.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "REDUCED SWELLING AND STIFFNESS",
    description: "Noticeable improvements in inflammation and joint mobility throughout the treatment course.",
    icon: <Shield className="h-6 w-6 text-primary" />
  }, {
    title: "IMPROVED QUALITY OF LIFE",
    description: "Long-lasting relief for chronic pain sufferers without the side effects of invasive treatments.",
    icon: <Target className="h-6 w-6 text-primary" />
  }];
  const faqs = [{
    question: "Is MLS Laser Therapy safe?",
    answer: "Yes. It's FDA-cleared and backed by rigorous clinical studies. It uses non-ionising light and has no known side effects."
  }, {
    question: "Does the treatment hurt?",
    answer: "Not at all. It's completely non-invasive and most clients describe it as relaxing or neutral."
  }, {
    question: "How many treatments will I need?",
    answer: "Usually 6–10 sessions depending on your specific condition. Progress is reviewed as we go."
  }, {
    question: "Can MLS be combined with other treatments?",
    answer: "Yes. We often combine it with naturopathic care, natural supplements, and functional diagnostics."
  }, {
    question: "Is MLS Laser right for me?",
    answer: "If you're experiencing joint pain, nerve injuries, or recovery issues, it's likely to help. We'll assess during your initial consultation."
  }];
  return <>
      <SEO title="#1 MLS Laser Therapy Treatment In Brisbane | NXTLVL Health" description="Are you struggling with pains, injury, or slow healing? MLS Laser treatment at NXTLVL Health will help you heal faster, move better, and feel like you again." canonical="/services/mls-laser-therapy-treatment-brisbane" keywords="MLS laser therapy Brisbane, laser therapy treatment, pain relief Brisbane, injury recovery, sports injury treatment" serviceSchema={mlsLaserServiceSchema} />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  MLS Laser Therapy <span className="text-primary">Brisbane</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">Feel Better. Heal Faster. The Natural Way</h2>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img src="/lovable-uploads/8f5feae9-391d-4644-af47-61593b7bc840.png" alt="Naturopath doing MLS laser therapy treatment with patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-96 object-cover" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Zap className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">MLS Laser Therapy</p>
                        <p className="text-xs text-muted-foreground">Pain Relief • Faster Healing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight" asChild>
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-center">Book MLS Laser Therapy Today</span>
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
            
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="/lovable-uploads/8f5feae9-391d-4644-af47-61593b7bc840.png" alt="Naturopath doing MLS laser therapy treatment with patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-96 object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Zap className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">MLS Laser Therapy</p>
                    <p className="text-sm text-muted-foreground">Pain Relief • Faster Healing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cutting-Edge MLS Laser Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Cutting-Edge MLS Laser Therapy in New Farm</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/41390b79-f1ea-489a-b170-dd7156cf02ee.png" alt="Woman getting MLS laser therapy treatment for neck pain at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-64 object-cover mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                 <p>
                   At NXTLVL Health in Brisbane, we use <strong>MLS Laser Therapy</strong> to help your body heal on its own, safely, quickly, and naturally. Whether you're dealing with <strong>chronic pain</strong>, <strong>sports injuries</strong>, or <strong>joint stiffness</strong>, this revolutionary treatment uses <strong>light energy</strong> to reach deep into your body and speed up the healing process at a <strong>cellular level</strong>. Combined with our <a href="/services/personal-trainer-newstead" className="text-primary hover:underline">specialized personal training</a> and <a href="/functional-medicine" className="text-primary hover:underline">functional medicine approach</a>, we provide comprehensive healing solutions.
                 </p>
                <p>
                  Unlike traditional therapies, the <strong>MLS Laser</strong> combines two precise <strong>laser wavelengths</strong> to reduce your pain and inflammation simultaneously. The result? Better mobility, faster recovery, and long-lasting relief from pain, all with zero downtime.
                </p>
                 <p>
                   Whether it's your back, shoulders, knees, or ankles—if it hurts, we've got you covered. Our comprehensive approach includes <a href="/services/live-blood-analysis-brisbane" className="text-primary hover:underline">advanced diagnostic tools</a> and <a href="/what-we-treat/weight-loss-naturopath-brisbane" className="text-primary hover:underline">holistic weight management</a> to support your healing journey.
                 </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="/lovable-uploads/41390b79-f1ea-489a-b170-dd7156cf02ee.png" alt="Woman getting MLS laser therapy treatment for neck pain at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What is MLS Laser Therapy Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What is MLS Laser Therapy?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                 <strong>MLS</strong> stands for <strong>Multiwave Locked System</strong>, a <strong>Class IV laser</strong> technology designed to offer <strong>deep tissue penetration</strong> without causing any thermal damage. This advanced system synchronises two <strong>laser beams</strong>: one continuous at <strong>808nm</strong> for inflammation, and one pulsed at 905nm to address pain. Together, they create a powerful <strong>synergistic effect</strong> that's scientifically proven to speed up your body's healing.
              </p>
              <p>
                It's been widely researched across tons of <strong>clinical studies</strong>, showing consistent benefits for a wide range of conditions, including:
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/51106bb9-7ee7-49df-9e6f-6507f621c37b.png" alt="Naturopath doing MLS laser treatment for female patient at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-64 object-cover" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-4xl mx-auto mb-8">
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span><strong>Musculoskeletal pain</strong></span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span><strong>Tendon injuries</strong></span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span><strong>Ligament injuries</strong></span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span><strong>Nerve damage</strong></span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span><strong>Soft tissue repair</strong></span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span><strong>Plantar Fasciitis</strong></span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span><strong>Neuropathic pain</strong></span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              The <strong>laser light</strong> reaches affected areas without any discomfort, working on your body's <strong>natural healing processes</strong> and promoting <strong>tissue regeneration</strong> at the root.
            </p>
          </div>
        </div>
      </section>

      {/* How MLS Laser Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How MLS Laser Works Inside the Body</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                When the <strong>MLS laser beam</strong> is applied to a targeted <strong>treatment area</strong>, the <strong>light energy</strong> is absorbed by the cells and tissues of the body, sparking an increase in <strong>cellular activity</strong>. It boosts ATP production (your cell's energy currency), improves <strong>blood circulation</strong>, stimulates <strong>lymphatic drainage</strong>, and helps reduce inflammation at the source.
              </p>
              <p>
                <strong>MLS laser</strong> isn't just about easing your pain—it's about really healing your body. Clients often report:
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/4bea3af7-ceb4-4aa3-b780-303ccd82e237.png" alt="MLS laser treatment equipment and therapy session at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-64 object-cover" />
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    {benefit.icon}
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              All of this, without the side effects of <strong>invasive treatment</strong>, medications, or any downtime.
            </p>
          </div>
        </div>
      </section>

      {/* What MLS Laser Helps With Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What MLS Laser Therapy Helps With</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              At NXTLVL Health, we use <strong>MLS Laser Therapy treatment</strong> to support a variety of conditions:
            </p>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/97e4214e-6a74-4542-bfa2-19292540f721.png" alt="Naturopath showing patient MLS laser therapy results on computer at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-64 object-cover" />
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {conditions.map((condition, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => toggleDropdown(index)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {condition.icon}
                      <CardTitle className="text-lg">{condition.title}</CardTitle>
                    </div>
                    {openDropdown === index ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardHeader>
                {openDropdown === index && <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {condition.description}
                    </CardDescription>
                  </CardContent>}
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              The treatment is pain-free, easy, and only takes a <strong>short period of time</strong>. It's safe for most patients and can be adapted to suit your <strong>specific condition</strong> and treatment goals.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect During Your MLS Laser Therapy Session</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Each session at NXTLVL Health is performed by <strong>Mitchell Potts</strong>, an experienced <strong>Naturopath</strong> with a strong clinical background in <strong>physical health</strong>, <strong>natural medicine</strong>, and rehabilitative care. Your visit will begin with a quick assessment and a tailored <strong>treatment plan</strong> designed around your symptoms, medical history, and affected tissues.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/052147da-fc73-4f16-965c-adcf6069e31e.png" alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-64 object-cover" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <p className="text-base font-medium">No pain or discomfort</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <p className="text-base font-medium">No known side effects</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <p className="text-base font-medium">Noticeable change in 2–3 sessions for many clients</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              You'll lie comfortably as the <strong>laser therapy device</strong> is applied to the treatment area. Most clients report feeling gentle warmth or nothing at all. The <strong>laser energy</strong> gets to work quickly—helping to reduce inflammation, improve circulation, and trigger your body's own recovery mechanisms.
            </p>
            <p>
              Depending on your goals and the severity of your condition, we usually recommend a short series of treatments spread across a few weeks. The first few sessions often bring significant improvements, especially for <strong>musculoskeletal conditions</strong> and <strong>sports-related injuries</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Clients Choose NXTLVL for MLS Laser Treatment</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                At NXTLVL Health in New Farm, our approach goes beyond just treating symptoms—we get to the <strong>root cause</strong> of your pain. By integrating <strong>MLS laser therapy</strong> with <strong>functional medicine</strong>, <strong>clinical nutrition</strong>, and <strong>movement coaching</strong>, we help your body heal from the inside out.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/94a596d0-3d49-4629-85b5-0293916509a6.png" alt="Woman talking to naturopath in Brisbane at NXTLVL Health clinic" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-64 object-cover" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base"><strong>Advanced MLS technology</strong> backed by science and extensive research</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base"><strong>Comprehensive care:</strong> addressing chronic conditions, movement, lifestyle, and nutrition together</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">No rushed appointments—we take time to listen and tailor your plan</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">Seamless integration with <strong>Natural Therapies</strong> like Herbal Medicine, Nutrition, and Physical Therapy</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg md:col-span-2">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">Mitch's <strong>extensive experience</strong> in helping clients recover from musculoskeletal disorders and inflammatory pain</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              For those with complex or long-standing <strong>health conditions</strong>, <strong>MLS Laser Therapy</strong> offers a real, <strong>effective treatment</strong> option—no drugs, no surgery, just results.
            </p>
          </div>
        </div>
      </section>

      {/* More Than Just Pain Relief Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">More Than Just Pain Relief</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              The <strong>therapeutic effects</strong> of <strong>MLS Laser</strong> extend beyond pain. It also:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">Helps resolve <strong>chronic inflammation</strong></p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">Improves <strong>blood flow</strong> and vascular health</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">Reduces <strong>free radical damage</strong> and oxidative stress</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">Supports faster <strong>soft tissue repair</strong></p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">Boosts <strong>immune response</strong> in affected areas</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">Improves <strong>lymphatic drainage</strong>, aiding detox and recovery</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              This makes it ideal for anyone seeking <strong>faster recovery</strong>, <strong>chronic pain relief</strong>, or just a better path to <strong>good health</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">FAQs – MLS Laser Therapy</h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => toggleDropdown(index + 20)}>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                    {openDropdown === index + 20 ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardHeader>
                {openDropdown === index + 20 && <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {faq.answer}
                    </CardDescription>
                  </CardContent>}
              </Card>)}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Book Your MLS Laser Therapy in Brisbane?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              If you're tired of pain holding you back—or want to explore a modern, science-backed, drug-free option—we're here to help.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Whether it's your first session or you're adding MLS to an existing plan, reach out today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3" asChild>
                <a href="https://nxtlvlhealth.com.au/book-now/">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Appointment with Mitch Now
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3" asChild>
                <a href="tel:0731808853">
                  <Phone className="mr-2 h-4 w-4" />
                  Call to Speak with Mitch Directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>;
};
export default MLSLaser;