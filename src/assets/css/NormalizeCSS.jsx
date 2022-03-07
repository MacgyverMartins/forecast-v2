import { createGlobalStyle } from "styled-components";

const NormalizeCSS = createGlobalStyle`
  * {
    font-family: Helvetica, 'Roboto', sans-serif;
  }

  body html #root {
    height: 100vh;
  }

  body {
    margin: 0
  }
`;

export default NormalizeCSS;
