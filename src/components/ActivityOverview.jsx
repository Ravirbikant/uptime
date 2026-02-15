import { FiMonitor } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import profileConfig from "../config/profileConfig.json";
import "./activityOverview.css";

export default function ActivityOverview() {
  const { activityOverview } = profileConfig.mockData || {};
  const tags = activityOverview?.tags ?? [
    { label: "@UptimeAI", color: "#a371f7" },
    { label: "@timescale", color: "#7ee787" },
  ];
  const contributedRepos = activityOverview?.contributedRepos ?? [
    "UptimeAI/uptime_webapp",
    "UptimeAI/uptime_server",
    "UptimeAI/uptime_ml",
  ];
  const otherCount = activityOverview?.otherReposCount ?? 13;

  const repoLinks = contributedRepos.map((repo) => (
    <span key={repo}>
      <a href={`https://github.com/${repo}`} className="activity-overview-repo-link">
        {repo}
      </a>
      {", "}
    </span>
  ));

  return (
    <div className="activity-overview-card">
      <div className="activity-overview-tags">
        {tags.map((tag) => (
          <span key={tag.label} className="activity-overview-tag">
            <FaBuilding className="activity-overview-tag-icon" style={{ color: tag.color }} />
            {tag.label}
          </span>
        ))}
      </div>
      <h3 className="activity-overview-title">Activity overview</h3>
      <div className="activity-overview-summary">
        <FiMonitor className="activity-overview-summary-icon" />
        <p className="activity-overview-summary-text">
          Contributed to {repoLinks}
          and {otherCount} other repositories
        </p>
      </div>
    </div>
  );
}
