import ReactMarkdown from "react-markdown";

const BlogCard = ({ image, title, date, excerpt, tags }) => {
    return (
        <>
        <div className="flex flex-row h-50 bg-[#0B0B15] text-white rounded-sm overflow-hidden border border-[#3F5475]">
        {/* Image */}
        <img
            src={image}
            alt="Blog Cover"
            className="w-1/3 object-cover"
        />

        {/* Content */}
        <div className="p-4 flex flex-col justify-between w-full">
            
            <div>
            <p className="text-xs text-gray-400 mb-1">{date}</p>
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                {excerpt}
            </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
                {tags.map((tag, index) => (
                    <div key={index} className="bg-gray-700 px-2 py-1 rounded">{tag}</div>
                ))}
            </div>
        </div>
        </div>
        </>
    );
}

export default BlogCard;