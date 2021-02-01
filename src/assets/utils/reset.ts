import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
      height: 100%;
      color: #333;
      font: 14px/1.5 Microsoft Yahei,Tahoma,Arial,sans-serif;
      background-color: #f5f7fa;
      //-webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: transparent;
  }
  body, div, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, ul, li, ol, p, pre, td, textarea, th, blockquote{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
 h1, h2, h3, h4, h5, h6, input, label, select, textarea{
    font-weight: normal;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
 }
  ul,ol,dl{list-style:none;}
  img{border:0;vertical-align:middle;}
  a{text-decoration:none;color:inherit;outline:none;}
  input,button{padding:0;margin:0;border:none;outline: none}
  
.main-show{
    max-width: 1200px;
    margin: 0 auto;
}
`
