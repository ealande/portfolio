import styled from "styled-components";

export const FooterEnd = styled.footer`
  background: #6CD3A1;
  padding: 20px 0;
  text-align: center;
  p {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', Open-Sans, Helvetica, Sans-Serif;
  }

`;

export const SocialIcons = styled.div`
  margin-top: 10px;
`;

export const IconLink = styled.a`
  margin: 0 10px;
  display: inline-block;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.2);
  }

 
`;

export const Notification = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-size: 14px;
  animation: fadeInOut 3s ease-in-out;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
    10% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    90% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
  }`
