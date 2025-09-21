import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, X, Phone, Calendar, ChevronDown, ChevronRight, Gift } from "lucide-react";
import { cn } from "@/lib/utils";
import nxtlvlLogo from "/lovable-uploads/0aadec6a-7f1f-4a21-854c-39d8c3a218d0.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const servicesItems = [
    { title: "Live Blood Analysis in Brisbane", href: "/services/live-blood-analysis-brisbane" },
    { title: "Functional Medicine", href: "/functional-medicine" },
    { title: "Nutrition", href: "/services/nutritionist-brisbane" },
    { title: "Pathology Testing Prices", href: "/pathology-testing-prices" },
    { title: "MLS Laser Therapy", href: "/services/mls-laser-therapy-treatment-brisbane" },
    { title: "Personal Training", href: "/services/personal-trainer-newstead" },
    { title: "NXTLVL Tonics", href: "/nxtlvl-tonics" },
  ];

  const treatmentItems = [
    { 
      title: "Gut Health", 
      href: "/what-we-treat/gut-health-naturopath-brisbane", 
      subItems: [
        { title: "SIBO", href: "/what-we-treat/sibo-naturopath" },
        { 
          title: "IBS", 
          subItems: [
            { title: "IBS Treatment Brisbane", href: "/what-we-treat/ibs-brisbane" },
            { title: "IBS Naturopathy", href: "/what-we-treat/ibs-naturopath" },
            { title: "IBS Clinic", href: "/what-we-treat/ibs-clinic" },
          ]
        },
        { title: "Gut Health Specialist", href: "/what-we-treat/gut-health-specialist" },
      ]
    },
    { title: "Weight Loss", href: "/what-we-treat/weight-loss-naturopath-brisbane" },
    { title: "Overall Wellness", href: "/what-we-treat/wellness-clinic-brisbane" },
    { 
      title: "Skin Conditions", 
      href: "/what-we-treat/naturopathy-for-skin", 
      subItems: [
        { title: "Hormonal Acne", href: "/what-we-treat/hormonal-acne-naturopath" },
        { title: "Acne", href: "/what-we-treat/acne-naturopathy" },
        { title: "Eczema", href: "/what-we-treat/naturopath-eczema" },
      ]
    },
    { title: "Thyroid", href: "/what-we-treat/naturopath-thyroid-brisbane" },
    { title: "ADHD", href: "/what-we-treat/adhd-naturopath" },
    { title: "Anxiety", href: "/what-we-treat/naturopath-anxiety" },
    { title: "Diabetes", href: "/what-we-treat/naturopath-diabetes-brisbane" },
    { title: "Cardiovascular Health", href: "/cardiovascular-health-naturopath-brisbane" },
    { title: "Children's Health", href: "/what-we-treat/childrens-naturopath-brisbane" },
  ];

  const areasItems = [
    { title: "Newstead", href: "/areas-we-serve/naturopath-newstead" },
    { title: "New Farm", href: "/areas-we-serve/naturopath-new-farm" },
    { title: "North Brisbane", href: "/areas-we-serve/naturopath-north-brisbane" },
    { title: "Indooroopilly", href: "/areas-we-serve/naturopath-indooroopilly" },
    { title: "Morningside", href: "/areas-we-serve/naturopath-morningside" },
    { title: "Hamilton", href: "/areas-we-serve/naturopath-hamilton" },
    { title: "Clayfield", href: "/areas-we-serve/naturopath-clayfield-brisbane" },
    { title: "Windsor", href: "/areas-we-serve/naturopath-windsor" },
  ];

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

  return (
    <>
      {/* Naturopathy Promotion Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:py-3 px-4">
        <div className="container mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col sm:hidden items-center justify-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <Gift className="h-4 w-4 text-yellow-300 animate-pulse flex-shrink-0" />
              <span className="text-xs font-medium leading-tight">
                <strong>15% off Naturopathy Initial Consults until the end of October</strong>
              </span>
            </div>
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold whitespace-nowrap text-xs px-3 py-1"
              asChild
            >
              <a href="https://nxtlvlhealth.com.au/book-now" target="_blank" rel="noopener noreferrer">Book Now</a>
            </Button>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden sm:flex flex-row items-center justify-center gap-3 text-center">
            <Gift className="h-5 w-5 text-yellow-300 animate-pulse flex-shrink-0" />
            <span className="text-sm md:text-base font-medium leading-tight">
              <strong>15% off Naturopathy Initial Consults until the end of October</strong>
            </span>
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold whitespace-nowrap text-sm px-4 py-2"
              asChild
            >
              <a href="https://nxtlvlhealth.com.au/book-now" target="_blank" rel="noopener noreferrer">Book Now</a>
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
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 ${
                    isActive("/") ? "text-primary" : "text-muted-foreground"
                  }`}>
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-80">
                      {servicesItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">What We Treat</NavigationMenuTrigger>
                  <NavigationMenuContent className="overflow-visible">
                    <div className="grid gap-3 p-8 w-[600px] overflow-visible">
                      <div className="grid grid-cols-2 gap-8 overflow-visible">
                        {/* Left Column */}
                        <div className="space-y-3 overflow-visible">
                          {/* Gut Health with hover submenu */}
                          <div className="relative group">
                            <NavigationMenuLink asChild>
                              <Link
                                to="/what-we-treat/gut-health-naturopath-brisbane"
                                className="flex items-center justify-between select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-sm"
                              >
                                Gut Health
                                <ChevronDown className="h-3 w-3" />
                              </Link>
                            </NavigationMenuLink>
                            
                            {/* Gut Health Submenu */}
                            <div className="absolute left-full top-0 ml-1 w-60 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                              <div className="p-2 space-y-1">
                                <NavigationMenuLink asChild>
                                  <Link
                                    to="/what-we-treat/sibo-naturopath"
                                    className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                  >
                                    SIBO
                                  </Link>
                                </NavigationMenuLink>
                                
                                <NavigationMenuLink asChild>
                                  <Link
                                    to="/what-we-treat/ibs-brisbane"
                                    className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                  >
                                    IBS
                                  </Link>
                                </NavigationMenuLink>
                                
                                <NavigationMenuLink asChild>
                                  <Link
                                    to="/what-we-treat/ibs-naturopath"
                                    className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground pl-4"
                                  >
                                    IBS Naturopathy
                                  </Link>
                                </NavigationMenuLink>
                                
                                <NavigationMenuLink asChild>
                                  <Link
                                    to="/what-we-treat/ibs-clinic"
                                    className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground pl-4"
                                  >
                                    IBS Clinic
                                  </Link>
                                </NavigationMenuLink>
                                
                                <NavigationMenuLink asChild>
                                  <Link
                                    to="/what-we-treat/gut-health-specialist"
                                    className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                  >
                                    Gut Health Specialist
                                  </Link>
                                </NavigationMenuLink>
                              </div>
                            </div>
                          </div>
                          
                          <NavigationMenuLink asChild>
                            <Link
                              to="/what-we-treat/weight-loss-naturopath-brisbane"
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-sm"
                            >
                              Weight Loss
                            </Link>
                          </NavigationMenuLink>
                          
                          <NavigationMenuLink asChild>
                            <Link
                              to="/what-we-treat/wellness-clinic-brisbane"
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-sm"
                            >
                              Overall Wellness
                            </Link>
                          </NavigationMenuLink>
                          
                          {/* Skin Conditions with hover submenu */}
                          <div className="relative group">
                            <NavigationMenuLink asChild>
                              <Link
                                to="/what-we-treat/naturopathy-for-skin"
                                className="flex items-center justify-between select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-sm"
                              >
                                Skin Conditions
                                <ChevronDown className="h-3 w-3" />
                              </Link>
                            </NavigationMenuLink>
                            
                            {/* Skin Conditions Submenu */}
                            <div className="absolute left-full top-0 ml-1 w-60 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                              <div className="p-2 space-y-1">
                                <NavigationMenuLink asChild>
                                  <Link
                                    to="/what-we-treat/hormonal-acne-naturopath"
                                    className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                  >
                                    Hormonal Acne
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to="/what-we-treat/acne-naturopathy"
                                    className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                  >
                                    Acne
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to="/what-we-treat/naturopath-eczema"
                                    className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                  >
                                    Eczema
                                  </Link>
                                </NavigationMenuLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Right Column */}
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/what-we-treat/naturopath-thyroid-brisbane"
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-sm"
                            >
                              Thyroid
                            </Link>
                          </NavigationMenuLink>
                          
                          <NavigationMenuLink asChild>
                            <Link
                              to="/what-we-treat/adhd-naturopath"
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-sm"
                            >
                              ADHD
                            </Link>
                          </NavigationMenuLink>
                          
                          <NavigationMenuLink asChild>
                            <Link
                              to="/what-we-treat/naturopath-anxiety"
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-sm"
                            >
                              Anxiety
                            </Link>
                          </NavigationMenuLink>
                          
                          <NavigationMenuLink asChild>
                            <Link
                              to="/what-we-treat/naturopath-diabetes-brisbane"
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-sm"
                            >
                              Diabetes
                            </Link>
                          </NavigationMenuLink>
                          
                          <NavigationMenuLink asChild>
                            <Link
                              to="/what-we-treat/cardiovascular-health-naturopath-brisbane"
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-sm"
                            >
                              Cardiovascular Health
                            </Link>
                          </NavigationMenuLink>
                          
                          <NavigationMenuLink asChild>
                            <Link
                              to="/what-we-treat/anti-aging-naturopath-brisbane"
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-sm"
                            >
                              Anti-Aging
                            </Link>
                          </NavigationMenuLink>
                          
                          <NavigationMenuLink asChild>
                            <Link
                              to="/what-we-treat/childrens-naturopath-brisbane"
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-sm"
                            >
                              Children's Health
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Areas We Serve</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-64">
                      {areasItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about-us" className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 ${
                    isActive("/about-us") ? "text-primary" : "text-muted-foreground"
                  }`}>
                    About Us
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/blog" className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 ${
                    isActive("/blog") ? "text-primary" : "text-muted-foreground"
                  }`}>
                    Blog
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 ${
                    isActive("/contact") ? "text-primary" : "text-muted-foreground"
                  }`}>
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
                    <Link
                      to="/"
                      onClick={closeSheet}
                      className={`text-base font-medium transition-colors hover:text-primary ${
                        isActive("/") ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      Home
                    </Link>
                    
                    {/* Services Section */}
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleSection('services')}
                        className="flex items-center justify-between w-full text-left text-base font-medium text-foreground"
                      >
                        Services
                        <ChevronRight className={`h-4 w-4 transition-transform ${expandedSections.services ? 'rotate-90' : ''}`} />
                      </button>
                      {expandedSections.services && (
                        <div className="pl-4 space-y-2">
                          {servicesItems.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={closeSheet}
                              className="block text-sm text-muted-foreground hover:text-primary"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* What We Treat Section */}
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleSection('treatments')}
                        className="flex items-center justify-between w-full text-left text-base font-medium text-foreground"
                      >
                        What We Treat
                        <ChevronRight className={`h-4 w-4 transition-transform ${expandedSections.treatments ? 'rotate-90' : ''}`} />
                      </button>
                      {expandedSections.treatments && (
                        <div className="pl-4 space-y-2">
                          {/* Gut Health */}
                          <div>
                            <button
                              onClick={() => toggleSection('gutHealth')}
                              className="flex items-center justify-between w-full text-left text-sm text-muted-foreground hover:text-primary"
                            >
                              Gut Health
                              <ChevronRight className={`h-3 w-3 transition-transform ${expandedSections.gutHealth ? 'rotate-90' : ''}`} />
                            </button>
                            {expandedSections.gutHealth && (
                              <div className="pl-4 space-y-1 mt-1">
                                <Link
                                  to="/what-we-treat/sibo-naturopath"
                                  onClick={closeSheet}
                                  className="block text-xs text-muted-foreground hover:text-primary"
                                >
                                  • SIBO
                                </Link>
                                
                                {/* IBS Subsection */}
                                <div>
                                  <button
                                    onClick={() => toggleSection('ibs')}
                                    className="flex items-center justify-between w-full text-left text-xs text-muted-foreground hover:text-primary"
                                  >
                                    • IBS
                                    <ChevronRight className={`h-3 w-3 transition-transform ${expandedSections.ibs ? 'rotate-90' : ''}`} />
                                  </button>
                                   {expandedSections.ibs && (
                                     <div className="pl-4 space-y-1 mt-1">
                                       <Link
                                         to="/what-we-treat/ibs-brisbane"
                                         onClick={closeSheet}
                                         className="block text-xs text-muted-foreground hover:text-primary"
                                       >
                                         - IBS Treatment Brisbane
                                       </Link>
                                       <Link
                                         to="/what-we-treat/ibs-naturopath"
                                         onClick={closeSheet}
                                         className="block text-xs text-muted-foreground hover:text-primary"
                                       >
                                         - IBS Naturopathy
                                       </Link>
                                       <Link
                                         to="/what-we-treat/ibs-clinic"
                                         onClick={closeSheet}
                                         className="block text-xs text-muted-foreground hover:text-primary"
                                       >
                                         - IBS Clinic
                                       </Link>
                                     </div>
                                   )}
                                </div>
                                
                                <Link
                                  to="/what-we-treat/gut-health-specialist"
                                  onClick={closeSheet}
                                  className="block text-xs text-muted-foreground hover:text-primary"
                                >
                                  • Gut Health Specialist
                                </Link>
                              </div>
                            )}
                          </div>
                          
                          {/* Simple treatment items */}
                          <Link
                            to="/what-we-treat/weight-loss-naturopath-brisbane"
                            onClick={closeSheet}
                            className="block text-sm text-muted-foreground hover:text-primary"
                          >
                            Weight Loss
                          </Link>
                          
                          <Link
                            to="/what-we-treat/wellness-clinic-brisbane"
                            onClick={closeSheet}
                            className="block text-sm text-muted-foreground hover:text-primary"
                          >
                            Overall Wellness
                          </Link>
                          
                          {/* Skin Conditions */}
                          <div>
                            <button
                              onClick={() => toggleSection('skinConditions')}
                              className="flex items-center justify-between w-full text-left text-sm text-muted-foreground hover:text-primary"
                            >
                              Skin Conditions
                              <ChevronRight className={`h-3 w-3 transition-transform ${expandedSections.skinConditions ? 'rotate-90' : ''}`} />
                            </button>
                            {expandedSections.skinConditions && (
                              <div className="pl-4 space-y-1 mt-1">
                                <Link
                                  to="/what-we-treat/hormonal-acne-naturopath"
                                  onClick={closeSheet}
                                  className="block text-xs text-muted-foreground hover:text-primary"
                                >
                                  • Hormonal Acne
                                </Link>
                                <Link
                                  to="/what-we-treat/acne-naturopathy"
                                  onClick={closeSheet}
                                  className="block text-xs text-muted-foreground hover:text-primary"
                                >
                                  • Acne
                                </Link>
                                <Link
                                  to="/what-we-treat/naturopath-eczema"
                                  onClick={closeSheet}
                                  className="block text-xs text-muted-foreground hover:text-primary"
                                >
                                  • Eczema
                                </Link>
                              </div>
                            )}
                          </div>
                          
                          <Link
                            to="/what-we-treat/naturopath-thyroid-brisbane"
                            onClick={closeSheet}
                            className="block text-sm text-muted-foreground hover:text-primary"
                          >
                            Thyroid
                          </Link>
                          
                          <Link
                            to="/what-we-treat/adhd-naturopath"
                            onClick={closeSheet}
                            className="block text-sm text-muted-foreground hover:text-primary"
                          >
                            ADHD
                          </Link>
                          
                          <Link
                            to="/what-we-treat/naturopath-anxiety"
                            onClick={closeSheet}
                            className="block text-sm text-muted-foreground hover:text-primary"
                          >
                            Anxiety
                          </Link>
                          
                          <Link
                            to="/what-we-treat/naturopath-diabetes-brisbane"
                            onClick={closeSheet}
                            className="block text-sm text-muted-foreground hover:text-primary"
                          >
                            Diabetes
                          </Link>
                          
                          <Link
                            to="/what-we-treat/childrens-naturopath-brisbane"
                            onClick={closeSheet}
                            className="block text-sm text-muted-foreground hover:text-primary"
                          >
                            Children's Health
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Areas We Serve Section */}
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleSection('areas')}
                        className="flex items-center justify-between w-full text-left text-base font-medium text-foreground"
                      >
                        Areas We Serve
                        <ChevronRight className={`h-4 w-4 transition-transform ${expandedSections.areas ? 'rotate-90' : ''}`} />
                      </button>
                      {expandedSections.areas && (
                        <div className="pl-4 space-y-2">
                          {areasItems.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={closeSheet}
                              className="block text-sm text-muted-foreground hover:text-primary"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link
                      to="/about-us"
                      onClick={closeSheet}
                      className={`text-base font-medium transition-colors hover:text-primary ${
                        isActive("/about-us") ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      About Us
                    </Link>

                    <Link
                      to="/blog"
                      onClick={closeSheet}
                      className={`text-base font-medium transition-colors hover:text-primary ${
                        isActive("/blog") ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      Blog
                    </Link>

                    <Link
                      to="/contact"
                      onClick={closeSheet}
                      className={`text-base font-medium transition-colors hover:text-primary ${
                        isActive("/contact") ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
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
    </>
  );
};

export default Navigation;
