import { useState } from "react";
import { Link } from "react-router-dom";

import BlogCard from "../components/BlogCard";
import { TagEnum } from "../constants";
import { blogs } from "../data/blogs";

const Blog = () => {
  return (
    <div className="mx-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 py-10">
        {blogs.map((blog, index) => (
          <Link to={`/blog/${blog.slug}`} key={index}>
            <BlogCard
              image={blog.image}
              title={blog.title}
              date={blog.date}
              excerpt={blog.excerpt}
              tags={blog.tags}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
