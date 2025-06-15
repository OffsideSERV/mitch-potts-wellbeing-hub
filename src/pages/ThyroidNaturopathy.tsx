
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ThyroidNaturopathy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopath Thyroid Support in <span className="text-primary">Brisbane</span> | Personalised Naturopathy for Thyroid Health
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
                      <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      <div>
                        <p className="font-semibold text-sm">Thyroid Support</p>
                        <p className="text-xs text-muted-foreground">Naturopathy • Holistic Health</p>
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
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <div>
                    <p className="font-semibold">Thyroid Support</p>
                    <p className="text-sm text-muted-foreground">Naturopathy • Holistic Health</p>
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
                  If you're constantly fatigued, struggling to lose weight, or just not feeling like yourself despite your best efforts, your thyroid might be the root cause. At NXTLVL Health, our <strong>naturopath thyroid services in Brisbane</strong> go beyond basic lab results to identify the true, underlying causes of thyroid dysfunction, and restore your health from the inside out.
                </p>
                <p>
                  We focus on <strong>naturopathy for thyroid conditions</strong> that affect your energy, mood, metabolism, skin, and entire nervous system. Whether you're managing Hashimoto's thyroiditis, Graves' disease, subclinical hypothyroidism, or undiagnosed thyroid issues, we help you reconnect the dots, so you feel supported, energised, and back in control of your wellbeing.
                </p>
              </div>
            </div>
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

      {/* Why Thyroid Health Affects Everything Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Thyroid Health Affects Everything</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Your thyroid gland is small, but mighty. This butterfly-shaped gland sits in your neck and helps regulate nearly every function in your body, from temperature and heart rate to mental clarity and hormonal balance. If your thyroid isn't producing enough hormones, or if your immune system attacks it, the effects ripple through your entire body.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
              alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">Common symptoms of thyroid dysfunction include:</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Unexplained weight gain or weight loss</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Constant fatigue or sluggishness</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Dry skin, hair loss, or brittle nails</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Brain fog or poor memory recall</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Cold intolerance or excessive sweating</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Anxiety, mood swings, or depression</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Constipation or bloating</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Hoarseness, puffy face, or slow heart rate</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Menstrual cycles irregularities or fertility challenges</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Difficulty concentrating or staying motivated</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                Many of our clients arrive feeling like they've "tried everything" or been told their thyroid levels are "within the normal range" even when they feel far from fine. Our job is to find what standard healthcare may have missed, and help you heal properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Approach Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Holistic Approach to Naturopathy Treatment for Thyroid</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              At NXTLVL Health, we don't chase symptoms. We assess how your thyroid is interacting with other key body systems, like your adrenal glands, digestive system, brain, and immune function, and create a cohesive plan designed around your biology, lifestyle, and goals.
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Step 1: Comprehensive Thyroid Health Review</h3>
              <p className="text-lg text-muted-foreground">
                Your journey starts with a 60–75 minute initial consultation. We dive deep into your:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">Full medical and health history</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">Existing thyroid blood test results</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">Nutrition, energy patterns, and sleep quality</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">Hormonal symptoms and stress levels</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">Digestive issues and immune response</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground">
                We take our time, because understanding your health journey takes more than a five-minute consult.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Step 2: Functional Testing (If Needed)</h3>
              <p className="text-lg text-muted-foreground">
                To get a clearer picture of what's really happening inside, we may recommend:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">A full thyroid panel (TSH, Free T3, Free T4, Reverse T3, and thyroid antibodies)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">Nutritional testing (iodine deficiency, iron, B12, vitamin D, selenium)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">Hormone testing for adrenal and reproductive function</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">Gut testing for inflammation, pathogens, or leaky gut</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">Heavy metal testing for toxic burden</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground">
                These advanced assessments are optional but often essential for accurate results and effective thyroid care.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Step 3: Personalised Naturopathic Thyroid Plan</h3>
              <p className="text-lg text-muted-foreground">
                There is no one-size-fits-all thyroid protocol. Based on your history and results, we create a personalised plan that may include:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">Herbal remedies to reduce inflammation and support thyroid hormone production</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">Nutritional supplements for nutritional deficiencies and metabolic rate</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">Tailored food strategies to regulate blood sugar and hormones</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">Support for stress response and nervous system regulation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base text-muted-foreground">Lifestyle changes that fit your real life</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground">
                We simplify everything into clear, actionable steps. You'll never be overwhelmed or left guessing.
              </p>
            </div>

            {/* Step 4 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Step 4: Ongoing Support and Monitoring</h3>
              <p className="text-lg text-muted-foreground">
                We provide ongoing support to track your progress, make adjustments, and ensure that you're supported every step of the way. Whether you're dealing with autoimmune thyroid disease or thyroid dysfunction linked to chronic stress, you'll have a plan that evolves with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Work With</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Thyroid dysfunction affects people of all backgrounds but is especially common among women aged 25–55. We support clients who:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-muted-foreground">Have been diagnosed with Hashimoto's thyroiditis or Graves' Disease</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-muted-foreground">Suspect they have an underactive thyroid or overactive thyroid</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-muted-foreground">Feel tired, foggy, or off despite being told their results are "normal"</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-muted-foreground">Are experiencing hormonal imbalances or mood swings</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-muted-foreground">Struggle with weight issues, dry skin, or mental sluggishness</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-muted-foreground">Have a family history of autoimmune conditions or thyroid problems</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-muted-foreground">Want to avoid long-term medication with a more natural treatment option</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose NXTLVL Health for Thyroid Naturopathy?</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Mitch Potts brings together years of experience in naturopathic medicine, functional testing, nutrition, and lifestyle therapies. He's known for his compassion, attention to detail, and for helping people feel seen and supported in ways conventional care can't offer.
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" 
              alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">Here's why people trust Mitch with their thyroid health:</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">In-depth knowledge of thyroid symptoms, even when TSH levels appear "normal"</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">A comprehensive approach to thyroid function and overall well-being</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Integration of natural therapies like herbal medicine, supplements, and nutrition</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Strong focus on Women's Health, Men's Health, and hormone balance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">Tailored treatment that looks at the root cause, not just temporary relief</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">In-person sessions in Brisbane or accessible online consultations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Support Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Conditions We Commonly Support</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-muted-foreground">Hypothyroidism and underactive thyroid</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-muted-foreground">Hashimoto's disease and autoimmune thyroid conditions</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-muted-foreground">Graves' disease and hyperthyroidism</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-muted-foreground">Subclinical hypothyroidism</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-muted-foreground">Postpartum thyroiditis</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-muted-foreground">Thyroid dysfunction triggered by digestive issues or chronic stress</p>
            </div>
            <div className="flex items-start space-x-3 md:col-span-2 lg:col-span-1">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-muted-foreground">Mental health conditions related to poor thyroid hormone balance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What You'll Gain From Working With a Thyroid Naturopath</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-muted-foreground">Deeper insight into your thyroid test results and what they really mean</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-muted-foreground">A qualified naturopath who explains everything clearly and thoroughly</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-muted-foreground">Improved energy levels, mood, focus, and quality of life</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-muted-foreground">Guidance on how to eat, move, and live for long-term thyroid support</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-muted-foreground">A plan that fits your body, not a generic list of supplements</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-muted-foreground">Peace of mind knowing your health outcomes are guided by someone who gets it</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Restore Your Thyroid Health?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              If you're tired of the guesswork, feeling dismissed, or just want a new path forward NXTLVL Health is here to help. With holistic, science-backed care, we'll help you finally feel like yourself again.
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
  );
};

export default ThyroidNaturopathy;
