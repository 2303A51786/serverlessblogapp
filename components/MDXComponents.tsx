import React from 'react';
import { CodeBlock } from './CodeBlock';

export const MDXComponents = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1A1A1A] mt-10 mb-4 tracking-tight" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1A1A1A] mt-8 mb-3" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[#1A1A1A] leading-relaxed mb-6 text-base md:text-lg" {...props}>
      {children}
    </p>
  ),
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-[#86937D] pl-6 py-2 my-8 font-heading text-xl italic text-[#5C5B57] bg-[#F4F3F0]/40 rounded-r-lg"
      {...props}
    >
      {children}
    </blockquote>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 mb-6 text-[#1A1A1A]" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 mb-6 text-[#1A1A1A]" {...props}>
      {children}
    </ol>
  ),
  pre: ({ children }: any) => {
    // Extract text from child code element if present
    const codeObj = children?.props;
    const codeString = codeObj?.children || children;
    const className = codeObj?.className || '';
    const match = /language-(\w+)/.exec(className);
    const language = match ? match[1] : undefined;

    return <CodeBlock language={language}>{codeString}</CodeBlock>;
  },
};
