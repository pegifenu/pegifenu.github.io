const ProjectCard = ({ image, title, description, tags }) => {
  return (
    <div className="border-light-blue relative flex h-full flex-col overflow-hidden rounded-sm border text-white hover:cursor-pointer">
      {/* Main Image */}
      <img
        src={image}
        alt="Project"
        className="aspect-[2/1] w-full bg-[#0B0B15] object-contain"
      />

      {/* Bottom Overlay Bar */}
      <div className="bottom-0 left-0 flex w-full flex-grow flex-col justify-between space-y-2 bg-[#0B0B15] px-4 py-3">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {tags.map((tag, index) => (
            <div key={index} className="rounded bg-gray-700 px-2 py-1">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
