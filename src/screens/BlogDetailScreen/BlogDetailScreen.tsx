import { Container } from "@/components";
import { ArrowLeft } from "@tamagui/lucide-icons";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { H2, H5, Image, Paragraph, ScrollView, XStack, YStack } from "tamagui";
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
      <ScrollView overflow="scroll">
        <Container maxWidth={640} space="$5" paddingVertical="$8">
          <Link href="/" style={{ textDecoration: "none" }}>
            <XStack alignItems="center" space="$2">
              <ArrowLeft />
              <Paragraph size="$6">Back to Home</Paragraph>
            </XStack>
          </Link>
          <YStack>
            <H2 fontWeight="normal">{title}</H2>
            <H5>{date}</H5>
          </YStack>

          <YStack space="$2">
            <Image
              source={{ uri: image }}
              defaultSource={{ uri: image }}
              aspectRatio={2 / 1}
              width="100%"
              alt={title}
              borderRadius="$5"
            />
            <MarkdownView content={caption} />
          </YStack>
          <MarkdownView content={content} />
        </Container>
      </ScrollView>
    </>
  );
}
