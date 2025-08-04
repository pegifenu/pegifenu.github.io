import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ClipboardIcon } from "@radix-ui/react-icons";

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
        className="bg-medium-blue hover:bg-light-blue absolute top-3 right-3 flex cursor-pointer items-center gap-1 rounded px-2 py-1 text-white"
      >
        <ClipboardIcon className="h-4 w-4" />
        {copied ? "Copied!" : "Copy"}
      </button>

      {language && (
        <span className="absolute top-3 left-3 rounded px-2 py-1 text-white uppercase">
          {language}
        </span>
      )}
    </div>
  );
};

const InlineCode = ({ code }) => {
  return (
    <code className="bg-dark-blue rounded px-1.5 py-0.5 text-white">
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

        pre: ({ children }) => (
          <pre className="bg-transparent p-0">{children}</pre>
        ),

        // Headings
        h1: ({ children }) => (
          <h1 className="mt-8 mb-4 text-4xl font-semibold">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="mt-8 mb-4 text-3xl font-semibold">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-6 mb-3 text-2xl font-semibold">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="mt-6 mb-2 text-xl font-semibold">{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 className="mt-4 mb-2 text-lg font-semibold">{children}</h5>
        ),
        h6: ({ children }) => (
          <h6 className="mt-4 mb-2 text-base font-semibold">{children}</h6>
        ),

        // Paragraphs
        p: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,

        // Lists
        ul: ({ children }) => (
          <ul className="my-4 ml-6 list-inside list-disc">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="my-4 ml-6 list-inside list-decimal">{children}</ol>
        ),
        li: ({ children }) => <li className="mb-1">{children}</li>,

        // Blockquotes
        blockquote: ({ children }) => (
          <blockquote className="my-4 border-l-4 border-gray-500 pl-4 text-gray-600 italic">
            {children}
          </blockquote>
        ),

        // Links
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-white underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),

        // Horizontal rule
        hr: () => <hr className="my-8 border-t border-gray-300" />,

        // Tables (optional styling)
        table: ({ children }) => (
          <table className="my-6 table-auto border-collapse border border-gray-300">
            {children}
          </table>
        ),
        th: ({ children }) => (
          <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border border-gray-300 px-4 py-2">{children}</td>
        ),
        tr: ({ children }) => <tr>{children}</tr>,
      }}
    >
      {children}
    </Markdown>
  );
}
