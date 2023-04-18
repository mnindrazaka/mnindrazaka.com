import { Container } from "@/components";
import { ArrowLeft } from "@tamagui/lucide-icons";
import Link from "next/link";
import React from "react";
import { H3, H5, Image, Paragraph, ScrollView, XStack, YStack } from "tamagui";

export type BlogScreenProps = {
  posts: {
    title: string;
    description: string;
    href: string;
    imageUrl: string;
    date: string;
  }[];
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
              <YStack
                width={64}
                height={3}
                theme="purple_Button"
                backgroundColor="$background"
                borderRadius="$12"
                alignSelf="center"
                $gtXs={{ alignSelf: "flex-start" }}
              ></YStack>
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
            {props.posts.map(({ title, imageUrl, date, href }) => (
              <YStack
                key={title}
                flexBasis="100%"
                marginBottom="$8"
                marginRight="$8"
                $gtXs={{ flexBasis: "42%" }}
                $gtSm={{ flexBasis: "25%" }}
              >
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
                    <H5
                      flex={1}
                      textAlign="center"
                      $gtXs={{ textAlign: "left" }}
                    >
                      {date}
                    </H5>
                    <H3 textAlign="center" $gtXs={{ textAlign: "left" }}>
                      {title}
                    </H3>
                  </YStack>
                </Link>
              </YStack>
            ))}
          </XStack>
        </YStack>
      </Container>
    </ScrollView>
  );
}
