import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isWhatWeTreatOpen, setIsWhatWeTreatOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Gut Health Promotion Header - Mobile Layout */}
      <div className="bg-primary text-white py-3 px-4 block md:hidden">
        <div className="text-center">
          <div className="text-sm font-semibold mb-2">
            Feeling Bloated After Every Meal You Eat?
          </div>
          <div className="text-xs mb-3">
            This Free 15-Min Gut Health Guide Will Give You The Answers You've Been Looking For!
          </div>
          <Button 
            asChild 
            size="sm"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg text-xs"
          >
            <Link to="/gut-freedom">Get Free Guide</Link>
          </Button>
        </div>
      </div>

      {/* Gut Health Promotion Header - Desktop Layout */}
      <div className="bg-primary text-white py-3 px-4 hidden md:block">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🎁</span>
            <div>
              <span className="text-base font-semibold">
                Feeling Bloated After Every Meal You Eat? This Free 15-Min Gut Health Guide Will Give You The Answers You've Been Looking For!
              </span>
            </div>
          </div>
          <Button 
            asChild 
            size="sm"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg"
          >
            <Link to="/gut-freedom">Get Free Guide</Link>
          </Button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/b8b8b8b8-b8b8-b8b8-b8b8-b8b8b8b8b8b8.png" 
              alt="NXTLVL Health Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-primary transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link to="/services/naturopathy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Naturopathy
                  </Link>
                  <Link to="/services/nutritional-medicine" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Nutritional Medicine
                  </Link>
                  <Link to="/services/herbal-medicine" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Herbal Medicine
                  </Link>
                  <Link to="/services/functional-testing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Functional Testing
                  </Link>
                </div>
              )}
            </div>

            {/* What We Treat Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsWhatWeTreatOpen(true)}
              onMouseLeave={() => setIsWhatWeTreatOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-primary transition-colors">
                What We Treat
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isWhatWeTreatOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link to="/what-we-treat/gut-health-naturopath-brisbane" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Gut Health
                  </Link>
                  <Link to="/what-we-treat/ibs-naturopath" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    IBS
                  </Link>
                  <Link to="/what-we-treat/sibo-naturopath" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    SIBO
                  </Link>
                  <Link to="/what-we-treat/fatigue-naturopath" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Fatigue
                  </Link>
                  <Link to="/what-we-treat/hormones-naturopath" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Hormones
                  </Link>
                  <Link to="/what-we-treat/anxiety-naturopath" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Anxiety
                  </Link>
                </div>
              )}
            </div>

            {/* Areas We Service Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAreasOpen(true)}
              onMouseLeave={() => setIsAreasOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-primary transition-colors">
                Areas We Service
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isAreasOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link to="/areas/naturopath-new-farm" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    New Farm
                  </Link>
                  <Link to="/areas/naturopath-fortitude-valley" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Fortitude Valley
                  </Link>
                  <Link to="/areas/naturopath-spring-hill" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Spring Hill
                  </Link>
                  <Link to="/areas/naturopath-kangaroo-point" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Kangaroo Point
                  </Link>
                  <Link to="/areas/naturopath-teneriffe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Teneriffe
                  </Link>
                  <Link to="/areas/naturopath-bowen-hills" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Bowen Hills
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href="tel:0731808853" className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Consult
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-primary transition-colors"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link 
                      to="/services/naturopathy" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Naturopathy
                    </Link>
                    <Link 
                      to="/services/nutritional-medicine" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Nutritional Medicine
                    </Link>
                    <Link 
                      to="/services/herbal-medicine" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Herbal Medicine
                    </Link>
                    <Link 
                      to="/services/functional-testing" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Functional Testing
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile What We Treat */}
              <div>
                <button 
                  onClick={() => setIsWhatWeTreatOpen(!isWhatWeTreatOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-primary transition-colors"
                >
                  What We Treat
                  <ChevronDown className={`h-4 w-4 transition-transform ${isWhatWeTreatOpen ? 'rotate-180' : ''}`} />
                </button>
                {isWhatWeTreatOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link 
                      to="/what-we-treat/gut-health-naturopath-brisbane" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Gut Health
                    </Link>
                    <Link 
                      to="/what-we-treat/ibs-naturopath" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      IBS
                    </Link>
                    <Link 
                      to="/what-we-treat/sibo-naturopath" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      SIBO
                    </Link>
                    <Link 
                      to="/what-we-treat/fatigue-naturopath" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Fatigue
                    </Link>
                    <Link 
                      to="/what-we-treat/hormones-naturopath" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Hormones
                    </Link>
                    <Link 
                      to="/what-we-treat/anxiety-naturopath" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Anxiety
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Areas We Service */}
              <div>
                <button 
                  onClick={() => setIsAreasOpen(!isAreasOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-primary transition-colors"
                >
                  Areas We Service
                  <ChevronDown className={`h-4 w-4 transition-transform ${isAreasOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAreasOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link 
                      to="/areas/naturopath-new-farm" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      New Farm
                    </Link>
                    <Link 
                      to="/areas/naturopath-fortitude-valley" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Fortitude Valley
                    </Link>
                    <Link 
                      to="/areas/naturopath-spring-hill" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Spring Hill
                    </Link>
                    <Link 
                      to="/areas/naturopath-kangaroo-point" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Kangaroo Point
                    </Link>
                    <Link 
                      to="/areas/naturopath-teneriffe" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Teneriffe
                    </Link>
                    <Link 
                      to="/areas/naturopath-bowen-hills" 
                      className="block text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Bowen Hills
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:0731808853" className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Consult
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
