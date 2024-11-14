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
  font-family: 'Roboto', Open-Sans, Helvetica, Sans-Serif;
  line-height: 1.5;
  -webkit-tap-highlight-color: transparent; /* No spaces between! */
  font-size: 1rem;
  background-color: #E0FFF5;
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
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center; /* Align items vertically */
  gap: 1.5rem; 
  padding: 2rem;

}

@media (max-width: 1000px) {
  .techsContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
}


.aboutMeContainer {
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  line-height: 1;
  margin: 1.5rem 0;
  padding: 0 0.2em 0.2em 0.2em;
  text-align: justify;
  color: #333;   

  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {

    font-size: 1.4rem;
    margin: 1rem 0;
    padding: 0 0.8rem;
    text-align: justify;
  }

  @media (max-width: 480px) {

    font-size: 1.2rem;
    margin: 0.8rem 0;
    padding: 0 0.6rem;
    text-align: justify;
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

