const portfolioData = {
    personalDetails: {
        fullName: "Rocky Patel",
        headline: "Embedded Systems & Full-Stack Developer | Android Automotive IVI | BSP | C/C++ | React | Node.js",
        location: "Kolkata, West Bengal, India",
        email: "rocky7061patel@gmail.com",
        phone: "+91 7357577247",
        about: "I am a passionate Embedded Systems and Full-Stack Developer with a strong background in Android Automotive IVI, BSP, and modern web technologies. I bridge the gap between low-level hardware interaction and high-level user interfaces, creating seamless and efficient solutions.",
        social: {
            linkedin: "https://www.linkedin.com/in/rocky-patel-eee",
            github: "https://github.com/Rpatel9675",
            leetcode: "https://leetcode.com/u/Rpatel9675/",
            instagram: "https://www.instagram.com/r0k_i7/"
        }
    },
    skills: {
        programming: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript"],
        embedded: ["Android Automotive (IVI)", "BSP Development", "RTOS", "Linux Kernel", "Device Drivers", "CAN/LIN"],
        web: ["React.js", "Node.js", "Express", "HTML5/CSS3", "Tailwind CSS", "MongoDB"],
        tools: ["Git", "Docker", "JIRA", "Android Studio", "VS Code", "Oscilloscope"]
    },
    experience: [
        {
            id: 1,
            role: "Android Automotive IVI Engineer",
            company: "Tech Mahindra",
            location: "Bangalore, India",
            duration: "2022 - Present",
            description: "Developing In-Vehicle Infotainment (IVI) systems for major automotive OEMs. Working on Android framework customization, HAL integration, and car service implementation.",
            tools: ["Android AOSP", "Java", "Kotlin", "C++", "Git"]
        },
        {
            id: 2,
            role: "Embedded Software Engineer",
            company: "L&T Technology Services",
            location: "Mysore, India",
            duration: "2020 - 2022",
            description: "Worked on Board Support Packages (BSP) for ARM-based microcontrollers. Implemented device drivers for I2C, SPI, and UART interfaces.",
            tools: ["C", "Embedded Linux", "ARM Cortex", "FreeRTOS"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Smart IVI Dashboard",
            category: "Automotive",
            description: "A custom Android Automotive launcher with real-time vehicle signal visualization using VHAL.",
            techStack: ["Android AOSP", "Kotlin", "Vehicle HAL"],
            link: "https://github.com/Rpatel9675",
            image: "https://placehold.co/600x400/1a1a1a/ffffff?text=IVI+Dashboard"
        },
        {
            id: 2,
            title: "IoT Home Automation",
            category: "Embedded / IoT",
            description: "ESP32-based home automation system controlled via a React Native mobile app.",
            techStack: ["ESP32", "C++", "MQTT", "React Native"],
            link: "https://github.com/Rpatel9675",
            image: "https://placehold.co/600x400/1a1a1a/ffffff?text=IoT+Home"
        },
        {
            id: 3,
            title: "Portfolio Website",
            category: "Web Dev",
            description: "Modern personal portfolio built with React and Framer Motion.",
            techStack: ["React", "Framer Motion", "CSS"],
            link: "https://github.com/Rpatel9675",
            image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Portfolio"
        }
    ],
    education: [
        {
            id: 1,
            degree: "B.Tech in Electrical & Electronics Engineering",
            institute: "Institute of Engineering & Management",
            year: "2016 - 2020",
            grade: "8.5 CGPA"
        }
    ],
    achievements: [
        "Published paper on 'Real-time RTOS Scheduling' in IEEE Conference.",
        "Winner of Smart India Hackathon 2019 (Hardware Edition).",
        "5 Star C++ Coder on HackerRank."
    ]
};

export default portfolioData;
