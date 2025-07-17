
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";

const GutHealthVideo = () => {
  return (
    <>
      <SEO
        title="Gut Health Video - Learn How to Fix Your Gut | NXTLVL Health"
        description="Watch our comprehensive gut health video to learn exactly how you can fix your digestive issues naturally. Book a free 15-minute consultation with our Brisbane naturopath."
        keywords="gut health video, digestive health, naturopath Brisbane, fix gut health, digestive issues, natural health"
        canonical="/gut-health-video"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Play className="h-8 w-8 text-primary mr-3" />
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Learn How to Fix Your Gut Health
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Watch this comprehensive video to discover the root causes of digestive issues and learn our proven natural approach to healing your gut.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://iframe.mediadelivery.net/embed/372827/b1ad3f7b-f9e4-4a48-94ad-2c4f1c19c4c2?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  loading="lazy"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                  title="Gut Health Video - How to Fix Your Digestive Issues"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Gut Health?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Book your FREE 15-minute consultation with our expert naturopath and discover your personalized path to digestive wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Your Free Consultation
                </Button>
                <p className="text-sm text-muted-foreground">
                  No obligation • 100% Free • Expert advice
                </p>
              </div>
            </div>

            {/* Calendly Integration */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-lg shadow-lg p-8">
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/nxtlvlhealth-info/15-min-consult"
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <script 
        type="text/javascript" 
        src="https://assets.calendly.com/assets/external/widget.js" 
        async
      ></script>
    </>
  );
};

export default GutHealthVideo;
