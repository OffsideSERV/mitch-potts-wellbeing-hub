import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";

const PathologyTestingPrices = () => {
  return (
    <>
      <SEO 
        title="Pathology Testing Prices | NXTLVL Health Brisbane"
        description="Simple, clear pricing for comprehensive pathology testing. Food allergies, gut health, hormones, and more. Get accurate results with trusted labs."
        canonical="/pathology-testing-prices"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Pathology Testing Prices
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Simple, clear pricing for the most-used tests at NXTLVL Health (via NutriPATH)
            </p>
            <p className="text-lg mb-4">
              We use trusted labs (Australia & international) to get accurate, fast results.
            </p>
            <p className="text-lg font-medium text-primary">
              Your practitioner will help choose the right test for your case.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/pathology-testing-hero.jpg" 
              alt="DNA testing and pathology laboratory with microscope and test tubes"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Important Information */}
          <Card className="mb-8 border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800">Good to know:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-amber-700">
                <li>• Prices are an indication only and can change.</li>
                <li>• Some blood tests attract a collection fee at the draw centre (approx. $30-$40).</li>
                <li>• A small postage/handling fee may apply from the lab.</li>
                <li>• Turnaround times are business days from lab receipt.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Testing Categories */}
          <div className="space-y-12">
            
            {/* Food Allergies & Intolerances */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Food Allergies & Intolerances
              </h2>
              <p className="text-muted-foreground mb-6">
                (Blood spot card or serum; great for bloating, skin, fatigue, migraines)
              </p>
              <div className="grid gap-4">
                {[
                  { test: "IgG 96 Foods", method: "Spot card", price: "$291-$316", time: "12-15 days" },
                  { test: "IgG + IgA 96 Foods (Combo)", method: "Spot card", price: "$381", time: "12-15 days" },
                  { test: "IgG 144 Foods", method: "Spot card", price: "$371", time: "12-15 days" },
                  { test: "IgG + IgA 144 Foods (Combo)", method: "Spot card", price: "$531", time: "12-15 days" },
                  { test: "IgG 240 Foods", method: "Serum/spot", price: "$568", time: "12-15 days" },
                  { test: "IgG + IgA 240 Foods (Combo)", method: "Serum", price: "$663", time: "12-15 days" },
                  { test: "IgE 27 Foods (True Allergy)", method: "Serum", price: "$291", time: "12-15 days" },
                  { test: "IgE 50 Inhalants", method: "Serum", price: "$286", time: "12-15 days" },
                  { test: "ALCAT 100 Foods", method: "ALCAT kit (cell response)", price: "$376", time: "48 hours" },
                  { test: "ALCAT 200 Foods", method: "ALCAT kit", price: "$621", time: "48 hours" },
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div className="font-semibold">{item.test}</div>
                      <div className="text-muted-foreground">{item.method}</div>
                      <div className="font-bold text-primary">{item.price}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Gut & Microbiome Health */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Gut & Microbiome Health
              </h2>
              <p className="text-muted-foreground mb-6">
                (Stool, breath, urine; ideal for bloating, IBS/SIBO, reflux, constipation/diarrhoea)
              </p>
              <div className="grid gap-4">
                {[
                  { test: "Complete Microbiome Mapping (qPCR + markers)", method: "Stool", price: "$399", time: "5 days" },
                  { test: "Advanced Microbiome Mapping (+ sensitivities)", method: "Stool", price: "$460", time: "5-7 days" },
                  { test: "Microbiomix Metagenomic Mapping (28,000+ species)", method: "Stool", price: "$416", time: "12-15 days" },
                  { test: "CDSA Level 2 (Digestion/Absorption/Inflammation)", method: "Stool", price: "$246", time: "5 days" },
                  { test: "CDSA Level 3+ (incl. sIgA, Calprotectin, H. pylori Ag)", method: "Stool", price: "$396", time: "5 days" },
                  { test: "SIBO Breath Test – Lactulose", method: "Breath kit", price: "$196", time: "24 hours" },
                  { test: "SIBO Breath Test – Glucose", method: "Breath kit", price: "$196", time: "24 hours" },
                  { test: "SIBO Combo (Fructose + Lactulose)", method: "Breath kit", price: "$326", time: "24 hours" },
                  { test: "SIBO Triple (Fructose + Lactulose + Glucose)", method: "Breath kit", price: "$465", time: "24 hours" },
                  { test: "Intestinal Permeability (Leaky Gut)", method: "Urine", price: "$141", time: "5 days" },
                  { test: "Zonulin (faecal)", method: "Stool", price: "$60", time: "3-5 days" },
                  { test: "Calprotectin (faecal; IBS vs IBD marker)", method: "Stool", price: "$60", time: "3-5 days" },
                  { test: "Pancreatic Elastase (faecal; enzyme output)", method: "Stool", price: "$60", time: "3-5 days" },
                  { test: "H. pylori Antigen (faecal)", method: "Stool", price: "$60", time: "3-5 days" },
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div className="font-semibold">{item.test}</div>
                      <div className="text-muted-foreground">{item.method}</div>
                      <div className="font-bold text-primary">{item.price}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Hormone Health & Stress */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Hormone Health & Stress
              </h2>
              <p className="text-muted-foreground mb-6">
                (Saliva, serum, dried urine; cycle issues, fatigue, sleep, libido, thyroid)
              </p>
              
              <h3 className="text-2xl font-semibold text-primary mb-4">Saliva (easy at-home collection)</h3>
              <div className="grid gap-4 mb-8">
                {[
                  { test: "Adrenocortex Stress Profile (Cortisol x4 + DHEAs)", method: "Saliva", price: "$118", time: "3-5 days" },
                  { test: "Female Hormone Profile - Basic (E1, E2, E3, Prog, Testo, DHEAs)", method: "Saliva", price: "$156", time: "3-5 days" },
                  { test: "Male Hormone Profile - Basic (E1, E2, Testo, DHEAs)", method: "Saliva", price: "$106", time: "3-5 days" },
                  { test: "Sleep Profile - Basic (Melatonin + Cortisol midnight)", method: "Saliva", price: "$66", time: "3-5 days" },
                  { test: "Female Cycle 28-Day Mapping (E2/Prog panel)", method: "Saliva", price: "$276", time: "3-5 days" },
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div className="font-semibold">{item.test}</div>
                      <div className="text-muted-foreground">{item.method}</div>
                      <div className="font-bold text-primary">{item.price}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-primary mb-4">Serum (blood draw)</h3>
              <div className="grid gap-4 mb-8">
                {[
                  { test: "Thyroid Profile - Basic (TSH, fT4, fT3)", method: "Serum", price: "$62", time: "24 hours" },
                  { test: "Thyroid Profile - Extensive (TSH, fT4, fT3, rT3, TPO, TgAb, TRAb)", method: "Serum", price: "$171", time: "3-5 days" },
                  { test: "Female Hormone Profile (E2, FSH, LH, Prog, Prolactin, DHEAs, SHBG, Testo, calc-free Testo)", method: "Serum", price: "$188", time: "24 hours" },
                  { test: "Male Hormone Profile (Testo, free Testo calc, E2, SHBG, DHEAs, Albumin)", method: "Serum", price: "$101", time: "24 hours" },
                  { test: "AMH (Ovarian Reserve)", method: "Serum", price: "$61", time: "72 hours" },
                  { test: "Vitamin D (25-OH)", method: "Serum", price: "$46", time: "24 hours" },
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div className="font-semibold">{item.test}</div>
                      <div className="text-muted-foreground">{item.method}</div>
                      <div className="font-bold text-primary">{item.price}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-primary mb-4">Dried Urine (advanced mapping)</h3>
              <div className="grid gap-4">
                {[
                  { test: "EndoMAP (hormones + metabolites + disruptors + key OAs)", method: "Dried Urine", price: "$299", time: "14 days" },
                  { test: "AdrenoSCAN (adrenal hormone patterns)", method: "Dried Urine", price: "$199", time: "14 days" },
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div className="font-semibold">{item.test}</div>
                      <div className="text-muted-foreground">{item.method}</div>
                      <div className="font-bold text-primary">{item.price}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Routine Pathology */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Routine Pathology (Core Health Panels)
              </h2>
              <p className="text-muted-foreground mb-6">
                (Great starting point for energy, thyroid, iron, lipids)
              </p>
              <div className="grid gap-4">
                {[
                  { test: "Electrolytes (UEC)", method: "Serum", price: "$33", time: "24 hours" },
                  { test: "Liver Function Tests (LFT)", method: "Serum", price: "$33", time: "24 hours" },
                  { test: "Lipid Profile (Cholesterol/HDL/LDL/TG)", method: "Serum", price: "$36", time: "24 hours" },
                  { test: "Iron Studies (Iron, Ferritin, Transferrin, %Sat)", method: "Serum", price: "$44", time: "24 hours" },
                  { test: "Ferritin", method: "Serum", price: "$36", time: "24 hours" },
                  { test: "HbA1c", method: "EDTA", price: "$33", time: "24 hours" },
                  { test: "Insulin (fasting)", method: "Serum", price: "$36", time: "24 hours" },
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div className="font-semibold">{item.test}</div>
                      <div className="text-muted-foreground">{item.method}</div>
                      <div className="font-bold text-primary">{item.price}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Nutritional Status */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Nutritional Status
              </h2>
              <p className="text-muted-foreground mb-6">
                (Vitamins, minerals, fatty acids, amino acids)
              </p>
              <div className="grid gap-4">
                {[
                  { test: "Omega-3 Index (RBC)", method: "EDTA/Blood spot", price: "$116-$131", time: "12-14 days" },
                  { test: "Essential Fatty Acids (RBC full profile)", method: "EDTA/Blood spot", price: "$131", time: "12-14 days" },
                  { test: "Vitamin B12 & Folate (Active B12 + Folate)", method: "Serum", price: "$86", time: "48 hours" },
                  { test: "Amino Acids (Plasma, 40 markers)", method: "Plasma", price: "$301", time: "up to 14 days" },
                  { test: "Nutri-STAT (big integrative panel)", method: "Mixed + urine", price: "$726", time: "~21 days" },
                  { test: "NAD+/NADH/NADP+/NADPH", method: "Blood spot", price: "$130", time: "up to 14 days" },
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div className="font-semibold">{item.test}</div>
                      <div className="text-muted-foreground">{item.method}</div>
                      <div className="font-bold text-primary">{item.price}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Mental Health & Organic Acids */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Mental Health & Organic Acids
              </h2>
              <p className="text-muted-foreground mb-6">
                (Great for energy, mood, brain fog, detox)
              </p>
              <div className="grid gap-4">
                {[
                  { test: "Organic Acids Metabolomic Mapping (63 markers)", method: "Urine", price: "$330", time: "up to 14 days" },
                  { test: "Neurotransmitters - Intermediate (Serotonin, GABA, Dopamine, etc.)", method: "Urine", price: "$301", time: "14 days" },
                  { test: "Pfeiffer Profile - Basic (Copper/Zinc balance, histamine, Vit D, etc.)", method: "Mixed", price: "$211", time: "~5 days" },
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div className="font-semibold">{item.test}</div>
                      <div className="text-muted-foreground">{item.method}</div>
                      <div className="font-bold text-primary">{item.price}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Mould, Biotoxins & Environmental */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Mould, Biotoxins & Environmental
              </h2>
              <p className="text-muted-foreground mb-6">
                (For water-damaged buildings, unexplained inflammation, MCAS)
              </p>
              <div className="grid gap-4">
                {[
                  { test: "Urine Mycotoxins - Initial (OTA, Aflatoxins, Trichothecenes, ZEA, Gliotoxin)", method: "Urine", price: "$295", time: "12-15 days" },
                  { test: "Mycotoxins + Environmental Pollutants (incl. Glyphosate)", method: "Urine", price: "$496", time: "12-15 days" },
                  { test: "MCAS Profile (Tryptase, Chromogranin A, Histamine)", method: "Blood", price: "$271", time: "~10 days" },
                  { test: "Nasopharyngeal Culture (MARCoNS)", method: "Swab", price: "$176", time: "5-7 days" },
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div className="font-semibold">{item.test}</div>
                      <div className="text-muted-foreground">{item.method}</div>
                      <div className="font-bold text-primary">{item.price}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Heavy Metals & Minerals */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Heavy Metals & Minerals
              </h2>
              <p className="text-muted-foreground mb-6">
                (Hair, urine, blood; exposure & body burden)
              </p>
              <div className="grid gap-4">
                {[
                  { test: "Hair Mineral Analysis - Level 1 (8 minerals + 8 toxic metals)", method: "Hair", price: "$151", time: "7 days" },
                  { test: "Hair Mineral Analysis - Level 2 (expanded)", method: "Hair", price: "$226", time: "7 days" },
                  { test: "Pre-Chelation Heavy Metals (Urine)", method: "Urine", price: "$186", time: "7 days" },
                  { test: "Post-Chelation Heavy Metals (Urine)", method: "Urine", price: "$186", time: "7 days" },
                  { test: "Red Cell/Whole Blood Metals (15 metals)", method: "EDTA (navy)", price: "$186", time: "7 days" },
                  { test: "Drinking Water Metals & Minerals", method: "Water kit", price: "$291", time: "7 days" },
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div className="font-semibold">{item.test}</div>
                      <div className="text-muted-foreground">{item.method}</div>
                      <div className="font-bold text-primary">{item.price}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Genetic & Wellness */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Genetic & Wellness
              </h2>
              <p className="text-muted-foreground mb-6">
                (Actionable DNA insights; reports are education-focused)
              </p>
              <div className="grid gap-4">
                {[
                  { test: "myDNA Comprehensive Health Report (92 genes/113 SNPs)", method: "Swab", price: "$260", time: "18-21 days" },
                  { test: "myDNA Pharmacogenomics (Med response)", method: "Swab", price: "$199", time: "18-21 days" },
                  { test: "myDNA Methylation / Longevity / Detox / Fertility Reports", method: "Swab", price: "$260 each", time: "18-21 days" },
                  { test: "Telomere / Biological Age", method: "EDTA", price: "$210", time: "18-21 days" },
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div className="font-semibold">{item.test}</div>
                      <div className="text-muted-foreground">{item.method}</div>
                      <div className="font-bold text-primary">{item.price}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* How Testing Works */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">
                How Testing Works at NXTLVL Health
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center p-6">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      1
                    </div>
                    <CardTitle className="text-lg">Book an Initial Consult</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We review your history, symptoms, meds, and goals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      2
                    </div>
                    <CardTitle className="text-lg">Select the Right Tests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Targeted (no guesswork, no wasted money).
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      3
                    </div>
                    <CardTitle className="text-lg">Collect at Home or Centre</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Kits sent to you or draw at a local centre.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      4
                    </div>
                    <CardTitle className="text-lg">Results & Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Clear report + a tailored plan to fix the root cause.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Ready to get answers?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book your Initial Consult or a Free 15-min Test Guidance Call and we'll point you to the best starting panel for your case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://au.practo.com/newstead/clinic/nxtlvl-health/book" target="_blank" rel="noopener noreferrer">
                    Book Initial Consult
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://au.practo.com/newstead/clinic/nxtlvl-health/book" target="_blank" rel="noopener noreferrer">
                    Free 15-min Call
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PathologyTestingPrices;