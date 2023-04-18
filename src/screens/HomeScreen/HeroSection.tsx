import { Github, Linkedin, Mail } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Button, H1, Image, Paragraph, XStack, YStack } from "tamagui";

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
          borderRadius="$12"
          width={280}
          height={280}
          source={{
            uri: "https://media.licdn.com/dms/image/C5603AQEsF3F--ivLJg/profile-displayphoto-shrink_800_800/0/1622887591562?e=1687392000&v=beta&t=XXWTWu0wWpM-5b3Mwob8sWXCKm0oYiuxTSriQc-pUk8",
          }}
          defaultSource={{
            uri: "https://media.licdn.com/dms/image/C5603AQEsF3F--ivLJg/profile-displayphoto-shrink_800_800/0/1622887591562?e=1687392000&v=beta&t=XXWTWu0wWpM-5b3Mwob8sWXCKm0oYiuxTSriQc-pUk8",
          }}
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
        <YStack
          width={64}
          height={3}
          theme="purple_Button"
          backgroundColor="$background"
          borderRadius="$12"
        ></YStack>
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
