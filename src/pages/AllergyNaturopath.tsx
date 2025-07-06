
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Phone, 
  CheckCircle, 
  Heart, 
  Users, 
  Target,
  Leaf,
  Zap,
  Shield,
  Activity
} from "lucide-react";

const AllergyNaturopath = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Allergy Naturopath | Natural Relief and Support at <span className="text-primary">NXTLVL Health</span>
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopath consultation for allergy treatment at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Allergy Naturopathy</p>
                        <p className="text-xs text-muted-foreground">Natural Relief • Root Cause</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight"
                >
                  <a href="https://nxtlvlhealth.com.au/book-now/" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-center">Book Your First Appointment</span>
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="text-base sm:text-lg px-4 py-3 h-auto"
                >
                  <a href="tel:0731808853">
                    <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                    Call Mitch
                  </a>
                </Button>
              </div>

              {/* Google 5 Star Badge */}
              <div className="mt-6">
                <script defer async src='https://cdn.trustindex.io/loader.js?46476cb4757e774210564760f2f'></script>
              </div>
            </div>
            
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                alt="Naturopath consultation for allergy treatment at NXTLVL Health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Allergy Naturopathy</p>
                    <p className="text-sm text-muted-foreground">Natural Relief • Root Cause</p>
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
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
              alt="Woman discussing allergy symptoms with naturopath at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Do you struggle with hay fever, itchy skin, food reactions, or chronic congestion? Are you tired of taking antihistamines that only mask the symptoms but never get to the cause? At NXTLVL Health, we understand how frustrating it can be to live with ongoing allergy symptoms.
                </p>
                <p>
                  Our allergy naturopath, Mitch, offers a gentle, whole-person approach that aims to reduce allergy symptoms, support your immune system, and uncover the underlying causes. Using naturopathic medicine, Mitch helps allergy sufferers find long-lasting relief from a range of allergic diseases—naturally.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
                alt="Woman discussing allergy symptoms with naturopath at NXTLVL Health" 
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

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
              alt="Naturopath analyzing immune system function at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Common Allergy Symptoms We See Include:</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Runny nose or nasal congestion</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Watery or itchy eyes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Post nasal drip and itchy throat</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Skin rashes or atopic dermatitis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Digestive symptoms after eating certain food</span>
                </li>
              </ul>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
                alt="Naturopath analyzing immune system function at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Allergic rhinitis (hay fever)</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Food allergies and food intolerances</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Seasonal allergies like pollen allergies</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Animal dander and dust mite allergies</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md md:col-span-2 lg:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Atopic dermatitis and eczema</span>
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
            <div class="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Unlike conventional allergy treatment, which often relies on antihistamines or other medications, a naturopathic approach focuses on the root cause. Mitch supports the whole person—looking at diet, gut function, immune system balance, and environmental triggers.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-showing-patient-results-on-a-computer-scaled.jpeg" 
              alt="Naturopath explaining allergy treatment approach to patient at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6">Naturopathic treatments aim to:</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">Reduce inflammation</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">Modulate immune response</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">Support gut health and healing</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">Correct nutrient deficiencies</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md md:col-span-2 lg:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Activity className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">Reduce exposure to common triggers</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Mitch Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Mitch – Your Allergy Naturopath</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Mitch is a compassionate and experienced naturopathic doctor with a special interest in allergies, immune system dysregulation, and gut health. He has helped many clients reduce symptoms of allergic rhinitis, food sensitivities, and skin reactions using herbal medicine, nutritional supplements, and practical, personalised plans.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" 
                alt="Mitchell Potts, allergy naturopath at NXTLVL Health" 
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

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/DSC_4578-scaled.jpeg" 
              alt="Allergy testing equipment at NXTLVL Health clinic" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Food intolerance testing</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Food allergy blood test</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Gut function and microbiome analysis</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Nutrient deficiency testing</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-6 text-lg text-muted-foreground max-w-4xl mx-auto">
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

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Sad-woman-dealing-with-gut-issues-and-bloating-scaled.jpeg" 
              alt="Supporting gut health for allergy relief at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Mitch supports gut healing with:</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Fermented foods and prebiotics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Botanical medicine for inflammation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Elimination diets to reduce exposure</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Probiotic therapy and digestive enzymes</span>
                </li>
              </ul>
              <div className="mt-6 p-6 bg-primary/10 rounded-lg">
                <p className="text-lg font-medium text-foreground">
                  Probiotics can improve quality of life for allergy sufferers by supporting gut health and reducing symptoms.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Sad-woman-dealing-with-gut-issues-and-bloating-scaled.jpeg" 
                alt="Supporting gut health for allergy relief at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Herbal Medicines Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div class="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Herbal Medicines and Supplements</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                We use evidence-based herbal remedies known for their anti-allergic properties. These may include:
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/01/DSC_4545-scaled.jpeg" 
              alt="Natural herbal medicines for allergy treatment at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Herbal Medicines */}
            <div className="space-y-8">
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Herbal Remedies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground"><strong>Stinging nettle</strong> (reduces histamine release)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground"><strong>Albizia and baical skullcap</strong> (anti-inflammatory and immune modulation)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground"><strong>Eyebright</strong> (supports watery eyes and nasal symptoms)</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    Stinging nettles are commonly used as a natural treatment for allergies and allergic rhinitis, offering relief from symptoms.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Nutritional Supplements */}
            <div className="space-y-8">
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Nutritional Supplements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Nutritional supplements also help reduce inflammation and support immune health. Mitch may recommend:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground"><strong>Vitamin C and quercetin</strong> (natural antihistamines)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground"><strong>Zinc and vitamin A</strong> (immune modulators)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground"><strong>Omega-3s and other anti-inflammatory nutrients</strong></span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/01/DSC_4584-scaled.jpeg" 
              alt="Food allergy consultation at NXTLVL Health clinic" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-6">We may support with:</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">Rotational diets</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">Tailored food plans</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">Support for reintroducing foods after healing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Triggers Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Reducing Environmental Triggers</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Mitch will also guide you in reducing exposure to common triggers such as:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Leaf className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">Pollen and dust mites</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">Animal dander</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">Mould and indoor allergens</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Simple home and lifestyle changes can go a long way in reducing inflammation and allergic flare-ups.
            </p>
          </div>
        </div>
      </section>

      {/* Managing Symptoms Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Managing Symptoms While Supporting Healing</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                While we work to heal your immune system long term, we also help you feel better now. This may include:
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-standing-next-to-female-patient-thats-lying-down-while-he-checks-her-vitals-scaled.jpeg" 
              alt="Naturopath providing symptom relief care at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Botanical support for nasal passages and itchy skin</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Support for post nasal drip, itchy throat, and runny nose</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Calming herbs to reduce reactivity and stress</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* First Consultation Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect at Your First Consultation</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-checking-a-patients-blood-pressure-scaled.jpeg" 
              alt="First allergy naturopath consultation at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Your first visit includes:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">A full health and symptom history</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Discussion of current lifestyle and diet</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Review of past allergy testing or medications</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Personalised plan to manage symptoms and support healing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Help</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Mitch supports a wide range of allergy sufferers, including:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Children with food allergy or itchy skin</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Adults with hay fever and allergic rhinitis</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Activity className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Clients with eczema, asthma, or chronic sinus problems</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Those with multiple sensitivities or intolerances</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Health Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose NXTLVL Health for Allergy Support?</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4503-scaled.jpeg" 
              alt="NXTLVL Health allergy naturopath clinic facilities" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Whole-person, natural allergy treatment</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Experienced allergy naturopath with a root cause focus</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Functional testing options available</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Gentle, science-based therapies</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md md:col-span-2 lg:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">A welcoming clinic environment and compassionate care</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                If you're ready to explore natural ways to manage allergies and improve your immune health, NXTLVL Health is here for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your First Appointment</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Take the first step today and book a consultation with Mitch—your trusted allergy naturopath. Together, we'll uncover the root cause, relieve symptoms, and help you feel strong, balanced, and well again.
              </p>
              <div className="mt-6 p-6 bg-primary/10 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Feel Better—Naturally</h3>
                <p className="text-lg font-medium text-foreground">
                  Relief is possible. Let's help you breathe easier, eat with confidence, and live your life without the constant burden of allergies.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base sm:text-lg px-6 py-4">
                <a href="https://nxtlvlhealth.com.au/book-now/" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your First Appointment
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base sm:text-lg px-6 py-4">
                <a href="tel:0731808853">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Your Allergy Naturopath
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllergyNaturopath;
