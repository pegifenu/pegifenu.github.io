const BlogCard = () => {
  return (
    <>
      <div className="flex flex-row h-50 bg-[#0B0B15] text-white rounded-sm overflow-hidden">
      {/* Image */}
      <img
        src="https://placehold.co/200x200"
        alt="Blog Cover"
        className="w-1/3 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between w-full">
        
        <div>
          <p className="text-xs text-gray-400 mb-1">April 7, 2025</p>
          <h2 className="text-2xl font-semibold mb-2">Blog Title Here</h2>
          <p className="text-sm text-gray-300 mb-3 line-clamp-3">
            A short description or excerpt from the blog post. Keep it brief and enticing to encourage clicks.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-gray-200 mt-2">
          <span className="bg-gray-700 px-2 py-1 rounded">React</span>
          <span className="bg-gray-700 px-2 py-1 rounded">Tailwind</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default BlogCard;