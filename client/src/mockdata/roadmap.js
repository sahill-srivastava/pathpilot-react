const roadmapsData = [
    {
        id: 1,
        slug: "frontend-developer",
        title: "Frontend Developer Roadmap",
        difficulty: "Beginner–Intermediate",
        duration: "6–8 Months",
        desc: "Learn web foundations, modern frontend development, and production-ready UI engineering.",
        buttonText: "View Roadmap",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Git"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Git",
            "Vite"
        ],

        category: "Web Development",

        keywords: [
            "frontend",
            "frontend developer",
            "web development",
            "react",
            "javascript"
        ],

        careerId: "frontend-developer",

        hero: {
            eyebrow: "Frontend Development Roadmap",
            title: "Become a Frontend Developer",
            subtitle: "Turn ideas and designs into responsive, interactive web experiences.",
            description: "Follow a structured path from HTML and CSS fundamentals to JavaScript, React, TypeScript, and production-ready frontend development.",
            difficulty: "Beginner–Intermediate",
            duration: "6–8 Months",
            primaryCTA: "Begin This Journey",
            secondaryCTA: "Explore Career"
        },

        overview: "This roadmap takes you from the foundations of the web to modern frontend engineering. You will learn how websites work, build responsive interfaces, add interactivity with JavaScript, develop reusable React applications, and prepare projects for production.",

        phases: [
            {
                id: 1,
                title: "Web Foundations",
                duration: "4–6 Weeks",
                focus: "Build a strong foundation in how websites are structured and styled.",
                topics: [
                    "HTML",
                    "Semantic HTML",
                    "Forms",
                    "CSS",
                    "Flexbox",
                    "CSS Grid",
                    "Responsive Design",
                    "Git & GitHub"
                ]
            },
            {
                id: 2,
                title: "JavaScript & Interactivity",
                duration: "6–8 Weeks",
                focus: "Learn programming fundamentals and make web interfaces interactive.",
                topics: [
                    "JavaScript Fundamentals",
                    "Variables & Data Types",
                    "Functions",
                    "Arrays & Objects",
                    "DOM",
                    "Events",
                    "Async JavaScript",
                    "Fetch API"
                ]
            },
            {
                id: 3,
                title: "Modern Frontend Development",
                duration: "8–10 Weeks",
                focus: "Build scalable interfaces using modern frontend tools and React.",
                topics: [
                    "React",
                    "Components",
                    "Props & State",
                    "Hooks",
                    "React Router",
                    "API Integration",
                    "TypeScript",
                    "Tailwind CSS"
                ]
            },
            {
                id: 4,
                title: "Production & Projects",
                duration: "6–8 Weeks",
                focus: "Turn your frontend skills into production-ready applications.",
                topics: [
                    "Component Architecture",
                    "Authentication",
                    "Accessibility",
                    "Performance",
                    "Testing",
                    "Deployment",
                    "Project Architecture",
                    "Portfolio Projects"
                ]
            }
        ],

        projects: [
            {
                title: "Responsive Landing Page",
                level: "Beginner",
                description: "Build a responsive landing page using semantic HTML, CSS, Flexbox, Grid, and responsive design.",
                skills: [
                    "HTML",
                    "CSS",
                    "Responsive Design"
                ]
            },
            {
                title: "JavaScript Interactive App",
                level: "Beginner–Intermediate",
                description: "Create an interactive browser application using JavaScript, DOM manipulation, events, and local storage.",
                skills: [
                    "JavaScript",
                    "DOM",
                    "Events"
                ]
            },
            {
                title: "React Application",
                level: "Intermediate",
                description: "Build a component-based React application with routing, state management, and API integration.",
                skills: [
                    "React",
                    "React Router",
                    "APIs"
                ]
            },
            {
                title: "Production Frontend Project",
                level: "Advanced",
                description: "Build and deploy a complete frontend application with authentication, responsive UI, reusable components, and production practices.",
                skills: [
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Deployment"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "MDN Web Docs",
                topics: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Web APIs"
                ]
            },
            {
                type: "Practice",
                title: "Frontend Practice",
                topics: [
                    "Responsive Design",
                    "UI Development",
                    "Frontend Projects"
                ]
            },
            {
                type: "Documentation",
                title: "React Documentation",
                topics: [
                    "React",
                    "Components",
                    "Hooks"
                ]
            }
        ],

        estimatedTimeline: {
            total: "6–8 Months",
            phase1: "4–6 Weeks",
            phase2: "6–8 Weeks",
            phase3: "8–10 Weeks",
            phase4: "6–8 Weeks"
        },

        relatedCareers: [
            "frontend-developer",
            "react-developer",
            "full-stack-developer"
        ],

        relatedRoadmaps: [
            "react-developer",
            "full-stack-developer"
        ],

        cta: {
            title: "Ready to build for the web?",
            description: "Follow the roadmap step by step, build real projects, and develop the skills needed for frontend development.",
            buttonText: "Begin This Journey"
        }
    },

    {
        id: 2,
        slug: "backend-developer",
        title: "Backend Developer Roadmap",
        difficulty: "Intermediate",
        duration: "7–9 Months",
        desc: "Build server-side applications, APIs, databases, authentication systems, and production backend services.",
        buttonText: "View Roadmap",

        skills: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "SQL",
            "REST APIs",
            "Authentication",
            "Git"
        ],

        technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "PostgreSQL",
            "SQL",
            "Postman",
            "Docker"
        ],

        category: "Web Development",

        keywords: [
            "backend",
            "backend developer",
            "node developer",
            "api development",
            "server side"
        ],

        careerId: "backend-developer",

        hero: {
            eyebrow: "Backend Development Roadmap",
            title: "Become a Backend Developer",
            subtitle: "Build the systems, APIs, and databases that power modern applications.",
            description: "Learn server-side programming, API development, databases, authentication, security, testing, and deployment through practical backend projects.",
            difficulty: "Intermediate",
            duration: "7–9 Months",
            primaryCTA: "Begin This Journey",
            secondaryCTA: "Explore Career"
        },

        overview: "This roadmap takes you from server fundamentals to production backend development. You will learn Node.js, Express, REST APIs, databases, authentication, security, testing, and deployment.",

        phases: [
            {
                id: 1,
                title: "Backend Foundations",
                duration: "4–6 Weeks",
                focus: "Understand how servers, HTTP, Node.js, and backend applications work.",
                topics: [
                    "JavaScript Fundamentals",
                    "Node.js",
                    "npm",
                    "Modules",
                    "HTTP",
                    "Client–Server Architecture",
                    "Environment Variables",
                    "Git"
                ]
            },
            {
                id: 2,
                title: "API Development",
                duration: "6–8 Weeks",
                focus: "Build structured APIs and understand backend request handling.",
                topics: [
                    "Express.js",
                    "Routing",
                    "Middleware",
                    "Request & Response",
                    "REST APIs",
                    "Validation",
                    "Error Handling",
                    "Postman"
                ]
            },
            {
                id: 3,
                title: "Databases & Authentication",
                duration: "6–8 Weeks",
                focus: "Persist application data and secure backend systems.",
                topics: [
                    "MongoDB",
                    "Mongoose",
                    "SQL",
                    "CRUD",
                    "Database Design",
                    "JWT Authentication",
                    "Authorization",
                    "Password Security"
                ]
            },
            {
                id: 4,
                title: "Production Backend",
                duration: "6–8 Weeks",
                focus: "Learn the practices required to build reliable production services.",
                topics: [
                    "API Security",
                    "Testing",
                    "Caching",
                    "File Uploads",
                    "Third-party APIs",
                    "Payment Integration",
                    "Docker",
                    "Deployment"
                ]
            }
        ],

        projects: [
            {
                title: "REST API",
                level: "Beginner–Intermediate",
                description: "Build a CRUD REST API with Express, validation, error handling, and database integration.",
                skills: [
                    "Node.js",
                    "Express.js",
                    "REST APIs"
                ]
            },
            {
                title: "Authentication Service",
                level: "Intermediate",
                description: "Create a secure authentication system with registration, login, JWT, password hashing, and protected routes.",
                skills: [
                    "JWT",
                    "Authentication",
                    "MongoDB"
                ]
            },
            {
                title: "E-commerce Backend",
                level: "Intermediate",
                description: "Build APIs for products, users, carts, orders, authentication, and payments.",
                skills: [
                    "Express.js",
                    "MongoDB",
                    "APIs",
                    "Authentication"
                ]
            },
            {
                title: "Production API",
                level: "Advanced",
                description: "Build, test, secure, containerize, and deploy a production-ready backend service.",
                skills: [
                    "Node.js",
                    "Docker",
                    "Testing",
                    "Deployment"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Node.js Documentation",
                topics: [
                    "Node.js",
                    "Modules",
                    "Runtime APIs"
                ]
            },
            {
                type: "Documentation",
                title: "Express Documentation",
                topics: [
                    "Routing",
                    "Middleware",
                    "APIs"
                ]
            },
            {
                type: "Practice",
                title: "Postman",
                topics: [
                    "REST APIs",
                    "API Testing"
                ]
            }
        ],

        estimatedTimeline: {
            total: "7–9 Months",
            phase1: "4–6 Weeks",
            phase2: "6–8 Weeks",
            phase3: "6–8 Weeks",
            phase4: "6–8 Weeks"
        },

        relatedCareers: [
            "backend-developer",
            "full-stack-developer",
            "php-developer",
            "python-developer",
            "java-developer"
        ],

        relatedRoadmaps: [
            "full-stack-developer",
            "python-developer",
            "java-developer",
            "php-developer"
        ],

        cta: {
            title: "Build what happens behind the screen",
            description: "Learn backend development by building APIs, working with databases, and deploying real services.",
            buttonText: "Begin This Journey"
        }
    },

    {
        id: 3,
        slug: "full-stack-developer",
        title: "Full Stack Developer Roadmap",
        difficulty: "Intermediate–Advanced",
        duration: "10–12 Months",
        desc: "Master frontend, backend, databases, APIs, authentication, deployment, and complete application development.",
        buttonText: "View Roadmap",

        skills: [
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

        technologies: [
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "TypeScript",
            "Docker",
            "Git"
        ],

        category: "Web Development",

        keywords: [
            "full stack",
            "full stack developer",
            "fullstack",
            "mern",
            "web developer"
        ],

        careerId: "full-stack-developer",

        hero: {
            eyebrow: "Full Stack Development Roadmap",
            title: "Become a Full Stack Developer",
            subtitle: "Build complete web products from interface to database.",
            description: "Follow a complete learning path covering frontend development, backend engineering, databases, APIs, authentication, deployment, and production architecture.",
            difficulty: "Intermediate–Advanced",
            duration: "10–12 Months",
            primaryCTA: "Begin This Journey",
            secondaryCTA: "Explore Career"
        },

        overview: "Full stack development combines frontend and backend engineering. This roadmap progressively builds your skills from web fundamentals to complete applications that can be developed, secured, tested, and deployed independently.",

        phases: [
            {
                id: 1,
                title: "Web & Programming Foundations",
                duration: "6–8 Weeks",
                focus: "Build the foundational skills required across the full web stack.",
                topics: [
                    "HTML",
                    "CSS",
                    "Responsive Design",
                    "JavaScript",
                    "Git & GitHub",
                    "HTTP",
                    "Web Fundamentals"
                ]
            },
            {
                id: 2,
                title: "Modern Frontend",
                duration: "8–10 Weeks",
                focus: "Build modern interactive user interfaces with React.",
                topics: [
                    "React",
                    "Components",
                    "Props & State",
                    "Hooks",
                    "React Router",
                    "State Management",
                    "API Integration",
                    "TypeScript"
                ]
            },
            {
                id: 3,
                title: "Backend & Databases",
                duration: "8–10 Weeks",
                focus: "Build APIs and connect applications to persistent data.",
                topics: [
                    "Node.js",
                    "Express.js",
                    "REST APIs",
                    "MongoDB",
                    "Mongoose",
                    "SQL Basics",
                    "Authentication",
                    "Authorization"
                ]
            },
            {
                id: 4,
                title: "Production Full Stack",
                duration: "8–10 Weeks",
                focus: "Bring complete applications to production using modern engineering practices.",
                topics: [
                    "Testing",
                    "Security",
                    "Docker",
                    "Deployment",
                    "Performance",
                    "Architecture",
                    "CI/CD",
                    "System Design"
                ]
            }
        ],

        projects: [
            {
                title: "Task Management App",
                level: "Intermediate",
                description: "Build a full-stack task application with authentication, CRUD operations, and a responsive frontend.",
                skills: [
                    "React",
                    "Node.js",
                    "MongoDB"
                ]
            },
            {
                title: "E-commerce Platform",
                level: "Intermediate",
                description: "Create a complete shopping platform with products, users, cart, orders, and payment integration.",
                skills: [
                    "React",
                    "Express.js",
                    "MongoDB",
                    "APIs"
                ]
            },
            {
                title: "Social Application",
                level: "Advanced",
                description: "Build a social platform with authentication, profiles, posts, interactions, and real-time-ready architecture.",
                skills: [
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Authentication"
                ]
            },
            {
                title: "Full-Stack SaaS",
                level: "Advanced",
                description: "Design, build, secure, test, and deploy a complete SaaS-style application.",
                skills: [
                    "React",
                    "Node.js",
                    "TypeScript",
                    "Docker"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "MDN Web Docs",
                topics: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Web APIs"
                ]
            },
            {
                type: "Documentation",
                title: "React Documentation",
                topics: [
                    "React",
                    "Hooks",
                    "Components"
                ]
            },
            {
                type: "Documentation",
                title: "Node.js Documentation",
                topics: [
                    "Node.js",
                    "Backend Development"
                ]
            }
        ],

        estimatedTimeline: {
            total: "10–12 Months",
            phase1: "6–8 Weeks",
            phase2: "8–10 Weeks",
            phase3: "8–10 Weeks",
            phase4: "8–10 Weeks"
        },

        relatedCareers: [
            "full-stack-developer",
            "frontend-developer",
            "backend-developer",
            "react-developer"
        ],

        relatedRoadmaps: [
            "frontend-developer",
            "backend-developer",
            "react-developer"
        ],

        cta: {
            title: "Build products end to end",
            description: "Learn the complete web stack and turn your knowledge into deployable full-stack applications.",
            buttonText: "Begin This Journey"
        }
    },

    {
        id: 4,
        slug: "php-developer",
        title: "PHP Developer Roadmap",
        difficulty: "Beginner–Intermediate",
        duration: "6–8 Months",
        desc: "Learn PHP, MySQL, Laravel, APIs, authentication, and server-side web application development.",
        buttonText: "View Roadmap",

        skills: [
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Laravel",
            "Git"
        ],

        technologies: [
            "PHP",
            "MySQL",
            "Laravel",
            "Composer",
            "Apache",
            "Nginx",
            "Postman",
            "Git"
        ],

        category: "Web Development",

        keywords: [
            "php",
            "php developer",
            "laravel",
            "php backend",
            "server side"
        ],

        careerId: "php-developer",

        hero: {
            eyebrow: "PHP Development Roadmap",
            title: "Become a PHP Developer",
            subtitle: "Build dynamic websites, APIs, and business applications with PHP.",
            description: "Learn PHP fundamentals, databases, object-oriented programming, Laravel, REST APIs, authentication, security, and deployment.",
            difficulty: "Beginner–Intermediate",
            duration: "6–8 Months",
            primaryCTA: "Begin This Journey",
            secondaryCTA: "Explore Career"
        },

        overview: "This roadmap starts with PHP and web fundamentals, then moves into MySQL, object-oriented programming, Laravel, APIs, authentication, security, and production deployment.",

        phases: [
            {
                id: 1,
                title: "PHP & Web Foundations",
                duration: "4–6 Weeks",
                focus: "Learn PHP syntax and understand how server-side web applications work.",
                topics: [
                    "PHP Syntax",
                    "Variables & Data Types",
                    "Arrays",
                    "Functions",
                    "Forms",
                    "Sessions",
                    "HTML & CSS",
                    "Git"
                ]
            },
            {
                id: 2,
                title: "Databases & Backend Logic",
                duration: "5–7 Weeks",
                focus: "Build database-driven applications with PHP and MySQL.",
                topics: [
                    "MySQL",
                    "SQL",
                    "CRUD",
                    "PDO",
                    "Database Design",
                    "Validation",
                    "Authentication",
                    "Sessions & Cookies"
                ]
            },
            {
                id: 3,
                title: "Laravel Development",
                duration: "6–8 Weeks",
                focus: "Use Laravel to build structured and maintainable web applications.",
                topics: [
                    "Laravel",
                    "Routing",
                    "Controllers",
                    "Blade",
                    "Eloquent",
                    "Middleware",
                    "Validation",
                    "REST APIs"
                ]
            },
            {
                id: 4,
                title: "Production PHP",
                duration: "5–7 Weeks",
                focus: "Prepare PHP applications for real-world deployment and maintenance.",
                topics: [
                    "Security",
                    "Testing",
                    "Caching",
                    "Queues",
                    "File Handling",
                    "Deployment",
                    "Apache/Nginx",
                    "Production Projects"
                ]
            }
        ],

        projects: [
            {
                title: "PHP CRUD Application",
                level: "Beginner",
                description: "Build a database-driven CRUD application using PHP and MySQL.",
                skills: [
                    "PHP",
                    "MySQL",
                    "CRUD"
                ]
            },
            {
                title: "Laravel Blog",
                level: "Intermediate",
                description: "Create a Laravel blog with authentication, posts, categories, validation, and database relationships.",
                skills: [
                    "Laravel",
                    "Eloquent",
                    "Authentication"
                ]
            },
            {
                title: "PHP Authentication System",
                level: "Intermediate",
                description: "Build secure registration, login, sessions, authorization, and protected application areas.",
                skills: [
                    "PHP",
                    "MySQL",
                    "Authentication"
                ]
            },
            {
                title: "Laravel Business Application",
                level: "Advanced",
                description: "Build and deploy a complete Laravel application with APIs, database relationships, security, and production configuration.",
                skills: [
                    "Laravel",
                    "REST APIs",
                    "MySQL",
                    "Deployment"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "PHP Documentation",
                topics: [
                    "PHP",
                    "Language Reference"
                ]
            },
            {
                type: "Framework",
                title: "Laravel Documentation",
                topics: [
                    "Laravel",
                    "Eloquent",
                    "Routing"
                ]
            },
            {
                type: "Practice",
                title: "PHP Practice Projects",
                topics: [
                    "CRUD",
                    "Backend Development"
                ]
            }
        ],

        estimatedTimeline: {
            total: "6–8 Months",
            phase1: "4–6 Weeks",
            phase2: "5–7 Weeks",
            phase3: "6–8 Weeks",
            phase4: "5–7 Weeks"
        },

        relatedCareers: [
            "php-developer",
            "backend-developer",
            "full-stack-developer"
        ],

        relatedRoadmaps: [
            "backend-developer",
            "full-stack-developer"
        ],

        cta: {
            title: "Build powerful web applications",
            description: "Start with PHP fundamentals and progress toward Laravel, APIs, databases, and production development.",
            buttonText: "Begin This Journey"
        }
    },

    {
        id: 5,
        slug: "react-developer",
        title: "React Developer Roadmap",
        difficulty: "Intermediate",
        duration: "6–8 Months",
        desc: "Master React, modern JavaScript, component architecture, APIs, routing, TypeScript, and production frontend development.",
        buttonText: "View Roadmap",

        skills: [
            "JavaScript",
            "React",
            "TypeScript",
            "HTML",
            "CSS",
            "State Management",
            "API Integration",
            "Git"
        ],

        technologies: [
            "React",
            "JavaScript",
            "TypeScript",
            "Vite",
            "React Router",
            "Tailwind CSS",
            "Next.js",
            "Git"
        ],

        category: "Web Development",

        keywords: [
            "react",
            "react developer",
            "react js",
            "javascript",
            "frontend"
        ],

        careerId: "react-developer",

        hero: {
            eyebrow: "React Development Roadmap",
            title: "Become a React Developer",
            subtitle: "Build modern interfaces with reusable components and scalable frontend architecture.",
            description: "Learn modern JavaScript, React fundamentals, hooks, routing, state management, APIs, TypeScript, testing, and production React development.",
            difficulty: "Intermediate",
            duration: "6–8 Months",
            primaryCTA: "Begin This Journey",
            secondaryCTA: "Explore Career"
        },

        overview: "This roadmap assumes you have basic web knowledge and takes you deeper into JavaScript and React. You will progress from components and hooks to API-driven applications, TypeScript, testing, performance, and production architecture.",

        phases: [
            {
                id: 1,
                title: "Modern JavaScript",
                duration: "5–7 Weeks",
                focus: "Strengthen the JavaScript knowledge required for professional React development.",
                topics: [
                    "ES6+",
                    "Functions",
                    "Arrays & Objects",
                    "Destructuring",
                    "Spread & Rest",
                    "Modules",
                    "Promises",
                    "Async/Await"
                ]
            },
            {
                id: 2,
                title: "React Foundations",
                duration: "5–7 Weeks",
                focus: "Understand React's component-based programming model.",
                topics: [
                    "JSX",
                    "Components",
                    "Props",
                    "State",
                    "Events",
                    "Conditional Rendering",
                    "Lists",
                    "Forms"
                ]
            },
            {
                id: 3,
                title: "React Applications",
                duration: "7–9 Weeks",
                focus: "Build complete applications using React's core ecosystem.",
                topics: [
                    "Hooks",
                    "React Router",
                    "State Management",
                    "API Integration",
                    "Authentication",
                    "Form Handling",
                    "TypeScript",
                    "Tailwind CSS"
                ]
            },
            {
                id: 4,
                title: "Production React",
                duration: "6–8 Weeks",
                focus: "Develop maintainable, tested, optimized, and deployable React applications.",
                topics: [
                    "Component Architecture",
                    "Performance",
                    "Testing",
                    "Error Handling",
                    "Next.js",
                    "Accessibility",
                    "Deployment",
                    "Production Projects"
                ]
            }
        ],

        projects: [
            {
                title: "React Dashboard",
                level: "Intermediate",
                description: "Build a responsive dashboard using reusable components, routing, and application state.",
                skills: [
                    "React",
                    "Components",
                    "React Router"
                ]
            },
            {
                title: "API-Driven Application",
                level: "Intermediate",
                description: "Create an application that consumes an external API and handles loading, errors, filtering, and state.",
                skills: [
                    "React",
                    "Fetch API",
                    "State Management"
                ]
            },
            {
                title: "React Admin Panel",
                level: "Advanced",
                description: "Build a production-style admin interface with authentication, protected routes, forms, tables, and reusable components.",
                skills: [
                    "React",
                    "Authentication",
                    "Forms",
                    "TypeScript"
                ]
            },
            {
                title: "Production React Application",
                level: "Advanced",
                description: "Design, build, test, optimize, and deploy a complete React application using a scalable architecture.",
                skills: [
                    "React",
                    "TypeScript",
                    "Testing",
                    "Deployment"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "React Documentation",
                topics: [
                    "Components",
                    "Hooks",
                    "State"
                ]
            },
            {
                type: "Documentation",
                title: "JavaScript Documentation",
                topics: [
                    "ES6+",
                    "Promises",
                    "Async JavaScript"
                ]
            },
            {
                type: "Framework",
                title: "Next.js Documentation",
                topics: [
                    "Next.js",
                    "Production React"
                ]
            }
        ],

        estimatedTimeline: {
            total: "6–8 Months",
            phase1: "5–7 Weeks",
            phase2: "5–7 Weeks",
            phase3: "7–9 Weeks",
            phase4: "6–8 Weeks"
        },

        relatedCareers: [
            "react-developer",
            "frontend-developer",
            "full-stack-developer"
        ],

        relatedRoadmaps: [
            "frontend-developer",
            "full-stack-developer"
        ],

        cta: {
            title: "Build modern interfaces with React",
            description: "Master React from JavaScript fundamentals and components to scalable, production-ready applications.",
            buttonText: "Begin This Journey"
        }
    },

    {
        id: 6,
        slug: "python-developer",
        title: "Python Developer Roadmap",
        difficulty: "Beginner to Intermediate",
        duration: "4–6 Months",
        desc: "A structured roadmap to learn Python programming, backend development, APIs, databases, testing, and deployment.",
        buttonText: "View Roadmap",

        skills: [
            "Python",
            "OOP",
            "REST APIs",
            "SQL",
            "Git",
            "Testing"
        ],

        technologies: [
            "Python",
            "FastAPI",
            "Django",
            "PostgreSQL",
            "Git",
            "Docker"
        ],

        category: "Development",
        keywords: [
            "python",
            "python developer",
            "backend",
            "django",
            "fastapi",
            "apis"
        ],

        careerId: "python-developer",

        hero: {
            eyebrow: "Python Development",
            title: "Python Developer Roadmap",
            subtitle: "From Python fundamentals to production-ready applications.",
            description:
                "Learn Python programming, backend frameworks, databases, APIs, testing, and deployment through a structured project-based path.",
            difficulty: "Beginner to Intermediate",
            duration: "4–6 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap takes you from Python fundamentals to building and deploying real-world applications. You will progressively learn programming concepts, object-oriented design, backend development, databases, APIs, testing, and deployment.",

        phases: [
            {
                id: 1,
                title: "Python Fundamentals",
                duration: "3–4 Weeks",
                focus: "Build a strong foundation in Python programming.",
                topics: [
                    "Python syntax and variables",
                    "Data types and operators",
                    "Conditionals and loops",
                    "Functions",
                    "Lists, tuples, sets, and dictionaries",
                    "String manipulation",
                    "Exception handling",
                    "File handling",
                    "Modules and packages"
                ]
            },
            {
                id: 2,
                title: "Object-Oriented Python",
                duration: "2–3 Weeks",
                focus: "Learn how to structure larger Python applications.",
                topics: [
                    "Classes and objects",
                    "Constructors",
                    "Inheritance",
                    "Encapsulation",
                    "Polymorphism",
                    "Abstract classes",
                    "Magic methods",
                    "Python packages",
                    "Virtual environments"
                ]
            },
            {
                id: 3,
                title: "Backend Development",
                duration: "4–5 Weeks",
                focus: "Build server-side applications and APIs with Python.",
                topics: [
                    "HTTP fundamentals",
                    "REST APIs",
                    "FastAPI fundamentals",
                    "Django fundamentals",
                    "Routing",
                    "Request and response handling",
                    "Middleware",
                    "Authentication",
                    "API validation"
                ]
            },
            {
                id: 4,
                title: "Databases & Production",
                duration: "4–5 Weeks",
                focus: "Connect applications to databases and prepare them for production.",
                topics: [
                    "SQL fundamentals",
                    "PostgreSQL",
                    "ORM concepts",
                    "Database relationships",
                    "CRUD operations",
                    "API testing",
                    "Unit testing",
                    "Docker fundamentals",
                    "Deployment"
                ]
            }
        ],

        projects: [
            {
                title: "CLI Task Manager",
                level: "Beginner",
                description:
                    "Build a command-line task manager using Python, file handling, functions, and data structures.",
                skills: [
                    "Python",
                    "Functions",
                    "File Handling",
                    "Data Structures"
                ]
            },
            {
                title: "REST API",
                level: "Intermediate",
                description:
                    "Create a REST API with authentication, CRUD operations, validation, and database integration.",
                skills: [
                    "FastAPI",
                    "REST APIs",
                    "Authentication",
                    "PostgreSQL"
                ]
            },
            {
                title: "Full Stack Python Application",
                level: "Advanced",
                description:
                    "Build and deploy a complete application with a Python backend, database, authentication, testing, and production deployment.",
                skills: [
                    "Python",
                    "Django",
                    "PostgreSQL",
                    "Docker",
                    "Deployment"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Python Documentation",
                topics: ["Python fundamentals", "Standard library"]
            },
            {
                type: "Documentation",
                title: "FastAPI Documentation",
                topics: ["REST APIs", "Backend development"]
            },
            {
                type: "Practice",
                title: "Python Coding Practice",
                topics: ["Problem solving", "Algorithms", "Python"]
            }
        ],

        estimatedTimeline: {
            total: "4–6 Months",
            phase1: "3–4 Weeks",
            phase2: "2–3 Weeks",
            phase3: "4–5 Weeks",
            phase4: "4–5 Weeks"
        },

        relatedCareers: [
            "backend-developer",
            "data-analyst",
            "data-scientist",
            "machine-learning-engineer"
        ],

        relatedRoadmaps: [
            "backend-developer",
            "data-analyst",
            "data-scientist",
            "machine-learning-engineer"
        ],

        cta: {
            title: "Ready to Start Your Python Journey?",
            description:
                "Follow the roadmap step by step, build projects, and develop the skills needed to become a Python Developer.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 7,
        slug: "java-developer",
        title: "Java Developer Roadmap",
        difficulty: "Beginner to Advanced",
        duration: "5–7 Months",
        desc: "Master Java programming, object-oriented development, backend frameworks, databases, testing, and deployment.",
        buttonText: "View Roadmap",

        skills: [
            "Java",
            "OOP",
            "Data Structures",
            "SQL",
            "REST APIs",
            "Spring Boot"
        ],

        technologies: [
            "Java",
            "Spring Boot",
            "Maven",
            "PostgreSQL",
            "JUnit",
            "Docker"
        ],

        category: "Development",
        keywords: [
            "java",
            "java developer",
            "spring boot",
            "backend",
            "enterprise development"
        ],

        careerId: "java-developer",

        hero: {
            eyebrow: "Java Development",
            title: "Java Developer Roadmap",
            subtitle: "Build scalable applications with Java and Spring.",
            description:
                "Learn Java from the fundamentals through object-oriented programming, data structures, backend development, databases, testing, and deployment.",
            difficulty: "Beginner to Advanced",
            duration: "5–7 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap provides a structured path to becoming a Java Developer. Start with Java fundamentals and OOP, then progress into data structures, Spring Boot, databases, testing, and production deployment.",

        phases: [
            {
                id: 1,
                title: "Java Fundamentals",
                duration: "3–4 Weeks",
                focus: "Learn the core language and programming fundamentals.",
                topics: [
                    "Java syntax",
                    "Variables and data types",
                    "Operators",
                    "Conditionals",
                    "Loops",
                    "Methods",
                    "Arrays",
                    "Strings",
                    "Exception handling"
                ]
            },
            {
                id: 2,
                title: "OOP & Data Structures",
                duration: "4–5 Weeks",
                focus: "Develop strong object-oriented and problem-solving skills.",
                topics: [
                    "Classes and objects",
                    "Inheritance",
                    "Encapsulation",
                    "Polymorphism",
                    "Interfaces",
                    "Collections Framework",
                    "Generics",
                    "Data structures",
                    "Algorithms"
                ]
            },
            {
                id: 3,
                title: "Spring Boot Backend",
                duration: "5–6 Weeks",
                focus: "Build production-style backend applications.",
                topics: [
                    "Spring fundamentals",
                    "Spring Boot",
                    "REST APIs",
                    "Controllers",
                    "Services",
                    "Dependency injection",
                    "Validation",
                    "Exception handling",
                    "Authentication"
                ]
            },
            {
                id: 4,
                title: "Database, Testing & Deployment",
                duration: "4–5 Weeks",
                focus: "Connect, test, and deploy Java applications.",
                topics: [
                    "SQL",
                    "PostgreSQL",
                    "JPA and Hibernate",
                    "Database relationships",
                    "JUnit",
                    "Integration testing",
                    "Maven",
                    "Docker",
                    "Deployment"
                ]
            }
        ],

        projects: [
            {
                title: "Java Console Application",
                level: "Beginner",
                description:
                    "Create a console-based application to practice Java syntax, OOP, collections, and exception handling.",
                skills: [
                    "Java",
                    "OOP",
                    "Collections",
                    "Exception Handling"
                ]
            },
            {
                title: "Spring Boot REST API",
                level: "Intermediate",
                description:
                    "Build a REST API with CRUD operations, validation, authentication, and database integration.",
                skills: [
                    "Spring Boot",
                    "REST APIs",
                    "JPA",
                    "PostgreSQL"
                ]
            },
            {
                title: "Production Backend Application",
                level: "Advanced",
                description:
                    "Develop and deploy a complete backend system with authentication, testing, database integration, and containerization.",
                skills: [
                    "Spring Boot",
                    "PostgreSQL",
                    "JUnit",
                    "Docker",
                    "Deployment"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Java Documentation",
                topics: ["Java fundamentals", "Standard library"]
            },
            {
                type: "Documentation",
                title: "Spring Boot Documentation",
                topics: ["Backend development", "REST APIs"]
            },
            {
                type: "Practice",
                title: "Java Coding Practice",
                topics: ["Data structures", "Algorithms", "Problem solving"]
            }
        ],

        estimatedTimeline: {
            total: "5–7 Months",
            phase1: "3–4 Weeks",
            phase2: "4–5 Weeks",
            phase3: "5–6 Weeks",
            phase4: "4–5 Weeks"
        },

        relatedCareers: [
            "backend-developer",
            "full-stack-developer",
            "systems-analyst"
        ],

        relatedRoadmaps: [
            "backend-developer",
            "full-stack-developer",
            "systems-analyst"
        ],

        cta: {
            title: "Ready to Become a Java Developer?",
            description:
                "Follow the roadmap, build real applications, and strengthen your Java development skills through practical projects.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 8,
        slug: "game-developer",
        title: "Game Developer Roadmap",
        difficulty: "Intermediate",
        duration: "6–9 Months",
        desc: "Learn game programming, game engines, graphics, physics, gameplay systems, and game development workflows.",
        buttonText: "View Roadmap",

        skills: [
            "Game Programming",
            "C#",
            "C++",
            "3D Mathematics",
            "Game Design",
            "Debugging"
        ],

        technologies: [
            "Unity",
            "Unreal Engine",
            "C#",
            "C++",
            "Blender",
            "Git"
        ],

        category: "Game Development",
        keywords: [
            "game development",
            "game developer",
            "unity",
            "unreal engine",
            "c sharp",
            "c++"
        ],

        careerId: "game-developer",

        hero: {
            eyebrow: "Game Development",
            title: "Game Developer Roadmap",
            subtitle: "Turn programming concepts into interactive worlds.",
            description:
                "Learn programming, game engines, gameplay systems, physics, graphics, optimization, and deployment through practical game projects.",
            difficulty: "Intermediate",
            duration: "6–9 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap takes you through the core skills required to develop games. You will learn programming, game-engine workflows, gameplay mechanics, physics, graphics, optimization, and publishing.",

        phases: [
            {
                id: 1,
                title: "Programming Foundations",
                duration: "4–5 Weeks",
                focus: "Build the programming foundation required for game development.",
                topics: [
                    "Programming fundamentals",
                    "Object-oriented programming",
                    "Data structures",
                    "Algorithms",
                    "Vectors and mathematics",
                    "Debugging",
                    "Version control",
                    "Game programming concepts"
                ]
            },
            {
                id: 2,
                title: "Game Engine Fundamentals",
                duration: "5–6 Weeks",
                focus: "Learn how modern game engines are structured and used.",
                topics: [
                    "Unity fundamentals",
                    "Unreal Engine fundamentals",
                    "Scenes and levels",
                    "Game objects and components",
                    "Input systems",
                    "Assets",
                    "Prefabs",
                    "Animation basics",
                    "Engine workflows"
                ]
            },
            {
                id: 3,
                title: "Gameplay Systems",
                duration: "6–8 Weeks",
                focus: "Build interactive mechanics and game systems.",
                topics: [
                    "Character controllers",
                    "Collision detection",
                    "Physics",
                    "Combat systems",
                    "Enemy AI",
                    "UI systems",
                    "Audio",
                    "Animation systems",
                    "Game state management"
                ]
            },
            {
                id: 4,
                title: "Optimization & Publishing",
                duration: "5–6 Weeks",
                focus: "Prepare games for release and improve performance.",
                topics: [
                    "Performance profiling",
                    "Optimization",
                    "Memory management",
                    "Lighting",
                    "3D asset pipelines",
                    "Build systems",
                    "Platform deployment",
                    "Game testing",
                    "Publishing workflows"
                ]
            }
        ],

        projects: [
            {
                title: "2D Platformer",
                level: "Beginner",
                description:
                    "Create a simple 2D platform game with player movement, collisions, enemies, collectibles, and levels.",
                skills: [
                    "Game Programming",
                    "Unity",
                    "Physics",
                    "Gameplay"
                ]
            },
            {
                title: "3D Gameplay Prototype",
                level: "Intermediate",
                description:
                    "Build a 3D prototype featuring player controls, enemies, combat, UI, and basic game systems.",
                skills: [
                    "Unity",
                    "C#",
                    "3D Mathematics",
                    "Game Systems"
                ]
            },
            {
                title: "Complete Game Project",
                level: "Advanced",
                description:
                    "Develop a polished game from concept to release, including optimization, testing, and platform deployment.",
                skills: [
                    "Game Design",
                    "Game Engine",
                    "Optimization",
                    "Deployment"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Unity Documentation",
                topics: ["Game engine", "C#", "Gameplay systems"]
            },
            {
                type: "Documentation",
                title: "Unreal Engine Documentation",
                topics: ["Game engine", "C++", "Blueprints"]
            },
            {
                type: "Practice",
                title: "Game Development Challenges",
                topics: ["Gameplay programming", "Game mechanics"]
            }
        ],

        estimatedTimeline: {
            total: "6–9 Months",
            phase1: "4–5 Weeks",
            phase2: "5–6 Weeks",
            phase3: "6–8 Weeks",
            phase4: "5–6 Weeks"
        },

        relatedCareers: [
            "frontend-developer",
            "mobile-app-developer"
        ],

        relatedRoadmaps: [
            "frontend-developer",
            "mobile-app-developer"
        ],

        cta: {
            title: "Ready to Build Your First Game?",
            description:
                "Learn the fundamentals, experiment with game engines, and turn your ideas into playable experiences.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 9,
        slug: "mobile-app-developer",
        title: "Mobile App Developer Roadmap",
        difficulty: "Intermediate",
        duration: "5–7 Months",
        desc: "Learn mobile application development, UI, APIs, state management, databases, testing, and app deployment.",
        buttonText: "View Roadmap",

        skills: [
            "Mobile Development",
            "UI Development",
            "State Management",
            "REST APIs",
            "Databases",
            "App Deployment"
        ],

        technologies: [
            "React Native",
            "Flutter",
            "JavaScript",
            "Dart",
            "Firebase",
            "Git"
        ],

        category: "Mobile Development",
        keywords: [
            "mobile development",
            "mobile app developer",
            "react native",
            "flutter",
            "android",
            "ios"
        ],

        careerId: "mobile-app-developer",

        hero: {
            eyebrow: "Mobile Development",
            title: "Mobile App Developer Roadmap",
            subtitle: "Build modern applications for mobile devices.",
            description:
                "Learn mobile UI development, navigation, state management, APIs, authentication, local storage, testing, and app publishing.",
            difficulty: "Intermediate",
            duration: "5–7 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap introduces the complete mobile development workflow, from building responsive mobile interfaces to connecting APIs, managing application state, testing applications, and publishing apps.",

        phases: [
            {
                id: 1,
                title: "Mobile Development Foundations",
                duration: "3–4 Weeks",
                focus: "Understand mobile application concepts and development fundamentals.",
                topics: [
                    "Mobile application architecture",
                    "Programming fundamentals",
                    "Mobile UI principles",
                    "Responsive layouts",
                    "Navigation",
                    "User input",
                    "Component-based development",
                    "Git and GitHub"
                ]
            },
            {
                id: 2,
                title: "Build Mobile Interfaces",
                duration: "4–5 Weeks",
                focus: "Create polished and interactive mobile interfaces.",
                topics: [
                    "React Native or Flutter",
                    "Components and widgets",
                    "Layouts",
                    "Styling",
                    "Lists",
                    "Forms",
                    "Animations",
                    "Navigation",
                    "Reusable UI"
                ]
            },
            {
                id: 3,
                title: "APIs & Application State",
                duration: "5–6 Weeks",
                focus: "Connect mobile applications to real-world data and services.",
                topics: [
                    "REST APIs",
                    "HTTP requests",
                    "Authentication",
                    "State management",
                    "Async operations",
                    "Local storage",
                    "Firebase",
                    "Push notifications",
                    "Error handling"
                ]
            },
            {
                id: 4,
                title: "Testing & App Deployment",
                duration: "4–5 Weeks",
                focus: "Prepare applications for production and app stores.",
                topics: [
                    "Testing fundamentals",
                    "Debugging",
                    "Performance optimization",
                    "App configuration",
                    "Build generation",
                    "App signing",
                    "Play Store deployment",
                    "App Store deployment",
                    "Release management"
                ]
            }
        ],

        projects: [
            {
                title: "Habit Tracker App",
                level: "Beginner",
                description:
                    "Build a mobile habit tracker with reusable components, forms, local storage, and basic navigation.",
                skills: [
                    "Mobile UI",
                    "State Management",
                    "Local Storage",
                    "Navigation"
                ]
            },
            {
                title: "E-Commerce Mobile App",
                level: "Intermediate",
                description:
                    "Create a shopping application with product listings, authentication, cart management, APIs, and checkout flows.",
                skills: [
                    "React Native",
                    "REST APIs",
                    "Authentication",
                    "State Management"
                ]
            },
            {
                title: "Production Mobile Application",
                level: "Advanced",
                description:
                    "Build, test, optimize, and publish a complete mobile application with a production backend.",
                skills: [
                    "Mobile Development",
                    "APIs",
                    "Testing",
                    "Deployment"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "React Native Documentation",
                topics: ["Mobile development", "React Native"]
            },
            {
                type: "Documentation",
                title: "Flutter Documentation",
                topics: ["Mobile development", "Dart", "Flutter"]
            },
            {
                type: "Practice",
                title: "Mobile UI Challenges",
                topics: ["UI development", "Responsive layouts"]
            }
        ],

        estimatedTimeline: {
            total: "5–7 Months",
            phase1: "3–4 Weeks",
            phase2: "4–5 Weeks",
            phase3: "5–6 Weeks",
            phase4: "4–5 Weeks"
        },

        relatedCareers: [
            "ios-developer",
            "android-developer",
            "frontend-developer"
        ],

        relatedRoadmaps: [
            "ios-developer",
            "android-developer",
            "frontend-developer"
        ],

        cta: {
            title: "Ready to Build Mobile Apps?",
            description:
                "Follow the roadmap, build mobile projects, and develop the skills needed to create production-ready applications.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 10,
        slug: "ios-developer",
        title: "iOS Developer Roadmap",
        difficulty: "Intermediate",
        duration: "5–7 Months",
        desc: "Learn iOS development with Swift, SwiftUI, UIKit, networking, persistence, testing, and App Store deployment.",
        buttonText: "View Roadmap",

        skills: [
            "Swift",
            "SwiftUI",
            "UIKit",
            "iOS Development",
            "REST APIs",
            "Testing"
        ],

        technologies: [
            "Swift",
            "SwiftUI",
            "UIKit",
            "Xcode",
            "Core Data",
            "Git"
        ],

        category: "Mobile Development",
        keywords: [
            "ios",
            "ios developer",
            "swift",
            "swiftui",
            "apple development",
            "iphone apps"
        ],

        careerId: "ios-developer",

        hero: {
            eyebrow: "iOS Development",
            title: "iOS Developer Roadmap",
            subtitle: "Build native applications for the Apple ecosystem.",
            description:
                "Learn Swift, SwiftUI, UIKit, application architecture, networking, data persistence, testing, and App Store deployment.",
            difficulty: "Intermediate",
            duration: "5–7 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap provides a structured path to native iOS development. Start with Swift and Apple's development ecosystem, then progress into UI development, networking, persistence, testing, and App Store release workflows.",

        phases: [
            {
                id: 1,
                title: "Swift Fundamentals",
                duration: "3–4 Weeks",
                focus: "Build a strong foundation in Swift programming.",
                topics: [
                    "Swift syntax",
                    "Variables and constants",
                    "Data types",
                    "Control flow",
                    "Functions",
                    "Collections",
                    "Optionals",
                    "Closures",
                    "Error handling"
                ]
            },
            {
                id: 2,
                title: "SwiftUI & iOS UI",
                duration: "4–5 Weeks",
                focus: "Build modern native iOS interfaces.",
                topics: [
                    "SwiftUI fundamentals",
                    "Views",
                    "Layouts",
                    "Modifiers",
                    "Navigation",
                    "Lists",
                    "Forms",
                    "Animations",
                    "UIKit fundamentals"
                ]
            },
            {
                id: 3,
                title: "Data & Networking",
                duration: "5–6 Weeks",
                focus: "Build data-driven applications connected to external services.",
                topics: [
                    "REST APIs",
                    "URLSession",
                    "JSON decoding",
                    "Async programming",
                    "State management",
                    "UserDefaults",
                    "Core Data",
                    "Authentication",
                    "Error handling"
                ]
            },
            {
                id: 4,
                title: "Testing & App Store Release",
                duration: "4–5 Weeks",
                focus: "Prepare applications for production release.",
                topics: [
                    "Unit testing",
                    "UI testing",
                    "Debugging",
                    "Performance optimization",
                    "App configuration",
                    "App signing",
                    "TestFlight",
                    "App Store Connect",
                    "App Store deployment"
                ]
            }
        ],

        projects: [
            {
                title: "Notes App",
                level: "Beginner",
                description:
                    "Build a native notes application with SwiftUI, navigation, forms, and local persistence.",
                skills: [
                    "Swift",
                    "SwiftUI",
                    "Navigation",
                    "Persistence"
                ]
            },
            {
                title: "Weather App",
                level: "Intermediate",
                description:
                    "Create a weather application that consumes a REST API and displays dynamic weather information.",
                skills: [
                    "SwiftUI",
                    "REST APIs",
                    "Networking",
                    "JSON"
                ]
            },
            {
                title: "Production iOS App",
                level: "Advanced",
                description:
                    "Build and publish a complete iOS application with authentication, persistence, networking, testing, and App Store deployment.",
                skills: [
                    "Swift",
                    "SwiftUI",
                    "Core Data",
                    "Testing",
                    "Deployment"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Apple Developer Documentation",
                topics: ["iOS development", "Swift", "Apple frameworks"]
            },
            {
                type: "Documentation",
                title: "Swift Documentation",
                topics: ["Swift fundamentals", "Language features"]
            },
            {
                type: "Practice",
                title: "Swift Coding Practice",
                topics: ["Swift", "Problem solving"]
            }
        ],

        estimatedTimeline: {
            total: "5–7 Months",
            phase1: "3–4 Weeks",
            phase2: "4–5 Weeks",
            phase3: "5–6 Weeks",
            phase4: "4–5 Weeks"
        },

        relatedCareers: [
            "mobile-app-developer",
            "android-developer",
            "frontend-developer"
        ],

        relatedRoadmaps: [
            "mobile-app-developer",
            "android-developer",
            "frontend-developer"
        ],

        cta: {
            title: "Ready to Build for iOS?",
            description:
                "Learn Swift, build native applications, and develop the skills required to ship polished iOS experiences.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 11,
        slug: "android-developer",
        title: "Android Developer Roadmap",
        difficulty: "Intermediate",
        duration: "5–7 Months",
        desc: "Learn Android development, Kotlin, Jetpack Compose, APIs, databases, testing, and Play Store deployment.",
        buttonText: "View Roadmap",

        skills: [
            "Kotlin",
            "Android Development",
            "UI Development",
            "REST APIs",
            "Database Management",
            "Testing"
        ],

        technologies: [
            "Kotlin",
            "Jetpack Compose",
            "Android Studio",
            "Room",
            "Firebase",
            "Git"
        ],

        category: "Mobile Development",
        keywords: [
            "android",
            "android developer",
            "kotlin",
            "jetpack compose",
            "mobile development"
        ],

        careerId: "android-developer",

        hero: {
            eyebrow: "Android Development",
            title: "Android Developer Roadmap",
            subtitle: "Build modern native applications for Android.",
            description:
                "Learn Kotlin, Android fundamentals, Jetpack Compose, application architecture, networking, local storage, testing, and Play Store deployment.",
            difficulty: "Intermediate",
            duration: "5–7 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap takes you through native Android development, starting with Kotlin and Android fundamentals and progressing into modern UI development, networking, persistence, testing, and production deployment.",

        phases: [
            {
                id: 1,
                title: "Kotlin Fundamentals",
                duration: "3–4 Weeks",
                focus: "Build a strong programming foundation with Kotlin.",
                topics: [
                    "Kotlin syntax",
                    "Variables and data types",
                    "Control flow",
                    "Functions",
                    "Collections",
                    "Null safety",
                    "Classes and objects",
                    "Inheritance",
                    "Exception handling"
                ]
            },
            {
                id: 2,
                title: "Android & UI Development",
                duration: "4–5 Weeks",
                focus: "Learn Android application fundamentals and modern UI development.",
                topics: [
                    "Android Studio",
                    "Android project structure",
                    "Jetpack Compose",
                    "Composables",
                    "Layouts",
                    "State management",
                    "Navigation",
                    "Lists",
                    "Material Design"
                ]
            },
            {
                id: 3,
                title: "Data & Networking",
                duration: "5–6 Weeks",
                focus: "Build data-driven Android applications.",
                topics: [
                    "REST APIs",
                    "HTTP requests",
                    "JSON",
                    "Coroutines",
                    "Authentication",
                    "Room database",
                    "Local storage",
                    "Firebase",
                    "Error handling"
                ]
            },
            {
                id: 4,
                title: "Testing & Deployment",
                duration: "4–5 Weeks",
                focus: "Prepare applications for production and Play Store release.",
                topics: [
                    "Unit testing",
                    "UI testing",
                    "Debugging",
                    "Performance optimization",
                    "App configuration",
                    "Build variants",
                    "App signing",
                    "Google Play Console",
                    "Play Store deployment"
                ]
            }
        ],

        projects: [
            {
                title: "Expense Tracker",
                level: "Beginner",
                description:
                    "Build an Android expense tracker with forms, lists, categories, and local data persistence.",
                skills: [
                    "Kotlin",
                    "Jetpack Compose",
                    "Room",
                    "State Management"
                ]
            },
            {
                title: "News Reader App",
                level: "Intermediate",
                description:
                    "Create a news application that consumes a REST API and displays dynamic content with search and categories.",
                skills: [
                    "Kotlin",
                    "REST APIs",
                    "Coroutines",
                    "Jetpack Compose"
                ]
            },
            {
                title: "Production Android App",
                level: "Advanced",
                description:
                    "Build, test, optimize, and publish a complete Android application with authentication, networking, persistence, and production deployment.",
                skills: [
                    "Kotlin",
                    "Compose",
                    "Room",
                    "Firebase",
                    "Testing"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Android Developers",
                topics: ["Android development", "Jetpack Compose", "Architecture"]
            },
            {
                type: "Documentation",
                title: "Kotlin Documentation",
                topics: ["Kotlin", "Language fundamentals"]
            },
            {
                type: "Practice",
                title: "Kotlin Coding Practice",
                topics: ["Kotlin", "Problem solving"]
            }
        ],

        estimatedTimeline: {
            total: "5–7 Months",
            phase1: "3–4 Weeks",
            phase2: "4–5 Weeks",
            phase3: "5–6 Weeks",
            phase4: "4–5 Weeks"
        },

        relatedCareers: [
            "mobile-app-developer",
            "ios-developer",
            "frontend-developer"
        ],

        relatedRoadmaps: [
            "mobile-app-developer",
            "ios-developer",
            "frontend-developer"
        ],

        cta: {
            title: "Ready to Build for Android?",
            description:
                "Learn Kotlin, build native Android applications, and develop the skills needed to publish production-ready apps.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 12,
        slug: "ui-ux-designer",
        title: "UI/UX Designer Roadmap",
        difficulty: "Beginner to Intermediate",
        duration: "4–6 Months",
        desc: "Learn user research, UX principles, wireframing, visual design, prototyping, design systems, and usability testing.",
        buttonText: "View Roadmap",

        skills: [
            "UX Research",
            "Wireframing",
            "UI Design",
            "Prototyping",
            "Design Systems",
            "Usability Testing"
        ],

        technologies: [
            "Figma",
            "FigJam",
            "Adobe XD",
            "Photoshop",
            "Illustrator"
        ],

        category: "Design",
        keywords: [
            "ui ux",
            "ui designer",
            "ux designer",
            "figma",
            "user experience",
            "product design"
        ],

        careerId: "ui-ux-designer",

        hero: {
            eyebrow: "UI/UX Design",
            title: "UI/UX Designer Roadmap",
            subtitle: "Design digital experiences people enjoy using.",
            description:
                "Learn UX research, information architecture, wireframing, visual design, prototyping, design systems, and usability testing.",
            difficulty: "Beginner to Intermediate",
            duration: "4–6 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap takes you from design fundamentals to creating complete user experiences. You will learn how to research users, structure information, create wireframes, design interfaces, build prototypes, and validate your designs.",

        phases: [
            {
                id: 1,
                title: "Design Foundations",
                duration: "3–4 Weeks",
                focus: "Understand the fundamental principles behind effective digital design.",
                topics: [
                    "Design principles",
                    "Color theory",
                    "Typography",
                    "Layout and composition",
                    "Visual hierarchy",
                    "Spacing",
                    "Accessibility",
                    "Design patterns"
                ]
            },
            {
                id: 2,
                title: "UX Research & Wireframing",
                duration: "4–5 Weeks",
                focus: "Learn how to understand users and structure experiences.",
                topics: [
                    "User research",
                    "User interviews",
                    "Personas",
                    "User journeys",
                    "Information architecture",
                    "User flows",
                    "Wireframes",
                    "Usability problems",
                    "UX documentation"
                ]
            },
            {
                id: 3,
                title: "UI Design & Prototyping",
                duration: "5–6 Weeks",
                focus: "Turn UX concepts into polished interfaces and interactive prototypes.",
                topics: [
                    "High-fidelity design",
                    "Figma fundamentals",
                    "Components",
                    "Variants",
                    "Auto layout",
                    "Responsive design",
                    "Interactive prototypes",
                    "Micro-interactions",
                    "Design systems"
                ]
            },
            {
                id: 4,
                title: "Testing & Portfolio",
                duration: "4–5 Weeks",
                focus: "Validate designs and create a professional design portfolio.",
                topics: [
                    "Usability testing",
                    "Design iteration",
                    "Accessibility review",
                    "Design handoff",
                    "Developer collaboration",
                    "Case studies",
                    "Portfolio presentation",
                    "Design critique",
                    "Client presentation"
                ]
            }
        ],

        projects: [
            {
                title: "Mobile App Redesign",
                level: "Beginner",
                description:
                    "Analyze an existing mobile experience and redesign its key screens using UX and visual design principles.",
                skills: [
                    "UX Research",
                    "Wireframing",
                    "UI Design",
                    "Figma"
                ]
            },
            {
                title: "E-Commerce Experience",
                level: "Intermediate",
                description:
                    "Design a complete shopping experience covering discovery, product details, cart, checkout, and account flows.",
                skills: [
                    "User Flows",
                    "UI Design",
                    "Prototyping",
                    "Design Systems"
                ]
            },
            {
                title: "Complete Product Case Study",
                level: "Advanced",
                description:
                    "Take a product from user research through final UI, prototype, usability testing, and a polished portfolio case study.",
                skills: [
                    "UX Research",
                    "UI Design",
                    "Prototyping",
                    "Usability Testing"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Design Tool",
                title: "Figma",
                topics: ["UI design", "Wireframing", "Prototyping"]
            },
            {
                type: "Practice",
                title: "UI Design Challenges",
                topics: ["Visual design", "Interface design"]
            },
            {
                type: "Reference",
                title: "Design Systems",
                topics: ["Components", "Patterns", "Consistency"]
            }
        ],

        estimatedTimeline: {
            total: "4–6 Months",
            phase1: "3–4 Weeks",
            phase2: "4–5 Weeks",
            phase3: "5–6 Weeks",
            phase4: "4–5 Weeks"
        },

        relatedCareers: [
            "frontend-developer",
            "product-manager",
            "systems-analyst"
        ],

        relatedRoadmaps: [
            "frontend-developer",
            "product-manager",
            "systems-analyst"
        ],

        cta: {
            title: "Ready to Design Better Experiences?",
            description:
                "Build your design skills through research, practice, real projects, and polished case studies.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 13,
        slug: "data-analyst",
        title: "Data Analyst Roadmap",
        difficulty: "Beginner to Intermediate",
        duration: "4–6 Months",
        desc: "Learn data analysis, SQL, spreadsheets, Python, statistics, visualization, dashboards, and business reporting.",
        buttonText: "View Roadmap",

        skills: [
            "Data Analysis",
            "SQL",
            "Statistics",
            "Data Visualization",
            "Excel",
            "Python"
        ],

        technologies: [
            "Excel",
            "SQL",
            "Python",
            "Pandas",
            "Power BI",
            "Tableau"
        ],

        category: "Data",
        keywords: [
            "data analyst",
            "data analysis",
            "sql",
            "excel",
            "power bi",
            "python"
        ],

        careerId: "data-analyst",

        hero: {
            eyebrow: "Data Analytics",
            title: "Data Analyst Roadmap",
            subtitle: "Turn raw data into useful business insights.",
            description:
                "Learn spreadsheets, SQL, statistics, Python, data cleaning, visualization, dashboards, and analytical storytelling.",
            difficulty: "Beginner to Intermediate",
            duration: "4–6 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap takes you from basic data handling to professional analysis. You will learn how to clean, query, analyze, visualize, and communicate data to support better decisions.",

        phases: [
            {
                id: 1,
                title: "Data Fundamentals",
                duration: "3–4 Weeks",
                focus: "Build foundational analytical and spreadsheet skills.",
                topics: [
                    "Data types",
                    "Descriptive statistics",
                    "Excel fundamentals",
                    "Formulas and functions",
                    "Sorting and filtering",
                    "Pivot tables",
                    "Data cleaning",
                    "Basic charts"
                ]
            },
            {
                id: 2,
                title: "SQL & Databases",
                duration: "4–5 Weeks",
                focus: "Learn how to retrieve and manipulate data from databases.",
                topics: [
                    "SQL syntax",
                    "SELECT queries",
                    "Filtering",
                    "Sorting",
                    "Aggregations",
                    "GROUP BY",
                    "JOINs",
                    "Subqueries",
                    "Window functions"
                ]
            },
            {
                id: 3,
                title: "Python for Data Analysis",
                duration: "4–5 Weeks",
                focus: "Use Python to automate and deepen your analysis.",
                topics: [
                    "Python fundamentals",
                    "NumPy",
                    "Pandas",
                    "DataFrames",
                    "Data cleaning",
                    "Data transformation",
                    "Exploratory data analysis",
                    "Matplotlib",
                    "Data visualization"
                ]
            },
            {
                id: 4,
                title: "Dashboards & Business Insights",
                duration: "4–5 Weeks",
                focus: "Communicate analytical findings through dashboards and reports.",
                topics: [
                    "Power BI",
                    "Tableau",
                    "Dashboard design",
                    "KPIs",
                    "Business metrics",
                    "Data storytelling",
                    "Report building",
                    "Insight generation",
                    "Portfolio projects"
                ]
            }
        ],

        projects: [
            {
                title: "Sales Data Analysis",
                level: "Beginner",
                description:
                    "Analyze a sales dataset using spreadsheets to identify trends, top products, and performance metrics.",
                skills: [
                    "Excel",
                    "Data Cleaning",
                    "Pivot Tables",
                    "Data Visualization"
                ]
            },
            {
                title: "SQL Business Analysis",
                level: "Intermediate",
                description:
                    "Use SQL to analyze customer, sales, and product data and answer real-world business questions.",
                skills: [
                    "SQL",
                    "Joins",
                    "Aggregations",
                    "Data Analysis"
                ]
            },
            {
                title: "Interactive Analytics Dashboard",
                level: "Advanced",
                description:
                    "Build a professional dashboard that combines cleaned data, KPIs, visualizations, and actionable business insights.",
                skills: [
                    "Python",
                    "SQL",
                    "Power BI",
                    "Data Visualization"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Practice",
                title: "SQL Practice",
                topics: ["SQL", "Queries", "Data analysis"]
            },
            {
                type: "Documentation",
                title: "Pandas Documentation",
                topics: ["Python", "Data manipulation", "Data analysis"]
            },
            {
                type: "Practice",
                title: "Data Analytics Projects",
                topics: ["Data cleaning", "Visualization", "Business analysis"]
            }
        ],

        estimatedTimeline: {
            total: "4–6 Months",
            phase1: "3–4 Weeks",
            phase2: "4–5 Weeks",
            phase3: "4–5 Weeks",
            phase4: "4–5 Weeks"
        },

        relatedCareers: [
            "data-scientist",
            "data-engineer",
            "business-analyst"
        ],

        relatedRoadmaps: [
            "data-scientist",
            "data-engineer",
            "business-analyst"
        ],

        cta: {
            title: "Ready to Work With Data?",
            description:
                "Learn to transform raw datasets into clear insights that can support real business decisions.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 14,
        slug: "ai-machine-learning-engineer",
        title: "AI & Machine Learning Engineer Roadmap",
        difficulty: "Intermediate to Advanced",
        duration: "8–12 Months",
        desc: "Learn Python, mathematics, machine learning, deep learning, model development, APIs, and AI deployment.",
        buttonText: "View Roadmap",

        skills: [
            "Python",
            "Machine Learning",
            "Deep Learning",
            "Statistics",
            "Model Development",
            "AI Deployment"
        ],

        technologies: [
            "Python",
            "NumPy",
            "Pandas",
            "Scikit-learn",
            "PyTorch",
            "TensorFlow"
        ],

        category: "AI & Machine Learning",
        keywords: [
            "ai",
            "machine learning",
            "ml engineer",
            "deep learning",
            "artificial intelligence",
            "python"
        ],

        careerId: "ai-machine-learning-engineer",

        hero: {
            eyebrow: "AI & Machine Learning",
            title: "AI & Machine Learning Engineer Roadmap",
            subtitle: "Build intelligent systems from data and models.",
            description:
                "Learn Python, mathematics, statistics, machine learning, deep learning, model evaluation, AI systems, and production deployment.",
            difficulty: "Intermediate to Advanced",
            duration: "8–12 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap provides a structured path into AI and machine learning engineering. You will build foundations in programming and mathematics before progressing into machine learning, deep learning, model development, and deployment.",

        phases: [
            {
                id: 1,
                title: "Python, Math & Statistics",
                duration: "5–7 Weeks",
                focus: "Build the mathematical and programming foundations required for machine learning.",
                topics: [
                    "Python fundamentals",
                    "NumPy",
                    "Pandas",
                    "Linear algebra",
                    "Probability",
                    "Statistics",
                    "Calculus fundamentals",
                    "Data preprocessing",
                    "Data visualization"
                ]
            },
            {
                id: 2,
                title: "Machine Learning",
                duration: "6–8 Weeks",
                focus: "Understand and implement core machine learning algorithms.",
                topics: [
                    "Supervised learning",
                    "Unsupervised learning",
                    "Regression",
                    "Classification",
                    "Clustering",
                    "Feature engineering",
                    "Model evaluation",
                    "Cross-validation",
                    "Scikit-learn"
                ]
            },
            {
                id: 3,
                title: "Deep Learning & AI",
                duration: "7–9 Weeks",
                focus: "Build neural-network-based AI systems.",
                topics: [
                    "Neural networks",
                    "Backpropagation",
                    "Deep learning",
                    "CNNs",
                    "RNNs",
                    "Transformers",
                    "PyTorch",
                    "TensorFlow",
                    "Model fine-tuning"
                ]
            },
            {
                id: 4,
                title: "AI Engineering & Deployment",
                duration: "6–8 Weeks",
                focus: "Turn trained models into usable production systems.",
                topics: [
                    "Model serving",
                    "REST APIs",
                    "FastAPI",
                    "Model versioning",
                    "Docker",
                    "Cloud deployment",
                    "Monitoring",
                    "Performance optimization",
                    "AI application architecture"
                ]
            }
        ],

        projects: [
            {
                title: "House Price Predictor",
                level: "Beginner",
                description:
                    "Build a regression model that predicts house prices from structured property data.",
                skills: [
                    "Python",
                    "Pandas",
                    "Scikit-learn",
                    "Regression"
                ]
            },
            {
                title: "Image Classification System",
                level: "Intermediate",
                description:
                    "Train a neural network to classify images and evaluate its performance on unseen data.",
                skills: [
                    "Python",
                    "Deep Learning",
                    "CNNs",
                    "PyTorch"
                ]
            },
            {
                title: "Production AI Application",
                level: "Advanced",
                description:
                    "Build an AI-powered application that serves a trained model through an API and deploy it to a production environment.",
                skills: [
                    "Machine Learning",
                    "FastAPI",
                    "Docker",
                    "Model Deployment"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Scikit-learn Documentation",
                topics: ["Machine learning", "Model evaluation"]
            },
            {
                type: "Documentation",
                title: "PyTorch Documentation",
                topics: ["Deep learning", "Neural networks"]
            },
            {
                type: "Practice",
                title: "Machine Learning Projects",
                topics: ["ML", "Data preprocessing", "Model development"]
            }
        ],

        estimatedTimeline: {
            total: "8–12 Months",
            phase1: "5–7 Weeks",
            phase2: "6–8 Weeks",
            phase3: "7–9 Weeks",
            phase4: "6–8 Weeks"
        },

        relatedCareers: [
            "machine-learning-engineer",
            "ai-engineer",
            "data-scientist",
            "mlops-engineer"
        ],

        relatedRoadmaps: [
            "machine-learning-engineer",
            "ai-engineer",
            "data-scientist",
            "mlops-engineer"
        ],

        cta: {
            title: "Ready to Build Intelligent Systems?",
            description:
                "Develop strong foundations in data, machine learning, and AI, then turn your models into real applications.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 15,
        slug: "data-scientist",
        title: "Data Scientist Roadmap",
        difficulty: "Intermediate to Advanced",
        duration: "7–10 Months",
        desc: "Learn statistics, Python, SQL, data analysis, machine learning, experimentation, visualization, and predictive modeling.",
        buttonText: "View Roadmap",

        skills: [
            "Python",
            "Statistics",
            "SQL",
            "Data Analysis",
            "Machine Learning",
            "Data Visualization"
        ],

        technologies: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "SQL",
            "Jupyter"
        ],

        category: "Data & AI",
        keywords: [
            "data scientist",
            "data science",
            "machine learning",
            "statistics",
            "python",
            "analytics"
        ],

        careerId: "data-scientist",

        hero: {
            eyebrow: "Data Science",
            title: "Data Scientist Roadmap",
            subtitle: "Discover patterns, build models, and turn data into decisions.",
            description:
                "Learn statistics, Python, SQL, exploratory analysis, machine learning, experimentation, visualization, and predictive modeling.",
            difficulty: "Intermediate to Advanced",
            duration: "7–10 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap combines programming, statistics, analytics, and machine learning to prepare you for data science work. You will learn to investigate datasets, identify patterns, build predictive models, and communicate findings.",

        phases: [
            {
                id: 1,
                title: "Python, SQL & Statistics",
                duration: "5–6 Weeks",
                focus: "Build the analytical foundations needed for data science.",
                topics: [
                    "Python",
                    "NumPy",
                    "Pandas",
                    "SQL",
                    "Probability",
                    "Descriptive statistics",
                    "Inferential statistics",
                    "Data cleaning",
                    "Data visualization"
                ]
            },
            {
                id: 2,
                title: "Exploratory Data Analysis",
                duration: "4–5 Weeks",
                focus: "Learn to investigate datasets and discover meaningful patterns.",
                topics: [
                    "Exploratory data analysis",
                    "Data transformation",
                    "Missing data",
                    "Outlier detection",
                    "Feature analysis",
                    "Correlation",
                    "Visualization",
                    "Statistical interpretation",
                    "Data storytelling"
                ]
            },
            {
                id: 3,
                title: "Machine Learning",
                duration: "6–8 Weeks",
                focus: "Develop predictive and analytical machine learning models.",
                topics: [
                    "Supervised learning",
                    "Unsupervised learning",
                    "Regression",
                    "Classification",
                    "Clustering",
                    "Feature engineering",
                    "Model selection",
                    "Model evaluation",
                    "Hyperparameter tuning"
                ]
            },
            {
                id: 4,
                title: "Advanced Data Science",
                duration: "5–7 Weeks",
                focus: "Apply data science techniques to realistic business and research problems.",
                topics: [
                    "Experimentation",
                    "A/B testing",
                    "Time series fundamentals",
                    "Feature selection",
                    "Model interpretation",
                    "Advanced visualization",
                    "End-to-end projects",
                    "Model deployment basics",
                    "Portfolio development"
                ]
            }
        ],

        projects: [
            {
                title: "Exploratory Data Analysis",
                level: "Beginner",
                description:
                    "Analyze a real-world dataset, clean the data, identify patterns, and communicate the most important findings.",
                skills: [
                    "Python",
                    "Pandas",
                    "Statistics",
                    "Visualization"
                ]
            },
            {
                title: "Customer Churn Prediction",
                level: "Intermediate",
                description:
                    "Build a machine learning model that identifies customers likely to leave a service.",
                skills: [
                    "Python",
                    "Feature Engineering",
                    "Classification",
                    "Scikit-learn"
                ]
            },
            {
                title: "End-to-End Data Science Project",
                level: "Advanced",
                description:
                    "Solve a complete business problem from data collection and analysis through modeling, evaluation, and presentation.",
                skills: [
                    "SQL",
                    "Python",
                    "Statistics",
                    "Machine Learning",
                    "Data Visualization"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Pandas Documentation",
                topics: ["Data manipulation", "Data analysis"]
            },
            {
                type: "Documentation",
                title: "Scikit-learn Documentation",
                topics: ["Machine learning", "Model evaluation"]
            },
            {
                type: "Practice",
                title: "Data Science Projects",
                topics: ["EDA", "Statistics", "Machine learning"]
            }
        ],

        estimatedTimeline: {
            total: "7–10 Months",
            phase1: "5–6 Weeks",
            phase2: "4–5 Weeks",
            phase3: "6–8 Weeks",
            phase4: "5–7 Weeks"
        },

        relatedCareers: [
            "data-analyst",
            "machine-learning-engineer",
            "ai-machine-learning-engineer",
            "data-engineer"
        ],

        relatedRoadmaps: [
            "data-analyst",
            "machine-learning-engineer",
            "ai-machine-learning-engineer",
            "data-engineer"
        ],

        cta: {
            title: "Ready to Turn Data Into Insights?",
            description:
                "Build your foundation in statistics, programming, analytics, and machine learning through practical data science projects.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 16,
        slug: "data-engineer",
        title: "Data Engineer Roadmap",
        difficulty: "Intermediate to Advanced",
        duration: "6–9 Months",
        desc: "Learn data engineering, SQL, Python, databases, data pipelines, ETL, cloud platforms, and distributed data systems.",
        buttonText: "View Roadmap",

        skills: [
            "Python",
            "SQL",
            "Data Modeling",
            "ETL",
            "Data Pipelines",
            "Cloud"
        ],

        technologies: [
            "Python",
            "SQL",
            "PostgreSQL",
            "Apache Spark",
            "Airflow",
            "Docker"
        ],

        category: "Data Engineering",
        keywords: [
            "data engineer",
            "data engineering",
            "etl",
            "data pipelines",
            "spark",
            "airflow"
        ],

        careerId: "data-engineer",

        hero: {
            eyebrow: "Data Engineering",
            title: "Data Engineer Roadmap",
            subtitle: "Build the systems that move and transform data.",
            description:
                "Learn databases, SQL, Python, data modeling, ETL pipelines, distributed processing, orchestration, and cloud-based data infrastructure.",
            difficulty: "Intermediate to Advanced",
            duration: "6–9 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap teaches you how to design and build reliable data systems. You will progress from SQL and database fundamentals into data modeling, ETL pipelines, distributed processing, orchestration, and cloud infrastructure.",

        phases: [
            {
                id: 1,
                title: "SQL, Python & Databases",
                duration: "4–5 Weeks",
                focus: "Build the programming and database foundations required for data engineering.",
                topics: [
                    "Python fundamentals",
                    "Advanced Python",
                    "SQL",
                    "Relational databases",
                    "PostgreSQL",
                    "Indexes",
                    "Transactions",
                    "Database normalization",
                    "Query optimization"
                ]
            },
            {
                id: 2,
                title: "Data Modeling & ETL",
                duration: "5–6 Weeks",
                focus: "Learn how to structure, transform, and move data between systems.",
                topics: [
                    "Data modeling",
                    "Dimensional modeling",
                    "Data warehouses",
                    "ETL",
                    "ELT",
                    "Data ingestion",
                    "Data transformation",
                    "Data quality",
                    "Batch processing"
                ]
            },
            {
                id: 3,
                title: "Pipelines & Distributed Systems",
                duration: "6–8 Weeks",
                focus: "Build scalable data pipelines and processing workflows.",
                topics: [
                    "Apache Spark",
                    "Distributed processing",
                    "Data lakes",
                    "Apache Airflow",
                    "Workflow orchestration",
                    "Scheduling",
                    "Streaming fundamentals",
                    "Kafka fundamentals",
                    "Pipeline monitoring"
                ]
            },
            {
                id: 4,
                title: "Cloud & Production Data Systems",
                duration: "5–7 Weeks",
                focus: "Deploy reliable data infrastructure in production environments.",
                topics: [
                    "Cloud fundamentals",
                    "Cloud storage",
                    "Cloud databases",
                    "Docker",
                    "CI/CD",
                    "Security fundamentals",
                    "Infrastructure monitoring",
                    "Data pipeline optimization",
                    "Production architecture"
                ]
            }
        ],

        projects: [
            {
                title: "Data Cleaning Pipeline",
                level: "Beginner",
                description:
                    "Build a Python-based pipeline that reads raw data, cleans it, transforms it, and stores the processed results.",
                skills: [
                    "Python",
                    "Pandas",
                    "Data Cleaning",
                    "ETL"
                ]
            },
            {
                title: "Automated ETL Pipeline",
                level: "Intermediate",
                description:
                    "Create an automated pipeline that extracts data from multiple sources, transforms it, and loads it into a database.",
                skills: [
                    "Python",
                    "SQL",
                    "PostgreSQL",
                    "Airflow"
                ]
            },
            {
                title: "Scalable Data Platform",
                level: "Advanced",
                description:
                    "Design a production-style data platform using distributed processing, orchestration, cloud infrastructure, and monitoring.",
                skills: [
                    "Spark",
                    "Airflow",
                    "Cloud",
                    "Docker",
                    "Data Engineering"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "PostgreSQL Documentation",
                topics: ["SQL", "Databases", "Query optimization"]
            },
            {
                type: "Documentation",
                title: "Apache Spark Documentation",
                topics: ["Distributed processing", "Big data"]
            },
            {
                type: "Documentation",
                title: "Apache Airflow Documentation",
                topics: ["Workflow orchestration", "Data pipelines"]
            }
        ],

        estimatedTimeline: {
            total: "6–9 Months",
            phase1: "4–5 Weeks",
            phase2: "5–6 Weeks",
            phase3: "6–8 Weeks",
            phase4: "5–7 Weeks"
        },

        relatedCareers: [
            "data-analyst",
            "data-scientist",
            "machine-learning-engineer",
            "cloud-engineer"
        ],

        relatedRoadmaps: [
            "data-analyst",
            "data-scientist",
            "machine-learning-engineer",
            "cloud-engineer"
        ],

        cta: {
            title: "Ready to Build Data Systems?",
            description:
                "Learn how data moves through modern systems and build reliable pipelines that power analytics and applications.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 17,
        slug: "machine-learning-engineer",
        title: "Machine Learning Engineer Roadmap",
        difficulty: "Intermediate to Advanced",
        duration: "7–10 Months",
        desc: "Learn machine learning algorithms, deep learning, model engineering, data pipelines, APIs, deployment, and monitoring.",
        buttonText: "View Roadmap",

        skills: [
            "Python",
            "Machine Learning",
            "Deep Learning",
            "Model Engineering",
            "MLOps",
            "Deployment"
        ],

        technologies: [
            "Python",
            "Scikit-learn",
            "PyTorch",
            "TensorFlow",
            "Docker",
            "MLflow"
        ],

        category: "AI & Machine Learning",
        keywords: [
            "machine learning engineer",
            "ml engineer",
            "machine learning",
            "deep learning",
            "mlops",
            "model deployment"
        ],

        careerId: "machine-learning-engineer",

        hero: {
            eyebrow: "Machine Learning Engineering",
            title: "Machine Learning Engineer Roadmap",
            subtitle: "Turn machine learning models into reliable software systems.",
            description:
                "Learn machine learning, deep learning, model engineering, data pipelines, APIs, deployment, monitoring, and production ML workflows.",
            difficulty: "Intermediate to Advanced",
            duration: "7–10 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap focuses on the engineering side of machine learning. You will learn to develop models, build data pipelines, expose models through APIs, containerize applications, and operate ML systems in production.",

        phases: [
            {
                id: 1,
                title: "Python, Math & Data",
                duration: "4–5 Weeks",
                focus: "Build the technical foundations required for machine learning engineering.",
                topics: [
                    "Python",
                    "NumPy",
                    "Pandas",
                    "Linear algebra",
                    "Probability",
                    "Statistics",
                    "Data preprocessing",
                    "Feature engineering",
                    "Data visualization"
                ]
            },
            {
                id: 2,
                title: "Machine Learning & Deep Learning",
                duration: "6–8 Weeks",
                focus: "Develop a strong understanding of machine learning algorithms and neural networks.",
                topics: [
                    "Regression",
                    "Classification",
                    "Clustering",
                    "Feature engineering",
                    "Model evaluation",
                    "Scikit-learn",
                    "Neural networks",
                    "Deep learning",
                    "PyTorch"
                ]
            },
            {
                id: 3,
                title: "ML Engineering",
                duration: "6–7 Weeks",
                focus: "Apply software engineering practices to machine learning systems.",
                topics: [
                    "ML pipelines",
                    "Model packaging",
                    "REST APIs",
                    "FastAPI",
                    "Model versioning",
                    "Experiment tracking",
                    "Testing ML systems",
                    "Docker",
                    "MLflow"
                ]
            },
            {
                id: 4,
                title: "Production ML Systems",
                duration: "5–7 Weeks",
                focus: "Deploy, monitor, and maintain machine learning systems.",
                topics: [
                    "Cloud deployment",
                    "CI/CD",
                    "Model serving",
                    "Monitoring",
                    "Model drift",
                    "Performance optimization",
                    "Scalable inference",
                    "Logging",
                    "Production architecture"
                ]
            }
        ],

        projects: [
            {
                title: "Predictive ML Model",
                level: "Beginner",
                description:
                    "Build and evaluate a machine learning model using a structured dataset and document the complete workflow.",
                skills: [
                    "Python",
                    "Pandas",
                    "Scikit-learn",
                    "Model Evaluation"
                ]
            },
            {
                title: "ML Prediction API",
                level: "Intermediate",
                description:
                    "Package a trained machine learning model behind a REST API and make predictions through HTTP requests.",
                skills: [
                    "Machine Learning",
                    "FastAPI",
                    "Model Serving",
                    "Docker"
                ]
            },
            {
                title: "Production ML Pipeline",
                level: "Advanced",
                description:
                    "Build an end-to-end ML system covering data processing, training, experiment tracking, deployment, and monitoring.",
                skills: [
                    "ML Pipelines",
                    "MLflow",
                    "Docker",
                    "Cloud",
                    "Monitoring"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Scikit-learn Documentation",
                topics: ["Machine learning", "Model evaluation"]
            },
            {
                type: "Documentation",
                title: "PyTorch Documentation",
                topics: ["Deep learning", "Neural networks"]
            },
            {
                type: "Documentation",
                title: "MLflow Documentation",
                topics: ["Experiment tracking", "Model lifecycle"]
            }
        ],

        estimatedTimeline: {
            total: "7–10 Months",
            phase1: "4–5 Weeks",
            phase2: "6–8 Weeks",
            phase3: "6–7 Weeks",
            phase4: "5–7 Weeks"
        },

        relatedCareers: [
            "ai-machine-learning-engineer",
            "ai-engineer",
            "mlops-engineer",
            "data-scientist"
        ],

        relatedRoadmaps: [
            "ai-machine-learning-engineer",
            "ai-engineer",
            "mlops-engineer",
            "data-scientist"
        ],

        cta: {
            title: "Ready to Engineer Machine Learning Systems?",
            description:
                "Go beyond training models and learn how to build, deploy, and maintain reliable machine learning applications.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 18,
        slug: "ai-engineer",
        title: "AI Engineer Roadmap",
        difficulty: "Intermediate to Advanced",
        duration: "6–9 Months",
        desc: "Learn AI application development, machine learning fundamentals, LLMs, APIs, vector databases, RAG, and AI deployment.",
        buttonText: "View Roadmap",

        skills: [
            "Python",
            "AI Development",
            "Machine Learning",
            "LLMs",
            "RAG",
            "API Integration"
        ],

        technologies: [
            "Python",
            "PyTorch",
            "Hugging Face",
            "FastAPI",
            "Vector Databases",
            "Docker"
        ],

        category: "Artificial Intelligence",
        keywords: [
            "ai engineer",
            "artificial intelligence",
            "llm",
            "generative ai",
            "rag",
            "ai applications"
        ],

        careerId: "ai-engineer",

        hero: {
            eyebrow: "Artificial Intelligence",
            title: "AI Engineer Roadmap",
            subtitle: "Build intelligent applications with modern AI technologies.",
            description:
                "Learn AI fundamentals, machine learning, LLMs, embeddings, RAG systems, AI APIs, vector databases, evaluation, and deployment.",
            difficulty: "Intermediate to Advanced",
            duration: "6–9 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap focuses on building practical AI-powered applications. You will learn machine learning fundamentals and progress into modern AI systems, including LLM applications, retrieval-augmented generation, embeddings, APIs, and production deployment.",

        phases: [
            {
                id: 1,
                title: "Python & AI Foundations",
                duration: "4–5 Weeks",
                focus: "Build the programming, data, and mathematical foundations for AI development.",
                topics: [
                    "Python",
                    "NumPy",
                    "Pandas",
                    "Statistics",
                    "Linear algebra",
                    "Machine learning fundamentals",
                    "Data preprocessing",
                    "Model evaluation"
                ]
            },
            {
                id: 2,
                title: "Machine Learning & Deep Learning",
                duration: "5–7 Weeks",
                focus: "Understand the models and techniques behind modern AI systems.",
                topics: [
                    "Supervised learning",
                    "Unsupervised learning",
                    "Neural networks",
                    "Deep learning",
                    "PyTorch",
                    "Transformers",
                    "Embeddings",
                    "Model inference",
                    "Hugging Face"
                ]
            },
            {
                id: 3,
                title: "LLM Applications",
                duration: "5–6 Weeks",
                focus: "Build applications powered by large language models.",
                topics: [
                    "LLM fundamentals",
                    "Prompt engineering",
                    "LLM APIs",
                    "Embeddings",
                    "Vector databases",
                    "RAG",
                    "Document processing",
                    "AI agents fundamentals",
                    "AI evaluation"
                ]
            },
            {
                id: 4,
                title: "Production AI",
                duration: "5–7 Weeks",
                focus: "Deploy reliable AI applications and integrate them into real products.",
                topics: [
                    "FastAPI",
                    "AI application architecture",
                    "Docker",
                    "Cloud deployment",
                    "Caching",
                    "Logging",
                    "Monitoring",
                    "Security",
                    "Cost optimization"
                ]
            }
        ],

        projects: [
            {
                title: "AI Text Assistant",
                level: "Beginner",
                description:
                    "Build a simple AI-powered application that communicates with an AI model through an API.",
                skills: [
                    "Python",
                    "AI APIs",
                    "Prompt Engineering",
                    "API Integration"
                ]
            },
            {
                title: "Document Q&A System",
                level: "Intermediate",
                description:
                    "Build a RAG-based application that retrieves relevant information from uploaded documents before generating answers.",
                skills: [
                    "Embeddings",
                    "Vector Database",
                    "RAG",
                    "LLMs"
                ]
            },
            {
                title: "Production AI Assistant",
                level: "Advanced",
                description:
                    "Develop a complete AI application with retrieval, API integration, authentication, monitoring, and production deployment.",
                skills: [
                    "LLMs",
                    "RAG",
                    "FastAPI",
                    "Docker",
                    "Deployment"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Hugging Face Documentation",
                topics: ["Transformers", "Models", "AI development"]
            },
            {
                type: "Documentation",
                title: "PyTorch Documentation",
                topics: ["Deep learning", "Neural networks"]
            },
            {
                type: "Practice",
                title: "AI Application Projects",
                topics: ["LLMs", "RAG", "AI APIs"]
            }
        ],

        estimatedTimeline: {
            total: "6–9 Months",
            phase1: "4–5 Weeks",
            phase2: "5–7 Weeks",
            phase3: "5–6 Weeks",
            phase4: "5–7 Weeks"
        },

        relatedCareers: [
            "ai-machine-learning-engineer",
            "machine-learning-engineer",
            "mlops-engineer",
            "data-scientist"
        ],

        relatedRoadmaps: [
            "ai-machine-learning-engineer",
            "machine-learning-engineer",
            "mlops-engineer",
            "data-scientist"
        ],

        cta: {
            title: "Ready to Build AI Applications?",
            description:
                "Learn the technologies behind modern AI products and turn intelligent models into useful applications.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 19,
        slug: "mlops-engineer",
        title: "MLOps Engineer Roadmap",
        difficulty: "Advanced",
        duration: "6–9 Months",
        desc: "Learn machine learning infrastructure, CI/CD, model deployment, orchestration, monitoring, cloud, and ML lifecycle management.",
        buttonText: "View Roadmap",

        skills: [
            "MLOps",
            "Machine Learning",
            "Docker",
            "CI/CD",
            "Cloud",
            "Monitoring"
        ],

        technologies: [
            "Python",
            "Docker",
            "Kubernetes",
            "MLflow",
            "Airflow",
            "GitHub Actions"
        ],

        category: "AI & DevOps",
        keywords: [
            "mlops",
            "mlops engineer",
            "machine learning operations",
            "model deployment",
            "ml infrastructure",
            "machine learning"
        ],

        careerId: "mlops-engineer",

        hero: {
            eyebrow: "MLOps",
            title: "MLOps Engineer Roadmap",
            subtitle: "Build infrastructure that keeps machine learning systems running.",
            description:
                "Learn ML lifecycle management, containerization, CI/CD, model serving, orchestration, cloud infrastructure, monitoring, and production ML operations.",
            difficulty: "Advanced",
            duration: "6–9 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap focuses on the infrastructure and operational side of machine learning. You will learn how to automate model workflows, manage ML environments, deploy models, monitor systems, and maintain reliable ML infrastructure.",

        phases: [
            {
                id: 1,
                title: "ML & Software Foundations",
                duration: "4–5 Weeks",
                focus: "Understand machine learning workflows and strengthen software engineering fundamentals.",
                topics: [
                    "Python",
                    "Machine learning fundamentals",
                    "Git",
                    "Linux",
                    "REST APIs",
                    "Testing",
                    "Data pipelines",
                    "Model lifecycle",
                    "Software engineering practices"
                ]
            },
            {
                id: 2,
                title: "Containers & CI/CD",
                duration: "4–5 Weeks",
                focus: "Automate application and model delivery workflows.",
                topics: [
                    "Docker",
                    "Container images",
                    "Docker Compose",
                    "CI/CD fundamentals",
                    "GitHub Actions",
                    "Automated testing",
                    "Artifact management",
                    "Environment configuration",
                    "Deployment pipelines"
                ]
            },
            {
                id: 3,
                title: "ML Infrastructure",
                duration: "5–7 Weeks",
                focus: "Build infrastructure for training, serving, and managing machine learning models.",
                topics: [
                    "MLflow",
                    "Experiment tracking",
                    "Model registry",
                    "Model serving",
                    "Workflow orchestration",
                    "Apache Airflow",
                    "Kubernetes fundamentals",
                    "Secrets management",
                    "Infrastructure automation"
                ]
            },
            {
                id: 4,
                title: "Cloud & Monitoring",
                duration: "5–7 Weeks",
                focus: "Operate scalable machine learning systems in production.",
                topics: [
                    "Cloud fundamentals",
                    "Cloud compute",
                    "Cloud storage",
                    "Kubernetes deployment",
                    "Logging",
                    "Metrics",
                    "Monitoring",
                    "Model drift",
                    "Production optimization"
                ]
            }
        ],

        projects: [
            {
                title: "Containerized ML Model",
                level: "Beginner",
                description:
                    "Package a machine learning model into a Docker container and expose it through an API.",
                skills: [
                    "Python",
                    "Machine Learning",
                    "Docker",
                    "REST API"
                ]
            },
            {
                title: "Automated ML Pipeline",
                level: "Intermediate",
                description:
                    "Build an automated pipeline that trains, evaluates, versions, and registers machine learning models.",
                skills: [
                    "MLflow",
                    "CI/CD",
                    "Python",
                    "Model Lifecycle"
                ]
            },
            {
                title: "Production MLOps Platform",
                level: "Advanced",
                description:
                    "Design a production ML platform with automated deployment, orchestration, monitoring, and scalable model serving.",
                skills: [
                    "Kubernetes",
                    "Cloud",
                    "MLflow",
                    "CI/CD",
                    "Monitoring"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Docker Documentation",
                topics: ["Containers", "Containerization"]
            },
            {
                type: "Documentation",
                title: "Kubernetes Documentation",
                topics: ["Orchestration", "Containers", "Production"]
            },
            {
                type: "Documentation",
                title: "MLflow Documentation",
                topics: ["Experiment tracking", "Model lifecycle"]
            }
        ],

        estimatedTimeline: {
            total: "6–9 Months",
            phase1: "4–5 Weeks",
            phase2: "4–5 Weeks",
            phase3: "5–7 Weeks",
            phase4: "5–7 Weeks"
        },

        relatedCareers: [
            "machine-learning-engineer",
            "ai-engineer",
            "devops-engineer",
            "cloud-engineer"
        ],

        relatedRoadmaps: [
            "machine-learning-engineer",
            "ai-engineer",
            "devops-engineer",
            "cloud-engineer"
        ],

        cta: {
            title: "Ready to Build Production ML Systems?",
            description:
                "Learn how to automate, deploy, monitor, and operate machine learning systems at scale.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 20,
        slug: "devops-engineer",
        title: "DevOps Engineer Roadmap",
        difficulty: "Intermediate to Advanced",
        duration: "6–9 Months",
        desc: "Learn Linux, networking, Git, CI/CD, containers, Kubernetes, cloud infrastructure, monitoring, and automation.",
        buttonText: "View Roadmap",

        skills: [
            "Linux",
            "Networking",
            "CI/CD",
            "Cloud",
            "Containers",
            "Infrastructure Automation"
        ],

        technologies: [
            "Linux",
            "Git",
            "Docker",
            "Kubernetes",
            "GitHub Actions",
            "Terraform"
        ],

        category: "DevOps & Cloud",
        keywords: [
            "devops",
            "devops engineer",
            "ci cd",
            "docker",
            "kubernetes",
            "cloud"
        ],

        careerId: "devops-engineer",

        hero: {
            eyebrow: "DevOps Engineering",
            title: "DevOps Engineer Roadmap",
            subtitle: "Automate software delivery and build reliable infrastructure.",
            description:
                "Learn Linux, networking, version control, CI/CD, containers, Kubernetes, infrastructure as code, cloud platforms, and production monitoring.",
            difficulty: "Intermediate to Advanced",
            duration: "6–9 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap takes you from infrastructure fundamentals to modern DevOps practices. You will learn to automate development workflows, build deployment pipelines, manage containers, provision infrastructure, and operate production systems.",

        phases: [
            {
                id: 1,
                title: "Linux & Networking",
                duration: "4–5 Weeks",
                focus: "Understand the infrastructure and networking fundamentals behind modern applications.",
                topics: [
                    "Linux fundamentals",
                    "Command line",
                    "File permissions",
                    "Processes",
                    "Shell scripting",
                    "Networking fundamentals",
                    "DNS",
                    "HTTP and HTTPS",
                    "SSH"
                ]
            },
            {
                id: 2,
                title: "Git & CI/CD",
                duration: "4–5 Weeks",
                focus: "Automate source control and software delivery workflows.",
                topics: [
                    "Git",
                    "GitHub",
                    "Branching strategies",
                    "Pull requests",
                    "CI/CD concepts",
                    "GitHub Actions",
                    "Automated testing",
                    "Build pipelines",
                    "Deployment pipelines"
                ]
            },
            {
                id: 3,
                title: "Containers & Infrastructure",
                duration: "5–7 Weeks",
                focus: "Learn to package applications and manage infrastructure programmatically.",
                topics: [
                    "Docker",
                    "Docker Compose",
                    "Container networking",
                    "Container registries",
                    "Infrastructure as Code",
                    "Terraform",
                    "Configuration management",
                    "Secrets management",
                    "Infrastructure automation"
                ]
            },
            {
                id: 4,
                title: "Kubernetes & Cloud",
                duration: "6–8 Weeks",
                focus: "Deploy and operate scalable applications in cloud environments.",
                topics: [
                    "Kubernetes",
                    "Pods",
                    "Deployments",
                    "Services",
                    "Ingress",
                    "Cloud fundamentals",
                    "Cloud compute",
                    "Cloud storage",
                    "Monitoring and logging"
                ]
            }
        ],

        projects: [
            {
                title: "Automated Deployment Pipeline",
                level: "Beginner",
                description:
                    "Create a CI/CD workflow that automatically tests and deploys an application whenever changes are pushed.",
                skills: [
                    "Git",
                    "GitHub Actions",
                    "CI/CD",
                    "Deployment"
                ]
            },
            {
                title: "Dockerized Application",
                level: "Intermediate",
                description:
                    "Containerize a web application and configure its services using Docker Compose.",
                skills: [
                    "Docker",
                    "Docker Compose",
                    "Networking",
                    "Linux"
                ]
            },
            {
                title: "Cloud-Native Application",
                level: "Advanced",
                description:
                    "Deploy a containerized application to Kubernetes and configure infrastructure, monitoring, and automated delivery.",
                skills: [
                    "Kubernetes",
                    "Terraform",
                    "Cloud",
                    "CI/CD",
                    "Monitoring"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Docker Documentation",
                topics: ["Containers", "Docker Compose"]
            },
            {
                type: "Documentation",
                title: "Kubernetes Documentation",
                topics: ["Container orchestration", "Deployments"]
            },
            {
                type: "Documentation",
                title: "Terraform Documentation",
                topics: ["Infrastructure as Code", "Cloud infrastructure"]
            }
        ],

        estimatedTimeline: {
            total: "6–9 Months",
            phase1: "4–5 Weeks",
            phase2: "4–5 Weeks",
            phase3: "5–7 Weeks",
            phase4: "6–8 Weeks"
        },

        relatedCareers: [
            "cloud-engineer",
            "site-reliability-engineer",
            "mlops-engineer",
            "backend-developer"
        ],

        relatedRoadmaps: [
            "cloud-engineer",
            "site-reliability-engineer",
            "mlops-engineer",
            "backend-developer"
        ],

        cta: {
            title: "Ready to Automate and Deploy?",
            description:
                "Build strong infrastructure skills and learn how modern teams automate, deploy, and operate software reliably.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 21,
        slug: "cloud-engineer",
        title: "Cloud Engineer Roadmap",
        difficulty: "Intermediate to Advanced",
        duration: "6–9 Months",
        desc: "Learn cloud infrastructure, networking, Linux, containers, security, automation, and scalable cloud architecture.",
        buttonText: "View Roadmap",

        skills: [
            "Cloud Computing",
            "Linux",
            "Networking",
            "Containers",
            "Infrastructure as Code",
            "Cloud Security"
        ],

        technologies: [
            "AWS",
            "Azure",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Git"
        ],

        category: "Cloud & Infrastructure",
        keywords: [
            "cloud engineer",
            "cloud computing",
            "aws",
            "azure",
            "cloud infrastructure",
            "terraform"
        ],

        careerId: "cloud-engineer",

        hero: {
            eyebrow: "Cloud Engineering",
            title: "Cloud Engineer Roadmap",
            subtitle: "Design, deploy, and manage modern cloud infrastructure.",
            description:
                "Learn Linux, networking, cloud platforms, containers, infrastructure as code, security, automation, and scalable cloud architecture.",
            difficulty: "Intermediate to Advanced",
            duration: "6–9 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap takes you from infrastructure fundamentals to modern cloud engineering. You will learn cloud services, networking, containerization, infrastructure automation, security, monitoring, and scalable architectures.",

        phases: [
            {
                id: 1,
                title: "Linux & Networking",
                duration: "4–5 Weeks",
                focus: "Build the infrastructure fundamentals required for cloud engineering.",
                topics: [
                    "Linux fundamentals",
                    "Command line",
                    "Processes",
                    "File permissions",
                    "Shell scripting",
                    "Networking fundamentals",
                    "TCP/IP",
                    "DNS",
                    "HTTP and HTTPS"
                ]
            },
            {
                id: 2,
                title: "Cloud Fundamentals",
                duration: "5–6 Weeks",
                focus: "Understand core cloud concepts and services.",
                topics: [
                    "Cloud computing models",
                    "AWS or Azure fundamentals",
                    "Compute",
                    "Storage",
                    "Databases",
                    "Virtual networks",
                    "Identity and access management",
                    "Load balancing",
                    "Cloud pricing concepts"
                ]
            },
            {
                id: 3,
                title: "Containers & Infrastructure as Code",
                duration: "5–7 Weeks",
                focus: "Automate infrastructure and deploy containerized workloads.",
                topics: [
                    "Docker",
                    "Docker Compose",
                    "Container networking",
                    "Container registries",
                    "Terraform",
                    "Infrastructure as Code",
                    "Configuration management",
                    "Secrets management",
                    "Infrastructure automation"
                ]
            },
            {
                id: 4,
                title: "Kubernetes, Security & Production",
                duration: "6–8 Weeks",
                focus: "Operate secure, scalable, and observable cloud systems.",
                topics: [
                    "Kubernetes",
                    "Pods and deployments",
                    "Services",
                    "Ingress",
                    "Cloud security",
                    "Monitoring",
                    "Logging",
                    "High availability",
                    "Disaster recovery"
                ]
            }
        ],

        projects: [
            {
                title: "Cloud-Hosted Web Application",
                level: "Beginner",
                description:
                    "Deploy a web application to a cloud platform and configure networking, storage, and basic access controls.",
                skills: [
                    "Cloud Computing",
                    "Linux",
                    "Networking",
                    "Deployment"
                ]
            },
            {
                title: "Terraform Infrastructure",
                level: "Intermediate",
                description:
                    "Provision cloud infrastructure using Terraform and manage the environment through infrastructure as code.",
                skills: [
                    "Terraform",
                    "Cloud",
                    "Infrastructure as Code",
                    "Git"
                ]
            },
            {
                title: "Cloud-Native Platform",
                level: "Advanced",
                description:
                    "Deploy a containerized application on Kubernetes with automated infrastructure, monitoring, security, and scaling.",
                skills: [
                    "Kubernetes",
                    "Terraform",
                    "Docker",
                    "Cloud",
                    "Monitoring"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "AWS Documentation",
                topics: ["Cloud computing", "Infrastructure", "Cloud services"]
            },
            {
                type: "Documentation",
                title: "Microsoft Azure Documentation",
                topics: ["Cloud services", "Cloud architecture"]
            },
            {
                type: "Documentation",
                title: "Terraform Documentation",
                topics: ["Infrastructure as Code", "Automation"]
            }
        ],

        estimatedTimeline: {
            total: "6–9 Months",
            phase1: "4–5 Weeks",
            phase2: "5–6 Weeks",
            phase3: "5–7 Weeks",
            phase4: "6–8 Weeks"
        },

        relatedCareers: [
            "devops-engineer",
            "site-reliability-engineer",
            "mlops-engineer",
            "data-engineer"
        ],

        relatedRoadmaps: [
            "devops-engineer",
            "site-reliability-engineer",
            "mlops-engineer",
            "data-engineer"
        ],

        cta: {
            title: "Ready to Build in the Cloud?",
            description:
                "Learn how modern infrastructure is designed, automated, secured, and operated at scale.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 22,
        slug: "site-reliability-engineer",
        title: "Site Reliability Engineer Roadmap",
        difficulty: "Advanced",
        duration: "7–10 Months",
        desc: "Learn Linux, networking, cloud infrastructure, automation, observability, incident management, and reliability engineering.",
        buttonText: "View Roadmap",

        skills: [
            "Linux",
            "Cloud",
            "Automation",
            "Observability",
            "Incident Management",
            "Reliability Engineering"
        ],

        technologies: [
            "Linux",
            "Kubernetes",
            "Docker",
            "Terraform",
            "Prometheus",
            "Grafana"
        ],

        category: "DevOps & Infrastructure",
        keywords: [
            "sre",
            "site reliability engineer",
            "reliability engineering",
            "observability",
            "cloud",
            "devops"
        ],

        careerId: "site-reliability-engineer",

        hero: {
            eyebrow: "Site Reliability Engineering",
            title: "Site Reliability Engineer Roadmap",
            subtitle: "Build systems that stay reliable under real-world conditions.",
            description:
                "Learn infrastructure, automation, observability, incident response, scalability, cloud systems, and reliability engineering practices.",
            difficulty: "Advanced",
            duration: "7–10 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap focuses on reliability, availability, performance, and operational excellence. You will combine software engineering with infrastructure and operations to build dependable production systems.",

        phases: [
            {
                id: 1,
                title: "Linux, Networking & Systems",
                duration: "4–5 Weeks",
                focus: "Understand the systems and networking fundamentals behind reliable services.",
                topics: [
                    "Linux",
                    "Processes",
                    "Memory",
                    "CPU",
                    "File systems",
                    "Networking",
                    "DNS",
                    "HTTP",
                    "TCP/IP"
                ]
            },
            {
                id: 2,
                title: "Cloud & Automation",
                duration: "5–6 Weeks",
                focus: "Automate infrastructure and application operations.",
                topics: [
                    "Cloud fundamentals",
                    "Docker",
                    "Kubernetes",
                    "Terraform",
                    "Shell scripting",
                    "Python automation",
                    "CI/CD",
                    "Infrastructure as Code",
                    "Configuration management"
                ]
            },
            {
                id: 3,
                title: "Observability & Reliability",
                duration: "5–7 Weeks",
                focus: "Measure system health and identify reliability problems.",
                topics: [
                    "Monitoring",
                    "Logging",
                    "Tracing",
                    "Metrics",
                    "Prometheus",
                    "Grafana",
                    "Alerting",
                    "SLIs",
                    "SLOs"
                ]
            },
            {
                id: 4,
                title: "Production Reliability",
                duration: "6–8 Weeks",
                focus: "Operate systems through failures, scaling events, and production incidents.",
                topics: [
                    "Incident response",
                    "On-call practices",
                    "Root cause analysis",
                    "Capacity planning",
                    "High availability",
                    "Disaster recovery",
                    "Performance optimization",
                    "Chaos engineering",
                    "Reliability automation"
                ]
            }
        ],

        projects: [
            {
                title: "Application Monitoring Stack",
                level: "Beginner",
                description:
                    "Set up monitoring and dashboards for a web application and track basic service health metrics.",
                skills: [
                    "Monitoring",
                    "Prometheus",
                    "Grafana",
                    "Linux"
                ]
            },
            {
                title: "Highly Available Application",
                level: "Intermediate",
                description:
                    "Deploy an application with load balancing, multiple instances, health checks, and automated infrastructure.",
                skills: [
                    "Cloud",
                    "Load Balancing",
                    "Terraform",
                    "Docker"
                ]
            },
            {
                title: "Production Reliability Platform",
                level: "Advanced",
                description:
                    "Build a production-style platform with observability, automated recovery, alerting, scaling, and incident workflows.",
                skills: [
                    "Kubernetes",
                    "Prometheus",
                    "Grafana",
                    "Terraform",
                    "SRE"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Kubernetes Documentation",
                topics: ["Container orchestration", "Production systems"]
            },
            {
                type: "Documentation",
                title: "Prometheus Documentation",
                topics: ["Monitoring", "Metrics", "Alerting"]
            },
            {
                type: "Practice",
                title: "Reliability Engineering Projects",
                topics: ["Observability", "Incident response", "Automation"]
            }
        ],

        estimatedTimeline: {
            total: "7–10 Months",
            phase1: "4–5 Weeks",
            phase2: "5–6 Weeks",
            phase3: "5–7 Weeks",
            phase4: "6–8 Weeks"
        },

        relatedCareers: [
            "devops-engineer",
            "cloud-engineer",
            "mlops-engineer",
            "backend-developer"
        ],

        relatedRoadmaps: [
            "devops-engineer",
            "cloud-engineer",
            "mlops-engineer",
            "backend-developer"
        ],

        cta: {
            title: "Ready to Build Reliable Systems?",
            description:
                "Learn how to design, monitor, automate, and operate systems that remain dependable in production.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 23,
        slug: "cybersecurity-analyst",
        title: "Cybersecurity Analyst Roadmap",
        difficulty: "Beginner to Intermediate",
        duration: "5–7 Months",
        desc: "Learn cybersecurity fundamentals, networking, Linux, threat detection, security monitoring, incident response, and analysis.",
        buttonText: "View Roadmap",

        skills: [
            "Cybersecurity",
            "Networking",
            "Linux",
            "Threat Detection",
            "Security Monitoring",
            "Incident Response"
        ],

        technologies: [
            "Linux",
            "Wireshark",
            "SIEM",
            "Nmap",
            "Python",
            "Git"
        ],

        category: "Cybersecurity",
        keywords: [
            "cybersecurity analyst",
            "security analyst",
            "cyber security",
            "threat detection",
            "siem",
            "incident response"
        ],

        careerId: "cybersecurity-analyst",

        hero: {
            eyebrow: "Cybersecurity",
            title: "Cybersecurity Analyst Roadmap",
            subtitle: "Learn to detect, investigate, and respond to security threats.",
            description:
                "Build foundations in networking, operating systems, security principles, threat analysis, SIEM, monitoring, and incident response.",
            difficulty: "Beginner to Intermediate",
            duration: "5–7 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap introduces the core skills needed for security analysis. You will learn networking and operating systems before progressing into security monitoring, threat detection, investigation, and incident response.",

        phases: [
            {
                id: 1,
                title: "Networking & Operating Systems",
                duration: "4–5 Weeks",
                focus: "Understand the systems and networks that security analysts investigate.",
                topics: [
                    "Networking fundamentals",
                    "TCP/IP",
                    "DNS",
                    "HTTP and HTTPS",
                    "Linux fundamentals",
                    "Windows fundamentals",
                    "Processes",
                    "File systems",
                    "Command line"
                ]
            },
            {
                id: 2,
                title: "Security Fundamentals",
                duration: "4–5 Weeks",
                focus: "Learn the core principles and terminology of cybersecurity.",
                topics: [
                    "CIA triad",
                    "Authentication",
                    "Authorization",
                    "Cryptography fundamentals",
                    "Common vulnerabilities",
                    "Malware fundamentals",
                    "Phishing",
                    "Social engineering",
                    "Security controls"
                ]
            },
            {
                id: 3,
                title: "Threat Detection & Monitoring",
                duration: "5–6 Weeks",
                focus: "Learn how security events are collected, analyzed, and investigated.",
                topics: [
                    "Security logs",
                    "SIEM fundamentals",
                    "Network traffic analysis",
                    "Wireshark",
                    "Nmap",
                    "Threat intelligence",
                    "Indicators of compromise",
                    "Alert investigation",
                    "Detection fundamentals"
                ]
            },
            {
                id: 4,
                title: "Incident Response",
                duration: "4–5 Weeks",
                focus: "Learn how organizations respond to and recover from security incidents.",
                topics: [
                    "Incident response lifecycle",
                    "Incident triage",
                    "Evidence collection",
                    "Log analysis",
                    "Threat investigation",
                    "Containment",
                    "Recovery",
                    "Incident documentation",
                    "Security reporting"
                ]
            }
        ],

        projects: [
            {
                title: "Network Traffic Analysis",
                level: "Beginner",
                description:
                    "Analyze captured network traffic to identify protocols, connections, and potentially suspicious activity.",
                skills: [
                    "Networking",
                    "Wireshark",
                    "Traffic Analysis",
                    "Security"
                ]
            },
            {
                title: "Security Monitoring Lab",
                level: "Intermediate",
                description:
                    "Create a small security monitoring environment and investigate simulated alerts and log events.",
                skills: [
                    "SIEM",
                    "Log Analysis",
                    "Threat Detection",
                    "Linux"
                ]
            },
            {
                title: "Incident Response Simulation",
                level: "Advanced",
                description:
                    "Investigate a simulated security incident from initial alert through analysis, containment, recovery, and reporting.",
                skills: [
                    "Incident Response",
                    "Threat Analysis",
                    "Log Analysis",
                    "Security Reporting"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "OWASP",
                topics: ["Web security", "Vulnerabilities", "Security practices"]
            },
            {
                type: "Practice",
                title: "Cybersecurity Labs",
                topics: ["Threat detection", "Networking", "Incident response"]
            },
            {
                type: "Tool",
                title: "Wireshark",
                topics: ["Network analysis", "Packet inspection"]
            }
        ],

        estimatedTimeline: {
            total: "5–7 Months",
            phase1: "4–5 Weeks",
            phase2: "4–5 Weeks",
            phase3: "5–6 Weeks",
            phase4: "4–5 Weeks"
        },

        relatedCareers: [
            "cybersecurity-engineer",
            "systems-analyst",
            "devops-engineer"
        ],

        relatedRoadmaps: [
            "cybersecurity-engineer",
            "systems-analyst",
            "devops-engineer"
        ],

        cta: {
            title: "Ready to Start Your Cybersecurity Journey?",
            description:
                "Build practical security skills through networking, monitoring, investigation, and incident response exercises.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 24,
        slug: "cybersecurity-engineer",
        title: "Cybersecurity Engineer Roadmap",
        difficulty: "Intermediate to Advanced",
        duration: "6–9 Months",
        desc: "Learn network security, system hardening, identity, application security, cloud security, automation, and security engineering.",
        buttonText: "View Roadmap",

        skills: [
            "Cybersecurity",
            "Network Security",
            "System Hardening",
            "Cloud Security",
            "Application Security",
            "Security Automation"
        ],

        technologies: [
            "Linux",
            "Python",
            "Wireshark",
            "Docker",
            "Kubernetes",
            "Cloud Security Tools"
        ],

        category: "Cybersecurity",
        keywords: [
            "cybersecurity engineer",
            "security engineer",
            "network security",
            "cloud security",
            "application security"
        ],

        careerId: "cybersecurity-engineer",

        hero: {
            eyebrow: "Security Engineering",
            title: "Cybersecurity Engineer Roadmap",
            subtitle: "Design and build systems that protect applications and infrastructure.",
            description:
                "Learn network security, system hardening, identity management, application security, cloud security, security automation, and defensive engineering.",
            difficulty: "Intermediate to Advanced",
            duration: "6–9 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap focuses on building and implementing security controls rather than only analyzing security events. You will learn to secure networks, systems, applications, identities, containers, and cloud environments.",

        phases: [
            {
                id: 1,
                title: "Networking & Systems Security",
                duration: "4–5 Weeks",
                focus: "Build a strong understanding of networks and operating-system security.",
                topics: [
                    "Networking",
                    "TCP/IP",
                    "DNS",
                    "Firewalls",
                    "Linux security",
                    "Windows security",
                    "Access control",
                    "System hardening",
                    "Secure configuration"
                ]
            },
            {
                id: 2,
                title: "Application & Identity Security",
                duration: "5–6 Weeks",
                focus: "Learn how to secure applications, users, and access systems.",
                topics: [
                    "Authentication",
                    "Authorization",
                    "Identity management",
                    "Cryptography fundamentals",
                    "OWASP principles",
                    "Secure coding",
                    "API security",
                    "Secrets management",
                    "Vulnerability management"
                ]
            },
            {
                id: 3,
                title: "Cloud & Container Security",
                duration: "5–7 Weeks",
                focus: "Secure modern cloud-native infrastructure.",
                topics: [
                    "Cloud security fundamentals",
                    "IAM",
                    "Network security",
                    "Cloud logging",
                    "Docker security",
                    "Kubernetes security",
                    "Container vulnerabilities",
                    "Security policies",
                    "Configuration auditing"
                ]
            },
            {
                id: 4,
                title: "Security Automation & Engineering",
                duration: "5–7 Weeks",
                focus: "Automate security processes and build production security systems.",
                topics: [
                    "Python for security",
                    "Security automation",
                    "Vulnerability scanning",
                    "Security monitoring",
                    "SIEM",
                    "Incident response",
                    "Security testing",
                    "DevSecOps",
                    "Security architecture"
                ]
            }
        ],

        projects: [
            {
                title: "System Hardening Lab",
                level: "Beginner",
                description:
                    "Configure and harden a Linux system by applying secure access, permissions, services, and network configurations.",
                skills: [
                    "Linux",
                    "System Security",
                    "Networking",
                    "Hardening"
                ]
            },
            {
                title: "Secure Web Application",
                level: "Intermediate",
                description:
                    "Build or configure a web application with secure authentication, authorization, input validation, and protected APIs.",
                skills: [
                    "Application Security",
                    "Authentication",
                    "API Security",
                    "OWASP"
                ]
            },
            {
                title: "Cloud Security Architecture",
                level: "Advanced",
                description:
                    "Design a secure cloud environment with identity controls, network segmentation, monitoring, logging, and automated security checks.",
                skills: [
                    "Cloud Security",
                    "IAM",
                    "Networking",
                    "Security Automation"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Reference",
                title: "OWASP",
                topics: ["Application security", "Secure development"]
            },
            {
                type: "Practice",
                title: "Cybersecurity Labs",
                topics: ["System security", "Network security", "Defensive security"]
            },
            {
                type: "Documentation",
                title: "Cloud Security Documentation",
                topics: ["IAM", "Network security", "Cloud infrastructure"]
            }
        ],

        estimatedTimeline: {
            total: "6–9 Months",
            phase1: "4–5 Weeks",
            phase2: "5–6 Weeks",
            phase3: "5–7 Weeks",
            phase4: "5–7 Weeks"
        },

        relatedCareers: [
            "cybersecurity-analyst",
            "cloud-engineer",
            "devops-engineer",
            "site-reliability-engineer"
        ],

        relatedRoadmaps: [
            "cybersecurity-analyst",
            "cloud-engineer",
            "devops-engineer",
            "site-reliability-engineer"
        ],

        cta: {
            title: "Ready to Engineer Better Security?",
            description:
                "Learn to protect applications, infrastructure, identities, and cloud environments through practical security engineering.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 25,
        slug: "qa-engineer",
        title: "QA Engineer Roadmap",
        difficulty: "Beginner to Intermediate",
        duration: "4–6 Months",
        desc: "Learn software testing, test planning, automation, API testing, UI testing, performance testing, and quality engineering.",
        buttonText: "View Roadmap",

        skills: [
            "Software Testing",
            "Test Automation",
            "API Testing",
            "UI Testing",
            "Debugging",
            "Quality Assurance"
        ],

        technologies: [
            "JavaScript",
            "Playwright",
            "Selenium",
            "Postman",
            "Jest",
            "Git"
        ],

        category: "Quality Assurance",
        keywords: [
            "qa engineer",
            "quality assurance",
            "software testing",
            "test automation",
            "selenium",
            "playwright"
        ],

        careerId: "qa-engineer",

        hero: {
            eyebrow: "Quality Engineering",
            title: "QA Engineer Roadmap",
            subtitle: "Build software quality into every stage of development.",
            description:
                "Learn testing fundamentals, test planning, automation, API testing, UI testing, debugging, performance testing, and CI-based quality workflows.",
            difficulty: "Beginner to Intermediate",
            duration: "4–6 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap takes you from manual testing fundamentals to automated quality engineering. You will learn how to design test cases, validate APIs and interfaces, automate repetitive tests, and integrate testing into development workflows.",

        phases: [
            {
                id: 1,
                title: "Testing Fundamentals",
                duration: "3–4 Weeks",
                focus: "Understand how software is tested and how quality is evaluated.",
                topics: [
                    "Software testing fundamentals",
                    "SDLC",
                    "STLC",
                    "Test cases",
                    "Test scenarios",
                    "Bug reporting",
                    "Test planning",
                    "Functional testing",
                    "Regression testing"
                ]
            },
            {
                id: 2,
                title: "API & Web Testing",
                duration: "3–4 Weeks",
                focus: "Learn to test backend APIs and web applications.",
                topics: [
                    "HTTP fundamentals",
                    "REST APIs",
                    "Postman",
                    "API validation",
                    "Status codes",
                    "Request and response testing",
                    "Browser testing",
                    "Cross-browser testing",
                    "Test data management"
                ]
            },
            {
                id: 3,
                title: "Test Automation",
                duration: "5–6 Weeks",
                focus: "Automate UI and application tests.",
                topics: [
                    "JavaScript fundamentals",
                    "Automation concepts",
                    "Playwright",
                    "Selenium",
                    "Selectors",
                    "Assertions",
                    "Test suites",
                    "Page Object Model",
                    "Automated reporting"
                ]
            },
            {
                id: 4,
                title: "Advanced QA & CI/CD",
                duration: "4–5 Weeks",
                focus: "Integrate quality engineering into production development workflows.",
                topics: [
                    "Unit testing",
                    "Integration testing",
                    "Performance testing",
                    "Security testing fundamentals",
                    "CI/CD testing",
                    "GitHub Actions",
                    "Test reporting",
                    "Test maintenance",
                    "Quality metrics"
                ]
            }
        ],

        projects: [
            {
                title: "Manual Testing Project",
                level: "Beginner",
                description:
                    "Create a complete test plan and test suite for a web application and document discovered defects.",
                skills: [
                    "Test Planning",
                    "Test Cases",
                    "Bug Reporting",
                    "Functional Testing"
                ]
            },
            {
                title: "API Testing Suite",
                level: "Intermediate",
                description:
                    "Create a reusable API test collection covering authentication, CRUD operations, validation, and error cases.",
                skills: [
                    "Postman",
                    "REST APIs",
                    "API Testing",
                    "Assertions"
                ]
            },
            {
                title: "Automated E2E Test Suite",
                level: "Advanced",
                description:
                    "Build an end-to-end automated testing suite for a web application and integrate it into a CI/CD pipeline.",
                skills: [
                    "Playwright",
                    "JavaScript",
                    "E2E Testing",
                    "CI/CD"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Playwright Documentation",
                topics: ["Browser automation", "End-to-end testing"]
            },
            {
                type: "Documentation",
                title: "Postman Documentation",
                topics: ["API testing", "API workflows"]
            },
            {
                type: "Practice",
                title: "Testing Practice Projects",
                topics: ["Test cases", "Automation", "Quality assurance"]
            }
        ],

        estimatedTimeline: {
            total: "4–6 Months",
            phase1: "3–4 Weeks",
            phase2: "3–4 Weeks",
            phase3: "5–6 Weeks",
            phase4: "4–5 Weeks"
        },

        relatedCareers: [
            "frontend-developer",
            "backend-developer",
            "full-stack-developer",
            "devops-engineer"
        ],

        relatedRoadmaps: [
            "frontend-developer",
            "backend-developer",
            "full-stack-developer",
            "devops-engineer"
        ],

        cta: {
            title: "Ready to Build Better Software?",
            description:
                "Learn how to find bugs, automate testing, and build quality into modern software development workflows.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 26,
        slug: "database-administrator",
        title: "Database Administrator Roadmap",
        difficulty: "Intermediate to Advanced",
        duration: "5–8 Months",
        desc: "Learn database management, SQL, performance tuning, security, backups, recovery, monitoring, and high availability.",
        buttonText: "View Roadmap",

        skills: [
            "SQL",
            "Database Management",
            "Performance Tuning",
            "Backup & Recovery",
            "Database Security",
            "Monitoring"
        ],

        technologies: [
            "PostgreSQL",
            "MySQL",
            "SQL Server",
            "Linux",
            "Docker",
            "Git"
        ],

        category: "Database & Infrastructure",
        keywords: [
            "database administrator",
            "dba",
            "database",
            "sql",
            "postgresql",
            "mysql"
        ],

        careerId: "database-administrator",

        hero: {
            eyebrow: "Database Administration",
            title: "Database Administrator Roadmap",
            subtitle: "Keep critical data systems secure, reliable, and performant.",
            description:
                "Learn SQL, database architecture, administration, performance tuning, security, backup and recovery, monitoring, and high availability.",
            difficulty: "Intermediate to Advanced",
            duration: "5–8 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap takes you from database fundamentals to professional administration. You will learn how databases work, how to manage users and permissions, optimize queries, monitor systems, perform backups, and design reliable database environments.",

        phases: [
            {
                id: 1,
                title: "SQL & Database Fundamentals",
                duration: "4–5 Weeks",
                focus: "Build a strong understanding of relational databases and SQL.",
                topics: [
                    "Relational database concepts",
                    "SQL fundamentals",
                    "SELECT queries",
                    "JOINs",
                    "Aggregations",
                    "Subqueries",
                    "Indexes",
                    "Constraints",
                    "Transactions"
                ]
            },
            {
                id: 2,
                title: "Database Administration",
                duration: "4–5 Weeks",
                focus: "Learn how to configure and manage database systems.",
                topics: [
                    "Database installation",
                    "Configuration",
                    "Users and roles",
                    "Permissions",
                    "Database storage",
                    "Schemas",
                    "Database maintenance",
                    "Logs",
                    "Connection management"
                ]
            },
            {
                id: 3,
                title: "Performance & Security",
                duration: "5–6 Weeks",
                focus: "Optimize database performance and protect sensitive data.",
                topics: [
                    "Query optimization",
                    "Execution plans",
                    "Index optimization",
                    "Database monitoring",
                    "Locking",
                    "Concurrency",
                    "Authentication",
                    "Authorization",
                    "Database security"
                ]
            },
            {
                id: 4,
                title: "Backup, Recovery & High Availability",
                duration: "5–6 Weeks",
                focus: "Build resilient database environments.",
                topics: [
                    "Backup strategies",
                    "Restore operations",
                    "Point-in-time recovery",
                    "Replication",
                    "High availability",
                    "Disaster recovery",
                    "Failover",
                    "Monitoring",
                    "Production database operations"
                ]
            }
        ],

        projects: [
            {
                title: "Relational Database System",
                level: "Beginner",
                description:
                    "Design a relational database with normalized tables, relationships, constraints, and SQL queries.",
                skills: [
                    "SQL",
                    "Database Design",
                    "Normalization",
                    "Relationships"
                ]
            },
            {
                title: "Database Performance Lab",
                level: "Intermediate",
                description:
                    "Analyze slow queries, inspect execution plans, and improve database performance through indexing and query optimization.",
                skills: [
                    "SQL",
                    "Indexes",
                    "Query Optimization",
                    "Performance Tuning"
                ]
            },
            {
                title: "High-Availability Database",
                level: "Advanced",
                description:
                    "Create a database environment with backups, replication, monitoring, and recovery procedures.",
                skills: [
                    "Database Administration",
                    "Replication",
                    "Backup & Recovery",
                    "Monitoring"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "PostgreSQL Documentation",
                topics: ["SQL", "Administration", "Performance"]
            },
            {
                type: "Documentation",
                title: "MySQL Documentation",
                topics: ["Database administration", "SQL", "Security"]
            },
            {
                type: "Practice",
                title: "SQL Practice",
                topics: ["Queries", "Database problems", "Optimization"]
            }
        ],

        estimatedTimeline: {
            total: "5–8 Months",
            phase1: "4–5 Weeks",
            phase2: "4–5 Weeks",
            phase3: "5–6 Weeks",
            phase4: "5–6 Weeks"
        },

        relatedCareers: [
            "data-engineer",
            "backend-developer",
            "cloud-engineer",
            "systems-analyst"
        ],

        relatedRoadmaps: [
            "data-engineer",
            "backend-developer",
            "cloud-engineer",
            "systems-analyst"
        ],

        cta: {
            title: "Ready to Master Databases?",
            description:
                "Learn how to manage, optimize, secure, and maintain the database systems behind modern applications.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 27,
        slug: "systems-analyst",
        title: "Systems Analyst Roadmap",
        difficulty: "Beginner to Intermediate",
        duration: "4–6 Months",
        desc: "Learn systems analysis, requirements gathering, process modeling, databases, documentation, and solution design.",
        buttonText: "View Roadmap",

        skills: [
            "Systems Analysis",
            "Requirements Gathering",
            "Process Modeling",
            "Documentation",
            "SQL",
            "Problem Solving"
        ],

        technologies: [
            "SQL",
            "Microsoft Visio",
            "Figma",
            "Jira",
            "Confluence",
            "Git"
        ],

        category: "Business & Technology",
        keywords: [
            "systems analyst",
            "system analysis",
            "requirements",
            "business systems",
            "process modeling",
            "solution design"
        ],

        careerId: "systems-analyst",

        hero: {
            eyebrow: "Systems Analysis",
            title: "Systems Analyst Roadmap",
            subtitle: "Bridge business needs and technology solutions.",
            description:
                "Learn requirements analysis, process modeling, system design, databases, documentation, stakeholder communication, and solution evaluation.",
            difficulty: "Beginner to Intermediate",
            duration: "4–6 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap teaches you how to understand business problems and translate them into effective technology solutions. You will learn requirements gathering, process analysis, system modeling, database concepts, documentation, and stakeholder communication.",

        phases: [
            {
                id: 1,
                title: "Business & Systems Fundamentals",
                duration: "3–4 Weeks",
                focus: "Understand how organizations and information systems work together.",
                topics: [
                    "Business processes",
                    "Information systems",
                    "SDLC",
                    "Systems thinking",
                    "Problem definition",
                    "Stakeholder identification",
                    "Business requirements",
                    "Functional requirements"
                ]
            },
            {
                id: 2,
                title: "Requirements & Process Analysis",
                duration: "4–5 Weeks",
                focus: "Learn how to discover and document system requirements.",
                topics: [
                    "Requirements gathering",
                    "Stakeholder interviews",
                    "Use cases",
                    "User stories",
                    "Process mapping",
                    "Flowcharts",
                    "BPMN fundamentals",
                    "Gap analysis",
                    "Requirements documentation"
                ]
            },
            {
                id: 3,
                title: "Data & System Design",
                duration: "4–5 Weeks",
                focus: "Translate requirements into structured technical solutions.",
                topics: [
                    "Database fundamentals",
                    "SQL",
                    "Entity relationship diagrams",
                    "System architecture basics",
                    "API fundamentals",
                    "Data flows",
                    "UML",
                    "Integration concepts",
                    "Solution design"
                ]
            },
            {
                id: 4,
                title: "Implementation & Stakeholder Collaboration",
                duration: "4–5 Weeks",
                focus: "Support implementation and communicate solutions effectively.",
                topics: [
                    "Technical documentation",
                    "Acceptance criteria",
                    "Testing support",
                    "User acceptance testing",
                    "Change management",
                    "Project collaboration",
                    "Jira",
                    "Stakeholder presentations",
                    "Solution evaluation"
                ]
            }
        ],

        projects: [
            {
                title: "Business Process Analysis",
                level: "Beginner",
                description:
                    "Analyze an existing business process, identify inefficiencies, and document a proposed improved workflow.",
                skills: [
                    "Process Analysis",
                    "Flowcharts",
                    "Requirements",
                    "Documentation"
                ]
            },
            {
                title: "System Requirements Specification",
                level: "Intermediate",
                description:
                    "Create a complete requirements document for a software system, including user stories, use cases, and acceptance criteria.",
                skills: [
                    "Requirements Gathering",
                    "Use Cases",
                    "Documentation",
                    "Stakeholder Analysis"
                ]
            },
            {
                title: "End-to-End System Design",
                level: "Advanced",
                description:
                    "Analyze a business problem and produce a complete system proposal covering processes, data, APIs, architecture, and implementation requirements.",
                skills: [
                    "Systems Analysis",
                    "SQL",
                    "System Design",
                    "Documentation"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Reference",
                title: "UML & System Modeling",
                topics: ["UML", "System design", "Process modeling"]
            },
            {
                type: "Tool",
                title: "Jira",
                topics: ["Requirements", "Project collaboration", "Issue tracking"]
            },
            {
                type: "Practice",
                title: "Systems Analysis Case Studies",
                topics: ["Requirements", "Business processes", "Solution design"]
            }
        ],

        estimatedTimeline: {
            total: "4–6 Months",
            phase1: "3–4 Weeks",
            phase2: "4–5 Weeks",
            phase3: "4–5 Weeks",
            phase4: "4–5 Weeks"
        },

        relatedCareers: [
            "business-analyst",
            "product-manager",
            "database-administrator",
            "backend-developer"
        ],

        relatedRoadmaps: [
            "business-analyst",
            "product-manager",
            "database-administrator",
            "backend-developer"
        ],

        cta: {
            title: "Ready to Bridge Business and Technology?",
            description:
                "Learn how to analyze problems, define requirements, and translate business needs into effective technology solutions.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 28,
        slug: "business-analyst",
        title: "Business Analyst Roadmap",
        difficulty: "Beginner to Intermediate",
        duration: "4–6 Months",
        desc: "Learn business analysis, requirements gathering, stakeholder management, process modeling, data analysis, and documentation.",
        buttonText: "View Roadmap",

        skills: [
            "Business Analysis",
            "Requirements Gathering",
            "Stakeholder Management",
            "Process Modeling",
            "Data Analysis",
            "Communication"
        ],

        technologies: [
            "Excel",
            "SQL",
            "Power BI",
            "Jira",
            "Confluence",
            "Figma"
        ],

        category: "Business & Technology",
        keywords: [
            "business analyst",
            "business analysis",
            "requirements",
            "stakeholder management",
            "process analysis",
            "data analysis"
        ],

        careerId: "business-analyst",

        hero: {
            eyebrow: "Business Analysis",
            title: "Business Analyst Roadmap",
            subtitle: "Turn business problems into clear, actionable solutions.",
            description:
                "Learn requirements gathering, stakeholder management, process analysis, documentation, data analysis, and solution evaluation.",
            difficulty: "Beginner to Intermediate",
            duration: "4–6 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap develops the analytical, communication, and technical skills needed to work as a Business Analyst. You will learn to understand business needs, gather requirements, analyze processes, work with data, and communicate solutions.",

        phases: [
            {
                id: 1,
                title: "Business Analysis Foundations",
                duration: "3–4 Weeks",
                focus: "Understand the role of business analysis and how organizations operate.",
                topics: [
                    "Business analysis fundamentals",
                    "Business processes",
                    "Problem identification",
                    "Stakeholder identification",
                    "Business objectives",
                    "SWOT analysis",
                    "Root cause analysis",
                    "KPIs",
                    "Business requirements"
                ]
            },
            {
                id: 2,
                title: "Requirements & Stakeholders",
                duration: "4–5 Weeks",
                focus: "Learn to discover, analyze, and communicate business requirements.",
                topics: [
                    "Requirements gathering",
                    "Stakeholder interviews",
                    "Workshops",
                    "User stories",
                    "Use cases",
                    "Acceptance criteria",
                    "Requirements documentation",
                    "Stakeholder management",
                    "Prioritization"
                ]
            },
            {
                id: 3,
                title: "Process & Data Analysis",
                duration: "4–5 Weeks",
                focus: "Use processes and data to identify opportunities for improvement.",
                topics: [
                    "Process mapping",
                    "Flowcharts",
                    "Gap analysis",
                    "Excel",
                    "SQL fundamentals",
                    "Data analysis",
                    "Data visualization",
                    "KPIs and metrics",
                    "Business dashboards"
                ]
            },
            {
                id: 4,
                title: "Solutions & Delivery",
                duration: "4–5 Weeks",
                focus: "Support solution implementation and evaluate business outcomes.",
                topics: [
                    "Solution evaluation",
                    "Functional specifications",
                    "UAT",
                    "Testing support",
                    "Change management",
                    "Agile fundamentals",
                    "Jira",
                    "Stakeholder presentations",
                    "Business case studies"
                ]
            }
        ],

        projects: [
            {
                title: "Business Process Improvement",
                level: "Beginner",
                description:
                    "Analyze a business process, identify bottlenecks, and propose measurable improvements.",
                skills: [
                    "Process Analysis",
                    "Root Cause Analysis",
                    "Documentation",
                    "KPIs"
                ]
            },
            {
                title: "Requirements Analysis Project",
                level: "Intermediate",
                description:
                    "Gather requirements for a hypothetical product and produce user stories, use cases, and acceptance criteria.",
                skills: [
                    "Requirements",
                    "User Stories",
                    "Stakeholder Management",
                    "Documentation"
                ]
            },
            {
                title: "Data-Driven Business Case",
                level: "Advanced",
                description:
                    "Analyze business data, identify a problem, create a dashboard, and present a data-backed recommendation.",
                skills: [
                    "Excel",
                    "SQL",
                    "Power BI",
                    "Business Analysis"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Practice",
                title: "Business Analysis Case Studies",
                topics: ["Requirements", "Process analysis", "Problem solving"]
            },
            {
                type: "Tool",
                title: "Jira",
                topics: ["Agile", "Requirements", "Project collaboration"]
            },
            {
                type: "Practice",
                title: "SQL & Data Analysis",
                topics: ["Business data", "KPIs", "Data-driven decisions"]
            }
        ],

        estimatedTimeline: {
            total: "4–6 Months",
            phase1: "3–4 Weeks",
            phase2: "4–5 Weeks",
            phase3: "4–5 Weeks",
            phase4: "4–5 Weeks"
        },

        relatedCareers: [
            "systems-analyst",
            "product-manager",
            "data-analyst"
        ],

        relatedRoadmaps: [
            "systems-analyst",
            "product-manager",
            "data-analyst"
        ],

        cta: {
            title: "Ready to Solve Business Problems?",
            description:
                "Develop the analytical and communication skills needed to turn business requirements into actionable solutions.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 29,
        slug: "product-manager",
        title: "Product Manager Roadmap",
        difficulty: "Intermediate",
        duration: "5–7 Months",
        desc: "Learn product strategy, user research, requirements, prioritization, roadmapping, analytics, and product delivery.",
        buttonText: "View Roadmap",

        skills: [
            "Product Strategy",
            "User Research",
            "Product Planning",
            "Prioritization",
            "Analytics",
            "Stakeholder Management"
        ],

        technologies: [
            "Jira",
            "Confluence",
            "Figma",
            "Google Analytics",
            "Notion",
            "SQL"
        ],

        category: "Product Management",
        keywords: [
            "product manager",
            "product management",
            "product strategy",
            "roadmap",
            "user research",
            "agile"
        ],

        careerId: "product-manager",

        hero: {
            eyebrow: "Product Management",
            title: "Product Manager Roadmap",
            subtitle: "Learn to turn user problems into successful products.",
            description:
                "Learn product strategy, user research, requirements, prioritization, roadmapping, analytics, stakeholder management, and product delivery.",
            difficulty: "Intermediate",
            duration: "5–7 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap develops the skills needed to take products from problem discovery through delivery and iteration. You will learn how to understand users, define product goals, prioritize work, collaborate with teams, and measure outcomes.",

        phases: [
            {
                id: 1,
                title: "Product & Business Fundamentals",
                duration: "3–4 Weeks",
                focus: "Understand how products create value for users and businesses.",
                topics: [
                    "Product management fundamentals",
                    "Product lifecycle",
                    "Business models",
                    "Market analysis",
                    "Competitive analysis",
                    "Product vision",
                    "Product strategy",
                    "Goals and KPIs"
                ]
            },
            {
                id: 2,
                title: "Users & Product Discovery",
                duration: "4–5 Weeks",
                focus: "Learn how to identify user problems and validate product opportunities.",
                topics: [
                    "User research",
                    "User interviews",
                    "Personas",
                    "User journeys",
                    "Problem statements",
                    "Jobs to be done",
                    "Market research",
                    "Product discovery",
                    "Hypothesis validation"
                ]
            },
            {
                id: 3,
                title: "Planning & Prioritization",
                duration: "4–5 Weeks",
                focus: "Turn product insights into a clear and prioritized roadmap.",
                topics: [
                    "Product requirements",
                    "User stories",
                    "Acceptance criteria",
                    "Prioritization frameworks",
                    "Product roadmaps",
                    "Backlog management",
                    "Agile fundamentals",
                    "Sprint planning",
                    "Release planning"
                ]
            },
            {
                id: 4,
                title: "Delivery, Analytics & Growth",
                duration: "5–6 Weeks",
                focus: "Work with teams to deliver products and measure their impact.",
                topics: [
                    "Cross-functional collaboration",
                    "Product development",
                    "QA collaboration",
                    "Product analytics",
                    "Funnels",
                    "A/B testing",
                    "Retention",
                    "Product metrics",
                    "Growth experiments"
                ]
            }
        ],

        projects: [
            {
                title: "Product Case Study",
                level: "Beginner",
                description:
                    "Choose a real-world problem and document the target users, problem statement, proposed solution, and success metrics.",
                skills: [
                    "Product Discovery",
                    "User Research",
                    "Product Strategy",
                    "KPIs"
                ]
            },
            {
                title: "Product Roadmap",
                level: "Intermediate",
                description:
                    "Create a product roadmap with prioritized features, user stories, releases, dependencies, and measurable outcomes.",
                skills: [
                    "Prioritization",
                    "Roadmapping",
                    "User Stories",
                    "Agile"
                ]
            },
            {
                title: "End-to-End Product Launch",
                level: "Advanced",
                description:
                    "Develop a complete product case study covering discovery, strategy, roadmap, delivery, analytics, and post-launch improvements.",
                skills: [
                    "Product Strategy",
                    "User Research",
                    "Analytics",
                    "Product Management"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Tool",
                title: "Jira",
                topics: ["Agile", "Backlog management", "Product delivery"]
            },
            {
                type: "Tool",
                title: "Figma",
                topics: ["Product design", "Prototyping", "Collaboration"]
            },
            {
                type: "Practice",
                title: "Product Case Studies",
                topics: ["Product strategy", "Discovery", "Prioritization"]
            }
        ],

        estimatedTimeline: {
            total: "5–7 Months",
            phase1: "3–4 Weeks",
            phase2: "4–5 Weeks",
            phase3: "4–5 Weeks",
            phase4: "5–6 Weeks"
        },

        relatedCareers: [
            "business-analyst",
            "systems-analyst",
            "ui-ux-designer"
        ],

        relatedRoadmaps: [
            "business-analyst",
            "systems-analyst",
            "ui-ux-designer"
        ],

        cta: {
            title: "Ready to Build Better Products?",
            description:
                "Learn how to discover user problems, define product strategy, prioritize opportunities, and measure product outcomes.",
            buttonText: "Start Learning"
        }
    },

    {
        id: 30,
        slug: "blockchain-developer",
        title: "Blockchain Developer Roadmap",
        difficulty: "Intermediate to Advanced",
        duration: "6–9 Months",
        desc: "Learn blockchain fundamentals, cryptography, Ethereum, smart contracts, Solidity, Web3 development, and decentralized applications.",
        buttonText: "View Roadmap",

        skills: [
            "Blockchain",
            "Cryptography",
            "Solidity",
            "Smart Contracts",
            "Web3 Development",
            "DApp Development"
        ],

        technologies: [
            "Solidity",
            "Ethereum",
            "JavaScript",
            "Node.js",
            "Hardhat",
            "Ethers.js"
        ],

        category: "Blockchain & Web3",
        keywords: [
            "blockchain developer",
            "blockchain",
            "web3",
            "solidity",
            "ethereum",
            "smart contracts"
        ],

        careerId: "blockchain-developer",

        hero: {
            eyebrow: "Blockchain Development",
            title: "Blockchain Developer Roadmap",
            subtitle: "Build decentralized applications on blockchain networks.",
            description:
                "Learn blockchain fundamentals, cryptography, Ethereum, smart contracts, Solidity, Web3 libraries, testing, and decentralized application development.",
            difficulty: "Intermediate to Advanced",
            duration: "6–9 Months",
            primaryCTA: "Start Learning",
            secondaryCTA: "Explore Career"
        },

        overview:
            "This roadmap introduces blockchain development from its underlying concepts through practical decentralized application development. You will learn blockchain architecture, cryptography, smart contracts, Solidity, Web3 integration, testing, and deployment.",

        phases: [
            {
                id: 1,
                title: "Blockchain & Cryptography Fundamentals",
                duration: "4–5 Weeks",
                focus: "Understand how blockchain networks and cryptographic systems work.",
                topics: [
                    "Blockchain fundamentals",
                    "Distributed systems",
                    "Consensus concepts",
                    "Blocks and transactions",
                    "Hashing",
                    "Public-key cryptography",
                    "Digital signatures",
                    "Wallets",
                    "Blockchain networks"
                ]
            },
            {
                id: 2,
                title: "Ethereum & Smart Contracts",
                duration: "5–6 Weeks",
                focus: "Learn how smart contracts are created and executed.",
                topics: [
                    "Ethereum fundamentals",
                    "Accounts",
                    "Transactions",
                    "Gas",
                    "Smart contracts",
                    "Solidity",
                    "Contract state",
                    "Events",
                    "Contract security"
                ]
            },
            {
                id: 3,
                title: "Web3 Development",
                duration: "5–6 Weeks",
                focus: "Connect web applications to blockchain networks.",
                topics: [
                    "JavaScript",
                    "Web3 fundamentals",
                    "Ethers.js",
                    "Wallet integration",
                    "Contract interaction",
                    "Transaction handling",
                    "Frontend integration",
                    "Backend integration",
                    "DApp architecture"
                ]
            },
            {
                id: 4,
                title: "Testing, Security & Deployment",
                duration: "5–7 Weeks",
                focus: "Build secure and production-ready decentralized applications.",
                topics: [
                    "Smart contract testing",
                    "Hardhat",
                    "Deployment",
                    "Contract verification",
                    "Security vulnerabilities",
                    "Gas optimization",
                    "Frontend deployment",
                    "Blockchain monitoring",
                    "DApp production workflows"
                ]
            }
        ],

        projects: [
            {
                title: "Blockchain Explorer",
                level: "Beginner",
                description:
                    "Build a simple application that displays blockchain blocks, transactions, and basic network information.",
                skills: [
                    "Blockchain",
                    "JavaScript",
                    "Web3",
                    "APIs"
                ]
            },
            {
                title: "Smart Contract DApp",
                level: "Intermediate",
                description:
                    "Create a decentralized application with a Solidity smart contract and a web interface that interacts with it.",
                skills: [
                    "Solidity",
                    "Ethereum",
                    "Ethers.js",
                    "JavaScript"
                ]
            },
            {
                title: "Production Web3 Application",
                level: "Advanced",
                description:
                    "Build and deploy a complete decentralized application with secure smart contracts, wallet integration, testing, and production deployment.",
                skills: [
                    "Solidity",
                    "Smart Contracts",
                    "Ethers.js",
                    "Hardhat",
                    "DApp Development"
                ]
            }
        ],

        recommendedResources: [
            {
                type: "Documentation",
                title: "Ethereum Documentation",
                topics: ["Ethereum", "Blockchain", "Smart contracts"]
            },
            {
                type: "Documentation",
                title: "Solidity Documentation",
                topics: ["Solidity", "Smart contracts", "Language fundamentals"]
            },
            {
                type: "Documentation",
                title: "Hardhat Documentation",
                topics: ["Smart contract testing", "Development", "Deployment"]
            }
        ],

        estimatedTimeline: {
            total: "6–9 Months",
            phase1: "4–5 Weeks",
            phase2: "5–6 Weeks",
            phase3: "5–6 Weeks",
            phase4: "5–7 Weeks"
        },

        relatedCareers: [
            "frontend-developer",
            "backend-developer",
            "full-stack-developer",
            "cybersecurity-engineer"
        ],

        relatedRoadmaps: [
            "frontend-developer",
            "backend-developer",
            "full-stack-developer",
            "cybersecurity-engineer"
        ],

        cta: {
            title: "Ready to Build on the Blockchain?",
            description:
                "Learn the foundations of blockchain technology and build decentralized applications with smart contracts and Web3 tools.",
            buttonText: "Start Learning"
        }
    }
];


export default roadmapsData;