export const config = {
    developer: {
        name: "Aryan",
        fullName: "Aryan Mandal",
        title: "Software Engineer",
        description: "Software Engineer specializing in React Native, React.js, and Node.js with 2.8+ years of experience building scalable web and mobile applications backed by PostgreSQL and MongoDB. Deployed 15+ applications on Google Play Store and 5+ on Apple App Store. Proven track record in Fintech, Government, and enterprise products, including RESTful API design, third-party API integration, AI-powered features, and production deployment on AWS, Docker, Nginx, and CI/CD."
    },
    social: {
        github: "https://github.com/aryanmandal800",
        email: "aryanmandal800@gmail.com",
        phone: "+91 8292355155",
        location: "Pune, Maharashtra, India"
    },
    about: {
        title: "About Me",
        description: "I am a Software Engineer based in Pune, Maharashtra, India, with 2.8+ years of experience building scalable web and mobile applications backed by PostgreSQL and MongoDB. I have deployed 15+ applications on Google Play Store and 5+ on Apple App Store, with a proven track record across Fintech, Government, and enterprise products—handling everything from high-concurrency RESTful API architecture and secure third-party integrations (KYC, Aadhaar/PAN, payments, eSign) to AI-powered decision workflows and production DevOps on AWS (EC2, S3), Docker, Nginx, and automated CI/CD. Driven by clean code and problem-solving, I have solved 500+ Data Structures and Algorithms problems."
    },
    experiences: [
        {
            position: "Software Engineer",
            company: "FivoPay",
            period: "Feb 2026 – Present",
            location: "Pune, India",
            description: "Develop and maintain fintech solutions for Cooperative Societies, Credit Societies, NBFCs, and financial institutions using React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Built and integrated RESTful APIs for KYC, Aadhaar/PAN verification, and payments. Engineered scalable backend services on AWS EC2 using Docker, Nginx, SSL, and CI/CD pipelines.",
            responsibilities: [
                "Develop and maintain fintech solutions for Cooperative Societies, Credit Societies, NBFCs, and financial institutions using React.js, Node.js, Express.js, MongoDB, and PostgreSQL.",
                "Built and integrated RESTful APIs for KYC, Aadhaar/PAN verification, payments, banking, and financial services.",
                "Integrated third-party APIs for KYC, eSign, eStamp, and payment processing, ensuring secure and reliable API communication.",
                "Designed and deployed scalable backend services on AWS EC2 using Docker, Nginx, SSL, and CI/CD pipelines."
            ],
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "AWS EC2", "Docker", "Nginx", "CI/CD", "RESTful APIs"]
        },
        {
            position: "Full Stack Developer",
            company: "Weiteredge Technology Pvt. Ltd",
            period: "Dec 2023 – Jan 2026",
            location: "Hyderabad, India",
            description: "Developed and maintained web modules for large-scale e-governance projects across 3 state governments (Telangana, Andhra Pradesh, Odisha), ensuring data security, performance, and smooth public access. Optimized React Native mobile apps using Redux, contributing to the deployment of 15+ apps on Play Store and 5+ on App Store. Designed optimized RESTful APIs reducing response times by 30%.",
            responsibilities: [
                "Developed and maintained web modules for large-scale e-governance projects across 3 state governments (Telangana, Andhra Pradesh, Odisha), ensuring data security, performance, and smooth public access.",
                "Deployed and maintained 15+ applications on Google Play Store and 5+ on Apple App Store, managing builds, store compliance, and release updates.",
                "Designed and optimized RESTful APIs with efficient queries and reusable service layers, reducing development time by 20% and improving API response times by 30%.",
                "Optimized React Native Android/iOS apps using Redux for state management and performance tuning, improving UI/UX and boosting user retention by 15%."
            ],
            technologies: ["React Native", "React.js", "Node.js", "Redux", "PostgreSQL", "SQL", "RESTful APIs", "Android", "iOS", "Play Store", "App Store"]
        },
        {
            position: "B.Tech",
            company: "Bakhtiyarpur College of Engineering, Patna",
            period: "Aug 2019 – Sep 2023",
            location: "Patna, India",
            description: "Graduated with 8.67 CGPA in B.Tech. Deepened core software engineering foundations, Data Structures and Algorithms, Object-Oriented Programming (C++, Java), Database Management Systems, and scalable applications. Solved 500+ algorithmic problems across LeetCode and GeeksforGeeks.",
            responsibilities: [
                "Graduated with distinction with a CGPA of 8.67 / 10",
                "Solved 500+ Data Structures and Algorithms problems across LeetCode & GeeksforGeeks",
                "Developed practical engineering foundations in distributed systems, web development, and algorithms"
            ],
            technologies: ["Data Structures & Algorithms", "C++", "Java", "JavaScript", "DBMS", "Operating Systems"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Fivopay – Unified Fintech & Banking Platform",
            category: "Fintech / Banking & AI",
            technologies: "React.js, Node.js, Express.js, MongoDB, PostgreSQL, AWS, Docker",
            image: "/images/fivopay.png",
            description: "A unified fintech and banking platform combining digital wallet, payments, equity, FD/RD, lending, and branch banking operations for Cooperative Societies. Features an AI Advisor that guides members on financial decisions and loan approval dashboards for managers. Engineered KYC onboarding workflow for 20,000+ members and deployed services on AWS with Docker, Nginx, and CI/CD.",
            link: "https://play.google.com/store/apps/details?id=com.fivopay.user&pcampaignid=web_share"
        },
        {
            id: 2,
            title: "PakkaPass – Exam Preparation & Learning App",
            category: "EdTech / Mobile App",
            technologies: "React Native, Node.js, Express.js, MongoDB, Video Streaming, RESTful APIs",
            image: "/images/pakkapass.png",
            description: "PakkaPass is an exam-centric learning application designed to help students prepare effectively through video lectures, subject-wise study materials, PDF notes, previous year questions (PYQs), and mock tests. Features personalized student dashboards, study progress analytics, performance tracking, subscription management, and offline content access.",
            link: "https://play.google.com/store/apps/details?id=com.pakkapass&pcampaignid=web_share"
        },
        {
            id: 3,
            title: "Plattr – Bulk Food Catering Platform",
            category: "Mobile & Web / E-Commerce",
            technologies: "React Native, Node.js, PostgreSQL, Firebase, RESTful APIs",
            image: "/images/plattr.png",
            description: "A bulk catering order platform for events, offices, and group gatherings used by 500+ users. Features custom meal creation, quantity management, pricing calculations, and real-time order tracking with scalable backend RESTful APIs.",
            link: "https://play.google.com/store/apps/details?id=com.caterplanner.app&pcampaignid=web_share"
        },
        {
            id: 4,
            title: "Greensip – Smart Waste Management",
            category: "Mobile App / IoT & CleanTech",
            technologies: "React Native, React.js, Node.js, PostgreSQL, Firebase, IoT",
            image: "/images/greensip.png",
            description: "A smart waste management system integrating IoT hardware with a React Native mobile app, deployed as a live product on Google Play Store. Features a barcode-based reward system where users redeem points as discount coupons at partner outlets, backed by scalable Node.js and PostgreSQL RESTful APIs for real-time waste collection.",
            link: "https://github.com/aryanmandal800"
        },
        {
            id: 5,
            title: "DocSense AI – Intelligent Document Processing Platform",
            category: "AI & OCR / Intelligent Document Processing",
            technologies: "React.js, Node.js, Express.js, OCR/AI APIs, MongoDB, RESTful APIs",
            image: "/images/docsense.png",
            description: "DocSense AI is an AI-powered OCR platform designed to extract, process, and validate structured information from documents such as PAN cards, Aadhaar cards, passports, invoices, and bank statements. Converts document images and PDFs into structured JSON data with confidence scoring, document validation, history analytics, and automated API integration.",
            link: "https://github.com/aryanmandal800"
        }
    ],
    contact: {
        email: "aryanmandal800@gmail.com",
        phone: "+91 8292355155",
        github: "https://github.com/aryanmandal800",
        linkedin: "https://www.linkedin.com/in/aryanmandal-dev/",
        leetcode: "https://leetcode.com/u/AryanMandal/",
        gfg: "https://www.geeksforgeeks.org/profile/aryan_babu?from=edit&tab=activity",
        hackerrank: "https://www.hackerrank.com/profile/aryanmandal800",
        resume: "/Aryan_Cv.pdf"
    },
    skills: {
        develop: {
            title: "FRONTEND & MOBILE",
            description: "Deployed 15+ apps on Play Store & 5+ on App Store",
            details: "Specializing in React Native (Android & iOS) and React.js / Next.js with Redux state management. Successfully deployed 15+ applications on Google Play Store and 5+ applications on Apple App Store with smooth release cycles, OTA updates, and store compliance.",
            tools: ["React Native", "React.js", "Next.js", "Redux", "Play Store", "App Store", "JavaScript (ES6+)", "TypeScript", "TailwindCSS"]
        },
        design: {
            title: "BACKEND & DEVOPS",
            description: "Scalable RESTful APIs, databases & cloud infrastructure",
            details: "Designing resilient RESTful APIs and role-based workflows using Node.js & Express.js. Managing PostgreSQL, MongoDB, MySQL & Firebase databases. Deploying production infrastructure on AWS EC2, Docker, Nginx, and automated CI/CD pipelines.",
            tools: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "AWS (EC2, S3)", "Docker", "Nginx", "CI/CD", "RESTful APIs", "Firebase"]
        }
    }
};
