
import { ProjectsContainer, ProjectCard, ProjectImage } from './styles';
import deitoGif from '../../assets/deito.gif';
import efoodGif from '../../assets/efood.gif';

const updatedProjects = [
  {
    id: 1,
    title: 'Deito E-commerce',
    description: 'An e-commerce platform built with MedusaJS for the Deito brand, scheduled to be deployed to its official domain soon.',
    url: 'http://medusajs-frontend-production-f800.up.railway.app',
    image: deitoGif,
  },
  {
    id: 2,
    title: 'Food App',
    description: 'A client-accessible website developed as a final project for the EBAC Front-end course. It integrates ReactJS and several modern technologies to simulate payment processes, handle API requests, and provide essential functionalities such as a shopping cart and individual restaurant pages.',
    url: 'https://loja-ebac-nine.vercel.app/',
    image: efoodGif,
  },
];

const FrontProjects = () => {
  return (
    <ProjectsContainer data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1400">
      {updatedProjects.map((project) => (
        <ProjectCard key={project.id}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <ProjectImage src={project.image} alt={`${project.title} preview`} />
            <h3>{project.title}</h3>
          </a>
          <p>{project.description}</p>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default FrontProjects;

