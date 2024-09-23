import styled from "styled-components";

export const HeroSection = styled.section`
  background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),
    url(/hero.jpg);
  background-position: center, center;
  background-size: cover;
  height: 100vh;  // Full screen height for large screens
  color: #fafafc;
  padding: 10rem 3rem 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .heroInner {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    
    a {
      background-color: #6cd3a1;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    a:hover {
      background-color: #a4f9c8;
    }
  }

  h1 {
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-top: 1rem;
    background: rgba(0, 0, 0, 0.5);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    text-align: center;
    z-index: 1;
  }

  h2 {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  @media (max-width: 900px) {
    padding-top: 5rem;
    height: auto;
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url(/hero.jpg);
    background-position: center;
    background-size: cover;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    padding-top: 3rem;
    height: auto;
  }
`;



export const HeroImage = styled.img`
  padding: 1rem;
  border-radius: 50%;
  object-fit: cover;
  max-height: 25rem;
  max-width: 100%; // Ensures responsiveness
  border: 3px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  display: block;

  @media (max-width: 576px) {
    margin-top: 2rem;
    max-height: 15rem;
    padding: 0.5rem;
  }

  @media (max-width: 768px) {

    margin-top: 2rem;
    max-height: 20rem;
    padding: 1rem;
  }
`;

