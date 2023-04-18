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
      borderColor="$borderColor"
      borderWidth="$1"
      padding="$8"
      borderRadius="$8"
    >
      <YStack space="$8" $gtMd={{ flexDirection: "row" }}>
        <YStack flex={1} space="$3" width="100%">
          <H3>TOOLS AND LIBRARY</H3>
          <YStack
            width={64}
            height={3}
            theme="purple_Button"
            backgroundColor="$background"
            borderRadius="$12"
          ></YStack>
          <Paragraph size="$8" fontWeight="normal">
            Explore my collection of innovative libraries and tools that
            showcase my expertise in web development.
          </Paragraph>
        </YStack>

        <YStack flex={1} space="$3" width="100%" justifyContent="space-between">
          <H4>CRUDONE</H4>

          <Paragraph size="$5">
            I developed custom CRUD library using React compound components
            pattern for efficient data management in projects. It comes with
            built in table management and form validation
          </Paragraph>

          <XStack>
            <Anchor
              href="https://www.npmjs.com/package/crudone"
              textDecorationLine="none"
            >
              <Button icon={ArrowRightCircle}>READ MORE</Button>
            </Anchor>
          </XStack>
        </YStack>

        <YStack flex={1} space="$3" width="100%" justifyContent="space-between">
          <H4>VANILLA REACT</H4>

          <Paragraph size="$5">
            I created a Vanilla JS library to help new developers better
            understand React core concepts such as component rendering and state
            management. It is a valuable resource for anyone looking to enhance
            their React skills.
          </Paragraph>

          <XStack>
            <Anchor
              href="https://github.com/mnindrazaka/vanilla-react"
              textDecorationLine="none"
            >
              <Button icon={ArrowRightCircle}>READ MORE</Button>
            </Anchor>
          </XStack>
        </YStack>

        <YStack flex={1} space="$3" width="100%" justifyContent="space-between">
          <H4>CODE SEND</H4>

          <Paragraph size="$5">
            I created Code Send, a platform similar to Code Push, as part of my
            thesis project. It gave me valuable insights into CodePush and how
            it can improve the user experience of mobile apps.
          </Paragraph>

          <XStack>
            <Anchor
              href="https://github.com/mnindrazaka/code-send"
              textDecorationLine="none"
            >
              <Button icon={ArrowRightCircle}>READ MORE</Button>
            </Anchor>
          </XStack>
        </YStack>
      </YStack>
    </YStack>
  );
}
