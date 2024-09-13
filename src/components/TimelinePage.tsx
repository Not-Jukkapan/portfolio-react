import { useState } from "react";
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
    const [toggledYears, setToggledYears] = useState<string[]>([]); // To keep track of toggled years

    let filteredData = timelineData.filter(item => filter === 'all' || item.field === filter);

    // Reverse the data if "newToOld" is selected
    if (order === 'oldToNew') {
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

    // Keep track of the previous year
    let previousYear = '';
    let projectIndex = 1;

    const colorBg = (field: string) => field === 'webdev' ? 'bg-blue-700' : 'bg-green-700';
    const colorBgLight = (field: string) => field === 'webdev' ? 'bg-blue-100' : 'bg-green-100';
    const colorText = (field: string) => field === 'webdev' ? 'text-blue-700' : 'text-green-700';
    const colorTextLight = (field: string) => field === 'webdev' ? 'text-blue-500' : 'text-green-500';

    return (
        <div className="flex flex-col items-center px-4 sm:px-10  py-16 min-h-[105vh] space-y-8 md:space-y-16 overflow-x-hidden">
            <h2 className="font-bold text-gray-800  
            lg:text-6xl  lg:my-6 lg:mt-8
            md:my-4 md:mt-6
            text-4xl my-2 mt-4
            ">My Journey</h2>

            {/* Order Selection Dropdown */}
            <div className="mb-10">
                <label className="mr-2">Sort Order: </label>
                <select
                    value={order}
                    onChange={(e) => setOrder(e.target.value as 'newToOld' | 'oldToNew')}
                    className="p-2 border rounded"
                >
                    <option value="newToOld">Newest First</option>
                    <option value="oldToNew">Oldest First</option>
                </select>
            </div>

            {/* Filter Radio Buttons */}
            <FilterComponent filter={filter} setFilter={setFilter} />

            <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute bg-gray-300 z-0
                lg:left-1/2 w-1 h-full 
                left-8 " />

                {filteredData.map((item, index) => {
                    const year = getYear(item.date);
                    let displayYear = null;
                    const isToggled = toggledYears.includes(year);

                    // Check if the year is different from the previous entry
                    if (year !== previousYear) {
                        previousYear = year;
                        displayYear = (
                            <YearMarker
                                key={`year-marker-${index}`}
                                year={year}
                                isToggled={isToggled}
                                toggleYear={toggleYear}
                            />
                        );
                    }

                    // If the year is toggled (hidden), skip rendering this project
                    if (isToggled) {
                        return (
                            <div key={index}>
                                {/* Display Year Marker */}
                                {displayYear}
                            </div>
                        );
                    }

                    return (
                        <div key={index}>
                            {/* Display Year Marker */}
                            {displayYear}

                            {/* Timeline Item */}
                            <TimelineItem
                                item={item}
                                index={projectIndex++} // Keep index consistent despite hiding/showing
                                colorBg={colorBg}
                                colorText={colorText}
                                colorTextLight={colorTextLight}
                                colorBgLight={colorBgLight}
                            />
                        </div>
                    );
                })}
            </div>
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
                className="text-xl font-bold text-gray-600 bg-white z-10 translate-x-1"
            >
                {year} {isToggled ? '(Show)' : '(Hide)'}
            </span>
        </div>
    );
};

// Timeline Item Component
const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, colorBg, colorText, colorTextLight, colorBgLight }) => {
    return (
        <div className={`mb-12 flex  w-full
        ${item.field === 'webdev'
                ? 'flex-row-reverse lg:translate-x-6'
                : 'lg:flex-row flex-row-reverse lg:-translate-x-6'} 
        items-center 
        justify-between lg:justify-start
        `}>
            <div className=" cursor-pointer
            lg:w-1/2 lg:px-4 
            w-5/6 
                    ">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 hover:bg-opacity-30">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">{item.title}</h3>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600">{item.date}</div>
                    <p className="mt-2 text-sm sm:text-base md:text-lg">{item.description}</p>
                    <p className={`mt-4 italic ${colorTextLight(item.field)} text-sm sm:text-base md:text-lg`}>
                        {item.story}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {item.tech.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className={` ${colorBgLight(item.field)} ${colorText(item.field)} px-2 py-1 rounded text-xs sm:text-sm md:text-base`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline Marker */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${colorBg(item.field)} text-white shadow-md z-10 
            lg:translate-x-0
            translate-x-2
            `}>
                {index}
            </div>

        </div>
    );
};

export default TimeLinePage;
