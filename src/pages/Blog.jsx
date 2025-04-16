import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Dialog } from "radix-ui";
import Markdown from "react-markdown";

import BlogCard from "../components/BlogCard";
import { CategoryEnum, SortEnum, TagEnum } from "../constants";

const Blog = () => {
    const blogs = [
        {
            image: "https://placehold.co/200x200",
            title: "My First Post!",
            date: "April 7, 2025",
            excerpt: "Hello, World!",
            tags: [TagEnum.REACT, TagEnum.TAILWIND],
            file: "firstBlog.md",
            slug: "firstBlog"
        },
    ]

    const [markdown, setMarkdown] = useState("");

    const openBlog = async (file) => {
        const res = await fetch(`src/blogs/${file}`);
        const text = await res.text();
        setMarkdown(text);
        console.log("hi");
    }

    return (
        
        <div className="flex flex-col gap-6 px-10 py-4">
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

        
    );
}

export default Blog;