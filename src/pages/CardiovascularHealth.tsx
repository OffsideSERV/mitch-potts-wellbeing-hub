import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, Activity, Zap, Apple, TestTube, BookOpen, Award } from "lucide-react";

const CardiovascularHealth = () => {
  // Service Schema for Cardiovascular Health Naturopath
  const cardiovascularHealthSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nxtlvlhealth.com.au/what-we-treat/cardiovascular-health-naturopath-brisbane#service",
    "name": "Cardiovascular Health Naturopath Brisbane",
    "alternateName": ["High Cholesterol Naturopath", "Heart Health Brisbane", "Natural Cholesterol Treatment", "Cardiovascular Naturopathy"],
    "description": "Expert cardiovascular health naturopath in Brisbane specialising in high cholesterol, hypertension, and heart health. Natural treatments to support cardiovascular wellness and reduce heart disease risk.",
    "url": "https://www.nxtlvlhealth.com.au/what-we-treat/cardiovascular-health-naturopath-brisbane",
    "image": "https://www.nxtlvlhealth.com.au/lovable-uploads/consultation-discussion.png",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.nxtlvlhealth.com.au/#organization",
      "name": "NXTLVL Health - Naturopath",
      "image": "https://www.nxtlvlhealth.com.au/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png",
      "telephone": "(07) 3180 8853",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 2/665 Brunswick St",
        "addressLocality": "New Farm",
        "addressRegion": "QLD",
        "addressCountry": "AU",
        "postalCode": "4005"
      }
    },
    "serviceType": "Naturopathic Medicine",
    "category": "Cardiovascular and Heart Health",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cardiovascular Health Services",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Comprehensive Cardiovascular Assessment",
          "description": "Detailed heart health evaluation including lipid profile analysis, blood pressure monitoring, and cardiovascular risk assessment"
        },
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Natural Cholesterol Management",
          "description": "Evidence-based natural treatments including dietary therapy, targeted nutrition, and herbal medicine to support healthy cholesterol levels"
        },
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }]
    },
    "areaServed": [{
      "@type": "Place",
      "name": "Brisbane",
      "alternateName": ["New Farm", "Fortitude Valley", "Newstead", "Teneriffe", "Kangaroo Point"]
    }],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.nxtlvlhealth.com.au/book-now",
      "servicePhone": "(07) 3180 8853"
    }
  };

  return (
    <>
      <SEO 
        title="Cardiovascular Health Naturopath Brisbane | High Cholesterol Treatment"
        description="Expert cardiovascular health naturopath in Brisbane. Natural treatment for high cholesterol, hypertension & heart health. Book your consultation today."
        canonical="/what-we-treat/cardiovascular-health-naturopath-brisbane"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Heart className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Cardiovascular Health Naturopath Brisbane
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Natural, evidence-based treatments for high cholesterol, hypertension, and heart health. 
              Take control of your cardiovascular wellness with personalised naturopathic care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://nxtlvlhealth.com.au/book-now" target="_blank" rel="noopener noreferrer">
                  Book Your Heart Health Consultation
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                  Free 15-min Call
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/consultation-discussion.png" 
              alt="Heart health consultation with naturopath discussing cardiovascular wellness"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cardiovascular disease remains the leading cause of death globally, but the good news is that many heart health conditions are preventable and manageable through natural approaches. At NXTLVL Health, our cardiovascular health naturopath in Brisbane specialises in identifying and addressing the root causes of heart health issues, particularly high cholesterol and hypertension.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Using evidence-based natural treatments, we work alongside your existing healthcare team to support your cardiovascular wellness through nutrition, lifestyle medicine, targeted supplementation, and herbal therapies.
            </p>
          </div>

          {/* What We Treat Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">
              Cardiovascular Conditions We Support
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "High Cholesterol",
                  description: "Natural cholesterol management through dietary therapy, plant sterols, and targeted nutrition to support healthy lipid profiles.",
                  icon: <Activity className="h-6 w-6 text-primary" />
                },
                {
                  title: "Hypertension (High Blood Pressure)",
                  description: "Evidence-based natural approaches to support healthy blood pressure through lifestyle and nutritional interventions.",
                  icon: <Heart className="h-6 w-6 text-primary" />
                },
                {
                  title: "Metabolic Syndrome",
                  description: "Comprehensive support for the cluster of conditions including high blood pressure, high blood sugar, and abnormal cholesterol levels.",
                  icon: <Zap className="h-6 w-6 text-primary" />
                },
                {
                  title: "Cardiovascular Risk Prevention",
                  description: "Proactive heart health strategies for those with family history or risk factors for cardiovascular disease.",
                  icon: <CheckCircle className="h-6 w-6 text-primary" />
                }
              ].map((condition, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {condition.icon}
                      <CardTitle className="text-xl">{condition.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{condition.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Signs You May Benefit */}
          <section className="mb-12">
            <div className="bg-primary/5 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center text-primary mb-8">
                Signs You May Benefit from Cardiovascular Health Support
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary mb-4">Physical Symptoms</h3>
                  {[
                    "Elevated cholesterol levels on blood tests",
                    "High blood pressure readings",
                    "Chest tightness or discomfort",
                    "Shortness of breath with mild exertion",
                    "Fatigue or reduced exercise tolerance",
                    "Irregular heartbeat or palpitations"
                  ].map((symptom, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{symptom}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary mb-4">Risk Factors</h3>
                  {[
                    "Family history of heart disease",
                    "Diabetes or pre-diabetes",
                    "Chronic stress or anxiety",
                    "Sedentary lifestyle",
                    "Poor diet high in processed foods",
                    "Smoking or excessive alcohol consumption"
                  ].map((factor, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Our Natural Approach */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">
              Our Natural Approach to Cardiovascular Health
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Comprehensive Assessment",
                  description: "Detailed evaluation of your cardiovascular risk factors, current health status, family history, and lifestyle factors affecting heart health.",
                  icon: <TestTube className="h-8 w-8 text-primary" />
                },
                {
                  title: "Targeted Nutrition Therapy",
                  description: "Evidence-based dietary interventions including Mediterranean diet principles, omega-3 fatty acids, and heart-healthy nutrients.",
                  icon: <Apple className="h-8 w-8 text-primary" />
                },
                {
                  title: "Natural Supplementation",
                  description: "Clinically proven supplements such as plant sterols, CoQ10, magnesium, and red yeast rice for cardiovascular support.",
                  icon: <Activity className="h-8 w-8 text-primary" />
                }
              ].map((approach, index) => (
                <Card key={index} className="text-center h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {approach.icon}
                    </div>
                    <CardTitle className="text-xl">{approach.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{approach.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* High Cholesterol Focus */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center text-primary mb-6">
                Natural High Cholesterol Management
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  High cholesterol affects millions of Australians and significantly increases cardiovascular disease risk. 
                  Our natural approach focuses on addressing the underlying causes while supporting healthy cholesterol metabolism.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">Evidence-Based Natural Treatments</h3>
                    <ul className="space-y-3">
                      {[
                        "Plant sterols and stanols to block cholesterol absorption",
                        "Red yeast rice containing natural statins",
                        "Omega-3 fatty acids for triglyceride reduction",
                        "Soluble fiber for cholesterol binding",
                        "Bergamot extract for comprehensive lipid support",
                        "CoQ10 to support heart muscle function"
                      ].map((treatment, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{treatment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">Lifestyle Medicine Approach</h3>
                    <ul className="space-y-3">
                      {[
                        "Heart-healthy Mediterranean diet planning",
                        "Exercise prescription for cardiovascular fitness",
                        "Stress management techniques",
                        "Sleep optimisation for metabolic health",
                        "Weight management strategies",
                        "Smoking cessation support"
                      ].map((lifestyle, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{lifestyle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testing and Monitoring */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">
              Comprehensive Cardiovascular Testing
            </h2>
            <div className="bg-secondary/10 rounded-lg p-8">
              <p className="text-lg text-muted-foreground mb-6 text-center">
                We use advanced testing to get a complete picture of your cardiovascular health and monitor your progress.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Standard Testing</h3>
                  <ul className="space-y-2">
                    {[
                      "Complete lipid profile (Total cholesterol, HDL, LDL, Triglycerides)",
                      "Blood pressure monitoring",
                      "Blood glucose and HbA1c",
                      "C-reactive protein (inflammation marker)",
                      "Vitamin D levels",
                      "Thyroid function tests"
                    ].map((test, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Advanced Testing</h3>
                  <ul className="space-y-2">
                    {[
                      "Advanced lipid particle analysis",
                      "Homocysteine levels",
                      "Lipoprotein(a) assessment",
                      "Omega-3 fatty acid index",
                      "Coronary calcium scoring (when indicated)",
                      "24-hour blood pressure monitoring"
                    ].map((test, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose NXTLVL Health */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">
              Why Choose NXTLVL Health for Cardiovascular Care?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Evidence-Based Practice",
                  description: "We use only scientifically proven natural treatments with strong research backing for cardiovascular health.",
                  icon: <BookOpen className="h-8 w-8 text-primary" />
                },
                {
                  title: "Collaborative Care",
                  description: "We work alongside your cardiologist and GP to provide integrated, comprehensive cardiovascular support.",
                  icon: <Heart className="h-8 w-8 text-primary" />
                },
                {
                  title: "Personalised Treatment",
                  description: "Every treatment plan is tailored to your unique health profile, risk factors, and cardiovascular goals.",
                  icon: <Award className="h-8 w-8 text-primary" />
                }
              ].map((reason, index) => (
                <Card key={index} className="text-center h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {reason.icon}
                    </div>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-primary/5 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Take Control of Your Heart Health Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait for cardiovascular problems to worsen. Our evidence-based natural approach can help you manage high cholesterol, 
              support healthy blood pressure, and reduce your risk of heart disease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://nxtlvlhealth.com.au/book-now" target="_blank" rel="noopener noreferrer">
                  Book Your Cardiovascular Health Consultation
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                  Free 15-min Health Assessment
                </a>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CardiovascularHealth;