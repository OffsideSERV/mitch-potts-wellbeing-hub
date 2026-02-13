const TransformationResults = () => {
  const results = [
    {
      metric: "Energy Levels",
      before: "Afternoon crashes, constant fatigue",
      after: "Sustained energy from 6am to 10pm",
      improvement: "+85%"
    },
    {
      metric: "Sleep Quality", 
      before: "Restless nights, waking up tired",
      after: "Deep, restorative 7-8 hour sleep",
      improvement: "+90%"
    },
    {
      metric: "Mental Clarity",
      before: "Brain fog, poor focus",
      after: "Sharp thinking, clear decision making", 
      improvement: "+75%"
    },
    {
      metric: "Physical Strength",
      before: "Weak, out of shape",
      after: "Strong, confident, athletic",
      improvement: "+120%"
    },
    {
      metric: "Mood & Confidence",
      before: "Stressed, anxious, low self-worth",
      after: "Calm, optimistic, self-assured",
      improvement: "+95%"
    },
    {
      metric: "Body Composition",
      before: "Soft, carrying extra weight",
      after: "Lean, defined, healthy weight",
      improvement: "2-5kg"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nxt-black mb-6">
            Your Transformation Awaits
          </h2>
          <p className="text-xl text-nxt-grey max-w-4xl mx-auto">
            In just 12 weeks, hundreds of men have experienced dramatic improvements across all areas of health. 
            Here's what you can realistically expect when you commit to the process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 border border-border hover:shadow-teal transition-nxt"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-nxt-black">
                  {result.metric}
                </h3>
                <span className="bg-nxt-teal text-nxt-white px-3 py-1 rounded-full text-sm font-semibold">
                  {result.improvement}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
                  <p className="text-sm text-red-700 font-medium">Before:</p>
                  <p className="text-sm text-red-600">{result.before}</p>
                </div>
                
                <div className="p-3 bg-green-50 border-l-4 border-green-400 rounded">
                  <p className="text-sm text-green-700 font-medium">After:</p>
                  <p className="text-sm text-green-600">{result.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-nxt-teal/10 border border-nxt-teal/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-nxt-black mb-4">
              Real Results, Real Timeline
            </h3>
            <p className="text-nxt-grey leading-relaxed">
              These aren't exaggerated promises - they're typical results from men and women who fully commit to the 12-week protocol. 
              Your individual results may vary, but this gives you a realistic picture of what's possible when you follow the system consistently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationResults;
