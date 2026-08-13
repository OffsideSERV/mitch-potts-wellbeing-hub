import SEO from '@/components/SEO';
import { CheckCircle, Calendar, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10">
      <SEO
        title="Thank You for Booking | NXTLVL Health"
        description="Thank you for booking your appointment with NXTLVL Health. We'll be in touch soon to confirm your session."
        canonical="/thank-you"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Thank You for Booking!
            </h1>
            <p className="text-xl text-muted-foreground">
              Your MLS Laser Therapy session has been successfully booked.
            </p>
          </div>

          <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">What happens next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Confirmation Email</h3>
                  <p className="text-muted-foreground">You'll receive a confirmation email within the next few minutes with all the details.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Pre-Session Call</h3>
                  <p className="text-muted-foreground">We may call you before your appointment to discuss your health goals and any questions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Your Appointment</h3>
                  <p className="text-muted-foreground">Arrive 10 minutes early to complete any necessary paperwork and get the most from your session.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-8">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Need to contact us?</h3>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Email:</strong> info@nxtlvlhealth.com.au</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              We're excited to help you start your healing journey!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ThankYou;