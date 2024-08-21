import { Divider, ItemCard, ItemCardProps } from "@/components";
import { ArrowRightCircle } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Button, H3, Paragraph, YStack } from "tamagui";

const items: ItemCardProps[] = [
  {
    title: "Gatherloop Point Of Sale",
    description:
      "I am developing a custom Point of Sale (POS) system tailored for my coffee shop, supporting both web and mobile platforms. This system handles essential functions like registering new menu items and recording customer transactions, while also automating cost and profit calculations. It streamlines financial management by allocating budgets for operational expenses, food costs, and profits, providing a comprehensive and efficient solution for business operations.",
    button: {
      title: "READMORE",
      icon: ArrowRightCircle,
      href: "https://github.com/gatherloop/gatherloop-pos",
    },
    tags: [
      "React",
      "React Native",
      "Typescript",
      "Golang",
      "Clean Architecture",
      "Automated Testing",
    ],
  },
  {
    title: "Vanilla React",
    description:
      "I developed a custom Vanilla JavaScript library capable of rendering a UI and automatically managing its state using hooks, similar to React. This library is designed to help new developers gain a deeper understanding of React’s core concepts, including component rendering and state management, making it a valuable educational tool.",
    button: {
      title: "READMORE",
      icon: ArrowRightCircle,
      href: "https://github.com/mnindrazaka/vanilla-react",
    },
    tags: [
      "Vanilla Javascript",
      "Single Page Application",
      "State Management",
      "Finite State Machine",
    ],
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
          <H3>PORTFOLIO</H3>
          <Divider />
          <Paragraph size="$8" fontWeight="normal">
            Explore my collection of projects that showcase my expertise in web
            development.
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
