import { Helmet } from 'react-helmet-async';

const WebsiteDisclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Website Disclaimer | NXTLVL Health</title>
        <meta name="description" content="Read NXTLVL Health's website disclaimer covering general information, liability limitations, and intellectual property rights for our health services website." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">
              Website Disclaimer
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <section>
                <p>
                  The information presented on this website serves solely for general informational purposes. The content provided herein should not be considered a replacement for personalised professional advice, diagnosis, or treatment. It is imperative to seek counsel from qualified professionals regarding any medical, health, or related concerns.
                </p>
              </section>

              <section>
                <p>
                  While we exert diligent efforts to maintain the accuracy and timeliness of the information, we make no representations or warranties of any kind, whether expressed or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained for any purpose. Thus, any reliance on such information is strictly at your own risk.
                </p>
              </section>

              <section>
                <p>
                  In no circumstance will NXTLVL Health, its affiliates, employees, agents, or representatives be liable for any loss or damage, including but not limited to indirect or consequential loss or damage, or any loss or damage whatsoever resulting from data loss or profits arising out of, or in connection with, the use of this website.
                </p>
              </section>

              <section>
                <p>
                  This website may provide links to external websites beyond the control of NXTLVL Health. We hold no authority over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
                </p>
              </section>

              <section>
                <p>
                  While every endeavour is made to keep the website operational and efficient, NXTLVL Health does not assume responsibility and will not be held liable for any temporary unavailability due to technical issues beyond our control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Testimonials and Intellectual Property
                </h2>
                <p>
                  This website may feature testimonials, reviews, or opinions from individuals who have utilised our services. These expressions reflect the experiences and viewpoints of those individuals and do not necessarily represent the perspectives of NXTLVL Health.
                </p>
                <p>
                  The content of this website is safeguarded by copyright and other intellectual property rights. Unauthorised reproduction, distribution, or use of the materials on this website is strictly prohibited without the written consent of NXTLVL Health.
                </p>
              </section>

              <section>
                <p>
                  By utilising this website, you signify your agreement with the terms outlined in this disclaimer. If you do not concur with these terms, kindly refrain from using this website.
                </p>
              </section>

              <section>
                <p>
                  If you possess any questions, concerns, complaints, or necessitate further information regarding our Website Disclaimer or the management of your personal information, please contact our Privacy Officer at office@nxtlvlhealth.com.au. Kindly allow a reasonable time frame for us to address your inquiries and concerns.
                </p>
              </section>

              <section>
                <div className="border-t pt-6 mt-8">
                  <p className="text-sm">
                    <strong>ABN:</strong> 34 377 382 272<br />
                    <strong>Website:</strong> www.nxtlvlhealth.com.au
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteDisclaimer;