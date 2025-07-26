import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";

import Filter from "./Filter";

import { CategoryEnum, SortEnum, TagEnum } from "../constants";

const ProjectNav = ({ filters, setFilters }) => {
  const categories = Object.entries(CategoryEnum).map(([key, value]) => ({
    value: value,
    label: value,
  }));

  return (
    <div className="mx-10">
      <div className="bg-dark-blue z-10 mx-auto flex max-w-300 flex-col gap-2 text-white">
        <div className="flex flex-col justify-between gap-4 py-2 md:flex-row">
          <div className="text-2xl font-bold">Projects</div>

          <Filter filters={filters} setFilters={setFilters} />
        </div>
        <div className="flex justify-between gap-7 pb-4 text-sm md:justify-start">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() =>
                setFilters({ ...filters, category: category.value })
              }
              className={`${
                filters.category === category.value
                  ? "cursor-pointer font-bold"
                  : "cursor-pointer hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectNav;
