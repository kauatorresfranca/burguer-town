import { createGlobalStyle } from "styled-components";

export const breakpoints = {
    mobile: "576px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1200px",
};

export const colors = {
    primary: "#FF6347",
    background: "#F5F5F5",
    title: "#333333",
    text: "#666666",
    outline: "#CCCCCC",
    green: "#10b981",
    red: "#FF0000",
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: rubik, sans-serif;
    }

    body {
        background-color: ${colors.background};
    }

    ul {
        list-style: none;
    }

    .container {
        max-width: 1280px;
        margin: 0 auto;
    }
`