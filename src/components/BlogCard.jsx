const BlogCard = ({ image, title, date, excerpt, tags }) => {
  return (
    <>
      <div className="flex h-50 flex-row overflow-hidden rounded-sm border border-[#3F5475] bg-[#0B0B15] text-white">
        {/* Image */}
        <img src={image} alt="Blog Cover" className="w-1/3 object-cover" />

        {/* Content */}
        <div className="flex w-full flex-col justify-between p-4">
          <div>
            <p className="mb-1 text-xs text-gray-400">{date}</p>
            <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
            <p className="mb-3 line-clamp-3 text-sm text-gray-300">{excerpt}</p>
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
    </>
  );
};

export default BlogCard;
