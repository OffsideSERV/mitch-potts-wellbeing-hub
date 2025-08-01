
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar, Clock, Users, BadgeCheck, TestTube } from "lucide-react";

const Footer = () => {
  const services = [
    { title: "Gut Health", href: "/what-we-treat/gut-health-naturopath-brisbane" },
    { title: "Weight Loss", href: "/what-we-treat/weight-loss-naturopath-brisbane" },
    { title: "Thyroid Naturopathy", href: "/what-we-treat/naturopath-thyroid-brisbane" },
    { title: "ADHD Naturopathy", href: "/what-we-treat/adhd-naturopath" },
    { title: "Anxiety Naturopathy", href: "/what-we-treat/naturopath-anxiety" },
    { title: "Personal Training", href: "/services/personal-trainer-newstead" },
  ];

  const areas = [
    { title: "North Brisbane", href: "/areas-we-serve/naturopath-north-brisbane" },
    { title: "Newstead", href: "/areas-we-serve/naturopath-newstead" },
    { title: "New Farm", href: "/areas-we-serve/naturopath-new-farm" },
    { title: "Clayfield", href: "/areas-we-serve/naturopath-clayfield-brisbane" },
    { title: "Windsor", href: "/areas-we-serve/naturopath-windsor" },
    { title: "Indooroopilly", href: "/indooroopilly-naturopathy" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-bold text-xl text-primary">NXTLVL Health - Naturopath</div>
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
                <span>Suite 2/665 Brunswick St, New Farm QLD 4005</span>
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
                <span>Monday - Friday: 9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Saturday: 8:00 AM - 12:00 PM</span>
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
              © 2025 NXTLVL Health - Mitchell Potts Naturopathy. All rights reserved. | Brisbane, Queensland, Australia
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link to="/cancellation-policy" className="text-sm text-muted-foreground hover:text-primary">
                Cancellation Policy
              </Link>
              <a href="/sitemap.xml" className="text-sm text-muted-foreground hover:text-primary">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
