import { useEffect } from 'react';
import SEO from '@/components/SEO';
import Layout from '@/components/Layout';
import { CheckCircle, Phone, Clock, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ThankYouFreeConsult = () => {
  useEffect(() => {
    const w = window as any;
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'conversion', {
        'send_to': 'AW-17970944922/0IS4CIWJq_0bEJq3m_lC'
      });
    }
  }, []);

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary/10 to-accent/10">
      <SEO
        title="Thank You | Your Free 15-Minute Consult Is Booked"
        description="Your free 15-minute consult with naturopath Mitch Potts is booked. Check your inbox for confirmation and see how to get the most from your call."
        canonical="/thank-you-free-consult"
        noindex={true}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              You're All Booked In!
            </h1>
            <p className="text-xl text-muted-foreground">
              Thank you for booking your free 15-minute consultation with NXTLVL Health.
            </p>
          </div>

          <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">What happens next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Check Your Email</h3>
                  <p className="text-muted-foreground">You'll receive a confirmation email shortly with your booking details.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Expect Our Call</h3>
                  <p className="text-muted-foreground">We'll call you at the date and time you selected. Make sure your phone is nearby so you don't miss it!</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">15 Minutes, No Obligation</h3>
                  <p className="text-muted-foreground">This is a relaxed, no-pressure chat to understand your health goals and see how we can help.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-8">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Need to reschedule?</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>No worries — just send us an email and we'll sort it out.</p>
              <p><strong>Email:</strong> info@nxtlvlhealth.com.au</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              We're looking forward to chatting with you!
            </p>
          </div>

        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ThankYouFreeConsult;
