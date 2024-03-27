'use client'

import { GlobalStyles } from "@/styles/global";
import { defaultTheme } from "@/themes/default";

import { ThemeProvider } from "styled-components";
import Profile from "./components/profile";

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Profile />
    </ThemeProvider>
  );
}
