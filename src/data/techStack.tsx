// Frontend Icons
import ReactIcon from "../assets/icons/Frontend/react.svg";
import TailwindIcon from "../assets/icons/Frontend/icons8-tailwind-css.svg";
import TypeScriptIcon from "../assets/icons/Frontend/typescript.svg";
import JavascriptIcon from "../assets/icons/Frontend/javascript.svg";
import HTML5Icon from "../assets/icons/Frontend/HTML5.png";
import CSSIcon from "../assets/icons/Frontend/CSS.svg";
import VueIcon from "../assets/icons/Frontend/vuejs.svg";
import QuasarIcon from "../assets/icons/Frontend/Quasar.svg";
import ZustandIcon from "../assets/icons/Frontend/zustand.svg";
import PiniaIcon from "../assets/icons/Frontend/Pinialogo.svg";
import NextJSIcon from "../assets/icons/Frontend/nextjs.svg"


// Backend Icons
import NodeJsIcon from "../assets/icons/Backend/nodejs.svg";
import ExpressIcon from "../assets/icons/Backend/express.svg";
import NodeRedIcon from "../assets/icons/Backend/node-red.svg";
import CSharpIcon from "../assets/icons/Backend/CSharp.svg";
import MySQLIcon from "../assets/icons/Backend/mysql.svg";
import SQLServerIcon from "../assets/icons/Backend/sqlserver.svg";
import PostgresqlIcon from "../assets/icons/Backend/postgresql.svg";


// Factory Automation Icons
import SiemensIcon from "../assets/icons/FactoryAutomation/siemens.svg";
import WinCCIcon from "../assets/icons/FactoryAutomation/wincc.jpg";
import WonderwareIcon from "../assets/icons/FactoryAutomation/wonderware.svg";

// Tools
import DockerIcon from "../assets/icons/Tools/docker.svg";
import PostmanIcon from "../assets/icons/Tools/postman-icon-svgrepo-com.svg";



export const techStack = [
    {
        category: "Frontend",
        stack: [
            { name: "React.js", icon: ReactIcon },
            { name: "Tailwind CSS", icon: TailwindIcon },
            { name: "JavaScript", icon: JavascriptIcon },
            { name: "TypeScript", icon: TypeScriptIcon },
            { name: "Zustand", icon: ZustandIcon },
            { name: "NextJS", icon: NextJSIcon },
            { name: "Vue", icon: VueIcon },
            { name: "Quasar", icon: QuasarIcon },
            { name: "Pinia", icon: PiniaIcon },
            { name: "HTML", icon: HTML5Icon },
            { name: "CSS", icon: CSSIcon },
        ]
    },
    {
        category: "Backend",
        stack: [
            { name: "Node.js", icon: NodeJsIcon },
            { name: "Express.js", icon: ExpressIcon },
            { name: "Node-Red", icon: NodeRedIcon },
            { name: "C#", icon: CSharpIcon },
            { name: "MySQL", icon: MySQLIcon },
            { name: "Microsoft SQL Server", icon: SQLServerIcon },
            { name: "PostgreSQL", icon: PostgresqlIcon },
        ]
    },
    {
        category: "Tools",
        stack: [
            { name: "Docker", icon: DockerIcon },
            { name: "Postman", icon: PostmanIcon },
        ]
    },
    {
        category: "Factory Automation",
        stack: [
            { name: "PLC Siemens", icon: SiemensIcon },
            { name: "WinCC", icon: WinCCIcon },
            { name: "Wonderware", icon: WonderwareIcon },
        ]
    },
];


