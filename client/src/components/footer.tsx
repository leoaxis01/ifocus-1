import { Link } from "wouter";
import { courseCategories, services, companiesAndClients } from "@shared/schema";
import { IFocusLogo } from "@/components/ifocus-logo";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-card border-t" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/">
              <IFocusLogo />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transform your career with industry-leading IT training and 100% placement assistance.
              Join thousands of successful alumni working at top companies.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.facebook.com/share/1DfqVAZk79/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              {/* Twitter button */}
              
              {/* <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </Button> */}
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.instagram.com/ifocusinfosolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.youtube.com/channel/UChWjnWoCMuxsIMQjv_za3oA"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Popular Courses</h4>
            <ul className="space-y-2">
              {courseCategories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/courses?category=${category.id}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${category.id}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/courses"
                  className="text-sm text-primary hover:underline"
                >
                  View All Courses
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${service.id}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary hover:underline"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Hyderabad, Telangana, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+919440086767"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  +91 94400 86767
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@ifocusinfosolutions.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@ifocusinfosolutions.com
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <h5 className="text-sm font-medium mb-2">Newsletter</h5>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button size="sm" data-testid="button-newsletter-subscribe">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © 2026 iFocus Info Solutions. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span>Our Clients:</span>
              {companiesAndClients.slice(0, 3).map((client, i) => (
                <span key={client.id} className="font-medium">
                  {client.name}
                  {i < 2 && ","}
                </span>
              ))}
              <span className="text-primary">+more</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
