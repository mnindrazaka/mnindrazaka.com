import React from "react";
import { YStack, YStackProps } from "tamagui";

type DividerProps = {} & YStackProps;

export function Divider(props: DividerProps) {
  return (
    <YStack
      width={64}
      height={3}
      theme="purple_Button"
      backgroundColor="$background"
      borderRadius="$12"
      {...props}
    ></YStack>
  );
}
