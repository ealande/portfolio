import styled from "styled-components";


export const HeroSection = styled.section`
  background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),
    url(../../../public/hero.jpg);
  background-position: center, bottom left;
  background-size: cover, cover;
  height: fit-content;
  color: #fafafc;
  padding: 15rem 3rem 6rem;
  .heroInner {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
   }
  h1 {
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
    background: rgba(0, 0, 0, 0.5);

  }
  @media (max-width: 576px) {
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url(../../../public/hero.jpg);
    background-position: center, bottom left;
    background-size: cover, cover;
    align-items: flex-start;
    padding-top: 7.5rem;
    height: 75vh;
    max-height: 720px;
    
    .heroInner {
    display: block;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
   }
  }
`;

export const HeroImage = styled.img`
    padding: 1rem;
    border-radius: 50%;
    object-fit: fit;
    max-height: 25rem;

  @media (max-width: 576px) {
    margin-top: 50px;
    margin-bottom: 0px;
  }
`
