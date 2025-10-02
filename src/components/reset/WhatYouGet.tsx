const WhatYouGet = () => {
  const features = [
    {
      icon: "💊",
      title: "Professional Supplement Protocol",
      description: "High-quality supplements included to support detox, gut health, and optimisation."
    },
    {
      icon: "👥", 
      title: "1:1 Consultations & Group Support",
      description: "Personal guidance, group coaching calls, and ongoing accountability check-ins."
    },
    {
      icon: "🧬",
      title: "Advanced Health Testing", 
      description: "Online health optimisation testing with access to genetic, GI, and hormone testing."
    },
    {
      icon: "📱",
      title: "Fitness App Access",
      description: "Complete exercise demonstrations and customised workout protocols."
    },
    {
      icon: "🥗",
      title: "Customised Nutrition Protocols",
      description: "Personalised food guidelines, recipes, and meal planning support."
    },
    {
      icon: "📊",
      title: "Comprehensive Tracking",
      description: "Symptom monitoring, progress tracking, and health education modules."
    },
    {
      icon: "🧘",
      title: "Stress Management Tools",
      description: "Lifestyle protocols, breathwork, and nervous system optimisation techniques."
    },
    {
      icon: "🤝",
      title: "Community Support",
      description: "Connect with like-minded individuals on the same transformation journey."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nxt-black mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-nxt-grey max-w-3xl mx-auto">
            A comprehensive support system designed to ensure your transformation success.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 text-center hover:shadow-nxt transition-nxt border border-border group"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-nxt">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-nxt-black mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-nxt-grey text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
