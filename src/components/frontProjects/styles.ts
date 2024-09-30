import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1800"

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const ProjectCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  width: calc(33.333% - 20px); /* 3 cards per row */
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  @media (max-width: 1024px) {
    width: calc(50% - 20px); /* 2 cards per row on medium screens */
  }

  @media (max-width: 768px) {
    width: 100%; /* 1 card per row on small screens */
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: justify;
  }

  a {
    color: #6CD3A1;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    text-align: justify;

    &:hover {
      text-decoration: underline;
      color:#78D5A3
  }  

}
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const FrontProjectLink = styled.a`

`;

