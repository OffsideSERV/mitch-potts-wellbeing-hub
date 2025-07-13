
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AllergyNaturopath = () => {
  return (
    <>
      <SEO 
        title="Allergy Naturopath Brisbane | Food & Environmental Allergies"
        description="Expert allergy naturopath in Brisbane specialising in food sensitivities, environmental allergies, and natural allergy treatment. Get personalised allergy testing and treatment."
        canonical="/allergy-naturopath"
        keywords="allergy naturopath Brisbane, food allergy testing, environmental allergies, naturopathic allergy treatment, food sensitivities"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Allergy Naturopath | Natural Relief and <span className="text-primary">Support</span> at NXTLVL Health
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Natural allergy treatment consultation at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      <div>
                        <p className="font-semibold text-sm">Natural Allergy Relief</p>
                        <p className="text-xs text-muted-foreground">Immune Support • Root Cause Treatment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight">
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-center">Book a Free 15-Min Consult</span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-base sm:text-lg px-4 py-3 h-auto">
                  <a href="tel:0731808853">
                    <svg className="mr-2 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    Call Mitch
                  </a>
                </Button>
              </div>

              {/* Google 5 Star Badge */}
              <div className="mt-8">
                <script defer async src='https://cdn.trustindex.io/loader.js?46476cb4757e774210564760f2f'></script>
              </div>
            </div>
            
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                alt="Natural allergy treatment consultation at NXTLVL Health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <div>
                    <p className="font-semibold">Natural Allergy Relief</p>
                    <p className="text-sm text-muted-foreground">Immune Support • Root Cause Treatment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for Natural Way Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Looking for a Natural Way to Manage Allergies?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" 
              alt="Woman consulting with allergy naturopath in Brisbane" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Do you struggle with <strong>hay fever, itchy skin, food reactions, or chronic congestion</strong>? Are you tired of taking antihistamines that only mask the symptoms but never get to the cause? At NXTLVL Health, we understand how frustrating it can be to live with ongoing allergy symptoms.
                </p>
                <p>
                  Our allergy naturopath, Mitch, offers a <strong>gentle, whole-person approach</strong> that aims to reduce allergy symptoms, support your immune system, and uncover the underlying causes. Using naturopathic medicine, Mitch helps allergy sufferers find <strong>long-lasting relief</strong> from a range of allergic diseases—naturally.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" 
                alt="Woman consulting with allergy naturopath in Brisbane" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Allergies Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Understanding Allergies and the Immune System</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Allergies occur when the immune system overreacts to a normally harmless substance like pollen, food, or animal dander. This overreaction is called an allergic response and may trigger symptoms like sneezing, watery eyes, itchy skin, or digestive upset. The immune system reacts to an allergen as if it were a dangerous bacteria or virus, releasing histamine and other chemicals from mast cells, causing inflammation in the nasal passages, skin, gut, or respiratory tract.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/507d386f-e7d8-4e14-a144-56b40f6d528f.png" 
              alt="NXTLVL Health immune system support and allergy treatment" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Common Allergy Symptoms We See Include:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span className="text-lg">Runny nose or nasal congestion</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    <span className="text-lg">Watery or itchy eyes</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                    <span className="text-lg">Post nasal drip and itchy throat</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span className="text-lg">Skin rashes or atopic dermatitis</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-2 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                    <span className="text-lg">Digestive symptoms after eating certain food</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Allergies We Support Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Common Allergies We Support</h2>
          </div>

          <div className="mb-12">
            <img 
              src="/lovable-uploads/0aadec6a-7f1f-4a21-854c-39d8c3a218d0.png" 
              alt="Naturopath conducting allergy testing and analysis" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <h3 className="text-lg font-semibold">ALLERGIC RHINITIS (HAY FEVER)</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                  <h3 className="text-lg font-semibold">FOOD ALLERGIES AND FOOD INTOLERANCES</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <h3 className="text-lg font-semibold">SEASONAL ALLERGIES LIKE POLLEN ALLERGIES</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  <h3 className="text-lg font-semibold">ANIMAL DANDER AND DUST MITE ALLERGIES</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <h3 className="text-lg font-semibold">ATOPIC DERMATITIS AND ECZEMA</h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How a Naturopath Can Help Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How a Naturopath for Allergies Can Help</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Unlike conventional allergy treatment, which often relies on antihistamines or other medications, a naturopathic approach focuses on the root cause. Mitch supports the whole person—looking at diet, gut function, immune system balance, and environmental triggers.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <img 
              src="/lovable-uploads/aa4b685d-0956-463f-ad98-180c34dbdb0d.png" 
              alt="Naturopathic allergy treatment and natural remedies" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Naturopathic treatments aim to:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-lg">Reduce inflammation</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-lg">Modulate immune response</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-lg">Support gut health and healing</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-lg">Correct nutrient deficiencies</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-2 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-lg">Reduce exposure to common triggers</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Mitch Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Meet Mitch – Your Allergy Naturopath</h2>
              <div className="text-lg text-muted-foreground leading-relaxed">
                <p>
                  Mitch is a compassionate and experienced naturopathic doctor with a special interest in allergies, immune system dysregulation, and gut health. He has helped many clients reduce symptoms of allergic rhinitis, food sensitivities, and skin reactions using herbal medicine, nutritional supplements, and practical, personalised plans.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/81bb4143-d975-44a3-8df2-57e4ed8a1f3e.png" 
                alt="Mitch Potts - Allergy Naturopath at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Allergy Testing Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Allergy Testing and Investigations</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                To get clear on the cause of your symptoms, we may recommend functional testing such as:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                    <span className="text-lg font-semibold">Food intolerance testing</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                    <span className="text-lg font-semibold">Food allergy blood test</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                    <span className="text-lg font-semibold">Gut function and microbiome analysis</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                    <span className="text-lg font-semibold">Nutrient deficiency testing</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/6aea163f-811c-4a86-ad6c-54db726e95ea.png" 
                alt="Comprehensive allergy testing and analysis at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              Allergy testing can involve a range of methods including blood tests, skin prick tests, and elimination diets to identify specific allergens.
            </p>
            <p>
              This allows us to identify triggers like cow's milk, gluten, certain food chemicals, or imbalanced gut bacteria—then create a strategy to heal and support your body.
            </p>
          </div>
        </div>
      </section>

      {/* Gut Health and Allergies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Gut Health and Allergies</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Your digestive system plays a major role in regulating immune responses. Poor gut function can trigger symptoms, lead to nutrient deficiencies, and contribute to immune system dysregulation. A diverse and balanced microbiome can help calm immune system responses to allergens, reducing the severity of allergic reactions.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Mitch supports gut healing with:</h3>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">Fermented foods and prebiotics</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">Botanical medicine for inflammation</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">Elimination diets to reduce exposure</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">Probiotic therapy and digestive enzymes</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-lg text-muted-foreground">
                Probiotics can improve quality of life for allergy sufferers by supporting gut health and reducing symptoms.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/f53858e6-8ef9-4571-9ccb-f9e90df7e025.png" 
                alt="Gut health support for allergy management at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Herbal Medicines Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Herbal Medicines and Supplements</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                We use evidence-based herbal remedies known for their anti-allergic properties. These may include:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <div>
                      <h4 className="text-lg font-semibold">Stinging nettle</h4>
                      <p className="text-muted-foreground">(reduces histamine release)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <div>
                      <h4 className="text-lg font-semibold">Albizia and baical skullcap</h4>
                      <p className="text-muted-foreground">(anti-inflammatory and immune modulation)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <div>
                      <h4 className="text-lg font-semibold">Eyebright</h4>
                      <p className="text-muted-foreground">(supports watery eyes and nasal symptoms)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/843aa30e-0f25-485d-956e-d4e473082207.png" 
                alt="Natural herbal medicines for allergy treatment" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-12">
            <p>
              Stinging nettles are commonly used as a natural treatment for allergies and allergic rhinitis, offering relief from symptoms.
            </p>
            <p>
              Nutritional supplements also help reduce inflammation and support immune health. Mitch may recommend:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6 text-center">
                <svg className="h-8 w-8 text-primary mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                <h4 className="text-lg font-semibold mb-2">Vitamin C and quercetin</h4>
                <p className="text-muted-foreground">(natural antihistamines)</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6 text-center">
                <svg className="h-8 w-8 text-primary mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
                <h4 className="text-lg font-semibold mb-2">Zinc and vitamin A</h4>
                <p className="text-muted-foreground">(immune modulators)</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6 text-center">
                <svg className="h-8 w-8 text-primary mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                <h4 className="text-lg font-semibold mb-2">Omega-3s</h4>
                <p className="text-muted-foreground">(and other anti-inflammatory nutrients)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supporting Food Allergy Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Supporting Food Allergy and Intolerance</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Food reactions can cause both obvious and subtle symptoms—from digestive upset to itchy skin to fatigue. At NXTLVL Health, we help identify which foods are contributing to your symptoms and use elimination diets and gut repair strategies to bring relief.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">We may support with:</h3>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">Rotational diets</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">Tailored food plans</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">Support for reintroducing foods after healing</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/6d0b6778-ba4b-478d-9180-3b79fe27577c.png" 
                alt="Food allergy and intolerance support consultation" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Triggers & Management Sections */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Environmental Triggers */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Reducing Environmental Triggers</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Mitch will also guide you in reducing exposure to common triggers such as:
                </p>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base">Pollen and dust mites</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base">Animal dander</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base">Mould and indoor allergens</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-lg text-muted-foreground mt-6">
                  Simple home and lifestyle changes can go a long way in reducing inflammation and allergic flare-ups.
                </p>
              </div>
            </div>

            {/* Managing Symptoms */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Managing Symptoms While Supporting Healing</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  While we work to heal your immune system long term, we also help you feel better now. This may include:
                </p>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base">Botanical support for nasal passages and itchy skin</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base">Support for post nasal drip, itchy throat, and runny nose</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base">Calming herbs to reduce reactivity and stress</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect & Who We Help Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* What to Expect */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">What to Expect at Your First Consultation</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Your first visit includes:
                </p>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base">A full health and symptom history</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base">Discussion of current lifestyle and diet</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base">Review of past allergy testing or medications</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base">Personalised plan to manage symptoms and support healing</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Who We Help */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Who We Help</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Mitch supports a wide range of allergy sufferers, including:
                </p>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base">Children with food allergy or itchy skin</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base">Adults with hay fever and allergic rhinitis</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base">Clients with eczema, asthma, or chronic sinus problems</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base">Those with multiple sensitivities or intolerances</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Health Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose NXTLVL Health for Allergy Support?</h2>
          </div>

          <div className="mb-12">
            <img 
              src="/lovable-uploads/681db518-b59b-4540-ab5a-b9bba5b43d6c.png" 
              alt="NXTLVL Health natural allergy support clinic" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base"><strong>Whole-person, natural allergy treatment</strong></span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base"><strong>Experienced allergy naturopath with a root cause focus</strong></span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base"><strong>Functional testing options available</strong></span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base"><strong>Gentle, science-based therapies</strong></span>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-2 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base"><strong>A welcoming clinic environment and compassionate care</strong></span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              If you're ready to explore natural ways to manage allergies and improve your immune health, NXTLVL Health is here for you.
            </p>
            <h3 className="text-2xl font-bold mb-6">Book Your First Appointment</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Take the first step today and book a consultation with Mitch—your trusted allergy naturopath. Together, we'll uncover the root cause, relieve symptoms, and help you feel strong, balanced, and well again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="text-base sm:text-lg px-8 py-4 h-auto">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book a Free 15-Min Consult
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base sm:text-lg px-8 py-4 h-auto">
                <a href="tel:0731808853">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Call Mitch
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

export default AllergyNaturopath;
