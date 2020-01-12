import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`html, body, ul, a, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img { margin:0; padding:0; }


fieldset, c{ border:none; }

img{display: block;}

ul, ol ,li{ list-style:none; }

body { color:#333; font:12px BASE "SimSun","宋体","Arial Narrow",HELVETICA; background:#fff;}

a { color:#666; text-decoration:none; }

*{box-sizing:border-box}
html{
    font-size:20px;
}

body,html {
    height: 100%;
    overflow: hidden;
}
`