import { FooterEnd, SocialIcons, IconLink, Notification } from "./styles";
import { useState } from "react";
import linkedinIcon from '/linkedin.svg';
import githubIcon from '/githubColor.svg';
import emailIcon from '/contact.svg';

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    const email = "ealandev@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    });
  }
  return (
    <>
      <FooterEnd>
        <p>&copy; 2024 Erick Lima. All rights reserved.</p>
        <SocialIcons>
          <IconLink href="https://www.linkedin.com/in/erickalandelima/" target="_blank" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" />
          </IconLink>
          <IconLink href="https://github.com/ealande" target="_blank" aria-label="GitHub">
            <img src={githubIcon} alt="GitHub" />
          </IconLink>
          <IconLink onClick={handleEmailCopy} aria-label="Copy Email">
            <img src={emailIcon} alt="Email" />
          </IconLink>
        </SocialIcons>
      </FooterEnd>
      {emailCopied && <Notification>Email copied to clipboard!</Notification>}

    </>
  );
};

export default Footer;

