import React from "react";
import { Container } from "@/components";
import { ScrollView } from "tamagui";
import { HeroSection } from "./HeroSection";
import { SpecialitiesSection } from "./SpecialitiesSection";
import { TeachingSection } from "./TeachingSection";
import { PortfolioSection } from "./PortfolioSection";
import { BlogSection } from "./BlogSection";
import { FooterSection } from "./FooterSection";

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
    <ScrollView overflow="scroll">
      <Container>
        <HeroSection />
        <SpecialitiesSection />
        <TeachingSection />
        <PortfolioSection />
        <BlogSection posts={props.posts} />
      </Container>
      <FooterSection />
    </ScrollView>
  );
}
