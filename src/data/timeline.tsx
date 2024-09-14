// TCP - Redbull
import Images from '../assets/images/tcp-redbull/alarm.png';
import Alarm from '../assets/images/tcp-redbull/alarm.png';
import Chiller from '../assets/images/tcp-redbull/chiller.png';

// Type definitions
export type TimelineItemType = {
    title: string;
    date: string;
    dateText: string;
    field: 'webdev' | 'automation';
    description: string;
    story: string;
    tech: string[];
    projectImages: string[];
};

export const timelineData: TimelineItemType[] = [
    {
        title: "3K Battery",
        date: "2019 - 2020",
        dateText: "2019 - 2020",
        field: "automation",
        description: "Battery automation project focusing on quality control systems.",
        story: "This project laid the groundwork for my experience in battery manufacturing automation.",
        tech: ["PLC", "HMI", "S120", "Automation"],
        projectImages: [Images],
    },
    {
        title: "Gislotica Spray Robot - Continental",
        date: "2020",
        dateText: "October 2020",
        field: "automation",
        description: "Developed and integrated spray robot systems for automation.",
        story: "This project was challenging due to the precision required in robotic arm movements and spray calibration.",
        tech: ["PLC", "Robotics", "Automation"],
        projectImages: [Images],
    },
    {
        title: "Laemthong IoT - Webdev",
        date: "2021",
        dateText: "February 2021",
        field: "webdev",
        description: "Developed an IoT-based monitoring system for Laemthong Food Factory.",
        story: "This was my introduction to IoT systems and web development.",
        tech: ["Node-RED", "PHP", "Web Development", "Integration", "PLC"],
        projectImages: [Images],
    },
    {
        title: "Motor Test Stand AMR-BTS",
        date: "2021",
        dateText: "March 2021",
        field: "automation",
        description: "Implemented motor testing and control systems.",
        story: "A highly technical project that involved complex system diagnostics and troubleshooting.",
        tech: ["PLC", "Motor Testing", "Automation"],
        projectImages: [Images],
    },
    {
        title: "ATTG - NAWALOHA",
        date: "2022",
        dateText: "March 2022",
        field: "automation",
        description: "Implemented automation systems for ATTG's manufacturing process.",
        story: "This project further honed my skills in troubleshooting and optimizing industrial automation.",
        tech: ["PLC", "SCADA"],
        projectImages: [Images],
    },
    {
        title: "Cardinal Health",
        date: "2021",
        dateText: "Late 2021",
        field: "automation",
        description: "Worked on automation systems for medical devices.",
        story: "This project taught me about automation in the healthcare sector and the precision required.",
        tech: ["PLC", "Automation", "Medical Devices"],
        projectImages: [Images],
    },
    {
        title: "RedBull IoT – Data Monitoring System",
        date: "2022",
        dateText: "2022",
        field: "webdev",
        description: "Worked on my first IoT project, which introduced me to web technologies like Node-RED and Vue.js.",
        story: "This project sparked my interest in web development. Even though I didn't fully understand components back then, I knew this was the direction I wanted to go.",
        tech: ["Node-RED", "Vue.js", "IoT", "UI-Builder", "CSV-Logging"],
        projectImages: [Images],
    },
    {
        title: "MTT - Monexco",
        date: "2022",
        dateText: "April 2022",
        field: "automation",
        description: "Focused on process automation for industrial systems.",
        story: "This project challenged me to work on improving system performance and reliability.",
        tech: ["PLC", "SCADA"],
        projectImages: [Images],
    },
    {
        title: "DTS - BMW - TYSK",
        date: "2022",
        dateText: "December 2022",
        field: "automation",
        description: "Automated testing systems for BMW manufacturing.",
        story: "A high-pressure project with strict deadlines, but it helped me grow in managing complex automation systems.",
        tech: ["PLC", "SCADA", "Automation"],
        projectImages: [Images],
    },
    {
        title: "Mitsu - Emerson - Vibration Logging, Alert",
        date: "2023",
        dateText: "April 2023",
        field: "webdev",
        description: "Developed a vibration monitoring system with real-time alerts.",
        story: "This project deepened my understanding of sensor integration and real-time data monitoring.",
        tech: ["PLC", "Vibration Sensors", "Data Logging"],
        projectImages: [Images],
    },
    {
        title: "Vonbundit – Full Stack Developer",
        date: "2023",
        dateText: "May 2023",
        field: "webdev",
        description: "Implemented a logging system for a manufacturing company, focusing on real-time data collection and analysis.",
        story: "This project was pivotal in enhancing my skills in managing large datasets and improving system performance.",
        tech: ["Vue", "Node-RED", "SQL Server"],
        projectImages: [Images],
    },
    {
        title: "Ajinomoto - Vibration Logging",
        date: "2023",
        dateText: "2023",
        field: "webdev",
        description: "Developed a vibration monitoring and logging system for industrial machines.",
        story: "I worked with vibration data and alert systems to enhance machinery maintenance.",
        tech: ["PLC", "Vibration Sensors", "Automation"],
        projectImages: [Images],
    },
    {
        title: "Betain CPF – Full Stack Developer",
        date: "2023",
        dateText: "September 2023",
        field: "webdev",
        description: "Developed a real-time monitoring system using Vue and Node.js. Focused on backend systems and database management.",
        story: "This project gave me valuable backend experience, which helped round out my full-stack skills. Working with real-time data made me appreciate the complexities of backend architecture.",
        tech: ["Vue", "Node.js", "SQL Server"],
        projectImages: [Images],
    },
    {
        title: "TURNiX – Full Stack Developer",
        date: "2024",
        dateText: "2024",
        field: "webdev",
        description: "Started working on TURNiX to dive into full-stack development. This project challenged me to learn React and Node.js in a practical way.",
        story: "This was a major turning point for me. I realized how much I enjoy solving complex problems in the web space, and it solidified my desire to transition to web development.",
        tech: ["React", "Node.js", "MySQL", "Zustand"],
        projectImages: [Alarm, Chiller],
    },
];

