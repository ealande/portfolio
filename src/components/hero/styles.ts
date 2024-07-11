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
      a{
        background-color: #007bff;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        }
    a:hover {
    background-color: #0056b3}
   }
    
  h1 {
    position: relative;
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-top: 10rem;
    margin-bottom: 1.5rem;
    background: rgba(0, 0, 0, 0.5);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    z-index: 1;
    
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
    
      h1 {margin-top: 0px;}  
 }
}
`;

export const HeroImage = styled.img`
    padding: 1rem;
    border-radius: 50%;
    object-fit: fit;
    max-height: 25rem;
    border: 3px solid #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)

  @media (max-width: 576px) {
    margin-top: 50px;
    margin-bottom: 0px;
  }
`
