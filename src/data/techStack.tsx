
// Frontend Icons
import ReactIcon from "../assets/icons/Frontend/react.svg"; 
import TailwindIcon from "../assets/icons/Frontend/icons8-tailwind-css.svg"; 
import TypeScriptIcon from "../assets/icons/Frontend/typescript.svg";
import JavascriptIcon from "../assets/icons/Frontend/javascript.svg";

// Backend Icons


// Factory Automation Icons


export const techStack = [
    {
        category: "Frontend",
        stack: [
            { name: "React.js", icon: ReactIcon },
            { name: "TypeScript", icon: TypeScriptIcon },
            { name: "JavaScript", icon: JavascriptIcon },
            { name: "HTML", icon: ReactIcon },
            { name: "CSS", icon: TailwindIcon },
            { name: "Vue", icon: TailwindIcon },
            { name: "Quasar", icon: TailwindIcon },
        ]
    },
    {
        category: "Backend",
        stack: [
            { name: "Node.js", icon: ReactIcon },
            { name: "Express.js", icon: ReactIcon },
            { name: "Node-Red", icon: ReactIcon },
            { name: "MySQL", icon: ReactIcon },
            { name: "Microsoft SQL Server", icon: ReactIcon },
        ]
    },
    {
        category: "Factory Automation",
        stack: [
            { name: "PLC Siemens", icon: ReactIcon },
            { name: "WinCC", icon: ReactIcon },
            { name: "Wonderware", icon: ReactIcon },
            { name: "TIA Portal", icon: ReactIcon },
            { name: "Step 7", icon: ReactIcon },
        ]
    }
];
