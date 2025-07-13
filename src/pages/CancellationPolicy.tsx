import SEO from "@/components/SEO";

const CancellationPolicy = () => {
  return (
    <>
      <SEO 
        title="Cancellation Policy | NXTLVL Health"
        description="Learn about NXTLVL Health's cancellation and no-show policy. 24-hour cancellation policy with flexible approach for unforeseen circumstances."
        canonical="/cancellation-policy"
        keywords="naturopath cancellation policy, appointment cancellation, NXTLVL Health booking policy"
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">
              Cancellation Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Cancellation and No-Show Policy
                </h2>
                <p>
                  At NXTLVL Health, we deeply respect the value of your time and understand that unforeseen circumstances may lead to appointment cancellations. We also acknowledge that, like you, our time is a precious resource, and other clients may have missed an opportunity for an appointment during your reserved time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  24 Hour Weekday Cancellation Policy
                </h2>
                <p>
                  We uphold a 24 hour cancellation policy. This means that any appointments cancelled within 24 hours prior to the scheduled booking will be subject to this policy. Similarly, if you are unable to attend your appointment without prior notice, this cancellation policy will be applied.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Exceptions to Cancellation Fees
                </h2>
                <p>
                  Cancellations or no-shows occurring 24 hour or less before the scheduled time may be re-booked at no additional cost to you. For the first instance of a cancellation within the 24 period, clients will be given the opportunity to re-book without any financial penalty.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  When Cancellation Fees Will Apply
                </h2>
                <p>
                  Subsequent cancellations within the 24 hour period by or for the same client will incur a cancelled booking fee. This fee will be equivalent to half the value of the consultation fee for the booking that was made and subsequently cancelled. Additionally, clients who fail to attend their appointment without prior notification to the clinic may also be subject to a cancelled booking fee.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Our Commitment to Flexibility
                </h2>
                <p>
                  We strive to avoid imposition of cancellation fees whenever possible. If you believe that a fee has been unfairly issued, or that your circumstances were truly unavoidable, we will assess each situation on a case-by-case basis. We kindly request that you contact us at least 24 hours prior to your appointment time to provide us with an opportunity to accommodate other clients and waive any potential fee.
                </p>
                <p>
                  We appreciate your understanding and cooperation in ensuring a smooth and fair scheduling process for all our valued clients.
                </p>
                <p>
                  Should you have any questions or concerns regarding this policy or your specific circumstances, please do not hesitate to contact us. We are committed to working together towards a positive and harmonious client experience.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancellationPolicy;