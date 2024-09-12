
// Skills Section
const SkillsSection: React.FC = () => {
    return (
        <section className="bg-gray-100 py-16 h-[105vh] flex flex-col
             items-center justify-center">
            <div className="container mx-auto ">
                <h2 className="text-3xl font-bold text-center mb-10">Tech-Stack</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Replace these icons with relevant skill logos (e.g., from Font Awesome or custom icons) */}
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <p className="text-xl font-bold">React</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <p className="text-xl font-bold">Node.js</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <p className="text-xl font-bold">TypeScript</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <p className="text-xl font-bold">SQL</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SkillsSection;