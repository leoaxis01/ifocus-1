import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatsSection } from "@/components/stats-section";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "15+ years in IT industry. Former Tech Lead at major IT companies.",
    initials: "RK",
  },
  {
    name: "Priya Singh",
    role: "Head of Training",
    bio: "Expert in curriculum design with 10+ years of training experience.",
    initials: "PS",
  },
  {
    name: "Amit Patel",
    role: "Placement Director",
    bio: "Strong industry connections with 100+ hiring partners.",
    initials: "AP",
  },
  {
    name: "Sunita Reddy",
    role: "Technical Lead",
    bio: "Full-stack expert specializing in modern web technologies.",
    initials: "SR",
  },
];

const milestones = [
  { year: "2015", title: "Founded", description: "Started with a vision to transform IT education" },
  { year: "2017", title: "1000+ Students", description: "Crossed milestone of training 1000 students" },
  { year: "2019", title: "Corporate Training", description: "Launched enterprise training programs" },
  { year: "2021", title: "Online Programs", description: "Expanded with hybrid learning options" },
  { year: "2023", title: "50+ Courses", description: "Comprehensive curriculum across 10 domains" },
  { year: "2024", title: "5000+ Alumni", description: "Strong community of successful professionals" },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from curriculum to placement support.",
  },
  {
    icon: Heart,
    title: "Student-Centric",
    description: "Every decision we make is focused on student success and career growth.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We build a supportive community of learners, mentors, and industry experts.",
  },
  {
    icon: BookOpen,
    title: "Innovation",
    description: "We continuously update our programs to match industry demands.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col" data-testid="page-about">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              About Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Empowering Careers Through{" "}
              <span className="text-gradient">Quality Education</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              iFocus Info Solutions is a premier IT training institute dedicated to
              bridging the gap between academic learning and industry requirements.
              Since 2015, we have been transforming careers with hands-on training
              and 100% placement assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <StatsSection />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll>
              <Card className="overflow-visible" data-testid="card-mission">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide industry-relevant, practical IT training that empowers
                    individuals to achieve their career goals. We are committed to
                    delivering quality education with hands-on projects, expert guidance,
                    and comprehensive placement support.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Industry-aligned curriculum",
                      "Practical, project-based learning",
                      "Career-focused training approach",
                      "Continuous skill development",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <Card className="overflow-visible" data-testid="card-vision">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Eye className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the most trusted name in IT education by creating
                    industry-ready professionals who drive innovation and lead the
                    technology landscape. We envision a future where every aspiring
                    tech professional has access to quality training.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Global recognition in IT training",
                      "Shaping future tech leaders",
                      "Bridging education-industry gap",
                      "Building a skilled workforce",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="secondary" className="mb-4">
                Our Values
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Drives Us
              </h2>
              <p className="text-muted-foreground">
                Our core values guide everything we do at iFocus
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimateOnScroll key={index} delay={index * 50}>
                <Card
                  className="overflow-visible text-center"
                  data-testid={`value-card-${index}`}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Milestones
            </h2>
            <p className="text-muted-foreground">
              Key moments in our journey of transforming careers
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  data-testid={`milestone-${index}`}
                >
                  <div className="hidden md:block w-1/2" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary hidden md:block" />
                  <Card className="md:w-1/2 overflow-visible">
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-2">
                        {milestone.year}
                      </Badge>
                      <h3 className="font-serif font-semibold text-lg">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TAnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="secondary" className="mb-4">
                Our Team
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Meet the Experts
              </h2>
              <p className="text-muted-foreground">
                Learn from industry veterans with decades of combined experience
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <AnimateOnScroll key={index} delay={index * 50}>
                <Card
                  className="overflow-visible text-center"
                  data-testid={`team-member-${index}`}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {member.initials}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary">{member.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </AnimateOnScrolldiv>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Become part of the iFocus family and start your journey towards a
            successful tech career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                data-testid="button-about-contact"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
