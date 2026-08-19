import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Activity, Users, Brain, Zap } from "lucide-react";
const SIBONaturopathy = () => {
  return <>
      <SEO title="SIBO Breath Testing & Treatment Brisbane | NXTLVL Health" description="SIBO explained: hydrogen, methane and hydrogen sulphide types, lactulose breath testing kits posted Australia-wide, and the treatment phases that prevent relapse." canonical="/what-we-treat/sibo-naturopath" keywords="SIBO breath test Brisbane, SIBO naturopath, hydrogen sulphide SIBO, IMO methane overgrowth, SIBO treatment phases" />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  SIBO, Not Just IBS: <span className="text-primary">Breath Testing, Treatment Phases</span> and Relapse Prevention
                </h1>

                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/48968bce-0083-4fb8-bc0f-6069bc00aead.png" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">SIBO Breath Testing</p>
                        <p className="text-xs text-muted-foreground">Hydrogen • Methane • H2S</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight">
                  <a href="/#free-consult">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-center">Book a Free 15-Min Consult!</span>
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
              <img alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/48968bce-0083-4fb8-bc0f-6069bc00aead.png" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">SIBO Breath Testing</p>
                    <p className="text-sm text-muted-foreground">Hydrogen • Methane • H2S</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIBO vs IBS Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">SIBO Is a Cause of IBS Symptoms — Not the Same Diagnosis</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/6bc3a61d-d439-45ef-a4b6-164d539d1bad.png" alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  "IBS" is a label for a cluster of symptoms — pain, bloating, and altered bowel habits — with no single confirmed cause. <strong>SIBO (Small Intestinal Bacterial Overgrowth)</strong> is one specific, testable mechanism that can sit underneath an IBS label, alongside others such as large-bowel dysbiosis, bile acid issues, or a genuinely sensitive nervous system.
                </p>
                <p>
                  If you want the broader picture of how we work through an IBS diagnosis and rule things in or out, our <a href="/what-we-treat/ibs-brisbane" className="text-primary hover:underline">guide to diagnosing IBS in Brisbane clients</a> covers that groundwork. This page goes deeper into the one piece that's often missed: confirming and mapping SIBO with a breath test, then treating it in the right order.
                </p>
                <p>
                  The distinction matters because generic IBS advice — more fibre, a probiotic, avoid trigger foods — can make SIBO worse. Overgrowth needs to be identified by <strong>gas type</strong> and reduced before rebuilding the gut, not fed or masked.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="/lovable-uploads/6bc3a61d-d439-45ef-a4b6-164d539d1bad.png" alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="/#free-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Three Gas Types Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Hydrogen, Methane (IMO) or Hydrogen Sulphide — Why the Type Matters</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Not all SIBO looks the same. The <strong>gas the overgrowth produces</strong> changes both the symptom pattern and the treatment, which is exactly why a breath test result needs to be read properly rather than treated as a simple yes/no.
              </p>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/4c05f756-6f70-466c-b4f4-5f0fd25a5d07.png" alt="Naturopath reviewing SIBO breath test results at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">The three overgrowth patterns:</h3>
              <ul className="space-y-4">
                {["Hydrogen-dominant: tends to bring loose stools, urgent bowel habits, and a rapid rise in breath hydrogen early in testing", "Methane-dominant (now called IMO, Intestinal Methanogen Overgrowth): usually presents with constipation, straining, and significant bloating, driven by archaea rather than bacteria", "Hydrogen sulphide SIBO: often the trickiest, associated with diarrhoea, a rotten-egg odour to gas, and a flat or falsely low reading unless the lab specifically tests for it", "Mixed patterns, where more than one gas is elevated and symptoms overlap"].map((item, index) => <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>)}
              </ul>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="/lovable-uploads/4c05f756-6f70-466c-b4f4-5f0fd25a5d07.png" alt="Naturopath reviewing SIBO breath test results at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Telling It Apart Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Telling SIBO Apart From General IBS and Large-Bowel Dysbiosis</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Symptoms flare within one to three hours of eating, rather than being constant all day", "Bloating is worse with prebiotic fibre, fermented foods, or a new probiotic", "Diagnosed with IBS previously but a low FODMAP diet only gave partial, temporary relief", "History of food poisoning, gastro, or travel illness before symptoms began", "Feels better fasting or on very restricted diets, then symptoms return the moment food is reintroduced", "By contrast, large-bowel dysbiosis (an imbalance further down, tested via stool rather than breath) tends to show up as more delayed, fermentation-type symptoms and needs a different testing approach entirely"].map((item, index) => <Card key={index}>
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

      {/* Breath Testing Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How the Lactulose or Glucose Breath Test Actually Works</h2>
            {/* Added Image */}
            <div className="mb-12">
              <img src="/lovable-uploads/82a0148f-2f85-443c-b857-1901ae6c2d7f.png" alt="SIBO breath test kit ready to post out from NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              icon: Activity,
              title: "Kit Posted to Your Door",
              description: "We send a lactulose or glucose breath test kit anywhere in Australia — no need to visit a collection centre"
            }, {
              icon: Brain,
              title: "Prep Diet",
              description: "A one to two day low-fermentation prep diet beforehand, so background gas doesn't skew the result"
            }, {
              icon: Heart,
              title: "Baseline Sample",
              description: "A fasting breath sample is collected first thing, before the test substrate is taken"
            }, {
              icon: Zap,
              title: "Timed Samples",
              description: "Breath samples are collected every 15–20 minutes over two to three hours, matched to a symptom diary"
            }, {
              icon: Users,
              title: "Reading the Rise",
              description: "We interpret the rise in parts per million across the curve, not just a single number, to pattern-match hydrogen, methane and H2S"
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
              <a href="/#free-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Root Causes Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why the Small Intestine Overgrows in the First Place</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Food poisoning or gastro that damages the migrating motor complex (the gut's housekeeping wave)", "Low stomach acid, from age, stress, or long-term proton pump inhibitor (PPI) use", "Adhesions from previous abdominal surgery restricting normal movement", "Slow overall gut motility, including in hypothyroidism or connective tissue conditions", "Medications that slow transit, such as opioids or some antidepressants", "Structural issues like a poorly functioning ileocaecal valve"].map((item, index) => <Card key={index}>
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

      {/* Treatment Phases Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Four Treatment Phases, and What Each One Actually Fixes</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/81bb4143-d975-44a3-8df2-57e4ed8a1f3e.png" alt="Naturopath explaining SIBO treatment plan over video call" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Phase 1: Prepare</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Confirm gas type from your breath test result", "Steady meal timing and settle acute symptoms first", "Address stomach acid and bile flow so treatment absorbs properly", "Set a realistic starting point rather than jumping straight to antimicrobials"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Phase 2: Reduce the Overgrowth</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Herbal antimicrobials selected against your gas type (hydrogen, IMO or H2S)", "Typically run four to six weeks, sometimes repeated", "Biofilm-disrupting agents where overgrowth is stubborn", "Close monitoring for a temporary die-off response"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Phase 3: Restore Motility and Digestion</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Prokinetic support to rebuild the migrating motor complex", "Digestive enzymes and bile support reintroduced", "Address the original predisposing cause (acid, adhesions, thyroid, medications)", "Gradual, structured food reintroduction rather than long-term restriction"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Phase 4: Rebuild the Diet</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Widen food variety back out, guided by tolerance rather than fear", "Reintroduce fibre and fermented foods slowly, only once motility is steadier", "Retest by breath if symptoms plateau or recur", "Shift from a treatment diet to a genuinely sustainable, varied one"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-10 text-lg text-muted-foreground text-center">
            <p>
              Most clients move through these four phases over roughly three to six months, though hydrogen sulphide and IMO patterns, or long-standing motility problems, can take longer. For a week-by-week look at how a full gut programme runs alongside this, see our <a href="/what-we-treat/ibs-clinic" className="text-primary hover:underline">IBS clinic programme structure</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Relapse Prevention Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Relapse Prevention: Why SIBO Comes Back and How to Stop It</h2>
            {/* Added Image */}
            <div className="mb-12">
              <img src="/lovable-uploads/507d386f-e7d8-4e14-a144-56b40f6d528f.png" alt="Woman managing SIBO relapse prevention with meal spacing" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Reduction without a prokinetic phase, so the migrating motor complex never recovers", "Grazing or snacking constantly, which never allows the housekeeping wave to run between meals", "The original cause — low acid, adhesions, thyroid, medications — never actually addressed", "Reintroducing fermentable foods too quickly, before motility has stabilised", "No retesting to confirm the gas type has genuinely cleared before stopping treatment"].map((item, index) => <Card key={index}>
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
              <a href="/#free-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Consult Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Happens in a SIBO-Focused Video Consult</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Initial Hour-Long Consult</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Detailed symptom timeline, including what triggered the initial episode", "Review of any prior breath tests, medications, and past treatment attempts", "Kit arranged and posted out if breath testing is needed", "Plain-English explanation of your likely gas type and next steps, all by video Australia-wide"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Your Phased SIBO Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Gas-type-specific antimicrobial and dosing plan", "Prokinetic and motility strategy built in from the start", "Meal spacing guidance tailored to your routine", "Scheduled video check-ins to track progress and adjust between phases"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Herbal Toolkit Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Herbal and Nutritional Toolkit We Draw On</h2>
            {/* Added Image */}
            <div className="mb-12">
              <img src="/lovable-uploads/9c3a4767-27df-40fb-a7b4-a2c6af678f29.png" alt="Herbal antimicrobials and prokinetic support for SIBO at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Herbal Antimicrobials by Gas Type</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Berberine and neem for hydrogen-dominant overgrowth", "Allicin-rich garlic extract, often preferred for methane (IMO)", "Bismuth and specific botanicals trialled for hydrogen sulphide patterns", "Partially hydrolysed guar gum as a prebiotic fibre used cautiously during treatment"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Prokinetics and Motility Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ginger, 5-HTP-based, or prescription prokinetic options to keep the <strong>migrating motor complex</strong> firing between meals — the single most overlooked factor in long-term relapse prevention.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Digestive Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Betaine HCl or bitters where stomach acid is low", "Digestive enzymes to reduce fermentable load reaching the small intestine", "Bile support for fat digestion and microbial balance"].map((item, index) => <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Meal Spacing and Routine</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Three to four hours between meals, no grazing", "An overnight fasting window to let motility reset", "Consistent meal timing during the reduction phase especially"].map((item, index) => <li key={index} className="flex items-start space-x-2">
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
              <a href="/#free-consult">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Mistakes We See in Self-Managed or Half-Treated SIBO</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Treating every case the same, regardless of gas type", "Starting probiotics or high-fibre diets before the overgrowth is reduced", "Stopping antimicrobials early because symptoms improve slightly", "Skipping the prokinetic phase entirely", "Never testing for hydrogen sulphide, so it's missed on a standard two-gas breath test", "Repeating the same generic low FODMAP advice used for unrelated IBS"].map((item, index) => <Card key={index}>
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

      {/* Wider Impact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Beyond the Gut: What Untreated SIBO Can Drive Elsewhere</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Fat-soluble vitamin deficiencies (A, D, E, K) from impaired absorption", "Iron and B12 deficiency, fatigue, and brain fog", "New food sensitivities and histamine intolerance", "Ongoing low-grade inflammation affecting mood and skin"].map((item, index) => <Card key={index}>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Brisbane Clients Choose NXTLVL Health for SIBO Testing</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/17548d2b-e4a0-4571-aba5-1705f04c994e.png" alt="NXTLVL Health online natural medicine serving New Farm Brisbane" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Breath test kits posted anywhere in Australia, with results explained in plain English", "Treatment matched to your specific gas type, not a one-size-fits-all protocol", "Prokinetic and motility support built in from the start, not added as an afterthought", "Hour-long video consults so nothing is rushed", "For the wider naturopathic approach to IBS symptoms generally, see our full <a href=\"/what-we-treat/ibs-naturopath\" className=\"text-primary hover:underline\">IBS naturopath method</a>"].map((item, index) => <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item }}></span>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get a Clear Answer Instead of Another IBS Label</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                If you've been told it's "just IBS" but nothing has settled it, a proper <strong>breath test and gas-specific treatment plan</strong> may be the missing piece. At NXTLVL Health, we identify the overgrowth type, treat it in the right order, and build in the motility support most people never get.
              </p>
              <h3 className="text-2xl font-bold text-foreground">Ready to get tested properly?</h3>
              <p>
                Book your first SIBO consult with Mitch at NXTLVL Health — an hour-long video call, wherever you are in Australia, with a breath test kit posted straight to your door if you need one.
              </p>
              <p>
                For the broader gut health picture, head back to our <a href="/what-we-treat/gut-health-naturopath-brisbane" className="text-primary hover:underline">gut health naturopathy hub</a>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="/#free-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book a Free 15-Min Consult!
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
