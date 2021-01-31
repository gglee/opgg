import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: Helvetica,"Malgun Gothic","Apple SD Gothic Neo",AppleGothic,Dotum,Arial,Tahoma;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

input, button, textarea {
  font-family: inherit;
}

html, body, #root {
  height: 100%;
}
`;

export default GlobalStyles;
