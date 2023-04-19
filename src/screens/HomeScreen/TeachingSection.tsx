import { Divider, ItemCard, ItemCardProps } from "@/components";
import { ArrowRightCircle, Book, Share2, Users } from "@tamagui/lucide-icons";
import React from "react";
import { H4, Image, Paragraph, XStack, YStack } from "tamagui";

const items: ItemCardProps[] = [
  {
    title: "GATHERLOOP",
    tagline: "Empowering developers to reach their potential through community",
    description:
      "I build a community called Gatherloop to help aspiring developers reach their potential with monthly sharing session, workshop, and other events.",
    icon: <Share2 />,
    button: {
      title: "READ MORE",
      icon: ArrowRightCircle,
      href: "http://gatherloop.co",
    },
  },
  {
    title: "PRIVATE MENTORING",
    tagline: "Personalized Mentorship for Aspiring Developers",
    description:
      "I offer personalized mentoring service to help new developers achieve their career goals through customized learning roadmaps, one-on-one guidance, and feedback.",
    icon: <Users />,
    button: {
      title: "READ MORE",
      icon: ArrowRightCircle,
      href: "http://gatherloop.co",
    },
  },
  {
    title: "MINICLASS WEB",
    tagline: "Comprehensive Learning Roadmap For Freshmen",
    description:
      "I created a web development learning roadmap for freshmen at State Polytechnic of Malang, teaching them the fundamentals and industry best practices to jumpstart their journey.",
    icon: <Book />,
    button: {
      title: "READ MORE",
      icon: ArrowRightCircle,
      href: "https://github.com/wrideveloper/miniclass-web",
    },
  },
];

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
          {items.map((item) => (
            <ItemCard
              key={item.title}
              {...item}
              isTransparent
              flex={1}
              width="100%"
              height="100%"
              justifyContent="space-between"
            />
          ))}
        </YStack>
      </YStack>
    </YStack>
  );
}
