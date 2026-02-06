const Outcomes = () => {
  const outcomes = [
    {
      title: "Digestive Health",
      description: "Reduced bloating and improved digestion",
      icon: "🎯"
    },
    {
      title: "Energy & Focus",
      description: "Higher energy, better focus, and productivity",
      icon: "⚡"
    },
    {
      title: "Sleep Quality",
      description: "Improved sleep quality and stress resilience",
      icon: "😴"
    },
    {
      title: "Mood & Appearance",
      description: "Brighter mood and clearer skin",
      icon: "✨"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(180 45% 45%), hsl(180 50% 55%))' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nxt-white mb-6">
            Your Transformation Results
          </h2>
          <p className="text-xl text-nxt-white/80 max-w-3xl mx-auto">
            By week 12, participants typically report significant improvements across all areas of health and wellbeing.
          </p>
        </div>
        
        {/* Outcomes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
          {outcomes.map((outcome, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-nxt">
                {outcome.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-nxt-white mb-3">
                {outcome.title}
              </h3>
              
              {/* Description */}
              <p className="text-nxt-white/70 leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Long-term Benefits */}
        <div className="text-center rounded-2xl p-8 max-w-4xl mx-auto" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
          <h3 className="text-2xl font-bold text-nxt-white mb-4">
            Plus, You'll Gain a Lifetime Toolkit
          </h3>
          <p className="text-nxt-white/80 text-lg leading-relaxed">
            Receive a comprehensive set of daily routines, habits, and protocols to maintain your results long-term. 
            This isn't just a 12-week program, it's a foundation for lifelong health optimisation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;