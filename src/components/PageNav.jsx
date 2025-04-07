const PageNav = () => {
  return (
    <>

      <div className="bg-[#0B0B15] text-white">
        <div className="flex justify-between px-6 py-2">
          <div className="text-2xl font-bold">Projects</div>
            
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search projects..."
                className="bg-white placeholder-gray-400"
              />

              <select className="bg-white text-black">
                <option>Sort by</option>
                <option>Most recent</option>
                <option>Smth else</option>
                <option>Smth else</option>
              </select>

              <select className="bg-white text-black">
                <option>Tags</option>
                <option>Most recent</option>
                <option>Smth else</option>
                <option>Smth else</option>
              </select>
            </div>

          </div>
            <div className="flex px-6 pb-4 gap-4 text-sm">
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