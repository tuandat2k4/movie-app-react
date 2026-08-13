import { createGlobalStyle } from "styled-components";
import theme from "./theme";

//ÁP CHO TOÀN BỘ APP
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.family};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    min-height: 100vh;

    @media (max-width: 768px) {
      padding-left: 16px;
      padding-right: 16px;
    }
    @media (min-width: 769px) {
      padding-left: 80px;
      padding-right: 80px;
    }
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default GlobalStyles;
