import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.white};
    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }
    body {
      background-color: ${(props) => props.theme.background};
    }
  }
`
