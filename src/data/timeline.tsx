// TCP - Redbull
import Images from "../assets/images/tcp-redbull/alarm.png";
import TcpAlarm from "../assets/images/tcp-redbull/alarm.png";
import TcpChiller from "../assets/images/tcp-redbull/chiller.png";
import TcpCleaning from "../assets/images/tcp-redbull/cleaning.png";
import TcpExhaust from "../assets/images/tcp-redbull/exhaust.png";
import TcpManhour from "../assets/images/tcp-redbull/manhour.png";
import TcpOverview from "../assets/images/tcp-redbull/overview.png";
import TcpSetting from "../assets/images/tcp-redbull/setting.png";
import TcpStartMotor from "../assets/images/tcp-redbull/startmotor.png";
import TcpTrendExhuast from "../assets/images/tcp-redbull/trend-exhaust.png";
import TcpHumidity from "../assets/images/tcp-redbull/trend-humidity.png";

// Turnixx
import TurnixxLanding from "../assets/images/turnixx/landing.png";
import TurnixxExplore from "../assets/images/turnixx/explore.png";
import TurnixxProduct from "../assets/images/turnixx/product-detail.png";
import TurnixxLogin from "../assets/images/turnixx/login.png";
import TurnixxAccount from "../assets/images/turnixx/account.png";


// Type definitions
export type TimelineItemType = {
  title: string;
  date: string;
  dateText: string;
  field: "webdev" | "automation";
  description: string;
  story: string;
  tech: string[];
  projectImages: string[];
};

export const timelineData: TimelineItemType[] = [
  {
    title: "First Month at Rieckermann",
    date: "August 2019",
    dateText: "August 2019",
    field: "automation",
    description:
      "Supporting senior engineers and technical sales in early tasks, laying the foundation for real-world problem-solving and system compatibility knowledge.",
    story:
      "My entry into the world of automation. Though my tasks were junior-level, I learned valuable lessons in adaptability and problem-solving by observing senior engineers in action. This set the stage for my technical growth and problem-solving mindset.",
    tech: [],
    projectImages: [],
  },
  {
    title: "3K Battery (Thai Energy Storage Welder Machine)",
    date: "2019 - 2020",
    dateText: "2019 - 2020",
    field: "automation",
    description:
      "System migration project upgrading an old PLC (SLC500) to S7-1515T with new S120 servo motors and implementing remote HMI for machine configuration and control.",
    story:
      "My first major project in automation. I handled PLC programming and system integration, overcoming delays and errors through collaboration with senior engineers. Working under COVID-19 pressures, I learned the importance of problem-solving, communication, and adaptability.",
    tech: ["PLC", "Servo Motors", "HMI", "Automation"],
    projectImages: [Images],
  },
  {
    title: "Gislotica Spray Robot - Continental",
    date: "October 2020",
    dateText: "October 2020",
    field: "automation",
    description:
      "Remote commissioning of a spray robot system for Continental, acting as the middleman between Gislotica (Portugal) and Continental engineers.",
    story:
      "My first international collaboration, where I coordinated between engineers from different countries to troubleshoot a spray robot system. The project faced material specification issues, but through problem-solving and persistence, we completed the task despite delays.",
    tech: [
      "Robot",
      "Remote Support",
      "Commissioning",
      "WinCC Advacned",
      "Automation",
    ],
    projectImages: [Images],
  },
  {
    title: "Siemens IOT2000 Presentation",
    date: "2020",
    dateText: "2020",
    field: "automation",
    description:
      "Introduction to Siemens IOT2000 series, which showcased the integration of industrial communication systems with modern IoT platforms, sparking my interest in web development.",
    story:
      "This presentation was the turning point in my journey, showing me the potential of connecting industrial automation systems with web-based interfaces through tools like Node-RED and IoT devices. It was the first time I saw how my skills in automation could translate into the world of web development.",
    tech: [
      "IOT2000",
      "Node-RED",
      "S7-PLC",
      "Modbus",
      "Industrial Communication",
    ],
    projectImages: [Images],
  },
  {
    title: "Laemthong IoT - Webdev",
    date: "February 2021",
    dateText: "February 2021",
    field: "webdev",
    description:
      "A project for monitoring production yield, centralizing data storage, and generating reports for a factory using Apache, PHP, and MySQL.",
    story:
      "This was my first project where I developed a web-based system for monitoring production yield. I set up a local server with Apache, used a PHP-based admin template for login, and integrated data from Node-RED. It was a small project but marked my first deep dive into web development.",
    tech: ["Apache", "Node-RED", "PHP", "MySQL", "HTML", "CSS", "PLC"],
    projectImages: [Images],
  },
  {
    title: "Motor Test Stand AMR-BTS",
    date: "March 2021",
    dateText: "March 2021",
    field: "automation",
    description:
      "Testing motor systems for BTS train maintenance, focusing on Hipot, winding resistance, temperature, vibration, and sound frequency. Involved communication via RS232 and data logging using SQL.",
    story:
      "This project involved motor testing for BTS trains and introduced me to RS232 communication and SQL for data logging. I applied VBScript communication logic to connect equipment to the PLC and laptop, while overcoming challenges with electrical trips and inverter tuning.",
    tech: ["RS232", "SQL", "SCADA", "PLC"],
    projectImages: [Images],
  },
  {
    title: "Cardinal Health Commissioning",
    date: "Late 2021",
    dateText: "Late 2021",
    field: "automation",
    description:
      "Remote commissioning support for an auto-transfer groves machine, collaborating with a Malaysian team to improve machine performance.",
    story:
      "This project involved working with a multicultural team and monitoring SCADA systems during night shifts. It was a physically and mentally challenging experience, but it helped me improve my English communication skills and develop resilience in demanding work conditions.",
    tech: ["SCADA", "Remote Commissioning", "Automation"],
    projectImages: [Images],
  },
  {
    title: "JBT - McKey (Fried Chicken Machine)",
    date: "early 2022",
    dateText: "2022",
    field: "automation",
    description:
      "Automation project to control the frying system for a chicken production line, including first exposure to PID tuning and multidisciplinary teamwork.",
    story:
      "This project involved working on a fryer chicken machine with the JBT team. It was my first time using PID tuning to control oil temperature and taught me the importance of understanding both electrical and mechanical systems in addition to programming. Communication was handled via walkie-talkies due to low phone signal in the area.",
    tech: ["PID Tuning", "Automation", "PLC"],
    projectImages: [Images],
  },
  {
    title: "ATTG - NAWALOHA",
    date: "March 2022",
    dateText: "March 2022",
    field: "automation",
    description:
      "Improved production tracking by integrating SCADA signals with an MSSQL database, enabling the factory to analyze material usage and batch results.",
    story:
      "This project marked my first experience with SQL and VBScript. I was responsible for correcting SCADA code, tapping into signals, and integrating the data into an SQL database to track material usage. It was also a significant leadership experience, as I was the sole engineer on the project after my senior left.",
    tech: ["SCADA", "SQL", "VBScript",  "Automation"],
    projectImages: [Images],
  },
  {
    title: "MTT - Monexco (S7-300 to S7-1500 Migration)",
    date: "April 2022",
    dateText: "April 2022",
    field: "automation",
    description:
      "Migrated a material mixing system from S7-300 to S7-1500 and updated the HMI, overcoming challenges with missing source code and equipment malfunctions.",
    story:
      "This was my first fully hands-on technical project, where I migrated a system and updated the HMI. I faced challenges with missing source code, broken equipment, and an inverter explosion, but I completed the project successfully. This experience taught me how to handle high-pressure situations and work independently.",
    tech: ["S7-1500", "S7-300", "HMI", "Automation"],
    projectImages: [Images],
  },
  {
    title: "TCP กระทิงแดง (Red Bull IoT Project)",
    date: "April 2022",
    dateText: "April 2022",
    field: "webdev",
    description:
      "Implemented a web-based real-time monitoring and control system using Siemens IoT2000, Node-RED, Vue 2, and SVG visualizations for monitoring production equipment at Red Bull’s factory.",
    story:
      "This project marked my first professional use of IoT2000. I integrated Vue 2 with Node-RED’s UI-Builder to create custom web pages for real-time data visualization and control. Leveraging SVG for machine status and sensor data, I built a SCADA-like interface that allowed for real-time monitoring of equipment without data storage, focusing on immediate machine control and status updates.",
    tech: [
      "Siemens IoT2000",
      "Node-RED",
      "Vue 2",
      "SVG",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    projectImages: [TcpAlarm, TcpChiller, TcpCleaning, TcpExhaust, TcpManhour, TcpOverview, TcpSetting, TcpStartMotor, TcpTrendExhuast, TcpHumidity],
  },
  {
    title: "DTS - BMW - TYSK (Electric Car Battery Commissioning)",
    date: "December 2022",
    dateText: "December 2022",
    field: "automation",
    description:
      "Commissioned and adjusted HMI systems for an electric car battery assembly line, collaborating with a European team under BMW's rigorous TMO standards.",
    story:
      "This was a particularly challenging project due to the language barriers and the strict BMW TMO standards. Working with a European team from Thyssenkrupp, DTS, and BMW, I had to adapt quickly and learn how to meet world-class standards. Despite the challenges, I successfully completed the project, gaining valuable experience in international collaboration and troubleshooting complex systems.",
    tech: ["HMI",  "Commissioning", "Automation"],
    projectImages: [Images],
  },
  {
    title: "Mitsubishi - Emerson (Vibration Logging and ThingWorx Integration)",
    date: "April 2023",
    dateText: "April 2023",
    field: "automation",
    description:
      "Developed a vibration logging system with alerts and data integration into ThingWorx using Emerson’s MoviconNext software and MSSQL.",
    story:
      "This project involved building a vibration logging system using Emerson’s MoviconNext software. While the initial demo passed testing, performance issues arose due to hardware limitations (a low-spec touch PC). Despite trying to rebuild the system with Node-RED and Vue, the project didn’t meet the deadline, and it ended up requiring a hardware upgrade. This project taught me valuable lessons about optimizing systems for hardware limitations and avoiding overcomplicating solutions.",
    tech: [
      "MoviconNext",
      "MSSQL",
      "Node-RED",
      "Vue",
      "ThingWorx",
    ],
    projectImages: [Images],
  },
  {
    title: "Vonbundit (Data Logging and Monitoring System)",
    date: "May 2023",
    dateText: "May 2023",
    field: "webdev",
    description:
      "Implemented a data logging and monitoring system with historian trend visualization and CSV export functionality using MSSQL, Node-RED, and Vue 2.",
    story:
      "This project involved setting up a data logging and monitoring system for Vonbundit. It used a familiar stack—MSSQL, Node-RED, and Vue 2—and was built by adjusting and reusing code from previous projects. While it didn’t present new challenges, it reinforced the importance of writing adaptable code that can be reused across multiple projects.",
    tech: ["MSSQL", "Node-RED", "Vue 2"],
    projectImages: [Images],
  },
  {
    title: "Ajinomoto (Vibration Logging and Monitoring System)",
    date: "2023",
    dateText: "2023",
    field: "webdev",
    description:
      "Implemented a vibration logging and monitoring system with historian trend visualization and CSV export using PostgreSQL after migrating from MSSQL due to configuration issues.",
    story:
      "This project initially faced issues with setting up MSSQL, so I decided to switch to PostgreSQL, a database I learned about during a previous project. After successfully migrating the system, the project continued smoothly. Although small in scope, it broadened my database management skills and taught me the importance of adaptability.",
    tech: ["PostgreSQL", "Node-RED", "Vue 2"],
    projectImages: [Images],
  },
  {
    title: "CPF - Betain (Fluid Measurement and Control System)",
    date: "September 2023",
    dateText: "September 2023",
    field: "webdev",
    description:
      "Developed a fluid measurement system using Vue 3, Node.js with Express for backend API, and MSSQL for the database. Switched from Vuetify to Quasar for UI components.",
    story:
      "This project marked my first full-stack development experience, where I moved away from using Node-RED and uibuilder. I built the frontend using Quasar after facing limitations with Vuetify for Vue 3. On the backend, I created an API from scratch using Node.js and Express, a significant challenge after relying on low-code tools in the past. Despite the difficulties, I completed the project successfully.",
    tech: ["Vue 3", "Quasar", "Node.js", "Express", "MSSQL"],
    projectImages: [Images],
  },
  {
    title: "Betterpharma Dosa (SCADA System Migration from XP to 11)",
    date: "Late 2023",
    dateText: "Late 2023",
    field: "automation",
    description:
      "Migrated a complex batch control system from Windows XP to 11, updating the SCADA system, communication protocols, and Delphi applications. Integrated OPC software to solve communication issues between Wonderware and PLCs.",
    story:
      "This was the most difficult project of my career, migrating a legacy system that had been running since 2005 to modern hardware. The project involved adapting outdated Delphi programs, changing communication protocols from Profibus to Profinet, and updating Wonderware tags to fit the new system architecture. Despite the immense challenges, we completed the project successfully, working late nights to ensure the system was operational.",
    tech: [
      "Windows 11",
      "SCADA",
      "Wonderware",
      "Delphi 7",
      "OPC Software",
      "S7-400 PLC",
      "Profinet",
    ],
    projectImages: [Images],
  },
  {
    title: "Transition to Full-Stack Development",
    date: "February 2024",
    dateText: "February 2024",
    field: "webdev",
    description:
      "Left my job to attend a full-stack development bootcamp, focusing on solidifying my frontend and backend skills while transitioning from automation engineering.",
    story:
      "After years of working in automation, I decided to fully commit to my passion for web development. I enrolled in a bootcamp that helped me solidify the skills I had been exploring in my free time. This decision allowed me to focus on honing my frontend and backend development abilities and take the next step in my career.",
    tech: [
     
    ],
    projectImages: [],
  },
  {
    title: "Turnixx (Full-Stack Development Project)",
    date: "May - September 2024",
    dateText: "May - September 2024",
    field: "webdev",
    description:
      "Built a full-stack book exchange platform using React, TypeScript, Node-Express, MySQL, and Zustand. Integrated OpenLibrary API for book data and used Prisma to manage the database.",
    story:
      "Turnixx was my first full-stack project, planned for two months but extended to four. I struggled initially with backend SQL commands and frontend design, but switching to Prisma and using TailwindCSS helped me overcome these obstacles. This project solidified my knowledge in building complete web applications, from backend APIs to frontend UI, and managing state with Zustand.",
    tech: [
      "React",
      "TypeScript",
      "Node-Express",
      "Prisma",
      "MySQL",
      "TailwindCSS",
      "Zustand",
      "JWT",
      "OpenLibrary API",
    ],
    projectImages: [TurnixxLanding, TurnixxExplore, TurnixxProduct, TurnixxLogin, TurnixxAccount],
  },
];
