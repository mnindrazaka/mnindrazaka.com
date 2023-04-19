import { BlogCard, Divider, Post } from "@/components";
import { ArrowRightCircle } from "@tamagui/lucide-icons";
import Link from "next/link";
import React from "react";
import { Button, H3, Paragraph, YStack } from "tamagui";

export type BlogSectionProps = {
  posts: Post[];
};

export function BlogSection(props: BlogSectionProps) {
  return (
    <YStack marginTop="$10" space="$8">
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
          <Paragraph size="$8" textAlign="center" $gtXs={{ textAlign: "left" }}>
            Explore My Technical Blog for Insightful Reads
          </Paragraph>
        </YStack>
        <Link href="/blog" style={{ textDecoration: "none" }}>
          <Button theme="purple" icon={ArrowRightCircle}>
            SEE THE FULL BLOG
          </Button>
        </Link>
      </YStack>

      <YStack space="$8" $gtXs={{ flexDirection: "row" }}>
        {props.posts.map((post) => (
          <BlogCard key={post.title} {...post} flex={1} width="100%" />
        ))}
      </YStack>
    </YStack>
  );
}
