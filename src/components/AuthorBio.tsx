import React from 'react';
import { Link } from 'react-router-dom';

const AuthorBio = () => {
  return (
    <div className="bg-muted/30 rounded-lg p-8 mb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Author Image */}
        <div className="flex-shrink-0">
          <img 
            src="/lovable-uploads/502c0777-31ae-466b-8da0-be131088602b.png" 
            alt="Mitchell Potts naturopath Brisbane NXTLVL Health"
            className="w-24 h-24 rounded-full object-cover object-center border-4 border-primary/20"
          />
        </div>
        
        {/* Author Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-foreground mb-2">About Mitchell Potts</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Mitchell is a top naturopath in Brisbane who helps people feel better using natural ways. 
            He knows a lot about gut health, food problems, and how to help your body heal itself. 
            Mitchell uses special tests and natural treatments to find out what is really making you feel unwell. 
            He has helped many people in Brisbane get healthy and feel great again.
          </p>
          <Link 
            to="/about-us" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Learn more about Mitchell →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;