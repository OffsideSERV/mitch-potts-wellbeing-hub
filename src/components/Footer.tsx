import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar, Clock } from "lucide-react";

const Footer = () => {
  const services = [
    { title: "Gut Health", href: "/gut-health" },
    { title: "Weight Loss", href: "/weight-loss" },
    { title: "Thyroid Naturopathy", href: "/thyroid-naturopathy" },
    { title: "ADHD Naturopathy", href: "/adhd-naturopathy" },
    { title: "Anxiety Naturopathy", href: "/anxiety-naturopathy" },
    { title: "Personal Training", href: "/personal-training" },
  ];

  const areas = [
    { title: "North Brisbane", href: "/north-brisbane-naturopathy" },
    { title: "Newstead", href: "/newstead-naturopathy" },
    { title: "New Farm", href: "/new-farm-naturopathy" },
    { title: "Clayfield", href: "/clayfield-naturopathy" },
    { title: "Windsor", href: "/windsor-naturopathy" },
    { title: "Indooroopilly", href: "/indooroopilly-naturopathy" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-bold text-xl text-primary">NXTLVL Health</div>
            <p className="text-sm text-muted-foreground">
              Natural health solutions with personalised care. Expert naturopathy services across Brisbane.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:0731808853" className="hover:text-primary">
                  (07) 3180 8853
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@nxtlvlhealth.com.au" className="hover:text-primary">
                  info@nxtlvlhealth.com.au
                </a>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Brisbane, Queensland</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Areas We Serve</h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area.href}>
                  <Link
                    to={area.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get Started</h3>
            <div className="space-y-3">
              <Button className="w-full" asChild>
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Free Consult
                </a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="tel:0731808853">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Flexible Hours Available</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Online & In-Person Consultations
              </p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 NXTLVL Health. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link to="/cancellation-policy" className="text-sm text-muted-foreground hover:text-primary">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;