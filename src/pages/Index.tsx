import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeIcon, GraduationCap, Briefcase, HeartHandshake, BookOpenCheck } from 'lucide-react';
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  const services = [
    {
      title: "Naturopathy",
      description: "Holistic health solutions tailored to your unique needs.",
      icon: HomeIcon,
      link: "/services"
    },
    {
      title: "Personal Training",
      description: "Achieve your fitness goals with expert guidance and support.",
      icon: GraduationCap,
      link: "/services"
    },
    {
      title: "Corporate Wellness",
      description: "Enhance employee well-being and productivity with our programs.",
      icon: Briefcase,
      link: "/services"
    },
    {
      title: "Gut Health",
      description: "Expert care for digestive issues, SIBO, IBS, and more.",
      icon: HeartHandshake,
      link: "/what-we-treat/gut-health-specialist"
    },
    {
      title: "Nutrition",
      description: "Personalised nutrition plans for weight loss, muscle gain, and overall health.",
      icon: BookOpenCheck,
      link: "/services/nutritionist-brisbane"
    },
  ];

  return (
    <>
      <SEO
        title="NXTLVL Health - Naturopath, Personal Training, Gut Health Specialist Brisbane"
        description="Holistic health solutions in Brisbane. Naturopathy, personal training, gut health, corporate wellness. Achieve your health goals with expert guidance."
        canonical="/"
        keywords="Naturopath Brisbane, Personal Training Brisbane, Gut Health Specialist Brisbane, Corporate Wellness Brisbane"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="space-y-8 lg:mt-0 mt-12">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    Elevate Your Health with <span className="text-primary">NXTLVL Health</span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                    Naturopathy, Personal Training & Gut Health in Brisbane
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Your journey to optimal health starts here.
                  </p>
                  
                  {/* Mobile Image - placed right after headline */}
                  <div className="relative lg:hidden mb-8 -mx-4">
                    <img alt="Naturopath and personal training consultation at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/099999999999999999999999.png" />
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight" asChild>
                    <a href="https://nxtlvlhealth.com.au/book-now/">
                      <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                      <span className="text-center">BOOK NOW</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="text-base sm:text-lg px-4 py-3 h-auto" asChild>
                    <a href="tel:0731808853">
                      <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                      Call Mitch
                    </a>
                  </Button>
                </div>

                {/* Google 5 Star Badge */}
                <div className="mt-6">
                  <script defer async src='https://cdn.trustindex.io/loader.js?46476cb4757e774210564760f2f'></script>
                </div>
              </div>
              
              {/* Desktop Image - only visible on large screens */}
              <div className="relative hidden lg:block">
                <img alt="Naturopath and personal training consultation at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/099999999999999999999999.png" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">About NXTLVL Health</h2>
                <p className="text-lg text-muted-foreground">
                  We are a team of dedicated health professionals committed to providing holistic and personalised care. Our services include naturopathy, personal training, gut health specialisation, and corporate wellness programs.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our mission is to empower you to achieve your health goals through evidence-based practices and a supportive environment.
                </p>
              </div>
              <div>
                <img alt="About NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/099999999999999999999998.png" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Added after About */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground">Real results from real people</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <TestimonialCard
                name="Jazzy Lee"
                review="Mitch is incredibly knowledgeable and kind, I've felt an overwhelming amount of support since working with him. Since seeing him, I've noticed real improvements in both my physical and mental health, and I finally feel like I'm moving in the right direction."
                timeAgo="9 weeks ago"
              />
              <TestimonialCard
                name="Dylan-Tane Moore"
                review="I've been working with Mitch now for just over a month and it's hard to describe in words beneficial this has been for me. I'm the healthiest I've ever been, reaching PB goals in the gym, no more gut issues/bloating and have gained significant weight and muscle mass."
                timeAgo="43 weeks ago"
              />
              <TestimonialCard
                name="S Grant"
                review="I highly recommend Mitch from NXTLVL Health. His professional yet friendly approach creates the perfect balance, and his holistic methods truly set him apart. Mitch combines science-backed results with personalised nutrition and training plans."
                timeAgo="4 weeks ago"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Services</h2>
              <p className="text-xl text-muted-foreground">
                Explore our range of health and wellness services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                    <CardDescription className="text-center text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button asChild variant="secondary">
                      <a href={service.link}>Learn More</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional testimonial before CTA */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <TestimonialCard
                name="Shenoa Fox"
                review="I had an exceptional experience at NXTLVL with Mitch Potts, whose naturopathic approach was both thorough and insightful. After struggling with a persistent cough for over four months, he took the time to explore the potential causes and gave me tangible insights and treatments. His depth of knowledge, attention to detail, and genuine care were evident throughout the consultation."
                timeAgo="6 weeks ago"
                className="max-w-2xl mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Take the first step towards a healthier you. Contact us today to schedule a consultation and discover how we can help you achieve your wellness goals.
            </p>
            <Button size="lg" className="text-base sm:text-lg px-6 py-4 h-auto" asChild>
              <a href="https://nxtlvlhealth.com.au/book-now/">
                <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                BOOK NOW
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
