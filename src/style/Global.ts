import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: inherit;
    letter-spacing: 0.1em !important;
  }
  @font-face {
    font-family: "Bunny";
    src: url(/fonts/bunny/bunny.ttf);
  } 
  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: Bunny;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
