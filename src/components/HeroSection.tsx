import { useState, useEffect } from 'react';
import bgIdea from '../assets/bg1.png';

type HeroSectionProps = {
    scrollToJourney: () => void;
    scrollToAbout: () => void;
    scrollToContact: () => void;
};

const ButtonStyle = `bg-transparent border-gray-300 border text-gray-300 md:px-6 md:py-3 px-2 py-1 rounded-lg md:text-lg text-sm`;

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToJourney, scrollToAbout, scrollToContact }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 300);
    }, []);

    return (
        <section className="container mx-auto text-white h-screen flex relative
        md:justify-start md:items-center  md:px-8
        justify-center   items-center  px-4 ">
            <img className="absolute inset-0 opacity-10 z-0 w-full h-full object-cover" src={bgIdea} alt="Background" />

            <div className={`relative z-10 transition-transform duration-300  ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                <div className='hidden lg:block absolute border-8 border-gray-600 top-10 -right-10 w-[800px] rounded-lg shadow-2xl shadow-gray-700 z-0 h-[25rem]'></div>
                <div className='relative border border-gray-600 bg-gray-600 rounded-md shadow-xl z-10
                md:px-16 md:py-10
                px-8  py-6 '>
                    <h1 className="md:text-5xl  text-2xl font-bold">Hello,</h1>
                    <div className="md:text-5xl  text-2xl font-bold">I'm Jukkapan Kongjun</div>
                    <h2 className="md:text-3xl text-lg mt-4">A Full Stack Developer</h2>
                    <p className=" md:text-lg text-md mt-6 max-w-2xl text-left">
                        I’m passionate about building modern, scalable applications and transitioning from a career in automation engineering to web development.
                    </p>

                    <div className="mt-10 space-x-4 flex flex-wrap justify-center sm:justify-start">
                        <button onClick={scrollToAbout} className={`${ButtonStyle} transition-transform duration-500`}>
                            About Me
                        </button>
                        <button onClick={scrollToJourney} className={`${ButtonStyle} transition-transform duration-700`}>
                            Journey
                        </button>
                        <button onClick={scrollToContact} className={`${ButtonStyle} transition-transform duration-1000`}>
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
            <div>

            </div>

        </section>
    );
};

export default HeroSection;
