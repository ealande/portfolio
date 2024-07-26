
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubRepo = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/ealande/repos', {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`
          }
        });
        const reposData = response.data;

        // Fetch languages for each repository
        const reposWithLanguages = await Promise.all(reposData.map(async (repo) => {
          const languagesResponse = await axios.get(repo.languages_url, {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`
            }
          });
          return { ...repo, languages: languagesResponse.data };
        }));

        setRepos(reposWithLanguages);
      } catch (error) {
        setError(error.message);
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
      <h1>My Public Repositories</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
            <p>Stars: {repo.stargazers_count}</p>
            <p>Languages: {Object.keys(repo.languages).join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubRepo;

