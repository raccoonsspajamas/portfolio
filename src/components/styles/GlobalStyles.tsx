import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`

    body {
    margin: 0;
    font-family:'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    background-color: ${theme.colors.primaryBg};
    padding: 0 108px 0 305px;

    @media ${theme.media.primary} {
        padding: 0;
    }
    
    }


    * {
    padding: 0;
    margin: 0;
    border: 0;
}



*,
*:before,
*:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align:start;
}


::-webkit-scrollbar {
                  display: none;
            }

/* ::-webkit-scrollbar {
    width: 5px; 
    
}

::-webkit-scrollbar-thumb{
    background-color: ${theme.colors.secondaryBg}; 
} */


:focus,
:active {
    outline: none;
}
a:focus,
a:active {
    outline: none;
}

nav,
footer,
header,
aside {
    display: block;
}


input,
button,
textarea {
    font-family: inherit;
}

input::-ms-clear {
    display: none;
}
button {
    cursor: pointer;
    background: unset;
    border: none;
}
button::-moz-focus-inner {
    padding: 0;
    border: 0;
}
a,
a:visited {
    text-decoration: none;
}
a:hover {
    text-decoration: none;
}


ul {
    list-style: none;
}
img {
    vertical-align: top;
    object-fit: cover;
}

p, li, span {
    color: ${theme.colors.text};
}

section {
    padding: 70px 0 0 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 400;
    color: ${theme.colors.title};
}

`