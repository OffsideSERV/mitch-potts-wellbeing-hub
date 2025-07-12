import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Sparkles, Leaf, Stethoscope } from "lucide-react";

const NaturopathicNutritionist = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopathic Nutritionist | Natural, Personalised Health Support at <span className="text-primary">NXTLVL Health</span>
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopathic nutritionist consultation at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Leaf className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Naturopathic Nutrition</p>
                        <p className="text-xs text-muted-foreground">Natural • Science-Based • Personalised</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-center">Book a Free 15-Min Consult</span>
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
                alt="Naturopathic nutritionist consultation at NXTLVL Health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Leaf className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Naturopathic Nutrition</p>
                    <p className="text-sm text-muted-foreground">Natural • Science-Based • Personalised</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome to NXTLVL Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Welcome to NXTLVL Health: Where Food Meets Function</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/507d386f-e7d8-4e14-a144-56b40f6d528f.png" 
              alt="NXTLVL Health clinic Brisbane naturopathic nutrition" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Are you feeling tired, overwhelmed, or simply not yourself lately? Struggling with skin issues, gut problems, or stress? At NXTLVL Health, our focus is on restoring your health naturally—with food, lifestyle, and science.
                </p>
                <p>
                  Our Brisbane-based clinic is led by Mitch, a compassionate and experienced naturopathic nutritionist. Mitch blends evidence-based nutrition with naturopathic medicine to help you feel your best, support your body, and reach your health goals.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/507d386f-e7d8-4e14-a144-56b40f6d528f.png" 
                alt="NXTLVL Health clinic Brisbane naturopathic nutrition" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* CTA after first section */}
          <div className="text-center mb-16">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is a Naturopathic Nutritionist Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What is a Naturopathic Nutritionist?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" 
              alt="Naturopathic nutritionist consultation Brisbane NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  A naturopathic nutritionist is trained in both natural medicine and nutritional science. That means Mitch doesn't just recommend a one-size-fits-all diet—he looks at the whole picture of your health, including your symptoms, lifestyle, and medical history. Naturopathic nutritionists also use diagnostic tests to determine underlying health issues, ensuring a more targeted and effective approach.
                </p>
                <p>
                  This dual qualification offers a more scientifically based approach to nutrition that also honours the body's natural ability to heal. Unlike a clinical nutritionist who may focus only on food, or a naturopath who may not have advanced nutrition training, a naturopath nutritionist provides support that is balanced, practical, and deeply personalised.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" 
                alt="Naturopathic nutritionist consultation Brisbane NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Combining Herbal Medicine and Nutrition Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Combining Herbal Medicine and Nutrition</h2>
          </div>

          {/* New image right under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/f9825d69-c7b5-47cd-bd5f-c49c30aaa5e9.png" 
              alt="Naturopathic consultation with diagnostic equipment at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              At NXTLVL Health, we believe that nutrition and herbal medicine go hand in hand. Combining herbs with specific foods and supplements can create powerful changes in your health.
            </p>
            <p>
              Mitch uses therapeutic-grade herbs and scientifically backed nutrients to:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Calm inflammation",
                "Boost digestion",
                "Support hormone balance",
                "Reduce stress",
                "Improve energy"
              ].map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed mt-8">
            <p>
              This integrated, whole-person strategy leads to long-lasting results—not just temporary fixes.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Help</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/0aadec6a-7f1f-4a21-854c-39d8c3a218d0.png" 
              alt="Naturopathic nutritionist diagnostic testing NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-8">
            <p>
              Our patients are often struggling with ongoing health concerns or feeling like something is "off," even when tests come back "normal." Some common health conditions we support include:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Digestive disorders (bloating, IBS, reflux, constipation)",
                "Mental health concerns (anxiety, stress, fatigue)",
                "Skin conditions (acne, eczema, dermatitis)",
                "Hormonal issues (PMS, peri menopause, irregular cycles)",
                "Low energy and burnout",
                "Immune system issues"
              ].map((condition, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{condition}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA after third section */}
          <div className="text-center mt-16">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* A Holistic Approach Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Holistic Approach to Your Health</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/778efa12-2a50-4463-9137-b9811fb860b1.png" 
              alt="Holistic health approach naturopathic nutritionist NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              Our approach is rooted in naturopathic principles and nutritional medicine. That means we focus on the root cause of your symptoms, rather than just treating the surface. We look at all aspects of your health: mind, body, and lifestyle.
            </p>
            <p>
              Your care is built around:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Deep listening and thorough assessment",
                "Evidence-based solutions",
                "Personalised nutritional support",
                "Whole-person wellness planning"
              ].map((approach, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{approach}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect at Your First Appointment</h2>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              Your first consultation with Mitch is all about understanding your health history, current symptoms, and personal goals. Clients should find someone who takes the time to listen to them before an initial appointment, and Mitch ensures every patient feels heard and valued.
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Stethoscope className="h-6 w-6 mr-3" />
                  Initial Consultation Includes:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Comprehensive symptom review",
                    "Past and current diet analysis",
                    "Lifestyle and stress overview",
                    "Blood tests or other functional testing if needed"
                  ].map((include, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{include}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Activity className="h-6 w-6 mr-3" />
                  Functional Testing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    To better understand what's happening inside your body, Mitch may recommend: Naturopathic medicine employs both general pathology and functional pathology tests to provide a comprehensive view of your health.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Comprehensive blood tests",
                      "Nutrient deficiency analysis",
                      "Food intolerance testing",
                      "Gut microbiome mapping"
                    ].map((test, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{test}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    Testing helps identify the underlying cause of symptoms—so we can treat the root, not just the result.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personalised Plans Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Personalised Plans That Work With Your Life</h2>
          </div>

          {/* New image right under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/463a0285-13ee-4521-b12b-3153576f7b9a.png" 
              alt="Naturopathic nutritionist creating personalised treatment plans at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              After your assessment, you'll receive a customised plan that includes:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "A nutrition plan based on your body's needs",
                "Herbal medicine tailored to your symptoms",
                "Lifestyle and stress reduction techniques",
                "Meal planning and supplement guidance"
              ].map((plan, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{plan}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
            <p>
              Plans are always realistic, easy to follow, and designed to help you feel better without overwhelm.
            </p>
          </div>

          {/* CTA after fifth section */}
          <div className="text-center mt-16">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Clients Choose NXTLVL Health Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Clients Choose NXTLVL Health</h2>
          </div>

          {/* New image right under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/513ad908-d0fa-42db-97e1-3f4975f91e54.png" 
              alt="Naturopathic nutritionist with herbal medicine selection at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
            <p>
              NXTLVL Health is not your typical wellness centre. Here's why Brisbane locals trust us: Reviews are a fantastic way of gauging how well a Naturopath works with clients, and our patients consistently share positive feedback about their experiences with us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "We take the time to listen",
                "We personalise every recommendation",
                "We use evidence-based natural therapies",
                "We collaborate with your medical doctor if needed",
                "We help you achieve optimum health—not just the minimum"
              ].map((reason, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{reason}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Support Specific Health Conditions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How We Support Specific Health Conditions</h2>
          </div>

          {/* New image right under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/2bb8cdad-f87e-4aef-9585-14cde74ad162.png" 
              alt="Naturopathic nutritionist using microscope for diagnostic testing at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Activity className="h-6 w-6 mr-3" />
                  Digestive Disorders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Your gut is the centre of your health. If digestion isn't working, nothing else will feel quite right. We treat:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Bloating",
                      "Food sensitivities",
                      "Reflux",
                      "Constipation",
                      "Gut-brain axis dysfunction"
                    ].map((condition, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{condition}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Brain className="h-6 w-6 mr-3" />
                  Mental Health and Energy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Fatigue, brain fog, and anxiety often have nutritional and hormonal roots. Mitch supports your nervous system with:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Targeted nutritional support",
                      "Herbs for stress and resilience",
                      "Blood sugar and adrenal balancing"
                    ].map((support, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{support}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Heart className="h-6 w-6 mr-3" />
                  Hormonal Imbalance and Peri Menopause
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Whether it's irregular cycles, PMS, or peri menopause, hormonal health requires personalised care. We use:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Hormone-balancing foods",
                      "Herbal adaptogens",
                      "Lifestyle tools for sleep, energy, and mood"
                    ].map((treatment, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{treatment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Sparkles className="h-6 w-6 mr-3" />
                  Skin Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Acne, eczema, and other skin problems are often signs of deeper inflammation or detox issues. We help resolve:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Internal inflammation",
                      "Liver overload",
                      "Food triggers"
                    ].map((issue, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Users className="h-6 w-6 mr-3" />
                  Immune System Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Frequent infections or ongoing illness are signs your immune system needs help. Using natural medicine, we support:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "White blood cell health",
                      "Inflammatory regulation",
                      "Immune modulation with herbs and nutrients"
                    ].map((support, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{support}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Clinic Environment Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Clinic Environment</h2>
          </div>

          {/* Replaced Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/0d102a48-b739-4586-a6d3-c43bc6493ff0.png" 
              alt="NXTLVL Health clinic environment Brisbane naturopathic nutrition" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              NXTLVL Health is a warm, welcoming wellness centre where patients feel safe and heard. Our team respects every health journey and provides support with compassion and understanding.
            </p>
            <p>
              We also offer integrative services such as lifestyle coaching, and emotional wellbeing support.
            </p>
          </div>
        </div>
      </section>

      {/* Why Nutrition is the Foundation Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Nutrition is the Foundation of Wellness</h2>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Food is medicine—but it needs to be personalised.
            </p>
            <p>
              Through education, support, and accountability, we help you build healthy habits for life. Nutritional medicine can prevent chronic disease, support healing, and bring vitality back into your daily life. It combines food as medicine traditions and dietary therapy with scientific advances in nutritional biochemistry and therapeutics.
            </p>
          </div>

          {/* CTA after seventh section */}
          <div className="text-center mt-16">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Role of Science Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Role of Science in Natural Medicine</h2>
          </div>

          {/* New image right under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/1bdbd40e-8584-424e-8284-afb4cf42a389.png" 
              alt="Naturopathic nutritionist preparing herbal medicines at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              At NXTLVL Health, we believe that natural doesn't mean unscientific. We stay up to date with the latest clinical research and use therapies that are proven to be safe and effective.
            </p>
            <p>
              Mitch's scientifically based approach ensures that every recommendation is backed by research and grounded in your body's needs.
            </p>
          </div>
        </div>
      </section>

      {/* A Word from Mitch Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Word from Mitch</h2>
          </div>

          {/* New image right under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/00e7e896-59e1-4eb7-ba3c-7a31e0b80620.png" 
              alt="Mitch, naturopathic nutritionist at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                  <p>
                    "My goal is simple—to help you feel better, naturally. As a naturopathic nutritionist, I believe food is one of the most powerful tools we have for healing. But it's not just about eating more greens—it's about understanding your body, your life, and your unique health story. I'm here to guide you through that journey with clarity, compassion, and evidence-based care."
                  </p>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">FAQs</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the difference between a naturopath and a nutritionist?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A nutritionist focuses on diet. A naturopath combines nutrition with herbal medicine and natural therapies. A naturopathic nutritionist blends the best of both.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do I need blood tests?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Often, yes. Testing gives us insight into your deficiencies, hormonal patterns, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can this help with chronic illness?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. Many patients with long-term health problems see significant improvement through personalised naturopathy and nutritional medicine.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you work with doctors?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes. We are happy to collaborate with your GP or specialist if needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is this suitable for children or teens?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We offer safe, gentle, and effective support for all ages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Your First Appointment Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your First Appointment</h2>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
            <p>
              If you're ready to take the next step, we're here to help. Book your consultation online or give us a call. Mitch is ready to help you start your personalised wellness journey—naturally.
            </p>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Your Free 15-Minute Consult
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

export default NaturopathicNutritionist;
