
type HeroSectionProps = {

    scrollToProjects: () => void;
    scrollToJourney: () => void;
    scrollToAbout: () => void;
    scrollToContact: () => void;
};
// Hero Section (Introduction)
const HeroSection: React.FC<HeroSectionProps> = ({ scrollToProjects, scrollToJourney, scrollToAbout, scrollToContact }) => {
    return (
        <section className="bg-gray-700 text-white h-screen flex justify-between items-center px-[5%]">
            <div>
                <h1 className="text-5xl font-bold ">Hello, </h1>
                <div className="text-5xl font-bold ">I'm Jukkapan Kongjun</div>
                <h2 className="text-3xl mt-4">A Full Stack Developer</h2>
                <p className="mt-6 text-lg max-w-2xl text-left">
                    I’m passionate about building modern, scalable applications and transitioning from a career in automation engineering to web development.
                </p>

                <div className="mt-10 space-x-4 flex">

                    <button onClick={scrollToProjects} className="bg-white text-blue-700 px-6 py-3 rounded-lg shadow-lg hidden">
                        Projects
                    </button>
                    <button onClick={scrollToJourney} className="bg-white text-blue-700 px-6 py-3 rounded-lg shadow-lg">
                        Journey
                    </button>
                    <button onClick={scrollToAbout} className="bg-white text-blue-700 px-6 py-3 rounded-lg shadow-lg">
                        About Me
                    </button>
                    <button onClick={scrollToContact} className="bg-white text-blue-700 px-6 py-3 rounded-lg shadow-lg">
                        Contact Me
                    </button>
                </div>
            </div>

            <div>

            </div>
        </section>
    );
};

export default HeroSection;