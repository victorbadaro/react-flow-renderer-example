import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background-color: #333;
    color: #fff;

    a {
      text-decoration: none;
    }

    button {
      cursor: pointer;
    }
  }
`;