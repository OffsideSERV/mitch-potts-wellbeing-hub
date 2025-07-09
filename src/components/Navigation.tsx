import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, Calendar } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const mainNavItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Gut Health", href: "/gut-health" },
    { title: "Weight Loss", href: "/weight-loss" },
    { title: "Personal Training", href: "/personal-training" },
    { title: "Areas", href: "/areas" },
  ];

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-bold text-xl text-primary">NXTLVL Health</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:0731808853">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <Calendar className="h-4 w-4 mr-2" />
                Book Consult
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-bold text-lg text-primary">NXTLVL Health</div>
                  <Button variant="ghost" size="icon" onClick={closeSheet}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <nav className="flex flex-col space-y-4 mb-8">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={closeSheet}
                      className={`text-base font-medium transition-colors hover:text-primary ${
                        isActive(item.href) ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto space-y-3">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:0731808853">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button className="w-full" asChild>
                    <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Free Consult
                    </a>
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