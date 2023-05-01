import { createGlobalStyle } from "styled-components";
import "modern-normalize/modern-normalize.css";
import { vars } from "./vars";

export const GlobalStyle = createGlobalStyle`
${vars}

body {
    font-family: 'Montserrat';
font-size: 20px;
}

ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
}
img {
    display: block;
    max-width: 100%;
    height: auto;
}
h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: currentColor;
}
button {
  border: none;
}

`;
