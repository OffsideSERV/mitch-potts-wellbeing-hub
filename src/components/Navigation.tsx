import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import nxtlvlLogo from "/lovable-uploads/0aadec6a-7f1f-4a21-854c-39d8c3a218d0.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const servicesItems = [
    { title: "Live Blood Analysis in Brisbane", href: "/services/live-blood-analysis-brisbane" },
    { title: "Functional Medicine", href: "/functional-medicine" },
    { title: "Nutrition", href: "/services/nutritionist-brisbane" },
    { title: "MLS Laser Therapy", href: "/services/mls-laser-therapy-treatment-brisbane" },
    { title: "Personal Training", href: "/services/personal-trainer-new-farm" },
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
    { title: "Children's Health", href: "/what-we-treat/childrens-naturopath-brisbane" },
  ];

  const areasItems = [
    { title: "Newstead", href: "/areas-we-serve/naturopath-newstead" },
    { title: "New Farm", href: "/areas-we-serve/naturopath-new-farm" },
    { title: "North Brisbane", href: "/areas-we-serve/naturopath-north-brisbane" },
    { title: "Indooroopilly", href: "/indooroopilly-naturopathy" },
    { title: "Morningside", href: "/areas-we-serve/naturopath-morningside" },
    { title: "Hamilton", href: "/areas-we-serve/naturopath-hamilton" },
    { title: "Clayfield", href: "/areas-we-serve/naturopath-clayfield-brisbane" },
    { title: "Windsor", href: "/areas-we-serve/naturopath-windsor" },
  ];

  const closeSheet = () => setIsOpen(false);

  return (
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
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-80">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Left Column */}
                      <div className="space-y-3">
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
                          <div className="absolute left-full top-0 ml-1 w-48 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="p-2 space-y-1">
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/what-we-treat/sibo-naturopath"
                                  className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                  SIBO
                                </Link>
                              </NavigationMenuLink>
                              
                              {/* IBS with its own submenu */}
                              <div className="relative group/ibs">
                                <NavigationMenuLink asChild>
                                  <Link
                                    to="/what-we-treat/ibs-brisbane"
                                    className="flex items-center justify-between select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                  >
                                    IBS
                                    <ChevronDown className="h-3 w-3" />
                                  </Link>
                                </NavigationMenuLink>
                                
                                {/* IBS Submenu */}
                                <div className="absolute left-full top-0 ml-1 w-44 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover/ibs:opacity-100 group-hover/ibs:visible transition-all duration-200 z-50">
                                  <div className="p-2 space-y-1">
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to="/what-we-treat/ibs-naturopath"
                                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                      >
                                        IBS Naturopathy
                                      </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to="/what-we-treat/ibs-clinic"
                                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                      >
                                        IBS Clinic
                                      </Link>
                                    </NavigationMenuLink>
                                  </div>
                                </div>
                              </div>
                              
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
                          <div className="absolute left-full top-0 ml-1 w-48 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
                <div className="flex items-center justify-between mb-6">
                  <img src={nxtlvlLogo} alt="NXTLVL Health" className="h-10" />
                  <Button variant="ghost" size="icon" onClick={closeSheet}>
                    <X className="h-5 w-5" />
                  </Button>
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
                  
                  <div className="space-y-2">
                    <div className="text-base font-medium text-foreground">Services</div>
                    {servicesItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={closeSheet}
                        className="block text-sm text-muted-foreground hover:text-primary pl-4"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="text-base font-medium text-foreground">What We Treat</div>
                    {treatmentItems.map((item) => (
                      <div key={item.href}>
                        <Link
                          to={item.href}
                          onClick={closeSheet}
                          className="block text-sm text-muted-foreground hover:text-primary pl-4"
                        >
                          {item.title}
                        </Link>
                        {item.subItems && (
                          <div className="pl-8 space-y-1 mt-1">
                            {item.subItems.map((subItem) => (
                              <div key={subItem.href || subItem.title}>
                                {subItem.href ? (
                                  <Link
                                    to={subItem.href}
                                    onClick={closeSheet}
                                    className="block text-xs text-muted-foreground hover:text-primary"
                                  >
                                    • {subItem.title}
                                  </Link>
                                ) : (
                                  <div>
                                    <span className="block text-xs text-muted-foreground">• {subItem.title}</span>
                                    {subItem.subItems && (
                                      <div className="pl-4 space-y-1 mt-1">
                                        {subItem.subItems.map((nestedItem) => (
                                          <Link
                                            key={nestedItem.href}
                                            to={nestedItem.href}
                                            onClick={closeSheet}
                                            className="block text-xs text-muted-foreground hover:text-primary"
                                          >
                                            - {nestedItem.title}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="text-base font-medium text-foreground">Areas We Serve</div>
                    {areasItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={closeSheet}
                        className="block text-sm text-muted-foreground hover:text-primary pl-4"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>

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
                      Book Free Consult
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
