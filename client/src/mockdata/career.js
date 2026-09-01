export const careerHeroSectionData = {
    preHeading: "EXPLORE CAREERS",
    heading: {
        prefixText: "Discover Your",
        highlightedText: "Career",
        suffixText: "Path"
    },
    description: [
        "Explore career options, understand what each role involves, and find the skills you need to get started.",
        "Compare different career paths, discover their requirements, and choose a direction that fits your interests and goals."
    ],
    buttons: [
        {
            id: 1,
            buttonText: "Explore Careers",
            buttonUrl: "#careers",
            variant: "primary-btn"
        },
        {
            id: 2,
            buttonText: "Take Career Quiz",
            buttonUrl: "/quiz",
            variant: "secondary-btn"
        }
    ]
}

export const careersData = [
    {
        id: 1,
        slug: "frontend-developer",
        title: "Frontend Developer",
        difficulty: "Beginner–Intermediate",
        duration: "6–8 Months",
        desc: "Build responsive and interactive user interfaces using HTML, CSS, JavaScript, React, and modern frontend technologies.",
        buttonText: "Explore Career",

        skills: [
            "Web Development",
            "Frontend Development",
            "UI Development",
            "Responsive Design"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Git"
        ],

        category: "Web Development",

        keywords: [
            "frontend",
            "frontend developer",
            "web developer",
            "react developer",
            "ui developer"
        ],

        hero: {
            eyebrow: "Web Development Career",
            title: "Become a Frontend Developer",
            subtitle: "Turn designs into fast, accessible, and interactive web experiences.",
            description: "Frontend developers build the parts of websites and web applications that users see and interact with, combining strong UI fundamentals with modern JavaScript frameworks.",
            difficulty: "Beginner–Intermediate",
            duration: "6–8 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Frontend development focuses on building the user-facing layer of websites and web applications. You work with layout, styling, interactions, accessibility, performance, APIs, and reusable components to turn product designs into production-ready interfaces.",

        whatItInvolves: "You translate UI designs and product requirements into responsive interfaces, connect them to backend APIs, manage client-side state, improve accessibility and performance, and collaborate closely with designers and backend developers.",

        responsibilities: [
            "Build responsive and reusable user-interface components",
            "Convert Figma or design specifications into working web pages",
            "Integrate REST or GraphQL APIs into frontend applications",
            "Manage client-side state, forms, routing, and user interactions",
            "Optimize accessibility, responsiveness, and Core Web Vitals",
            "Debug browser compatibility and frontend performance issues"
        ],

        requiredSkills: [
            "HTML & Semantic Markup",
            "CSS & Responsive Design",
            "JavaScript",
            "React",
            "Git & GitHub",
            "API Integration",
            "Accessibility",
            "Debugging"
        ],

        toolsUsed: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Git",
            "Vite",
            "Chrome DevTools"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Web foundations",
                topics: [
                    "HTML",
                    "CSS",
                    "Responsive Design",
                    "Git basics"
                ]
            },
            {
                level: "Intermediate",
                focus: "Interactive applications",
                topics: [
                    "JavaScript",
                    "DOM",
                    "APIs",
                    "React",
                    "Routing"
                ]
            },
            {
                level: "Advanced",
                focus: "Production frontend",
                topics: [
                    "TypeScript",
                    "Testing",
                    "Performance",
                    "Accessibility",
                    "State Management"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges. Actual compensation varies by city, company, experience, and skill depth.",
            entry: "₹3–6 LPA",
            mid: "₹6–12 LPA",
            senior: "₹12–25+ LPA"
        },

        relatedRoadmaps: [
            "Web Development Fundamentals",
            "JavaScript",
            "React",
            "TypeScript"
        ],

        suggestedLearningPaths: [
            "Frontend Foundations",
            "React Developer Path",
            "Modern JavaScript Path"
        ],

        cta: {
            title: "Ready to build for the web?",
            description: "Start with the frontend roadmap and build real projects as you progress.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 2,
        slug: "backend-developer",
        title: "Backend Developer",
        difficulty: "Intermediate",
        duration: "7–9 Months",
        desc: "Develop scalable server-side applications, APIs, databases, and authentication systems using Node.js, Express, and MongoDB.",
        buttonText: "Explore Career",

        skills: [
            "Web Development",
            "Backend Development",
            "API Development",
            "Database Management",
            "Server Development"
        ],

        technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "JavaScript",
            "TypeScript",
            "SQL",
            "Git"
        ],

        category: "Web Development",

        keywords: [
            "backend",
            "backend developer",
            "server side",
            "api developer",
            "node developer"
        ],

        hero: {
            eyebrow: "Web Development Career",
            title: "Become a Backend Developer",
            subtitle: "Build the systems, APIs, and data layers that power modern applications.",
            description: "Backend developers create server-side logic, APIs, authentication, databases, and infrastructure that keep applications secure, reliable, and scalable.",
            difficulty: "Intermediate",
            duration: "7–9 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Backend development focuses on the server-side of applications. You design APIs, business logic, database interactions, authentication systems, background jobs, and integrations that frontend and mobile applications depend on.",

        whatItInvolves: "You model application data, design API contracts, implement business rules, secure endpoints, optimize database queries, handle errors, and deploy services that can reliably serve users at scale.",

        responsibilities: [
            "Design and build REST or GraphQL APIs",
            "Implement authentication and authorization",
            "Create and optimize database schemas and queries",
            "Write server-side business logic and validation",
            "Integrate third-party services and external APIs",
            "Monitor, debug, test, and improve backend performance"
        ],

        requiredSkills: [
            "JavaScript or TypeScript",
            "Node.js",
            "Express.js",
            "Databases",
            "REST APIs",
            "Authentication",
            "Git",
            "Backend Testing"
        ],

        toolsUsed: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "PostgreSQL",
            "TypeScript",
            "Postman",
            "Git",
            "Docker"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Programming and server fundamentals",
                topics: [
                    "JavaScript",
                    "Node.js",
                    "HTTP",
                    "Git"
                ]
            },
            {
                level: "Intermediate",
                focus: "API and database development",
                topics: [
                    "Express.js",
                    "REST APIs",
                    "MongoDB",
                    "SQL",
                    "Authentication"
                ]
            },
            {
                level: "Advanced",
                focus: "Scalable backend systems",
                topics: [
                    "Caching",
                    "Queues",
                    "Testing",
                    "Docker",
                    "Security",
                    "System Design"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges. Actual compensation varies by stack, company, city, and experience.",
            entry: "₹3.5–7 LPA",
            mid: "₹7–15 LPA",
            senior: "₹15–30+ LPA"
        },

        relatedRoadmaps: [
            "Node.js",
            "Backend Development",
            "Databases",
            "System Design"
        ],

        suggestedLearningPaths: [
            "Node.js Backend Path",
            "API Development Path",
            "Database Fundamentals"
        ],

        cta: {
            title: "Build what happens behind the screen",
            description: "Follow the backend roadmap and learn by building APIs and production-ready services.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 3,
        slug: "full-stack-developer",
        title: "Full Stack Developer",
        difficulty: "Intermediate–Advanced",
        duration: "10–12 Months",
        desc: "Master both frontend and backend development to build complete web applications from concept to deployment.",
        buttonText: "Explore Career",

        skills: [
            "Web Development",
            "Frontend Development",
            "Backend Development",
            "API Development",
            "Database Management",
            "Deployment"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "TypeScript",
            "Git",
            "Docker"
        ],

        category: "Web Development",

        keywords: [
            "fullstack",
            "full stack",
            "full stack developer",
            "mern",
            "web developer"
        ],

        hero: {
            eyebrow: "Web Development Career",
            title: "Become a Full Stack Developer",
            subtitle: "Build complete web products from interface to database.",
            description: "Full stack developers work across frontend and backend layers, allowing them to build, integrate, and deploy complete web applications.",
            difficulty: "Intermediate–Advanced",
            duration: "10–12 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Full stack development combines frontend, backend, databases, APIs, version control, and deployment. The role requires broad engineering knowledge and the ability to move confidently between different layers of an application.",

        whatItInvolves: "You may build a React interface, create Node.js APIs, model MongoDB or SQL data, implement authentication, test features, and deploy the entire application.",

        responsibilities: [
            "Develop responsive frontend interfaces",
            "Build APIs and server-side logic",
            "Design and integrate databases",
            "Implement authentication and authorization",
            "Connect frontend, backend, and third-party services",
            "Deploy, debug, and maintain complete applications"
        ],

        requiredSkills: [
            "HTML & CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "Databases",
            "Git",
            "Deployment"
        ],

        toolsUsed: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "PostgreSQL",
            "TypeScript",
            "Tailwind CSS",
            "Git",
            "Docker"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Frontend foundations",
                topics: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Git"
                ]
            },
            {
                level: "Intermediate",
                focus: "Full-stack application development",
                topics: [
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "APIs"
                ]
            },
            {
                level: "Advanced",
                focus: "Production engineering",
                topics: [
                    "TypeScript",
                    "Testing",
                    "Docker",
                    "Deployment",
                    "System Design",
                    "Security"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; product companies and strong engineering profiles can exceed these ranges.",
            entry: "₹4–8 LPA",
            mid: "₹8–18 LPA",
            senior: "₹18–35+ LPA"
        },

        relatedRoadmaps: [
            "Frontend Development",
            "Backend Development",
            "MERN Stack",
            "System Design"
        ],

        suggestedLearningPaths: [
            "MERN Stack Path",
            "Full Stack Project Path",
            "Production Web Engineering"
        ],

        cta: {
            title: "Build products end to end",
            description: "Start the full-stack roadmap and progress from fundamentals to deployable applications.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 4,
        slug: "php-developer",
        title: "PHP Developer",
        difficulty: "Beginner–Intermediate",
        duration: "6–8 Months",
        desc: "Build dynamic websites and server-side applications using PHP, MySQL, Laravel, and modern web development practices.",
        buttonText: "Explore Career",

        skills: [
            "Web Development",
            "Backend Development",
            "Database Management",
            "Server-side Development"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySQL",
            "Laravel",
            "Git"
        ],

        category: "Web Development",

        keywords: [
            "php",
            "php developer",
            "laravel developer",
            "backend php",
            "web developer"
        ],

        hero: {
            eyebrow: "Web Development Career",
            title: "Become a PHP Developer",
            subtitle: "Build dynamic websites, APIs, and business applications with PHP.",
            description: "PHP developers create server-side applications and content-driven systems using PHP, SQL databases, frameworks such as Laravel, and modern web practices.",
            difficulty: "Beginner–Intermediate",
            duration: "6–8 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "PHP remains widely used for dynamic websites, CMS platforms, ecommerce systems, and custom business applications. PHP developers work with server-side logic, databases, forms, APIs, authentication, and frameworks.",

        whatItInvolves: "You build backend features, process requests, work with relational databases, create APIs, manage sessions and authentication, and maintain or extend PHP-based applications.",

        responsibilities: [
            "Build server-side application features",
            "Create database-driven pages and APIs",
            "Implement forms, validation, sessions, and authentication",
            "Write and optimize SQL queries",
            "Develop applications using Laravel or similar frameworks",
            "Debug, maintain, and deploy PHP applications"
        ],

        requiredSkills: [
            "PHP",
            "MySQL",
            "HTML & CSS",
            "JavaScript",
            "Laravel",
            "REST APIs",
            "Git",
            "OOP"
        ],

        toolsUsed: [
            "PHP",
            "MySQL",
            "Laravel",
            "Composer",
            "Postman",
            "Git",
            "Apache/Nginx",
            "VS Code"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "PHP and web fundamentals",
                topics: [
                    "PHP syntax",
                    "Forms",
                    "Sessions",
                    "MySQL",
                    "Git"
                ]
            },
            {
                level: "Intermediate",
                focus: "Application development",
                topics: [
                    "OOP",
                    "PDO",
                    "REST APIs",
                    "Laravel",
                    "Authentication"
                ]
            },
            {
                level: "Advanced",
                focus: "Production PHP",
                topics: [
                    "Testing",
                    "Security",
                    "Caching",
                    "Queues",
                    "Deployment"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; experience with Laravel, APIs, cloud deployment, and modern engineering practices can influence compensation.",
            entry: "₹3–6 LPA",
            mid: "₹6–12 LPA",
            senior: "₹12–22+ LPA"
        },

        relatedRoadmaps: [
            "PHP Development",
            "Laravel",
            "MySQL",
            "Backend Development"
        ],

        suggestedLearningPaths: [
            "PHP Foundations",
            "Laravel Developer Path",
            "PHP Backend Development"
        ],

        cta: {
            title: "Build powerful web applications",
            description: "Start with PHP fundamentals and progress toward Laravel and production backend development.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 5,
        slug: "react-developer",
        title: "React Developer",
        difficulty: "Intermediate",
        duration: "6–8 Months",
        desc: "Develop modern, component-based web applications using React, JavaScript, TypeScript, and modern frontend tools.",
        buttonText: "Explore Career",

        skills: [
            "Web Development",
            "Frontend Development",
            "UI Development",
            "Component-Based Development"
        ],

        technologies: [
            "React",
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Next.js",
            "Git"
        ],

        category: "Web Development",

        keywords: [
            "react",
            "react developer",
            "frontend",
            "javascript developer",
            "nextjs"
        ],

        hero: {
            eyebrow: "Web Development Career",
            title: "Become a React Developer",
            subtitle: "Build modern interfaces with reusable components and scalable frontend architecture.",
            description: "React developers build interactive web applications using component-based architecture, modern JavaScript, state management, routing, APIs, and frontend tooling.",
            difficulty: "Intermediate",
            duration: "6–8 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "React development focuses on creating modern, component-based user interfaces. Developers use React to structure complex applications into reusable components while managing state, routing, API communication, and user interactions.",

        whatItInvolves: "You create reusable components, manage application state, connect applications to APIs, implement routing, handle forms and user interactions, and optimize applications for performance and maintainability.",

        responsibilities: [
            "Build reusable React components",
            "Develop responsive and interactive application interfaces",
            "Manage local and global application state",
            "Integrate frontend applications with APIs",
            "Implement routing, forms, and validation",
            "Optimize React application performance and maintainability"
        ],

        requiredSkills: [
            "JavaScript",
            "React",
            "HTML & CSS",
            "Component Architecture",
            "State Management",
            "API Integration",
            "Git",
            "Debugging"
        ],

        toolsUsed: [
            "React",
            "JavaScript",
            "TypeScript",
            "Vite",
            "Next.js",
            "Tailwind CSS",
            "React Router",
            "Git",
            "Chrome DevTools"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "React foundations",
                topics: [
                    "JavaScript ES6+",
                    "JSX",
                    "Components",
                    "Props",
                    "Events"
                ]
            },
            {
                level: "Intermediate",
                focus: "Application development",
                topics: [
                    "Hooks",
                    "State Management",
                    "React Router",
                    "APIs",
                    "Forms"
                ]
            },
            {
                level: "Advanced",
                focus: "Production React",
                topics: [
                    "TypeScript",
                    "Performance",
                    "Testing",
                    "Next.js",
                    "Architecture"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; compensation varies with React depth, TypeScript, architecture skills, and company.",
            entry: "₹4–8 LPA",
            mid: "₹8–16 LPA",
            senior: "₹16–30+ LPA"
        },

        relatedRoadmaps: [
            "Frontend Development",
            "JavaScript",
            "TypeScript",
            "Next.js"
        ],

        suggestedLearningPaths: [
            "React Foundations",
            "Modern React Development",
            "React + TypeScript Path"
        ],

        cta: {
            title: "Build modern interfaces with React",
            description: "Master React from components and hooks to scalable application architecture.",
            buttonText: "Start Learning"
        }
    },

    // Add these objects after Career 5

    {
        id: 6,
        slug: "python-developer",
        title: "Python Developer",
        difficulty: "Beginner–Intermediate",
        duration: "6–9 Months",
        desc: "Build applications, APIs, automation tools, and backend systems using Python and its powerful ecosystem.",
        buttonText: "Explore Career",

        skills: [
            "Python Development",
            "Backend Development",
            "API Development",
            "Automation",
            "Software Development"
        ],

        technologies: [
            "Python",
            "Django",
            "Flask",
            "FastAPI",
            "SQL",
            "Git",
            "Docker"
        ],

        category: "Software Development",

        keywords: [
            "python",
            "python developer",
            "backend developer",
            "django",
            "fastapi"
        ],

        hero: {
            eyebrow: "Software Development Career",
            title: "Become a Python Developer",
            subtitle: "Use Python to build applications, APIs, automation, and backend systems.",
            description: "Python developers use a versatile programming language across backend development, scripting, automation, data workflows, and application development.",
            difficulty: "Beginner–Intermediate",
            duration: "6–9 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Python development spans web backends, APIs, automation scripts, data processing, integrations, and internal tools. The language's readable syntax makes it approachable while its ecosystem supports advanced engineering work.",

        whatItInvolves: "You write Python programs, design APIs, automate repetitive tasks, connect databases, process data, test code, and use frameworks such as Django, Flask, or FastAPI.",

        responsibilities: [
            "Write clean and maintainable Python code",
            "Build APIs and backend services",
            "Automate repetitive business or engineering tasks",
            "Work with SQL and application databases",
            "Integrate third-party APIs and services",
            "Test, debug, document, and maintain applications"
        ],

        requiredSkills: [
            "Python",
            "OOP",
            "Data Structures",
            "SQL",
            "APIs",
            "Django/FastAPI",
            "Git",
            "Testing"
        ],

        toolsUsed: [
            "Python",
            "Django",
            "Flask",
            "FastAPI",
            "PostgreSQL",
            "Git",
            "Pytest",
            "Docker"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Python programming",
                topics: [
                    "Syntax",
                    "Functions",
                    "OOP",
                    "Data Structures",
                    "Git"
                ]
            },
            {
                level: "Intermediate",
                focus: "Application development",
                topics: [
                    "SQL",
                    "APIs",
                    "Django/FastAPI",
                    "Testing",
                    "Automation"
                ]
            },
            {
                level: "Advanced",
                focus: "Production Python",
                topics: [
                    "Async Programming",
                    "Docker",
                    "Architecture",
                    "Performance",
                    "Deployment"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; backend, automation, data, and cloud skills can shift the range significantly.",
            entry: "₹3–6 LPA",
            mid: "₹6–14 LPA",
            senior: "₹14–28+ LPA"
        },

        relatedRoadmaps: [
            "Python",
            "Backend Development",
            "Django",
            "FastAPI"
        ],

        suggestedLearningPaths: [
            "Python Foundations",
            "Python Backend Path",
            "Automation with Python"
        ],

        cta: {
            title: "Build more with Python",
            description: "Start with Python fundamentals and progress into APIs, automation, or backend development.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 7,
        slug: "java-developer",
        title: "Java Developer",
        difficulty: "Intermediate",
        duration: "8–10 Months",
        desc: "Build scalable applications, APIs, and enterprise systems using Java, Spring Boot, databases, and modern development practices.",
        buttonText: "Explore Career",

        skills: [
            "Java Development",
            "Backend Development",
            "Object-Oriented Programming",
            "API Development",
            "Enterprise Development"
        ],

        technologies: [
            "Java",
            "Spring Boot",
            "Hibernate",
            "Maven",
            "Gradle",
            "SQL",
            "Git"
        ],

        category: "Software Development",

        keywords: [
            "java",
            "java developer",
            "spring boot",
            "backend",
            "enterprise developer"
        ],

        hero: {
            eyebrow: "Software Development Career",
            title: "Become a Java Developer",
            subtitle: "Build reliable backend and enterprise systems with Java.",
            description: "Java developers create scalable applications, APIs, and enterprise services using Java, Spring Boot, databases, and object-oriented design.",
            difficulty: "Intermediate",
            duration: "8–10 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Java is widely used in enterprise backends, financial systems, large-scale web services, and distributed applications. Java developers often work with strong typing, object-oriented programming, APIs, databases, and Spring.",

        whatItInvolves: "You design backend services, create REST APIs, work with relational databases, implement business logic, write tests, and maintain production systems using the Java ecosystem.",

        responsibilities: [
            "Develop Java applications and backend services",
            "Build REST APIs with Spring Boot",
            "Design object-oriented domain models",
            "Work with SQL databases and ORM tools",
            "Write unit and integration tests",
            "Debug, optimize, and maintain enterprise applications"
        ],

        requiredSkills: [
            "Java",
            "OOP",
            "Spring Boot",
            "SQL",
            "REST APIs",
            "Hibernate/JPA",
            "Git",
            "Testing"
        ],

        toolsUsed: [
            "Java",
            "Spring Boot",
            "Maven",
            "Gradle",
            "Hibernate",
            "PostgreSQL",
            "Git",
            "JUnit"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Core Java",
                topics: [
                    "Syntax",
                    "OOP",
                    "Collections",
                    "Exceptions",
                    "Git"
                ]
            },
            {
                level: "Intermediate",
                focus: "Backend development",
                topics: [
                    "Spring Boot",
                    "REST APIs",
                    "SQL",
                    "JPA",
                    "Testing"
                ]
            },
            {
                level: "Advanced",
                focus: "Enterprise systems",
                topics: [
                    "Microservices",
                    "Security",
                    "Messaging",
                    "Docker",
                    "System Design"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; enterprise, fintech, cloud, and distributed-systems experience can command higher compensation.",
            entry: "₹3.5–7 LPA",
            mid: "₹7–16 LPA",
            senior: "₹16–32+ LPA"
        },

        relatedRoadmaps: [
            "Java",
            "Spring Boot",
            "Backend Development",
            "System Design"
        ],

        suggestedLearningPaths: [
            "Core Java",
            "Spring Boot Developer Path",
            "Java Backend Projects"
        ],

        cta: {
            title: "Engineer scalable systems with Java",
            description: "Build a strong Java foundation before moving into Spring Boot and backend architecture.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 8,
        slug: "game-developer",
        title: "Game Developer",
        difficulty: "Intermediate–Advanced",
        duration: "8–12 Months",
        desc: "Create interactive 2D and 3D games by combining programming, game engines, physics, graphics, and gameplay systems.",
        buttonText: "Explore Career",

        skills: [
            "Game Development",
            "Programming",
            "Game Design",
            "3D Development",
            "Game Physics"
        ],

        technologies: [
            "C#",
            "C++",
            "Unity",
            "Unreal Engine",
            "Blender",
            "Git"
        ],

        category: "Game Development",

        keywords: [
            "game developer",
            "game development",
            "unity",
            "unreal engine",
            "game programmer"
        ],

        hero: {
            eyebrow: "Game Development Career",
            title: "Become a Game Developer",
            subtitle: "Turn gameplay ideas into interactive 2D and 3D experiences.",
            description: "Game developers combine programming, mathematics, game engines, physics, graphics, and design systems to create interactive games.",
            difficulty: "Intermediate–Advanced",
            duration: "8–12 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Game development blends software engineering with real-time graphics and interactive design. Developers implement gameplay mechanics, physics, AI, UI, animation systems, tools, and optimization inside game engines.",

        whatItInvolves: "You write gameplay code, integrate art assets, implement physics and animation, build game systems, debug frame-rate issues, and collaborate with designers, artists, and audio teams.",

        responsibilities: [
            "Implement gameplay mechanics and player systems",
            "Build game logic using C# or C++",
            "Integrate animation, audio, and visual assets",
            "Develop UI, physics, and interaction systems",
            "Profile and optimize game performance",
            "Debug gameplay and engine-related issues"
        ],

        requiredSkills: [
            "C# or C++",
            "Game Engine Fundamentals",
            "Programming",
            "Math for Games",
            "Physics",
            "Game Design Basics",
            "Git",
            "Debugging"
        ],

        toolsUsed: [
            "Unity",
            "Unreal Engine",
            "C#",
            "C++",
            "Blender",
            "Git",
            "Visual Studio"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Programming and game basics",
                topics: [
                    "C# or C++",
                    "Game Loops",
                    "2D Games",
                    "Git"
                ]
            },
            {
                level: "Intermediate",
                focus: "Engine development",
                topics: [
                    "Unity/Unreal",
                    "Physics",
                    "Animation",
                    "UI",
                    "3D Basics"
                ]
            },
            {
                level: "Advanced",
                focus: "Production games",
                topics: [
                    "Optimization",
                    "Shaders",
                    "AI",
                    "Networking",
                    "Architecture"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; studios, engine specialization, graphics programming, and international remote roles vary widely.",
            entry: "₹3–6 LPA",
            mid: "₹6–14 LPA",
            senior: "₹14–28+ LPA"
        },

        relatedRoadmaps: [
            "C#",
            "C++",
            "Unity",
            "Unreal Engine"
        ],

        suggestedLearningPaths: [
            "Unity Game Developer",
            "Unreal Engine Path",
            "Game Programming Foundations"
        ],

        cta: {
            title: "Build worlds people can play",
            description: "Choose an engine, learn the programming fundamentals, and start shipping small games.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 9,
        slug: "mobile-app-developer",
        title: "Mobile App Developer",
        difficulty: "Intermediate",
        duration: "7–10 Months",
        desc: "Build mobile applications for Android and iOS using native or cross-platform technologies.",
        buttonText: "Explore Career",

        skills: [
            "Mobile Development",
            "Application Development",
            "UI Development",
            "API Integration",
            "App Architecture"
        ],

        technologies: [
            "React Native",
            "Flutter",
            "Dart",
            "Kotlin",
            "Firebase",
            "Git"
        ],

        category: "Mobile Development",

        keywords: [
            "mobile developer",
            "app developer",
            "android developer",
            "ios developer",
            "react native"
        ],

        hero: {
            eyebrow: "Mobile Development Career",
            title: "Become a Mobile App Developer",
            subtitle: "Create high-quality applications for Android and iOS.",
            description: "Mobile developers build user-focused applications using native or cross-platform technologies, APIs, device capabilities, and platform-specific design patterns.",
            difficulty: "Intermediate",
            duration: "7–10 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Mobile app development covers user interfaces, local storage, APIs, authentication, notifications, device permissions, app lifecycle, testing, and publishing to app stores.",

        whatItInvolves: "You build screens and navigation, integrate backend services, manage application state, access device features, optimize performance, test across devices, and prepare releases.",

        responsibilities: [
            "Build responsive mobile interfaces",
            "Implement navigation and state management",
            "Integrate APIs, authentication, and local storage",
            "Use device capabilities such as camera or notifications",
            "Test across devices and operating-system versions",
            "Prepare builds and app-store releases"
        ],

        requiredSkills: [
            "JavaScript/Dart/Kotlin",
            "Mobile UI",
            "API Integration",
            "State Management",
            "Git",
            "App Architecture",
            "Debugging",
            "Platform Guidelines"
        ],

        toolsUsed: [
            "React Native",
            "Flutter",
            "Dart",
            "Kotlin",
            "Android Studio",
            "Xcode",
            "Firebase",
            "Git"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Programming and UI",
                topics: [
                    "JavaScript or Dart",
                    "Mobile UI",
                    "Git",
                    "APIs"
                ]
            },
            {
                level: "Intermediate",
                focus: "Real applications",
                topics: [
                    "Navigation",
                    "State",
                    "Firebase",
                    "Authentication",
                    "Storage"
                ]
            },
            {
                level: "Advanced",
                focus: "Production mobile",
                topics: [
                    "Testing",
                    "Performance",
                    "Native Modules",
                    "CI/CD",
                    "App Publishing"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; native platform expertise and strong product experience can increase compensation.",
            entry: "₹3.5–7 LPA",
            mid: "₹7–15 LPA",
            senior: "₹15–28+ LPA"
        },

        relatedRoadmaps: [
            "React Native",
            "Flutter",
            "Android Development",
            "iOS Development"
        ],

        suggestedLearningPaths: [
            "Cross-Platform Mobile",
            "React Native Developer Path",
            "Flutter Developer Path"
        ],

        cta: {
            title: "Build apps users carry everywhere",
            description: "Choose your mobile stack and start with a practical app development roadmap.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 10,
        slug: "ios-developer",
        title: "iOS Developer",
        difficulty: "Intermediate–Advanced",
        duration: "8–10 Months",
        desc: "Build native applications for iPhone and iPad using Swift, SwiftUI, Apple's SDKs, and modern development practices.",
        buttonText: "Explore Career",

        skills: [
            "iOS Development",
            "Mobile Development",
            "Swift Development",
            "UI Development",
            "App Architecture"
        ],

        technologies: [
            "Swift",
            "SwiftUI",
            "UIKit",
            "Xcode",
            "Core Data",
            "Firebase",
            "Git"
        ],

        category: "Mobile Development",

        keywords: [
            "ios",
            "ios developer",
            "swift",
            "swiftui",
            "iphone developer"
        ],

        hero: {
            eyebrow: "Mobile Development Career",
            title: "Become an iOS Developer",
            subtitle: "Create polished applications for Apple's ecosystem.",
            description: "iOS developers build applications for iPhone and iPad using Swift, SwiftUI, Apple's SDKs, APIs, persistence, testing, and platform design guidelines.",
            difficulty: "Intermediate–Advanced",
            duration: "8–10 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "iOS development focuses on Apple's platforms and ecosystem. Developers work with Swift, SwiftUI or UIKit, networking, local persistence, concurrency, app architecture, testing, and App Store distribution.",

        whatItInvolves: "You build native interfaces, integrate APIs, manage application state and persistence, follow Human Interface Guidelines, test on Apple devices, and ship releases through App Store Connect.",

        responsibilities: [
            "Build native interfaces with SwiftUI or UIKit",
            "Integrate REST APIs and backend services",
            "Manage local persistence and application state",
            "Implement Apple platform features and permissions",
            "Test and debug across supported devices",
            "Prepare, sign, and publish App Store builds"
        ],

        requiredSkills: [
            "Swift",
            "SwiftUI",
            "iOS SDK",
            "Networking",
            "App Architecture",
            "Concurrency",
            "Git",
            "Testing"
        ],

        toolsUsed: [
            "Swift",
            "SwiftUI",
            "Xcode",
            "UIKit",
            "Core Data",
            "Firebase",
            "Git"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Swift foundations",
                topics: [
                    "Swift",
                    "OOP",
                    "Xcode",
                    "Basic SwiftUI"
                ]
            },
            {
                level: "Intermediate",
                focus: "iOS applications",
                topics: [
                    "Navigation",
                    "Networking",
                    "Persistence",
                    "Architecture",
                    "Testing"
                ]
            },
            {
                level: "Advanced",
                focus: "Production iOS",
                topics: [
                    "Concurrency",
                    "Performance",
                    "UIKit Interoperability",
                    "CI/CD",
                    "App Store"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; specialized native iOS skills can command a premium in product teams.",
            entry: "₹4–8 LPA",
            mid: "₹8–17 LPA",
            senior: "₹17–32+ LPA"
        },

        relatedRoadmaps: [
            "Swift",
            "SwiftUI",
            "iOS Development",
            "Mobile Architecture"
        ],

        suggestedLearningPaths: [
            "Swift Foundations",
            "iOS Developer Path",
            "SwiftUI Projects"
        ],

        cta: {
            title: "Build for the Apple ecosystem",
            description: "Learn Swift, SwiftUI, platform APIs, and release workflows through real applications.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 11,
        slug: "android-developer",
        title: "Android Developer",
        difficulty: "Intermediate",
        duration: "7–10 Months",
        desc: "Build native Android applications using Kotlin, Jetpack Compose, Android APIs, databases, and modern architecture.",
        buttonText: "Explore Career",

        skills: [
            "Android Development",
            "Mobile Development",
            "Kotlin Development",
            "UI Development",
            "App Architecture"
        ],

        technologies: [
            "Kotlin",
            "Jetpack Compose",
            "Android SDK",
            "Room",
            "Retrofit",
            "Firebase",
            "Git"
        ],

        category: "Mobile Development",

        keywords: [
            "android",
            "android developer",
            "kotlin",
            "jetpack compose",
            "mobile developer"
        ],

        hero: {
            eyebrow: "Mobile Development Career",
            title: "Become an Android Developer",
            subtitle: "Build native apps for the world's largest mobile platform.",
            description: "Android developers create native applications using Kotlin, Jetpack Compose, Android APIs, architecture components, databases, networking, and platform tooling.",
            difficulty: "Intermediate",
            duration: "7–10 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Android development involves native UI, app lifecycle, navigation, local storage, networking, background work, architecture, testing, and Play Store delivery.",

        whatItInvolves: "You create screens with Compose or XML, integrate APIs, manage state and lifecycle, work with local databases, implement platform capabilities, and optimize across many device configurations.",

        responsibilities: [
            "Build Android interfaces using Jetpack Compose",
            "Implement navigation and state management",
            "Integrate APIs and local databases",
            "Handle lifecycle, permissions, and background work",
            "Test across screen sizes and Android versions",
            "Publish and maintain applications on Google Play"
        ],

        requiredSkills: [
            "Kotlin",
            "Jetpack Compose",
            "Android SDK",
            "REST APIs",
            "App Architecture",
            "Git",
            "Coroutines",
            "Testing"
        ],

        toolsUsed: [
            "Kotlin",
            "Android Studio",
            "Jetpack Compose",
            "Room",
            "Retrofit",
            "Firebase",
            "Git"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Kotlin and Android basics",
                topics: [
                    "Kotlin",
                    "Android Studio",
                    "Compose",
                    "Git"
                ]
            },
            {
                level: "Intermediate",
                focus: "Real Android apps",
                topics: [
                    "Navigation",
                    "Networking",
                    "Room",
                    "Coroutines",
                    "Architecture"
                ]
            },
            {
                level: "Advanced",
                focus: "Production Android",
                topics: [
                    "Testing",
                    "Performance",
                    "Background Work",
                    "Modularization",
                    "Play Store"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; Kotlin, Compose, architecture, and product experience influence compensation.",
            entry: "₹3.5–7 LPA",
            mid: "₹7–15 LPA",
            senior: "₹15–28+ LPA"
        },

        relatedRoadmaps: [
            "Kotlin",
            "Android Development",
            "Jetpack Compose",
            "Mobile Architecture"
        ],

        suggestedLearningPaths: [
            "Kotlin Foundations",
            "Android Developer Path",
            "Jetpack Compose Projects"
        ],

        cta: {
            title: "Build native Android experiences",
            description: "Start with Kotlin and Compose, then progress into architecture and production apps.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 12,
        slug: "ui-ux-designer",
        title: "UI/UX Designer",
        difficulty: "Beginner",
        duration: "5–7 Months",
        desc: "Design intuitive digital experiences through user research, wireframing, prototyping, visual design, and usability testing.",
        buttonText: "Explore Career",

        skills: [
            "UI Design",
            "UX Design",
            "User Research",
            "Prototyping",
            "Visual Design"
        ],

        technologies: [
            "Figma",
            "FigJam",
            "Adobe Illustrator",
            "Photoshop",
            "Notion",
            "Maze"
        ],

        category: "Design",

        keywords: [
            "ui ux",
            "ui designer",
            "ux designer",
            "product designer",
            "figma"
        ],

        hero: {
            eyebrow: "Design Career",
            title: "Become a UI/UX Designer",
            subtitle: "Design digital products that are useful, intuitive, and visually clear.",
            description: "UI/UX designers combine user research, interaction design, information architecture, prototyping, usability testing, and visual design to shape digital experiences.",
            difficulty: "Beginner",
            duration: "5–7 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "UI/UX design focuses on understanding user problems and designing interfaces that solve them effectively. UX covers flows, research, structure, and usability; UI focuses on visual hierarchy, components, spacing, typography, and interaction details.",

        whatItInvolves: "You research users, map journeys, create wireframes and prototypes, design polished interfaces, test usability, and collaborate with product managers and developers.",

        responsibilities: [
            "Conduct user and competitor research",
            "Create user flows, wireframes, and information architecture",
            "Design high-fidelity interfaces and design systems",
            "Build interactive prototypes",
            "Run usability tests and iterate on feedback",
            "Prepare design handoff for development teams"
        ],

        requiredSkills: [
            "User Research",
            "Wireframing",
            "Prototyping",
            "Visual Design",
            "Typography",
            "Design Systems",
            "Usability Testing",
            "Communication"
        ],

        toolsUsed: [
            "Figma",
            "FigJam",
            "Adobe Illustrator",
            "Photoshop",
            "Notion",
            "Maze"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Design foundations",
                topics: [
                    "Design Principles",
                    "Typography",
                    "Color",
                    "Figma",
                    "Wireframes"
                ]
            },
            {
                level: "Intermediate",
                focus: "Product UX",
                topics: [
                    "User Research",
                    "Flows",
                    "Prototyping",
                    "Design Systems",
                    "Usability"
                ]
            },
            {
                level: "Advanced",
                focus: "Product design practice",
                topics: [
                    "Accessibility",
                    "Advanced Systems",
                    "Metrics",
                    "Portfolio Case Studies",
                    "Handoff"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; portfolio quality, product thinking, and research depth strongly affect opportunities.",
            entry: "₹3–6 LPA",
            mid: "₹6–12 LPA",
            senior: "₹12–25+ LPA"
        },

        relatedRoadmaps: [
            "UI Design",
            "UX Design",
            "Figma",
            "Product Design"
        ],

        suggestedLearningPaths: [
            "UI Design Foundations",
            "UX Research Path",
            "Product Design Portfolio"
        ],

        cta: {
            title: "Design experiences people understand",
            description: "Learn the full product-design process from research to polished interfaces.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 13,
        slug: "data-analyst",
        title: "Data Analyst",
        difficulty: "Beginner–Intermediate",
        duration: "6–8 Months",
        desc: "Transform raw data into meaningful insights, dashboards, reports, and business decisions using SQL, Excel, Python, and BI tools.",
        buttonText: "Explore Career",

        skills: [
            "Data Analysis",
            "SQL",
            "Statistics",
            "Data Visualization",
            "Business Analytics"
        ],

        technologies: [
            "Excel",
            "SQL",
            "Power BI",
            "Tableau",
            "Python",
            "Pandas",
            "Jupyter"
        ],

        category: "Data",

        keywords: [
            "data analyst",
            "data analysis",
            "sql analyst",
            "business analyst",
            "power bi"
        ],

        hero: {
            eyebrow: "Data Career",
            title: "Become a Data Analyst",
            subtitle: "Turn raw data into decisions, dashboards, and business insight.",
            description: "Data analysts clean, query, analyze, and visualize data to answer business questions and communicate actionable insights.",
            difficulty: "Beginner–Intermediate",
            duration: "6–8 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Data analysis combines spreadsheet skills, SQL, statistics, visualization, and business context. Analysts investigate trends, define metrics, build dashboards, and communicate what data means to decision-makers.",

        whatItInvolves: "You collect and clean data, write SQL queries, perform exploratory analysis, create dashboards, track KPIs, identify patterns, and present recommendations.",

        responsibilities: [
            "Clean and validate datasets",
            "Write SQL queries for analysis",
            "Build dashboards and recurring reports",
            "Analyze trends, funnels, and business KPIs",
            "Perform basic statistical analysis",
            "Present findings to technical and non-technical stakeholders"
        ],

        requiredSkills: [
            "Excel",
            "SQL",
            "Statistics",
            "Data Cleaning",
            "Data Visualization",
            "Business Thinking",
            "Python",
            "Communication"
        ],

        toolsUsed: [
            "Excel",
            "SQL",
            "Power BI",
            "Tableau",
            "Python",
            "Pandas",
            "Jupyter"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Analysis foundations",
                topics: [
                    "Excel",
                    "Statistics",
                    "Data Cleaning",
                    "Visualization"
                ]
            },
            {
                level: "Intermediate",
                focus: "Business analytics",
                topics: [
                    "SQL",
                    "Power BI/Tableau",
                    "KPIs",
                    "Python Basics"
                ]
            },
            {
                level: "Advanced",
                focus: "Advanced analysis",
                topics: [
                    "Pandas",
                    "Experiment Analysis",
                    "Forecasting Basics",
                    "Portfolio Projects"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; industry domain, SQL depth, BI skills, and business impact influence compensation.",
            entry: "₹3–6 LPA",
            mid: "₹6–12 LPA",
            senior: "₹12–22+ LPA"
        },

        relatedRoadmaps: [
            "SQL",
            "Data Analytics",
            "Power BI",
            "Python for Data"
        ],

        suggestedLearningPaths: [
            "Data Analyst Foundations",
            "SQL Analytics",
            "Business Intelligence Path"
        ],

        cta: {
            title: "Turn data into decisions",
            description: "Build your analytics toolkit with SQL, dashboards, statistics, and hands-on datasets.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 14,
        slug: "ai-machine-learning-engineer",
        title: "AI & Machine Learning Engineer",
        difficulty: "Advanced",
        duration: "10–14 Months",
        desc: "Build intelligent systems using machine learning, deep learning, Python, data processing, and modern AI frameworks.",
        buttonText: "Explore Career",

        skills: [
            "Artificial Intelligence",
            "Machine Learning",
            "Deep Learning",
            "Python",
            "Data Science"
        ],

        technologies: [
            "Python",
            "Scikit-learn",
            "PyTorch",
            "TensorFlow",
            "Pandas",
            "NumPy",
            "Jupyter",
            "MLflow"
        ],

        category: "AI & Data",

        keywords: [
            "ai engineer",
            "machine learning engineer",
            "ml engineer",
            "artificial intelligence",
            "deep learning"
        ],

        hero: {
            eyebrow: "AI & Data Career",
            title: "Become an AI & Machine Learning Engineer",
            subtitle: "Build intelligent systems that learn from data.",
            description: "AI and machine learning engineers develop, evaluate, deploy, and improve predictive and deep-learning systems using Python and modern ML frameworks.",
            difficulty: "Advanced",
            duration: "10–14 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "This career combines software engineering, mathematics, data preparation, machine learning, deep learning, experimentation, and deployment. Engineers turn model ideas into reliable systems that serve real users.",

        whatItInvolves: "You prepare datasets, train models, evaluate metrics, tune algorithms, build inference services, deploy models, monitor quality, and collaborate with data and product teams.",

        responsibilities: [
            "Prepare and validate training datasets",
            "Train and evaluate machine learning models",
            "Implement deep-learning solutions where appropriate",
            "Tune models and perform error analysis",
            "Deploy models into applications or APIs",
            "Monitor model quality, drift, and performance"
        ],

        requiredSkills: [
            "Python",
            "Statistics",
            "Linear Algebra",
            "Machine Learning",
            "Deep Learning",
            "Data Processing",
            "Model Evaluation",
            "Software Engineering"
        ],

        toolsUsed: [
            "Python",
            "Scikit-learn",
            "PyTorch",
            "TensorFlow",
            "Pandas",
            "NumPy",
            "Jupyter",
            "MLflow"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Math and Python foundations",
                topics: [
                    "Python",
                    "NumPy",
                    "Pandas",
                    "Statistics",
                    "Linear Algebra"
                ]
            },
            {
                level: "Intermediate",
                focus: "Machine learning",
                topics: [
                    "Supervised Learning",
                    "Unsupervised Learning",
                    "Feature Engineering",
                    "Evaluation"
                ]
            },
            {
                level: "Advanced",
                focus: "Production AI",
                topics: [
                    "Deep Learning",
                    "Deployment",
                    "MLOps",
                    "Monitoring",
                    "Model Optimization"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; research depth, software engineering, MLOps, and domain expertise can shift compensation substantially.",
            entry: "₹5–10 LPA",
            mid: "₹10–22 LPA",
            senior: "₹22–45+ LPA"
        },

        relatedRoadmaps: [
            "Python for AI",
            "Machine Learning",
            "Deep Learning",
            "MLOps"
        ],

        suggestedLearningPaths: [
            "Machine Learning Engineer",
            "Deep Learning Path",
            "Applied AI Engineering"
        ],

        cta: {
            title: "Build systems that learn",
            description: "Start with Python and mathematics, then progress into ML, deep learning, and deployment.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 15,
        slug: "data-scientist",
        title: "Data Scientist",
        difficulty: "Intermediate–Advanced",
        duration: "9–12 Months",
        desc: "Use statistics, programming, machine learning, and data visualization to solve complex business and analytical problems.",
        buttonText: "Explore Career",

        skills: [
            "Data Science",
            "Statistics",
            "Machine Learning",
            "Python",
            "Data Analysis"
        ],

        technologies: [
            "Python",
            "SQL",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Jupyter",
            "Tableau",
            "TensorFlow"
        ],

        category: "AI & Data",

        keywords: [
            "data scientist",
            "data science",
            "machine learning",
            "python data science",
            "analytics"
        ],

        hero: {
            eyebrow: "AI & Data Career",
            title: "Become a Data Scientist",
            subtitle: "Use data, statistics, and machine learning to solve complex problems.",
            description: "Data scientists explore data, design experiments, build predictive models, and translate quantitative evidence into product and business decisions.",
            difficulty: "Intermediate–Advanced",
            duration: "9–12 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Data science sits at the intersection of statistics, programming, business understanding, experimentation, and machine learning. Data scientists investigate problems that require deeper modeling than standard reporting.",

        whatItInvolves: "You clean and explore data, formulate hypotheses, design experiments, build models, evaluate uncertainty, visualize findings, and communicate recommendations.",

        responsibilities: [
            "Explore and clean complex datasets",
            "Perform statistical analysis and hypothesis testing",
            "Build and evaluate predictive models",
            "Design experiments and analyze outcomes",
            "Create visualizations and communicate findings",
            "Partner with product, engineering, and business teams"
        ],

        requiredSkills: [
            "Python",
            "SQL",
            "Statistics",
            "Probability",
            "Machine Learning",
            "Data Visualization",
            "Experimentation",
            "Communication"
        ],

        toolsUsed: [
            "Python",
            "SQL",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Jupyter",
            "Tableau",
            "TensorFlow"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Data foundations",
                topics: [
                    "Python",
                    "SQL",
                    "Statistics",
                    "Pandas",
                    "Visualization"
                ]
            },
            {
                level: "Intermediate",
                focus: "Modeling and experimentation",
                topics: [
                    "Machine Learning",
                    "Feature Engineering",
                    "A/B Testing",
                    "Model Evaluation"
                ]
            },
            {
                level: "Advanced",
                focus: "Applied data science",
                topics: [
                    "Advanced Statistics",
                    "Deep Learning Basics",
                    "Causal Thinking",
                    "Production Workflows"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; role definitions vary widely between analytics-heavy and ML-heavy teams.",
            entry: "₹5–10 LPA",
            mid: "₹10–22 LPA",
            senior: "₹22–40+ LPA"
        },

        relatedRoadmaps: [
            "Data Analytics",
            "Statistics",
            "Machine Learning",
            "Python for Data"
        ],

        suggestedLearningPaths: [
            "Data Science Foundations",
            "Applied Machine Learning",
            "Experimentation & Statistics"
        ],

        cta: {
            title: "Find the signal in the data",
            description: "Develop strong statistics, coding, and modeling skills through real datasets and experiments.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 16,
        slug: "data-engineer",
        title: "Data Engineer",
        difficulty: "Intermediate–Advanced",
        duration: "8–12 Months",
        desc: "Build reliable data pipelines, warehouses, and infrastructure that make data available for analytics, applications, and machine learning.",
        buttonText: "Explore Career",

        skills: [
            "Data Engineering",
            "Data Pipelines",
            "SQL",
            "Python",
            "Data Modeling",
            "Cloud"
        ],

        technologies: [
            "Python",
            "SQL",
            "Apache Spark",
            "Airflow",
            "Kafka",
            "PostgreSQL",
            "dbt",
            "AWS"
        ],

        category: "Data",

        keywords: [
            "data engineer",
            "data engineering",
            "etl",
            "data pipelines",
            "big data"
        ],

        hero: {
            eyebrow: "Data Infrastructure Career",
            title: "Become a Data Engineer",
            subtitle: "Build the pipelines and platforms that make data usable.",
            description: "Data engineers design reliable systems for collecting, transforming, storing, and serving data to analytics, applications, and machine learning teams.",
            difficulty: "Intermediate–Advanced",
            duration: "8–12 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Data engineering focuses on data infrastructure. Engineers build ETL/ELT pipelines, data warehouses, streaming systems, orchestration workflows, and reliable storage layers.",

        whatItInvolves: "You ingest data from multiple sources, transform it, enforce quality, model it for analytics, orchestrate jobs, monitor pipelines, and optimize large-scale processing.",

        responsibilities: [
            "Design batch and streaming data pipelines",
            "Build ETL or ELT workflows",
            "Model and maintain analytical datasets",
            "Manage data warehouses and storage systems",
            "Implement data quality and observability checks",
            "Optimize performance, reliability, and cost"
        ],

        requiredSkills: [
            "Python",
            "SQL",
            "Data Modeling",
            "ETL/ELT",
            "Distributed Systems",
            "Cloud",
            "Orchestration",
            "Git"
        ],

        toolsUsed: [
            "Python",
            "SQL",
            "Apache Spark",
            "Airflow",
            "Kafka",
            "PostgreSQL",
            "dbt",
            "AWS"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Data and programming foundations",
                topics: [
                    "Python",
                    "SQL",
                    "Databases",
                    "Linux"
                ]
            },
            {
                level: "Intermediate",
                focus: "Pipeline engineering",
                topics: [
                    "ETL",
                    "Data Modeling",
                    "Airflow",
                    "Data Warehousing",
                    "Cloud"
                ]
            },
            {
                level: "Advanced",
                focus: "Large-scale data systems",
                topics: [
                    "Spark",
                    "Kafka",
                    "Streaming",
                    "Observability",
                    "Architecture"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; cloud, Spark, streaming, and platform experience can materially increase compensation.",
            entry: "₹5–9 LPA",
            mid: "₹9–20 LPA",
            senior: "₹20–38+ LPA"
        },

        relatedRoadmaps: [
            "SQL",
            "Data Engineering",
            "Apache Spark",
            "Cloud"
        ],

        suggestedLearningPaths: [
            "Data Engineering Foundations",
            "Modern Data Stack",
            "Big Data Engineering"
        ],

        cta: {
            title: "Build the infrastructure behind analytics",
            description: "Learn SQL, pipelines, orchestration, cloud, and distributed processing step by step.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 17,
        slug: "machine-learning-engineer",
        title: "Machine Learning Engineer",
        difficulty: "Advanced",
        duration: "10–14 Months",
        desc: "Develop, deploy, and maintain machine learning models by combining ML expertise with strong software engineering practices.",
        buttonText: "Explore Career",

        skills: [
            "Machine Learning",
            "Python",
            "Software Engineering",
            "Model Deployment",
            "MLOps"
        ],

        technologies: [
            "Python",
            "PyTorch",
            "TensorFlow",
            "Scikit-learn",
            "MLflow",
            "FastAPI",
            "Docker",
            "Cloud"
        ],

        category: "AI & Data",

        keywords: [
            "machine learning engineer",
            "ml engineer",
            "machine learning",
            "mlops",
            "ai engineer"
        ],

        hero: {
            eyebrow: "Machine Learning Career",
            title: "Become a Machine Learning Engineer",
            subtitle: "Turn models into reliable, production-grade software systems.",
            description: "Machine learning engineers combine ML knowledge with software engineering to train, deploy, optimize, and maintain models in real applications.",
            difficulty: "Advanced",
            duration: "10–14 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "ML engineering is more production-oriented than pure experimentation. The role covers data pipelines, training systems, model evaluation, serving infrastructure, testing, monitoring, and optimization.",

        whatItInvolves: "You develop models, write robust training code, expose inference services, automate experiments, manage model versions, monitor predictions, and improve latency or cost.",

        responsibilities: [
            "Build reproducible training pipelines",
            "Develop and evaluate ML models",
            "Package and deploy inference services",
            "Optimize model latency and resource usage",
            "Implement experiment and model tracking",
            "Monitor performance and data/model drift"
        ],

        requiredSkills: [
            "Python",
            "Machine Learning",
            "Software Engineering",
            "Model Deployment",
            "Data Processing",
            "APIs",
            "Docker",
            "MLOps Fundamentals"
        ],

        toolsUsed: [
            "Python",
            "PyTorch",
            "TensorFlow",
            "Scikit-learn",
            "MLflow",
            "FastAPI",
            "Docker",
            "Cloud Platforms"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Python and ML foundations",
                topics: [
                    "Python",
                    "Statistics",
                    "NumPy",
                    "Pandas",
                    "ML Basics"
                ]
            },
            {
                level: "Intermediate",
                focus: "Model engineering",
                topics: [
                    "Feature Pipelines",
                    "Deep Learning",
                    "Evaluation",
                    "APIs",
                    "Testing"
                ]
            },
            {
                level: "Advanced",
                focus: "Production ML",
                topics: [
                    "Docker",
                    "Model Serving",
                    "Monitoring",
                    "MLOps",
                    "Optimization"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; production ML, systems engineering, and cloud experience are major differentiators.",
            entry: "₹6–12 LPA",
            mid: "₹12–25 LPA",
            senior: "₹25–50+ LPA"
        },

        relatedRoadmaps: [
            "Machine Learning",
            "Deep Learning",
            "MLOps",
            "Python Backend"
        ],

        suggestedLearningPaths: [
            "ML Engineer Path",
            "Production Machine Learning",
            "Deep Learning Engineering"
        ],

        cta: {
            title: "Take models into production",
            description: "Build both ML depth and engineering discipline to create reliable intelligent systems.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 18,
        slug: "ai-engineer",
        title: "AI Engineer",
        difficulty: "Advanced",
        duration: "9–12 Months",
        desc: "Build AI-powered applications using machine learning models, LLM APIs, retrieval systems, automation, and modern AI tooling.",
        buttonText: "Explore Career",

        skills: [
            "Artificial Intelligence",
            "Generative AI",
            "Python",
            "LLM Development",
            "API Development",
            "RAG"
        ],

        technologies: [
            "Python",
            "LLM APIs",
            "Hugging Face",
            "LangChain",
            "FastAPI",
            "Vector Databases",
            "Docker",
            "Git"
        ],

        category: "AI & Data",

        keywords: [
            "ai engineer",
            "artificial intelligence",
            "generative ai",
            "llm engineer",
            "rag"
        ],

        hero: {
            eyebrow: "Applied AI Career",
            title: "Become an AI Engineer",
            subtitle: "Build AI-powered products with models, APIs, retrieval, and automation.",
            description: "AI engineers integrate modern AI models into applications using APIs, LLM tooling, retrieval systems, evaluation, orchestration, and backend engineering.",
            difficulty: "Advanced",
            duration: "9–12 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Applied AI engineering focuses on building useful software around AI capabilities. The work often involves LLM APIs, RAG, embeddings, vector databases, agentic workflows, evaluation, security, and product integration.",

        whatItInvolves: "You design prompts and workflows, integrate model APIs, build retrieval pipelines, evaluate outputs, add guardrails, connect AI features to product backends, and optimize cost and latency.",

        responsibilities: [
            "Integrate AI and LLM APIs into applications",
            "Build retrieval-augmented generation pipelines",
            "Design prompts, tools, and structured outputs",
            "Implement embeddings and vector search",
            "Evaluate quality, safety, latency, and cost",
            "Deploy and monitor AI-powered backend services"
        ],

        requiredSkills: [
            "Python",
            "APIs",
            "LLM Fundamentals",
            "Prompt Engineering",
            "RAG",
            "Vector Databases",
            "Backend Development",
            "Evaluation"
        ],

        toolsUsed: [
            "Python",
            "LLM APIs",
            "Hugging Face",
            "LangChain",
            "FastAPI",
            "Vector Databases",
            "Docker",
            "Git"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "AI application foundations",
                topics: [
                    "Python",
                    "APIs",
                    "LLM Concepts",
                    "Prompting"
                ]
            },
            {
                level: "Intermediate",
                focus: "Applied AI systems",
                topics: [
                    "Embeddings",
                    "RAG",
                    "Vector Databases",
                    "Structured Outputs",
                    "Evaluation"
                ]
            },
            {
                level: "Advanced",
                focus: "Production AI",
                topics: [
                    "Agents",
                    "Observability",
                    "Guardrails",
                    "Optimization",
                    "Deployment"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; this is a fast-evolving role and compensation varies substantially with engineering depth and product impact.",
            entry: "₹6–12 LPA",
            mid: "₹12–25 LPA",
            senior: "₹25–50+ LPA"
        },

        relatedRoadmaps: [
            "Generative AI",
            "Python",
            "LLM Application Development",
            "MLOps"
        ],

        suggestedLearningPaths: [
            "Applied AI Developer",
            "RAG & LLM Engineering",
            "Production GenAI"
        ],

        cta: {
            title: "Build the next generation of AI products",
            description: "Learn to move beyond prompts and engineer reliable AI features end to end.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 19,
        slug: "mlops-engineer",
        title: "MLOps Engineer",
        difficulty: "Advanced",
        duration: "9–13 Months",
        desc: "Build the infrastructure, automation, deployment pipelines, and monitoring systems required to run machine learning reliably in production.",
        buttonText: "Explore Career",

        skills: [
            "MLOps",
            "Machine Learning",
            "DevOps",
            "Cloud",
            "CI/CD",
            "Infrastructure"
        ],

        technologies: [
            "Python",
            "Docker",
            "Kubernetes",
            "MLflow",
            "Terraform",
            "AWS",
            "GitHub Actions",
            "Prometheus"
        ],

        category: "AI & Cloud",

        keywords: [
            "mlops",
            "mlops engineer",
            "machine learning operations",
            "ml infrastructure",
            "ai infrastructure"
        ],

        hero: {
            eyebrow: "AI Infrastructure Career",
            title: "Become an MLOps Engineer",
            subtitle: "Build the infrastructure that keeps machine learning reliable in production.",
            description: "MLOps engineers automate model training, deployment, versioning, monitoring, and infrastructure so ML teams can ship safely and repeatedly.",
            difficulty: "Advanced",
            duration: "9–13 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "MLOps combines machine learning operations, DevOps, cloud infrastructure, CI/CD, model registries, observability, and automation. It solves the operational challenges of maintaining ML systems over time.",

        whatItInvolves: "You automate training and deployment, containerize model services, manage model registries, provision cloud infrastructure, monitor drift and reliability, and create reusable platforms for ML teams.",

        responsibilities: [
            "Build automated ML training and deployment pipelines",
            "Containerize and orchestrate model services",
            "Manage model registries and experiment tracking",
            "Provision reproducible cloud infrastructure",
            "Implement monitoring for models and data",
            "Improve reliability, security, and deployment speed"
        ],

        requiredSkills: [
            "Python",
            "Machine Learning Basics",
            "Docker",
            "Kubernetes",
            "CI/CD",
            "Cloud",
            "Terraform",
            "Observability"
        ],

        toolsUsed: [
            "Python",
            "Docker",
            "Kubernetes",
            "MLflow",
            "GitHub Actions",
            "Terraform",
            "AWS",
            "Prometheus"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "ML and DevOps foundations",
                topics: [
                    "Python",
                    "Git",
                    "Linux",
                    "ML Lifecycle",
                    "Docker"
                ]
            },
            {
                level: "Intermediate",
                focus: "Automation and cloud",
                topics: [
                    "CI/CD",
                    "Kubernetes",
                    "Cloud",
                    "MLflow",
                    "Terraform"
                ]
            },
            {
                level: "Advanced",
                focus: "ML platforms",
                topics: [
                    "Model Monitoring",
                    "Feature Stores",
                    "Security",
                    "Platform Engineering",
                    "Scaling"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; experienced MLOps engineers are valued for the combination of ML, cloud, and platform skills.",
            entry: "₹6–12 LPA",
            mid: "₹12–25 LPA",
            senior: "₹25–45+ LPA"
        },

        relatedRoadmaps: [
            "DevOps",
            "Machine Learning",
            "Cloud Engineering",
            "Kubernetes"
        ],

        suggestedLearningPaths: [
            "MLOps Foundations",
            "ML Platform Engineering",
            "Cloud for Machine Learning"
        ],

        cta: {
            title: "Make machine learning production-ready",
            description: "Combine ML fundamentals with DevOps and cloud engineering to operate models reliably.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 20,
        slug: "devops-engineer",
        title: "DevOps Engineer",
        difficulty: "Intermediate–Advanced",
        duration: "8–12 Months",
        desc: "Automate software delivery, manage infrastructure, and build reliable deployment workflows using cloud, containers, and CI/CD.",
        buttonText: "Explore Career",

        skills: [
            "DevOps",
            "Cloud Computing",
            "CI/CD",
            "Linux",
            "Infrastructure",
            "Automation"
        ],

        technologies: [
            "Linux",
            "Docker",
            "Kubernetes",
            "GitHub Actions",
            "Jenkins",
            "Terraform",
            "AWS",
            "Prometheus"
        ],

        category: "Cloud & DevOps",

        keywords: [
            "devops",
            "devops engineer",
            "ci cd",
            "cloud engineer",
            "infrastructure"
        ],

        hero: {
            eyebrow: "Cloud & DevOps Career",
            title: "Become a DevOps Engineer",
            subtitle: "Automate delivery and build reliable infrastructure for software teams.",
            description: "DevOps engineers improve how software is built, tested, deployed, observed, and operated using automation, cloud platforms, containers, and CI/CD.",
            difficulty: "Intermediate–Advanced",
            duration: "8–12 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "DevOps connects software development and operations through automation and shared engineering practices. The role covers CI/CD, infrastructure as code, containers, cloud, observability, release processes, and reliability.",

        whatItInvolves: "You automate builds and deployments, provision infrastructure, manage containers, monitor systems, improve release safety, and reduce repetitive operational work.",

        responsibilities: [
            "Create and maintain CI/CD pipelines",
            "Provision infrastructure using code",
            "Build and manage containerized workloads",
            "Operate cloud infrastructure and services",
            "Implement monitoring, logging, and alerting",
            "Improve deployment reliability and developer workflows"
        ],

        requiredSkills: [
            "Linux",
            "Git",
            "Networking",
            "Docker",
            "CI/CD",
            "Cloud",
            "Terraform",
            "Kubernetes"
        ],

        toolsUsed: [
            "Linux",
            "Docker",
            "Kubernetes",
            "GitHub Actions",
            "Jenkins",
            "Terraform",
            "AWS",
            "Prometheus"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Systems foundations",
                topics: [
                    "Linux",
                    "Git",
                    "Networking",
                    "Shell Scripting"
                ]
            },
            {
                level: "Intermediate",
                focus: "Automation and containers",
                topics: [
                    "Docker",
                    "CI/CD",
                    "Cloud",
                    "Terraform"
                ]
            },
            {
                level: "Advanced",
                focus: "Cloud-native operations",
                topics: [
                    "Kubernetes",
                    "Observability",
                    "Security",
                    "Reliability",
                    "Platform Engineering"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; cloud, Kubernetes, IaC, and production ownership are strong compensation drivers.",
            entry: "₹4–8 LPA",
            mid: "₹8–18 LPA",
            senior: "₹18–35+ LPA"
        },

        relatedRoadmaps: [
            "Linux",
            "Docker",
            "Kubernetes",
            "Cloud Engineering"
        ],

        suggestedLearningPaths: [
            "DevOps Foundations",
            "Cloud-Native DevOps",
            "Infrastructure Automation"
        ],

        cta: {
            title: "Automate how software reaches production",
            description: "Build strong Linux and cloud foundations, then master CI/CD, containers, and infrastructure as code.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 21,
        slug: "cloud-engineer",
        title: "Cloud Engineer",
        difficulty: "Intermediate–Advanced",
        duration: "8–12 Months",
        desc: "Design, deploy, secure, automate, and maintain scalable cloud infrastructure using AWS, Azure, or Google Cloud.",
        buttonText: "Explore Career",

        skills: [
            "Cloud Computing",
            "Infrastructure",
            "Networking",
            "Cloud Security",
            "Automation",
            "DevOps"
        ],

        technologies: [
            "AWS",
            "Azure",
            "Google Cloud",
            "Terraform",
            "Docker",
            "Kubernetes",
            "Linux",
            "Git"
        ],

        category: "Cloud & DevOps",

        keywords: [
            "cloud engineer",
            "cloud computing",
            "aws",
            "azure",
            "gcp"
        ],

        hero: {
            eyebrow: "Cloud Career",
            title: "Become a Cloud Engineer",
            subtitle: "Design and operate scalable infrastructure in the cloud.",
            description: "Cloud engineers build, secure, automate, and maintain cloud infrastructure using services from AWS, Azure, or Google Cloud.",
            difficulty: "Intermediate–Advanced",
            duration: "8–12 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Cloud engineering focuses on compute, networking, storage, identity, security, databases, monitoring, automation, and cost management across cloud platforms.",

        whatItInvolves: "You architect cloud environments, configure networking and IAM, deploy applications, automate infrastructure, monitor resources, and optimize reliability, security, and cost.",

        responsibilities: [
            "Design and deploy cloud infrastructure",
            "Configure networking, compute, storage, and IAM",
            "Automate infrastructure provisioning",
            "Implement monitoring, backups, and disaster recovery",
            "Apply cloud security best practices",
            "Optimize reliability, scalability, and cost"
        ],

        requiredSkills: [
            "Cloud Fundamentals",
            "Linux",
            "Networking",
            "Security",
            "Terraform",
            "Docker",
            "Git",
            "Monitoring"
        ],

        toolsUsed: [
            "AWS",
            "Azure",
            "Google Cloud",
            "Terraform",
            "Docker",
            "Kubernetes",
            "Linux",
            "Git"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Infrastructure foundations",
                topics: [
                    "Linux",
                    "Networking",
                    "Cloud Concepts",
                    "Git"
                ]
            },
            {
                level: "Intermediate",
                focus: "Cloud implementation",
                topics: [
                    "Compute",
                    "Storage",
                    "IAM",
                    "Databases",
                    "Terraform"
                ]
            },
            {
                level: "Advanced",
                focus: "Cloud architecture",
                topics: [
                    "Kubernetes",
                    "Security",
                    "High Availability",
                    "Observability",
                    "Cost Optimization"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; certification alone is less valuable than hands-on architecture and operations experience.",
            entry: "₹4–8 LPA",
            mid: "₹8–18 LPA",
            senior: "₹18–35+ LPA"
        },

        relatedRoadmaps: [
            "AWS",
            "Azure",
            "Linux",
            "DevOps"
        ],

        suggestedLearningPaths: [
            "Cloud Foundations",
            "AWS Cloud Engineer",
            "Infrastructure as Code"
        ],

        cta: {
            title: "Build infrastructure that scales",
            description: "Learn cloud fundamentals, networking, security, and automation through hands-on deployments.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 22,
        slug: "site-reliability-engineer",
        title: "Site Reliability Engineer",
        difficulty: "Advanced",
        duration: "9–13 Months",
        desc: "Keep production systems reliable, scalable, and observable by combining software engineering with infrastructure and operations.",
        buttonText: "Explore Career",

        skills: [
            "Site Reliability Engineering",
            "DevOps",
            "Cloud",
            "Distributed Systems",
            "Observability",
            "Automation"
        ],

        technologies: [
            "Linux",
            "Kubernetes",
            "Docker",
            "Prometheus",
            "Grafana",
            "Terraform",
            "AWS",
            "Python"
        ],

        category: "Cloud & DevOps",

        keywords: [
            "sre",
            "site reliability",
            "reliability engineer",
            "devops",
            "production engineering"
        ],

        hero: {
            eyebrow: "Reliability Engineering Career",
            title: "Become a Site Reliability Engineer",
            subtitle: "Use software engineering to keep critical systems fast, available, and resilient.",
            description: "SREs combine development, infrastructure, observability, incident response, and reliability engineering to operate large-scale systems safely.",
            difficulty: "Advanced",
            duration: "9–13 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Site reliability engineering applies engineering principles to operations. SREs define reliability targets, automate repetitive work, improve observability, manage incidents, and design systems that degrade gracefully.",

        whatItInvolves: "You monitor production services, define SLIs/SLOs, automate operational tasks, respond to incidents, perform postmortems, improve capacity, and work with product teams on reliability.",

        responsibilities: [
            "Define and track service-level indicators and objectives",
            "Build monitoring, logging, and alerting systems",
            "Automate operational workflows and remediation",
            "Participate in incident response and postmortems",
            "Improve capacity, scalability, and fault tolerance",
            "Reduce toil through software and platform improvements"
        ],

        requiredSkills: [
            "Linux",
            "Networking",
            "Programming",
            "Distributed Systems",
            "Observability",
            "Kubernetes",
            "Cloud",
            "Incident Management"
        ],

        toolsUsed: [
            "Linux",
            "Kubernetes",
            "Docker",
            "Prometheus",
            "Grafana",
            "Terraform",
            "AWS",
            "Python/Go"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Systems fundamentals",
                topics: [
                    "Linux",
                    "Networking",
                    "Programming",
                    "Git"
                ]
            },
            {
                level: "Intermediate",
                focus: "Operations and observability",
                topics: [
                    "Cloud",
                    "Docker",
                    "Monitoring",
                    "CI/CD",
                    "Incident Response"
                ]
            },
            {
                level: "Advanced",
                focus: "Reliability engineering",
                topics: [
                    "Kubernetes",
                    "SLOs",
                    "Distributed Systems",
                    "Capacity Planning",
                    "Automation"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; strong distributed-systems and production ownership experience can command premium compensation.",
            entry: "₹6–12 LPA",
            mid: "₹12–25 LPA",
            senior: "₹25–45+ LPA"
        },

        relatedRoadmaps: [
            "DevOps",
            "Kubernetes",
            "System Design",
            "Cloud Engineering"
        ],

        suggestedLearningPaths: [
            "SRE Foundations",
            "Observability & Reliability",
            "Cloud-Native Operations"
        ],

        cta: {
            title: "Engineer for reliability",
            description: "Build systems knowledge, observability, automation, and incident-management skills step by step.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 23,
        slug: "cybersecurity-analyst",
        title: "Cybersecurity Analyst",
        difficulty: "Intermediate",
        duration: "7–10 Months",
        desc: "Monitor systems, investigate security incidents, analyze threats, and strengthen an organization's defensive security posture.",
        buttonText: "Explore Career",

        skills: [
            "Cybersecurity",
            "Network Security",
            "Threat Analysis",
            "Incident Response",
            "SIEM",
            "Security Operations"
        ],

        technologies: [
            "Linux",
            "Wireshark",
            "Splunk",
            "Nmap",
            "Python",
            "Burp Suite",
            "SIEM"
        ],

        category: "Cybersecurity",

        keywords: [
            "cybersecurity analyst",
            "security analyst",
            "soc analyst",
            "cyber security",
            "incident response"
        ],

        hero: {
            eyebrow: "Cybersecurity Career",
            title: "Become a Cybersecurity Analyst",
            subtitle: "Detect threats, investigate incidents, and strengthen organizational security.",
            description: "Cybersecurity analysts monitor systems, investigate suspicious activity, assess risks, and help organizations prevent and respond to security incidents.",
            difficulty: "Intermediate",
            duration: "7–10 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Security analysts focus on defensive security. They review logs and alerts, investigate incidents, assess vulnerabilities, improve controls, and help protect networks, endpoints, identities, and data.",

        whatItInvolves: "You work with SIEM tools, network traffic, endpoint alerts, vulnerability scans, threat intelligence, incident processes, and security policies.",

        responsibilities: [
            "Monitor security events and alerts",
            "Investigate suspicious activity and incidents",
            "Analyze logs, network traffic, and endpoint telemetry",
            "Perform vulnerability and risk assessments",
            "Document incidents and remediation actions",
            "Improve detection rules and security controls"
        ],

        requiredSkills: [
            "Networking",
            "Linux",
            "Security Fundamentals",
            "SIEM",
            "Incident Response",
            "Threat Analysis",
            "Python Basics",
            "Communication"
        ],

        toolsUsed: [
            "Wireshark",
            "Splunk",
            "SIEM",
            "Nmap",
            "Linux",
            "Python",
            "Burp Suite"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Security foundations",
                topics: [
                    "Networking",
                    "Linux",
                    "Security Principles",
                    "Threats"
                ]
            },
            {
                level: "Intermediate",
                focus: "Defensive operations",
                topics: [
                    "SIEM",
                    "Log Analysis",
                    "Incident Response",
                    "Vulnerability Management"
                ]
            },
            {
                level: "Advanced",
                focus: "Detection engineering",
                topics: [
                    "Threat Hunting",
                    "Automation",
                    "Cloud Security",
                    "Detection Rules",
                    "Forensics Basics"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; SOC level, certifications, incident experience, and cloud-security skills affect compensation.",
            entry: "₹3.5–7 LPA",
            mid: "₹7–15 LPA",
            senior: "₹15–28+ LPA"
        },

        relatedRoadmaps: [
            "Cybersecurity Fundamentals",
            "Networking",
            "SOC Analyst",
            "Cloud Security"
        ],

        suggestedLearningPaths: [
            "Security Analyst Foundations",
            "SOC Analyst Path",
            "Incident Response"
        ],

        cta: {
            title: "Start defending real systems",
            description: "Build networking and security fundamentals before progressing into SOC and incident-response workflows.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 24,
        slug: "cybersecurity-engineer",
        title: "Cybersecurity Engineer",
        difficulty: "Advanced",
        duration: "9–13 Months",
        desc: "Design and implement security controls across applications, networks, infrastructure, identities, and cloud environments.",
        buttonText: "Explore Career",

        skills: [
            "Cybersecurity",
            "Security Engineering",
            "Cloud Security",
            "Application Security",
            "IAM",
            "DevSecOps"
        ],

        technologies: [
            "Linux",
            "AWS",
            "Azure",
            "Python",
            "Docker",
            "SIEM",
            "Terraform",
            "Burp Suite"
        ],

        category: "Cybersecurity",

        keywords: [
            "cybersecurity engineer",
            "security engineer",
            "cloud security",
            "application security",
            "devsecops"
        ],

        hero: {
            eyebrow: "Cybersecurity Career",
            title: "Become a Cybersecurity Engineer",
            subtitle: "Design and implement security controls across applications, networks, and cloud.",
            description: "Cybersecurity engineers build technical safeguards that protect infrastructure, applications, identities, and data from evolving threats.",
            difficulty: "Advanced",
            duration: "9–13 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Security engineering moves beyond monitoring into designing and implementing secure systems. Engineers work on network controls, application security, cloud security, IAM, hardening, automation, and security architecture.",

        whatItInvolves: "You design controls, harden systems, automate security checks, secure cloud infrastructure, review architectures, support vulnerability remediation, and collaborate with engineering teams.",

        responsibilities: [
            "Design and implement security controls",
            "Harden infrastructure, networks, and cloud environments",
            "Automate security checks and remediation",
            "Support application and API security",
            "Implement IAM and secrets-management practices",
            "Perform security reviews and vulnerability remediation"
        ],

        requiredSkills: [
            "Networking",
            "Linux",
            "Cloud Security",
            "Application Security",
            "IAM",
            "Python",
            "Security Architecture",
            "DevSecOps"
        ],

        toolsUsed: [
            "Linux",
            "AWS",
            "Azure",
            "Python",
            "Docker",
            "SIEM",
            "Terraform",
            "Burp Suite"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Security and systems foundations",
                topics: [
                    "Networking",
                    "Linux",
                    "Security Principles",
                    "Scripting"
                ]
            },
            {
                level: "Intermediate",
                focus: "Security engineering",
                topics: [
                    "Cloud Security",
                    "IAM",
                    "AppSec",
                    "Vulnerability Management",
                    "Automation"
                ]
            },
            {
                level: "Advanced",
                focus: "Security architecture",
                topics: [
                    "DevSecOps",
                    "Threat Modeling",
                    "Detection",
                    "Infrastructure Security",
                    "Zero Trust"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; cloud security, AppSec, automation, and architecture skills are significant differentiators.",
            entry: "₹5–10 LPA",
            mid: "₹10–22 LPA",
            senior: "₹22–40+ LPA"
        },

        relatedRoadmaps: [
            "Cybersecurity",
            "Cloud Security",
            "DevSecOps",
            "Application Security"
        ],

        suggestedLearningPaths: [
            "Security Engineering",
            "Cloud Security Engineer",
            "Application Security"
        ],

        cta: {
            title: "Build security into the system",
            description: "Progress from security fundamentals into cloud, application, and infrastructure security engineering.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 25,
        slug: "qa-engineer",
        title: "QA Engineer",
        difficulty: "Beginner–Intermediate",
        duration: "5–8 Months",
        desc: "Ensure software quality through systematic testing, automation, API validation, regression testing, and defect analysis.",
        buttonText: "Explore Career",

        skills: [
            "Software Testing",
            "Quality Assurance",
            "Test Automation",
            "API Testing",
            "Debugging"
        ],

        technologies: [
            "Playwright",
            "Cypress",
            "Selenium",
            "Postman",
            "JavaScript",
            "Python",
            "Jira",
            "Git"
        ],

        category: "Software Development",

        keywords: [
            "qa engineer",
            "quality assurance",
            "software tester",
            "test automation",
            "qa testing"
        ],

        hero: {
            eyebrow: "Software Quality Career",
            title: "Become a QA Engineer",
            subtitle: "Build confidence in software through systematic testing and automation.",
            description: "QA engineers design test strategies, find defects, automate repeatable checks, validate APIs, and help teams release reliable software.",
            difficulty: "Beginner–Intermediate",
            duration: "5–8 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Quality assurance covers manual testing, test design, automation, API testing, regression testing, defect reporting, and quality processes across the software development lifecycle.",

        whatItInvolves: "You understand requirements, design test cases, execute exploratory testing, automate browser or API tests, report bugs clearly, and collaborate with developers to prevent regressions.",

        responsibilities: [
            "Create test plans, scenarios, and test cases",
            "Perform functional and exploratory testing",
            "Automate repeatable browser and API tests",
            "Track, document, and reproduce defects",
            "Run regression tests before releases",
            "Collaborate with developers on quality improvements"
        ],

        requiredSkills: [
            "Software Testing",
            "Test Design",
            "API Testing",
            "Automation Basics",
            "JavaScript/Python",
            "Debugging",
            "Git",
            "Communication"
        ],

        toolsUsed: [
            "Playwright",
            "Cypress",
            "Selenium",
            "Postman",
            "Jira",
            "JavaScript",
            "Python",
            "Git"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Testing foundations",
                topics: [
                    "SDLC/STLC",
                    "Test Cases",
                    "Bug Reporting",
                    "Web Basics"
                ]
            },
            {
                level: "Intermediate",
                focus: "Automation and APIs",
                topics: [
                    "Postman",
                    "JavaScript/Python",
                    "Playwright/Cypress",
                    "Git"
                ]
            },
            {
                level: "Advanced",
                focus: "Quality engineering",
                topics: [
                    "Framework Design",
                    "CI/CD Testing",
                    "Performance Testing",
                    "Test Strategy"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; automation, API, CI/CD, and performance-testing skills improve prospects.",
            entry: "₹3–5.5 LPA",
            mid: "₹5.5–11 LPA",
            senior: "₹11–22+ LPA"
        },

        relatedRoadmaps: [
            "Software Testing",
            "Test Automation",
            "JavaScript",
            "API Testing"
        ],

        suggestedLearningPaths: [
            "QA Foundations",
            "Automation Testing",
            "API Testing Path"
        ],

        cta: {
            title: "Make every release more reliable",
            description: "Start with strong testing fundamentals, then add API and automation skills.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 26,
        slug: "database-administrator",
        title: "Database Administrator",
        difficulty: "Intermediate",
        duration: "6–9 Months",
        desc: "Manage databases, backups, security, performance, availability, and recovery for critical business applications.",
        buttonText: "Explore Career",

        skills: [
            "Database Administration",
            "SQL",
            "Database Security",
            "Performance Tuning",
            "Backup & Recovery"
        ],

        technologies: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Redis",
            "Linux",
            "SQL",
            "pgAdmin",
            "Cloud Databases"
        ],

        category: "Data",

        keywords: [
            "database administrator",
            "dba",
            "database admin",
            "sql",
            "postgresql"
        ],

        hero: {
            eyebrow: "Database Career",
            title: "Become a Database Administrator",
            subtitle: "Keep critical data secure, available, and performant.",
            description: "Database administrators manage database platforms, access control, backups, recovery, performance, availability, and operational health.",
            difficulty: "Intermediate",
            duration: "6–9 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "DBAs are responsible for the operational reliability of databases. They install and configure systems, manage users, tune queries and indexes, plan backups, monitor health, and protect data.",

        whatItInvolves: "You manage database servers, permissions, replication, backups, restore procedures, performance bottlenecks, schema changes, and incident response.",

        responsibilities: [
            "Install, configure, and maintain database systems",
            "Manage users, roles, and database security",
            "Design and validate backup and recovery procedures",
            "Monitor and tune database performance",
            "Manage replication, availability, and capacity",
            "Support schema changes and troubleshoot incidents"
        ],

        requiredSkills: [
            "SQL",
            "Relational Databases",
            "Linux",
            "Backup & Recovery",
            "Performance Tuning",
            "Security",
            "Monitoring",
            "Scripting"
        ],

        toolsUsed: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Redis",
            "Linux",
            "SQL",
            "pgAdmin",
            "Cloud Databases"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Database fundamentals",
                topics: [
                    "SQL",
                    "Relational Design",
                    "Indexes",
                    "Linux"
                ]
            },
            {
                level: "Intermediate",
                focus: "Database operations",
                topics: [
                    "Backups",
                    "Permissions",
                    "Performance",
                    "Monitoring",
                    "Replication"
                ]
            },
            {
                level: "Advanced",
                focus: "High availability",
                topics: [
                    "Clustering",
                    "Disaster Recovery",
                    "Automation",
                    "Cloud Databases",
                    "Capacity Planning"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; enterprise databases, cloud platforms, reliability, and performance expertise can increase compensation.",
            entry: "₹3.5–7 LPA",
            mid: "₹7–15 LPA",
            senior: "₹15–28+ LPA"
        },

        relatedRoadmaps: [
            "SQL",
            "PostgreSQL",
            "Database Engineering",
            "Linux"
        ],

        suggestedLearningPaths: [
            "Database Fundamentals",
            "PostgreSQL DBA",
            "Database Reliability"
        ],

        cta: {
            title: "Protect the systems that hold the data",
            description: "Master SQL, database operations, recovery, security, and performance in a structured path.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 27,
        slug: "systems-analyst",
        title: "Systems Analyst",
        difficulty: "Intermediate",
        duration: "6–9 Months",
        desc: "Analyze business processes and translate organizational requirements into effective technical systems and solutions.",
        buttonText: "Explore Career",

        skills: [
            "Systems Analysis",
            "Requirements Analysis",
            "Business Analysis",
            "Process Modeling",
            "Technical Documentation"
        ],

        technologies: [
            "SQL",
            "UML",
            "Jira",
            "Confluence",
            "Microsoft Visio",
            "Excel",
            "Lucidchart"
        ],

        category: "Technology & Business",

        keywords: [
            "systems analyst",
            "system analyst",
            "business systems",
            "requirements analyst",
            "systems analysis"
        ],

        hero: {
            eyebrow: "Technology & Business Career",
            title: "Become a Systems Analyst",
            subtitle: "Translate business needs into effective technical systems and processes.",
            description: "Systems analysts investigate business processes, gather requirements, model solutions, and help organizations design or improve information systems.",
            difficulty: "Intermediate",
            duration: "6–9 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Systems analysis connects business problems with technical solutions. Analysts understand current processes, document requirements, evaluate system options, model workflows, and support implementation.",

        whatItInvolves: "You interview stakeholders, analyze processes and data, document functional requirements, create diagrams, assess solution feasibility, and coordinate between business and technical teams.",

        responsibilities: [
            "Gather and document business and system requirements",
            "Analyze existing processes and identify improvements",
            "Create process flows, use cases, and system models",
            "Translate business needs for technical teams",
            "Support solution evaluation and implementation",
            "Validate that delivered systems meet requirements"
        ],

        requiredSkills: [
            "Requirements Analysis",
            "Business Analysis",
            "Process Modeling",
            "SQL",
            "UML",
            "Documentation",
            "Problem Solving",
            "Communication"
        ],

        toolsUsed: [
            "Jira",
            "Confluence",
            "SQL",
            "UML",
            "Microsoft Visio",
            "Excel",
            "Lucidchart"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Business and systems foundations",
                topics: [
                    "Requirements",
                    "Process Mapping",
                    "Excel",
                    "Documentation"
                ]
            },
            {
                level: "Intermediate",
                focus: "Systems analysis",
                topics: [
                    "UML",
                    "SQL",
                    "Use Cases",
                    "Data Flows",
                    "Jira"
                ]
            },
            {
                level: "Advanced",
                focus: "Solution analysis",
                topics: [
                    "Architecture Basics",
                    "Integration Analysis",
                    "Change Management",
                    "Stakeholder Leadership"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; domain expertise, enterprise systems, and stakeholder-management skills influence compensation.",
            entry: "₹3.5–7 LPA",
            mid: "₹7–14 LPA",
            senior: "₹14–25+ LPA"
        },

        relatedRoadmaps: [
            "Business Analysis",
            "SQL",
            "UML",
            "Product Development"
        ],

        suggestedLearningPaths: [
            "Systems Analysis Foundations",
            "Requirements Engineering",
            "Business Systems Path"
        ],

        cta: {
            title: "Bridge business and technology",
            description: "Learn to analyze requirements, model systems, and communicate solutions effectively.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 28,
        slug: "business-analyst",
        title: "Business Analyst",
        difficulty: "Beginner–Intermediate",
        duration: "5–8 Months",
        desc: "Analyze business problems, gather requirements, improve processes, and help teams make better data-informed decisions.",
        buttonText: "Explore Career",

        skills: [
            "Business Analysis",
            "Requirements Gathering",
            "Process Analysis",
            "Data Analysis",
            "Stakeholder Management"
        ],

        technologies: [
            "Excel",
            "SQL",
            "Power BI",
            "Jira",
            "Confluence",
            "Miro",
            "Visio"
        ],

        category: "Business & Technology",

        keywords: [
            "business analyst",
            "business analysis",
            "requirements",
            "process analyst",
            "ba"
        ],

        hero: {
            eyebrow: "Business & Technology Career",
            title: "Become a Business Analyst",
            subtitle: "Turn business problems into clear requirements and measurable solutions.",
            description: "Business analysts study processes, requirements, data, and stakeholder needs to help teams make better decisions and deliver useful solutions.",
            difficulty: "Beginner–Intermediate",
            duration: "5–8 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Business analysis focuses on discovering needs, defining problems, documenting requirements, improving processes, and aligning stakeholders around solutions.",

        whatItInvolves: "You interview stakeholders, map workflows, analyze data, define requirements and acceptance criteria, support prioritization, and validate whether solutions address the original business need.",

        responsibilities: [
            "Gather and clarify stakeholder requirements",
            "Document functional and non-functional requirements",
            "Analyze business processes and identify gaps",
            "Create user stories and acceptance criteria",
            "Use data to support recommendations",
            "Coordinate between business, product, and technical teams"
        ],

        requiredSkills: [
            "Requirements Gathering",
            "Process Analysis",
            "Communication",
            "Problem Solving",
            "Excel",
            "SQL Basics",
            "Documentation",
            "Stakeholder Management"
        ],

        toolsUsed: [
            "Excel",
            "SQL",
            "Power BI",
            "Jira",
            "Confluence",
            "Miro",
            "Visio"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Business analysis foundations",
                topics: [
                    "Requirements",
                    "Process Mapping",
                    "Excel",
                    "Communication"
                ]
            },
            {
                level: "Intermediate",
                focus: "Delivery practices",
                topics: [
                    "User Stories",
                    "SQL",
                    "Power BI",
                    "Jira",
                    "Agile"
                ]
            },
            {
                level: "Advanced",
                focus: "Strategic analysis",
                topics: [
                    "Metrics",
                    "Solution Evaluation",
                    "Stakeholder Leadership",
                    "Domain Specialization"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; domain expertise, analytics ability, and product/technology fluency affect opportunities.",
            entry: "₹3.5–7 LPA",
            mid: "₹7–14 LPA",
            senior: "₹14–25+ LPA"
        },

        relatedRoadmaps: [
            "Business Analysis",
            "SQL",
            "Power BI",
            "Product Management"
        ],

        suggestedLearningPaths: [
            "Business Analyst Foundations",
            "Analytics for Business",
            "Agile Business Analysis"
        ],

        cta: {
            title: "Turn ambiguity into clear direction",
            description: "Build your analysis, communication, process, and data skills through practical business scenarios.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 29,
        slug: "product-manager",
        title: "Product Manager",
        difficulty: "Intermediate",
        duration: "6–10 Months",
        desc: "Shape product strategy, understand customer problems, prioritize opportunities, and guide products from idea to launch.",
        buttonText: "Explore Career",

        skills: [
            "Product Management",
            "Product Strategy",
            "User Research",
            "Prioritization",
            "Analytics",
            "Stakeholder Management"
        ],

        technologies: [
            "Jira",
            "Confluence",
            "Figma",
            "Notion",
            "Google Analytics",
            "Mixpanel",
            "Miro"
        ],

        category: "Product & Management",

        keywords: [
            "product manager",
            "product management",
            "pm",
            "product strategy",
            "product manager career"
        ],

        hero: {
            eyebrow: "Product Career",
            title: "Become a Product Manager",
            subtitle: "Shape product strategy and guide ideas from problem to launch.",
            description: "Product managers identify user problems, define outcomes, prioritize opportunities, align teams, and guide product development using research, data, and strategy.",
            difficulty: "Intermediate",
            duration: "6–10 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Product management sits between users, business, design, and engineering. Product managers decide what problems are worth solving, define success metrics, prioritize work, and coordinate execution.",

        whatItInvolves: "You conduct user research, analyze markets and metrics, write product requirements, prioritize roadmaps, collaborate with design and engineering, launch features, and evaluate results.",

        responsibilities: [
            "Identify customer problems and product opportunities",
            "Define product goals, requirements, and success metrics",
            "Prioritize features and maintain product roadmaps",
            "Collaborate with design and engineering teams",
            "Conduct user and market research",
            "Analyze launches and iterate based on evidence"
        ],

        requiredSkills: [
            "Product Thinking",
            "User Research",
            "Prioritization",
            "Communication",
            "Analytics",
            "Roadmapping",
            "Stakeholder Management",
            "Technical Fluency"
        ],

        toolsUsed: [
            "Jira",
            "Confluence",
            "Figma",
            "Notion",
            "Google Analytics",
            "Mixpanel",
            "Miro"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Product foundations",
                topics: [
                    "Product Lifecycle",
                    "User Problems",
                    "Metrics",
                    "Research"
                ]
            },
            {
                level: "Intermediate",
                focus: "Product execution",
                topics: [
                    "PRDs",
                    "Prioritization",
                    "Roadmaps",
                    "Analytics",
                    "Agile Collaboration"
                ]
            },
            {
                level: "Advanced",
                focus: "Product strategy",
                topics: [
                    "Growth",
                    "Experimentation",
                    "Market Strategy",
                    "Leadership",
                    "Portfolio Thinking"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; product company tier, domain, prior experience, and measurable product impact create wide variation.",
            entry: "₹6–12 LPA",
            mid: "₹12–25 LPA",
            senior: "₹25–45+ LPA"
        },

        relatedRoadmaps: [
            "Product Management",
            "Business Analysis",
            "UX Research",
            "Product Analytics"
        ],

        suggestedLearningPaths: [
            "Product Management Foundations",
            "Product Strategy",
            "Product Analytics"
        ],

        cta: {
            title: "Build products around real problems",
            description: "Learn discovery, prioritization, execution, and measurement through a practical product roadmap.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 30,
        slug: "blockchain-developer",
        title: "Blockchain Developer",
        difficulty: "Advanced",
        duration: "8–12 Months",
        desc: "Build decentralized applications and smart contracts using blockchain technologies, Solidity, Web3 libraries, and modern development tools.",
        buttonText: "Explore Career",

        skills: [
            "Blockchain Development",
            "Smart Contracts",
            "Web3 Development",
            "Solidity",
            "JavaScript",
            "Blockchain Security"
        ],

        technologies: [
            "Solidity",
            "Ethereum",
            "Ethers.js",
            "Web3.js",
            "Hardhat",
            "MetaMask",
            "TypeScript",
            "Git"
        ],

        category: "Blockchain",

        keywords: [
            "blockchain developer",
            "web3 developer",
            "solidity",
            "smart contract",
            "ethereum"
        ],

        hero: {
            eyebrow: "Blockchain Career",
            title: "Become a Blockchain Developer",
            subtitle: "Build decentralized applications and smart-contract systems.",
            description: "Blockchain developers create smart contracts, decentralized applications, wallets, token systems, and integrations using blockchain protocols and Web3 tooling.",
            difficulty: "Advanced",
            duration: "8–12 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "View Roadmap"
        },

        overview: "Blockchain development combines software engineering, distributed-ledger concepts, cryptography fundamentals, smart contracts, frontend integration, and security-conscious programming.",

        whatItInvolves: "You write and test smart contracts, connect applications to blockchains, manage wallets and transactions, build decentralized interfaces, audit common vulnerabilities, and deploy to testnets or mainnets.",

        responsibilities: [
            "Write and test smart contracts",
            "Build decentralized application interfaces",
            "Integrate wallets and blockchain providers",
            "Handle transactions, events, and on-chain data",
            "Test for common smart-contract vulnerabilities",
            "Deploy and maintain blockchain applications"
        ],

        requiredSkills: [
            "JavaScript/TypeScript",
            "Solidity",
            "Smart Contracts",
            "Blockchain Fundamentals",
            "Cryptography Basics",
            "Web3 Libraries",
            "Testing",
            "Security"
        ],

        toolsUsed: [
            "Solidity",
            "Ethereum",
            "Ethers.js",
            "Web3.js",
            "Hardhat",
            "MetaMask",
            "TypeScript",
            "Git"
        ],

        learningPath: [
            {
                level: "Beginner",
                focus: "Web and blockchain foundations",
                topics: [
                    "JavaScript",
                    "Blockchain Concepts",
                    "Ethereum",
                    "Wallets"
                ]
            },
            {
                level: "Intermediate",
                focus: "Smart-contract development",
                topics: [
                    "Solidity",
                    "Hardhat",
                    "Testing",
                    "Ethers.js",
                    "dApps"
                ]
            },
            {
                level: "Advanced",
                focus: "Production Web3",
                topics: [
                    "Security",
                    "Gas Optimization",
                    "Protocols",
                    "Indexing",
                    "Architecture"
                ]
            }
        ],

        salaryInsights: {
            market: "India",
            note: "Illustrative annual CTC ranges; Web3 hiring is cyclical and compensation varies significantly by protocol, geography, and market conditions.",
            entry: "₹4–8 LPA",
            mid: "₹8–18 LPA",
            senior: "₹18–35+ LPA"
        },

        relatedRoadmaps: [
            "Blockchain Fundamentals",
            "Solidity",
            "Web3 Development",
            "Smart Contract Security"
        ],

        suggestedLearningPaths: [
            "Blockchain Developer Path",
            "Solidity & Smart Contracts",
            "Web3 dApp Development"
        ],

        cta: {
            title: "Build on decentralized networks",
            description: "Learn blockchain fundamentals first, then move into Solidity, dApps, and smart-contract security.",
            buttonText: "Start Learning"
        }
    }
];