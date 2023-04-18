import React from "react";
import { Container } from "@/components";
import { Github, Linkedin, Mail } from "@tamagui/lucide-icons";
import { Anchor, Button, H3, H5, XStack, YStack } from "tamagui";

export function FooterSection() {
  return (
    <YStack
      backgroundColor="$background"
      borderColor="$borderColor"
      borderTopWidth="$1"
      paddingVertical="$10"
      marginTop="$10"
    >
      <Container>
        <XStack space="$5">
          <YStack space="$3" flex={1} width="100%">
            <H3>M. Nindra Zaka</H3>
            <H5 maxWidth={360}>
              Dedicated to building great products and fostering team growth
            </H5>
          </YStack>
          <YStack space="$3" flex={1} width="100%">
            <H3>Keep in Touch with Me</H3>
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
        </XStack>
      </Container>
    </YStack>
  );
}
