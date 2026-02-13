const ProgramPhases = () => {
  const phases = [
    {
      number: "01",
      title: "Foundation & Detox",
      weeks: "Weeks 1-4",
      description: "Begin your transformation with targeted detox protocols, removing irritants, and establishing healthy routines.",
      features: [
        "Detox supplement protocol",
        "Remove alcohol, sugar, processed foods",
        "Baseline fitness testing",
        "Sleep hygiene & morning rituals",
        "Low-intensity movement"
      ]
    },
    {
      number: "02", 
      title: "Gut Reset & Nervous System Repair",
      weeks: "Weeks 5-8",
      description: "Focus on gut health restoration and nervous system optimization for improved energy and mood.",
      features: [
        "Gut repair protocol with probiotics",
        "Protein + healthy fats focus",
        "Breathwork & vagus nerve stimulation",
        "Cold exposure therapy",
        "Strength training progression"
      ]
    },
    {
      number: "03",
      title: "Integration & Resilience", 
      weeks: "Weeks 9-12",
      description: "Consolidate your progress and build long-term sustainable habits for lasting transformation.",
      features: [
        "Gentle food reintroductions",
        "30+ plant variety goal",
        "Stress management mastery",
        "Fitness benchmark retesting",
        "Personalized maintenance plan"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nxt-black mb-6">
            Your 12-Week Journey
          </h2>
          <p className="text-xl text-nxt-grey max-w-3xl mx-auto">
            A structured, science-backed approach divided into three powerful phases for maximum transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-nxt hover:shadow-teal transition-nxt border border-border"
            >
              {/* Phase Number */}
              <div className="flex items-center mb-6">
                <span className="text-6xl font-bold text-nxt-teal/20 mr-4">
                  {phase.number}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-nxt-black mb-1">
                    {phase.title}
                  </h3>
                  <span className="text-nxt-teal font-semibold">
                    {phase.weeks}
                  </span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-nxt-grey mb-6 leading-relaxed">
                {phase.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-3">
                {phase.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span className="text-nxt-teal mt-1 flex-shrink-0">✓</span>
                    <span className="text-nxt-black/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramPhases;
