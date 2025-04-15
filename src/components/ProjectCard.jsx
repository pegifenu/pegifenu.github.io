const ProjectCard = ({ image, title, desc, tags }) => {
    console.log(tags);
    return (

        <div className="relative rounded-sm overflow-hidden border border-[#3F5475] text-white">
            {/* Main Image */}
            <img
            src={image}
            alt="Project"
            className="w-full object-cover"
            />

            {/* Bottom Overlay Bar */}
            <div className="absolute bottom-0 left-0 w-full bg-[#0B0B15] px-4 py-3 space-y-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-300">{desc}</p>
            <div className="flex flex-wrap gap-2 text-xs">
                {tags.map((tag, index) => (
                    <div key={index} className="bg-gray-700 px-2 py-1 rounded">{tag}</div>
                ))}
            </div>
            </div>
        </div>

    );
}

export default ProjectCard;