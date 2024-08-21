import { Divider } from "@/components";
import React from "react";
import { H4, Image, Paragraph, XStack, YStack } from "tamagui";

export function TeachingSection() {
  return (
    <YStack marginTop="$10">
      <YStack space="$5">
        <H4 textAlign="center" $gtSm={{ textAlign: "left" }}>
          MENTORING AND TEACHING
        </H4>
        <Divider alignSelf="center" $gtSm={{ alignSelf: "flex-start" }} />
        <XStack
          flexWrap="wrap"
          justifyContent="center"
          $gtSm={{ justifyContent: "flex-start" }}
        >
          <Image
            maxWidth={280}
            width="100%"
            marginRight="$0"
            marginBottom="$3"
            $gtSm={{ marginRight: "$8", marginBottom: "$8" }}
            aspectRatio={1 / 1}
            defaultSource={{
              uri: "https://gatherloop.co/assets/images/EventBootcampIT4.jpg",
            }}
            source={{
              uri: "https://gatherloop.co/assets/images/EventBootcampIT4.jpg",
            }}
            alt="mentoring"
            borderRadius="$12"
          />

          <YStack flexBasis="100%" $gtSm={{ flexBasis: "40%" }} space="$5">
            <Paragraph
              size="$9"
              fontWeight="normal"
              textAlign="center"
              $gtSm={{ textAlign: "left" }}
            >
              Empowering teams through individual development and mentorship
            </Paragraph>
            <Paragraph
              size="$5"
              textAlign="center"
              $gtSm={{ textAlign: "left" }}
            >
              As an experienced mentor with 6 years of teaching experience, I am
              passionate about helping junior developers unlock their potential
              and succeed in the software engineering industry. I've guided both
              new graduates and seasoned professionals, fostering growth through
              shared knowledge and expertise.
            </Paragraph>
          </YStack>
        </XStack>
      </YStack>
    </YStack>
  );
}
