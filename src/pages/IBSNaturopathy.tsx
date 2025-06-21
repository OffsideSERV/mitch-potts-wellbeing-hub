
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Shield } from "lucide-react";

const IBSNaturopathy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  IBS Naturopath | <span className="text-primary">Natural Relief</span> for Irritable Bowel Syndrome
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Woman consulting with naturopath for IBS" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">IBS Natural Treatment</p>
                        <p className="text-xs text-muted-foreground">Digestive Health • Natural Relief</p>
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
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-center">Book a Free 15-Min Consult!</span>
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
                <script defer async src='https://cdn.trustindex.io/loader.js?7985f8c47d89745a18661502ab0'></script>
              </div>
            </div>
            
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                alt="Woman consulting with naturopath for IBS" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">IBS Natural Treatment</p>
                    <p className="text-sm text-muted-foreground">Digestive Health • Natural Relief</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feel Like Yourself Again Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Feel Like Yourself Again With Natural IBS Support</h2>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Sad-woman-dealing-with-gut-issues-and-bloating-scaled.jpeg" 
              alt="Woman sitting on her coach sad about IBS problems" 
              className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                Do you feel like your tummy is always upset? Are you tired of the bloating, cramping, and rushing to the toilet—or feeling stuck and not going at all? You're not alone. Many people feel this way, and it can be hard. But there's help.
              </p>
              <p>
                At NXTLVL Health, we help people with irritable bowel syndrome (IBS) feel better using natural options. We work with you to understand what's really going on in your digestive system and make a plan that helps.
              </p>
              <p>
                Our <strong>IBS naturopath</strong> service is gentle, caring, and focused on the root cause of your symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is IBS Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Is IBS?</h2>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
              alt="Naturopath having a consult with patient for gut problems" 
              className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed text-center">
              <p>
                <strong>Irritable bowel syndrome</strong>, or IBS, is a common gut condition. It affects how your bowel moves and how your tummy feels. Irritable Bowel Syndrome (IBS) is a functional gastrointestinal disorder that affects the large intestine. IBS symptoms can include:
              </p>
            </div>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {[
                    "Abdominal pain",
                    "Bloating and gas",
                    "Irregular bowel movements (diarrhoea, constipation, or both)",
                    "Cramping",
                    "Feeling like you haven't finished going"
                  ].map((symptom, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">{symptom}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-lg text-muted-foreground leading-relaxed text-center">
              <p>
                These digestive symptoms can come and go. Some days are fine. Other days, it's hard to leave the house.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Causes IBS Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Causes IBS?</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Doctors don't always know the exact cause of IBS. But we do know some things that can play a part: the exact cause of IBS is unclear, but factors such as diet, stress, and hormonal changes are known to trigger symptoms.
            </p>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-showing-patient-results-on-a-computer-scaled.jpeg" 
              alt="Naturopath showing test results to patient on a computer" 
              className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid gap-6">
              {[
                "Gut issues like small intestinal bacterial overgrowth (SIBO), which is commonly found in patients with IBS",
                "Food sensitivities or food intolerances",
                "Stress hormones and nervous system imbalances",
                "Gut motility problems (how food moves through your gut)",
                "Hormonal imbalances (especially in women)",
                "Inflammatory markers and low-grade inflammation"
              ].map((cause, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Activity className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-lg">{cause}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-lg text-muted-foreground text-center">
              <p>
                In some cases, past infections or trauma can also trigger symptoms. It's a complex condition—but that's why we take a deeper look.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button 
              asChild 
              className="text-base sm:text-lg px-6 py-4 h-auto"
            >
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* A Different Way to Help IBS Patients Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Different Way to Help IBS Patients</h2>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" 
              alt="Naturopath smiling while doing paperwork at his desk" 
              className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                Many people with IBS have tried <strong>conventional medicine</strong> without long-term results. Some take pharmaceutical treatments that don't solve the root issue. Others are told to just "manage stress" or "eat more fibre."
              </p>
              <p>
                But treating IBS isn't one-size-fits-all.
              </p>
              <p>
                At NXTLVL Health, we do things differently.
              </p>
              <p>
                Our <strong>naturopathic approaches</strong> look at the whole person—your symptoms, lifestyle, health history, and even emotions. We ask questions like:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Brain, text: "What foods trigger symptoms?" },
                { icon: Heart, text: "Are there hormonal or stress-related patterns?" },
                { icon: Activity, text: "Is your gut flora balanced?" },
                { icon: Shield, text: "Do you have intestinal permeability, also known as 'leaky gut', or signs of inflammatory bowel diseases like ulcerative colitis?" }
              ].map((question, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <question.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{question.text}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                Once we understand what's going on, we create a <strong>tailored treatment plan</strong> that fits your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Treatment Options Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural Treatment Options We Use</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We use many gentle, safe, and <strong>natural treatment options</strong> to support <strong>IBS patients</strong>:
            </p>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4503-scaled.jpeg" 
              alt="Naturopath talking to female patient with 3 bottles of natural tonics and herbs in his hands" 
              className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Herbal Medicine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Herbs like <strong>lemon balm</strong>, peppermint, and slippery elm can help calm the <strong>digestive tract</strong>, reduce inflammation, and ease spasms. Additionally, chamomile is another herb that can help reduce cramping and pain associated with IBS.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Nutritional Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Some people need extra nutrients or <strong>digestive enzymes</strong> to help with <strong>gut function</strong>. Others benefit from cutting back on <strong>processed foods</strong> and following a <strong>low FODMAP diet</strong>, which can help reduce symptoms in IBS patients by eliminating certain carbohydrate-containing foods.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Identifying Triggers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Through diet tracking, testing, and talking with you, we help find the <strong>specific triggers</strong> that set off your symptoms—like dairy, gluten, or sugar alcohols.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Stress Management Techniques</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    IBS is often linked to the <strong>nervous system</strong>. Stress can <strong>exacerbate symptoms</strong> or even cause <strong>IBS flare ups</strong>. <strong>Stress management techniques</strong>, such as mindfulness and meditation, can help reduce IBS flare-ups. We teach simple, calming tools to help your body relax.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Lifestyle Changes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sometimes, small tweaks—like getting <strong>adequate hydration</strong>, walking daily, or improving sleep—can have a big effect. Regular exercise can significantly improve IBS symptoms as well.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Vicious Cycle of IBS Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Vicious Cycle of IBS</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              If you have IBS, you might feel like you're stuck in a loop:
            </p>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/AdobeStock_1076682494-scaled.jpeg" 
              alt="Woman holding her gut in pain" 
              className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {[
                    "You eat something.",
                    "You feel pain or bloated.",
                    "You feel anxious about symptoms.",
                    "Your stress hormones rise.",
                    "That makes the symptoms worse."
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-lg text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                It's a <strong>vicious cycle</strong>—but you don't have to stay in it. We help break that cycle by supporting both the gut and the mind.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button 
              asChild 
              className="text-base sm:text-lg px-6 py-4 h-auto"
            >
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Happens at Your Consult Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Happens at Your IBS Naturopath Consult?</h2>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
              alt="Naturopath looking through microscope" 
              className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-1 gap-8">
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Your First Visit:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">We talk about your <strong>IBS symptoms</strong>, health history, and daily routine.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">We may suggest tests to look for <strong>underlying factors</strong>, like <strong>pathogenic microbes</strong> or <strong>inflammatory markers</strong>.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">We create a clear, kind plan to move forward.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Follow-Up Visits:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">We adjust your <strong>treatment plan</strong> based on how you're feeling.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">We talk about what's working and what's not.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">We stay with you, every step of the way.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                You'll feel heard. You'll feel understood. And you'll feel supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Health Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose NXTLVL Health?</h2>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-doing-work-at-desk-scaled.jpg" 
              alt="Naturopath doing paperwork at desk" 
              className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {[
                "We're known for helping with digestive disorders, especially irritable bowel syndrome IBS.",
                "Our approach is grounded in naturopathic medicine and guided by scientific research.",
                "We take our time. You're not rushed.",
                "Our goal is to improve your quality of life, not just reduce symptoms.",
                "We're local, friendly, and deeply caring."
              ].map((benefit, index) => (
                <Card key={index} className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* You Deserve to Feel Better Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">You Deserve to Feel Better</h2>
          </div>

          {/* Image right under heading */}
          <div className="mb-16">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-checking-blood-pressure-of-patient-scaled.jpeg" 
              alt="Naturopath checking blood pressure of a female patient" 
              className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                IBS isn't "just in your head." It's real. It can affect your work, your social life, your confidence, and your happiness. <strong>Intestinal permeability</strong>, or 'leaky gut', may also contribute to IBS symptoms, further complicating its impact on daily life.
              </p>
              <p>
                But there is help. And there is hope.
              </p>
              <p>
                If you're looking for a <strong>natural treatment</strong> that actually makes sense, works with your body, and doesn't rely only on <strong>pharmaceutical treatments</strong>, we're here.
              </p>
            </div>

            <Card className="bg-muted/50 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">With the right support, you can:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Reduce bloating and abdominal pain",
                    "Improve your bowel movements",
                    "Heal your digestive system",
                    "Feel more energy",
                    "Regain trust in your body",
                    "Benefit from probiotics, which can improve digestion for some people with IBS"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button 
              asChild 
              className="text-base sm:text-lg px-6 py-4 h-auto"
            >
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                We'd love to help you find relief.
              </p>
              <p>
                Book your <strong>initial consultation</strong> with Mitch at NXTLVL Health today. Let's find the <strong>root cause</strong>, ease your <strong>IBS symptoms</strong>, and give you a plan for real, lasting healing.
              </p>
              <p>
                You don't have to live with digestive pain forever.
              </p>
              <p className="font-semibold text-primary">
                Let's get your gut—and your life—back on track.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
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
                  Call Mitch Today
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IBSNaturopathy;
