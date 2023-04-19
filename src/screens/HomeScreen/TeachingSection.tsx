import { ArrowRightCircle, Book, Share2, Users } from "@tamagui/lucide-icons";
import React from "react";
import {
  Anchor,
  Button,
  H3,
  H4,
  Image,
  Paragraph,
  XStack,
  YStack,
} from "tamagui";

export function TeachingSection() {
  return (
    <YStack marginTop="$10">
      <YStack space="$5">
        <H4 textAlign="center" $gtSm={{ textAlign: "left" }}>
          MENTORING AND TEACHING
        </H4>
        <YStack
          width={64}
          height={3}
          theme="purple_Button"
          backgroundColor="$background"
          borderRadius="$12"
          alignSelf="center"
          $gtSm={{ alignSelf: "flex-start" }}
        ></YStack>
        <XStack
          flexWrap="wrap"
          justifyContent="center"
          $gtSm={{ justifyContent: "flex-start" }}
        >
          <Image
            maxWidth={360}
            width="100%"
            marginRight="$0"
            marginBottom="$3"
            $gtSm={{ marginRight: "$8", marginBottom: "$8" }}
            aspectRatio={1 / 1}
            defaultSource={{
              uri: "https://lh3.googleusercontent.com/pw/ACtC-3femVHb8s_m0chY-bJA9zxOosSdw0mlNB1vlj86bb5gz9WASCgJAiakA7xmGDZOP7XugkA1-fPrmXPzQ6pHvZX0O1mmCl1HdCy6_fc5oqHwtmYtn4yZCGHg7Gbrl3KtoJRFHW6sXVcf6KtZwKYmiX5-=w2190-h1642-no?authuser=0",
            }}
            source={{
              uri: "https://lh3.googleusercontent.com/pw/ACtC-3femVHb8s_m0chY-bJA9zxOosSdw0mlNB1vlj86bb5gz9WASCgJAiakA7xmGDZOP7XugkA1-fPrmXPzQ6pHvZX0O1mmCl1HdCy6_fc5oqHwtmYtn4yZCGHg7Gbrl3KtoJRFHW6sXVcf6KtZwKYmiX5-=w2190-h1642-no?authuser=0",
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
              As an experienced mentor, I have a passion for helping junior
              developers reach their full potential. With 6 years of teaching
              experience, I am adept at unlocking hidden talent and fostering
              growth in my mentees. Whether it is guiding new graduates or
              coaching seasoned professionals, I am committed to sharing my
              knowledge and expertise to help others succeed in the industry.
            </Paragraph>
          </YStack>
        </XStack>

        <YStack space="$8" $gtMd={{ flexDirection: "row" }}>
          <YStack
            flex={1}
            width="100%"
            space="$3"
            theme="purple"
            height="100%"
            justifyContent="space-between"
          >
            <XStack alignItems="center" space="$3">
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
                <Share2 />
              </YStack>
              <H4>GATHERLOOP</H4>
            </XStack>

            <H3 fontWeight="normal">
              Empowering developers to reach their potential through community
            </H3>

            <Paragraph size="$5">
              I build a community called Gatherloop to help aspiring developers
              reach their potential with monthly sharing session, workshop, and
              other events.
            </Paragraph>

            <XStack>
              <Anchor href="http://gatherloop.co/" textDecorationLine="none">
                <Button icon={ArrowRightCircle}>READ MORE</Button>
              </Anchor>
            </XStack>
          </YStack>
          <YStack
            flex={1}
            width="100%"
            space="$3"
            theme="purple"
            height="100%"
            justifyContent="space-between"
          >
            <XStack alignItems="center" space="$3">
              <YStack
                theme="purple_Button"
                backgroundColor="$background"
                borderRadius="$12"
                borderColor="$borderColor"
                borderWidth="$1"
                width={40}
                height={40}
                justifyContent="center"
                alignItems="center"
              >
                <Users />
              </YStack>
              <H4>PRIVATE MENTORING</H4>
            </XStack>

            <H3 fontWeight="normal">
              Personalized Mentorship for Aspiring Developers
            </H3>

            <Paragraph size="$5">
              I offer personalized mentoring service to help new developers
              achieve their career goals through customized learning roadmaps,
              one-on-one guidance, and feedback.
            </Paragraph>

            <XStack>
              <Anchor href="http://gatherloop.co/" textDecorationLine="none">
                <Button icon={ArrowRightCircle}>READ MORE</Button>
              </Anchor>
            </XStack>
          </YStack>
          <YStack
            flex={1}
            width="100%"
            space="$3"
            theme="purple"
            height="100%"
            justifyContent="space-between"
          >
            <XStack alignItems="center" space="$3">
              <YStack
                theme="purple_Button"
                backgroundColor="$background"
                borderRadius="$12"
                borderColor="$borderColor"
                borderWidth="$1"
                width={40}
                height={40}
                justifyContent="center"
                alignItems="center"
              >
                <Book />
              </YStack>
              <H4>MINICLASS WEB</H4>
            </XStack>

            <H3 fontWeight="normal">
              Comprehensive Learning Roadmap For Freshmen
            </H3>

            <Paragraph size="$5">
              I created a web development learning roadmap for freshmen at State
              Polytechnic of Malang, teaching them the fundamentals and industry
              best practices to jumpstart their journey.
            </Paragraph>

            <XStack>
              <Anchor
                href="https://github.com/wrideveloper/miniclass-web"
                textDecorationLine="none"
              >
                <Button icon={ArrowRightCircle}>READ MORE</Button>
              </Anchor>
            </XStack>
          </YStack>
        </YStack>
      </YStack>
    </YStack>
  );
}
