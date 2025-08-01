import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Baby } from "lucide-react";

const NorthBrisbaneNaturopathy = () => {
  return (
    <>
      <SEO 
        title="Best Naturopath in North Brisbane | NXTLVL Health"
        description="Not feeling like yourself and not getting answers? Mitchell is a 5-star Naturopath in North Brisbane that will find and heal the root cause of your problems."
        canonical="/areas-we-serve/naturopath-north-brisbane"
        keywords="naturopath North Brisbane, naturopathy North Brisbane, natural health North Brisbane, holistic health North Brisbane"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopath <span className="text-primary">North Brisbane</span> | Natural Health Support Near You
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopath having consultation with female patient at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/d8fb55f4-1a1b-4a7f-9aef-fb782c41df21.png" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Natural Health Care</p>
                        <p className="text-xs text-muted-foreground">North Brisbane • Naturopathy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-0">
                <Button 
                  asChild 
                  className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight"
                >
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-center">Book an Appointment Today</span>
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
                <script defer async src='https://cdn.trustindex.io/loader.js?46476cb4757e774210564760f2f'></script>
              </div>
            </div>
            
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                alt="Naturopath having consultation with female patient at NXTLVL Health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/d8fb55f4-1a1b-4a7f-9aef-fb782c41df21.png" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Natural Health Care</p>
                    <p className="text-sm text-muted-foreground">North Brisbane • Naturopathy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struggling with Health Issues Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Struggling with ongoing health issues and looking for a natural solution that actually works?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/e1f6dd06-164a-425b-bc19-839d603bc5ed.png" 
              alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  If you're based in North Brisbane and you're searching for a qualified naturopath who listens, understands, and helps you get real results, then you're in the right place.
                </p>
                <p>
                  At NXTLVL Health, we work with clients from across Brisbane Northside, including Wavell Heights, Aspley, Chermside, and beyond. While we're not based directly in North Brisbane, our clinic is located just minutes away, and we're proud to be one of the leading naturopathic clinics serving the area. Whether you're looking for help with gut health, hormonal imbalances, chronic fatigue, or simply want to feel like yourself again, we're here to help you out.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/e1f6dd06-164a-425b-bc19-839d603bc5ed.png" 
                alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feel Seen and Heard Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Feel Seen, Heard, and Supported on Your Health Journey</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/d4dfb30d-6da4-42d6-86b4-14b51e4d4a8f.png" 
              alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  We know how frustrating it can be when you've tried "everything" but still don't feel right. You've probably been to doctors, tried some medications, maybe even tried changing your diet, but deep down, you know there's an underlying cause that hasn't been talked about.
                </p>
                <p>
                  That's where our naturopathic approach comes in.
                </p>
                <p>
                  Led by qualified naturopath Mitchell Potts, NXTLVL Health mixes evidence-based natural medicine with modern functional testing to find the root cause of your health problems, so you can finally feel clear, energised, and in control again.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/d4dfb30d-6da4-42d6-86b4-14b51e4d4a8f.png" 
                alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Help in North Brisbane</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Users, title: "Women's Health", description: "hormonal imbalances, PCOS, irregular periods, PMS, menopause" },
              { icon: Activity, title: "Digestive Disorders", description: "IBS, gut issues, bloating, constipation, diarrhoea, SIBO" },
              { icon: Baby, title: "Children's Health", description: "food sensitivities, digestive issues, fussy eating, mood swings" },
              { icon: Brain, title: "Mental Health Support", description: "anxiety, mood disorders, panic attacks, sleep issues" },
              { icon: Heart, title: "Chronic Conditions", description: "fatigue, autoimmune conditions, skin conditions, chronic pain" },
              { icon: Users, title: "Fertility and Pregnancy", description: "preconception care, pregnancy support, hormonal health" },
              { icon: Activity, title: "Weight Management", description: "weight gain, slow metabolism, food intolerance, insulin resistance" }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Whether you're looking for help with your digestive health, better day-to-day energy levels, or a more balanced menstrual cycle, we'll create you a personalised treatment plan that gives your body what it needs.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
              <a 
                href="https://www.healthhealingwellness.net.au/naturopathy/information/benefits-of-naturopathy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline"
              >
                Learn more about what Naturopathy helps with
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* What Makes NXTLVL Health Different Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Makes NXTLVL Health Different?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Root-Cause Focus: We don't mask your symptoms, we dig deep to understand what's driving your health problems.",
              "Years of Experience: With extensive experience in naturopathic medicine and nutritional therapy, Mitch is a trusted figure for those looking for a long-term fix to their problems.",
              "Qualified, Personalised Care: We tailor every treatment plan to your background, lifestyle, medical history, current symptoms, and health goals.",
              "Functional Testing: Where needed, we offer targeted blood tests, hormone panels, digestive tests, and more to get precise insights.",
              "Gentle, Natural Solutions: We use the highest quality nutritional supplements and herbal remedies that are clinically backed and safe.",
              "Convenient Access: While not located in North Brisbane, our clinic is a very short drive away, making it easy for you to receive the care you deserve."
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wide Range of Health Concerns Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">We Support a Wide Range of Health Concerns</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Gut Health: SIBO, IBS, ulcerative colitis, abdominal pain, food intolerances",
              "Skin Conditions: eczema, acne, psoriasis, dermatitis linked to internal inflammation",
              "Hormonal Imbalances: thyroid health, PCOS, PMS, painful periods, menopause",
              "Immune Function: poor immunity, frequent colds, autoimmune conditions",
              "Nervous System Support: chronic stress, adrenal fatigue, mood disorders",
              "Weight Loss & Metabolism: weight gain, metabolic resistance, insulin sensitivity",
              "Children's Health: mood swings, sleep issues, immune concerns, fussy eaters"
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We take the time to understand the why behind your symptoms, and work with you to restore balance from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included in Consultation Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What's Included in Your Naturopathic Consultation</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/1bfb1d77-659c-4abb-bf46-dbc9c76fb806.png" 
              alt="Naturopath showing patient results on a computer at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "A comprehensive initial consultation (up to 75 minutes)",
              "Detailed case taking: symptoms, family history, lifestyle, and health goals",
              "Review of any past blood tests or medical reports",
              "Targeted functional testing (only if needed)",
              "A clear, step-by-step treatment plan tailored to your body",
              "Nutritional guidance and lifestyle changes to support long-term health",
              "Ongoing support and reviews to track your progress"
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Natural Therapies & Treatments Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural Therapies & Treatments We Use</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Herbal Medicine: High-quality plant-based remedies to regulate hormones, calm inflammation, and support the nervous system",
              "Nutritional Medicine: Food-based strategies and targeted supplements to support gut healing, immunity, and nutrient absorption",
              "Functional Testing: Stool analysis, hormone panels, Organic Acids Testing, and more to identify imbalances",
              "Naturopathic Treatments: Evidence-informed therapies that support physical and mental wellbeing without harsh interventions",
              "Lifestyle Coaching: Sustainable lifestyle changes that align with your real-world routine"
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We mix modern science with a gentle, holistic approach to help you achieve optimal health the natural way.
            </p>
          </div>
        </div>
      </section>

      {/* Serving Brisbane Northside Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Serving Brisbane Northside With Real Results</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Many of our clients come from suburbs across North Brisbane, including:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {[
              "Wavell Heights",
              "Chermside", 
              "Aspley",
              "Northgate",
              "Nundah",
              "Stafford",
              "Bridgeman Downs",
              "Geebung",
              "Kedron"
            ].map((suburb, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <span className="text-muted-foreground font-medium">{suburb}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Even if you're located slightly further out, you're not too far from getting help that makes a massive difference in your life. Our New Farm clinic is just a short trip away, or you can even book a telehealth consult from the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your Naturopath Consultation Near North Brisbane</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              If you're tired of not feeling like yourself, feeling unheard, and being confused by advice online, now's the time to make a change. Working with a naturopath near North Brisbane could be your next step toward becoming the best version of yourself.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://nxtlvlhealth.com.au/book-now/">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Your Consultation Today
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
    </>
  );
};

export default NorthBrisbaneNaturopathy;
