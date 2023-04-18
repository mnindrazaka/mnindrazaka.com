import { Container } from "@/components";
import Head from "next/head";
import React from "react";
import { H2, H5, Image, ScrollView } from "tamagui";
import { MarkdownView } from "./MarkdownView";

export type BlogDetailScreenProps = {
  title: string;
  description: string;
  image: string;
  caption: string;
  content: string;
  date: string;
};

export function BlogDetailScreen({
  title,
  description,
  image,
  date,
  caption,
  content,
}: BlogDetailScreenProps) {
  return (
    <>
      <Head>
        <title>{`${title} | M. Nindra Zaka`}</title>
        <meta name="description" content={description} />
        <link rel="preload" as="image" href={image} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Head>
      <ScrollView>
        <Container>
          <H2 fontWeight="normal">{title}</H2>
          <H5>{date}</H5>
          <Image
            source={{ uri: image }}
            defaultSource={{ uri: image }}
            aspectRatio={2 / 1}
            maxWidth={480}
            width="100%"
            alt={title}
          />
          <H5>{caption}</H5>
          <MarkdownView content={content} />
        </Container>
      </ScrollView>
    </>
  );
}
