// Type definitions
export type TimelineItemType = {
    title: string;
    date: string;
    dateText: string;
    field: 'webdev' | 'automation';
    description: string;
    story: string;
    tech: string[];
};

export const timelineData: TimelineItemType[] = [
    {
        title: "TURNiX – Full Stack Developer",
        date: "2024",
        dateText: "2024",
        field: "webdev",
        description: "Started working on TURNiX to dive into full-stack development. This project challenged me to learn React and Node.js in a practical way.",
        story: "This was a major turning point for me. I realized how much I enjoy solving complex problems in the web space, and it solidified my desire to transition to web development.",
        tech: ["React", "Node.js", "MySQL", "Zustand"]
    },
    {
        title: "Rieckermann (Thailand) – Automation Engineer",
        date: "2024",
        dateText: "2019 - 2024",
        field: "automation",
        description: "Led multiple automation projects, from system integration to troubleshooting. Developed skills in PLC programming.",
        story: "Although I enjoyed the technical challenges, I realized I was more drawn to the programming aspects of the job rather than the electrical or mechanical parts.",
        tech: ["PLC", "Siemens", "SCADA"]
    },
    {
        title: "Betain CPF – Full Stack Developer",
        date: "2023",
        dateText: "2024",
        field: "webdev",
        description: "Developing a real-time monitoring system using Vue and Node.js. Focused on backend systems and database management.",
        story: "This project gave me valuable backend experience, which helped round out my full-stack skills. Working with real-time data made me appreciate the complexities of backend architecture.",
        tech: ["Vue", "Node.js", "SQL Server"]
    },
    {
        title: "Vonbundit – Full Stack Developer",
        date: "2022",
        dateText: "2024",
        field: "webdev",
        description: "...",
        story: "...",
        tech: ["Vue", "Node-RED", "SQL Server"]
    },
    {
        title: "RedBull IoT – Data Monitoring System",
        date: "2022",
        dateText: "2024",
        field: "webdev",
        description: "Worked on my first IoT project, which introduced me to web technologies like Node-RED and Vue.js.",
        story: "This project sparked my interest in web development. Even though I didn't fully understand components back then, I knew this was the direction I wanted to go.",
        tech: ["Node-RED", "Vue.js", "IoT", "UI-Builder", "CSV-Logging"]
    },
    {
        title: "Laemthong Food - A",
        date: "2021",
        dateText: "2024",
        field: "webdev",
        description: "-",
        story: "This project sparked my interest in web development. Even though I didn't fully understand components back then, I knew this was the direction I wanted to go.",
        tech: ["Node-RED", "phpMyAdmin", "PHP", "CSV-Logging"]
    },
];