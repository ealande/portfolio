import { StyledNavbar } from "./styles";
import { Notification } from "../footer/styles";
import { useState } from "react";

const NavBar = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    const email = "ealandev@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    });
  };

  const buttonLinkStyle = {
    border: 'none',
    background: 'none',
    outline: 'none',
  }

  return (
    <>
      <StyledNavbar className="navbar navbar-expand-lg">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.github.com/ealande">GitHub</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <button className="nav-link" style={buttonLinkStyle} onClick={handleEmailCopy} >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </StyledNavbar>

      {emailCopied && <Notification>Email copied to clipboard!</Notification>}
    </>
  );
};


export default NavBar;

