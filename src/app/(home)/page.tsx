'use client'

import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/themes/default'

import { ThemeProvider } from 'styled-components'
import Profile from './components/profile'
import { Main } from './styles/home'
import About from './components/about'

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main>
        <GlobalStyles />

        <Profile />

        <About />
      </Main>
    </ThemeProvider>
  )
}
