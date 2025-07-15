import Select from "react-select";

import { CategoryEnum, SortEnum, TagEnum } from "../constants";

const Filter = ({ filters, setFilters }) => {
  const sortOptions = Object.entries(SortEnum).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const tags = Object.entries(TagEnum).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const handleTagChange = (selectedOptions) => {
    setFilters((prev) => ({
      ...prev,
      tags: selectedOptions ? selectedOptions.map((opt) => opt.label) : [],
    }));
  };

  const handleSortChange = (selectedOption) => {
    setFilters((prev) => ({
      ...prev,
      sort: selectedOption.label,
    }));
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <input
        type="text"
        placeholder="Search projects..."
        className="w-full rounded-sm bg-white px-2 py-2 text-black placeholder-gray-400 md:min-w-70"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />

      <Select
        defaultValue={sortOptions[0]}
        className="basic-multi-select w-full rounded-sm text-black md:min-w-30"
        classNamePrefix="select"
        isClearable={false}
        name="sortOptions"
        options={sortOptions}
        placeholder="Sort by"
        onChange={handleSortChange}
      />

      <Select
        className="basic-multi-select w-full rounded-sm text-black md:min-w-30"
        classNamePrefix="select"
        isClearable={true}
        isMulti
        name="tagOptions"
        options={tags}
        placeholder="Tags"
        onChange={handleTagChange}
      />
    </div>
  );
};

export default Filter;
