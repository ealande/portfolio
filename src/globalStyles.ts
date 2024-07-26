import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*:: before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  backlground-color: #6CD3A1;
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
.educationContainer {
* {
  box-sizing: border-box;
}

/* Set a background color */
body {
  background-color: #474e5d;
  font-family: Helvetica, sans-serif;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #FF9F55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
/* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

/* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

/* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

/* Make sure all circles are at the same spot */
  .left::after, .right::after {
    left: 15px;
  }

/* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
}
.toolSetTitle{
  justify-content:;
  font-size: 40px;
  font-weight: 800;
}`

export default GlobalStyle;
