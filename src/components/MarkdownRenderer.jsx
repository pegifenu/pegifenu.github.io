import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="bg-dark-blue relative my-4 overflow-x-auto rounded-lg p-4 text-white">
      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        customStyle={{
          background: "transparent",
          paddingTop: "1.5rem",
        }}
      >
        {code}
      </SyntaxHighlighter>

      <button
        onClick={handleCopy}
        className="bg-medium-blue hover:bg-light-blue absolute top-3 right-3 rounded px-2 py-1 text-white"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {language && (
        <span className="bg-medium-blue absolute top-3 left-3 rounded px-2 py-1 text-white uppercase">
          {language}
        </span>
      )}
    </div>
  );
};

const InlineCode = ({ code }) => {
  return (
    <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-white">
      {code}
    </code>
  );
};

export default function MarkdownRenderer({ children }) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ className, children }) {
          const match = /language-(\w+)/.exec(className || "");

          if (match) {
            return (
              <CodeBlock
                language={match[1]}
                code={String(children).replace(/\n$/, "")}
              />
            );
          }

          return <InlineCode code={children} />;
        },
      }}
    >
      {children}
    </Markdown>
  );
}
