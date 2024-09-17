import ProfileImage from '../assets/profile-removebg-preview.png';
import CVFile from '../assets/Jukkapan Kongjun - Fullstack Web Developer - Resume.pdf';

const AboutMeSection: React.FC = () => {
    return (
        <section className="container mx-auto py-16 flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8 min-h-screen">
            <div className="flex flex-col items-center space-y-4 mb-8 lg:mb-0 lg:mr-8">
                <img src={ProfileImage} alt="Profile" className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover" />
                <div className="space-y-2 text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-700">Jukkapan Kongjun</h3>
                    <div className="flex justify-center divide-x divide-gray-400 font-semibold text-lg text-gray-500 space-x-2">
                        <span className="px-2">Web Development</span>
                        <span className="px-2">Factory Automation</span>
                        <span className="px-2">Digital Transformation</span>
                    </div>
                </div>
                <a href={CVFile} download="CV_Jukkapan_Kongjun_Webdev.pdf" className="bg-gray-500 rounded-lg px-6 py-2 font-bold text-white cursor-pointer hover:bg-gray-600">
                    Download CV
                </a>
            </div>

            <div className="lg:w-2/3 w-full border shadow-md rounded-lg px-6 sm:px-10 py-8 bg-gray-100">
                <p className="text-md sm:text-lg text-left">
                    I’m a Full Stack Developer based in Khonkaen, Thailand. After working as an Automation Engineer for several years, I developed a growing interest in web development while building IoT and automation-related systems. I’ve worked with diverse codebases from various machines, which helped me improve my problem-solving and system integration skills. I’m now aiming to fully transition into web development, where I hope to apply my skills in React, Node.js, and other modern technologies to create meaningful applications.
                </p>
            </div>
        </section>
    );
};

export default AboutMeSection;
