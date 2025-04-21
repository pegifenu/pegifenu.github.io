import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react"; 
import Select from 'react-select'

import { CategoryEnum, SortEnum, TagEnum } from "../constants";

const PageNav = ({ filters, setFilters }) => {
    
    const categories = Object.entries(CategoryEnum).map(([key, value]) => ({
        value: value,
        label: value
    }));

    const sortOptions = Object.entries(SortEnum).map(([key, value]) => ({
        value: key,
        label: value
    }));
      
    const tags = Object.entries(TagEnum).map(([key, value]) => ({
        value: key,
        label: value
    }));

    const handleTagChange = (selectedOptions) => {
        setFilters(prev => ({
            ...prev,
            tags: selectedOptions ? selectedOptions.map(opt => opt.label) : []
        }));
    };

    const handleSortChange = (selectedOption) => {
        setFilters(prev => ({
            ...prev,
            sort: selectedOption.label
        }));
    };

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
                        value={filters.search}
                        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
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
                        onChange={handleTagChange}
                    />
                </div>
                
                </div>
                    <div className="flex pb-4 gap-5 text-sm">
                    {categories.map((category, index) => (
                        <button 
                            key={index}
                            onClick={() => setFilters({ ...filters, category: category.value })}
                            className={`${
                                filters.category === category.value
                                ? "font-bold cursor-pointer"
                                : "hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)] cursor-pointer"
                            }`}
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