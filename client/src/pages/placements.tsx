import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatsSection } from "@/components/stats-section";
import { PartnerLogos } from "@/components/partner-logos";
import {
  Building2,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Target,
  Calendar,
  MapPin,
  IndianRupee,
  Clock,
} from "lucide-react";

const currentOpenings = [
  {
    id: "1",
    title: "Java Developer",
    company: "Zepto",
    location: "Hyderabad",
    experience: "0-2 years",
    salary: "3-6 LPA",
    type: "Full-time",
    skills: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    posted: "2 days ago"
  },
  {
    id: "2",
    title: "React Developer",
    company: "VBLP Technologies",
    location: "Bangalore",
    experience: "1-3 years",
    salary: "4-8 LPA",
    type: "Full-time",
    skills: ["React.js", "JavaScript", "Node.js", "MongoDB"],
    posted: "1 week ago"
  },
  {
    id: "3",
    title: "Data Analyst",
    company: "Hashtag",
    location: "Hyderabad",
    experience: "0-1 years",
    salary: "2.5-5 LPA",
    type: "Full-time",
    skills: ["Python", "SQL", "Power BI", "Excel"],
    posted: "3 days ago"
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "Ushnik Technologies",
    location: "Remote",
    experience: "2-4 years",
    salary: "6-12 LPA",
    type: "Full-time",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    posted: "5 days ago"
  },
  {
    id: "5",
    title: "QA Automation Engineer",
    company: "BPO Convergences",
    location: "Pune",
    experience: "1-3 years",
    salary: "3.5-7 LPA",
    type: "Full-time",
    skills: ["Selenium", "Java", "TestNG", "API Testing"],
    posted: "1 week ago"
  },
  {
    id: "6",
    title: "UI/UX Designer",
    company: "JD Overseas",
    location: "Mumbai",
    experience: "0-2 years",
    salary: "3-6 LPA",
    type: "Full-time",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    posted: "4 days ago"
  }
];

const recentPlacements = [
  {
    name: "Priya Sharma",
    course: "Data Science with Python",
    company: "Zepto",
    role: "Data Analyst",
    salary: "5.5 LPA",
    batch: "Nov 2024"
  },
  {
    name: "Rahul Kumar",
    course: "MERN Stack",
    company: "VBLP Technologies",
    role: "Full Stack Developer",
    salary: "7 LPA",
    batch: "Oct 2024"
  },
  {
    name: "Anjali Patel",
    course: "AWS Cloud",
    company: "Hashtag",
    role: "Cloud Engineer",
    salary: "6.5 LPA",
    batch: "Dec 2024"
  },
  {
    name: "Vikram Singh",
    course: "Java Programming",
    company: "Ushnik Technologies",
    role: "Software Developer",
    salary: "4.5 LPA",
    batch: "Sep 2024"
  },
  {
    name: "Sneha Reddy",
    course: "Automation Testing",
    company: "BPO Convergences",
    role: "QA Engineer",
    salary: "4 LPA",
    batch: "Nov 2024"
  },
  {
    name: "Arjun Gupta",
    course: "UI/UX Design",
    company: "JD Overseas",
    role: "UI Designer",
    salary: "5 LPA",
    batch: "Oct 2024"
  }
];

const futurePlacements = [
  {
    company: "Tech Mahindra",
    roles: ["Java Developer", "Python Developer", "Data Analyst"],
    openings: 25,
    timeline: "February 2025",
    requirements: "0-2 years experience"
  },
  {
    company: "Cognizant",
    roles: ["Full Stack Developer", "DevOps Engineer"],
    openings: 15,
    timeline: "March 2025",
    requirements: "Fresh graduates welcome"
  },
  {
    company: "Wipro",
    roles: ["Cloud Engineer", "Automation Tester"],
    openings: 20,
    timeline: "April 2025",
    requirements: "Relevant certification required"
  },
  {
    company: "Infosys",
    roles: ["Software Developer", "Data Scientist"],
    openings: 30,
    timeline: "May 2025",
    requirements: "Strong technical skills"
  }
];

const placementProcess = [
  {
    step: "1",
    title: "Profile Building",
    description: "Resume creation, LinkedIn optimization, and portfolio development"
  },
  {
    step: "2",
    title: "Skill Assessment",
    description: "Technical evaluation and identification of improvement areas"
  },
  {
    step: "3",
    title: "Interview Preparation",
    description: "Mock interviews, technical rounds, and HR preparation"
  },
  {
    step: "4",
    title: "Job Matching",
    description: "Matching candidates with suitable job opportunities"
  },
  {
    step: "5",
    title: "Interview Coordination",
    description: "Scheduling and coordinating interviews with partner companies"
  },
  {
    step: "6",
    title: "Offer Negotiation",
    description: "Salary negotiation and offer letter assistance"
  }
];

export default function Placements() {
  return (
    <div className="flex flex-col" data-testid="page-placements">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Placement Support
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              100% <span className="text-gradient">Placement Assistance</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We don't just train you, we ensure you get placed. With our dedicated placement team, 
              industry connections, and comprehensive support, your dream job is within reach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Get Placement Support
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="gap-2">
                  View Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsSection />
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Current Opportunities
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Current Job Openings
            </h2>
            <p className="text-muted-foreground">
              Fresh opportunities from our hiring partners. Apply now and kickstart your career.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentOpenings.map((job) => (
              <Card key={job.id} className="overflow-visible hover-elevate">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif font-semibold text-lg">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Posted {job.posted}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Required Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full" size="sm">
                      Apply Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/contact">
              <Button variant="outline" className="gap-2">
                View More Openings
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Placements */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Success Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Recent Placements
            </h2>
            <p className="text-muted-foreground">
              Our students are getting placed at top companies with excellent packages.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPlacements.map((placement, index) => (
              <Card key={index} className="overflow-visible">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">
                        {placement.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold">{placement.name}</h3>
                      <p className="text-sm text-muted-foreground">{placement.course}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Company:</span>
                      <span className="text-sm font-medium text-primary">{placement.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Role:</span>
                      <span className="text-sm font-medium">{placement.role}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Package:</span>
                      <span className="text-sm font-medium text-green-600">{placement.salary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Batch:</span>
                      <span className="text-sm font-medium">{placement.batch}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Placements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Upcoming Opportunities
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Future Placement Drives
            </h2>
            <p className="text-muted-foreground">
              Upcoming hiring drives with our partner companies. Prepare yourself for these opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {futurePlacements.map((drive, index) => (
              <Card key={index} className="overflow-visible">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif font-semibold text-lg">{drive.company}</h3>
                      <p className="text-sm text-muted-foreground">{drive.requirements}</p>
                    </div>
                    <Badge variant="outline" className="gap-1">
                      <Users className="h-3 w-3" />
                      {drive.openings} positions
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Available Roles:</p>
                    <div className="flex flex-wrap gap-1">
                      {drive.roles.map((role, roleIndex) => (
                        <Badge key={roleIndex} variant="secondary" className="text-xs">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{drive.timeline}</span>
                    </div>
                    <Link href="/contact">
                      <Button size="sm" variant="outline">
                        Register Interest
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Placement Process
            </h2>
            <p className="text-muted-foreground">
              Our systematic approach ensures every student gets the best placement opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placementProcess.map((process, index) => (
              <Card key={index} className="overflow-visible text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{process.step}</span>
                  </div>
                  <h3 className="font-serif font-semibold text-lg">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
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
              Strong partnerships with leading companies ensure diverse opportunities for our students.
            </p>
          </div>
          <PartnerLogos />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Our Placement Support Works
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "100% Assistance",
                description: "Dedicated placement support until you get placed"
              },
              {
                icon: Users,
                title: "Industry Connections",
                description: "Strong network with 100+ hiring partners"
              },
              {
                icon: Award,
                title: "Mock Interviews",
                description: "Comprehensive interview preparation and practice"
              },
              {
                icon: TrendingUp,
                title: "Career Guidance",
                description: "Personalized career counseling and growth planning"
              }
            ].map((feature, index) => (
              <Card key={index} className="overflow-visible text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
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
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join our placement program and get guaranteed support until you land your dream job. 
            Our dedicated team is here to guide you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
              >
                Get Placement Support
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}