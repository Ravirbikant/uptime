import { useState } from "react";
import { GoBook, GoRepo, GoProject, GoPackage, GoStar } from "react-icons/go";
import "./ProfileTabs.css";

const tabs = [
  { id: "overview", name: "Overview", icon: GoBook },
  { id: "repositories", name: "Repositories", icon: GoRepo, count: 31 },
  { id: "projects", name: "Projects", icon: GoProject },
  { id: "packages", name: "Packages", icon: GoPackage },
  { id: "stars", name: "Stars", icon: GoStar, count: 6 },
];

function ProfileTabs() {
  const [activeId, setActiveId] = useState("overview");

  return (
    <nav className="profile-tabs">
      <div className="profile-tabs-inner">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeId === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              className={`profile-tab ${isActive ? "profile-tab-active" : ""}`}
              onClick={() => setActiveId(tab.id)}
            >
              <Icon size={16} className="profile-tab-icon" />
              <span>{tab.name}</span>
              {tab.count !== undefined && (
                <span className="profile-tab-count">{tab.count}</span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default ProfileTabs;
