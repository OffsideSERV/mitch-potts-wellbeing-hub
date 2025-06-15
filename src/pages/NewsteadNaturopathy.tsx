
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Baby, MapPin, Clock } from "lucide-react";

const NewsteadNaturopathy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopath <span className="text-primary">Newstead</span> | Natural, Root-Cause Healing Near You
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
                        <p className="font-semibold text-sm">Natural Health Care</p>
                        <p className="text-xs text-muted-foreground">Newstead • Naturopathy</p>
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
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Natural Health Care</p>
                    <p className="text-sm text-muted-foreground">Newstead • Naturopathy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for a Trusted Naturopath Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Looking for a Trusted Naturopath Near Newstead?</h2>
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
                  If you're tired of feeling "not quite right" and you're looking for a holistic approach that actually delivers long-term results for your health, you've come to the right place. At NXTLVL Health, we support many people like you from Newstead who are looking for clarity, support, and answers to their health that they couldn't get from doctors.
                </p>
                <p>
                  Our clinic, based just minutes from Newstead QLD, offers evidence-based natural medicine, functional testing, and personalised treatment plans designed to get you feeling better—physically, mentally, and emotionally. Whether you're struggling with digestive issues, hormonal imbalances, or chronic fatigue, our qualified naturopath Mitchell Potts is here to guide you every step of the way.
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

      {/* Why Clients From Newstead Choose Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Clients From Newstead Choose NXTLVL Health</h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  We're Just Minutes From Newstead
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Although we're not located in Newstead itself, our clinic is just a short walk or drive away, conveniently located near New Farm and Fortitude Valley.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Brain className="h-6 w-6" />
                  Real Answers, Not Guesswork
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you've been told everything is "normal," but still feel exhausted, anxious, or unwell, we'll help you get to the root cause of the problem. From your gut health to your nervous system, we explore what's really going on inside.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Heart className="h-6 w-6" />
                  A Naturopathic Approach That Respects Your Whole Story
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We take time to really listen to you and what you've been going through. Our holistic approach considers your whole life: your stress levels, your dietary habits, your emotional wellbeing, and even your medical history. You are way more than just your symptoms, and the help you get should reflect that.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Work With</h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Women's Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We help with PMS, hormonal imbalances, painful periods, PCOS, and menopause. We help you understand your cycle and help you feel in control of your health again.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Gut Health & Digestive Complaints</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From Irritable Bowel Syndrome (IBS) to bloating, reflux, and SIBO, we create gut-healing protocols for you that fix the root cause of your discomfort.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Children's Health Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We help with food allergies, mood swings, digestive issues, and fussy eating—and much more—in children of all ages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Mental Health & Chronic Stress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If anxiety, burnout, or mood changes are affecting your life, we help heal your nervous system and mental health with targeted nutritional medicine and sometimes even herbal medicine.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Weight Loss & Metabolic Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We take a natural, non-restrictive approach to weight loss. There's no fad diets—just real advice that's tailored to your body and lifestyle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Pregnancy Care & Fertility Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Whether you're trying to conceive, preparing for pregnancy, or need support post-partum, we offer safe, research-backed care for every stage.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Autoimmune Conditions & Chronic Disease</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From fatigue to inflammation, we help to heal your immune system and overall health without adding pressure or overwhelm to it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect From Your First Consultation</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-showing-patient-results-on-a-computer-scaled.jpeg" 
              alt="Naturopath showing patient results on a computer at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">We Listen to Your Full Health Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  During your initial consultation, we explore your symptoms, your past diagnoses, your lifestyle, your emotional health, and your health goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">We Use Functional Testing When Needed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This could include stool testing, hormone panels, nutrient profiles, or food sensitivity testing, depending on your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">You Get a Personalised Treatment Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every plan we give includes natural remedies, dietary recommendations, and lifestyle changes tailored to your condition, your goals, and even your schedule.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">We Focus on Lifestyle Changes That Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our advice is very practical and very realistic. Whether it's changing your breakfast or adding five minutes of mindfulness, we keep it doable for you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Modalities & Therapies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Modalities & Therapies</h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Western Herbal Medicine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Herbal formulas crafted for hormonal support, digestive healing, liver detoxification, and nervous system regulation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Nutritional Medicine & Clinical Supplements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use practitioner-grade supplements and diet strategies to correct deficiencies, support organ systems, and restore energy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Natural Pain Relief & Anti-Inflammatory Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We support conditions such as joint pain, menstrual cramping, and muscle aches with anti-inflammatory herbs and nutritional support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Gut Healing Protocols</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For IBS, food intolerances, or SIBO, we support your microbiome, reduce inflammation, and improve digestion naturally.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Stress & Nervous System Regulation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Calm an overworked nervous system using herbal adaptogens, magnesium, and mind-body practices for long-term emotional resilience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serving Clients Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Serving Clients Across Newstead QLD & Surrounds</h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Located Minutes from Gasworks Plaza & Fortitude Valley
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our New Farm location is highly accessible for Newstead locals. We're just around the corner, literally.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Popular with Locals from New Farm, Kelvin Grove & Spring Hill
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We also help people from West End, Spring Hill, and other Brisbane QLD suburbs who are looking for natural, long-term health care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Mitch Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Mitch at NXTLVL Health?</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" 
              alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Bachelor of Health Science (Endeavour College of Natural Health)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your care is led by a university-qualified naturopath with a strong foundation in natural medicine and clinical practice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Years of Clinical Experience Supporting Complex Health Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mitch has changed the lives of hundreds of people dealing with chronic illness, digestive conditions, fatigue, skin concerns, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Straight-Talking, Results-Based Natural Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We don't do fluff. You'll get honest answers, clear communication, and a plan that works with your life—not against it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conditions We Commonly See Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Conditions We Commonly See at Our Clinic</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Irritable Bowel Syndrome (IBS), Gas & Bloating",
              "Hormonal Imbalances & Irregular Cycles",
              "Chronic Fatigue & Low Energy",
              "Skin Conditions Like Eczema, Acne & Psoriasis",
              "Joint Pain, Muscle Tension & Inflammation",
              "Allergy Testing & Food Sensitivities"
            ].map((condition, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{condition}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* We Collaborate Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">We Collaborate With Your Other Practitioners</h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Working With Personal Trainers, Massage Therapists, Allied Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you're currently seeing a Personal Trainer or Massage Therapist, we can integrate our recommendations into your wellness routine.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Respecting Your Medical History & Existing Diagnosis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our treatments will work alongside conventional medicine. We value your previous care and work within an integrated model.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your Initial Consultation Today</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Book your initial consultation today and get the answers and support you've been looking for.
              </p>
              <h3 className="text-xl font-semibold text-foreground">In-Clinic or Telehealth Options Available for Newstead Residents</h3>
              <p>
                Whether you're based in Newstead QLD or nearby, we're here to support your health journey—on your terms.
              </p>
            </div>

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
  );
};

export default NewsteadNaturopathy;
