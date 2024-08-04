import styled from "styled-components";

export const RepoBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 256px;
  
  &:hover{
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const GitImg = styled.img`
  width: 40px;
  margin-right: 22px;
`;

export const RepoContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1000px) {
    display: block;
}
`;

export const Languages = styled.p`
  font-size: 14px;
  color: #555555;
  margin-top: 8px;
`;

export const ProjectLink = styled.a`
  color: #1a73e8;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  text-align: justify;

  &:hover {
    text-decoration: underline;
  }
`;
