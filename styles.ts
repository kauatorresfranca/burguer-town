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
};

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }

    ul {
        list-style: none;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
`