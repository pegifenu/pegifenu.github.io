import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { SortEnum, TagEnum } from "../constants";

const Filter = ({ filters, setFilters }) => {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [tagDropdownOpen, setTagDropdownOpen] = useState(false);

  const sortRef = useRef();
  const tagRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!sortRef.current?.contains(e.target)) setSortDropdownOpen(false);
      if (!tagRef.current?.contains(e.target)) setTagDropdownOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const updateSearch = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  const handleSortChange = (value) => {
    setFilters((prev) => ({ ...prev, sort: value }));
    setSortDropdownOpen(false);
  };

  const handleTagChange = (value) => {
    setFilters((prev) => {
      const tags = prev.tags.includes(value)
        ? prev.tags.filter((t) => t !== value)
        : [...prev.tags, value];
      return { ...prev, tags };
    });
  };

  return (
    <div className="z-20 flex flex-col gap-4 md:flex-row">
      {/* Search */}
      <input
        type="text"
        placeholder="Search projects..."
        className="h-10 w-full rounded-sm border border-gray-300 bg-white px-2 text-black placeholder-gray-400 md:min-w-70"
        value={filters.search}
        onChange={updateSearch}
      />

      {/* Sort Dropdown */}
      {console.log(filters)}
      <div className="relative w-full md:min-w-30" ref={sortRef}>
        <button
          onClick={() => setSortDropdownOpen((open) => !open)}
          className="flex h-10 w-full cursor-pointer items-center justify-between rounded-sm border border-gray-300 bg-white px-3 text-sm text-black"
        >
          {filters.sort}
          <ChevronDownIcon />
        </button>

        {sortDropdownOpen && (
          <div className="absolute z-20 mt-1 w-full overflow-hidden rounded border border-gray-300 bg-white">
            {Object.entries(SortEnum).map(([key, value]) => (
              <div
                key={key}
                onClick={() => handleSortChange(value)}
                className={`cursor-pointer px-3 py-2 text-sm ${
                  filters.sort === value
                    ? "bg-light-blue text-white"
                    : "hover:bg-light-blue/20 text-black"
                }`}
              >
                {value}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tag Selector */}
      <div className="relative w-full md:min-w-30" ref={tagRef}>
        <button
          onClick={() => setTagDropdownOpen((open) => !open)}
          className="flex h-10 w-full cursor-pointer items-center justify-between rounded-sm border border-gray-300 bg-white px-3 text-sm text-black"
        >
          {`${filters.tags.length} tag${filters.tags.length != 1 ? "s" : ""}`}
          <ChevronDownIcon />
        </button>

        {tagDropdownOpen && (
          <div className="absolute z-20 mt-1 max-h-48 w-full overflow-auto rounded-md border border-gray-300 bg-white">
            {Object.entries(TagEnum).map(([key, value]) => (
              <div
                key={key}
                onClick={() => handleTagChange(value)}
                className={`cursor-pointer px-3 py-2 text-sm ${
                  filters.tags?.includes(value)
                    ? "bg-light-blue text-white"
                    : "hover:bg-light-blue/20 text-black"
                }`}
              >
                {value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
