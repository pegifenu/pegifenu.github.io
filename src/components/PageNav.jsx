import Select from 'react-select'

const PageNav = () => {
  const tags = [
    { value: 'value1', label: 'value1' },
    { value: 'value2', label: 'value2' },
    { value: 'value3', label: 'value3' }
  ]  

  const sortOptions = [
    { value: 'value1', label: 'Most Recent' },
    { value: 'value2', label: 'value2' },
    { value: 'value3', label: 'value3' }
  ]  

  return (
    <>

      <div className="flex flex-col bg-[#0B0B15] text-white px-10 gap-2">
        <div className="flex flex-col sm:flex-row justify-between py-2 gap-2">
          <div className="text-2xl font-bold">Projects</div>
            
          <div className="flex flex-row gap-4">
            <input
              type="text"
              placeholder="Search projects..."
              className="bg-white placeholder-gray-400 text-black px-2 rounded-sm"
            />

            <Select
              className="basic-multi-select text-black rounded-sm"
              classNamePrefix="select"
              isClearable={true}
              name="sortOptions"
              options={sortOptions}
              placeholder="Sort by"
            />

            <Select
              className="basic-multi-select text-black rounded-sm"
              classNamePrefix="select"
              isClearable={true}
              isMulti
              name="tagOptions"
              options={tags}
              placeholder="Tags"
            />
          </div>
        
        </div>
            <div className="flex pb-4 gap-5 text-sm">
            <button className="">All</button>
            <button className="">Web Apps</button>
            <button className="">Mobile Apps</button>
            <button className="">Games</button>
            <button className="">Research</button>
        </div>
      </div>
      
    </>
  );
}

export default PageNav;