import { useState, useEffect } from "react";
import { X, Gift, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
const GutHealthPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  useEffect(() => {
    // Check if popup has been shown before in this session
    const popupShown = sessionStorage.getItem('gutHealthPopupShown');
    if (!popupShown && !hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('gutHealthPopupShown', 'true');
      }, 5000); // Show after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [hasShown]);
  const handleClose = () => {
    setIsOpen(false);
  };
  return <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md mx-4 rounded-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50 p-0 overflow-hidden">
        {/* Close Button */}
        <button onClick={handleClose} className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-1 text-gray-500 hover:bg-white hover:text-gray-700 transition-colors">
          <X className="h-4 w-4" />
        </button>

        <div className="p-6 text-center">
          {/* Icon */}
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
            <Gift className="h-8 w-8 text-white animate-pulse" />
          </div>

          {/* Headline */}
          <h2 className="mb-2 text-xl font-bold text-gray-900">
            Feeling Bloated After Every Meal?
          </h2>
          
          <p className="mb-4 text-sm text-gray-600 leading-relaxed">
            Get your FREE 15-minute gut health video guide that reveals the simple secrets to better digestion!
          </p>

          {/* Benefits */}
          <div className="mb-6 space-y-2 text-left">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>Discover why you feel bloated after meals</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>Learn 3 simple steps to improve digestion</span>
            </div>
            
          </div>

          {/* CTA Button */}
          <Button asChild className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 rounded-lg text-base shadow-lg hover:shadow-xl transition-all duration-200">
            <Link to="/gut-freedom" onClick={handleClose}>
              <Play className="h-4 w-4 mr-2" />
              Watch Free Video Now
            </Link>
          </Button>

          {/* Trust Badge */}
          <p className="mt-3 text-xs text-gray-500">
            Trusted by 1000+ Brisbane residents
          </p>
        </div>

        {/* Bottom Accent */}
        <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
      </DialogContent>
    </Dialog>;
};
export default GutHealthPopup;