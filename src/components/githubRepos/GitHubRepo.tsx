import { useState, useEffect } from 'react';
import axios from 'axios';
import { GitImg, Languages, ProjectLink, RepoBox, RepoContainer } from './styles';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  languages_url: string;
  languages?: Record<string, any>;
}

const GitHubRepo: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
  const paddingZero = {
    padding: "0 0 0 0"
  }

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get<Repo[]>('https://api.github.com/users/ealande/repos', {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        });
        const reposData = response.data;

        const reposWithLanguages = await Promise.all(reposData.map(async (repo) => {
          const languagesResponse = await axios.get<Record<string, any>>(repo.languages_url, {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
            },
          });
          return { ...repo, languages: languagesResponse.data };
        }));

        setRepos(reposWithLanguages);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [GITHUB_TOKEN]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <RepoContainer
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1800"
        style={paddingZero}>
        {repos.map(repo => (
          <RepoBox key={repo.id}>
            <GitImg src="/github-svgrepo-com.svg" />
            <ProjectLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </ProjectLink>
            <p>{repo.description}</p>
            <Languages>Languages: {repo.languages ? Object.keys(repo.languages).join(', ') : 'N/A'}</Languages>
          </RepoBox>
        ))}
      </RepoContainer>
    </div>
  );
};

export default GitHubRepo;

