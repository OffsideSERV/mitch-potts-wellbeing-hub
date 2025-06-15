
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
  Microscope,
  Stethoscope,
  Activity
} from "lucide-react";

const NewFarmNaturopathy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopath New Farm | <span className="text-primary">Natural, Root-Cause Healing</span> Near You
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopath having consultation with female patient at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Natural Health Solutions</p>
                        <p className="text-xs text-muted-foreground">Root-Cause • Holistic Care</p>
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
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-center">Book an Appointment Today</span>
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
                alt="Naturopath having consultation with female patient at NXTLVL Health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Natural Health Solutions</p>
                    <p className="text-sm text-muted-foreground">Root-Cause • Holistic Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for a Trusted Naturopath Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Looking for a Trusted Naturopath in New Farm?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
              alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  If you're tired of feeling <strong>"not quite right"</strong> and you're looking for a gentle, natural health solution that actually works, then you've come to the right place. At NXTLVL Health, we help people from **New Farm QLD** and nearby suburbs like **Fortitude Valley, Spring Hill, and Bowen Hills** who are looking for more than just quick fixes. We get to the **root cause of your health problems**.
                </p>
                <p>
                  Our clinic is located right in **New Farm, near Brunswick St, Merthyr Rd, and 187 James Street**. Whether you're dealing with **gut issues, chronic stress, or hormonal imbalances**, our friendly, experienced naturopath **Mitchell Potts** is here to help.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
                alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Naturopath You Can Trust Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Local Naturopath You Can Trust</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                When your body feels off, it's hard to live the life you want. Maybe your **sleep isn't great**, your **tummy feels upset**, or your **mood is low**. Or maybe you've been told **"everything is normal"** from your doctor, but you still don't feel well. That's where we come in.
              </p>
              <p>
                At NXTLVL Health, our **qualified naturopath Mitch Potts** takes the time to really understand what you've been going through. We use a **holistic approach**, mixing **natural therapies with modern science and functional testing** to understand your whole body. Then, we create a plan that fits your **unique needs and health goals**.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
              alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>
        </div>
      </section>

      {/* Health Support Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Health Support You Can Rely On</h2>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Here are just a few of the health issues we help with</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Gut Health</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    **Bloating, gas, Irritable Bowel Syndrome, reflux, constipation**
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Women's Health</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    **PMS, PCOS, painful periods, perimenopause, menopause**
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Mental Health</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    **Anxiety, low mood, poor sleep quality, overwhelm**
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Children's Health</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    **Digestive issues, food intolerances, immunity, sleep troubles**
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Activity className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Weight Loss</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    **Natural, non-restrictive programs tailored to your body**
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Immune Health</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    **Autoimmune support, frequent infections, inflammation**
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-muted/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Leaf className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Chronic Conditions</CardTitle>
                </div>
                <p className="text-muted-foreground mt-3">
                  **Fatigue, skin problems, allergies, joint pain**
                </p>
                <p className="text-muted-foreground mt-4 font-medium">
                  We treat a wide range of health problems by looking at the **underlying imbalances** that may be holding your body back.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes NXTLVL Health Different Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Makes NXTLVL Health Different?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">We're based **right here in New Farm QLD**</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">We combine **natural medicine with scientific research and testing**</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">We build every plan around you—**your symptoms, lifestyle, and health goals**</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">We use **herbal medicine, nutritional supplements, and dietary support**</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg md:col-span-2 lg:col-span-1">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base">We create **long-term plans for good health and lasting change**</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect at Your First Consultation</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              When you come in for your initial consultation, we take our time to get to know you. We talk about your **symptoms, your lifestyle, your diet, your past medical history, and what you want to achieve** with your health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">If needed, we may use testing like:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Microscope className="h-5 w-5 text-primary" />
                  <span className="text-lg">**Gut testing**</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="h-5 w-5 text-primary" />
                  <span className="text-lg">**Hormone panels**</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-lg">**Nutrient profiles**</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-lg">**Food intolerance checks**</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Your treatment plan may include:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Leaf className="h-5 w-5 text-primary" />
                  <span className="text-lg">**Herbal medicine**</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-lg">**Nutritional advice and natural remedies**</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-lg">**Lifestyle tweaks that fit into your days effortlessly**</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-lg">**Natural methods to boost your energy levels**</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Therapies Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural Therapies at Our New Farm Clinic</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Our clinic uses a blend of **safe, science-backed therapies**:
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Leaf className="h-6 w-6 text-primary" />
                  <CardTitle>Herbal Medicine</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Used to **calm inflammation, balance hormones, and support the nervous system**
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-primary" />
                  <CardTitle>Nutritional Medicine</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To **correct deficiencies, support your gut, and increase energy**
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <CardTitle>Natural Pain Relief</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For **joint pain, cramps, or headaches**
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-primary" />
                  <CardTitle>Stress Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Using **gentle herbs, supplements, and stress tools**
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Stethoscope className="h-6 w-6 text-primary" />
                  <CardTitle>Massage Therapy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We work alongside trusted **Remedial Massage and massage therapist services in New Farm Wellness Centre and local clinics**
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">We're Part of the New Farm Wellness Community</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Our clinic is easy to get to from:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mb-12">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-semibold">**Brunswick St**</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-semibold">**187 James Street**</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-semibold">**Merthyr Rd**</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-semibold">**Fortitude Valley, West End, Spring Hill, and beyond**</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with other health providers, like **personal trainers, massage therapists, and allied health professionals**. If you need a team, we help you build one.
            </p>
          </div>
        </div>
      </section>

      {/* You Deserve to Feel Better Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">You Deserve to Feel Better</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Whether you're tired of feeling **sick, overwhelmed, or just not like yourself**, NXTLVL Health is here to help you make sense of it all. We'll work with you to **restore balance in your body** and give you tools for **long-term, natural healing**.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your Naturopath Appointment in New Farm Today</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're ready when you are. Book your appointment today with **Mitch at NXTLVL Health**—your trusted naturopath in New Farm.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Let's help you feel **clear, calm, and back in control** again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3"
              >
                <a href="https://nxtlvlhealth.com.au/book-now/">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book an Appointment Today
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3"
              >
                <a href="tel:0731808853">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Mitch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewFarmNaturopathy;
