// src/pages/BlogPost.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MarkdownRenderer from "../components/MarkdownRenderer";
import Footer from "../components/Footer";

import { blogs } from "../data/blogs";

const BlogPost = () => {
  const { slug } = useParams();
  const [markdown, setMarkdown] = useState("");
  const blog = blogs.find((b) => b.slug === slug);
  const file = blog.file;

  useEffect(() => {
    if (!file) return;
    fetch(`/blogs/${file}`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [file]);

  if (!file) {
    return (
      <div className="px-5 py-4 text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="">404: Blog post not found.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 py-4 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="text-4xl font-bold">{blog.title}</div>
        <div className="text-lg">{blog.date}</div>
        <MarkdownRenderer>{markdown}</MarkdownRenderer>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
