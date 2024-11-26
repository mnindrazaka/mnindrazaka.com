import { createContext, ReactNode, useContext, useState } from "react";
import { ThemeName, YStack } from "tamagui";

type ContextValue = {
  color: ThemeName;
  setColor: (color: ThemeName) => void;
};

const Context = createContext<ContextValue | null>(null);

export const useAccent = () => {
  const accent = useContext(Context);
  if (accent === null) {
    throw new Error("useAccent is used outside provider");
  }
  return accent;
};

type AccentProviderProps = {
  children: ReactNode;
};

export const AccentProvider = (props: AccentProviderProps) => {
  const [color, setColor] = useState<ThemeName>("blue");
  return (
    <Context.Provider value={{ color, setColor }}>
      <YStack theme={color} flex={1}>
        {props.children}
      </YStack>
    </Context.Provider>
  );
};
