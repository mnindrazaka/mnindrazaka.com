import { ArrowRightCircle } from "@tamagui/lucide-icons";
import Link from "next/link";
import React from "react";
import { Button, H3, H5, Image, Paragraph, XStack, YStack } from "tamagui";

export type BlogSectionProps = {
  posts: {
    title: string;
    description: string;
    href: string;
    imageUrl: string;
    date: string;
  }[];
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
          <YStack
            width={64}
            height={3}
            theme="purple_Button"
            backgroundColor="$background"
            borderRadius="$12"
            alignSelf="center"
            $gtXs={{ alignSelf: "flex-start" }}
          ></YStack>
          <Paragraph size="$8" textAlign="center" $gtXs={{ textAlign: "left" }}>
            Explore My Technical Blog for Insightful Reads
          </Paragraph>
        </YStack>
        <Button theme="purple" icon={ArrowRightCircle}>
          SEE THE FULL BLOG
        </Button>
      </YStack>

      <YStack space="$8" $gtXs={{ flexDirection: "row" }}>
        {props.posts.map(({ title, imageUrl, date, href }) => (
          <YStack key={title} flex={1} width="100%">
            <Link href={href} style={{ textDecoration: "none" }}>
              <YStack space="$3">
                <Image
                  source={{ uri: imageUrl }}
                  defaultSource={{ uri: imageUrl }}
                  aspectRatio={1}
                  width="100%"
                  height="100%"
                  alt={title}
                  borderRadius="$5"
                />
                <H5 flex={1} textAlign="center" $gtXs={{ textAlign: "left" }}>
                  {date}
                </H5>
                <H3 textAlign="center" $gtXs={{ textAlign: "left" }}>
                  {title}
                </H3>
              </YStack>
            </Link>
          </YStack>
        ))}
      </YStack>
    </YStack>
  );
}
