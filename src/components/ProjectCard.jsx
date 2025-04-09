const ProjectCard = () => {
  return (
    <>
      <div className="relative rounded-sm overflow-hidden border border-[#3F5475] text-white">
        {/* Main Image */}
        <img
          src="https://placehold.co/600x400"
          alt="Project"
          className="w-full object-cover"
        />

        {/* Bottom Overlay Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-[#0B0B15] px-4 py-3 space-y-2">
          <h3 className="text-lg font-semibold">Project Title</h3>
          <p className="text-sm text-gray-300">A short project description goes here.</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-700 px-2 py-1 rounded">Tag 1</span>
            <span className="bg-gray-700 px-2 py-1 rounded">Tag 2</span>
            <span className="bg-gray-700 px-2 py-1 rounded">Tag 3</span>
          </div>
        </div>
      </div>


    </>
  );
}

export default ProjectCard;