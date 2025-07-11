import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Diabetes = () => {
  return (
    <>
      <Helmet>
        <title>5-Star Naturopath Diabetes Support in Brisbane</title>
        <meta name="description" content="Tired of, or stuck with blood sugar issues? Our naturopath diabetes support will find the root cause of your problems,—so you can be calm and in control again." />
      </Helmet>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopath for Diabetes in <span className="text-primary">Brisbane</span> | Natural Support That Works
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopath having consultation with female patient at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/39b7f717-8cae-400f-8062-def9a15add9b.png" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                      <div>
                        <p className="font-semibold text-sm">Diabetes Support</p>
                        <p className="text-xs text-muted-foreground">Natural • Holistic Health</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://nxtlvlhealth.com.au/book-now/" 
                  className="inline-flex items-center justify-center text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium transition-colors"
                >
                  <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-center">Book an Appointment Today</span>
                </a>
                <a 
                  href="tel:0731808853" 
                  className="inline-flex items-center justify-center text-base sm:text-lg px-4 py-3 h-auto border border-border bg-background hover:bg-muted rounded-md font-medium transition-colors"
                >
                  <svg className="mr-2 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Call Mitch
                </a>
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
                src="/lovable-uploads/39b7f717-8cae-400f-8062-def9a15add9b.png" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  <div>
                    <p className="font-semibold">Diabetes Support</p>
                    <p className="text-sm text-muted-foreground">Natural • Holistic Health</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Still Struggling With Blood Sugar, Even Though You're Doing Everything Right?</h2>
          </div>

          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/faa446bf-e101-44fd-a31d-5619fbc7ff3e.png" 
              alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  You eat well. You exercise. You follow the advice. But your blood sugar still won't stay stable—and you don't feel like yourself.
                </p>
                <p>
                  If that sounds familiar, you're not alone. At NXTLVL Health, we help people just like you take back control with natural, simple care that makes sense.
                </p>
                <p>
                  Our <strong>naturopath diabetes</strong> service focuses on treating the root cause of your symptoms—not just managing the numbers. Whether you've been diagnosed with <strong>type 2 diabetes</strong>, <strong>pre-diabetes</strong>, or <strong>insulin resistance</strong>, we'll build a plan that works with your body and your life.
                </p>
                <p>
                  You'll get personal, professional care from Brisbane naturopath Mitch Potts, who has years of experience helping clients feel stronger, lighter, and more in control.
                </p>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/faa446bf-e101-44fd-a31d-5619fbc7ff3e.png" 
                alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Different Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How Diabetes Naturopathy Is Different</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Most standard diabetes care focuses on lowering your blood sugar with medications. While this is important, it doesn't always fix the <strong>underlying causes</strong>—like hormone problems, gut issues, stress, or poor sleep.
              </p>
              <p>
                At NXTLVL Health, we take a <strong>holistic approach</strong>. That means we look at your full health picture: your lifestyle, your symptoms, your <strong>medical history</strong>, and what's worked—or hasn't worked—before.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <img 
              src="/lovable-uploads/bd169e16-b7bf-4db3-bf47-e01fffad1dbb.png" 
              alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">We focus on:</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Improving <strong>insulin sensitivity</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Reducing <strong>inflammation</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Supporting your <strong>energy, mood, and sleep</strong></p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Helping with <strong>weight loss</strong>, naturally</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Lowering your <strong>risk of heart disease</strong> and other complications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Might Benefit Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Signs You Might Benefit from Naturopathic Diabetes Support</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              You may want to book a consult if you:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Have been diagnosed with <strong>type 2 diabetes</strong>, <strong>insulin resistance</strong>, or <strong>pre-diabetes</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Experience blood sugar highs and lows</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Struggle with weight gain or <strong>abdominal fat</strong></p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Feel tired, foggy, or unmotivated most days</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Have <strong>cravings</strong>, poor sleep, or mood swings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Want to reduce <strong>cardiovascular disease risk</strong> or improve your <strong>overall health</strong></p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="https://www.healthcentral.com/condition/diabetes/naturopathy-diabetes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline font-medium"
              >
                Learn more about how Naturopathy helps with Diabetes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approach Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What's Included in Your Diabetes Naturopathy Treatment</h2>
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                  <span>A Deep Dive Into Your Health</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Your first consultation lasts up to 75 minutes. Mitch will take the time to listen, ask questions, and understand your full story.
                </p>
                <p className="text-lg text-muted-foreground">
                  We'll talk about your symptoms, <strong>family history</strong>, stress, sleep, <strong>dietary habits</strong>, and more. You'll feel heard—and never rushed.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                  <span>Functional Testing (If Needed)</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  To understand what's happening inside your body, we may recommend simple testing such as:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-muted-foreground"><strong>HbA1c and fasting insulin</strong> (to assess blood sugar regulation)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-muted-foreground"><strong>Nutrient levels</strong> like magnesium, B vitamins, and chromium</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-muted-foreground"><strong>Hormone testing</strong> (thyroid, cortisol, oestrogen)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-muted-foreground">Tests for <strong>gut health</strong> or <strong>inflammation</strong></p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground">
                  We only recommend what will help and always explain what each result means.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                  <span>A Personalised Diabetes Treatment Plan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Based on your needs, we'll create a custom step-by-step plan that fits your life. This may include:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-muted-foreground">A <strong>healthy diet</strong> designed to keep blood sugar stable</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-muted-foreground"><strong>Natural remedies</strong> and <strong>herbal medicine</strong> to support metabolism and hormone balance</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-muted-foreground"><strong>Natural supplements</strong> to reduce cravings and boost energy</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-muted-foreground"><strong>Gut and liver support</strong> to improve nutrient use and insulin response</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-muted-foreground">Tools for <strong>stress management</strong> and better sleep</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
                  <span>Ongoing Support That Keeps You On Track</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-muted-foreground">Regular check-ins to track progress</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-muted-foreground">Adjustments to your plan based on how your body responds</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-muted-foreground">Mindset and emotional support to stay motivated</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-muted-foreground">Practical changes that are realistic and long-lasting</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Health Impact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How Diabetes Affects More Than Just Your Blood Sugar</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Diabetes is a <strong>chronic condition</strong> that affects more than your glucose levels. It can impact your <strong>mental health</strong>, your sleep, your weight, and even your heart and kidneys.
              </p>
              <p>
                Our approach supports your whole body and reduces the <strong>risk of complications</strong> like:
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground"><strong>Kidney damage</strong> or <strong>nerve damage</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground"><strong>Cardiovascular disease</strong></p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground"><strong>High cholesterol</strong> or <strong>high blood pressure</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground"><strong>Fatty acid</strong> build-up and <strong>poor glucose uptake</strong></p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground">
                We help you make small, natural shifts that protect your long-term health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose NXTLVL Health for Diabetes Naturopathy?</h2>
          </div>

          <div className="mb-12">
            <img 
              src="/lovable-uploads/e2d3e454-5ff4-4045-bda9-1c51e346a2b2.png" 
              alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Led by Mitch Potts, a trusted expert in <strong>naturopathic medicine</strong> and functional care</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Whole-person support that goes beyond <strong>blood sugar control</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Focus on sustainable lifestyle changes, not just quick fixes</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Advanced testing when needed, clear explanations always</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Available <strong>in-clinic</strong> in New Farm or via <strong>online consultations</strong></p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-center">We Work With Clients Managing:</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground"><strong>Type 2 diabetes mellitus</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground"><strong>Insulin resistance</strong> and <strong>pre-diabetes</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground"><strong>Gestational diabetes</strong></p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground"><strong>Metabolic syndrome</strong> or autoimmune conditions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground"><strong>Weight loss</strong> challenges linked to insulin and hormone imbalances</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Take the First Step Toward Better Health</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              If you're tired of trying to manage your diabetes on your own, we're here to help. With the right guidance, you can feel better, think clearer, and live with more energy and confidence.
            </p>
            
            <div className="max-w-3xl mx-auto mb-8 space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">✨</span>
                <p className="text-lg font-semibold">Book Your Diabetes Naturopathy Consultation Today</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">✨</span>
                <p className="text-lg font-semibold">Chat with Mitch to Learn What's Right for You</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">✨</span>
                <p className="text-lg font-semibold">Start a Natural Treatment Plan That Finally Works</p>
              </div>
            </div>

            <p className="text-lg font-semibold text-muted-foreground max-w-3xl mx-auto mb-8">
              👉 Book online or call now to schedule your initial consultation at NXTLVL Health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://nxtlvlhealth.com.au/book-now/" 
                className="inline-flex items-center justify-center text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium transition-colors"
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book an Appointment Today
              </a>
              <a 
                href="tel:0731808853" 
                className="inline-flex items-center justify-center text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3 border border-border bg-background hover:bg-muted rounded-md font-medium transition-colors"
              >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call Mitch
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Diabetes;
