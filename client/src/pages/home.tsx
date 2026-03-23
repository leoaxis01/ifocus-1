import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CourseCard } from "@/components/course-card";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { StatsSection } from "@/components/stats-section";
import { PartnerLogos } from "@/components/partner-logos";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

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
  Handshake,
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

const mouHighlightText =
  "iFocus Info Solutions has entered into a Memorandum of Understanding (MoU) with APPC (Andhra Pradesh Productivity Council) to jointly undertake consultancy services, training programs, capacity building initiatives, research activities, skill development programs, CSR initiatives, and other mutually agreed projects.";

const mouHighlightPhrase =
  "Memorandum of Understanding (MoU) with APPC (Andhra Pradesh Productivity Council)";

const mouHighlightStartIndex = mouHighlightText.indexOf(mouHighlightPhrase);
const mouHighlightEndIndex = mouHighlightStartIndex + mouHighlightPhrase.length;

export default function Home() {
  const popularCourses = allCourses.filter((c) => c.popular).slice(0, 6);
  const featuredServices = services.slice(0, 6);
  const [typedLength, setTypedLength] = useState(0);
  const [isMouInView, setIsMouInView] = useState(false);
  const [isMarkerActive, setIsMarkerActive] = useState(false);
  const mouCardRef = useRef<HTMLDivElement | null>(null);
  const animationTimeoutRef = useRef<number | null>(null);

  const renderMouText = (text: string, markerActive: boolean) => {
    const beforeHighlight = text.slice(0, Math.min(text.length, mouHighlightStartIndex));
    const highlightedText =
      text.length > mouHighlightStartIndex
        ? text.slice(
            mouHighlightStartIndex,
            Math.min(text.length, mouHighlightEndIndex)
          )
        : "";
    const afterHighlight =
      text.length > mouHighlightEndIndex ? text.slice(mouHighlightEndIndex) : "";

    return (
      <>
        {beforeHighlight}
        {highlightedText ? (
          <span
            className={`marker-highlight ${
              markerActive ? "text-white" : "text-inherit"
            } ${
              markerActive ? "marker-highlight-active" : ""
            }`}
          >
            {highlightedText}
          </span>
        ) : null}
        {afterHighlight}
      </>
    );
  };

  useEffect(() => {
    const observedCard = mouCardRef.current;

    if (!observedCard) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMouInView(entry.isIntersecting && entry.intersectionRatio >= 0.2);
      },
      {
        threshold: [0, 0.2, 0.4, 0.7, 1],
      }
    );

    observer.observe(observedCard);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (animationTimeoutRef.current) {
      window.clearTimeout(animationTimeoutRef.current);
    }

    if (!isMouInView) {
      setTypedLength(0);
      setIsMarkerActive(false);
      return;
    }

    let cancelled = false;

    const startTypingLoop = () => {
      setTypedLength(0);
      setIsMarkerActive(false);

      let currentLength = 0;

      const typeNextCharacter = () => {
        if (cancelled) {
          return;
        }

        currentLength += 1;
        setTypedLength(currentLength);

        if (currentLength < mouHighlightText.length) {
          animationTimeoutRef.current = window.setTimeout(typeNextCharacter, 15);
          return;
        }

        animationTimeoutRef.current = window.setTimeout(() => {
          if (cancelled) {
            return;
          }

          setIsMarkerActive(true);

          animationTimeoutRef.current = window.setTimeout(() => {
            if (cancelled) {
              return;
            }

            startTypingLoop();
          }, 4300);
        }, 300);
      };

      animationTimeoutRef.current = window.setTimeout(typeNextCharacter, 220);
    };

    startTypingLoop();

    return () => {
      cancelled = true;
      if (animationTimeoutRef.current) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [isMouInView]);

  const typedHighlight = mouHighlightText.slice(0, typedLength);

  return (
    <div className="flex flex-col" data-testid="page-home">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="hero-orb hero-orb-primary" />
        <div className="hero-orb hero-orb-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 xl:gap-14 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm px-4 py-1.5 shadow-sm">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span>Empowering India Through Skill Development</span>
                </Badge>
                <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Empowering Careers with{" "}
                  <span className="text-gradient">Industry-Ready IT Training</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
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
              <div className="grid gap-3 rounded-[26px] border border-border/70 bg-card/90 p-4 shadow-xl shadow-primary/5 backdrop-blur-xl sm:grid-cols-[1.3fr_0.7fr] sm:p-5">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Rocket className="h-3.5 w-3.5" />
                    Start your journey
                  </div>
                  <h2 className="text-xl font-bold leading-tight sm:text-2xl">
                    Get personalized career guidance before you choose a course.
                  </h2>
                  <p className="text-sm text-muted-foreground sm:text-[15px]">
                    Speak with our mentors, compare tracks, and build a job-focused learning plan that fits your goals.
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="rounded-2xl bg-muted/70 p-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">What you get</p>
                    <p className="mt-1 text-sm font-semibold">Course matching, mentor input, and placement guidance.</p>
                  </div>
                  <Link href="/contact">
                    <Button className="w-full" data-testid="button-schedule-call">
                      Schedule Free Call
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div ref={mouCardRef} className="relative w-full max-w-[34rem]">
                <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-primary/12 via-transparent to-accent/18 blur-3xl" />
                <Card className="relative overflow-hidden rounded-[30px] border border-border/70 bg-card shadow-2xl shadow-primary/10">
                  <CardContent className="p-4 sm:p-5">
                    <div className="rounded-[24px] border border-border/60 bg-gradient-to-br from-primary/[0.05] via-background to-accent/[0.06] p-3 sm:p-4">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <Badge className="border-0 bg-primary/10 px-3 py-1 text-primary shadow-none">
                          <Handshake className="mr-2 h-3.5 w-3.5" />
                          MoU Highlight
                        </Badge>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                          APPC Partnership
                        </p>
                      </div>

                      <div className="overflow-hidden rounded-[22px] border border-border/60 bg-white shadow-lg shadow-primary/5">
                        <div className="aspect-square bg-slate-50 p-3">
                          <img
                            src="/ifocus_mou.jpeg"
                            alt="iFocus Info Solutions and APPC Memorandum of Understanding signing ceremony"
                            className="h-full w-full rounded-[18px] object-contain object-center"
                          />
                        </div>
                        <div className="border-t border-border/60 bg-card px-5 py-5">
                          <div className="space-y-3">
                            <h2 className="text-2xl font-bold leading-tight sm:text-[2rem]">
                              iFocus enters a signed MoU with APPC.
                            </h2>
                            <p className="relative text-sm leading-7 text-muted-foreground sm:text-[15px]">
                              <span className="invisible block">
                                {renderMouText(mouHighlightText, false)}
                              </span>
                              <span className="absolute inset-0 block">
                                {renderMouText(
                                  typedHighlight,
                                  isMarkerActive && typedLength === mouHighlightText.length
                                )}
                                {isMouInView ? (
                                  <span className="typewriter-caret" aria-hidden="true" />
                                ) : null}
                              </span>
                            </p>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Consultancy services</span>
                            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Training programs</span>
                            <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">Research activities</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
          <AnimateOnScroll>
            <StatsSection />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
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
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {courseCategories.map((category, index) => {
              const Icon = iconMap[category.icon];
              const courseCount = allCourses.filter(
                (c) => c.category === category.id
              ).length;
              return (
                <AnimateOnScroll key={category.id} delay={index * 50}>
                  <Link
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
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
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
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course, index) => (
              <AnimateOnScroll key={course.id} delay={index * 50}>
                <CourseCard course={course} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
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
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <AnimateOnScroll key={service.id} delay={index * 50}>
                <ServiceCard service={service} />
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-8">
            <AnimateOnScroll>
              <Link href="/services">
                <Button variant="outline" className="gap-2">
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
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
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll key={testimonial.id} delay={index * 50}>
                <TestimonialCard testimonial={testimonial} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
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
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <AnimateOnScroll key={index} delay={index * 50}>
                  <Card
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
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placement Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
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
          </AnimateOnScroll>
          <AnimateOnScroll>
            <PartnerLogos />
          </AnimateOnScroll>
          <div className="text-center mt-8">
            <AnimateOnScroll>
              <Link href="/placements">
                <Button variant="outline" className="gap-2">
                  View All Placements
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Companies & Clients */}
     <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll>
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
        </AnimateOnScroll>

        {/* Marquee */}
        <AnimateOnScroll>
          <div className="relative w-full overflow-hidden">
            {/* Left fade */}
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex w-max animate-marquee">
              {[...companiesAndClients, ...companiesAndClients].map((company, i) => (
                <div
                  key={`${company.id}-${i}`}
                  className="flex items-center justify-center mx-8 min-w-[140px]"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 sm:h-14 md:h-16 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
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
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
