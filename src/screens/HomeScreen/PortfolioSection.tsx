import { ArrowRightCircle } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Button, H3, H4, Paragraph, XStack, YStack } from "tamagui";

export function PortfolioSection() {
  return (
    <YStack
      marginTop="$11"
      space="$8"
      theme="purple"
      backgroundColor="$background"
      padding="$8"
      borderRadius="$8"
    >
      <XStack space="$8" flexWrap="wrap">
        <YStack
          space="$3"
          flexBasis="100%"
          $gtSm={{ flexBasis: "42%" }}
          marginBottom="$5"
        >
          <H3>TOOLS AND LIBRARY</H3>
          <YStack
            width={64}
            height={3}
            theme="purple_Button"
            backgroundColor="$background"
            borderRadius="$12"
          ></YStack>
          <Paragraph size="$5">
            As a dedicated learner, I am constantly seeking new knowledge and
            insights into the latest technologies and techniques in the world of
            web development. Whenever I come across a new concept or skill, I
            like to put it into practice by creating my own tools or libraries
            to gain a deeper understanding of how it works.
          </Paragraph>
        </YStack>

        <YStack
          flexBasis="100%"
          $gtSm={{ flexBasis: "42%" }}
          space="$3"
          marginBottom="$5"
          justifyContent="space-between"
        >
          <H4>CRUDONE</H4>

          <Paragraph size="$5">
            As a frontend developer, I have found that creating CRUD features
            for projects can be repetitive and time-consuming. To save time and
            increase efficiency, I have developed a custom CRUD library using
            the React compound component pattern. This library includes a
            built-in table and form validation, making it easy to create and
            manage data in any project.
          </Paragraph>

          <XStack>
            <Anchor
              href="https://www.npmjs.com/package/crudone"
              textDecorationLine="none"
            >
              <Button icon={ArrowRightCircle}>Read More</Button>
            </Anchor>
          </XStack>
        </YStack>

        <YStack
          flexBasis="100%"
          $gtSm={{ flexBasis: "42%" }}
          space="$3"
          marginBottom="$5"
          justifyContent="space-between"
        >
          <H4>VANILLA REACT</H4>

          <Paragraph size="$5">
            As a mentor and React enthusiast, I have noticed that new developers
            often struggle to grasp how React works. To help address this, I
            created a similar library using Vanilla JS only that provides a
            deeper understanding of component rendering, state management, side
            effects, and more. This library serves as a valuable resource for
            developers seeking to enhance their React skills and knowledge.
          </Paragraph>

          <XStack>
            <Anchor
              href="https://github.com/mnindrazaka/vanilla-react"
              textDecorationLine="none"
            >
              <Button icon={ArrowRightCircle}>Read More</Button>
            </Anchor>
          </XStack>
        </YStack>

        <YStack
          flexBasis="100%"
          $gtXs={{ flexBasis: "42%" }}
          space="$3"
          marginBottom="$5"
          justifyContent="space-between"
        >
          <H4>CODE SEND</H4>

          <Paragraph size="$5">
            One of the React Native features that caught my attention is Code
            Push, which allows us to update and deliver code changes to our app
            in real-time without requiring the user to reinstall it. To deepen
            my understanding of this mechanism, I developed a similar platform
            called Code Send as part of my thesis project. I gained valuable
            insights into the intricacies of CodePush and how it can be
            leveraged to enhance the user experience of mobile applications.
          </Paragraph>

          <XStack>
            <Anchor
              href="https://github.com/mnindrazaka/code-send"
              textDecorationLine="none"
            >
              <Button icon={ArrowRightCircle}>Read More</Button>
            </Anchor>
          </XStack>
        </YStack>
      </XStack>
    </YStack>
  );
}
