import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*:: before,
*::after {
 }

html {
  overflow-y: scroll;
}

body {
  font-family: Roboto, Open - Sans, Helvetica, Sans - Serif;
  line-height: 1.5;
  -webkit - tap - highlight - color: transparent;
  font-size: 1rem;
  background-color: #dbd8e3;
}

button {
  font-family: inherit;
  color: inherit;
  text-decoration: inherit;
}

.btn {
  display: inline-block;
  white-space: nowrap;
  padding: 0.75rem 1.5rem;
  font-size: 1.15rem;
  font-weight: 600;
  color: #2e2e48;
  background: #fafafc;
  border-radius: 0.66rem;
  transition: all 0.2s;
  box-shadow: 0 0.5rem 1.5rem - 0.5rem currentColor;
}

.btn: hover,
.btn:focus {
  box-shadow: 0 0 0 2px #2e2e48, 0 0 0 4px #fafafc;
}

.btn:active {
  transform: scale(0.95);

}

.techsContainer {
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    display: block;
}
}

/* Beginning Timeline */

ul.timeline {
    list-style-type: none;
    position: relative;
  
a {
  color: #E0FFF5; 
  text-decoration: none;
  font-weight: bold;
  }

p {
  text-align: justify;
}
}
ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
}
ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
}
ul.timeline > li:before {
    content: ' ';
    background: #6CD3A1;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #ffffff;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}
/* End Timeline */

.toolSetTitle{
  justify-content:;
  font-size: 40px;
  font-weight: 800;
}`

export default GlobalStyle;
