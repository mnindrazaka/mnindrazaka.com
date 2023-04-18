import React from "react";
import { Container } from "@/components";
import {
  Anchor,
  Button,
  H3,
  H5,
  Image,
  Paragraph,
  ScrollView,
  XStack,
  YStack,
} from "tamagui";
import { HeroSection } from "./HeroSection";
import { SpecialitiesSection } from "./SpecialitiesSection";
import { TeachingSection } from "./TeachingSection";
import { PortfolioSection } from "./PortfolioSection";
import Link from "next/link";
import { ArrowRightCircle } from "@tamagui/lucide-icons";

export type HomeScreenProps = {
  posts: {
    title: string;
    description: string;
    href: string;
    imageUrl: string;
    date: string;
  }[];
};

export function HomeScreen(props: HomeScreenProps) {
  return (
    <ScrollView>
      <Container>
        <HeroSection />
        <SpecialitiesSection />
        <TeachingSection />
        <PortfolioSection />
        <YStack marginTop="$10" space="$8">
          <XStack justifyContent="space-between" alignItems="center">
            <YStack space="$3">
              <H3>BLOGS</H3>
              <YStack
                width={64}
                height={3}
                theme="purple_Button"
                backgroundColor="$background"
                borderRadius="$12"
              ></YStack>
              <Paragraph size="$8">
                Explore My Technical Blog for Insightful Reads
              </Paragraph>
            </YStack>
            <Button theme="purple" icon={ArrowRightCircle}>
              SEE THE FULL BLOG
            </Button>
          </XStack>

          <XStack space="$8">
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
                    <H5 flex={1}>
                      {new Date(date).toLocaleDateString(undefined, {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </H5>
                    <H3>{title}</H3>
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
