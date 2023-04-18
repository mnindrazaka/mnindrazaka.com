import { Code2, Rocket, Settings } from "@tamagui/lucide-icons";
import React from "react";
import { H3, H4, H5, Paragraph, XStack, YStack, YStackProps } from "tamagui";

type SkillCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
} & YStackProps;

function SkillCard({
  title,
  description,
  icon,
  ...yStackProps
}: SkillCardProps) {
  return (
    <YStack
      {...yStackProps}
      space="$3"
      theme="purple"
      backgroundColor="$background"
      borderColor="$borderColor"
      borderWidth="$1"
      padding="$5"
      borderRadius="$5"
      elevation="$1"
    >
      <XStack space="$3" alignItems="center">
        <YStack
          theme="purple_Button"
          backgroundColor="$background"
          borderColor="$borderColor"
          borderWidth="$1"
          borderRadius="$12"
          width={40}
          height={40}
          justifyContent="center"
          alignItems="center"
        >
          {icon}
        </YStack>
        <H4>{title}</H4>
      </XStack>

      <Paragraph size="$5">{description}</Paragraph>
    </YStack>
  );
}

export function SpecialitiesSection() {
  return (
    <XStack space="$8" flexWrap="wrap">
      <YStack space="$3" flexBasis="100%" $gtXs={{ flexBasis: "42%" }}>
        <H5 textAlign="center" $gtXs={{ textAlign: "left" }}>
          SPECIALITIES
        </H5>
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
          fontWeight="$1"
          textAlign="center"
          $gtXs={{ textAlign: "left" }}
        >
          Unlock your product potential with my comprehensive skills in web
          development, automated testing, and web performance optimization
        </Paragraph>
      </YStack>
      <SkillCard
        flexBasis="100%"
        marginBottom="$0"
        $gtXs={{ flexBasis: "42%", marginBottom: "$8" }}
        title="WEB DEVELOPMENT"
        description="I'm a frontend engineer with 4 years of experience in React, Typescript, and Next.js. I also have expertise in Node.js and Golang for backend development. My focus is on building scalable, maintainable, and user-friendly applications."
        icon={<Code2 />}
      />
      <SkillCard
        flexBasis="100%"
        $gtXs={{ flexBasis: "42%" }}
        title="AUTOMATED TESTING"
        description="I love implementing automated testing to ensure the highest level of quality and reliability. With my expertise in testing frameworks such as Jest and Cypress, I can help your team achieve faster and more effective testing. "
        icon={<Settings />}
      />
      <SkillCard
        flexBasis="100%"
        $gtXs={{ flexBasis: "42%" }}
        title="WEB PERFORMANCE OPTIMIZATION"
        description="I have experience analyzing and improving page load times, reducing server response times, and implementing caching strategies. With my skills in modern web development frameworks and tools, I can help your business achieve its performance goals and provide a smooth user experience for your customers."
        icon={<Rocket />}
      />
    </XStack>
  );
}
