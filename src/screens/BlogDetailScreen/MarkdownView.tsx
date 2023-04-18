import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Anchor } from "tamagui";

type MarkdownViewProps = {
  content: string;
};

export const MarkdownView = ({ content }: MarkdownViewProps) => {
  return (
    <ReactMarkdown
      skipHtml={false}
      remarkPlugins={[gfm]}
      components={{
        // p: ({ children }) => {
        //   return <Text>{children}</Text>;
        // },
        // h1: ({ level, children }) => {
        //   return (
        //     <Heading
        //       size={
        //         level === 6
        //           ? "xs"
        //           : level === 5
        //           ? "sm"
        //           : level === 4
        //           ? "md"
        //           : level === 3
        //           ? "lg"
        //           : level === 2
        //           ? "xl"
        //           : "2xl"
        //       }
        //     >
        //       {children}
        //     </Heading>
        //   );
        // },
        // code: ({ lang, children }) => {
        //   return (
        //     <div className="my-4" role="code">
        //       <SyntaxHighlighter style={materialDark} language={lang}>
        //         {children}
        //       </SyntaxHighlighter>
        //     </div>
        //   );
        // },
        // blockquote: ({ children }) => {
        //   return <Alert colorScheme="purple">{children}</Alert>;
        // },
        link: ({ children, href }) => (
          <Anchor href={href} target="_blank">
            {children}
          </Anchor>
        ),
        // code: ({ children }) => <Code>{children}</Code>,
        // table: ({ children }) => <Table>{children}</Table>,
        // tableHead: ({ children }) => <Thead>{children}</Thead>,
        // tableBody: ({ children }) => <Tbody>{children}</Tbody>,
        // tableRow: ({ children }) => <Tr>{children}</Tr>,
        // tableCell: ({ children }) => <Td>{children}</Td>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
