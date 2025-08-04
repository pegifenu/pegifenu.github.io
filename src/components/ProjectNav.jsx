import Filter from "./Filter";

import { CategoryEnum } from "../constants";

const ProjectNav = ({ filters, setFilters }) => {
  return (
    <div className="bg-dark-blue border-light-blue border-b px-10">
      <div className="z-10 mx-auto flex max-w-300 flex-col gap-2 text-white">
        <div className="flex flex-col justify-between gap-4 py-2 md:flex-row">
          <div className="text-2xl font-bold">Projects</div>

          <Filter filters={filters} setFilters={setFilters} />
        </div>
        <div className="text-md flex justify-between gap-7 pb-4 md:justify-start">
          {Object.entries(CategoryEnum).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setFilters({ ...filters, category: value })}
              className={`${
                filters.category === value
                  ? "cursor-pointer text-white"
                  : "cursor-pointer text-white/50 transition duration-100 hover:text-white"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectNav;
