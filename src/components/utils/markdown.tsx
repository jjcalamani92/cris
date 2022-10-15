/* eslint-disable react/no-children-prop */

import dynamic from 'next/dynamic';
import React, { FC } from 'react'

import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const ReactMarkdown = dynamic<any>(() => import("react-markdown") as any, { ssr: false });
const SyntaxHighlighter = dynamic<any>(() => import("react-syntax-highlighter") as any, { ssr: false });
interface MarkdownComponent {
  code: string
}
export const MarkdownComponent: FC<MarkdownComponent> = ({ code }) => {
  return (
    <div className='prose prose-p:my-3'>

      <ReactMarkdown
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        children={`${code}`}
        rehypePlugins={[rehypeRaw]}
        // rehypePlugins={[rehypeHighlight]}
        components={{
          // u({node, ...props}) { return <u style={{textDecoration: 'underline'}} {...props} />} ,
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <>

                <SyntaxHighlighter
                  // unwrapDisallowed={true}

                  children={String(children).replace(/\n$/, '')}
                  style={atomOneDark as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              </>
            ) : (
              <code className={className} {...props}>
                <>
                  {children}
                </>
              </code>
            )
          }
        }}
      />
    </div>

  )
}
export const MarkdownComponentFC: FC<MarkdownComponent> = ({ code }) => {
  return (
    

      <ReactMarkdown
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        children={`${code}`}
        rehypePlugins={[rehypeRaw]}
        // rehypePlugins={[rehypeHighlight]}
        components={{
          // u({node, ...props}) { return <u style={{textDecoration: 'underline'}} {...props} />} ,
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <>

                <SyntaxHighlighter
                  // unwrapDisallowed={true}

                  children={String(children).replace(/\n$/, '')}
                  style={atomOneDark as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              </>
            ) : (
              <code className={className} {...props}>
                <>
                  {children}
                </>
              </code>
            )
          }
        }}
      />

  )
}