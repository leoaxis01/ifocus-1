import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Course Categories
export const courseCategories = [
  { id: "programming", name: "Programming", icon: "Code2" },
  { id: "web-technologies", name: "Web Technologies", icon: "Globe" },
  { id: "database", name: "Database", icon: "Database" },
  { id: "data-science", name: "Data Science", icon: "Brain" },
  { id: "cyber-security", name: "Cyber Security", icon: "Shield" },
  { id: "cloud-computing", name: "Cloud Computing", icon: "Cloud" },
  { id: "software-testing", name: "Software Testing", icon: "TestTube" },
  { id: "data-analytics", name: "Data Analytics", icon: "BarChart3" },
  { id: "digital-marketing", name: "Digital Marketing", icon: "Megaphone" },
  { id: "designing", name: "Designing", icon: "Palette" },
] as const;

export type CourseCategory = typeof courseCategories[number];

// Course Type
export interface Course {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  popular?: boolean;
  new?: boolean;
}

// Extended Course Interface with detailed information
export interface CourseDetail extends Course {
  whatYouLearn?: string[];
  prerequisites?: string[];
  certification?: string;
  projects?: string[];
}

// All courses data with detailed information
export const allCourses: CourseDetail[] = [
  // Programming
  { 
    id: "java", 
    name: "Java Programming", 
    category: "programming", 
    description: "Build a strong foundation in object-oriented programming and prepare for real-world software development. Master Java concepts with hands-on projects and expert guidance.", 
    duration: "3 months", 
    level: "Beginner",
    popular: true,
    whatYouLearn: [
      "Java fundamentals and programming basics",
      "Object-Oriented Programming (OOP) concepts",
      "Core Java concepts such as classes, objects, inheritance, and exceptions",
      "Working with collections, strings, and file handling",
      "Writing clean, efficient, and reusable Java code",
      "Building real-world Java applications through hands-on projects",
      "Understanding advanced Java concepts",
      "Interview preparation, resume building, and placement support"
    ],
    prerequisites: ["Basic computer knowledge"],
    certification: "Java Programming Certificate",
    projects: ["Banking Management System", "E-commerce Application", "Library Management System"]
  },
  { 
    id: "python", 
    name: "Python Development", 
    category: "programming", 
    description: "Master Python programming from fundamentals to advanced concepts. Build practical skills for real-world applications with hands-on training and live interactive sessions.", 
    duration: "2 months", 
    level: "Beginner", 
    popular: true,
    whatYouLearn: [
      "Python fundamentals, syntax, and programming basics",
      "Variables, data types, and control structures",
      "Functions, modules, and object-oriented programming in Python",
      "Working with files, libraries, and error handling",
      "Building real-world Python applications through hands-on projects",
      "Understanding advanced Python concepts and data handling",
      "Coding practice, mock interviews, and resume building for Python roles"
    ],
    prerequisites: ["Basic computer knowledge"],
    certification: "Python Programming Certificate",
    projects: ["Web Scraper", "REST API", "Django Web Application"]
  },
  { 
    id: "c-cpp", 
    name: "C & C++", 
    category: "programming", 
    description: "Build a strong foundation in programming and system-level development using C and C++. Learn core programming concepts with hands-on practice and real-world projects.", 
    duration: "3 months", 
    level: "Beginner",
    whatYouLearn: [
      "Programming fundamentals using C and C++",
      "Syntax, data types, operators, and control structures",
      "Functions, pointers, arrays, and memory management",
      "Object-Oriented Programming concepts using C++",
      "File handling and advanced programming techniques",
      "Developing real-world applications through hands-on projects",
      "Understanding system-level programming concepts",
      "Interview preparation, coding practice, and placement support"
    ],
    prerequisites: ["Basic computer knowledge"],
    certification: "C & C++ Programming Certificate",
    projects: ["Calculator Application", "Student Management System", "Game Development"]
  },
  { 
    id: "csharp", 
    name: "C# Programming", 
    category: "programming", 
    description: "Build Windows applications, desktop software, and games using Microsoft's powerful C# language. Develop strong programming skills through practical learning and real-world projects.", 
    duration: "3 months", 
    level: "Intermediate",
    whatYouLearn: [
      "C# programming fundamentals and syntax",
      "Object-Oriented Programming (OOP) concepts in C#",
      "Working with .NET framework and application structure",
      "Building Windows and desktop applications",
      "Developing games and real-world projects using C#",
      "Exception handling, file handling, and advanced concepts",
      "Writing clean, efficient, and scalable code",
      "Interview preparation, coding practice, and placement support"
    ],
    prerequisites: ["Basic programming knowledge"],
    certification: "Microsoft C# Certificate",
    projects: ["Desktop Application", "Web API", "E-commerce Website"]
  },
  { 
    id: "javascript", 
    name: "JavaScript", 
    category: "programming", 
    description: "Master the core language of the web and build interactive, dynamic applications. Develop strong front-end programming skills through hands-on training and real-world projects.", 
    duration: "2 months", 
    level: "Beginner", 
    popular: true,
    whatYouLearn: [
      "JavaScript fundamentals, syntax, and programming basics",
      "Variables, data types, functions, and control structures",
      "Working with the DOM and handling user events",
      "Creating interactive and dynamic web applications",
      "Implementing real-world projects using JavaScript",
      "Understanding advanced JavaScript concepts",
      "Writing clean, efficient, and optimized code",
      "Interview preparation, coding practice, and placement support"
    ],
    prerequisites: ["HTML/CSS basics"],
    certification: "JavaScript Developer Certificate",
    projects: ["Interactive Website", "Todo Application", "Weather App"]
  },
  { 
    id: "data-structures", 
    name: "Data Structures & Algorithms", 
    category: "programming", 
    description: "Master data structures and algorithms to crack technical interviews and build efficient programs. Strengthen problem-solving skills through structured learning and hands-on practice.", 
    duration: "2 months", 
    level: "Intermediate",
    whatYouLearn: [
      "Fundamentals of data structures and algorithms",
      "Arrays, strings, linked lists, stacks, and queues",
      "Trees, graphs, and hashing techniques",
      "Searching and sorting algorithms",
      "Time and space complexity (Big O notation)",
      "Solving real-world problems and coding challenges",
      "Advanced data structure concepts",
      "Interview preparation, mock interviews, and placement support"
    ],
    prerequisites: ["Any programming language"],
    certification: "Algorithm Specialist Certificate",
    projects: ["Algorithm Visualizer", "Coding Interview Prep", "Competitive Programming Solutions"]
  },
  { 
    id: "r-programming", 
    name: "R Programming", 
    category: "programming", 
    description: "Master statistical computing, data analysis, and data visualization using R. Build strong analytical and programming skills through hands-on training and real-world data projects.", 
    duration: "2 months", 
    level: "Intermediate",
    whatYouLearn: [
      "Fundamentals of R programming and R environment",
      "Data types, control structures, and functions in R",
      "Data manipulation and analysis using R",
      "Statistical concepts and modeling techniques",
      "Data visualization and graphics using R",
      "Working with real-world datasets and projects",
      "Advanced R programming concepts",
      "Interview preparation, mock interviews, and placement support"
    ],
    prerequisites: ["Basic statistics knowledge"],
    certification: "R Programming Certificate",
    projects: ["Statistical Analysis Report", "Data Visualization Dashboard", "Research Paper with R"]
  },

  // Web Technologies
  { 
    id: "html-css-js", 
    name: "HTML/CSS/JavaScript", 
    category: "web-technologies", 
    description: "Build modern, responsive websites from scratch using HTML, CSS, and JavaScript. Learn web development fundamentals with hands-on practice and real-world projects.", 
    duration: "2 months", 
    level: "Beginner",
    whatYouLearn: [
      "HTML fundamentals and webpage structure",
      "Working with text, images, links, and forms",
      "CSS basics, styling, and layout techniques",
      "Responsive web design using modern CSS",
      "Building real-world web pages from scratch",
      "Advanced styling concepts and best practices",
      "Creating user-friendly and visually appealing websites",
      "Interview preparation and placement support"
    ],
    prerequisites: ["Basic computer knowledge"],
    certification: "Web Development Fundamentals Certificate",
    projects: ["Portfolio Website", "Responsive Landing Page", "Interactive Web App"]
  },
  { 
    id: "reactjs", 
    name: "React.js", 
    category: "web-technologies", 
    description: "Build modern, fast, and scalable single-page applications using React. Master component-based architecture with hands-on coding and real-world projects.", 
    duration: "2 months", 
    level: "Intermediate", 
    popular: true,
    whatYouLearn: [
      "Fundamentals of React.js and component-based architecture",
      "JSX, props, state, and event handling",
      "Working with hooks and modern React features",
      "Building and managing single-page applications",
      "Handling forms, APIs, and dynamic data",
      "Creating real-world projects using React.js",
      "Advanced React concepts and best practices",
      "Interview preparation, mock interviews, and placement support"
    ],
    prerequisites: ["JavaScript, HTML, CSS"],
    certification: "React Developer Certificate",
    projects: ["E-commerce Frontend", "Social Media Dashboard", "Task Management App"]
  },
  { 
    id: "angular", 
    name: "Angular", 
    category: "web-technologies", 
    description: "Build enterprise-grade, scalable, and high-performance web applications using Angular. Master modern front-end development with structured, component-based architecture.", 
    duration: "3 months", 
    level: "Intermediate",
    whatYouLearn: [
      "Fundamentals of Angular and framework architecture",
      "TypeScript basics for Angular development",
      "Components, modules, templates, and data binding",
      "Services, dependency injection, and routing",
      "Building real-world, enterprise-level applications",
      "Working with APIs and handling dynamic data",
      "Advanced Angular concepts and best practices",
      "Interview preparation, mock interviews, and placement support"
    ],
    prerequisites: ["JavaScript, TypeScript basics"],
    certification: "Angular Developer Certificate",
    projects: ["Enterprise Dashboard", "CRM Application", "E-learning Platform"]
  },
  { 
    id: "php", 
    name: "PHP Development", 
    category: "web-technologies", 
    description: "Learn server-side scripting and backend web development using PHP. Build dynamic and database-driven web applications with hands-on coding and real-world projects.", 
    duration: "2 months", 
    level: "Beginner",
    whatYouLearn: [
      "PHP fundamentals and syntax",
      "Working with variables, control structures, and functions",
      "Handling forms and user input",
      "Connecting PHP with databases (MySQL)",
      "Building dynamic, server-side web applications",
      "Real-world projects and portfolio development",
      "Advanced PHP concepts and best practices",
      "Interview preparation, mock interviews, and placement support"
    ],
    prerequisites: ["HTML, CSS basics"],
    certification: "PHP Developer Certificate",
    projects: ["Blog Website", "User Authentication System", "E-commerce Backend"]
  },
  { 
    id: "mean-stack", 
    name: "MEAN Stack", 
    category: "web-technologies", 
    description: "Become a full-stack web developer using MongoDB, Express.js, Angular, and Node.js. Build complete, scalable web applications from frontend to backend.", 
    duration: "4 months", 
    level: "Advanced", 
    new: true,
    whatYouLearn: [
      "Full-stack web development fundamentals",
      "Frontend development using Angular",
      "Backend development with Node.js and Express.js",
      "Working with MongoDB databases",
      "RESTful API development and integration",
      "Building and deploying real-world MEAN stack applications",
      "Advanced full-stack concepts and best practices",
      "Interview preparation, mock interviews, and placement support"
    ],
    prerequisites: ["JavaScript, HTML, CSS"],
    certification: "Full Stack Developer Certificate",
    projects: ["Social Media Platform", "E-commerce Application", "Real-time Chat App"]
  },
  { 
    id: "mern-stack", 
    name: "MERN Stack", 
    category: "web-technologies", 
    description: "Become a full-stack web developer using MongoDB, Express.js, React, and Node.js. Build modern, scalable, and high-performance web applications from frontend to backend.", 
    duration: "4 months", 
    level: "Advanced", 
    popular: true,
    whatYouLearn: [
      "Full-stack web development fundamentals",
      "Frontend development using React.js",
      "Backend development with Node.js and Express.js",
      "Working with MongoDB databases",
      "RESTful API development and integration",
      "Building and deploying real-world MERN stack applications",
      "Advanced full-stack concepts and best practices",
      "Interview preparation, mock interviews, and placement support"
    ],
    prerequisites: ["JavaScript, React basics"],
    certification: "MERN Stack Developer Certificate",
    projects: ["Blog Platform", "Task Management System", "E-commerce Full Stack"]
  },

  // Database
  { 
    id: "oracle", 
    name: "Oracle Database", 
    category: "database", 
    description: "Master enterprise-level database management and SQL with Oracle Database. Build strong skills in database design, data manipulation, and administration.", 
    duration: "3 months", 
    level: "Intermediate",
    whatYouLearn: [
      "Fundamentals of Oracle Database and SQL",
      "Writing and optimizing SQL queries",
      "Database design, tables, and relationships",
      "Data manipulation and transaction control",
      "Working with stored procedures, functions, and views",
      "Real-world database projects and hands-on practice",
      "Advanced Oracle database concepts",
      "Interview preparation, mock interviews, and placement support"
    ],
    prerequisites: ["Basic SQL knowledge"],
    certification: "Oracle Database Administrator",
    projects: ["Database Design Project", "Performance Optimization Case Study", "Backup Recovery Implementation"]
  },
  { 
    id: "mysql", 
    name: "MySQL", 
    category: "database", 
    description: "Learn relational database management using the popular open-source MySQL platform. Build strong database fundamentals and practical SQL skills for modern applications.", 
    duration: "2 months", 
    level: "Beginner",
    whatYouLearn: [
      "Fundamentals of MySQL and relational databases",
      "Writing SQL queries for data retrieval and manipulation",
      "Database design, tables, and relationships",
      "Working with joins, indexes, and constraints",
      "Managing and securing MySQL databases",
      "Real-world database projects and hands-on practice",
      "Advanced MySQL concepts and optimization techniques",
      "Interview preparation, mock interviews, and placement support"
    ],
    prerequisites: ["Basic computer knowledge"],
    certification: "MySQL Developer Certificate",
    projects: ["Library Management Database", "Inventory System", "Web App with MySQL"]
  },
  { 
    id: "mongodb", 
    name: "MongoDB", 
    category: "database", 
    description: "Master NoSQL database management with MongoDB. Learn document-based data modeling, database operations, and scalable application development. Includes hands-on projects and placement support.", 
    duration: "2 months", 
    level: "Intermediate",
    whatYouLearn: [
      "MongoDB fundamentals and architecture",
      "Document-based data modeling",
      "CRUD operations and aggregation",
      "Indexing and performance optimization",
      "MongoDB with Node.js applications",
      "Replica sets and sharding"
    ],
    prerequisites: ["Basic database concepts"],
    certification: "MongoDB Developer Certificate",
    projects: ["Content Management System", "Real-time Analytics Dashboard", "Social Media Backend"]
  },
  { 
    id: "sql-server", 
    name: "SQL Server", 
    category: "database", 
    description: "Master Microsoft's enterprise database solution for business-critical applications. Build strong skills in database administration, T-SQL programming, and performance optimization.", 
    duration: "3 months", 
    level: "Intermediate",
    whatYouLearn: [
      "SQL Server installation and configuration",
      "T-SQL programming and optimization",
      "Database administration and maintenance",
      "SQL Server Integration Services (SSIS)",
      "Reporting Services (SSRS)",
      "Analysis Services (SSAS) basics"
    ],
    prerequisites: ["SQL fundamentals"],
    certification: "Microsoft SQL Server Certificate",
    projects: ["Business Intelligence Solution", "Data Warehouse Implementation", "Reporting Dashboard"]
  },
  { 
    id: "postgresql", 
    name: "PostgreSQL", 
    category: "database", 
    description: "Master advanced open-source PostgreSQL database with enterprise features. Learn complex queries, JSON handling, and performance optimization. Includes real-world projects and certification.", 
    duration: "2 months", 
    level: "Intermediate",
    whatYouLearn: [
      "PostgreSQL architecture and features",
      "Advanced SQL and window functions",
      "JSON and NoSQL capabilities",
      "Database administration and tuning",
      "Extensions and custom functions",
      "High availability and replication"
    ],
    prerequisites: ["SQL basics"],
    certification: "PostgreSQL Professional Certificate",
    projects: ["Geospatial Application", "Time Series Database", "Multi-tenant Application"]
  },

  // Data Science
  { 
    id: "ai", 
    name: "Artificial Intelligence", 
    category: "data-science", 
    description: "Build intelligent AI systems using machine learning and deep learning. Learn algorithms, neural networks, and practical AI applications. Includes hands-on projects and placement support.", 
    duration: "4 months", 
    level: "Advanced", 
    new: true,
    whatYouLearn: [
      "AI fundamentals and history",
      "Machine learning algorithms",
      "Neural networks and deep learning",
      "Natural language processing",
      "Computer vision applications",
      "AI ethics and deployment"
    ],
    prerequisites: ["Python, Mathematics"],
    certification: "AI Specialist Certificate",
    projects: ["Chatbot Development", "Image Recognition System", "Recommendation Engine"]
  },
  { 
    id: "data-science-python", 
    name: "Data Science with Python", 
    category: "data-science", 
    description: "Complete data science workflow from data collection to model deployment. Learn Python, pandas, visualization, and machine learning. Includes real-world projects and placement support.", 
    duration: "4 months", 
    level: "Intermediate", 
    popular: true,
    whatYouLearn: [
      "Python for data analysis (Pandas, NumPy)",
      "Data visualization (Matplotlib, Seaborn)",
      "Statistical analysis and hypothesis testing",
      "Machine learning with Scikit-learn",
      "Data preprocessing and feature engineering",
      "Model evaluation and deployment"
    ],
    prerequisites: ["Python basics, Statistics"],
    certification: "Data Scientist Certificate",
    projects: ["Sales Forecasting Model", "Customer Segmentation Analysis", "Predictive Analytics Dashboard"]
  },
  { 
    id: "deep-learning", 
    name: "Deep Learning", 
    category: "data-science", 
    description: "Master neural networks and deep learning architectures for complex AI applications. Learn CNNs, RNNs, and advanced deep learning techniques. Includes hands-on projects and certification.", 
    duration: "3 months", 
    level: "Advanced",
    whatYouLearn: [
      "Neural network fundamentals",
      "Convolutional Neural Networks (CNNs)",
      "Recurrent Neural Networks (RNNs)",
      "TensorFlow and Keras frameworks",
      "Transfer learning and fine-tuning",
      "Deep learning project deployment"
    ],
    prerequisites: ["Python, Machine Learning basics"],
    certification: "Deep Learning Specialist",
    projects: ["Image Classification System", "Text Generation Model", "Object Detection Application"]
  },
  { 
    id: "machine-learning", 
    name: "Machine Learning with Python", 
    category: "data-science", 
    description: "Build predictive models and ML pipelines for real-world applications. Learn supervised/unsupervised learning, algorithms, and model deployment. Includes practical projects and placement support.", 
    duration: "3 months", 
    level: "Advanced", 
    popular: true,
    whatYouLearn: [
      "Supervised and unsupervised learning",
      "Regression and classification algorithms",
      "Clustering and dimensionality reduction",
      "Model selection and hyperparameter tuning",
      "Ensemble methods and advanced techniques",
      "MLOps and model deployment"
    ],
    prerequisites: ["Python, Statistics"],
    certification: "Machine Learning Engineer",
    projects: ["Price Prediction Model", "Fraud Detection System", "Recommendation Algorithm"]
  },

  // Cyber Security
  { 
    id: "soc", 
    name: "SOC (Security Operations Center)", 
    category: "cyber-security", 
    description: "Security operations center training for threat detection and incident response. Learn security monitoring, analysis, and SOC operations. Includes hands-on labs and certification.", 
    duration: "3 months", 
    level: "Intermediate",
    whatYouLearn: [
      "SOC fundamentals and operations",
      "Security incident detection and analysis",
      "SIEM tools and log analysis",
      "Threat hunting techniques",
      "Incident response procedures",
      "Security monitoring and reporting"
    ],
    prerequisites: ["Basic networking, Security awareness"],
    certification: "SOC Analyst Certificate",
    projects: ["Security Monitoring Setup", "Incident Response Plan", "Threat Analysis Report"]
  },
  { 
    id: "splunk", 
    name: "Splunk", 
    category: "cyber-security", 
    description: "SIEM tool for security monitoring, log analysis, and threat detection. Learn Splunk architecture, SPL queries, and security analytics. Includes practical labs and certification.", 
    duration: "2 months", 
    level: "Intermediate",
    whatYouLearn: [
      "Splunk architecture and components",
      "Search processing language (SPL)",
      "Data ingestion and indexing",
      "Creating dashboards and reports",
      "Security use cases and alerts",
      "Splunk administration basics"
    ],
    prerequisites: ["Basic IT knowledge"],
    certification: "Splunk Certified User",
    projects: ["Security Dashboard", "Log Analysis Project", "Threat Detection System"]
  },
  { 
    id: "penetration-testing", 
    name: "Penetration & Vulnerability Testing", 
    category: "cyber-security", 
    description: "Ethical hacking and security assessment techniques for system protection. Learn penetration testing, vulnerability assessment, and security tools. Includes hands-on labs and certification.", 
    duration: "3 months", 
    level: "Advanced", 
    new: true,
    whatYouLearn: [
      "Ethical hacking methodology",
      "Network and web application testing",
      "Vulnerability assessment tools",
      "Exploitation techniques and mitigation",
      "Report writing and communication",
      "Legal and ethical considerations"
    ],
    prerequisites: ["Networking, Linux basics"],
    certification: "Certified Ethical Hacker (CEH)",
    projects: ["Vulnerability Assessment Report", "Penetration Testing Lab", "Security Audit Project"]
  },

  // Cloud Computing
  { 
    id: "aws", 
    name: "Amazon Web Services (AWS)", 
    category: "cloud-computing", 
    description: "Master AWS cloud services for scalable and reliable cloud solutions. Learn EC2, S3, RDS, IAM, and cloud architecture. Includes hands-on projects and AWS certification prep.", 
    duration: "3 months", 
    level: "Intermediate", 
    popular: true,
    whatYouLearn: [
      "AWS core services (EC2, S3, RDS)",
      "Identity and Access Management (IAM)",
      "Virtual Private Cloud (VPC) networking",
      "Auto Scaling and Load Balancing",
      "CloudFormation and infrastructure as code",
      "AWS security and cost optimization"
    ],
    prerequisites: ["Basic IT knowledge"],
    certification: "AWS Certified Solutions Architect",
    projects: ["Web Application Deployment", "Serverless Architecture", "Multi-tier Application on AWS"]
  },
  { 
    id: "azure", 
    name: "Microsoft Azure", 
    category: "cloud-computing", 
    description: "Microsoft's cloud computing platform for enterprise applications. Learn Azure services, virtual machines, and cloud deployment. Includes hands-on projects and Azure certification prep.", 
    duration: "3 months", 
    level: "Intermediate",
    whatYouLearn: [
      "Azure core services and portal",
      "Virtual machines and networking",
      "Azure Active Directory",
      "Storage solutions and databases",
      "Azure DevOps and CI/CD",
      "Monitoring and security"
    ],
    prerequisites: ["Basic IT knowledge"],
    certification: "Microsoft Azure Fundamentals",
    projects: ["Cloud Migration Project", "DevOps Pipeline", "Enterprise Application on Azure"]
  },
  { 
    id: "gcp", 
    name: "Google Cloud Platform", 
    category: "cloud-computing", 
    description: "Google's cloud infrastructure and services for modern applications. Learn GCP services, compute engine, and cloud deployment. Includes hands-on projects and GCP certification prep.", 
    duration: "3 months", 
    level: "Intermediate",
    whatYouLearn: [
      "GCP core services and console",
      "Compute Engine and App Engine",
      "Cloud Storage and databases",
      "Kubernetes Engine (GKE)",
      "BigQuery for analytics",
      "Cloud security and monitoring"
    ],
    prerequisites: ["Basic IT knowledge"],
    certification: "Google Cloud Associate",
    projects: ["Microservices on GCP", "Data Analytics Pipeline", "Machine Learning on GCP"]
  },
  { 
    id: "devops", 
    name: "DevOps", 
    category: "cloud-computing", 
    description: "CI/CD, containerization, and automation for efficient software delivery. Learn Docker, Kubernetes, Jenkins, and DevOps practices. Includes hands-on projects and placement support.", 
    duration: "3 months", 
    level: "Advanced", 
    popular: true,
    whatYouLearn: [
      "DevOps culture and practices",
      "Git version control and collaboration",
      "CI/CD pipelines (Jenkins, GitLab)",
      "Containerization (Docker, Kubernetes)",
      "Infrastructure as Code (Terraform)",
      "Monitoring and logging solutions"
    ],
    prerequisites: ["Linux, Basic programming"],
    certification: "DevOps Engineer Certificate",
    projects: ["CI/CD Pipeline Setup", "Containerized Application", "Infrastructure Automation"]
  },

  // Software Testing
  { 
    id: "manual-testing", 
    name: "Manual Testing", 
    category: "software-testing", 
    description: "Fundamentals of software quality assurance and manual testing techniques. Learn test planning, execution, and defect management. Includes practical projects and placement support.", 
    duration: "2 months", 
    level: "Beginner",
    whatYouLearn: [
      "Software testing fundamentals",
      "Test case design and execution",
      "Bug reporting and tracking",
      "Different types of testing",
      "Test documentation and planning",
      "Quality assurance processes"
    ],
    prerequisites: ["Basic computer knowledge"],
    certification: "Software Testing Certificate",
    projects: ["Test Plan Creation", "Bug Report Documentation", "Testing Project Portfolio"]
  },
  { 
    id: "automation-testing", 
    name: "Automation Testing", 
    category: "software-testing", 
    description: "Automated testing frameworks and tools for efficient quality assurance. Learn Selenium, TestNG, and automation best practices. Includes hands-on projects and placement support.", 
    duration: "3 months", 
    level: "Intermediate", 
    popular: true,
    whatYouLearn: [
      "Automation testing concepts",
      "Selenium WebDriver framework",
      "TestNG and JUnit frameworks",
      "Page Object Model design",
      "API testing with REST Assured",
      "Continuous testing in CI/CD"
    ],
    prerequisites: ["Manual testing, Basic programming"],
    certification: "Test Automation Engineer",
    projects: ["Web Automation Framework", "API Testing Suite", "Mobile App Testing"]
  },
  { 
    id: "etl-testing", 
    name: "ETL Testing", 
    category: "software-testing", 
    description: "Extract, Transform, Load testing for data warehouse and BI applications. Learn ETL processes, data validation, and testing techniques. Includes practical projects and certification.", 
    duration: "2 months", 
    level: "Intermediate",
    whatYouLearn: [
      "ETL process understanding",
      "Data validation techniques",
      "SQL for data testing",
      "ETL testing tools and methods",
      "Data quality assessment",
      "Performance testing for ETL"
    ],
    prerequisites: ["SQL basics, Testing fundamentals"],
    certification: "ETL Testing Specialist",
    projects: ["Data Validation Framework", "ETL Performance Testing", "Data Quality Dashboard"]
  },
  { 
    id: "loadrunner", 
    name: "LoadRunner", 
    category: "software-testing", 
    description: "Performance testing with HP LoadRunner for enterprise applications. Learn load testing, performance analysis, and optimization techniques. Includes hands-on labs and certification.", 
    duration: "2 months", 
    level: "Intermediate",
    whatYouLearn: [
      "Performance testing concepts",
      "LoadRunner architecture and components",
      "Script recording and enhancement",
      "Load test execution and monitoring",
      "Performance analysis and reporting",
      "Bottleneck identification and tuning"
    ],
    prerequisites: ["Basic testing knowledge"],
    certification: "LoadRunner Certified Professional",
    projects: ["Web Application Performance Test", "Load Testing Strategy", "Performance Optimization Report"]
  },
  { 
    id: "selenium", 
    name: "Selenium", 
    category: "software-testing", 
    description: "Web application automation testing with Selenium WebDriver. Learn automated testing, framework development, and best practices. Includes hands-on projects and placement support.", 
    duration: "2 months", 
    level: "Intermediate", 
    popular: true,
    whatYouLearn: [
      "Selenium WebDriver fundamentals",
      "Locating web elements effectively",
      "Handling different web controls",
      "Framework development (TestNG, Maven)",
      "Cross-browser and parallel testing",
      "Integration with CI/CD tools"
    ],
    prerequisites: ["Java/Python basics, Manual testing"],
    certification: "Selenium Automation Tester",
    projects: ["E-commerce Test Automation", "Cross-browser Testing Suite", "Data-driven Testing Framework"]
  },
  { 
    id: "tosca", 
    name: "TOSCA", 
    category: "software-testing", 
    description: "Model-based test automation with Tricentis TOSCA. Learn TOSCA architecture, test automation, and advanced testing techniques. Includes hands-on projects and certification.", 
    duration: "2 months", 
    level: "Intermediate",
    whatYouLearn: [
      "TOSCA architecture and concepts",
      "Model-based test automation",
      "Test case design and execution",
      "API and database testing",
      "Risk-based testing approach",
      "Continuous testing integration"
    ],
    prerequisites: ["Testing fundamentals"],
    certification: "TOSCA Automation Specialist",
    projects: ["Model-based Test Suite", "API Testing Framework", "Risk-based Testing Implementation"]
  },

  // Data Analytics
  { 
    id: "advanced-excel", 
    name: "Advanced Excel", 
    category: "data-analytics", 
    description: "Master Excel for data analysis, reporting, and business intelligence. Learn advanced functions, pivot tables, and data visualization. Includes practical projects and certification.", 
    duration: "1 month", 
    level: "Beginner",
    whatYouLearn: [
      "Advanced Excel functions and formulas",
      "Pivot tables and pivot charts",
      "Data analysis and what-if scenarios",
      "Macros and VBA programming basics",
      "Dashboard creation and visualization",
      "Data import and connection methods"
    ],
    prerequisites: ["Basic Excel knowledge"],
    certification: "Excel Data Analyst Certificate",
    projects: ["Sales Dashboard", "Financial Model", "Automated Report Generation"]
  },
  { 
    id: "sql-analytics", 
    name: "SQL for Analytics", 
    category: "data-analytics", 
    description: "SQL queries and database analysis for business intelligence. Learn advanced SQL, data analysis, and reporting techniques. Includes hands-on projects and placement support.", 
    duration: "2 months", 
    level: "Beginner",
    whatYouLearn: [
      "SQL fundamentals and syntax",
      "Advanced queries and joins",
      "Window functions and CTEs",
      "Data aggregation and grouping",
      "Stored procedures for analytics",
      "Database performance optimization"
    ],
    prerequisites: ["Basic computer knowledge"],
    certification: "SQL Analytics Certificate",
    projects: ["Business Intelligence Queries", "Data Analysis Report", "Performance Dashboard"]
  },
  { 
    id: "power-bi", 
    name: "Power BI", 
    category: "data-analytics", 
    description: "Microsoft Power BI for business intelligence and data visualization. Learn data modeling, DAX, and interactive dashboards. Includes hands-on projects and certification prep.", 
    duration: "2 months", 
    level: "Intermediate", 
    popular: true,
    whatYouLearn: [
      "Power BI Desktop and Service",
      "Data modeling and relationships",
      "DAX functions and calculations",
      "Interactive dashboard creation",
      "Report publishing and sharing",
      "Power BI administration and security"
    ],
    prerequisites: ["Excel basics, SQL knowledge helpful"],
    certification: "Microsoft Power BI Certification",
    projects: ["Executive Dashboard", "Sales Analytics Report", "Financial Performance Dashboard"]
  },
  { 
    id: "tableau", 
    name: "Tableau", 
    category: "data-analytics", 
    description: "Visual analytics platform for data exploration and storytelling. Learn Tableau Desktop, data visualization, and dashboard creation. Includes hands-on projects and certification prep.", 
    duration: "2 months", 
    level: "Intermediate", 
    popular: true,
    whatYouLearn: [
      "Tableau Desktop fundamentals",
      "Data connection and preparation",
      "Creating charts and visualizations",
      "Dashboard design and interactivity",
      "Calculated fields and parameters",
      "Tableau Server and publishing"
    ],
    prerequisites: ["Basic data analysis knowledge"],
    certification: "Tableau Desktop Specialist",
    projects: ["Interactive Sales Dashboard", "Customer Analytics Workbook", "Performance Metrics Visualization"]
  },

  // Digital Marketing
  { 
    id: "wordpress", 
    name: "WordPress", 
    category: "digital-marketing", 
    description: "Build professional websites and blogs with WordPress CMS. Learn theme customization, plugins, and content management. Includes hands-on projects and placement support.", 
    duration: "1 month", 
    level: "Beginner",
    whatYouLearn: [
      "WordPress installation and setup",
      "Theme customization and plugins",
      "Content creation and management",
      "SEO optimization for WordPress",
      "E-commerce with WooCommerce",
      "Website maintenance and security"
    ],
    prerequisites: ["Basic computer knowledge"],
    certification: "WordPress Developer Certificate",
    projects: ["Business Website", "E-commerce Store", "Blog Platform"]
  },
  { 
    id: "seo", 
    name: "Search Engine Optimization (SEO)", 
    category: "digital-marketing", 
    description: "Optimize websites for search engines and improve organic rankings. Learn keyword research, on-page SEO, and analytics. Includes practical projects and certification.", 
    duration: "2 months", 
    level: "Beginner", 
    popular: true,
    whatYouLearn: [
      "SEO fundamentals and best practices",
      "Keyword research and analysis",
      "On-page and technical SEO",
      "Link building strategies",
      "SEO tools and analytics",
      "Local SEO and mobile optimization"
    ],
    prerequisites: ["Basic web knowledge"],
    certification: "SEO Specialist Certificate",
    projects: ["Website SEO Audit", "Keyword Strategy Plan", "SEO Campaign Implementation"]
  },
  { 
    id: "smm", 
    name: "Social Media Marketing", 
    category: "digital-marketing", 
    description: "Marketing strategies for social media platforms and audience engagement. Learn content creation, social media management, and analytics. Includes practical campaigns and certification.", 
    duration: "2 months", 
    level: "Beginner",
    whatYouLearn: [
      "Social media platform strategies",
      "Content creation and curation",
      "Community management techniques",
      "Social media advertising",
      "Analytics and performance tracking",
      "Influencer marketing basics"
    ],
    prerequisites: ["Basic marketing knowledge"],
    certification: "Social Media Marketing Certificate",
    projects: ["Social Media Campaign", "Content Calendar", "Brand Engagement Strategy"]
  },
  { 
    id: "google-ads", 
    name: "Google Ads", 
    category: "digital-marketing", 
    description: "Master pay-per-click advertising with Google Ads platform. Learn campaign setup, optimization, and ROI analysis. Includes hands-on campaigns and Google Ads certification prep.", 
    duration: "1 month", 
    level: "Intermediate",
    whatYouLearn: [
      "Google Ads platform overview",
      "Campaign setup and optimization",
      "Keyword research and bidding",
      "Ad copywriting and extensions",
      "Conversion tracking and analytics",
      "Shopping and display campaigns"
    ],
    prerequisites: ["Basic marketing knowledge"],
    certification: "Google Ads Certified",
    projects: ["Search Campaign", "Shopping Campaign", "Performance Analysis Report"]
  },
  { 
    id: "content-marketing", 
    name: "Content Marketing", 
    category: "digital-marketing", 
    description: "Content strategy, creation, and distribution for digital marketing. Learn storytelling, content planning, and performance measurement. Includes practical projects and certification.", 
    duration: "1 month", 
    level: "Beginner",
    whatYouLearn: [
      "Content marketing strategy development",
      "Content creation and storytelling",
      "Blog writing and copywriting",
      "Content distribution channels",
      "Email marketing integration",
      "Content performance measurement"
    ],
    prerequisites: ["Basic writing skills"],
    certification: "Content Marketing Specialist",
    projects: ["Content Strategy Plan", "Blog Content Series", "Email Marketing Campaign"]
  },

  // Designing
  { 
    id: "graphic-design", 
    name: "Graphic Design", 
    category: "designing", 
    description: "Visual communication and design principles for print and digital media. Learn design fundamentals, color theory, and creative software. Includes portfolio projects and placement support.", 
    duration: "3 months", 
    level: "Beginner", 
    popular: true,
    whatYouLearn: [
      "Design principles and color theory",
      "Typography and layout design",
      "Adobe Creative Suite (Photoshop, Illustrator)",
      "Logo and brand identity design",
      "Print and digital design projects",
      "Portfolio development and presentation"
    ],
    prerequisites: ["Creative interest, basic computer skills"],
    certification: "Graphic Design Professional",
    projects: ["Logo Design Portfolio", "Brand Identity Package", "Marketing Materials Design"]
  },
  { 
    id: "ui-ux", 
    name: "UI/UX Design", 
    category: "designing", 
    description: "User interface and experience design for web and mobile applications. Learn UX research, wireframing, prototyping, and design systems. Includes portfolio projects and placement support.", 
    duration: "3 months", 
    level: "Intermediate", 
    popular: true,
    whatYouLearn: [
      "UX research and user personas",
      "Wireframing and prototyping",
      "UI design principles and patterns",
      "Interaction design and usability",
      "Design systems and style guides",
      "User testing and iteration"
    ],
    prerequisites: ["Basic design knowledge"],
    certification: "UI/UX Designer Certificate",
    projects: ["Mobile App Design", "Website Redesign", "Design System Creation"]
  },
  { 
    id: "adobe-photoshop", 
    name: "Adobe Photoshop", 
    category: "designing", 
    description: "Professional photo editing and digital imaging with Adobe Photoshop. Learn photo retouching, digital art, and creative design techniques. Includes hands-on projects and certification.", 
    duration: "2 months", 
    level: "Beginner",
    whatYouLearn: [
      "Photoshop interface and tools",
      "Photo editing and retouching",
      "Layer management and effects",
      "Color correction and adjustment",
      "Digital art and compositing",
      "Print and web optimization"
    ],
    prerequisites: ["Basic computer skills"],
    certification: "Adobe Photoshop Certified",
    projects: ["Photo Retouching Portfolio", "Digital Art Creation", "Marketing Graphics"]
  },
  { 
    id: "web-designing", 
    name: "Web Designing", 
    category: "designing", 
    description: "Creative web design and prototyping for modern websites. Learn responsive design, user experience, and web design tools. Includes portfolio projects and placement support.", 
    duration: "2 months", 
    level: "Beginner",
    whatYouLearn: [
      "Web design principles and trends",
      "Responsive design concepts",
      "HTML/CSS for designers",
      "Design tools and workflows",
      "User experience for web",
      "Portfolio website creation"
    ],
    prerequisites: ["Basic design knowledge"],
    certification: "Web Designer Certificate",
    projects: ["Responsive Website Design", "Landing Page Creation", "Design Portfolio Website"]
  },
  { 
    id: "figma", 
    name: "Figma", 
    category: "designing", 
    description: "Collaborative interface design tool for modern design workflows. Learn component design, prototyping, and team collaboration. Includes hands-on projects and certification.", 
    duration: "1 month", 
    level: "Beginner", 
    new: true,
    whatYouLearn: [
      "Figma interface and features",
      "Component design and libraries",
      "Prototyping and interactions",
      "Collaborative design workflows",
      "Design handoff to developers",
      "Advanced Figma techniques"
    ],
    prerequisites: ["Basic design knowledge"],
    certification: "Figma Design Certificate",
    projects: ["Mobile App Prototype", "Design System in Figma", "Interactive Website Mockup"]
  },
];

// Services
export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  { id: "mobile-dev", name: "Mobile Application Development", description: "Custom iOS and Android applications built with modern frameworks", icon: "Smartphone" },
  { id: "web-dev", name: "Web Development", description: "Full-stack web solutions using latest technologies", icon: "Globe" },
  { id: "staffing", name: "Staffing Solutions", description: "Find the right talent for your organization", icon: "Users" },
  { id: "payroll", name: "Payroll Management", description: "Streamlined payroll processing and compliance", icon: "Wallet" },
  { id: "digital-marketing-service", name: "Digital Marketing", description: "Comprehensive digital marketing strategies", icon: "TrendingUp" },
  { id: "corporate-training", name: "Corporate Training", description: "Customized training programs for enterprises", icon: "Building2" },
  { id: "campus-training", name: "Campus Training", description: "Industry-ready training for students", icon: "GraduationCap" },
  { id: "workshops", name: "Workshops", description: "Hands-on workshops on trending technologies", icon: "Wrench" },
  { id: "internships", name: "Internships", description: "Real-world project experience for students", icon: "Briefcase" },
  { id: "csr-programs", name: "CSR Skill Programs", description: "Corporate Social Responsibility initiatives for community skill development and empowerment", icon: "Heart" },
  { id: "govt-programs", name: "Government Skill Programs", description: "Partnership programs with government bodies for employment-focused skill development", icon: "Landmark" },
];

// Placement Partners
export const placementPartners = [
  "Zepto",
  "VBLP Technologies",
  "Hashtag",
  "BPO Convergences",
  "JD Overseas",
  "Ushnik Technologies",
];

// Companies & Clients
export interface CompanyClient {
  id: string;
  name: string;
  type: "corporate" | "startup" | "educational";
}

export const companiesAndClients: CompanyClient[] = [
  { id: "1", name: "Zepto", type: "startup" },
  { id: "2", name: "VBLP Technologies", type: "corporate" },
  { id: "3", name: "Hashtag", type: "corporate" },
  { id: "4", name: "BPO Convergences", type: "corporate" },
  { id: "5", name: "JD Overseas", type: "corporate" },
  { id: "6", name: "Ushnik Technologies", type: "startup" },
];

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarInitials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Software Developer",
    company: "Zepto",
    quote: "iFocus helped me transition from a non-tech background to a software developer role. The hands-on training and placement support were excellent.",
    avatarInitials: "PS"
  },
  {
    id: "2",
    name: "Rahul Kumar",
    role: "Data Analyst",
    company: "VBLP Technologies",
    quote: "The Data Analytics course at iFocus gave me practical skills that I use daily. The trainers are industry experts who really care about student success.",
    avatarInitials: "RK"
  },
  {
    id: "3",
    name: "Anjali Patel",
    role: "Cloud Engineer",
    company: "Hashtag",
    quote: "AWS certification training at iFocus was comprehensive and well-structured. I cleared my certification on the first attempt!",
    avatarInitials: "AP"
  },
];

// Contact Form
export interface ContactForm {
  id?: string;
  name: string;
  email: string;
  phone: string;
  course?: string;
  message: string;
}

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  course: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Stats
export const stats = [
  { label: "Students Placed", value: "1000+" },
  { label: "Hiring Partners", value: "50+" },
  { label: "Live Projects", value: "100+" },
  { label: "Certified Trainers", value: "25+" },
];

// Why Choose Us
export const whyChooseUs = [
  { title: "Expert Trainers", description: "Learn from industry professionals with years of experience", icon: "Award" },
  { title: "Hands-on Projects", description: "Work on real-world projects to build your portfolio", icon: "Rocket" },
  { title: "Placement Support", description: "100% placement assistance with mock interviews", icon: "Target" },
  { title: "Flexible Batches", description: "Weekend and weekday batches to suit your schedule", icon: "Calendar" },
];
