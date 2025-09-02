import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Activity, Users, Brain, Zap } from "lucide-react";
const SIBONaturopathy = () => {
  return <>
      <SEO title="SIBO Naturopath | The Best in Brisbane | NXTLVL Health" description="Feeling tired, bloated, foggy or just flat? Our SIBO naturopath will the real cause of your symptoms, so you can finally feel like YOU again." canonical="/what-we-treat/sibo-naturopath" keywords="SIBO naturopath Brisbane, small intestinal bacterial overgrowth treatment, SIBO specialist, gut health Brisbane, natural SIBO treatment" />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  SIBO Naturopath | <span className="text-primary">Natural Help</span> for Small Intestinal Bacterial Overgrowth
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">SIBO Naturopathy</p>
                        <p className="text-xs text-muted-foreground">Natural • Evidence-Based</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight">
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-center">Book a Free 15-Min Consult!</span>
                  </a>
                </Button>
                <Button variant="outline" asChild className="text-base sm:text-lg px-4 py-3 h-auto">
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
              <img alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto" src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">SIBO Naturopathy</p>
                    <p className="text-sm text-muted-foreground">Natural • Evidence-Based</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struggling with Bloating Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Are You Struggling With Bloating, Pain, or IBS That Just Won't Go Away?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  If your gut always feels <strong>bloated, uncomfortable, or unpredictable</strong>, you may have something called <strong>SIBO</strong> — short for Small Intestinal Bacterial Overgrowth.
                </p>
                <p>
                  At NXTLVL Health, we specialise in helping people understand and <strong>naturally treat SIBO</strong> using evidence-based naturopathic medicine, functional testing, and personalised care plans. Our comprehensive approach includes working with our experienced <a href="/what-we-treat/gut-health-specialist" className="text-primary hover:underline">gut health specialist</a> and providing specialized care for those who also struggle with <a href="/what-we-treat/ibs-naturopath" className="text-primary hover:underline">IBS symptoms</a>.
                </p>
                <p>
                  You don't need to live with constant discomfort. Let's help you <strong>get to the root cause</strong> and find lasting relief.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is SIBO Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Is SIBO?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                SIBO happens when <strong>bacteria that should live in your large intestine</strong> start growing in your small intestine instead. This bacterial overgrowth can cause a range of <strong>uncomfortable symptoms</strong> and interfere with proper <strong>digestion and nutrient absorption</strong>.
              </p>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Symptoms of SIBO include:</h3>
              <ul className="space-y-4">
                {["Bloating (often worse after eating)", "Abdominal pain or discomfort", "Gas and belching", "Diarrhoea, constipation, or both", "Fatigue and brain fog", "Feeling full quickly", "Food intolerances", "Nutrient deficiencies", "Histamine intolerance"].map((item, index) => <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>)}
              </ul>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* What Causes SIBO Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Causes SIBO?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Food poisoning or gastrointestinal infection", "Low stomach acid or proton pump inhibitors (PPIs)", "Abdominal surgery or gastric bypass", "Poor gut motility", "Chronic stress and nervous system changes", "<a href=\"/what-we-treat/ibs-naturopath\" className=\"text-primary hover:underline\">Irritable bowel syndrome</a>", "Coeliac disease, Crohn's, or Ulcerative Colitis", "Weakened immune system", "Digestive enzyme deficiencies"].map((item, index) => <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How We Help at NXTLVL Health</h2>
            {/* Added Image */}
            <div className="mb-12">
              <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4503-scaled.jpeg" alt="NXTLVL Health naturopath consultation room" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              icon: Activity,
              title: "SIBO Testing",
              description: "Diagnose SIBO using a SIBO breath test"
            }, {
              icon: Brain,
              title: "Gas Analysis",
              description: "Understand the type of gas produced — hydrogen, methane, or hydrogen sulphide"
            }, {
              icon: Heart,
              title: "Root Causes",
              description: "Find underlying causes like low stomach acid or poor gut motility"
            }, {
              icon: Zap,
              title: "Natural Treatment",
              description: "Treat SIBO with herbal antimicrobials and nutrition"
            }, {
              icon: Users,
              title: "Gut Rebuilding",
              description: "Rebuild your gut with enzymes and beneficial bacteria"
            }].map((item, index) => <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 3 Phases of Treatment Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The 3 Phases of Natural SIBO Treatment</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-showing-patient-results-on-a-computer-scaled.jpeg" alt="Naturopath showing patient results on a computer at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">1. Remove Overgrowth (Antimicrobial Support)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Herbal antimicrobials", "Disrupt biofilm", "Supplement and meal timing for gut motility", "Optional elemental diet"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">2. Repair the Gut Lining and Rebuild Digestion</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Support for gut lining and permeability", "Digestive enzymes", "Rebuild gut microbiome", "Careful food reintroduction"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">3. Restore Motility and Prevent Relapse</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Support migrating motor complex", "Meal timing strategies", "Stress, sleep, movement support", "Ongoing care"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why SIBO Keeps Coming Back Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why SIBO Keeps Coming Back</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Unresolved nervous system support", "Trigger foods", "Untreated low stomach acid", "Chronic stress or trauma", "Uncorrected motility issues"].map((item, index) => <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Do You Have SIBO Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Do You Have SIBO?</h2>
            {/* Added Image */}
            <div className="mb-12">
              <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Sad-woman-dealing-with-gut-issues-and-bloating-scaled.jpeg" alt="Woman dealing with gut issues and bloating" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Symptoms worsen after eating", "Bloating with healthy foods", "Reacting to fermented foods", "IBS diagnosis without relief", "Feel better fasting or low FODMAP", "Post-food poisoning issues"].map((item, index) => <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Happens in Consult Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Happens in a SIBO Naturopath Consult?</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Initial Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["In-depth health history and symptoms", "Review lifestyle, diet, medications, and stress", "Breath test if needed", "Clear, supportive explanations"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Your Tailored SIBO Treatment Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Custom SIBO treatment plan", "Address bacteria, motility, nutrient deficiencies", "Support for stress and mental health", "Low FODMAP and other dietary guidance", "Regular progress reviews"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Natural Treatments Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural Treatments We Use for SIBO</h2>
            {/* Added Image */}
            <div className="mb-12">
              <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/01/DSC_4546-scaled.jpeg" alt="Natural treatments and supplements for SIBO at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Herbal Antimicrobials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Berberine", "Oregano oil", "Neem", "Garlic extract", "Partially hydrolysed guar gum"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Digestive Enzymes & Bile Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To <strong>break down food</strong>, absorb nutrients, and support <strong>bile flow</strong> and small intestine health.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Nutritional Medicine</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Support for vitamins A, D, E, K", "Immune and gut support nutrients", "Diet modifications"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Gut-Healing Nutrients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Glutamine", "Zinc carnosine", "Marshmallow root"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Nervous System Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Stress reduction tools", "Mindfulness techniques", "Adaptogenic herbs", "Lifestyle shifts"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Common Mistakes in Treating SIBO</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Using antibiotics without gut healing", "Probiotics too early", "Skipping meal spacing for motility", "Ignoring nervous system", "Too restrictive diets", "Missing root causes like hormones or immunity"].map((item, index) => <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* How SIBO Affects More Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How SIBO Affects More Than Just Digestion</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Nutrient deficiencies causing fatigue, skin issues", "Low mood, brain fog", "Hormonal imbalances", "Chronic inflammation"].map((item, index) => <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Health Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose NXTLVL Health as Your SIBO Naturopath?</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Root-cause focused", "Combines naturopathic medicine with modern tools", "Personalised, caring consultations", "Clear explanations and guidance", "Supportive and compassionate care"].map((item, index) => <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Your Next Step</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                If you're struggling with <strong>ongoing bloating, pain, or unpredictable digestion</strong> and nothing has worked, it may be time to <strong>treat SIBO from the root</strong>. At NXTLVL Health, we help uncover the real cause, reduce symptoms, and help you rebuild trust in your gut.
              </p>
              <h3 className="text-2xl font-bold text-foreground">Ready to feel better?</h3>
              <p>
                Book your first SIBO naturopath consult today with Mitch at NXTLVL Health. Let's give your small intestine the help it needs so you can finally feel <strong>clear, light, and well again</strong>.
              </p>
              <p>
                You don't have to live in discomfort. We're here to help you <strong>heal naturally</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book a Free 15-Min Consult!
                </a>
              </Button>
              <Button variant="outline" asChild className="text-base sm:text-lg px-6 py-4">
                <a href="tel:0731808853">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Call Mitch for SIBO Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>;
};
export default SIBONaturopathy;