import ProfileImage from '../assets/profile-removebg-preview.png';
import CVFile from '../assets/CV_Jukkapan_Kongjun_2019_old.pdf';

// About Me Section
const AboutMeSection: React.FC = () => {
    return (
        <section className="bg-gray-200 py-16 h-[105vh] px-[5%] flex flex-col justify-around">
            <h2 className="text-6xl font-bold text-left">About Me</h2>

            <div className="self-end flex flex-col space-y-4 items-center">
                <img src={ProfileImage} alt="Profile" className="w-96 rounded-full h-96 object-cover" />
                <div className='space-y-4 flex flex-col item-center'>
                    <h3 className="text-3xl font-bold text-center text-gray-600">Jukkapan Kongjun</h3>
                    <div className='flex justify-between divide-x divide-gray-400 font-semibold text-lg text-gray-500'>
                        <span className='px-4'>Web Development</span>
                        <span className='px-4'>Factory Automation</span>
                        <span className='px-4'>Digital Transformation</span>
                    </div>
                </div>
                <a href={CVFile}
                    download="CV_Jukkapan_Kongjun_2019_old.pdf" className='bg-gray-500 rounded-lg px-6 py-2 font-bold text-white cursor-pointer hover:bg-gray-600'>
                    Download CV
                </a>
            </div>
            <div></div>

            <div className="-translate-y-[70%] border w-3/5 shadow-md rounded-lg px-6 py-4 bg-gray-100">

                <p className="text-lg max-w-3xl mx-auto text-center">
                    I’m a Full Stack Developer based in Khonkaen, Thailand. After working as an Automation Engineer for several years, I developed a growing interest in web development while building IoT and automation-related systems. I’ve worked with diverse codebases from various machines, which helped me improve my problem-solving and system integration skills. I’m now aiming to fully transition into web development, where I hope to apply my skills in React, Node.js, and other modern technologies to create meaningful applications.
                </p>
            </div>




        </section>
    );
};

export default AboutMeSection;