
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Baby, Shield, Activity } from "lucide-react";

const ChildrensHealth = () => {
  return (
    <>
      <SEO 
        title="Top-Rated Children's Naturopath in Brisbane"
        description="Our gentle children's naturopath Mitchell Potts helps uncover and treat the root causes of your child's gut, skin, mood, and energy problems—safely and easily."
        canonical="/what-we-treat/childrens-naturopath-brisbane"
        keywords="children's naturopath Brisbane, kids naturopath, paediatric naturopath, children's health Brisbane, natural children's medicine"
        serviceSchema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://nxtlvlhealth.com.au/what-we-treat/childrens-naturopath-brisbane#service",
          "name": "Children's Naturopath Brisbane",
          "description": "Gentle, effective naturopathic care for children's health concerns. We specialise in treating digestive issues, skin conditions, behavioural problems, immunity concerns, and food sensitivities in children of all ages using safe, natural therapies.",
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
          "category": "Paediatric Naturopathic Medicine",
          "serviceType": "Children's Health and Natural Medicine",
          "offers": [
            {
              "@type": "Offer",
              "name": "Initial Children's Health Consultation",
              "description": "Comprehensive 75-minute consultation including full health history review, gentle assessment, and personalised treatment planning for your child's specific health needs.",
              "price": "210",
              "priceCurrency": "AUD",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer", 
              "name": "Follow-up Children's Consultation",
              "description": "Ongoing support and treatment plan adjustments to monitor your child's progress and ensure optimal health outcomes as they grow and develop.",
              "price": "120",
              "priceCurrency": "AUD",
              "availability": "https://schema.org/InStock"
            }
          ],
          "audience": {
            "@type": "Audience",
            "audienceType": "Children with digestive issues, skin conditions, behavioural concerns, immunity problems, or food sensitivities"
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
                  Children's Naturopath in <span className="text-primary">Brisbane</span> | Natural Support for Growing Bodies
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Children's naturopath consultation at NXTLVL Health Brisbane" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/21bdc7a3-82f5-45cb-b6ad-b66cbdb91ec9.png" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Baby className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Children's Health</p>
                        <p className="text-xs text-muted-foreground">Natural • Gentle • Effective</p>
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
                    <span className="text-center">Book an Appointment Today!</span>
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
                alt="Children's naturopath consultation at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/21bdc7a3-82f5-45cb-b6ad-b66cbdb91ec9.png" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Baby className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Children's Health</p>
                    <p className="text-sm text-muted-foreground">Natural • Gentle • Effective</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support for Children's Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Support for Children's Health, Made Just for Them</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/58494e66-018f-4d31-b0b1-119423ae70f9.png" 
              alt="Child with healthy food at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  If your child is struggling with skin conditions, digestive issues, mood swings, or poor immunity, you're not alone. At NXTLVL Health in New Farm, our <strong>children's naturopath services</strong> are designed to support your child's health naturally and very gently.
                </p>
                <p>
                  Led by an experienced naturopath by the name of <strong>Mitchell Potts</strong>, we aim to treat the root cause, not just manage the symptoms, so your child can feel healthier, stronger, and more balanced. Whether it's gut health, food intolerances, behavioural issues, or chronic health concerns, we provide safe and effective naturopathic treatment tailored for children of all ages.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/58494e66-018f-4d31-b0b1-119423ae70f9.png" 
                alt="Child with healthy food at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Health Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose NXTLVL Health as Your Children's Naturopath?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Years of experience in children's health",
              "Our approach is Holistic and it considers your child's diet, lifestyle, gut function, and environment",
              "Our Naturopathic treatments use nutritional medicine and gentle herbal remedies",
              "We create Individualised plans that work with your child's needs and development",
              "We offer ongoing support for long-term improvement and better health outcomes"
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-base text-muted-foreground">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Help With Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Conditions We Help With</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Digestive complaints and gut health issues",
              "Skin conditions like eczema and chronic rashes",
              "Food allergies, intolerances, and sensitivities",
              "Behavioural problems and mood swings",
              "Fussy eating and nutritional deficiencies",
              "Chronic fatigue and low immunity",
              "Recurrent infections and ear infections",
              "Health concerns linked to Autism Spectrum Disorder"
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
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect From a Children's Naturopath Consultation</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
              alt="Children's health consultation at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Full Health History Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We begin with an in-depth conversation about your child's medical history, birth story, sleep patterns, digestion, diet, and emotional wellbeing. This helps us understand your child as a whole person, not just a set of symptoms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Gentle Functional Testing (If Needed)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">When appropriate, we may recommend gentle tests to provide additional insights:</p>
                <ul className="space-y-2">
                  {[
                    "Live blood analysis (to check nutrient levels or immune response)",
                    "Stool and urine testing (for digestive health or gut flora imbalances)",
                    "Food intolerance or allergy testing",
                    "Organic Acids Test (OAT)",
                    "Blood tests for Vitamin D, iron, and other nutritional deficiencies"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Personalised Treatment Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Based on your child's specific health concerns, we design a tailored plan that may include:</p>
                <ul className="space-y-2">
                  {[
                    "Herbal medicine appropriate for children",
                    "Wholefood dietary suggestions and healthy eating guidance",
                    "Lifestyle changes to support the nervous system and immune function",
                    "Nutritional supplements, only when necessary and safe"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Nutritional Support for Kids</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We help parents like you make simple and practical dietary changes for their kids, especially if your child is a fussy eater or dealing with food sensitivities. We focus on improving energy, behaviour, digestion, and immune strength through nutrient-dense, real-world food options.
                </p>
                <a 
                  href="https://www.healthdirect.gov.au/healthy-eating-for-children" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline"
                >
                  Learn about the importance of Nutrition for your Child
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Ongoing Support & Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Healing takes some time, especially in growing bodies. That's why we stay connected with regular follow-up appointments to adjust and refine your child's naturopathic care as they grow and develop.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gentle Effective Approach Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Gentle, Effective Way to Support Your Child's Health</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground">
              <p>
                Whether your child needs support with immune function, digestion, behavioural regulation, or long-term health issues, NXTLVL Health offers a gentle, holistic approach that meets your child's needs with compassion and clarity.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/3e8138df-4579-4443-838a-2d4275fc12ec.png" 
              alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your Child's Naturopath Visit Today</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Let's give your child the tools they need to feel calm, strong, and full of energy again. We offer <strong>in-person appointments in New Farm, Brisbane</strong>, and <strong>online consultations</strong> for families across Australia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://nxtlvlhealth.com.au/book-now/">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Your Child's Consultation Today
                </a>
              </Button>
              <Button variant="outline" asChild className="text-base sm:text-lg px-6 py-4">
                <a href="tel:0731808853">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Talk to Mitch About Your Child's Health
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

export default ChildrensHealth;
