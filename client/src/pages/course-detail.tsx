import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CourseCard } from "@/components/course-card";
import { allCourses, courseCategories } from "@shared/schema";
import type { CourseDetail } from "@shared/schema";
import {
  Clock,
  BarChart,
  Users,
  Award,
  CheckCircle,
  ArrowLeft,
  Calendar,
  Monitor,
  FileText,
  Briefcase,
  Target,
  BookOpen,
  Code,
  Zap,
} from "lucide-react";

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = allCourses.find((c) => c.id === id) as CourseDetail;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link href="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const category = courseCategories.find((c) => c.id === course.category);
  const relatedCourses = allCourses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  const courseHighlights = [
    { icon: Monitor, text: "Live interactive sessions" },
    { icon: Code, text: "Hands-on projects" },
    { icon: Users, text: "Industry-expert trainers" },
    { icon: Award, text: "Certification on completion" },
    { icon: Target, text: "100% placement assistance" },
    { icon: BookOpen, text: "Lifetime access to materials" },
  ];

  const learningModes = [
    { icon: Calendar, text: "Flexible training schedule" },
    { icon: Monitor, text: "Online & Offline available" },
    { icon: FileText, text: "Comprehensive study materials" },
    { icon: Briefcase, text: "Placement support included" },
  ];

  return (
    <div className="flex flex-col" data-testid={`page-course-${id}`}>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Link>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                {category && (
                  <Badge variant="secondary">{category.name}</Badge>
                )}
                {course.popular && (
                  <Badge className="bg-accent text-accent-foreground">
                    Popular
                  </Badge>
                )}
                {course.new && (
                  <Badge variant="outline" className="border-primary text-primary">
                    New
                  </Badge>
                )}
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold">{course.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {course.description}
              </p>
              
              {/* Course Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-muted/50 rounded-lg">
                <div className="text-center">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">{course.duration}</div>
                  <div className="text-xs text-muted-foreground">Duration</div>
                </div>
                <div className="text-center">
                  <BarChart className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">{course.level}</div>
                  <div className="text-xs text-muted-foreground">Level</div>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">100+</div>
                  <div className="text-xs text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Certificate</div>
                  <div className="text-xs text-muted-foreground">Included</div>
                </div>
              </div>
            </div>
            
            {/* CTA Card */}
            <div>
              <Card className="overflow-visible sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div className="text-center space-y-2">
                    <p className="text-3xl font-bold">Get Started Today</p>
                    <p className="text-sm text-muted-foreground">Free counseling available</p>
                  </div>
                  <div className="space-y-3">
                    {learningModes.map((mode, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <mode.icon className="h-4 w-4 text-muted-foreground" />
                        <span>{mode.text}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="block">
                    <Button className="w-full" size="lg" data-testid="button-enquire-course">
                      Enquire Now
                    </Button>
                  </Link>
                  <Link href="/contact" className="block">
                    <Button variant="outline" className="w-full">
                      Get Free Counseling
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      {course.whatYouLearn && (
        <section className="py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {course.whatYouLearn.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Course Highlights */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Course Highlights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courseHighlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-muted/50"
              >
                <highlight.icon className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{highlight.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites & Projects */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Prerequisites */}
            {course.prerequisites && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Prerequisites
                  </h3>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            
            {/* Projects */}
            {course.projects && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Projects You'll Build
                  </h3>
                  <ul className="space-y-2">
                    {course.projects.map((project, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Zap className="h-4 w-4 text-primary" />
                        {project}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
          <Card className="overflow-visible">
            <Accordion type="single" collapsible className="w-full">
              {course.whatYouLearn && course.whatYouLearn.slice(0, 5).map((topic, index) => (
                <AccordionItem
                  key={index}
                  value={`module-${index}`}
                  className="px-6"
                >
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                        {index + 1}
                      </div>
                      <span className="font-medium">Module {index + 1}: {topic}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-12">
                    <p className="text-muted-foreground">
                      Comprehensive coverage of {topic.toLowerCase()} with hands-on exercises, 
                      practical examples, and real-world applications. Includes assignments and 
                      project work to reinforce learning.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Related Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8">
            Take the first step towards your dream career with our industry-focused training programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Enquire Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Schedule Demo Class
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
