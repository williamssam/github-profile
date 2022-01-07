import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   :root {
      font-size: 10px;
      scroll-behavior: smooth;
   }

   *:where(:not(iframe, canvas, img, svg, video):not(svg *, a)) {
      all: unset;
      display: revert;
   }

   select {
      all: revert;
   }

   *,
   *::before,
   *::after {
      box-sizing: border-box;
   }

   ol,
   ul {
      list-style: none;
   }

   img {
      max-width: 100%;
   }

   h1,
   h2,
   h3 {
      line-height: 1.2;
   }

   a {
      color: currentColor;
      text-decoration: none;
   }

   body {
      font-family: 'Poppins', sans-serif;
      font-size: 1.8rem;
      line-height: 1.6;
      color: #fff;
   }
`
