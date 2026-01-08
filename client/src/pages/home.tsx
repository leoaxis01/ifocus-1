import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CourseCard } from "@/components/course-card";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { StatsSection } from "@/components/stats-section";
import { PartnerLogos } from "@/components/partner-logos";
import {
  courseCategories,
  allCourses,
  services,
  testimonials,
  whyChooseUs,
  companiesAndClients,
} from "@shared/schema";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Globe,
  Database,
  Brain,
  Shield,
  Cloud,
  TestTube,
  BarChart3,
  Megaphone,
  Palette,
  Award,
  Rocket,
  Target,
  Calendar,
  Play,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Globe,
  Database,
  Brain,
  Shield,
  Cloud,
  TestTube,
  BarChart3,
  Megaphone,
  Palette,
  Award,
  Rocket,
  Target,
  Calendar,
};

export default function Home() {
  const popularCourses = allCourses.filter((c) => c.popular).slice(0, 6);
  const featuredServices = services.slice(0, 6);

  return (
    <div className="flex flex-col" data-testid="page-home">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm px-4 py-1.5">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span>Empowering India Through Skill Development</span>
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Empowering Careers with{" "}
                  <span className="text-gradient">Industry-Ready IT Training</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  iFocus Info Solutions offers job-oriented training with hands-on projects, expert mentors, placement support, and flexible online/offline classes.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/courses">
                  <Button size="lg" className="gap-2" data-testid="button-explore-courses">
                    Explore Courses
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2"
                    data-testid="button-free-counseling"
                  >
                    <Play className="h-4 w-4" />
                    Free Counseling
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">95% Placement Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">100+ Hiring Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Expert Trainers</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
                <Card className="relative w-full max-w-md overflow-visible">
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center space-y-2">
                      <h3 className="font-serif text-xl font-semibold">
                        Start Your Journey
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Get a free career counseling session
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Code2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">50+ Courses</p>
                          <p className="text-xs text-muted-foreground">
                            Across 10 domains
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <Target className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Job Guarantee</p>
                          <p className="text-xs text-muted-foreground">
                            100% placement assistance
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Certification</p>
                          <p className="text-xs text-muted-foreground">
                            Industry-recognized certificates
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact" className="block">
                      <Button className="w-full" data-testid="button-schedule-call">
                        Schedule Free Call
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsSection />
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Programs
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Explore Course Categories
            </h2>
            <p className="text-muted-foreground">
              Choose from 50+ industry-relevant courses across 10 technology domains
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {courseCategories.map((category) => {
              const Icon = iconMap[category.icon];
              const courseCount = allCourses.filter(
                (c) => c.category === category.id
              ).length;
              return (
                <Link
                  key={category.id}
                  href={`/courses?category=${category.id}`}
                >
                  <Card
                    className="group overflow-visible hover-elevate cursor-pointer transition-all"
                    data-testid={`category-card-${category.id}`}
                  >
                    <CardContent className="p-4 sm:p-6 text-center space-y-3">
                      <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        {Icon && <Icon className="h-6 w-6 text-primary" />}
                      </div>
                      <div>
                        <h3 className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {courseCount} courses
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <Badge variant="secondary" className="mb-4">
                Featured
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">Popular Courses</h2>
            </div>
            <Link href="/courses">
              <Button variant="outline" className="gap-2">
                View All Courses
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              What We Offer
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              Beyond training, we provide comprehensive IT solutions for individuals and enterprises
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="outline" className="gap-2">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Success Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Our Students Say
            </h2>
            <p className="text-muted-foreground">
              Hear from our alumni who have transformed their careers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Why iFocus
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose iFocus?
            </h2>
            <p className="text-muted-foreground">
              We are committed to your success with industry-best training and support
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <Card
                  key={index}
                  className="overflow-visible text-center"
                  data-testid={`why-choose-${index}`}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      {Icon && <Icon className="h-7 w-7 text-primary" />}
                    </div>
                    <h3 className="font-serif font-semibold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placement Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Network
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Placement Partners
            </h2>
            <p className="text-muted-foreground">
              Our students are placed at leading companies across industries
            </p>
          </div>
          <PartnerLogos />
          <div className="text-center mt-8">
            <Link href="/placements">
              <Button variant="outline" className="gap-2">
                View All Placements
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Companies & Clients */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Clients
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-muted-foreground">
              We work with top companies for corporate training and placement partnerships
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {companiesAndClients.map((company) => (
              <Card
                key={company.id}
                className="overflow-visible"
                data-testid={`client-${company.id}`}
              >
                <CardContent className="p-4 flex items-center justify-center min-h-[80px]">
                  <span className="font-medium text-sm text-center text-muted-foreground">
                    {company.name}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who have transformed their
            careers with iFocus. Schedule a free counseling session today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                data-testid="button-cta-counseling"
              >
                Schedule Free Counseling
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
