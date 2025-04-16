import { useState, useEffect } from "react";
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
        <Dialog.Root>
        
        <div className="flex flex-col gap-6 px-10 py-4">
            {blogs.map((blog, index) => (
            <Dialog.Trigger asChild key={index}>
                <div onClick={() => openBlog(blog.file)}>
                <BlogCard
                    image={blog.image}
                    title={blog.title}
                    date={blog.date}
                    excerpt={blog.excerpt}
                    tags={blog.tags}
                />
                </div>
            </Dialog.Trigger>
            ))}
        </div>

                <Dialog.Portal>
                <Dialog.Overlay />
                <Dialog.Content>
                <Dialog.Title />
                <Dialog.Description />
                <Dialog.Close />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>

        
    );
}

export default Blog;