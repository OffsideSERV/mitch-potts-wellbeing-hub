import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Calendar, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us | NXTLVL Health Brisbane"
        description="Get in touch with NXTLVL Health. Book a free 15-minute consultation with our expert naturopath or call us directly. Located in Brisbane, Queensland."
        canonical="/contact"
        keywords="contact naturopath Brisbane, book consultation Brisbane, NXTLVL Health contact"
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to take the next step towards better health? Get in touch with us today.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-6">
                    Get In Touch
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Phone</h3>
                        <a 
                          href="tel:0731808853" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          (07) 3180 8853
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Email</h3>
                        <a 
                          href="mailto:info@nxtlvlhealth.com.au" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@nxtlvlhealth.com.au
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Location</h3>
                        <p className="text-muted-foreground">
                          Brisbane, Queensland
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Availability</h3>
                        <p className="text-muted-foreground">
                          Flexible Hours Available
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Online & In-Person Consultations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-muted/30 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Start Your Health Journey Today
                </h2>
                <p className="text-muted-foreground mb-8">
                  Book a free 15-minute consultation to discuss your health concerns and learn how we can help you achieve your wellness goals.
                </p>
                
                <div className="space-y-4">
                  <Button size="lg" className="w-full" asChild>
                    <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Free 15-Min Consult
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <a href="tel:0731808853">
                      <Phone className="h-5 w-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-medium text-foreground mb-2">
                    What to Expect in Your Free Consult:
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Discussion of your health concerns</li>
                    <li>• Understanding of your wellness goals</li>
                    <li>• Overview of our approach</li>
                    <li>• Answers to your questions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;