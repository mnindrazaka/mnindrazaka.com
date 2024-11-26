import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {
  Anchor,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  Text,
  YStack,
} from "tamagui";

type MarkdownViewProps = {
  content: string;
};

export const MarkdownView = ({ content }: MarkdownViewProps) => {
  return (
    <ReactMarkdown
      components={{
        p: (props) => (
          <Paragraph size="$5" lineHeight="$8">
            {props.children}
          </Paragraph>
        ),
        h1: (props) => <H1 marginVertical="$3">{props.children}</H1>,
        h2: (props) => <H2 marginVertical="$3">{props.children}</H2>,
        h3: (props) => <H3 marginVertical="$3">{props.children}</H3>,
        h4: (props) => <H4 marginVertical="$3">{props.children}</H4>,
        h5: (props) => <H5 marginVertical="$3">{props.children}</H5>,
        h6: (props) => <H6 marginVertical="$3">{props.children}</H6>,
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              PreTag="div"
              language={match[1]}
              style={vscDarkPlus}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <Text
              theme="alt1"
              backgroundColor="$background"
              borderColor="$borderColor"
              borderWidth="$1"
              padding="$1"
              borderRadius="$2"
              marginVertical="$5"
              display="inline"
            >
              {children}
            </Text>
          );
        },
        li: (props) => (
          <li {...props} style={{ marginTop: 10 }}>
            <Paragraph size="$5">{props.children}</Paragraph>
          </li>
        ),
        a: (props) => (
          <Anchor size="$5" href={props.href} target="_blank">
            {props.children}
          </Anchor>
        ),
      }}
      // renderers={{
      //   paragraph: ({ children }) => {
      //     return <Paragraph size="$5">{children}</Paragraph>;
      //   },
      //   heading: ({ level, children }) => {
      //     return level === 6 ? (
      //       <H6 marginVertical="$3">{children}</H6>
      //     ) : level === 5 ? (
      //       <H5 marginVertical="$3">{children}</H5>
      //     ) : level === 4 ? (
      //       <H4 marginVertical="$3">{children}</H4>
      //     ) : level === 3 ? (
      //       <H3 marginVertical="$3">{children}</H3>
      //     ) : level === 2 ? (
      //       <H2 marginVertical="$3">{children}</H2>
      //     ) : (
      //       <H1 marginVertical="$3">{children}</H1>
      //     );
      //   },
      //   code: ({ language, value }) => {
      //     return (
      //       <YStack marginVertical="$3">
      //         <SyntaxHighlighter
      //           style={vscDarkPlus}
      //           language={language}
      //           showLineNumbers
      //         >
      //           {value}
      //         </SyntaxHighlighter>
      //       </YStack>
      //     );
      //   },
      //   blockquote: ({ children }) => {
      //     return (
      //       <YStack
      //         backgroundColor="$background"
      //         borderColor="$borderColor"
      //         borderWidth="$1"
      //         padding="$2"
      //         borderRadius="$2"
      //         marginVertical="$5"
      //       >
      //         {children}
      //       </YStack>
      //     );
      //   },
      //   link: ({ children, href }) => (
      //     <Anchor size="$5" href={href} target="_blank">
      //       {children}
      //     </Anchor>
      //   ),
      //   inlineCode: ({ children }) => (
      //     <Text
      //       backgroundColor="$background"
      //       borderColor="$borderColor"
      //       borderWidth="$1"
      //       paddingVertical="$1"
      //       paddingHorizontal="$2"
      //       borderRadius="$2"
      //       fontFamily="$body"
      //     >
      //       <code>{children}</code>
      //     </Text>
      //   ),
      //   li: ({ children }) => <div>{children}</div>,
      // }}
    >
      {content}
    </ReactMarkdown>
  );
};
