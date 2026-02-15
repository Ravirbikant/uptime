import profileConfig from "../config/profileConfig.json";
import RepoIcon from "../icons/RepoIcon";
import ForkIcon from "../icons/ForkIcon";
import "./popularRepositories.css";

function PopularRepositories() {
  const {
    user,
    texts: { popularRepositories: repoTexts },
    mockData,
  } = profileConfig;
  const repositories = mockData.popularRepositories;

  return (
    <div className="popular-repos">
      <h2 className="popular-repos-title">{repoTexts.title}</h2>
      <div className="popular-repos-grid">
        {repositories.map((repo) => (
          <div key={repo.name} className="popular-repos-card">
            <div className="popular-repos-card-header">
              <div className="popular-repos-card-title-wrap">
                <RepoIcon className="popular-repos-icon" />
                <a
                  href={`https://github.com/${user.login}/${repo.name}`}
                  className="popular-repos-link"
                >
                  {repo.name}
                </a>
              </div>
              <span className="popular-repos-badge">
                {repo.isPublic ? repoTexts.publicLabel : repoTexts.privateLabel}
              </span>
            </div>
            {repo.isFork && repo.forkedFrom && (
              <div className="popular-repos-fork">
                <ForkIcon />
                <span>
                  {repoTexts.forkedFrom}{" "}
                  <a
                    href={`https://github.com/${repo.forkedFrom}`}
                    className="popular-repos-link"
                  >
                    {repo.forkedFrom}
                  </a>
                </span>
              </div>
            )}
            {repo.description && (
              <p className="popular-repos-desc">{repo.description}</p>
            )}
            {repo.language && (
              <div className="popular-repos-meta">
                <span
                  className="popular-repos-lang-dot"
                  style={{ backgroundColor: repo.languageColor }}
                />
                <span>{repo.language}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularRepositories;
