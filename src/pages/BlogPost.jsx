// src/pages/BlogPost.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MarkdownRenderer from "../components/MarkdownRenderer";

// Slug to file map
const slugToFileMap = {
  firstBlog: "firstBlog.md",
  anotherPost: "anotherPost.md",
};

const BlogPost = () => {
  const { slug } = useParams();
  const [markdown, setMarkdown] = useState("");
  const file = slugToFileMap[slug];

  useEffect(() => {
    if (!file) return;
    fetch(`/blogs/${file}`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [file]);

  if (!file) {
    return (
      <div className="px-10 py-4 text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-xl">404: Blog post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="px-10 py-4 text-white">
      <div className="mx-auto max-w-3xl">
        <MarkdownRenderer>{markdown}</MarkdownRenderer>
      </div>
    </div>
  );
};

export default BlogPost;
