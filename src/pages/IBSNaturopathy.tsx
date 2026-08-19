import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Shield } from "lucide-react";
const IBSNaturopathy = () => {
  return <>
      <SEO title="The Naturopathic Method for IBS | Stool Testing & Herbal Treatment" description="How our IBS naturopath actually works: metagenomic stool testing, targeted herbal antimicrobials, biofilm and motility support, and structured food reintroduction. Video consults Australia-wide." canonical="/what-we-treat/ibs-naturopath" keywords="IBS naturopath method, stool testing IBS, herbal antimicrobials IBS, low FODMAP reintroduction, IBS naturopath Brisbane" />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  The Naturopathic Method for IBS: <span className="text-primary">Stool Testing, Targeted Herbs and Food Change</span>
                </h1>

                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Woman consulting with healthcare professional for digestive health concerns" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/7c559226-37b5-4d6f-bcc4-f1a42d7a0b6b.png" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Testing-Led IBS Treatment</p>
                        <p className="text-xs text-muted-foreground">Metagenomic Stool Testing • Herbal Medicine</p>
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
                <script defer async src='https://cdn.trustindex.io/loader.js?7985f8c47d89745a18661502ab0'></script>
              </div>
            </div>

            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img alt="Woman consulting with healthcare professional for digestive health concerns" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/7c559226-37b5-4d6f-bcc4-f1a42d7a0b6b.png" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Testing-Led IBS Treatment</p>
                    <p className="text-sm text-muted-foreground">Metagenomic Stool Testing • Herbal Medicine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Start With a Stool Test Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why We Start With Species-Level Stool Testing</h2>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img src="/lovable-uploads/42bb449d-ce28-4105-a633-de7940727b20.png" alt="Woman experiencing digestive discomfort seeking help from ibs naturopath" className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                A standard stool culture can only grow a handful of organisms and misses most of what actually lives in your gut. We use <strong>metagenomic, species-level stool testing</strong>, a kit posted straight to your door in Brisbane or anywhere else in Australia, which sequences DNA to identify bacteria, yeasts and parasites down to the species — not just broad genus categories.
              </p>
              <p>
                That level of detail matters. Two people with identical "bloating and irregular bowels" symptoms can have completely different drivers — one an overgrowth of a specific proteolytic bacterial species, another a fungal overgrowth, another a marker of poor motility. If you want to understand what IBS actually is and why standard blood and colonoscopy results so often come back "normal", that's covered in full on our <a href="/what-we-treat/ibs-brisbane" className="text-primary hover:underline">IBS Brisbane page</a> — this page is about what we do once we have the data.
              </p>
              <p>
                The report also flags markers for inflammation, digestive function (elastase, secretory IgA) and short-chain fatty acid production, so we're not just hunting for "bad bugs" — we're building a full picture of terrain before deciding what to treat and in what order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reading the Report Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How Findings Shape Your Treatment Plan</h2>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img src="/lovable-uploads/ed9e3662-e868-43a7-bf63-ca6b9508fe6b.png" alt="Professional ibs naturopath consultation with patient discussing digestive health treatment options" className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed text-center">
              <p>
                On your video consult, we go through the report line by line. Rather than treating every finding at once, we prioritise:
              </p>
            </div>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {["Which overgrowths are large enough, and in the wrong location, to plausibly explain your symptoms", "Whether low beneficial bacteria or low short-chain fatty acid production is driving poor motility or gut lining fragility", "Whether SIBO is a likely contributor, which changes the sequencing of herbs and diet (see our dedicated SIBO naturopath page)", "Digestive function markers that suggest we need enzyme or bile support before antimicrobials will work well", "How resilient your beneficial flora looks, which tells us how aggressive we can be with antimicrobial herbs"].map((point, index) => <div key={index} className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">{point}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            <div className="text-lg text-muted-foreground leading-relaxed text-center">
              <p>
                If SIBO patterns are involved — hydrogen or methane-dominant, with bloating that's worse straight after eating — the herbal and dietary strategy shifts again. We treat that in detail on our <a href="/what-we-treat/sibo-naturopath" className="text-primary hover:underline">SIBO naturopath page</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Targeted Herbal Antimicrobials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Targeted Herbal Antimicrobials, Not a Generic Blend</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Different organisms respond to different herbs. We match the herb to what the report actually found.
            </p>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img src="/lovable-uploads/9d537cd9-cb50-487f-8c01-fcb353738f68.png" alt="Healthcare practitioner reviewing comprehensive diagnostic test results for digestive health assessment" className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid gap-6">
              {["Berberine-containing herbs (such as barberry and goldenseal) for many gram-negative bacterial overgrowths", "Oregano oil and thyme for their broad antibacterial and antifungal action where mixed overgrowths are present", "Caprylic acid and undecylenic acid where fungal overgrowth (Candida species) is the dominant finding", "Black walnut and wormwood-based combinations where parasites are identified on the panel", "Garlic-derived allicin, which is particularly relevant when methane-producing organisms are involved"].map((herb, index) => <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Activity className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-lg">{herb}</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            <div className="text-lg text-muted-foreground text-center">
              <p>
                We rotate and dose these herbs deliberately rather than running one blend for months. Overgrowths shift as they're pressured, so we re-test or re-check symptoms at intervals and adjust the herbal mix accordingly, rather than assuming the first protocol is the last one you'll need.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4 h-auto">
              <a href="/#free-consult">
                <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Biofilms and Motility Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Biofilm Disruption and Motility Support</h2>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img src="/lovable-uploads/9727d25c-44a3-4c65-9bdd-9ead72af59d5.png" alt="Professional naturopathic practitioner preparing personalized treatment plans for patients" className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                Bacteria and fungi can shelter inside a protective biofilm matrix — a slimy layer they build over themselves — which lets them dodge antimicrobial herbs entirely. Where the stool report and symptom pattern suggest a stubborn, recurring overgrowth, we introduce biofilm-disrupting agents (such as NAC, certain enzyme blends, or specific herbal combinations) ahead of or alongside antimicrobials, so the herbs can actually reach their target.
              </p>
              <p>
                We also assess motility separately from microbial load. The migrating motor complex is the "housekeeping wave" that sweeps residual food and bacteria out of the small intestine between meals — when it's sluggish, overgrowths tend to recur no matter how well the first round of herbs worked. Depending on your case, motility support might mean specific prokinetic herbs, meal spacing and timing, or nervous-system work aimed at the vagus nerve, which strongly influences gut movement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[{
                icon: Brain,
                text: "Is sluggish motility letting overgrowths creep back after treatment?"
              }, {
                icon: Shield,
                text: "Does a biofilm need disrupting before antimicrobials will work?"
              }, {
                icon: Activity,
                text: "Is bile flow adequate to keep the small intestine clear?"
              }, {
                icon: Heart,
                text: "Does the vagus nerve and nervous system need direct support?"
              }].map((question, index) => <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <question.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{question.text}</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Probiotics and Prebiotics Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">When (and How) We Use Probiotics and Prebiotics</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Timing matters more than most people realise — the wrong strain at the wrong stage can make bloating worse, not better.
            </p>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img src="/lovable-uploads/60cace91-a809-4181-8c6d-083ba8fd5389.png" alt="Qualified naturopathic practitioner explaining natural herbal medicine treatment options to patient" className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Soil-Based and Spore-Forming Strains</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These tend to be well tolerated even during the antimicrobial phase, because they pass through in an inactive spore form and don't compete directly with the herbs we're using.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Saccharomyces Boulardii</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A beneficial yeast we sometimes use alongside antimicrobial herbs to support the gut lining and crowd out less helpful organisms, particularly where diarrhoea-predominant symptoms are prominent.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Multi-Strain Lactobacillus and Bifidobacterium Blends</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We generally hold these back until after the antimicrobial and biofilm phase, once the report shows the overgrowth has come down — introducing them too early can feed the wrong organisms.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Prebiotic Fibres</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Partially hydrolysed guar gum, resistant starch and other prebiotic fibres feed beneficial species and support short-chain fatty acid production — but if SIBO is present, standard prebiotics can worsen bloating, so we sequence these in carefully rather than adding them from day one.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Food as Diagnostic Tool Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Low-FODMAP as a Diagnostic Tool, Not a Life Sentence</h2>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img src="/lovable-uploads/73ae9c32-eb11-46ba-a42a-284c0061317f.png" alt="Woman experiencing abdominal discomfort and digestive pain symptoms" className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                We use a strict low-FODMAP elimination for a short, defined window — typically two to six weeks — purely as a diagnostic step to confirm which fermentable carbohydrates are provoking your symptoms. It's not designed to be followed indefinitely, and long-term restriction can actually starve beneficial bacteria and narrow your diet unnecessarily.
              </p>
              <p>
                Once symptoms settle, we move through a structured reintroduction, testing one FODMAP subgroup at a time (fructans, GOS, lactose, excess fructose, polyols) so you know exactly which foods are the actual problem, rather than avoiding entire food groups on guesswork.
              </p>
              <p>
                We're also deliberate about fibre type. Soluble fibres like psyllium husk are usually well tolerated and can firm or bulk stool depending on the dose; insoluble fibres (raw vegetable skins, wheat bran) can aggravate bloating and cramping in a sensitised gut; resistant starches are reintroduced gradually once fermentation capacity has improved. Getting fibre type and timing wrong is one of the most common reasons people feel like "nothing works" — even when the underlying overgrowth has already been addressed.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4 h-auto">
              <a href="/#free-consult">
                <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Gut Lining and Nervous System Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Rebuilding the Gut Lining and Calming the Gut-Brain Axis</h2>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img src="/lovable-uploads/6a563de7-3442-45e7-813f-2d08425b5f71.png" alt="Healthcare professional conducting detailed laboratory analysis for comprehensive health assessment" className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-1 gap-8">
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Mucosal and Barrier Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Slippery elm, deglycyrrhizinated liquorice and zinc carnosine to soothe and support the intestinal lining once overgrowths are being cleared.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">L-glutamine, introduced once fermentation is under control, as fuel for the cells lining the gut wall.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Omega-3s and specific antioxidants where the report shows ongoing low-grade inflammation.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Nervous-System Regulation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Because gut and nervous system signalling run in both directions, we build in breathwork and vagal-toning techniques alongside the physical treatment, not as an afterthought.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Adaptogenic and nervine herbs (such as lemon balm and chamomile) can calm spasm and visceral hypersensitivity while the deeper microbial work is underway.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Sleep and stress-hormone patterns are reviewed at each check-in, since cortisol swings measurably alter gut motility and pain sensitivity.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How the Protocol Is Sequenced Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How It All Gets Sequenced and Adjusted</h2>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img src="/lovable-uploads/a78839ee-9ca6-4087-b9b3-b68e08636b33.png" alt="Dedicated healthcare practitioner reviewing patient files and treatment documentation" className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {["Test first: metagenomic stool testing and, where indicated, breath testing for SIBO, before any herbs are chosen.", "Prepare the terrain: bile, enzyme and biofilm support where the report suggests antimicrobials alone won't get through.", "Target the findings: herbal antimicrobials matched to the specific organisms identified, dosed and rotated deliberately.", "Support motility and the nervous system throughout, so overgrowths are less likely to simply return.", "Reseed and rebuild: probiotics, prebiotic fibre and gut-lining nutrients, introduced once microbial load has come down.", "Reintroduce food methodically, confirming true triggers rather than leaving you on a restricted diet indefinitely."].map((step, index) => <Card key={index} className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-lg text-muted-foreground">{step}</p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground">
                None of this runs on a fixed calendar — each stage is adjusted against re-testing and how you're actually responding. For a plain-English walkthrough of what a full programme looks like week by week, see our <a href="/what-we-treat/ibs-clinic" className="text-primary hover:underline">IBS clinic page</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Method Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Test-Driven Treatment Beats Guesswork</h2>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img src="/lovable-uploads/d3467fd2-1425-445a-afcc-e1e474d769bd.png" alt="Professional healthcare provider conducting thorough health examination and vital signs assessment" className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                Generic "gut health" supplement stacks and broad-spectrum antimicrobial blends can work — but they can also waste months treating the wrong organism, or feed an overgrowth that a prebiotic or the wrong probiotic strain was never going to help. Species-level testing lets us build a plan around what's actually in your gut, adjust it as the data changes, and stop treatment once it's genuinely done rather than open-ended.
              </p>
              <p>
                Every consult runs as an hour-long video call, and test kits are posted to you wherever you are in Brisbane or further afield across Australia — so the whole method described here is available without ever needing to visit a clinic in person.
              </p>
            </div>

            <Card className="bg-muted/50 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">This method is built to:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {["Identify the specific organisms and imbalances behind your symptoms", "Match herbal antimicrobials to what's actually overgrown", "Clear biofilms so treatment can actually reach its target", "Restore motility so overgrowths don't simply return", "Use elimination diets as a short diagnostic step, not a permanent restriction", "Rebuild gut lining and nervous-system resilience alongside the microbial work"].map((benefit, index) => <div key={index} className="flex items-start space-x-3">
                      <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-lg">
                <a href="/what-we-treat/gut-health-naturopath-brisbane" className="text-primary hover:text-primary/80 underline">
                  Head back to our Gut Health Naturopath Brisbane hub
                </a> for an overview of every condition we treat, or read our <a href="/what-we-treat/ibs-brisbane" className="text-primary hover:underline">IBS Brisbane page</a> to understand IBS itself and why routine tests so often miss it.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4 h-auto">
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

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Find Out What's Really Going On?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Stop guessing which supplement or diet might help, and start with the data.
              </p>
              <p>
                Book your <strong>initial consultation</strong> with Mitch at NXTLVL Health. We'll arrange the right stool testing, walk through exactly what it shows, and build a herbal and dietary plan matched to your results — delivered entirely through video consults, with kits posted to your door.
              </p>
              <p>
                You don't need to keep managing symptoms with no explanation for what's causing them.
              </p>
              <p className="font-semibold text-primary">
                Let's find out what your gut is actually dealing with — and treat it properly.
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
export default IBSNaturopathy;
