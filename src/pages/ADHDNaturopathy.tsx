import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Brain, Activity, Shield } from "lucide-react";
const ADHDNaturopathy = () => {
  return <>
      <SEO title="Top ADHD Naturopath in Brisbane | Book a Free 15-Min Consult" description="Mitch from NXTLVL Health is here to help take the stress and confusion out of ADHD. Book a free consult and start getting the answers you've been looking for!" canonical="/what-we-treat/adhd-naturopath" keywords="ADHD naturopath Brisbane, ADHD treatment, natural ADHD support, holistic ADHD treatment, ADHD specialist" serviceSchema={{
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://nxtlvlhealth.com.au/what-we-treat/adhd-naturopath#service",
      "name": "ADHD Naturopath Brisbane",
      "description": "Holistic naturopathic treatment for ADHD in children and adults. Our evidence-based approach addresses root causes through nutrition, herbal medicine, functional testing, and nervous system support to improve focus, behaviour, and quality of life.",
      "provider": {
        "@type": "Organization",
        "@id": "https://nxtlvlhealth.com.au/#organization"
      },
      "areaServed": [{
        "@type": "City",
        "name": "Brisbane"
      }, {
        "@type": "City",
        "name": "New Farm"
      }, {
        "@type": "City",
        "name": "Clayfield"
      }, {
        "@type": "City",
        "name": "Hamilton"
      }],
      "category": "Naturopathic Medicine",
      "serviceType": "ADHD and Attention Disorder Support",
      "offers": [{
        "@type": "Offer",
        "name": "Free 15-Minute ADHD Consultation",
        "description": "Complimentary consultation to discuss your ADHD concerns, understand our approach, and determine if naturopathic treatment is right for you or your child.",
        "price": "0",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }, {
        "@type": "Offer",
        "name": "Initial ADHD Naturopath Consultation",
        "description": "Comprehensive 75-minute consultation including detailed health history, ADHD symptom assessment, and personalised treatment planning for natural ADHD support.",
        "price": "210",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }, {
        "@type": "Offer",
        "name": "Follow-up ADHD Consultation",
        "description": "Ongoing support and treatment plan adjustments to monitor progress and optimise ADHD management outcomes for both children and adults.",
        "price": "120",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }],
      "audience": {
        "@type": "Audience",
        "audienceType": "Children and adults with ADHD, attention difficulties, hyperactivity, or focus challenges"
      },
      "availableChannel": [{
        "@type": "ServiceChannel",
        "serviceLocation": {
          "@type": "Place",
          "@id": "https://nxtlvlhealth.com.au/#location"
        }
      }, {
        "@type": "ServiceChannel"
      }],
      "hoursAvailable": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }, {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }]
    }} />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  ADHD Naturopath | Natural ADHD Support at <span className="text-primary">NXTLVL Health</span>
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Professional ADHD naturopath consultation room at NXTLVL Health Brisbane" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/67cf124d-768d-4538-b395-cfd81826bcba.png" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Brain className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">ADHD Naturopathy</p>
                        <p className="text-xs text-muted-foreground">Natural • Holistic • Effective</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-6 py-4 h-auto">
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Book a Free 15-Min Consult!
                  </a>
                </Button>
                <Button variant="outline" asChild size="lg" className="text-lg px-6 py-4 h-auto">
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
              <img alt="Professional ADHD naturopath consultation room at NXTLVL Health Brisbane" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/67cf124d-768d-4538-b395-cfd81826bcba.png" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Brain className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">ADHD Naturopathy</p>
                    <p className="text-sm text-muted-foreground">Natural • Holistic • Effective</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for a Natural Way Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Are You Looking for a Natural Way to Support ADHD?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/cfe598a0-7186-4051-aaac-837086e04c8d.png" alt="Expert adhd naturopath providing natural support for children at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Do you or your child struggle with <strong>focus, impulsivity, mood swings, or restlessness</strong>? Do you feel like you've tried everything, but nothing seems to help long term? Are <strong>stimulant medications causing unwanted side effects</strong>, or just not enough?
                </p>
                <p>
                  At NXTLVL Health, we understand how challenging it can be to live with attention deficit hyperactivity disorder (ADHD). Mitch, a trusted <strong>ADHD naturopath</strong>, works with both children and adults to uncover the real reasons behind ADHD symptoms. Naturopathic doctors excel at treating ADHD by focusing on a <strong>holistic approach</strong> that considers the individual's mind, body, and spirit. Using evidence-based natural treatments, he supports the brain, gut, and nervous system to help improve focus, mood, and overall quality of life. For young patients, our <a href="/what-we-treat/childrens-naturopath-brisbane" className="text-primary hover:text-primary/80 underline">children's naturopath services</a> provide specialized, gentle care tailored to developing minds.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="/lovable-uploads/cfe598a0-7186-4051-aaac-837086e04c8d.png" alt="Expert adhd naturopath providing natural support for children at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>

          {/* CTA after first section */}
          <div className="text-center mb-16">
            <Button asChild size="lg" className="text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                </svg>
                Book Your Free 15-Minute Consult Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What is ADHD Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What is <a href="https://www.healthdirect.gov.au/attention-deficit-disorder-add-or-adhd" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">ADHD</a>?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/6e318a68-c5c0-4f4a-99c5-45a48e41649f.png" alt="Woman discussing ADHD symptoms with specialist adhd naturopath at NXTLVL Health Brisbane" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  <strong>ADHD is a common behavioural disorder</strong> that affects both children and adults. It can show up as:
                </p>
                <div className="grid gap-3">
                  {["Poor concentration or focus", "Impulsivity or acting without thinking", "Hyperactivity or constant restlessness", "Emotional regulation challenges", "Difficulty with memory or executive function"].map((symptom, index) => <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{symptom}</span>
                    </div>)}
                </div>
                <p>
                  While <strong>stimulant medications</strong> are often prescribed, they don't work for everyone—and they don't address the root causes. That's where a naturopathic approach can help. <strong>ADHD treatment plans from naturopathic doctors</strong> are individualised and take into account diet, lifestyle, genetics, and emotional factors. Many people with ADHD also experience <a href="/what-we-treat/naturopath-anxiety" className="text-primary hover:text-primary/80 underline">anxiety and nervous tension</a>, which is why a comprehensive approach to nervous system support is essential. Additionally, some individuals may benefit from our <a href="/what-we-treat/allergy-naturopath" className="text-primary hover:text-primary/80 underline">allergy naturopath services</a> if food sensitivities are contributing to their symptoms.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="/lovable-uploads/6e318a68-c5c0-4f4a-99c5-45a48e41649f.png" alt="Woman discussing ADHD symptoms with specialist adhd naturopath at NXTLVL Health Brisbane" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* How an ADHD Naturopath Can Help Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How an ADHD Naturopath Can Help</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/48cc100b-f874-40cd-a474-951bb035ed9c.png" alt="Naturopath explaining comprehensive ADHD treatment plan at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              As a dedicated <strong>naturopath ADHD specialist</strong>, Mitch offers holistic care that looks beyond the symptoms. He takes time to understand your full health history, diet, lifestyle, and environment.
            </p>
            <p>
              <strong>Naturopathic medicine</strong> focuses on restoring balance through:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {["Dietary changes and nutritional support", "Improving gut health and the gut-brain axis", "Functional testing to identify nutrient imbalances and food intolerances", "Herbal medicines and natural treatments to support brain function", "Supporting neurotransmitter balance and dopamine activity"].map((treatment, index) => <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{treatment}</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* CTA after third section */}
          <div className="text-center mt-16">
            <Button asChild size="lg" className="text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                </svg>
                Book Your Free 15-Minute Consult Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who Exactly We Help</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/e7a22f60-791b-4cb4-9cd9-5bf8a08dacbe.png" alt="Comprehensive ADHD support services for children and adults at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-8">
            <p>We support <strong>children and adults</strong> with:</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {["Diagnosed ADHD or suspected symptoms of ADHD", "Brain fog, poor memory, and attention issues", <>Restlessness, <a href="/what-we-treat/naturopath-anxiety" className="text-primary hover:text-primary/80 underline">anxiety</a>, and emotional ups and downs</>, "Sleep disruption and frequent infections", "Side effects or poor response to stimulant medications"].map((who, index) => <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{who}</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* ADHD Symptoms We Commonly See Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">ADHD Symptoms We Commonly See</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/95c90e9c-b03c-4d6c-b635-14ff6ce00f55.png" alt="Naturopath analysing ADHD symptoms and causes through diagnostic testing at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {["Trouble sitting still or staying focused", "Acting without thinking", "Big emotions or mood fluctuations", "Struggles at school or work", "Forgetfulness and poor organisation"].map((symptom, index) => <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{symptom}</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                These symptoms may vary between <strong>children and adults</strong>. That's why we create a plan that's <strong>personalised and tailored to your needs</strong>.
              </p>
            </div>
          </div>

          {/* CTA after fifth section */}
          <div className="text-center mt-16">
            <Button asChild size="lg" className="text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                </svg>
                Book Your Free 15-Minute Consult Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Root Causes We Explore Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Root Causes We Explore</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/284f6d80-2bc3-4ed3-937b-219b575000c5.png" alt="NXTLVL Health naturopath investigating ADHD root causes" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-8">
            <p>
              We believe <strong>symptoms are signals</strong>—not problems to suppress. Mitch investigates the underlying causes, which may include genetic and environmental factors, as well as other contributors like nutritional deficiencies or gut health issues.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {["Nutritional deficiencies (like vitamin D, zinc, or omega-3s)", "Gut issues and microbial imbalances", "Food intolerances and artificial additives", "Immune system activation and inflammation", "Environmental factors like cigarette smoke or heavy metals", "Genetic factors and DNA methylation patterns"].map((cause, index) => <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{cause}</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Why Gut Health Matters Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Gut Health Matters for ADHD</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/9bf2793b-4233-45eb-a613-6ec4d11d1b66.png" alt="Naturopath examining gut health connection to ADHD symptoms at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  The <strong>gut and brain are closely connected</strong> through the gut-brain axis. Poor gut health can affect neurotransmitter production, immune response, and even behaviour. Nutritional deficiencies, gut health, food intolerances, and inflammation can all influence behavior and cognitive function.
                </p>
                <p>
                  Many <strong>children with ADHD</strong> also experience gut symptoms like bloating, constipation, or food sensitivities. Mitch helps support digestion, rebalance the microbiome, and reduce inflammation.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="/lovable-uploads/9bf2793b-4233-45eb-a613-6ec4d11d1b66.png" alt="Naturopath examining gut health connection to ADHD symptoms at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect From Your First Consultation</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/4748db27-c782-4bc2-b09d-d93a2b5b2433.png" alt="ADHD naturopath consultation preparation at NXTLVL Health clinic" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                At your first appointment, we'll take a <strong>full health history</strong> and go deep into:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {["ADHD symptoms and development", "Diet, sleep, and movement", "Stress, emotions, and mood patterns", "Early childhood exposures (birth, antibiotics, etc.)", "Current supplements or medications"].map((expect, index) => <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{expect}</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                We may also recommend <strong>functional testing</strong> to assess: Functional testing helps uncover imbalances in neurotransmitters, blood sugar regulation, nutrient levels, and the microbiome.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {["Gut health and microbiome testing", "Food intolerances or sensitivities", "Vitamin and mineral levels", "Markers of inflammation or oxidative stress"].map((test, index) => <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{test}</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Natural ADHD Support Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural ADHD Support at NXTLVL Health</h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Activity className="h-6 w-6 mr-3" />
                  Nutrition and Diet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Diet plays a major role</strong> in managing ADHD. Mitch uses nutritional medicine to support healthy brain function and reduce triggers. That might include removing food additives, reducing refined sugars, and including whole foods that stabilise blood sugar. The <strong>Feingold diet</strong>, which aims to eliminate food additives, is one example of how dietary changes can help manage ADHD symptoms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Heart className="h-6 w-6 mr-3" />
                  Herbal and Natural Medicine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Herbal medicines</strong> can calm the nervous system, support emotional regulation, and improve attention. Mitch may include calming herbs or adaptogens based on your symptoms and age. Natural treatments for ADHD can also include herbs like <strong>ginkgo biloba and American ginseng</strong>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Users className="h-6 w-6 mr-3" />
                  Nutritional Supplements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Targeted supplements</strong> may include:
                </p>
                <ul className="space-y-2">
                  {["Magnesium (for nervous system support)", "Omega-3 fatty acids (to support brain health)", "Zinc and iron (to correct deficiencies)", "Vitamin D (essential for immune and cognitive function). Studies suggest that low zinc and magnesium levels are associated with ADHD symptoms."].map((supplement, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{supplement}</span>
                    </li>)}
                </ul>
                <p className="text-muted-foreground mt-4">
                  Each supplement is carefully chosen and based on <strong>evidence-based treatments</strong>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Brain className="h-6 w-6 mr-3" />
                  Stress Support and Sleep Hygiene
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Managing stress</strong> is key for both children and adults. Mitch offers lifestyle tools, breathing techniques, and gentle sleep support strategies to help regulate cortisol levels and improve rest. <strong>Stress management</strong> is a key component in managing ADHD symptoms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Shield className="h-6 w-6 mr-3" />
                  Gut and Immune System Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We address <strong>poor gut health</strong>, which often includes microbial imbalances, food intolerances, and frequent infections. By supporting digestion, we support overall wellbeing and brain function.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA after seventh section */}
          <div className="text-center mt-16">
            <Button asChild size="lg" className="text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                </svg>
                Book Your Free 15-Minute Consult Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Makes Our ADHD Support Different Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Makes Our ADHD Support Different?</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/256bf666-d5db-4321-8b3b-b0f2b25a18c2.png" alt="NXTLVL Health natural ADHD treatment clinic in Brisbane" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {["Root cause approach to ADHD symptoms", "Personalised care and tailored strategies", "Functional testing and real answers", "Natural treatments that work with your body", "Support for both ADHD children and adults"].map((difference, index) => <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{difference}</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Mitch Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Mitch – Your ADHD Naturopath</h2>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
            <p>
              Mitch is an experienced <strong>naturopathic doctor ADHD families trust</strong>. With a clinical practice grounded in natural medicine, he combines compassion with evidence-based support. <strong>Emotional and psychological support</strong> is crucial for individuals with ADHD, and Mitch ensures this is a key part of his approach.
            </p>
            <p>
              Whether it's for your child or yourself, Mitch listens to your story and creates a <strong>treatment plan that's simple, practical, and effective</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Help Final Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Help</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {["Children with ADHD and behavioural disorders", "Teenagers with mood swings or focus challenges", "Adults with undiagnosed or adult ADHD", "Parents looking for safe, natural treatment options", "Families seeking alternatives to stimulant medications"].map((who, index) => <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{who}</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                If you're tired of feeling stuck and want <strong>real, natural ADHD support</strong>, NXTLVL Health is here to help. Whether your goal is to reduce symptoms, improve focus, or support your child's behaviour naturally—we're with you every step of the way.
              </p>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-6">Book Your Free 15-Minute Consult Today</h3>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Let's uncover the <strong>root cause of ADHD</strong> and help you or your child feel calm, focused, and in control again. Book a free 15-minute consult with Mitch and see how a <strong>tailored naturopathic approach</strong> can change your life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Your Free 15-Minute Consult Today
                </a>
              </Button>
              <Button variant="outline" asChild size="lg" className="text-lg px-6 py-4">
                <a href="tel:0731808853">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
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
export default ADHDNaturopathy;