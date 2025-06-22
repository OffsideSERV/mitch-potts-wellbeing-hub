
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Baby } from "lucide-react";

const WellnessClinic = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Wellness Clinic <span className="text-primary">Brisbane</span> | Natural Support for a Healthier, Happier Life
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopath having consultation with female patient at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Wellness Clinic</p>
                        <p className="text-xs text-muted-foreground">Natural Health • Brisbane</p>
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
                  <a href="https://nxtlvlhealth.com.au/book-now/">
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
                alt="Naturopath having consultation with female patient at NXTLVL Health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Wellness Clinic</p>
                    <p className="text-sm text-muted-foreground">Natural Health • Brisbane</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Brisbane Wellness Clinic Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Brisbane Wellness Clinic That Supports You, Every Step of the Way</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
              alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  At NXTLVL Health, we believe you deserve to **feel well**, inside and out. Our wellness clinic in Brisbane is here to help you feel **more energy, better sleep, and less stress** using natural care that makes sense for your life.
                </p>
                <p>
                  We're not about quick fixes. We're about **real answers and long-term change** to your wellbeing. Whether you need help with your gut, your energy, your hormones, or your mood, our team listens carefully and works with you to create a plan that works.
                </p>
                <p>
                  Our clinic in New Farm is trusted by people from Fortitude Valley, Spring Hill, Newstead, and all across Brisbane. If you're looking for a **warm, expert-led space** that blends natural care with real results, you've just found your Brisbane wellness clinic.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
                alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Looks Different Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Wellness Looks Different for Everyone</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Everyone's body and life are different. That's why we take a **personalised, gentle approach**. We listen. We care. And we always aim to **get to the root cause** of your health issues, not just cover up symptoms.
              </p>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Sad-woman-dealing-with-gut-issues-and-bloating-scaled.jpeg" 
              alt="Sad woman dealing with gut issues and bloating at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">You might be dealing with:</h3>
              <ul className="space-y-4">
                {[
                  "Low energy",
                  "Poor sleep",
                  "Gut problems",
                  "Hormonal imbalances",
                  "Skin flare-ups",
                  "Mood changes",
                  "Chronic fatigue",
                  "Stress or anxiety"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-6 bg-primary/10 rounded-lg">
                <p className="text-lg font-medium text-foreground">
                  We're here to help you find the balance again.
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <Button asChild className="text-base px-6 py-3">
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Book a Free 15-Min Consult
                  </a>
                </Button>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Sad-woman-dealing-with-gut-issues-and-bloating-scaled.jpeg" 
                alt="Sad woman dealing with gut issues and bloating at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* More Than a Clinic Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">More Than a Clinic, a Wellness Centre That Gets You</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  We're not just another wellness clinic in Brisbane. We're a **community of caring, passionate health professionals** who want you to feel your best.
                </p>
                <p>
                  When you come to NXTLVL Health, you'll meet a team that includes: Unlike Brisbane Livewell Clinic, which offers Allied Health therapies and Natural Therapies, we focus on **creating a community of care** tailored to your unique needs.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "A university-qualified naturopath with years of experience",
                  "Skilled support staff who are friendly and non-judgemental",
                  "Access to referrals for massage therapists, allied health, and fitness coaches"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-6 bg-primary/10 rounded-lg">
                <p className="text-lg font-medium text-foreground">
                  Our goal is simple: **help you enjoy life more**, with less pain and more peace.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-doing-an-MLS-laser-treatment-for-a-female-patient-scaled.jpeg" 
                alt="Naturopath doing an MLS laser treatment for a female patient at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What We Offer at Our Wellness Clinic</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We support your **physical and mental health** with a wide range of natural therapies, including:
            </p>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
              alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    <a 
                      href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/herbal-medicine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary/80 underline"
                    >
                      Herbal Medicine
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We use western herbal medicine to gently support the body. Herbs like **lemon balm, licorice, or turmeric** can help with inflammation, hormones, stress, and digestion.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Nutritional Medicine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    **Food is powerful**. We use nutritional medicine to help with energy, gut health, and nutrient balance. Whether you need support with weight loss, immune health, or sleep, we'll guide you with **simple, real-world changes**.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Functional Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sometimes the answers are deeper. We may recommend testing (if needed) to check **gut bacteria, hormones, or nutrient levels**. This helps us make clear, confident choices with your plan.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Lifestyle Advice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    What you do every day matters. We help you build **better habits** around sleep, exercise, food, and stress so your body gets the consistent care it needs. **Small changes can make a big difference** in your health and wellness.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Ongoing Care and Check-Ins</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We don't just give you a plan and leave you on your own. We **check in with you, tweak things**, and keep walking with you on your health journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-center">
            <Button asChild className="text-base px-6 py-3">
              <a href="https://nxtlvlhealth.com.au/book-now/">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Health Concerns Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">We Work With a Wide Range of Health Concerns</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our **wellness services** support many kinds of health issues, including:
            </p>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4503-scaled.jpeg" 
              alt="NXTLVL Health natural medicine clinic facilities" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Digestive disorders like IBS, bloating, constipation, or reflux",
              "Hormonal concerns including PMS, PCOS, or perimenopause",
              "Chronic fatigue and low energy",
              "Chronic pain and inflammation",
              "Mental health and nervous system support",
              "Poor sleep quality",
              "Weight loss support and metabolic health",
              "Skin issues like acne or eczema",
              "Support with autoimmune and immune health"
            ].map((condition, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{condition}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our **holistic approach** blends natural care with science and evidence. We focus on **your whole body**, not just the symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Health Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Clients Choose NXTLVL Health</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                There are a lot of places in Brisbane to get help with your health. Health & Healing Wellness Centre, for example, is one of the largest holistic health clinics in Brisbane. **So why choose us?**
              </p>
              <p>
                Here's why people trust NXTLVL Health as their go-to wellness clinic: While other clinics, like Health & Healing Wellness Centre, offer services from chiropractors, acupuncturists, naturopaths, massage therapists, and holistic therapists, we focus on providing a **deeply personalized and caring approach**.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/01/DSC_4584-scaled.jpeg" 
              alt="NXTLVL Health wellness clinic interior and facilities" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "We listen closely and take time to understand your story",
              "We only recommend what's needed and explain everything clearly",
              "We create plans that fit your lifestyle, not just cookie-cutter protocols",
              "We use the latest in nutritional medicine, herbal care, and functional testing",
              "We truly care, and it shows in everything we do"
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

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Our clients say they feel **safe, understood, and empowered** here. That means the world to us.
            </p>
            
            <Button asChild className="text-base px-6 py-3">
              <a href="https://nxtlvlhealth.com.au/book-now/">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Support for Every Step Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Support for Every Step of Your Health Journey</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-standing-next-to-female-patient-thats-lying-down-while-he-checks-her-vitals-scaled.jpeg" 
              alt="Naturopath standing next to female patient checking her vitals at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center">
            <p>
              Maybe you've been to lots of doctors. Maybe you've tried everything and still don't feel right.
            </p>
            <p>
              **You're not alone.**
            </p>
            <p>
              At NXTLVL Health, we help people who feel like they've **hit a wall with their health**. You may have been told "your tests are fine" or "just manage your stress." But deep down, you know something's still off.
            </p>
            <p>
              We help you find answers. We don't just focus on the diagnosis. We look at the **underlying causes**.
            </p>
            <p>
              Whether you're a busy parent, a student, or someone rebuilding after burnout, we're here to **meet you where you are**. For those seeking a range of allied health services tailored to individual needs, Mater Health and Wellness also provides such options.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Mitch Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Mitch – Lead Practitioner at NXTLVL Health</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Mitch is a **degree-qualified naturopath** with a strong background in herbal medicine, nutritional science, and holistic health. With **years of hands-on experience** helping clients of all ages, he specialises in:
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Gut health and digestion",
                  "Women's health and hormones",
                  "Mental health and nervous system support",
                  "Chronic stress and fatigue",
                  "Skin and immunity"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-6 bg-primary/10 rounded-lg">
                <p className="text-lg font-medium text-foreground">
                  His approach is **calm, clear, and practical**. You'll never feel rushed, judged, or overwhelmed. Just **supported, informed, and in control** again.
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <Button asChild className="text-base px-6 py-3">
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Book a Free 15-Min Consult
                  </a>
                </Button>
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" 
                alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* First Appointment Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Your First Appointment – What to Expect</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Your first appointment is a **deep dive into your health**. You'll feel safe, heard, and supported.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">What we'll do:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Talk through your symptoms, lifestyle, and health goals",
                    "Review any past test results or diagnoses",
                    "Recommend testing (only if it's needed)",
                    "Build a clear, tailored plan just for you"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-6 bg-primary/10 rounded-lg">
                  <p className="text-lg font-medium text-foreground">
                    And we'll keep the plan simple. You won't leave with a list of 50 things to do. Just **real steps**, chosen just for you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Natural Therapies Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural Therapies That Work With Your Life</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We know you're busy. That's why our plans are made to **work in real life**, not in some perfect world.
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/01/DSC_4545-scaled.jpeg" 
              alt="Natural therapies consultation at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Simple food swaps",
              "Easy lifestyle upgrades",
              "Supportive supplements",
              "Gentle herbal remedies",
              "Practical stress support techniques"
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

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We'll also show you how to **make these changes stick** so you feel the benefits for the long term.
            </p>
          </div>
        </div>
      </section>

      {/* Warm Space Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Warm, Non-Judgemental Space</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/KzhzvfYCqwWucZxbOivI.png" 
              alt="Warm and welcoming wellness clinic space at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center">
            <p>
              We believe care should feel **kind, not clinical**. Our wellness clinic is a **peaceful, calm space** where you'll feel welcomed from the minute you walk in.
            </p>
            <p>
              Whether you're just starting your journey or looking for the next level in your care, we'll **meet you where you are** and help you move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join the NXTLVL Health Community</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-checking-a-patients-blood-pressure-scaled.jpeg" 
              alt="Naturopath checking a patient's blood pressure at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center">
            <p>
              We love being part of the **New Farm and greater Brisbane community**. Our clients come from all across Brisbane, Fortitude Valley, Newstead, Spring Hill, and beyond.
            </p>
            <p>
              Some work with us weekly. Others come in monthly. Some just check in when they need extra support. **However you need us, we're here**. For added convenience, Mater Health and Wellness is also accessible via telehealth, offering flexibility for those who need it.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your Appointment at NXTLVL Health</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                You don't need to stay stuck in **pain, fatigue, or confusion**.
              </p>
              <p>
                NXTLVL Health is your **local, trusted wellness clinic** Brisbane locals rely on for real results. We'll walk with you every step of the way, helping you **feel more like yourself** again.
              </p>
              <h3 className="text-2xl font-bold text-foreground">Ready to take the next step?</h3>
              <p>
                Book your first appointment today and let's start your journey toward **better energy, better sleep, and a better life** together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://nxtlvlhealth.com.au/book-now/">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book a Free 15-Min Consult
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

export default WellnessClinic;
