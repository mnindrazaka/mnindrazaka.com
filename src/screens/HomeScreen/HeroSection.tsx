import { Divider } from "@/components";
import { Github, Linkedin, Mail } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Button, H1, Image, Paragraph, XStack, YStack } from "tamagui";

const PHOTO_URL = "/images/profile.jpg";

export function HeroSection() {
  return (
    <YStack
      alignItems="center"
      justifyContent="center"
      paddingVertical="$15"
      space="$10"
      $gtXs={{ flexDirection: "row", alignItems: "flex-start" }}
    >
      <YStack>
        <Image
          borderRadius={280}
          width={280}
          height={280}
          source={{ uri: PHOTO_URL }}
          defaultSource={{ uri: PHOTO_URL }}
          alt="image profile"
        />
      </YStack>
      <YStack
        space="$5"
        flex={1}
        alignItems="center"
        $gtXs={{ alignItems: "flex-start" }}
      >
        <H1 textAlign="center" $gtXs={{ textAlign: "left" }}>
          M. Nindra Zaka
        </H1>
        <Paragraph textAlign="center" $gtXs={{ textAlign: "left" }}>
          SENIOR FRONTEND ENGINEER
        </Paragraph>
        <Divider />
        <Paragraph
          size="$9"
          maxWidth={500}
          textAlign="center"
          $gtXs={{ textAlign: "left" }}
        >
          Dedicated to building great products and fostering team growth
        </Paragraph>
        <XStack
          space="$3"
          justifyContent="center"
          $gtXs={{ justifyContent: "flex-start" }}
        >
          <Anchor href="mailto:mnindrazaka@gmail.com">
            <Button
              theme="purple"
              icon={Mail}
              circular
              width={40}
              height={40}
            ></Button>
          </Anchor>

          <Anchor href="https://www.linkedin.com/in/mnindrazaka">
            <Button
              theme="purple"
              icon={Linkedin}
              circular
              width={40}
              height={40}
            ></Button>
          </Anchor>

          <Anchor href="http://github.com/mnindrazaka">
            <Button
              theme="purple"
              icon={Github}
              circular
              width={40}
              height={40}
            ></Button>
          </Anchor>
        </XStack>
      </YStack>
    </YStack>
  );
}
