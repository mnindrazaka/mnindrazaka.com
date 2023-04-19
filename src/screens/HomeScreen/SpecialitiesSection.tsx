import { Divider, ItemCard, ItemCardProps } from "@/components";
import { Code2, Rocket, Settings } from "@tamagui/lucide-icons";
import React from "react";
import { H5, Paragraph, XStack, YStack } from "tamagui";

const items: ItemCardProps[] = [
  {
    title: "WEB DEVELOPMENT",
    description:
      "I'm a frontend engineer with 4 years of experience in React, Typescript, and Next.js. I also have expertise in Node.js and Golang for backend development. My focus is on building scalable, maintainable, and user-friendly applications.",
    icon: <Code2 />,
  },
  {
    title: "AUTOMATED TESTING",
    description:
      "I love implementing automated testing to ensure the highest level of quality and reliability. With my expertise in testing frameworks such as Jest and Cypress, I can help your team achieve faster and more effective testing. ",
    icon: <Settings />,
  },
  {
    title: "WEB PERFORMANCE OPTIMIZATION",
    description:
      "I have experience analyzing and improving page load times, reducing server response times, and implementing caching strategies. With my skills in modern web development frameworks and tools, I can help your business achieve its performance goals and provide a smooth user experience for your customers.",
    icon: <Rocket />,
  },
];

export function SpecialitiesSection() {
  return (
    <XStack space="$8" flexWrap="wrap">
      <YStack space="$3" flexBasis="100%" $gtXs={{ flexBasis: "42%" }}>
        <H5 textAlign="center" $gtXs={{ textAlign: "left" }}>
          SPECIALITIES
        </H5>
        <Divider alignSelf="center" $gtXs={{ alignSelf: "flex-start" }} />
        <Paragraph
          size="$8"
          fontWeight="$1"
          textAlign="center"
          $gtXs={{ textAlign: "left" }}
        >
          Unlock your product potential with my comprehensive skills in web
          development, automated testing, and web performance optimization
        </Paragraph>
      </YStack>
      {items.map((item) => (
        <ItemCard
          key={item.title}
          flexBasis="100%"
          marginBottom="$0"
          $gtXs={{ flexBasis: "42%", marginBottom: "$8" }}
          {...item}
        />
      ))}
    </XStack>
  );
}
