import React from "react";
import { Container, Post } from "@/components";
import { ScrollView } from "tamagui";
import { HeroSection } from "./HeroSection";
import { SpecialitiesSection } from "./SpecialitiesSection";
import { TeachingSection } from "./TeachingSection";
import { PortfolioSection } from "./PortfolioSection";
import { BlogSection } from "./BlogSection";
import { FooterSection } from "./FooterSection";
import { GatherloopSection } from "./GatherloopSection";

export type HomeScreenProps = {
  posts: Post[];
};

export function HomeScreen(props: HomeScreenProps) {
  return (
    <ScrollView overflow="scroll">
      <Container>
        <HeroSection />
        <SpecialitiesSection />
        <TeachingSection />
        <GatherloopSection />
        <PortfolioSection />
        <BlogSection posts={props.posts} />
      </Container>
      <FooterSection />
    </ScrollView>
  );
}
