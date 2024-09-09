import { Divider } from "@/components";
import { ArrowRightCircle } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Button, H4, Image, Paragraph, XStack, YStack } from "tamagui";

export function GatherloopSection() {
  return (
    <YStack marginTop="$10">
      <YStack space="$5">
        <H4 textAlign="center" $gtSm={{ textAlign: "left" }}>
          GATHERLOOP CAFE & COMMUNITY
        </H4>
        <Divider alignSelf="center" $gtSm={{ alignSelf: "flex-start" }} />
        <XStack
          flexWrap="wrap"
          justifyContent="center"
          $gtSm={{ justifyContent: "flex-start" }}
          gap="$8"
        >
          <YStack flexBasis="100%" $gtSm={{ flexBasis: "40%" }} space="$5">
            <Paragraph
              size="$9"
              fontWeight="normal"
              textAlign="center"
              $gtSm={{ textAlign: "left" }}
            >
              Coffee shop for gathering, learning, and growing together
            </Paragraph>
            <Paragraph
              size="$5"
              textAlign="center"
              $gtSm={{ textAlign: "left" }}
            >
              In addition to mentoring, I manage Gatherloop, a vibrant coffee
              shop that serves as a dynamic community hub. At Gatherloop,
              individuals with a passion for software engineering, UI design,
              books, and business come together in a welcoming environment. It’s
              a place where people can not only enjoy great coffee but also
              engage in meaningful discussions, share ideas, and foster
              connections. We aim to create a space that supports learning and
              personal growth, bringing together diverse interests and expertise
              to enrich our collective experience.
            </Paragraph>
            <Anchor href="http://gatherloop.co" textDecorationLine="none">
              <Button icon={ArrowRightCircle} theme="purple">
                GATHERLOOP WEBSITE
              </Button>
            </Anchor>
          </YStack>
          <Image
            maxWidth={280}
            width="100%"
            marginLeft="$0"
            marginBottom="$3"
            $gtSm={{ marginLeft: "$8", marginBottom: "$8" }}
            aspectRatio={1 / 1}
            defaultSource={{
              uri: "https://gatherloop.co/assets/images/Cafe-4.jpg",
            }}
            source={{
              uri: "https://gatherloop.co/assets/images/Cafe-4.jpg",
            }}
            alt="mentoring"
            borderRadius="$12"
          />
        </XStack>
      </YStack>
    </YStack>
  );
}
