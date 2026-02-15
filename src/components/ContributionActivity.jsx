import { FiGitCommit, FiGitPullRequest } from "react-icons/fi";
import { GoLock } from "react-icons/go";
import profileConfig from "../config/profileConfig.json";
import "./contributionActivity.css";

export default function ContributionActivity() {
  const currentMonth = new Date().toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  const currentYear = new Date().getFullYear();

  const { texts, mockData } = profileConfig;
  const profileTexts = texts?.profilePage ?? {};
  const title = profileTexts.contributionActivityTitle ?? "Contribution activity";
  const showMore = profileTexts.showMoreActivity ?? "Show more activity";
  const guidePrefix = profileTexts.profileGuidePrefix ?? "Seeing something unexpected? Take a look at the ";
  const guideLink = profileTexts.profileGuide ?? "GitHub profile guide.";
  const privateSuffix = profileTexts.privateRepoSuffix ?? "in private repositories";

  const activity = mockData?.contributionActivity ?? {};
  const commits = activity.commits ?? { count: 0, repoCount: 0 };
  const pullRequests = activity.pullRequests ?? { count: 0, repoCount: 0, repos: [] };
  const privateContributions = activity.privateContributions ?? { count: 0, dateRange: "" };

  return (
    <div className="contribution-activity">
      <div className="contribution-activity-header">
        <h2 className="contribution-activity-title">{title}</h2>
        <span className="contribution-activity-year">{currentYear}</span>
      </div>

      <div className="contribution-activity-body">
        <div className="contribution-activity-month-row">
          <h3 className="contribution-activity-month">{currentMonth}</h3>
          <div className="contribution-activity-month-line" />
        </div>

        <div className="contribution-activity-timeline">
          {commits.repoCount > 0 && (
            <div className="contribution-activity-item">
              <div className="contribution-activity-line" />
              <div className="contribution-activity-icon-wrap contribution-activity-icon-commit">
                <FiGitCommit className="contribution-activity-icon" />
              </div>
              <div className="contribution-activity-content">
                <div className="contribution-activity-row">
                  <span className="contribution-activity-label">
                    Created {commits.count} commits in {commits.repoCount} repositories
                  </span>
                </div>
              </div>
            </div>
          )}

          {pullRequests.repoCount > 0 && (
            <div className="contribution-activity-item">
              <div className="contribution-activity-line" />
              <div className="contribution-activity-icon-wrap contribution-activity-icon-pr">
                <FiGitPullRequest className="contribution-activity-icon" />
              </div>
              <div className="contribution-activity-content">
                <div className="contribution-activity-row">
                  <span className="contribution-activity-label">
                    Opened {pullRequests.count} pull requests in {pullRequests.repoCount} repositories
                  </span>
                </div>
                {pullRequests.repos?.length > 0 && (
                  <ul className="contribution-activity-repos">
                    {pullRequests.repos.map((repo) => (
                      <li key={repo.name} className="contribution-activity-repo">
                        <a href={`https://github.com/${repo.name}`} className="contribution-activity-repo-link">
                          {repo.name}
                        </a>
                        <span className="contribution-activity-badges">
                          {repo.merged > 0 && (
                            <span className="contribution-activity-badge contribution-activity-badge-merged">
                              {repo.merged} merged
                            </span>
                          )}
                          {repo.open > 0 && (
                            <span className="contribution-activity-badge contribution-activity-badge-open">
                              {repo.open} open
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {privateContributions.count > 0 && (
            <div className="contribution-activity-item">
              <div className="contribution-activity-line" />
              <div className="contribution-activity-icon-wrap contribution-activity-icon-private">
                <GoLock className="contribution-activity-icon" />
              </div>
              <div className="contribution-activity-content">
                <div className="contribution-activity-row contribution-activity-row-private">
                  <span className="contribution-activity-label">
                    {privateContributions.count} contributions
                  </span>
                  <span className="contribution-activity-muted"> {privateSuffix}</span>
                  {privateContributions.dateRange && (
                    <span className="contribution-activity-date">{privateContributions.dateRange}</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="contribution-activity-actions">
          <button type="button" className="contribution-activity-show-more">
            {showMore}
          </button>
        </div>

        <p className="contribution-activity-footer">
          {guidePrefix}
          <a href="https://docs.github.com/account-and-profile/setting-up-and-managing-your-github-profile" className="contribution-activity-guide-link">
            {guideLink}
          </a>
        </p>
      </div>
    </div>
  );
}
