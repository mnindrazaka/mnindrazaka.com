import React from "react";
import {
  Anchor,
  Button,
  ButtonProps,
  H3,
  H4,
  Paragraph,
  XStack,
  YStack,
  YStackProps,
} from "tamagui";

export type ItemCardProps = {
  title: string;
  tagline?: string;
  description: string;
  icon?: React.ReactNode;
  isTransparent?: boolean;
  tags?: string[];
  button?: {
    title: string;
    href: string;
    icon?: ButtonProps["icon"];
  };
} & YStackProps;

export function ItemCard({
  title,
  description,
  icon,
  tagline,
  isTransparent,
  button,
  tags = [],
  ...yStackProps
}: ItemCardProps) {
  return (
    <YStack
      {...yStackProps}
      space="$3"
      theme="purple"
      backgroundColor={isTransparent ? undefined : "$background"}
      borderColor={isTransparent ? undefined : "$borderColor"}
      borderWidth={isTransparent ? undefined : "$1"}
      padding={isTransparent ? undefined : "$5"}
      borderRadius={isTransparent ? undefined : "$5"}
      elevation={isTransparent ? undefined : "$1"}
    >
      <XStack space="$3" alignItems="center">
        {icon ? (
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
            {icon}
          </YStack>
        ) : null}
        <H4>{title}</H4>
      </XStack>

      {tagline ? <H3 fontWeight="normal">{tagline}</H3> : null}

      <Paragraph size="$5">{description}</Paragraph>

      <XStack gap={8} flexWrap="wrap">
        {tags.map((tag) => (
          <YStack
            key={tag}
            paddingVertical="$1"
            paddingHorizontal="$3"
            backgroundColor="$purple5"
            borderRadius="$5"
          >
            <Paragraph>{tag}</Paragraph>
          </YStack>
        ))}
      </XStack>

      {button ? (
        <XStack>
          <Anchor href={button.href} textDecorationLine="none">
            <Button icon={button.icon}>{button.title}</Button>
          </Anchor>
        </XStack>
      ) : null}
    </YStack>
  );
}
