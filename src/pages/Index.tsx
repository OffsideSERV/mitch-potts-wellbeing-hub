
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Target, Leaf, Shield, Star, Award, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <SEO 
        title="Best Naturopath Brisbane | #1 Rated Natural Health Clinic | NXTLVL Health"
        description="Looking for the best naturopath in Brisbane? Mitchell Potts at NXTLVL Health is Brisbane's #1 rated naturopath with 20+ years experience. Book your free 15-min consultation today!"
        keywords="best naturopath brisbane, naturopath in brisbane, good naturopath brisbane, naturopath brisbane, naturopaths brisbane, natural health brisbane, holistic health brisbane"
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="space-y-8 lg:mt-0 mt-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">Brisbane's #1 Rated Naturopath</span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    Best Naturopath <span className="text-primary">Brisbane</span> | Natural Health Solutions That Actually Work
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Not feeling like yourself and tired of getting no answers? Mitchell Potts, Brisbane's most trusted naturopath with 20+ years experience, will find and heal the root cause of your health problems using proven natural medicine.
                  </p>
                  
                  {/* Mobile Image */}
                  <div className="relative lg:hidden mb-8 -mx-4">
                    <img 
                      alt="Mitchell Potts - Best naturopath in Brisbane at NXTLVL Health clinic" 
                      className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                      src="/lovable-uploads/d8fb55f4-1a1b-4a7f-9aef-fb782c41df21.png" 
                    />
                    <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                      <div className="flex items-center space-x-3">
                        <Award className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold text-sm">Brisbane's Best Naturopath</p>
                          <p className="text-xs text-muted-foreground">20+ Years Experience • 5-Star Rated</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild 
                    size="lg"
                    className="text-base sm:text-lg px-6 py-4 h-auto"
                  >
                    <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                      Book FREE 15-Min Consult
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    asChild 
                    className="text-base sm:text-lg px-6 py-4 h-auto"
                  >
                    <a href="tel:0731808853">
                      Call Brisbane's Best Naturopath
                    </a>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>20+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>New Farm, Brisbane</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>1000+ Happy Clients</span>
                  </div>
                </div>

                {/* Google 5 Star Badge */}
                <div className="mt-6">
                  <script defer async src='https://cdn.trustindex.io/loader.js?46476cb4757e774210564760f2f'></script>
                </div>
              </div>
              
              {/* Desktop Image */}
              <div className="relative hidden lg:block">
                <img 
                  alt="Mitchell Potts - Best naturopath in Brisbane at NXTLVL Health clinic" 
                  className="rounded-2xl shadow-2xl w-full h-auto" 
                  src="/lovable-uploads/d8fb55f4-1a1b-4a7f-9aef-fb782c41df21.png" 
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">Brisbane's Best Naturopath</p>
                      <p className="text-sm text-muted-foreground">20+ Years Experience • 5-Star Rated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Brisbane's Best Naturopath Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Mitchell Potts is Brisbane's Best Naturopath</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                With over 20 years of clinical experience, Mitchell has established himself as the leading naturopath in Brisbane, helping thousands of clients achieve optimal health through evidence-based natural medicine.
              </p>
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden mb-12">
              <img 
                src="/lovable-uploads/e1f6dd06-164a-425b-bc19-839d603bc5ed.png" 
                alt="Mitchell Potts consulting with patient - Best naturopath Brisbane" 
                className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    As Brisbane's most trusted naturopath, Mitchell combines decades of clinical experience with cutting-edge functional testing to deliver results that other practitioners simply can't match. Unlike other naturopaths in Brisbane who take a one-size-fits-all approach, Mitchell creates personalized treatment plans based on your unique health profile.
                  </p>
                  <p>
                    What makes Mitchell the best naturopath Brisbane has to offer? His comprehensive approach addresses the root cause of your health issues, not just the symptoms. Through advanced diagnostic testing and evidence-based natural therapies, he's helped over 1,000 Brisbane residents reclaim their health and vitality.
                  </p>
                </div>
              </div>
              {/* Desktop Image */}
              <div className="relative hidden lg:block">
                <img 
                  src="/lovable-uploads/e1f6dd06-164a-425b-bc19-839d603bc5ed.png" 
                  alt="Mitchell Potts consulting with patient - Best naturopath Brisbane" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                />
              </div>
            </div>

            {/* Expertise Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  icon: Award, 
                  title: "20+ Years Clinical Experience", 
                  description: "Brisbane's most experienced naturopath with thousands of successful case studies" 
                },
                { 
                  icon: Target, 
                  title: "Root-Cause Focused", 
                  description: "Advanced functional testing to identify and treat underlying health imbalances" 
                },
                { 
                  icon: Shield, 
                  title: "Evidence-Based Practice", 
                  description: "Combining traditional naturopathy with modern scientific research for optimal results" 
                },
                { 
                  icon: Heart, 
                  title: "Holistic Health Approach", 
                  description: "Treating the whole person - mind, body, and spirit - for lasting wellness" 
                },
                { 
                  icon: Users, 
                  title: "Personalized Treatment Plans", 
                  description: "Every protocol is tailored specifically to your unique health needs and goals" 
                },
                { 
                  icon: Star, 
                  title: "5-Star Patient Reviews", 
                  description: "Consistently rated as Brisbane's #1 naturopath by satisfied clients" 
                }
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes a Good Naturopath Brisbane Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Makes a Good Naturopath in Brisbane?</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                When searching for naturopaths in Brisbane, it's crucial to find one who combines clinical expertise, personalized care, and proven results. Here's what sets the best naturopath Brisbane apart from the rest.
              </p>
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden mb-12">
              <img 
                src="/lovable-uploads/d4dfb30d-6da4-42d6-86b4-14b51e4d4a8f.png" 
                alt="Advanced naturopathic testing equipment used by Brisbane's best naturopath" 
                className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    A good naturopath Brisbane should have extensive clinical experience, advanced training, and a track record of successful patient outcomes. Mitchell Potts exemplifies these qualities, having dedicated over two decades to perfecting his craft and helping Brisbane residents achieve optimal health.
                  </p>
                  <p>
                    The best naturopath Brisbane offers should also use cutting-edge diagnostic tools and functional testing to uncover root causes of illness. This evidence-based approach, combined with natural therapies, ensures you receive the most effective treatment possible.
                  </p>
                </div>
              </div>
              {/* Desktop Image */}
              <div className="relative hidden lg:block">
                <img 
                  src="/lovable-uploads/d4dfb30d-6da4-42d6-86b4-14b51e4d4a8f.png" 
                  alt="Advanced naturopathic testing equipment used by Brisbane's best naturopath" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - What the Best Naturopath Brisbane Treats */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Conditions Treated by Brisbane's Best Naturopath</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                As the leading naturopath in Brisbane, Mitchell specializes in treating complex health conditions that conventional medicine often struggles to address effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { 
                  title: "Digestive Health", 
                  description: "IBS, SIBO, gut dysfunction, food intolerances, inflammatory bowel conditions",
                  link: "/gut-health"
                },
                { 
                  title: "Women's Health", 
                  description: "Hormonal imbalances, PCOS, fertility support, menopause management",
                  link: "/services"
                },
                { 
                  title: "Mental Health", 
                  description: "Anxiety, depression, stress management, sleep disorders",
                  link: "/anxiety-naturopathy"
                },
                { 
                  title: "Autoimmune Conditions", 
                  description: "Hashimoto's, rheumatoid arthritis, inflammatory conditions",
                  link: "/thyroid-naturopathy"
                },
                { 
                  title: "Skin Conditions", 
                  description: "Eczema, psoriasis, acne, dermatitis, chronic skin issues",
                  link: "/skin-naturopathy"
                },
                { 
                  title: "Weight Management", 
                  description: "Natural weight loss, metabolic dysfunction, insulin resistance",
                  link: "/weight-loss"
                },
                { 
                  title: "Children's Health", 
                  description: "ADHD, behavioral issues, immune support, digestive problems",
                  link: "/childrens-health"
                },
                { 
                  title: "Chronic Fatigue", 
                  description: "Energy optimization, adrenal support, mitochondrial health",
                  link: "/services"
                },
                { 
                  title: "Allergy Management", 
                  description: "Food allergies, environmental sensitivities, immune modulation",
                  link: "/allergy-naturopath"
                }
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-6">
                Don't see your condition listed? As Brisbane's most experienced naturopath, Mitchell treats a wide range of health conditions using natural, evidence-based approaches.
              </p>
              <Button asChild size="lg">
                <Link to="/what-we-treat">View All Conditions We Treat</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Brisbane Locations Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Serving Brisbane & Surrounding Areas</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Located in New Farm, NXTLVL Health is easily accessible to clients throughout Brisbane seeking the best naturopath Brisbane has to offer.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { area: "New Farm", link: "/areas-we-serve/naturopath-new-farm" },
                { area: "Fortitude Valley", link: "/areas-we-serve" },
                { area: "Spring Hill", link: "/areas-we-serve" },
                { area: "Hamilton", link: "/areas-we-serve/naturopath-hamilton" },
                { area: "Clayfield", link: "/areas-we-serve/naturopath-clayfield" },
                { area: "Newstead", link: "/areas-we-serve/naturopath-newstead" },
                { area: "North Brisbane", link: "/areas-we-serve/naturopath-north-brisbane" },
                { area: "Windsor", link: "/areas-we-serve/naturopath-windsor" }
              ].map((location, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Link to={location.link} className="text-primary hover:text-primary/80 font-medium">
                      {location.area}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/areas-we-serve">View All Areas We Serve</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose NXTLVL Health Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why NXTLVL Health is Home to Brisbane's Best Naturopath</h2>
            </div>

            {/* Centered Image */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/1bfb1d77-659c-4abb-bf46-dbc9c76fb806.png" 
                alt="NXTLVL Health clinic - Brisbane's premier naturopathy practice" 
                className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "State-of-the-art clinic facility with advanced diagnostic equipment",
                "Comprehensive functional testing including live blood analysis and hormone panels",
                "Evidence-based treatment protocols backed by scientific research",
                "Personalized herbal medicine formulations created on-site",
                "Integrative approach combining naturopathy with nutritional medicine",
                "Ongoing support and monitoring throughout your health journey",
                "Convenient New Farm location with easy parking and public transport access",
                "Flexible appointment scheduling including telehealth consultations"
              ].map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Experience Brisbane's Best Naturopath?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Don't wait any longer to address your health concerns. Book your free 15-minute consultation with Brisbane's most trusted naturopath and discover how natural medicine can transform your life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="text-base sm:text-lg px-8 py-4">
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    Book FREE Consultation Now
                  </a>
                </Button>
                <Button variant="outline" asChild size="lg" className="text-base sm:text-lg px-8 py-4">
                  <a href="tel:0731808853">
                    Call (07) 3180 8853
                  </a>
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                <p>✓ No obligation • ✓ Free consultation • ✓ Same-day appointments available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
