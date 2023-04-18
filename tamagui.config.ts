import { createTamagui } from "tamagui";
import { config } from "@tamagui/config";

const appConfig = createTamagui({
  ...config,
  fonts: {
    ...config.fonts,
    heading: {
      ...config.fonts.heading,
      family: "Lato, Helvetica, Arial, sans-serif",
    },
    body: {
      ...config.fonts.body,
      family: "Lato, Helvetica, Arial, sans-serif",
    },
  },
});

export type AppConfig = typeof appConfig;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
