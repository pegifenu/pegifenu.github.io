import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <div className="flex flex-col gap-6 px-10 py-4">
      <BlogCard />
      <BlogCard />
      <BlogCard />
  </div>
  );
}

export default Blog;