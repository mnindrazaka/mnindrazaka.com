import { Moon, Sun } from "@tamagui/lucide-icons";
import { useThemeSetting } from "@tamagui/next-theme";
import { Switch, XStack } from "tamagui";

export const ColorModeSwitcher = () => {
  const themeSetting = useThemeSetting();
  return (
    <XStack gap="$3" alignItems="center">
      <Sun />
      <Switch
        cursor="pointer"
        size="$1"
        checked={themeSetting.current === "dark"}
        onCheckedChange={(value) => themeSetting.set(value ? "dark" : "light")}
      >
        <Switch.Thumb animation="quicker" />
      </Switch>
      <Moon />
    </XStack>
  );
};
