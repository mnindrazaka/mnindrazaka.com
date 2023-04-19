import { Divider, ItemCard, ItemCardProps } from "@/components";
import { ArrowRightCircle } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Button, H3, H4, Paragraph, XStack, YStack } from "tamagui";

const items: ItemCardProps[] = [
  {
    title: "CRUDONE",
    description:
      "I developed custom CRUD library using React compound components pattern for efficient data management in projects. It comes with built in table management and form validation",
    button: {
      title: "READMORE",
      icon: ArrowRightCircle,
      href: "https://www.npmjs.com/package/crudone",
    },
  },
  {
    title: "VANILLA REACT",
    description:
      "I created a Vanilla JS library to help new developers better understand React core concepts such as component rendering and state management. It is a valuable resource for anyone looking to enhance their React skills.",
    button: {
      title: "READMORE",
      icon: ArrowRightCircle,
      href: "https://github.com/mnindrazaka/vanilla-react",
    },
  },
  {
    title: "CODE SEND",
    description:
      "I created Code Send, a platform similar to Code Push, as part of my thesis project. It gave me valuable insights into CodePush and how it can improve the user experience of mobile apps.",
    button: {
      title: "READMORE",
      icon: ArrowRightCircle,
      href: "https://github.com/mnindrazaka/code-send",
    },
  },
];

export function PortfolioSection() {
  return (
    <YStack
      marginTop="$11"
      space="$8"
      theme="purple"
      backgroundColor="$background"
      borderColor="$borderColor"
      borderWidth="$1"
      padding="$8"
      borderRadius="$8"
      elevation="$1"
    >
      <YStack space="$8" $gtMd={{ flexDirection: "row" }}>
        <YStack flex={1} space="$3" width="100%">
          <H3>TOOLS AND LIBRARY</H3>
          <Divider />
          <Paragraph size="$8" fontWeight="normal">
            Explore my collection of innovative libraries and tools that
            showcase my expertise in web development.
          </Paragraph>
          <Anchor
            href="http://github.com/mnindrazaka"
            textDecorationLine="none"
          >
            <Button icon={ArrowRightCircle}>SEE OTHER WORKS</Button>
          </Anchor>
        </YStack>

        {items.map((item) => (
          <ItemCard
            key={item.title}
            {...item}
            flex={1}
            width="100%"
            justifyContent="space-between"
            isTransparent
          />
        ))}
      </YStack>
    </YStack>
  );
}
