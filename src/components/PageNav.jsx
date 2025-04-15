import Select from 'react-select'

const PageNav = ({ projects, displayedProjects, setDisplayedProjects }) => {
    const tags = [
        { value: 'value1', label: 'value1' },
        { value: 'value2', label: 'value2' },
        { value: 'value3', label: 'value3' }
    ];  

    const sortOptions = [
        { value: 'value1', label: 'Most Recent' },
        { value: 'value2', label: 'value2' },
        { value: 'value3', label: 'value3' }
    ];  
    
    const categories = [
        { value: "all",  label: "All" },
        { value: "webapp", label: "Web Apps" },
        { value: "mobileapp", label: "Mobile Apps" },
        { value: "game", label: "Games" },
        { value: "research", label: "Research" }
    ];

    function changeCategory(category) {
        setDisplayedProjects(projects.filter((project) => {
            return category == "all" || project.category == category;
        }));
        
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
                {categories.map((category) => (
                    <button onClick={() => changeCategory(category.value)}>{category.label}</button>
                ))}
            </div>
        </div>
        
        </>
    );
}

export default PageNav;