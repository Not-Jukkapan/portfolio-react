// Projects/Featured Work Section
const ProjectsSection: React.FC = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {/* Project Card 1 */}
                    <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">TURNiX – Book Exchange Platform</h3>
                        <p className="mt-2">A platform for book enthusiasts to list, search, and trade books.</p>
                        <p className="mt-2 italic text-blue-500">React, Node.js, MySQL, Zustand</p>
                        <a href="https://github.com/Not-Jukkapan/book-exchange" className="block mt-4 text-blue-700 underline">
                            View Project
                        </a>
                    </div>

                    {/* Project Card 2 */}
                    <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">Betain CPF – Fluid Monitoring System</h3>
                        <p className="mt-2">A real-time monitoring system using Vue and Node.js for backend systems and database management.</p>
                        <p className="mt-2 italic text-blue-500">Vue.js, Node.js, SQL Server</p>
                        <a href="https://github.com/yourusername/betain-cpf" className="block mt-4 text-blue-700 underline">
                            View Project
                        </a>
                    </div>

                    {/* Add more projects as needed */}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection; 