import { useState, useEffect } from "react"; 
import Select from 'react-select'

import { CategoryEnum, SortEnum, TagEnum } from "../constants";

const PageNav = ({ projects, displayedProjects, setDisplayedProjects }) => {

    const [selectedCategory, setSelectedCategory] = useState(CategoryEnum.ALL);
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    
    const categories = Object.entries(CategoryEnum).map(([key, value]) => ({
        value: value,
        label: value
    }));

    const sortOptions = Object.entries(SortEnum).map(([key, value]) => ({
        value: key,
        label: value
    }));
      
    const tags = Object.entries(TagEnum).map(([key, value]) => ({
        value: value,
        label: value
    }));
      
    useEffect(() => {
        let filtered = [...projects];
    
        // Filter by category
        if (selectedCategory !== CategoryEnum.ALL) {
            filtered = filtered.filter(project => project.category === selectedCategory);
        }
    
        // Filter by tags
        if (selectedTags.length > 0) {
            const tagValues = selectedTags.map(tag => tag.value);
            filtered = filtered.filter(project => 
                project.tags.some(tag => tagValues.includes(tag))
            );
        }
    
        // Filter by search query
        const cleanedQuery = searchQuery.trim().replace(/\s+/g, "").toLowerCase();
        if (cleanedQuery !== "") {
            filtered = filtered.filter(project =>
                project.title.trim().replace(/\s+/g, "").toLowerCase().includes(cleanedQuery) ||
                project.description.trim().replace(/\s+/g, "").toLowerCase().includes(cleanedQuery)
            );
        }
    
        setDisplayedProjects(filtered);
    }, [selectedCategory, selectedTags, searchQuery]);

    function changeCategory(category) {
        setDisplayedProjects(projects.filter((project) => {
            return category == CategoryEnum.ALL || project.category == category;
        }));
        setSelectedCategory(category);
    }

    // Update displayed projects based on selected tags
    function filterByTags(selectedTags) {
        if (!selectedTags || selectedTags.length == 0) {
            // If no tags are selected, display all projects
            changeCategory(selectedCategory);
        } else {
            setDisplayedProjects(projects.filter((project) => {
                return selectedTags.some(tag => project.tags.includes(tag.value));
            }));
        }
        setSelectedTags(selectedTags);
    }

    // Update displayed projects based on selected sort option
    function handleSortChange(selectedOption) {
        let sortedProjects = [...displayedProjects];

        if (selectedOption.label == SortEnum.RECENT) {
            sortedProjects.sort((a, b) => new Date(b.dateEnded) - new Date(a.dateEnded));
        } else if (selectedOption.label == SortEnum.OLDEST) {
            sortedProjects.sort((a, b) => new Date(a.dateEnded) - new Date(b.dateEnded));
        } else {
            sortedProjects.sort((a, b) => {
                const indexA = projects.findIndex(project => project.title === a.title);
                const indexB = projects.findIndex(project => project.title === b.title);
                return indexA - indexB;
            });
        }

        setDisplayedProjects(sortedProjects);
    }

    return (
        <>

        <div className="flex flex-col bg-[#0B0B15] text-white px-10 gap-2">
            <div className="flex flex-col md:flex-row justify-between py-2 gap-4">
            <div className="text-2xl font-bold">Projects</div>
                
            <div className="flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search projects..."
                    className="bg-white placeholder-gray-400 text-black min-w-70 px-2 py-2 rounded-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <Select
                    defaultValue={sortOptions[0]}
                    className="basic-multi-select text-black rounded-sm"
                    classNamePrefix="select"
                    isClearable={false}
                    name="sortOptions"
                    options={sortOptions}
                    placeholder="Sort by"
                    onChange={handleSortChange}
                />

                <Select
                    className="basic-multi-select text-black rounded-sm"
                    classNamePrefix="select"
                    isClearable={true}
                    isMulti
                    name="tagOptions"
                    options={tags}
                    placeholder="Tags"
                    onChange={filterByTags}
                />
            </div>
            
            </div>
                <div className="flex pb-4 gap-5 text-sm">
                {categories.map((category) => (
                    <button 
                    onClick={() => changeCategory(category.value)}
                    className="hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)] cursor-pointer"
                    >
                        {category.label}
                    </button>
                ))}
            </div>
        </div>
        
        </>
    );
}

export default PageNav;