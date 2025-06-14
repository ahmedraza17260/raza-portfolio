// src/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) =>
      theme === "dark" ? "#0b0c10" : "#ffffff"};
    color: ${({ theme }) =>
      theme === "dark" ? "#c5c6c7" : "#0b0c10"};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: all 0.3s ease-in-out;
  }
`;
