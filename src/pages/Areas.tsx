
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Phone, 
  MapPin,
  Heart,
  Users,
  Home
} from "lucide-react";

const Areas = () => {
  const suburbs = [
    {
      name: "New Farm",
      description: "This is where our clinic is! Right in the heart of New Farm. If you're nearby, we're just around the corner."
    },
    {
      name: "Fortitude Valley",
      description: "Only minutes away. Known for its fun nightlife and artsy feel, we see many locals from The Valley who want a natural health approach."
    },
    {
      name: "Newstead",
      description: "Just across the river, full of modern apartments and cafes. Many of our clients from Newstead love how close and easy our clinic is to get to."
    },
    {
      name: "Teneriffe",
      description: "A beautiful suburb with old wool stores and trendy cafes. If you're in Teneriffe, you're practically next door!"
    },
    {
      name: "Kangaroo Point",
      description: "Stunning river views and the Story Bridge. We often support busy professionals and families from Kangaroo Point looking for more balance and better health."
    },
    {
      name: "East Brisbane",
      description: "Close to everything and full of charm. East Brisbane locals trust us when they want real answers, not just quick fixes."
    },
    {
      name: "Norman Park",
      description: "A peaceful, family-friendly suburb. Many parents from Norman Park bring their kids in for gut health, sleep, and immune support."
    },
    {
      name: "Bulimba",
      description: "Love Oxford Street? Us too. We're a short drive away for anyone in Bulimba looking for natural help with energy, hormones, or skin."
    },
    {
      name: "Hawthorne",
      description: "Home of the old cinema and leafy streets. If you live in Hawthorne, you're close to expert naturopath care."
    },
    {
      name: "Morningside",
      description: "Full of families and working professionals. Our clients from Morningside love our holistic plans and gentle approach."
    },
    {
      name: "Ascot",
      description: "Elegant streets and race day charm. Ascot locals come to us when they want to take care of their health the natural way."
    },
    {
      name: "Hamilton",
      description: "Whether it's Portside dining or a river stroll, Hamilton residents love how close our clinic is to home."
    },
    {
      name: "Clayfield",
      description: "A lovely mix of old and new. Clayfield locals visit us for everything from stress to skin health to sleep."
    },
    {
      name: "Wilston",
      description: "A little village feel in the big city. If you're in Wilston, our clinic is just a short trip away."
    },
    {
      name: "Windsor",
      description: "Near the hospital and full of charm. We often help Windsor clients who want to try natural therapies alongside their regular care."
    },
    {
      name: "Kelvin Grove",
      description: "Home to students, creatives, and QUT life. We support many Kelvin Grove locals with energy, stress, and digestion."
    },
    {
      name: "Paddington",
      description: "Shopping, coffee, and classic Queensland homes. Paddington locals love our mix of natural remedies and practical support."
    },
    {
      name: "Red Hill",
      description: "Hilly, green, and full of character. Red Hill is just a short drive to natural health care that gets results."
    },
    {
      name: "Auchenflower",
      description: "Close to the river and Wesley Hospital. Clients from Auchenflower often come to us for long-term help with chronic issues."
    },
    {
      name: "Toowong",
      description: "Right by UQ and the shops. Toowong locals love our real-talk advice and gentle naturopathic treatments."
    }
  ];

  return (
    <>
      <SEO 
        title="Areas We Serve | NXTLVL Health"
        description="Not feeling like yourself and not getting answers? Mitchell is a 5-star Naturopath that will find and heal the root cause of your problems. Find out where to get help."
        canonical="/areas-we-serve"
        keywords="naturopath Brisbane areas, Brisbane naturopathy suburbs, natural health Brisbane, holistic health Brisbane"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Areas We Serve | <span className="text-primary">Local Naturopath Near You</span>
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/001a23d3-f9a1-4973-a6a1-a0bf46a7cfbb.png"
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Local Natural Health</p>
                        <p className="text-xs text-muted-foreground">Brisbane • Surrounding Areas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight"
                >
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-center">Book a Consult</span>
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="text-base sm:text-lg px-4 py-3 h-auto"
                >
                  <a href="tel:0731808853">
                    <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                    Call Mitch Now
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
                alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/001a23d3-f9a1-4973-a6a1-a0bf46a7cfbb.png" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Local Natural Health</p>
                    <p className="text-sm text-muted-foreground">Brisbane • Surrounding Areas</p>
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
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Looking for a trusted naturopath near your suburb? NXTLVL Health is here to help.
              </p>
              <p>
                We're based right in <strong>New Farm</strong>, and we support clients from all around Brisbane's inner and surrounding suburbs. People travel from across the city to see us because they want <strong>natural answers, real care, and a plan that works for their body</strong>.
              </p>
              <p>
                Below are just some of the suburbs we work with.
              </p>
            </div>
          </div>

          {/* Community Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/123c33a8-6a44-4e25-911f-05813ec42a6f.png" 
              alt="Happy family at NXTLVL Health representing our local community wellness approach" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>
        </div>
      </section>

      {/* Patient Care Image */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <img 
              src="/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png" 
              alt="Naturopath providing comprehensive health assessment in Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>
        </div>
      </section>

      {/* Suburbs Grid Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suburbs.map((suburb, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Home className="h-6 w-6 text-primary" />
                    <span className="text-xl">{suburb.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {suburb.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Nearby Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Live Nearby? We'd Love to Support You</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Even if your suburb isn't listed, we probably still serve your area. Whether you're just down the street or a few suburbs over, <strong>NXTLVL Health is here to help you feel better, naturally</strong>.
              </p>
            </div>
          </div>

          {/* Natural Medicine Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/d515fc10-3cc2-4062-adf8-2638cee1c7bc.png" 
              alt="Naturopath preparing personalised herbal medicine treatments" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Natural Health Solutions</h3>
                <p className="text-muted-foreground">
                  Root-cause healing using natural therapies and modern science
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Personalised Care</h3>
                <p className="text-muted-foreground">
                  Every treatment plan is built around your unique needs and goals
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Convenient Location</h3>
                <p className="text-muted-foreground">
                  Easy to reach from all across Brisbane's inner suburbs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Consultation Image */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <img 
              src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png" 
              alt="Professional naturopath consultation showing personalised care approach" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              No matter which suburb you're from, we're here to help you feel your best with <strong>natural, effective health solutions</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-base sm:text-lg px-6 py-4"
              >
                <a href="https://nxtlvlhealth.com.au/book-now/">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consult
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="text-base sm:text-lg px-6 py-4"
              >
                <a href="tel:0731808853">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Mitch Now
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

export default Areas;
