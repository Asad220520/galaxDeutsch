import React from "react";
import ReactMarkdown from "react-markdown";

function TheoryCard({ title, content }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 max-w-3xl mx-auto my-6 transition-colors duration-300">
      {title && (
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 text-center">
          {title}
        </h2>
      )}
      <div className="prose prose-sm sm:prose-base max-w-full dark:prose-invert">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className="text-3xl sm:text-4xl font-bold text-blue-700 my-4"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="text-2xl sm:text-3xl font-semibold text-blue-600 my-3"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="text-xl sm:text-2xl font-semibold text-blue-500 my-2"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p
                className="text-gray-700 dark:text-gray-200 leading-relaxed my-2"
                {...props}
              />
            ),
            li: ({ node, ...props }) => (
              <li
                className="ml-5 list-disc text-gray-700 dark:text-gray-200 my-1"
                {...props}
              />
            ),
            strong: ({ node, ...props }) => (
              <strong className="text-blue-600 font-semibold" {...props} />
            ),
            em: ({ node, ...props }) => (
              <em
                className="text-gray-500 dark:text-gray-400 italic"
                {...props}
              />
            ),
            hr: ({ node, ...props }) => (
              <hr
                className="border-gray-300 dark:border-gray-600 my-4"
                {...props}
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default TheoryCard;
