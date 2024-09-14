import { useEffect, useState } from "react";
import { timelineData, TimelineItemType } from "../data/timeline";

type FilterComponentProps = {
    filter: 'all' | 'webdev' | 'automation';
    setFilter: (filter: 'all' | 'webdev' | 'automation') => void;
};

type YearMarkerProps = {
    year: string;
    isToggled: boolean;
    toggleYear: (year: string) => void;
};

type TimelineItemProps = {
    item: TimelineItemType;
    index: number;
    colorBg: (field: string) => string;
    colorText: (field: string) => string;
    colorTextLight: (field: string) => string;
    colorBgLight: (field: string) => string;
};

// Main Timeline Page Component
const TimeLinePage: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'webdev' | 'automation'>('all');
    const [order, setOrder] = useState<'newToOld' | 'oldToNew'>('newToOld');
    const [toggledYears, setToggledYears] = useState<string[]>([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<{ title: string; images: string[] }>({ title: '', images: [] });

    // Filter timeline data based on the selected filter
    let filteredData = timelineData.filter(item => filter === 'all' || item.field === filter);

    // Reverse the data if "oldToNew" is selected
    if (order === 'newToOld') {
        filteredData = [...filteredData].reverse();
    }

    // Extract year from the date field
    const getYear = (date: string) => {
        const yearMatch = date.match(/\d{4}/);
        return yearMatch ? yearMatch[0] : '';
    };

    // Toggle visibility of projects for a specific year
    const toggleYear = (year: string) => {
        setToggledYears(prev => prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]);
    };

    // Open modal with selected project's images
    const openModal = (title: string, images: string[]) => {
        setSelectedProject({ title, images });
        setModalOpen(true);
    };

    // Color functions based on the field
    const colorBg = (field: string) => (field === 'webdev' ? 'bg-blue-700' : 'bg-blue-700');
    const colorBgLight = (field: string) => (field === 'webdev' ? 'bg-blue-100' : 'bg-blue-100');
    const colorText = (field: string) => (field === 'webdev' ? 'text-blue-700' : 'text-blue-700');
    const colorTextLight = (field: string) => (field === 'webdev' ? 'text-blue-500' : 'text-blue-500');

    // Keep track of the previous year
    let previousYear = ''; // Declare previousYear here

    return (
        <div className="flex flex-col items-center px-4 sm:px-10 py-16 min-h-[105vh] space-y-8 md:space-y-16 overflow-x-hidden">
            <h2 className="font-bold text-gray-800 lg:text-6xl lg:my-6 lg:mt-8 md:my-4 md:mt-6 text-4xl my-2 mt-4">My Journey</h2>

            {/* Order Selection Dropdown */}
            <div className="mb-10">
                <label className="mr-2">Sort Order: </label>
                <select
                    value={order}
                    onChange={(e) => setOrder(e.target.value as 'newToOld' | 'oldToNew')}
                    className="p-2 border rounded"
                >
                    <option value="oldToNew">Oldest First</option> 
                    <option value="newToOld">Newest First</option>
                </select>
            </div>

            {/* Filter Radio Buttons */}
            <FilterComponent filter={filter} setFilter={setFilter} />

            <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute bg-gray-300 z-0 lg:left-1/2 w-1 h-full left-8" />

                {filteredData.map((item, index) => {
                    const year = getYear(item.date);
                    const isToggled = toggledYears.includes(year);

                    // Render year marker if new year is encountered
                    let displayYear = null;
                    if (year !== previousYear) {
                        previousYear = year; // Update previousYear to the current one
                        displayYear = <YearMarker key={`year-marker-${index}`} year={year} isToggled={isToggled} toggleYear={toggleYear} />;
                    }

                    // Skip rendering if the year is toggled
                    if (isToggled) return <div key={index}>{displayYear}</div>;

                    return (
                        <div key={index}>
                            {displayYear}
                            <TimelineItem
                                item={item}
                                index={index + 1}
                                colorBg={colorBg}
                                colorText={colorText}
                                colorTextLight={colorTextLight}
                                colorBgLight={colorBgLight}
                                onClick={() => openModal(item.title, item.projectImages)} // Open modal on click
                            />
                        </div>
                    );
                })}
            </div>

            {/* Modal for displaying project images */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                projectTitle={selectedProject.title}
                projectImages={selectedProject.images}
            />
        </div>
    );
};

// Timeline Filter Component
const FilterComponent: React.FC<FilterComponentProps> = ({ filter, setFilter }) => {
    return (
        <div className="flex space-x-4 mb-10">
            <label>
                <input
                    type="radio"
                    name="filter"
                    value="all"
                    checked={filter === 'all'}
                    onChange={() => setFilter('all')}
                />
                <span className="ml-2">All</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value="webdev"
                    checked={filter === 'webdev'}
                    onChange={() => setFilter('webdev')}
                />
                <span className="ml-2">Web Development</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value="automation"
                    checked={filter === 'automation'}
                    onChange={() => setFilter('automation')}
                />
                <span className="ml-2">Automation</span>
            </label>
        </div>
    );
};

// Year Marker Component
const YearMarker: React.FC<YearMarkerProps> = ({ year, isToggled, toggleYear }) => {
    return (
        <div className="flex cursor-pointer
        lg:justify-center items-center mb-6 
        justify-start ">
            <span
                onClick={() => toggleYear(year)}
                className="text-xl font-bold text-gray-600 bg-gray-50 z-10 translate-x-1"
            >
                {year} {isToggled ? '(Show)' : '(Hide)'}
            </span>
        </div>
    );
};

const TimelineItem: React.FC<TimelineItemProps & { onClick: () => void }> = ({ item, index, colorBg, colorText, colorTextLight, colorBgLight, onClick }) => {
    return (
        <div className={`mb-12 flex w-full ${item.field === 'webdev' ? 'flex-row-reverse lg:translate-x-6' : 'lg:flex-row flex-row-reverse lg:-translate-x-6'} items-center justify-between lg:justify-start`} >
            <div onClick={onClick} className="cursor-pointer lg:w-1/2 lg:px-4 w-5/6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:bg-gray-100 hover:bg-opacity-30">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">{item.title}</h3>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600">{item.dateText}</div>
                    <p className="mt-2 text-sm sm:text-base md:text-lg">{item.description}</p>
                    <p className={`mt-4 italic ${colorTextLight(item.field)} text-sm sm:text-base md:text-lg`}>
                        {item.story}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {item.tech.map((tech, techIndex) => (
                            <span key={techIndex} className={`${colorBgLight(item.field)} ${colorText(item.field)} px-2 py-1 rounded text-xs sm:text-sm md:text-base`}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline Marker */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${colorBg(item.field)} text-white shadow-md z-10 lg:translate-x-0 translate-x-2`}>
                {index}
            </div>
        </div>
    );
};

// Modal Component for showing project images
const Modal: React.FC<{ isOpen: boolean, onClose: () => void, projectTitle: string, projectImages: string[] }> = ({ isOpen, onClose, projectTitle, projectImages }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen])
    if (!isOpen) return null;



    return (
        <div className="fixed left-0 right-0 -top-16 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-50 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-2/3">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold">{projectTitle}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
                </div>
                <div className="p-6">
                    <img src={projectImages[currentImageIndex]} alt={projectTitle} className="w-full h-auto mb-4" />
                    <div className="flex justify-between items-center">
                        <button className="disabled:opacity-50" disabled={currentImageIndex === 0} onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : projectImages.length - 1))}>Previous</button>
                        <button className="disabled:opacity-50" disabled={currentImageIndex === projectImages.length - 1} onClick={() => setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeLinePage;
