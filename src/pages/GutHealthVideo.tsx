
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
              <div 
                dangerouslySetInnerHTML={{
                  __html: `<div style="position:relative;padding-top:56.25%;"><iframe src="https://iframe.mediadelivery.net/embed/413460/07e2e40e-8635-4b33-b147-f668a3f8a330?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true"></iframe></div>`
                }}
              />
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
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Your Free Consultation
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

export default GutHealthVideo;
