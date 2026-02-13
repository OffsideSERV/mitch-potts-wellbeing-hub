import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, Calendar, ChevronDown, ChevronRight, Gift } from "lucide-react";
import { cn } from "@/lib/utils";
import nxtlvlLogo from "/lovable-uploads/0aadec6a-7f1f-4a21-854c-39d8c3a218d0.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const servicesItems = [{
    title: "Health Packages",
    href: "/health-packages"
  }, {
    title: "NXTLVL Reset - 12 Week Program",
    href: "/nxtlvl-reset"
  }, {
    title: "Live Blood Analysis in Brisbane",
    href: "/services/live-blood-analysis-brisbane"
  }, {
    title: "Functional Medicine",
    href: "/functional-medicine"
  }, {
    title: "Nutrition",
    href: "/services/nutritionist-brisbane"
  }, {
    title: "Pathology Testing Prices",
    href: "/pathology-testing-prices"
  }, {
    title: "MLS Laser Therapy",
    href: "/services/mls-laser-therapy-treatment-brisbane"
  }, {
    title: "Personal Training",
    href: "/services/personal-trainer-newstead"
  }, {
    title: "NXTLVL Tonics",
    href: "/nxtlvl-tonics"
  }];
  const treatmentItems = [{
    title: "Gut Health",
    href: "/what-we-treat/gut-health-naturopath-brisbane",
    subItems: [{
      title: "SIBO",
      href: "/what-we-treat/sibo-naturopath"
    }, {
      title: "IBS",
      subItems: [{
        title: "IBS Treatment Brisbane",
        href: "/what-we-treat/ibs-brisbane"
      }, {
        title: "IBS Naturopathy",
        href: "/what-we-treat/ibs-naturopath"
      }, {
        title: "IBS Clinic",
        href: "/what-we-treat/ibs-clinic"
      }]
    }, {
      title: "Gut Health Specialist",
      href: "/what-we-treat/gut-health-specialist"
    }]
  }, {
    title: "Weight Loss",
    href: "/what-we-treat/weight-loss-naturopath-brisbane"
  }, {
    title: "Overall Wellness",
    href: "/what-we-treat/wellness-clinic-brisbane"
  }, {
    title: "Skin Conditions",
    href: "/what-we-treat/naturopathy-for-skin",
    subItems: [{
      title: "Hormonal Acne",
      href: "/what-we-treat/hormonal-acne-naturopath"
    }, {
      title: "Acne",
      href: "/what-we-treat/acne-naturopathy"
    }, {
      title: "Eczema",
      href: "/what-we-treat/naturopath-eczema"
    }]
  }, {
    title: "Thyroid",
    href: "/what-we-treat/naturopath-thyroid-brisbane"
  }, {
    title: "ADHD",
    href: "/what-we-treat/adhd-naturopath"
  }, {
    title: "Anxiety",
    href: "/what-we-treat/naturopath-anxiety"
  }, {
    title: "Diabetes",
    href: "/what-we-treat/naturopath-diabetes-brisbane"
  }, {
    title: "Cardiovascular Health",
    href: "/what-we-treat/cardiovascular-health-naturopath-brisbane"
  }, {
    title: "Anti-Aging",
    href: "/what-we-treat/anti-aging-naturopath-brisbane"
  }, {
    title: "Children's Health",
    href: "/what-we-treat/childrens-naturopath-brisbane"
  }];
  const areasItems = [{
    title: "Newstead",
    href: "/areas-we-serve/naturopath-newstead"
  }, {
    title: "New Farm",
    href: "/areas-we-serve/naturopath-new-farm"
  }, {
    title: "North Brisbane",
    href: "/areas-we-serve/naturopath-north-brisbane"
  }, {
    title: "Indooroopilly",
    href: "/areas-we-serve/naturopath-indooroopilly"
  }, {
    title: "Morningside",
    href: "/areas-we-serve/naturopath-morningside"
  }, {
    title: "Hamilton",
    href: "/areas-we-serve/naturopath-hamilton"
  }, {
    title: "Clayfield",
    href: "/areas-we-serve/naturopath-clayfield-brisbane"
  }, {
    title: "Windsor",
    href: "/areas-we-serve/naturopath-windsor"
  }];
  const closeSheet = () => {
    setIsOpen(false);
    setExpandedSections({});
  };
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  return <>
      {/* Health Quiz Promotion Header */}
      <div 
        onClick={() => window.open('https://nxtlvl-health.scoreapp.com', '_blank', 'noopener,noreferrer')}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') window.open('https://nxtlvl-health.scoreapp.com', '_blank', 'noopener,noreferrer'); }}
        className="block bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:py-3 px-4 hover:from-orange-600 hover:to-red-600 transition-colors cursor-pointer"
      >
        <div className="container mx-auto">
          {/* Mobile Layout */}
          <div className="flex sm:hidden items-center justify-center gap-2">
            <Gift className="h-4 w-4 text-yellow-300 animate-pulse flex-shrink-0" />
            <div className="text-[11px] font-bold leading-tight text-center">
              Find out your Health Score - Take our Quiz!
            </div>
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold whitespace-nowrap text-xs px-3 py-1.5 h-auto flex-shrink-0"
            >
              Start
            </Button>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden sm:flex flex-row items-center justify-center gap-4 text-center">
            <Gift className="h-5 w-5 text-yellow-300 animate-pulse flex-shrink-0" />
            <span className="text-sm md:text-base font-medium">
              <strong>Want to find out your Health Score? Do our Optimal Health Quiz!</strong>
            </span>
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold whitespace-nowrap text-sm px-6 py-2"
            >
              Start Quiz
            </Button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={nxtlvlLogo} alt="NXTLVL Health" className="h-14 w-14" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}>
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary px-4 py-2 transition-colors">
                  Services
                  <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-popover border rounded-md shadow-lg p-4 w-80">
                    <div className="space-y-1">
                      {servicesItems.map(item => <Link key={item.href} to={item.href} className="block rounded-md p-3 text-sm font-medium leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          {item.title}
                        </Link>)}
                    </div>
                  </div>
                </div>
              </div>

              {/* What We Treat Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary px-4 py-2 transition-colors">
                  What We Treat
                  <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-popover border rounded-md shadow-lg p-6 w-[600px]">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-2">
                        {/* Gut Health with submenu */}
                        <div className="relative group/sub">
                          <Link to="/what-we-treat/gut-health-naturopath-brisbane" className="flex items-center justify-between rounded-md p-2 text-sm font-medium leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            Gut Health
                            <ChevronRight className="h-3 w-3" />
                          </Link>
                          <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                            <div className="bg-popover border rounded-md shadow-lg p-2 w-60">
                              <Link to="/what-we-treat/sibo-naturopath" className="block rounded-md p-2 text-sm leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                                SIBO
                              </Link>
                              <Link to="/what-we-treat/ibs-brisbane" className="block rounded-md p-2 text-sm leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                                IBS
                              </Link>
                              <Link to="/what-we-treat/ibs-naturopath" className="block rounded-md p-2 text-sm leading-none transition-colors hover:bg-accent hover:text-accent-foreground pl-4">
                                IBS Naturopathy
                              </Link>
                              <Link to="/what-we-treat/ibs-clinic" className="block rounded-md p-2 text-sm leading-none transition-colors hover:bg-accent hover:text-accent-foreground pl-4">
                                IBS Clinic
                              </Link>
                              <Link to="/what-we-treat/gut-health-specialist" className="block rounded-md p-2 text-sm leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                                Gut Health Specialist
                              </Link>
                            </div>
                          </div>
                        </div>
                        
                        <Link to="/what-we-treat/weight-loss-naturopath-brisbane" className="block rounded-md p-2 text-sm font-medium leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Weight Loss
                        </Link>
                        
                        <Link to="/what-we-treat/wellness-clinic-brisbane" className="block rounded-md p-2 text-sm font-medium leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Overall Wellness
                        </Link>
                        
                        {/* Skin Conditions with submenu */}
                        <div className="relative group/sub">
                          <Link to="/what-we-treat/naturopathy-for-skin" className="flex items-center justify-between rounded-md p-2 text-sm font-medium leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            Skin Conditions
                            <ChevronRight className="h-3 w-3" />
                          </Link>
                          <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                            <div className="bg-popover border rounded-md shadow-lg p-2 w-60">
                              <Link to="/what-we-treat/hormonal-acne-naturopath" className="block rounded-md p-2 text-sm leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                                Hormonal Acne
                              </Link>
                              <Link to="/what-we-treat/acne-naturopathy" className="block rounded-md p-2 text-sm leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                                Acne
                              </Link>
                              <Link to="/what-we-treat/naturopath-eczema" className="block rounded-md p-2 text-sm leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                                Eczema
                              </Link>
                            </div>
                          </div>
                        </div>
                        
                        <Link to="/what-we-treat/naturopath-thyroid-brisbane" className="block rounded-md p-2 text-sm font-medium leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Thyroid
                        </Link>
                        
                        <Link to="/what-we-treat/adhd-naturopath" className="block rounded-md p-2 text-sm font-medium leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          ADHD
                        </Link>
                      </div>
                      
                      {/* Right Column */}
                      <div className="space-y-2">
                        <Link to="/what-we-treat/naturopath-anxiety" className="block rounded-md p-2 text-sm font-medium leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Anxiety
                        </Link>
                        
                        <Link to="/what-we-treat/naturopath-diabetes-brisbane" className="block rounded-md p-2 text-sm font-medium leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Diabetes
                        </Link>
                        
                        <Link to="/what-we-treat/cardiovascular-health-naturopath-brisbane" className="block rounded-md p-2 text-sm font-medium leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Cardiovascular Health
                        </Link>
                        
                        <Link to="/what-we-treat/anti-aging-naturopath-brisbane" className="block rounded-md p-2 text-sm font-medium leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Anti-Aging
                        </Link>
                        
                        <Link to="/what-we-treat/childrens-naturopath-brisbane" className="block rounded-md p-2 text-sm font-medium leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Children's Health
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Areas We Serve Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary px-4 py-2 transition-colors">
                  Areas We Serve
                  <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-popover border rounded-md shadow-lg p-4 w-64">
                    <div className="space-y-1">
                      {areasItems.map(item => <Link key={item.href} to={item.href} className="block rounded-md p-3 text-sm font-medium leading-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          {item.title}
                        </Link>)}
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/about-us" className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 ${isActive("/about-us") ? "text-primary" : "text-muted-foreground"}`}>
                About Us
              </Link>

              <Link to="/blog" className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 ${isActive("/blog") ? "text-primary" : "text-muted-foreground"}`}>
                Blog
              </Link>

              <Link to="/contact" className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 ${isActive("/contact") ? "text-primary" : "text-muted-foreground"}`}>
                Contact
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <a href="tel:0731808853">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button size="sm" asChild>
                <Link to="/book-now">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Consult
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                  <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <img src={nxtlvlLogo} alt="NXTLVL Health" className="h-10" />
                  </div>

                  <nav className="flex flex-col space-y-4 mb-8">
                    <Link to="/" onClick={closeSheet} className={`text-base font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}>
                      Home
                    </Link>
                    
                    {/* Services Section */}
                    <div className="space-y-2">
                      <button onClick={() => toggleSection('services')} className="flex items-center justify-between w-full text-left text-base font-medium text-foreground">
                        Services
                        <ChevronRight className={`h-4 w-4 transition-transform ${expandedSections.services ? 'rotate-90' : ''}`} />
                      </button>
                      {expandedSections.services && <div className="pl-4 space-y-2">
                          {servicesItems.map(item => <Link key={item.href} to={item.href} onClick={closeSheet} className="block text-sm text-muted-foreground hover:text-primary">
                              {item.title}
                            </Link>)}
                        </div>}
                    </div>

                    {/* What We Treat Section */}
                    <div className="space-y-2">
                      <button onClick={() => toggleSection('treatments')} className="flex items-center justify-between w-full text-left text-base font-medium text-foreground">
                        What We Treat
                        <ChevronRight className={`h-4 w-4 transition-transform ${expandedSections.treatments ? 'rotate-90' : ''}`} />
                      </button>
                      {expandedSections.treatments && <div className="pl-4 space-y-2">
                          {/* Gut Health */}
                          <div>
                            <button onClick={() => toggleSection('gutHealth')} className="flex items-center justify-between w-full text-left text-sm text-muted-foreground hover:text-primary">
                              Gut Health
                              <ChevronRight className={`h-3 w-3 transition-transform ${expandedSections.gutHealth ? 'rotate-90' : ''}`} />
                            </button>
                            {expandedSections.gutHealth && <div className="pl-4 space-y-1 mt-1">
                                <Link to="/what-we-treat/sibo-naturopath" onClick={closeSheet} className="block text-xs text-muted-foreground hover:text-primary">
                                  • SIBO
                                </Link>
                                
                                {/* IBS Subsection */}
                                <div>
                                  <button onClick={() => toggleSection('ibs')} className="flex items-center justify-between w-full text-left text-xs text-muted-foreground hover:text-primary">
                                    • IBS
                                    <ChevronRight className={`h-3 w-3 transition-transform ${expandedSections.ibs ? 'rotate-90' : ''}`} />
                                  </button>
                                   {expandedSections.ibs && <div className="pl-4 space-y-1 mt-1">
                                       <Link to="/what-we-treat/ibs-brisbane" onClick={closeSheet} className="block text-xs text-muted-foreground hover:text-primary">
                                         - IBS Treatment Brisbane
                                       </Link>
                                       <Link to="/what-we-treat/ibs-naturopath" onClick={closeSheet} className="block text-xs text-muted-foreground hover:text-primary">
                                         - IBS Naturopathy
                                       </Link>
                                       <Link to="/what-we-treat/ibs-clinic" onClick={closeSheet} className="block text-xs text-muted-foreground hover:text-primary">
                                         - IBS Clinic
                                       </Link>
                                     </div>}
                                </div>
                                
                                <Link to="/what-we-treat/gut-health-specialist" onClick={closeSheet} className="block text-xs text-muted-foreground hover:text-primary">
                                  • Gut Health Specialist
                                </Link>
                              </div>}
                          </div>
                          
                          {/* Simple treatment items */}
                          <Link to="/what-we-treat/weight-loss-naturopath-brisbane" onClick={closeSheet} className="block text-sm text-muted-foreground hover:text-primary">
                            Weight Loss
                          </Link>
                          
                          <Link to="/what-we-treat/wellness-clinic-brisbane" onClick={closeSheet} className="block text-sm text-muted-foreground hover:text-primary">
                            Overall Wellness
                          </Link>
                          
                          {/* Skin Conditions */}
                          <div>
                            <button onClick={() => toggleSection('skinConditions')} className="flex items-center justify-between w-full text-left text-sm text-muted-foreground hover:text-primary">
                              Skin Conditions
                              <ChevronRight className={`h-3 w-3 transition-transform ${expandedSections.skinConditions ? 'rotate-90' : ''}`} />
                            </button>
                            {expandedSections.skinConditions && <div className="pl-4 space-y-1 mt-1">
                                <Link to="/what-we-treat/hormonal-acne-naturopath" onClick={closeSheet} className="block text-xs text-muted-foreground hover:text-primary">
                                  • Hormonal Acne
                                </Link>
                                <Link to="/what-we-treat/acne-naturopathy" onClick={closeSheet} className="block text-xs text-muted-foreground hover:text-primary">
                                  • Acne
                                </Link>
                                <Link to="/what-we-treat/naturopath-eczema" onClick={closeSheet} className="block text-xs text-muted-foreground hover:text-primary">
                                  • Eczema
                                </Link>
                              </div>}
                          </div>
                          
                          <Link to="/what-we-treat/naturopath-thyroid-brisbane" onClick={closeSheet} className="block text-sm text-muted-foreground hover:text-primary">
                            Thyroid
                          </Link>
                          
                          <Link to="/what-we-treat/adhd-naturopath" onClick={closeSheet} className="block text-sm text-muted-foreground hover:text-primary">
                            ADHD
                          </Link>
                          
                          <Link to="/what-we-treat/naturopath-anxiety" onClick={closeSheet} className="block text-sm text-muted-foreground hover:text-primary">
                            Anxiety
                          </Link>
                          
                          <Link to="/what-we-treat/naturopath-diabetes-brisbane" onClick={closeSheet} className="block text-sm text-muted-foreground hover:text-primary">
                            Diabetes
                          </Link>
                          
                          <Link to="/what-we-treat/childrens-naturopath-brisbane" onClick={closeSheet} className="block text-sm text-muted-foreground hover:text-primary">
                            Children's Health
                          </Link>
                        </div>}
                    </div>

                    {/* Areas We Serve Section */}
                    <div className="space-y-2">
                      <button onClick={() => toggleSection('areas')} className="flex items-center justify-between w-full text-left text-base font-medium text-foreground">
                        Areas We Serve
                        <ChevronRight className={`h-4 w-4 transition-transform ${expandedSections.areas ? 'rotate-90' : ''}`} />
                      </button>
                      {expandedSections.areas && <div className="pl-4 space-y-2">
                          {areasItems.map(item => <Link key={item.href} to={item.href} onClick={closeSheet} className="block text-sm text-muted-foreground hover:text-primary">
                              {item.title}
                            </Link>)}
                        </div>}
                    </div>

                    <Link to="/about-us" onClick={closeSheet} className={`text-base font-medium transition-colors hover:text-primary ${isActive("/about-us") ? "text-primary" : "text-muted-foreground"}`}>
                      About Us
                    </Link>

                    <Link to="/blog" onClick={closeSheet} className={`text-base font-medium transition-colors hover:text-primary ${isActive("/blog") ? "text-primary" : "text-muted-foreground"}`}>
                      Blog
                    </Link>

                    <Link to="/contact" onClick={closeSheet} className={`text-base font-medium transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-muted-foreground"}`}>
                      Contact
                    </Link>
                  </nav>

                  <div className="mt-auto space-y-3">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:0731808853">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button className="w-full" asChild>
                      <Link to="/book-now">
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Consult
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>;
};
export default Navigation;