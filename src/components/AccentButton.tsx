import { ThemeName, YStack } from "tamagui";
import { useAccent } from "./AccentContext";

type AccentButtonProps = {
  color: ThemeName;
};

export const AccentButton = (props: AccentButtonProps) => {
  const accent = useAccent();
  return (
    <YStack
      width={20}
      height={20}
      backgroundColor={`$${props.color}10`}
      borderRadius="$5"
      cursor="pointer"
      onPress={() => accent.setColor(props.color)}
      borderColor={accent.color === props.color ? "$color" : "transparent"}
      borderWidth="$1"
    ></YStack>
  );
};
