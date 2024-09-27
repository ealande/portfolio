import { ProjectsContainer, ProjectCard, ProjectImage } from './styles';
import { projects } from '../../data/projects';

const FrontProjects = () => {
  return (
    <ProjectsContainer>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <ProjectImage src={project.image} alt={`${project.title} preview`} />
            <h3>{project.title}</h3>
          </a>
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
          </a>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default FrontProjects;

