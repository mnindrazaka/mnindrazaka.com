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
import { BlogSection } from "./BlogSection";

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
        <BlogSection posts={props.posts} />
      </Container>
    </ScrollView>
  );
}
