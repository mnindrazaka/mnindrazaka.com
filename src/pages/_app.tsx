import { NextThemeProvider, useRootTheme } from "@tamagui/next-theme";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { useMemo } from "react";
import { TamaguiProvider } from "tamagui";

import config from "../../tamagui.config";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme();

  const contents = useMemo(() => {
    return <Component {...pageProps} />;
  }, [Component, pageProps]);

  return (
    <>
      <Head>
        <title>M. Nindra Zaka</title>
      </Head>
      <NextThemeProvider onChangeTheme={setTheme}>
        <TamaguiProvider
          config={config}
          disableInjectCSS
          disableRootThemeClass
          defaultTheme={theme}
        >
          {contents}
        </TamaguiProvider>
      </NextThemeProvider>
    </>
  );
}
