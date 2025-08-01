import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Activity, Brain, Zap, Target, Users, Shield } from "lucide-react";

const NaturopathicSportsMedicine = () => {
  return (
    <>
      <SEO 
        title="Naturopathic Sports Medicine in Brisbane | Book a FREE 15-Min Consult!"
        description="Improve recovery, boost performance, and treat the root cause with naturopathic sports medicine in Brisbane. Book your free 15-min consult today."
        canonical="/what-we-treat/naturopathic-sports-medicine"
        keywords="naturopathic sports medicine Brisbane, sports naturopath, athlete recovery, sports performance, natural sports medicine, holistic sports health"
        serviceSchema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://nxtlvlhealth.com.au/what-we-treat/naturopathic-sports-medicine#service",
          "name": "Naturopathic Sports Medicine Brisbane",
          "description": "Natural, science-based sports medicine for athletes. Our holistic approach supports athletic performance, recovery, injury prevention, and overall health using nutritional medicine, herbal therapies, and functional testing to address root causes.",
          "provider": {
            "@type": "Organization",
            "@id": "https://nxtlvlhealth.com.au/#organization"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Brisbane"
            },
            {
              "@type": "City", 
              "name": "New Farm"
            },
            {
              "@type": "City",
              "name": "Clayfield"
            },
            {
              "@type": "City",
              "name": "Hamilton"
            }
          ],
          "category": "Sports Naturopathy",
          "serviceType": "Athletic Performance and Sports Health",
          "offers": [
            {
              "@type": "Offer",
              "name": "Free 15-Minute Sports Medicine Consultation",
              "description": "Complimentary consultation to discuss your athletic performance concerns, recovery challenges, and determine if naturopathic sports medicine is right for you.",
              "price": "0",
              "priceCurrency": "AUD",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "Initial Sports Medicine Consultation",
              "description": "Comprehensive 75-minute consultation including detailed assessment of athletic performance, training history, recovery patterns, and personalised treatment planning for optimal sports health.",
              "price": "210",
              "priceCurrency": "AUD",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer", 
              "name": "Follow-up Sports Medicine Consultation",
              "description": "Ongoing support and treatment plan adjustments to monitor athletic progress, optimise performance, and maintain peak health throughout training cycles.",
              "price": "120",
              "priceCurrency": "AUD",
              "availability": "https://schema.org/InStock"
            }
          ],
          "audience": {
            "@type": "Audience",
            "audienceType": "Athletes, sports enthusiasts, and active individuals seeking natural performance enhancement and injury prevention"
          },
          "availableChannel": [
            {
              "@type": "ServiceChannel",
              "serviceLocation": {
                "@type": "Place",
                "@id": "https://nxtlvlhealth.com.au/#location"
              }
            },
            {
              "@type": "ServiceChannel"
            }
          ],
          "hoursAvailable": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:00"
            },
            {
              "@type": "OpeningHoursSpecification", 
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "13:00"
            }
          ]
        }}
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="space-y-8 lg:mt-0 mt-12">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    Naturopathic Sports Medicine Brisbane | <span className="text-primary">Reach Peak Performance</span> with Natural Solutions
                  </h1>
                  
                  {/* Mobile Image */}
                  <div className="relative lg:hidden mb-8 -mx-4">
                    <img 
                      alt="Mitchell Potts, naturopathic sports medicine practitioner consulting with athlete at NXTLVL Health Brisbane" 
                      className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                      src="/lovable-uploads/39b7f717-8cae-400f-8062-def9a15add9b.png" 
                    />
                    <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                      <div className="flex items-center space-x-3">
                        <Target className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold text-sm">Sports Medicine</p>
                          <p className="text-xs text-muted-foreground">Natural Performance Enhancement</p>
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
                    <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                      <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-center">Book a FREE 15-Min Consult!</span>
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
                      Call (07) 3180 8853
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
                  alt="Mitchell Potts, naturopathic sports medicine practitioner consulting with athlete at NXTLVL Health Brisbane" 
                  className="rounded-2xl shadow-2xl w-full h-auto" 
                  src="/lovable-uploads/39b7f717-8cae-400f-8062-def9a15add9b.png" 
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Target className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">Sports Medicine</p>
                      <p className="text-sm text-muted-foreground">Natural Performance Enhancement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feel Like Your Body's Not Keeping Up Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Feel Like Your Body's Not Keeping Up With Your Training?</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center mb-16">
              <p>
                You train hard. You eat right. But something still feels off. Maybe your energy is low, you're not recovering fast enough, or small injuries keep coming back. You're doing all the right things — so why don't you feel your best?
              </p>
              <p>
                At <strong>NXTLVL Health</strong> in Brisbane, we offer <strong>naturopathic sports medicine</strong> that helps athletes like you perform better, recover faster, and feel stronger — naturally. Our goal is to treat the whole body and give you the tools to stay active, pain-free, and at your best.
              </p>
              <p>
                Whether you're a pro athlete or just love to train, our <strong>holistic approach</strong> is designed to support <strong>optimal health</strong> and <strong>athletic performance</strong> from the inside out.
              </p>
            </div>
          </div>
        </section>

        {/* What is Naturopathic Sports Medicine Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">What is Naturopathic Sports Medicine?</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-12">
              <p>
                <strong>Naturopathic sports medicine</strong> is a natural, science-based way of supporting athletes. It looks at the whole person — not just the symptoms. Instead of masking pain or fatigue, it works to find the root cause. <strong>Naturopathic sports medicine doctors</strong> specialize in treating a variety of health complaints specific to athletes, ensuring a tailored approach to their unique needs.
              </p>
              <p>
                Using tools like <strong>nutritional medicine</strong>, <strong>herbal medicine</strong>, <strong>functional testing</strong>, and lifestyle changes, we support every system in the body — digestion, hormones, immunity, energy, and the mind. Naturopaths create personalized <strong>treatment plans</strong> for athletes based on their specific nutritional needs, sporting goals, and <strong>health conditions</strong>.
              </p>
              <p>
                It's a <strong>comprehensive approach</strong> that works alongside your training and other therapies, helping your body heal and perform at its best.
              </p>
            </div>
          </div>
        </section>

        {/* Why Athletes Choose Naturopathic Medicine Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Athletes Are Turning to Naturopathic Medicine</h2>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-muted-foreground mb-8">
                Athletes push their bodies to the limit. Intense training, lack of recovery, and mental stress can all lead to:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  "Chronic fatigue or burnout",
                  "Repeated injuries",
                  "Muscle soreness that won't go away",
                  "Digestive problems",
                  "Low energy or motivation",
                  "Poor sleep",
                  "Hormone imbalances",
                  "Weakened immunity"
                ].map((issue, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{issue}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Proper digestion and absorption of nutrients is a key foundation in <strong>sports naturopathy</strong>, helping to address many of these issues.
                </p>
                <p>
                  Traditional <strong>sports medicine</strong> often focuses on short-term relief — painkillers, anti-inflammatories, or rest. But these don't always solve the deeper issue.
                </p>
                <p>
                  That's where <strong>naturopathic treatment</strong> comes in. We focus on the <strong>root causes</strong>, not just the symptoms, to help you heal, recover, and feel strong again.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Mitch Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Mitch – Your Sports Naturopath Who Actually Gets It</h2>
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden mb-12">
              <img 
                src="/lovable-uploads/778efa12-2a50-4463-9137-b9811fb860b1.png" 
                alt="Mitchell Potts, qualified naturopath and personal trainer, preparing herbal medicines for athletes at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    <strong>Mitchell Potts</strong> is a highly trained <strong>naturopath</strong>, personal trainer, and nutrition specialist based in <strong>New Farm, Brisbane</strong>. He knows what it's like to be an athlete — and he knows how frustrating it is when your body isn't responding like it should.
                  </p>
                  <p>
                    At <strong>NXTLVL Health</strong>, Mitch combines the latest in <strong>naturopathic sports medicine</strong> with real-world experience to help you achieve your <strong>health goals</strong>. Whether you're a <strong>professional athlete</strong> or just love moving your body, you'll get care that's built for your unique needs.
                  </p>
                </div>
              </div>
              {/* Desktop Image */}
              <div className="relative hidden lg:block">
                <img 
                  src="/lovable-uploads/778efa12-2a50-4463-9137-b9811fb860b1.png" 
                  alt="Mitchell Potts, qualified naturopath and personal trainer, preparing herbal medicines for athletes at NXTLVL Health Brisbane" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Holistic Approach Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Holistic Approach to Sports Performance</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-12">
              <p>
                We don't believe in one-size-fits-all plans. Every athlete is different — with different demands, stress levels, injuries, and goals. That's why we take a <strong>holistic perspective</strong> to your performance, treating both the physical and emotional sides of health.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { icon: Zap, title: "Energy support", description: "Fix fatigue and boost stamina" },
                { icon: Shield, title: "Injury prevention & recovery", description: "Heal faster, train better" },
                { icon: Heart, title: "Hormone balance", description: "For mood, motivation, and stress control" },
                { icon: Activity, title: "Digestive health", description: "Improve nutrient absorption and reduce bloating" },
                { icon: Shield, title: "Immunity", description: "Stay healthy and avoid illness" },
                { icon: Brain, title: "Mental clarity", description: "Focus better, reduce overwhelm" },
                { icon: Users, title: "Dietary advice", description: "Fuel your body the right way" },
                { icon: Heart, title: "Stress management", description: "Tools for calming the nervous system" }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <item.icon className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Our goal is to help you reach <strong>optimal performance</strong> by treating the whole person, not just a part of the body.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Makes Naturopathic Sports Medicine Different?</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Traditional <strong>sports medicine</strong> can be amazing for acute injuries — broken bones, torn ligaments, or serious trauma. But when it comes to chronic fatigue, repeated inflammation, or imbalances that don't show up in basic blood tests, it can leave athletes frustrated and without answers.
              </p>
              <p>
                <strong>Naturopathic doctors</strong> take the time to look deeper.
              </p>
              <p>
                Instead of just giving you another supplement or telling you to "rest," we explore all the pieces — your sleep, digestion, hormones, nervous system, lifestyle, and <strong>nutrition</strong>. We create a clear picture of what's really going on.
              </p>
              <p>
                Then, we design a <strong>treatment plan</strong> that actually works for your body and your sport.
              </p>
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Naturopathic Treatment Options at NXTLVL Health</h2>
            </div>

            <div className="space-y-12">
              {/* Nutritional Medicine */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Activity className="h-6 w-6 text-primary" />
                    <span>Nutritional Medicine</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We tailor your diet to support recovery, strength, and energy. You'll get <strong>dietary advice</strong> that's designed for your sport, goals, and body. We also use specific micronutrients and targeted <strong>supplements</strong> when needed.
                  </p>
                </CardContent>
              </Card>

              {/* Herbal Medicine */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <span>Herbal Medicine</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Using plant-based tools, we support your <strong>immune system</strong>, reduce inflammation, balance hormones, and improve stress resilience. Herbs can be incredibly effective for <strong>muscle recovery</strong>, mood, and energy without harsh side effects. Adaptogens, in particular, can modify stress hormones such as cortisol and support calming neurotransmitters, helping athletes manage high-pressure situations.
                    </p>
                  </CardContent>
                </Card>
                <div>
                  <img 
                    src="/lovable-uploads/778efa12-2a50-4463-9137-b9811fb860b1.png" 
                    alt="Herbal medicine preparation at NXTLVL Health for athletes and sports performance" 
                    className="rounded-2xl shadow-lg w-full h-auto" 
                  />
                </div>
              </div>

              {/* Live Blood Analysis */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="/lovable-uploads/c932dabd-3ac9-4dd4-b8f6-9e2595151e1a.png" 
                    alt="Live blood analysis microscope examination at NXTLVL Health for sports medicine assessment" 
                    className="rounded-2xl shadow-lg w-full h-auto" 
                  />
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Brain className="h-6 w-6 text-primary" />
                        <span>Functional Testing</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        We don't guess. We run advanced tests to assess hormones, <strong>gut health</strong>, nutrient levels, and inflammation markers — especially important for athletes with hidden imbalances affecting their <strong>performance</strong>.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Target className="h-6 w-6 text-primary" />
                        <span>Live Blood Analysis</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        In just one drop of blood, we can see signs of inflammation, digestion issues, and oxidative stress. It's an amazing tool for understanding your body in real time.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* MLS Laser Therapy */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Zap className="h-6 w-6 text-primary" />
                      <span>MLS Laser Therapy</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      If you're dealing with pain or injury, <strong>MLS laser therapy</strong> helps reduce inflammation and speed up healing — safely and without drugs. Great for <strong>manual therapy</strong> recovery and <strong>muscle relaxation</strong>. <strong>Naturopathic treatments</strong> also promote healing of muscle and tendon damage, addressing inflammation naturally.
                    </p>
                  </CardContent>
                </Card>
                <div>
                  <img 
                    src="/lovable-uploads/8f5feae9-391d-4644-af47-61593b7bc840.png" 
                    alt="MLS laser therapy treatment for sports injury recovery at NXTLVL Health Brisbane" 
                    className="rounded-2xl shadow-lg w-full h-auto" 
                  />
                </div>
              </div>

              {/* Personal Training */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-primary" />
                    <span>Personal Training & Lifestyle Coaching</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Because Mitch is also a qualified personal trainer, we offer lifestyle guidance and movement strategies that support your training while keeping <strong>recovery</strong> and <strong>injury prevention</strong> front and center.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Common Conditions Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Common Conditions We Help With</h2>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-muted-foreground mb-8">
                If you're experiencing any of the following, <strong>naturopathic sports medicine</strong> might be the missing piece:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  "Low energy or post-training burnout",
                  "Ongoing gut problems like bloating or poor digestion",
                  "Hormonal imbalances (e.g., low testosterone, high cortisol)",
                  "Stress-related fatigue",
                  "Repeated soft tissue injuries",
                  "Joint pain and inflammation",
                  "Frequent colds or low immunity",
                  "Anxiety or low mood from overtraining",
                  "Blood sugar crashes during workouts"
                ].map((condition, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{condition}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-lg text-muted-foreground text-center">
                These aren't random — they're signs that your body needs support. And we know how to treat them using natural, personalised care.
              </p>
            </div>
          </div>
        </section>

        {/* Is This for You Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Is This for You?</h2>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-muted-foreground mb-8 text-center">
                You don't need to be a <strong>professional athlete</strong> to benefit from <strong>naturopathic care</strong>. We work with:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  "Gym-goers and weekend warriors",
                  "Marathon runners and endurance athletes",
                  "CrossFit and HIIT athletes",
                  "Combat sports competitors",
                  "Dancers and performers",
                  "Sports parents and busy professionals",
                  "Anyone looking to improve their training results or recover better"
                ].map((group, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Target className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{group}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-lg text-muted-foreground text-center">
                If you want to feel strong, stay healthy, and train for life — this is for you.
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect at NXTLVL Health</h2>
            </div>

            {/* Centered Image */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/108aecf4-9e98-4025-803d-5e64dbd22b5b.png" 
                alt="Professional naturopathic consultation process at NXTLVL Health Brisbane for athletes" 
                className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  step: "Step 1: Free Discovery Call",
                  description: "We start with a 15-minute phone chat to learn about your symptoms, goals, and whether we're the right fit."
                },
                {
                  step: "Step 2: Comprehensive Testing and Assessment",
                  description: "We use live blood analysis and functional testing to build a complete picture of your current health."
                },
                {
                  step: "Step 3: Custom Treatment Plan",
                  description: "You'll receive a clear, step-by-step plan built around your sport, lifestyle, and body. This may include nutrition, herbs, testing, and movement strategies."
                },
                {
                  step: "Step 4: Ongoing Support and Adjustments",
                  description: "We'll check in regularly to assess progress and adjust your treatment plan as your training evolves or health changes."
                }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-primary">{item.step}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Mitch Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Work With Mitch?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Trained in naturopathic medicine and personal training",
                "Years of experience working with athletes of all levels",
                "Combines science, compassion, and clear results",
                "Focused on finding and treating the root cause — not just masking the symptoms",
                "Offers virtual and in-person consultations across Brisbane and Australia",
                "Known for making complex health challenges easy to understand and fix"
              ].map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Combining Approaches Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Combining Naturopathy with Traditional Sports Medicine</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                You don't have to choose between your GP, physio, or coach and your <strong>naturopathic doctor</strong>. In fact, it works better when you combine them.
              </p>
              <p>
                Our approach fits alongside your existing treatments, filling the gaps where traditional care can fall short. Many <strong>professional athletes</strong> now work with a team that includes a <strong>naturopath</strong>, because it delivers real, lasting results — for both <strong>performance</strong> and <strong>overall health</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Still Not Sure Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Still Not Sure?</h2>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-muted-foreground mb-8 text-center">Ask yourself:</p>

              <div className="grid md:grid-cols-1 gap-4 mb-12">
                {[
                  "Am I doing everything \"right\" but still feel off?",
                  "Do I recover slower than I used to?",
                  "Do I want to prevent injury instead of constantly chasing recovery?",
                  "Do I feel mentally or emotionally drained from training?",
                  "Do I feel like no one's actually listening to what I'm saying?"
                ].map((question, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{question}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-lg text-muted-foreground text-center">
                If you answered yes to even one of those, it's time to try something different.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Take the Next Step Toward Feeling Better, Training Smarter, and Reaching Your Peak</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
                <p>
                  You don't have to live with burnout, injuries, or frustration. Your symptoms are real. Your body is speaking — and we're here to listen.
                </p>
                <p>
                  Let's build a path that actually works — using the power of <strong>naturopathic sports medicine</strong> and care that's personalised, tested, and built just for you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild className="text-base sm:text-lg px-6 py-4">
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Book Your Free 15-Minute Consult Today
                  </a>
                </Button>
                <Button variant="outline" asChild className="text-base sm:text-lg px-6 py-4">
                  <a href="tel:0731808853">
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    Call NXTLVL Health: (07) 3180 8853
                  </a>
                </Button>
              </div>

              <div className="text-center text-muted-foreground">
                <p>📍 In-person at our Brisbane clinic or online Australia-wide</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NaturopathicSportsMedicine;
