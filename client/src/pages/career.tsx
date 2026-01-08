import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  Heart,
  Target,
  Award,
  ArrowRight,
  Send,
  Building2,
  Code,
  Database,
  Cloud,
  TestTube,
  BarChart3,
  Cog,
  Zap,
  Wrench,
} from "lucide-react";

const jobOpenings = [
  {
    id: "1",
    title: "Java Trainer",
    department: "Training",
    type: "Full-time",
    location: "Hyderabad",
    experience: "3-5 years",
    mode: "Offline",
    description: "We are looking for an experienced Java trainer to deliver high-quality training to our students. The ideal candidate should have strong Java expertise and excellent communication skills.",
    requirements: [
      "3+ years of Java development experience",
      "Strong knowledge of Spring Framework, Hibernate",
      "Experience in training or mentoring",
      "Excellent communication and presentation skills",
      "Bachelor's degree in Computer Science or related field"
    ],
    responsibilities: [
      "Conduct Java programming classes for students",
      "Develop curriculum and training materials",
      "Provide hands-on project guidance",
      "Assess student progress and provide feedback",
      "Stay updated with latest Java technologies"
    ]
  },
  {
    id: "2",
    title: "Python Trainer",
    department: "Training",
    type: "Full-time",
    location: "Hyderabad",
    experience: "2-4 years",
    mode: "Offline",
    description: "Join our team as a Python trainer and help students master Python programming, data science, and web development using Python frameworks.",
    requirements: [
      "2+ years of Python development experience",
      "Knowledge of Django/Flask, Data Science libraries",
      "Training or teaching experience preferred",
      "Strong problem-solving skills",
      "Passion for teaching and mentoring"
    ],
    responsibilities: [
      "Deliver Python programming courses",
      "Create practical projects and assignments",
      "Guide students in data science projects",
      "Conduct code reviews and provide feedback",
      "Collaborate with curriculum development team"
    ]
  },
  {
    id: "3",
    title: "Full Stack Trainer",
    department: "Training",
    type: "Full-time",
    location: "Hyderabad",
    experience: "4-6 years",
    mode: "Offline",
    description: "We need a Full Stack trainer with expertise in MEAN/MERN stack to train students in modern web development technologies.",
    requirements: [
      "4+ years of full-stack development experience",
      "Expertise in MEAN/MERN stack technologies",
      "Experience with databases (MongoDB, MySQL)",
      "Knowledge of DevOps and deployment",
      "Previous training experience is a plus"
    ],
    responsibilities: [
      "Train students in full-stack development",
      "Design and deliver hands-on projects",
      "Mentor students in real-world applications",
      "Keep curriculum updated with industry trends",
      "Conduct technical assessments"
    ]
  },
  {
    id: "4",
    title: "Data Science Trainer",
    department: "Training",
    type: "Full-time",
    location: "Hyderabad",
    experience: "3-5 years",
    mode: "Offline",
    description: "Looking for a Data Science expert to train students in machine learning, AI, and data analytics using Python and related tools.",
    requirements: [
      "3+ years in Data Science/Machine Learning",
      "Strong Python skills (Pandas, NumPy, Scikit-learn)",
      "Experience with ML/DL frameworks",
      "Knowledge of statistics and mathematics",
      "Teaching or mentoring experience"
    ],
    responsibilities: [
      "Conduct Data Science and ML courses",
      "Guide students in data analysis projects",
      "Teach statistical concepts and algorithms",
      "Help with portfolio development",
      "Stay current with AI/ML trends"
    ]
  },
  {
    id: "5",
    title: "Cloud Computing Trainer (AWS/Azure)",
    department: "Training",
    type: "Full-time",
    location: "Hyderabad",
    experience: "3-6 years",
    mode: "Offline",
    description: "We are seeking a Cloud Computing trainer with AWS/Azure expertise to deliver comprehensive cloud training programs.",
    requirements: [
      "3+ years of cloud computing experience",
      "AWS/Azure certifications preferred",
      "DevOps and containerization knowledge",
      "Infrastructure as Code experience",
      "Strong presentation and communication skills"
    ],
    responsibilities: [
      "Deliver cloud computing courses",
      "Provide hands-on lab sessions",
      "Guide certification preparation",
      "Design cloud architecture projects",
      "Mentor students in cloud best practices"
    ]
  },
  {
    id: "6",
    title: "Software Testing Trainer",
    department: "Training",
    type: "Full-time",
    location: "Hyderabad",
    experience: "3-5 years",
    mode: "Offline",
    description: "Join us as a Software Testing trainer to teach manual and automation testing methodologies to aspiring QA professionals.",
    requirements: [
      "3+ years of software testing experience",
      "Expertise in Selenium, TestNG, API testing",
      "Knowledge of testing frameworks and tools",
      "ISTQB certification preferred",
      "Experience in training or mentoring"
    ],
    responsibilities: [
      "Conduct manual and automation testing courses",
      "Teach testing frameworks and best practices",
      "Guide students in testing projects",
      "Prepare students for certification exams",
      "Develop testing scenarios and case studies"
    ]
  },
  {
    id: "7",
    title: "EV Technician Trainer",
    department: "Emerging Technologies",
    type: "Full-time",
    location: "Hyderabad",
    experience: "2-4 years",
    mode: "Offline",
    description: "Exciting opportunity to train students in Electric Vehicle technology, maintenance, and repair as the automotive industry transforms.",
    requirements: [
      "2+ years in automotive/EV industry",
      "Knowledge of EV systems and components",
      "Understanding of battery technology",
      "Electrical and mechanical aptitude",
      "Willingness to learn and adapt to new technologies"
    ],
    responsibilities: [
      "Train students in EV technology fundamentals",
      "Conduct hands-on workshops on EV maintenance",
      "Teach battery management systems",
      "Guide practical repair and diagnostic sessions",
      "Stay updated with EV industry developments"
    ]
  },
  {
    id: "8",
    title: "Robotics Trainer",
    department: "Emerging Technologies",
    type: "Full-time",
    location: "Hyderabad",
    experience: "2-5 years",
    mode: "Offline",
    description: "Lead our robotics training program and inspire students to build and program robots for various applications.",
    requirements: [
      "2+ years in robotics or automation",
      "Programming skills (Python, C++, Arduino)",
      "Knowledge of sensors, actuators, and control systems",
      "Experience with robotics platforms",
      "Passion for emerging technologies"
    ],
    responsibilities: [
      "Deliver robotics programming courses",
      "Guide robot building and programming projects",
      "Teach automation and control concepts",
      "Organize robotics competitions and events",
      "Develop innovative robotics curriculum"
    ]
  },
  {
    id: "9",
    title: "Drone Technology Trainer",
    department: "Emerging Technologies",
    type: "Full-time",
    location: "Hyderabad",
    experience: "2-4 years",
    mode: "Offline",
    description: "Train the next generation of drone pilots and technicians in this rapidly growing field with applications across industries.",
    requirements: [
      "2+ years in drone/UAV technology",
      "Drone pilot certification (DGCA preferred)",
      "Knowledge of flight controllers and sensors",
      "Understanding of drone regulations",
      "Technical and safety training experience"
    ],
    responsibilities: [
      "Conduct drone piloting and technology courses",
      "Teach drone assembly and maintenance",
      "Guide students in aerial photography/videography",
      "Ensure compliance with aviation regulations",
      "Develop practical drone applications training"
    ]
  },
  {
    id: "10",
    title: "Placement Coordinator",
    department: "Placement",
    type: "Full-time",
    location: "Hyderabad",
    experience: "2-4 years",
    mode: "Offline",
    description: "Join our placement team to help students achieve their career goals by connecting them with the right opportunities.",
    requirements: [
      "2+ years in recruitment or placement",
      "Strong communication and networking skills",
      "Understanding of IT industry and job market",
      "Experience in candidate counseling",
      "Bachelor's degree in any field"
    ],
    responsibilities: [
      "Build relationships with hiring partners",
      "Coordinate placement drives and interviews",
      "Counsel students on career opportunities",
      "Maintain placement records and reports",
      "Organize mock interviews and skill assessments"
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Competitive Salary",
    description: "Industry-standard compensation with performance incentives"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous learning opportunities and skill enhancement programs"
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work with passionate educators and industry experts"
  },
  {
    icon: Target,
    title: "Career Growth",
    description: "Clear career progression paths and leadership opportunities"
  },
  {
    icon: Award,
    title: "Recognition Programs",
    description: "Regular recognition and rewards for outstanding performance"
  },
  {
    icon: Building2,
    title: "Modern Workspace",
    description: "State-of-the-art facilities and comfortable working environment"
  }
];

const companyValues = [
  {
    title: "Excellence in Education",
    description: "We strive to deliver the highest quality training and education to our students."
  },
  {
    title: "Innovation & Growth",
    description: "We embrace new technologies and methodologies to stay ahead in the industry."
  },
  {
    title: "Student Success",
    description: "Our primary focus is ensuring every student achieves their career goals."
  },
  {
    title: "Team Collaboration",
    description: "We believe in the power of teamwork and collaborative problem-solving."
  }
];

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: "",
    coverLetter: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Application submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      resume: "",
      coverLetter: ""
    });
  };

  return (
    <div className="flex flex-col" data-testid="page-career">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Join Our Team
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Build Your <span className="text-gradient">Teaching Career</span> With Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Join iFocus Info Solutions and be part of a mission to transform lives through quality education. 
              We're looking for passionate educators and industry experts to shape the next generation of tech professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2" onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}>
                View Open Positions
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Link href="/about">
                <Button size="lg" variant="outline" className="gap-2">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Why iFocus
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Work With Us?
            </h2>
            <p className="text-muted-foreground">
              Join a team that's passionate about education and committed to making a difference in students' lives.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="overflow-visible text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground">
              Our core values guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {companyValues.map((value, index) => (
              <Card key={index} className="overflow-visible">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-serif font-semibold text-lg">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Current Openings
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground">
              Explore exciting career opportunities across different departments and technologies.
            </p>
          </div>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="overflow-visible">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                    <div className="space-y-2">
                      <h3 className="font-serif font-semibold text-xl">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{job.mode}</Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      >
                        {selectedJob === job.id ? "Hide Details" : "View Details"}
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  
                  {selectedJob === job.id && (
                    <div className="space-y-6 pt-4 border-t">
                      <div>
                        <h4 className="font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Responsibilities:</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-2 pt-4">
                        <Button 
                          onClick={() => {
                            setFormData(prev => ({ ...prev, position: job.title }));
                            document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="gap-2"
                        >
                          Apply Now
                          <Send className="h-4 w-4" />
                        </Button>
                        <Button variant="outline">
                          Share Job
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Apply Now
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Submit Your Application
            </h2>
            <p className="text-muted-foreground">
              Ready to join our team? Fill out the form below and we'll get back to you soon.
            </p>
          </div>
          
          <Card className="overflow-visible">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applied For *</Label>
                    <Select value={formData.position} onValueChange={(value) => handleInputChange("position", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobOpenings.map((job) => (
                          <SelectItem key={job.id} value={job.title}>
                            {job.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-8">5-8 years</SelectItem>
                      <SelectItem value="8+">8+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume/CV Link *</Label>
                  <Input
                    id="resume"
                    value={formData.resume}
                    onChange={(e) => handleInputChange("resume", e.target.value)}
                    placeholder="Google Drive/Dropbox link to your resume"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Please share a public link to your resume (Google Drive, Dropbox, etc.)
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    rows={6}
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button type="submit" className="gap-2">
                    Submit Application
                    <Send className="h-4 w-4" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      position: "",
                      experience: "",
                      resume: "",
                      coverLetter: ""
                    })}
                  >
                    Clear Form
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join our mission to empower students with industry-ready skills and help them achieve their career dreams. 
            Your expertise can transform lives and shape the future of technology education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Today
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact HR
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}