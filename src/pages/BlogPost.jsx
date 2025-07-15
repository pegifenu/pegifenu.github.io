import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

// Map slugs to markdown filenames
const slugToFileMap = {
  firstBlog: "firstBlog.md",
  // add more: "another-slug": "anotherFile.md"
};

const BlogPost = () => {
  const { slug } = useParams();
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const file = slugToFileMap[slug];
    if (!file) return;

    fetch(`/blogs/${file}`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [slug]);

  return (
    <div className="px-10 py-4 text-white">
      <Markdown>{markdown}</Markdown>
    </div>
  );
};

export default BlogPost;
