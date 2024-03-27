'use client'

import { GlobalStyles } from "@/styles/global";
import { defaultTheme } from "@/themes/default";

import { ThemeProvider } from "styled-components";

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <h1>test</h1>
    </ThemeProvider>
  );
}
