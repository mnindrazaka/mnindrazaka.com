import { BlogCard, Container, Divider, Post } from "@/components";
import { ArrowLeft } from "@tamagui/lucide-icons";
import Link from "next/link";
import React from "react";
import { H3, Paragraph, ScrollView, XStack, YStack } from "tamagui";

export type BlogScreenProps = {
  posts: Post[];
};

export function BlogScreen(props: BlogScreenProps) {
  return (
    <ScrollView overflow="scroll">
      <Container paddingVertical="$10" space="$8">
        <Link href="/" style={{ textDecoration: "none" }}>
          <XStack alignItems="center" space="$2">
            <ArrowLeft />
            <Paragraph size="$6">Back to Home</Paragraph>
          </XStack>
        </Link>
        <YStack space="$8">
          <YStack
            justifyContent="space-between"
            alignItems="center"
            $gtXs={{ flexDirection: "row" }}
            space="$5"
          >
            <YStack space="$3" flex={1}>
              <H3 textAlign="center" $gtXs={{ textAlign: "left" }}>
                BLOGS
              </H3>
              <Divider alignSelf="center" $gtSm={{ alignSelf: "flex-start" }} />
              <Paragraph
                size="$8"
                textAlign="center"
                $gtXs={{ textAlign: "left" }}
              >
                Explore My Technical Blog for Insightful Reads
              </Paragraph>
            </YStack>
          </YStack>

          <XStack flexWrap="wrap">
            {props.posts.map((post) => (
              <BlogCard
                key={post.title}
                {...post}
                flexBasis="100%"
                marginBottom="$8"
                marginRight="$8"
                $gtXs={{ flexBasis: "42%" }}
                $gtSm={{ flexBasis: "25%" }}
              />
            ))}
          </XStack>
        </YStack>
      </Container>
    </ScrollView>
  );
}
