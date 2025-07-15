
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Phone, 
  CheckCircle, 
  Heart, 
  Users, 
  Target,
  Leaf,
  Zap,
  Shield,
  Microscope,
  Stethoscope,
  Activity
} from "lucide-react";

const BulimbaNaturopathy = () => {
  return (
    <>
      <SEO 
        title="Best Naturopath Bulimba | Book a FREE 15-Min Consult!"
        description="Looking for a naturopath near Bulimba? NXTLVL Health offers natural, personalised care to help you feel better, fast. Book your free 15-min consult today."
        canonical="/areas-we-serve/naturopath-bulimba"
        keywords="naturopath Bulimba, Bulimba naturopathy, natural health Bulimba, holistic health Bulimba Brisbane"
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="space-y-8 lg:mt-0 mt-12">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    Naturopath Bulimba | <span className="text-primary">Natural Health Solutions</span> Near You
                  </h1>
                  
                  {/* Mobile Image */}
                  <div className="relative lg:hidden mb-8 -mx-4">
                    <img 
                      alt="Naturopath having consultation with female patient at NXTLVL Health" 
                      className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                      src="/lovable-uploads/84b53da1-9f6d-44e1-83af-7bfa206f9225.png"
                    />
                    <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                      <div className="flex items-center space-x-3">
                        <Heart className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold text-sm">Natural Health Solutions</p>
                          <p className="text-xs text-muted-foreground">Root-Cause • Holistic Care</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight"
                  >
                    <a href="https://nxtlvlhealth.com.au/book-now/">
                      <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                      <span className="text-center">Book an Appointment Today</span>
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild 
                    className="text-base sm:text-lg px-4 py-3 h-auto"
                  >
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
                <img 
                  alt="Naturopath having consultation with female patient at NXTLVL Health" 
                  className="rounded-2xl shadow-2xl w-full h-auto" 
                  src="/lovable-uploads/84b53da1-9f6d-44e1-83af-7bfa206f9225.png"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">Natural Health Solutions</p>
                      <p className="text-sm text-muted-foreground">Root-Cause • Holistic Care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Looking for a trusted naturopath Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Looking for a trusted naturopath near Bulimba?</h2>
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden mb-12">
              <img 
                src="/lovable-uploads/e1bffcd2-1723-4e18-a2c9-90dd88842aa7.png" 
                alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto mx-auto"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    If you're tired of feeling unwell, stuck in a cycle of symptoms, or frustrated with answers like "everything looks normal," you're not alone. At <strong>NXTLVL Health</strong>, we help people from <strong>Bulimba</strong> and surrounding Brisbane suburbs get real answers and real results — naturally.
                  </p>
                  <p>
                    Whether you're dealing with <strong>gut health</strong> issues, fatigue, anxiety, skin concerns, or something you can't quite explain, our naturopathic clinic is here to help you feel like yourself again.
                  </p>
                  <p>
                    Led by <strong>Mitchell Potts</strong>, an experienced naturopath with a special interest in complex and unresolved health issues, NXTLVL Health offers evidence-based, personalised care that gets to the root of your symptoms. <strong>Naturopathy</strong> is a holistic approach to wellness based on the principle that your body has the inherent ability to heal itself.
                  </p>
                  <p>
                    And even though our <strong>wellness clinic</strong> is located just across the river in <strong>New Farm</strong>, we regularly work with clients from <strong>Bulimba</strong> who want answers, solutions, and a clear plan forward.
                  </p>
                </div>
              </div>
              {/* Desktop Image */}
              <div className="relative hidden lg:block">
                <img 
                  src="/lovable-uploads/e1bffcd2-1723-4e18-a2c9-90dd88842aa7.png" 
                  alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why People Choose NXTLVL Health Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why People in Bulimba Choose NXTLVL Health</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>
                  Finding the right <strong>naturopath in Bulimba</strong> can be overwhelming. You want someone who listens, understands, and actually helps — not someone who throws supplements at you and sends you on your way.
                </p>
                <p>
                  At NXTLVL Health, we do things differently.
                </p>
                <p>
                  We take the time to deeply understand your body, your story, and your goals. We run <strong>functional testing</strong> where needed, use real-time tools like <strong>live blood analysis</strong>, and build a <strong>treatment plan</strong> tailored to your body — not a generic protocol. Understanding clients' <strong>health history</strong> helps to create effective health plans.
                </p>
                <p>
                  Mitch's approach blends <strong>natural medicines</strong>, <strong>nutritional therapy</strong>, and <strong>lifestyle advice</strong> with years of <strong>clinical experience</strong> and a deep commitment to helping people feel better for good.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/a61f4af0-26d7-4e2a-9676-a409bfb6d550.png" 
                alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
              />
            </div>
          </div>
        </section>

        {/* Meet Your Naturopath Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Your Naturopath – Mitch Potts</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>
                  Mitch is a fully qualified <strong>naturopath</strong> with a background in <strong>health science</strong>, personal training, and <strong>nutrition</strong>. He's helped hundreds of people across Brisbane — including many from <strong>Bulimba</strong> — get real relief from the <strong>health problems</strong> holding them back.
                </p>
                <p>
                  His clients often say, "I wish I'd found this clinic sooner."
                </p>
                <p>
                  Why? Because Mitch takes the time to look deeper. He listens. He doesn't just treat <strong>symptoms</strong> — he works to uncover the root causes so you can feel stronger, clearer, and in control again.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">His special interest areas include:</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Target className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Digestive Health</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <strong>IBS, bloating, reflux, SIBO</strong>
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Zap className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Mental Health</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <strong>Anxiety, stress, and depression</strong>
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Skin Conditions</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <strong>Acne and eczema</strong>
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Women's Health</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <strong>PMS, PCOS, endometriosis, perimenopause</strong>
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Activity className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Energy Support</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <strong>Chronic fatigue, burnout, and low energy</strong>
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Additional Support</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <strong>Pregnancy, sleep issues, autoimmune conditions</strong>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Holistic Approach Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Holistic, Science-Based Approach</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>
                  At NXTLVL Health, we combine traditional <strong>naturopathy</strong> with the best of modern science. This means you get the benefits of time-tested <strong>natural remedies</strong> like <strong>herbal formulas</strong> and food-based healing, backed by <strong>clinical testing</strong> and <strong>research</strong>.
                </p>
                <p>
                  We support the whole person — body, mind, and lifestyle — so you can make changes that last.
                </p>
              </div>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Leaf className="h-6 w-6 text-primary" />
                    <CardTitle>Your treatment plan may include:</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Personalised <strong>dietary advice</strong> and meal guidance</li>
                    <li>• High-quality <strong>natural supplements</strong> (not overloaded)</li>
                    <li>• Targeted <strong>herbal medicine</strong> blends</li>
                    <li>• Advice on stress, sleep, energy, and movement</li>
                    <li>• Real, practical <strong>lifestyle changes</strong> that fit your life</li>
                    <li>• Ongoing support and adjustments as your <strong>health</strong> improves</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    We always work at your pace, with your comfort and goals in mind. Whether you've been <strong>suffering</strong> for years or just want to improve your <strong>overall health</strong>, we're here to help.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">How We Help</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Many people come to NXTLVL Health after trying everything else. They've seen specialists, taken medications, followed diets — and still feel off.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-center">Digestive Health & Gut Support</h3>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Bloating, cramping, irregular bowels</li>
                      <li>• Food intolerances and sensitivities</li>
                      <li>• IBS, SIBO, reflux</li>
                      <li>• Ongoing nausea or discomfort after meals</li>
                      <li>• Nutrient absorption issues</li>
                    </ul>
                    <p className="text-muted-foreground">
                      Your <strong>gut</strong> is central to your <strong>well being</strong>. We look at your entire <strong>digestive system</strong> — and support it using <strong>herbal formulas</strong>, food-based healing, and stress support. Improving <strong>gut health</strong> can result in more energy and fewer gastrointestinal symptoms.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-center">Anxiety, Stress & Mental Health</h3>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Racing mind, overwhelm, panic</li>
                      <li>• Feeling tired but wired</li>
                      <li>• Mood swings or irritability</li>
                      <li>• Brain fog and lack of motivation</li>
                      <li>• Burnout or emotional fatigue</li>
                    </ul>
                    <p className="text-muted-foreground">
                      Modern life is stressful. We use tools that support the <strong>nervous system</strong> and hormones, helping you feel calmer, more focused, and emotionally steady — without needing to rely on medications alone. When one of the four pillars of <strong>health</strong> is out of sync, you can experience various health issues.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-center">Hormones & Women's Health</h3>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• PMS, PCOS, endometriosis</li>
                      <li>• Irregular or painful periods</li>
                      <li>• Fertility and <strong>pregnancy</strong> support</li>
                      <li>• Perimenopause and menopause</li>
                      <li>• Mood, sleep, and skin changes</li>
                    </ul>
                    <p className="text-muted-foreground">
                      Your hormones affect everything from sleep to energy to mood. We help <strong>women</strong> of all ages regain balance through <strong>natural medicines</strong>, <strong>nutrition</strong>, and cycle-specific support.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-center">Skin & Immune Conditions</h3>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Persistent acne, eczema, rashes</li>
                      <li>• Recurring colds, flu, or infections</li>
                      <li>• Autoimmune flare-ups</li>
                      <li>• Chronic inflammation or pain</li>
                    </ul>
                    <p className="text-muted-foreground">
                      Clear skin and a strong immune system start inside. We look at <strong>gut health</strong>, nutrient levels, and inflammation markers to build a plan that supports both short-term relief and long-term healing. Investigating <strong>gut dysbiosis</strong> can lead to improvements in <strong>overall health</strong> and <strong>wellness</strong>.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect as a Bulimba Client</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Step 1</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Free 15-Min Discovery Call</h4>
                  <p className="text-muted-foreground">
                    We start with a no-pressure phone call. You tell us what's going on, and we'll help you decide if <strong>naturopathy</strong> is right for you.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Step 2</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">In-Depth Initial Consult</h4>
                  <p className="text-muted-foreground">
                    Your first appointment runs for about 60–75 minutes. We explore your full <strong>health history</strong>, diet, lifestyle, symptoms, medications, and goals. We may recommend <strong>live blood analysis</strong> or functional testing if needed.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Step 3</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Personalised Treatment Plan</h4>
                  <p className="text-muted-foreground">
                    You'll receive a clear, easy-to-follow plan designed just for you. It may include <strong>herbal remedies</strong>, <strong>nutrition</strong> advice, <strong>stress</strong> support, and tailored <strong>lifestyle guidance</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Activity className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Step 4</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Follow-Up & Ongoing Care</h4>
                  <p className="text-muted-foreground">
                    We track your progress and make adjustments as needed. You'll never feel left behind — we walk this path with you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Serving Bulimba Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Serving the Bulimba Community (Even from Across the River)</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>
                  While <strong>NXTLVL Health</strong> is located in <strong>New Farm</strong>, our <strong>clinic</strong> is only a short drive or ferry ride from <strong>Bulimba</strong> — making it an easy option for locals who want real answers and personalised care.
                </p>
                <p>
                  Our clients come from all over <strong>Brisbane</strong>, but we regularly support individuals and families from <strong>Bulimba</strong> looking for a more natural, whole-person approach to <strong>wellness</strong>.
                </p>
                <p>
                  Prefer not to travel? No problem. We offer secure <strong>online consultations</strong> <strong>Australia</strong>-wide, so you can access expert <strong>naturopathic care</strong> from the comfort of your home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Clients Trust Us Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Clients from Bulimba Trust NXTLVL Health</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base">We listen and take your <strong>symptoms</strong> seriously</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base">We help people who've "tried everything" finally feel better</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base">We offer a calm, private, and supportive environment</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base">We create simple, achievable <strong>health plans</strong> — no overwhelm</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base">We use <strong>research</strong>-backed, <strong>evidence-based</strong> tools</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base">We genuinely care about helping you feel your best again</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Mitch's deep <strong>clinical experience</strong>, combined with a warm, down-to-earth approach, makes all the difference for people feeling lost or overlooked in other parts of the health system.
              </p>
            </div>
          </div>
        </section>

        {/* Is This You Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Is This You?</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Ask yourself:
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Are you tired of feeling tired all the time?</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Do you want to fix the root cause of your <strong>health issues</strong> — not just mask <strong>symptoms</strong>?</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Are your <strong>digestive issues</strong>, anxiety, or skin problems affecting your quality of life?</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Do you want support that considers your body, your <strong>lifestyle</strong>, and your emotional wellbeing?</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Are you ready to feel like yourself again?</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-center font-medium text-primary">
                      If yes, it's time to get help that actually helps.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Health Journey?</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
                <p>
                  You don't have to keep living in the cycle of <strong>symptoms</strong>, <strong>stress</strong>, and searching for answers. Whether you're managing <strong>digestive disorders</strong>, anxiety, skin conditions, or simply want to feel more vibrant day to day — we're here for you.
                </p>
                <p>
                  At <strong>NXTLVL Health</strong>, we work with clients from <strong>Bulimba</strong> and beyond to help them take control of their <strong>health</strong> naturally — and finally feel better in their bodies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3"
                >
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Free 15-Min Consult
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3"
                >
                  <a href="tel:0731808853">
                    <Phone className="mr-2 h-4 w-4" />
                    Call NXTLVL Health
                  </a>
                </Button>
              </div>
              <div className="mt-6 text-sm text-muted-foreground space-y-1">
                <p>📍 Just minutes from Bulimba — or online across Australia</p>
                <p>📞 Call NXTLVL Health: (07) 3180 8853</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BulimbaNaturopathy;
