import {createGlobalStyle} from "styled-components/macro";
import {ThemeType} from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType}>`
  // Import the main style from theme
  @import url('${({theme}) => theme.font.source}');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    // Removes the default mobile highlight when holding down the finger on the component
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    margin: 0;
    padding: 0;
  }

  *:focus {
    // Removes the default outline
    outline: none;
  }

  html {
    overflow-x: hidden;
    
    line-height: 1.4;
    scroll-behavior: smooth;

    @media (max-width: ${({theme}) => theme.mediaQuery.mobileL}) {
      
      font-size: ${({theme}) => theme.font.size.s1};
    }
  }

  body {
    background-color: ${({theme}) => theme.color.black};
    // Default global font
    font-family: ${({theme}) => theme.font.family.default};
    font-size: ${({theme}) => theme.font.size.default};
    color: ${({theme}) => theme.color.white}
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.color.white};
  }

  textarea {
    resize: none;
  }
  
`
