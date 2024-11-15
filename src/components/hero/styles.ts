import styled from "styled-components";
import heroImage from '../../assets/hero.jpg';

export const HeroSection = styled.section`
  background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),
    url(${heroImage});
  background-position: center, bottom left;
  background-size: cover;
  height: 100vh;
  color: #fafafc;
  padding: 15rem 3rem 6rem;

  .heroInner {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
      a{
        background-color: #6CD3A1;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        }
    a:hover {
    background-color: #A4F9C8}
   }
    
  h1 {
    position: relative;
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-top: 1rem;
    background: rgba(0, 0, 0, 0.5);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    z-index: 1;
    
  }

  h2  {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 900px) {
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url(${heroImage});;
    background-position: center, bottom;
    background-size: cover;
    align-items: flex-start;
    padding-top: 7.5rem;
    height: 100vh;
    max-height: 720px; 
    padding: 5rem 3rem 6rem;

    .heroInner {
    display: block;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    
      h1 {
        margin-top: 0px;
        }  
 }
}
`;

export const HeroImage = styled.img`
    padding: 1rem;
    border-radius: 50%;
    object-fit: fit;
    max-height: 30rem;
    border: 3px solid #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)
    max-width: 100%;

  @media (max-width: 576px) {
    max-height: 15rem;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`
