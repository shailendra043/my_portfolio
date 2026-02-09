
export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: "https://via.placeholder.com/150",
    },
    {
        title: "React Native Developer",
        icon: "https://via.placeholder.com/150",
    },
    {
        title: "Backend Developer",
        icon: "https://via.placeholder.com/150",
    },
    {
        title: "Content Creator",
        icon: "https://via.placeholder.com/150",
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
        name: "CSS 3",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
        name: "TypeScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
        name: "React JS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
        name: "Redux Toolkit",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
    {
        name: "Tailwind CSS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
        name: "Node JS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "MongoDB",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
        name: "Three JS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg",
    },
    {
        name: "git",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    {
        name: "figma",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    },
    {
        name: "docker",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    },
];

const experiences = [
    {
        title: "Software Developer Intern",
        company_name: "Trynocode Technology Pvt Ltd",
        icon: "https://via.placeholder.com/150",
        iconBg: "#383E56",
        date: "Aug 2025 - Present",
        points: [
            "Orchestrated the full app lifecycle for three production-ready mobile applications using FlutterFlow and Firebase.",
            "Engineered secure user authentication flows via Firebase Authentication, decreasing login time by 3 seconds.",
            "Built and launched live apps: BottlesUp, On-Demand Hire, and Populose.",
            "Gained hands-on experience in startup-level mobile app development and Play Store deployment.",
        ],
    },
    {
        title: "Freelance Python Developer",
        company_name: "AfterQuery Experts",
        icon: "https://via.placeholder.com/150",
        iconBg: "#E6DEDD",
        date: "Jan 2025 - Present",
        points: [
            "Engineered 10 advanced LeetCode-style algorithmic problems to expose edge cases in LLM testing.",
            "Pioneered 6 unique coding challenges that identified critical vulnerabilities in LLM-based AI tools.",
            "Conducted in-depth analysis of AI solution patterns enabling 30+ targeted test cases.",
            "Enhanced LLM robustness and reduced model bias significantly.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Stock Order Engine",
        description:
            "Low Latency Stock Order Matching Engine developed in C++. Implemented price-time priority logic for accurate and fast buy/sell order matching. Reduced memory footprint and optimized CPU utilization by 25%.",
        tags: [
            {
                name: "cpp",
                color: "blue-text-gradient",
            },
            {
                name: "low-latency",
                color: "green-text-gradient",
            },
            {
                name: "algorithms",
                color: "pink-text-gradient",
            },
        ],
        image: "https://via.placeholder.com/300x200",
        source_code_link: "https://github.com/",
    },
    {
        name: "Stock Prediction App",
        description:
            "ML-based stock prediction app using Python and LSTM to forecast market trends for Nifty 50 companies. Integrated real-time data via Yahoo Finance API and built an interactive Streamlit dashboard.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "lstm",
                color: "green-text-gradient",
            },
            {
                name: "streamlit",
                color: "pink-text-gradient",
            },
        ],
        image: "https://via.placeholder.com/300x200",
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
