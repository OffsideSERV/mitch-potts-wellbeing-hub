import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from "@/components/SEO";
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const BookNow = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data !== 'string') return;
      if (e.data.includes('cliniko-bookings-complete')) {
        navigate('/thank-you');
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate]);

  return (
    <>
      <SEO 
        title="Book Appointment | NXTLVL Health | Brisbane Naturopath"
        description="Book your appointment with NXTLVL Health. Easy online booking for naturopathy consultations in Brisbane. Start your health journey today."
        canonical="/book-now"
        keywords="book naturopath Brisbane, naturopathy appointment, health consultation booking, NXTLVL Health appointment"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Book Your Appointment
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Take the first step towards better health. Schedule your consultation with our expert naturopath today.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Contact Information Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-muted/30 rounded-lg p-6 sticky top-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      Contact Information
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Phone</p>
                          <a href="tel:0731808853" className="text-muted-foreground hover:text-primary">
                            (07) 3180 8853
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <a href="mailto:info@nxtlvlhealth.com.au" className="text-muted-foreground hover:text-primary">
                            info@nxtlvlhealth.com.au
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Location</p>
                          <p className="text-muted-foreground">Brisbane, Queensland</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Hours</p>
                          <p className="text-muted-foreground">Flexible Hours Available</p>
                          <p className="text-sm text-muted-foreground">Online & In-Person</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <h4 className="font-medium text-foreground mb-2">
                        Need Help Booking?
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        If you have any questions or need assistance with booking, feel free to call us directly.
                      </p>
                      <a 
                        href="tel:0731808853" 
                        className="text-primary hover:text-primary/80 text-sm font-medium"
                      >
                        Call (07) 3180 8853
                      </a>
                    </div>
                  </div>
                </div>

                {/* Booking System */}
                <div className="lg:col-span-3">
                  <div className="bg-background rounded-lg shadow-sm border overflow-hidden">
                    <div className="p-6 border-b">
                      <h2 className="text-2xl font-semibold text-foreground mb-2">
                        Schedule Your Appointment
                      </h2>
                      <p className="text-muted-foreground">
                        Select your preferred appointment type and available time slot below.
                      </p>
                    </div>
                    
                    <div className="relative">
                      <iframe 
                        id="cliniko-60843051" 
                        src="https://nxtlvl-health.au2.cliniko.com/bookings?embedded=true" 
                        frameBorder="0" 
                        scrolling="auto" 
                        width="100%" 
                        height="1000" 
                        style={{ pointerEvents: 'auto', height: '800px', minHeight: '600px' }}
                        className="w-full"
                        title="NXTLVL Health Booking System"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What to Expect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Initial Consultation
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive health assessment and discussion of your wellness goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Personalised Plan
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Customised treatment plan designed specifically for your needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Ongoing Support
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Continuous guidance and adjustments to ensure optimal results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookNow;