import SEO from '@/components/SEO';
import { CheckCircle, Calendar, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ThankYouBooking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <SEO
        title="Thank You for Booking | NXTLVL Health"
        description="Thank you for booking your appointment with NXTLVL Health. We look forward to seeing you soon."
        canonical="/thank-you-booking"
        noindex={true}
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 animate-in fade-in zoom-in duration-500">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
              <CheckCircle className="h-14 w-14 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              You're All Booked In!
            </h1>
            <p className="text-xl text-muted-foreground">
              Thank you for choosing NXTLVL Health. We're looking forward to helping you on your wellness journey.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-background p-8 rounded-2xl shadow-lg border mb-8 text-left">
            <h2 className="text-2xl font-semibold mb-6 text-foreground text-center">What happens next?</h2>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Confirmation Email</h3>
                  <p className="text-muted-foreground">You'll receive a confirmation email shortly with your appointment details.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Pre-Appointment Call</h3>
                  <p className="text-muted-foreground">We may reach out before your visit to discuss your health goals and any questions you have.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Your Appointment</h3>
                  <p className="text-muted-foreground">Please arrive 10 minutes early to complete any necessary paperwork and settle in.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 mb-8">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Need to reschedule or have questions?</h3>
            <div className="space-y-1 text-muted-foreground">
              <p><strong>Phone:</strong> <a href="tel:0731808853" className="text-primary hover:underline">(07) 3180 8853</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@nxtlvlhealth.com.au" className="text-primary hover:underline">info@nxtlvlhealth.com.au</a></p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-auto py-3 px-6" asChild>
              <a href="tel:0731808853">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: (07) 3180 8853
              </a>
            </Button>
            <Button variant="outline" size="lg" className="h-auto py-3 px-6" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouBooking;
