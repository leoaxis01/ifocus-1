import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { services } from "@shared/schema";
import {
  ArrowRight,
  CheckCircle,
  Smartphone,
  Globe,
  Users,
  Wallet,
  TrendingUp,
  Building2,
  GraduationCap,
  Wrench,
  Briefcase,
  Heart,
  Landmark,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Globe,
  Users,
  Wallet,
  TrendingUp,
  Building2,
  GraduationCap,
  Wrench,
  Briefcase,
  Heart,
  Landmark,
};

const serviceDetails: Record<
  string,
  { features: string[]; benefits: string[] }
> = {
  "mobile-dev": {
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions (React Native, Flutter)",
      "UI/UX design and prototyping",
      "App Store optimization",
    ],
    benefits: [
      "Scalable mobile solutions",
      "Expert development team",
      "On-time delivery",
      "Post-launch support",
    ],
  },
  "web-dev": {
    features: [
      "Full-stack web development",
      "E-commerce solutions",
      "CMS development (WordPress, Drupal)",
      "Progressive Web Apps (PWA)",
    ],
    benefits: [
      "Modern technology stack",
      "SEO-friendly websites",
      "Responsive design",
      "Performance optimized",
    ],
  },
  staffing: {
    features: [
      "IT staffing solutions",
      "Contract and permanent hiring",
      "Technical screening",
      "Skill assessment services",
    ],
    benefits: [
      "Access to top talent",
      "Reduced hiring time",
      "Pre-vetted candidates",
      "Flexible engagement",
    ],
  },
  payroll: {
    features: [
      "Automated payroll processing",
      "Tax compliance management",
      "Leave management",
      "Expense reimbursement",
    ],
    benefits: [
      "Error-free processing",
      "100% compliance",
      "Time savings",
      "Employee self-service",
    ],
  },
  "digital-marketing-service": {
    features: [
      "SEO and SEM services",
      "Social media marketing",
      "Content marketing",
      "Email marketing campaigns",
    ],
    benefits: [
      "Increased visibility",
      "Lead generation",
      "Brand building",
      "ROI tracking",
    ],
  },
  "corporate-training": {
    features: [
      "Customized training programs",
      "On-site and remote training",
      "Technology upskilling",
      "Leadership development",
    ],
    benefits: [
      "Tailored curriculum",
      "Flexible scheduling",
      "Expert trainers",
      "Measurable outcomes",
    ],
  },
  "campus-training": {
    features: [
      "Industry-ready curriculum",
      "Soft skills training",
      "Technical workshops",
      "Placement preparation",
    ],
    benefits: [
      "Bridge skill gaps",
      "Improved employability",
      "Industry connections",
      "Career guidance",
    ],
  },
  workshops: {
    features: [
      "Hands-on technology workshops",
      "Latest industry trends",
      "Expert-led sessions",
      "Practical project work",
    ],
    benefits: [
      "Real-world experience",
      "Networking opportunities",
      "Certificate of completion",
      "Career advancement",
    ],
  },
  internships: {
    features: [
      "Real project experience",
      "Mentorship program",
      "Industry exposure",
      "Performance evaluation",
    ],
    benefits: [
      "Portfolio building",
      "Professional skills",
      "Job-ready experience",
      "Reference letters",
    ],
  },
  "csr-programs": {
    features: [
      "Community skill development",
      "Underprivileged youth training",
      "Women empowerment programs",
      "Rural digital literacy",
    ],
    benefits: [
      "Social impact reporting",
      "CSR compliance support",
      "Community engagement",
      "Sustainable development",
    ],
  },
  "govt-programs": {
    features: [
      "PMKVY aligned training",
      "Skill India partnerships",
      "State government schemes",
      "Employment-focused curriculum",
    ],
    benefits: [
      "Government certification",
      "Job placement support",
      "Subsidized training",
      "Mass skill development",
    ],
  },
};

export default function Services() {
  return (
    <div className="flex flex-col" data-testid="page-services">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Our Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Comprehensive <span className="text-gradient">IT Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Beyond training, we offer a complete range of IT services to help
                individuals and enterprises succeed in the digital age.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const details = serviceDetails[service.id] || {
                features: [],
                benefits: [],
              };
              const isEven = index % 2 === 0;

              return (
                <AnimateOnScroll key={service.id} delay={index * 50}>
                  <div
                    id={service.id}
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                    data-testid={`service-section-${service.id}`}
                  >
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className="space-y-6">
                        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                          {Icon && <Icon className="h-7 w-7 text-primary" />}
                        </div>
                        <h2 className="text-3xl font-bold">{service.name}</h2>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}. We provide end-to-end solutions
                          tailored to your specific needs with a focus on quality
                          and timely delivery.
                        </p>
                        <Link href="/contact">
                          <Button className="gap-2">
                            Get Started
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className={isEven ? "" : "lg:order-1"}>
                      <Card className="overflow-visible">
                        <CardContent className="p-6 space-y-6">
                          <div>
                            <h3 className="font-semibold mb-4">Key Features</h3>
                            <ul className="space-y-2">
                              {details.features.map((feature, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-3 text-sm"
                                >
                                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="pt-4 border-t">
                            <h3 className="font-semibold mb-4">Benefits</h3>
                            <ul className="space-y-2">
                              {details.benefits.map((benefit, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-3 text-sm"
                                >
                                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your specific requirements. Our team will work
              with you to create a tailored solution.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="gap-2">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
