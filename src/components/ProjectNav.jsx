import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react"; 
import Select from 'react-select'

import Filter from "./Filter";

import { CategoryEnum, SortEnum, TagEnum } from "../constants";

const ProjectNav = ({ filters, setFilters }) => {
    
    const categories = Object.entries(CategoryEnum).map(([key, value]) => ({
        value: value,
        label: value
    }));

    return (
        <>
            <div className="flex flex-col bg-dark-blue text-white px-10 gap-2">
                <div className="flex flex-col md:flex-row justify-between py-2 gap-4">
                <div className="text-2xl font-bold">Projects</div>
                    
                <Filter filters={filters} setFilters={setFilters} />
                
                </div>
                    <div className="flex pb-4 gap-5 text-sm justify-between md:justify-start">
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

export default ProjectNav;