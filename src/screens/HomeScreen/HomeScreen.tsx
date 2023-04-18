import React from "react";
import { Container } from "@/components";
import { ScrollView } from "tamagui";
import { HeroSection } from "./HeroSection";
import { SpecialitiesSection } from "./SpecialitiesSection";
import { TeachingSection } from "./TeachingSection";
import { PortfolioSection } from "./PortfolioSection";

export type HomeScreenProps = {};

export function HomeScreen(_props: HomeScreenProps) {
  return (
    <ScrollView>
      <Container>
        <HeroSection />
        <SpecialitiesSection />
        <TeachingSection />
        <PortfolioSection />
      </Container>
    </ScrollView>
  );
}
