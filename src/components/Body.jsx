import "./Body.css";
import SidebarProfile from "./SidebarProfile";
import PopularRepositories from "./PopularRepositories";
import Activity from "./Activity";
import ContributionActivity from "./ContributionActivity";
import TabPlaceholder from "./TabPlaceholder";

const TAB_PLACEHOLDERS = {
  repositories: { title: "Repositories", message: "This is a placeholder for the Repositories tab. On GitHub, this shows your public repositories." },
  projects: { title: "Projects", message: "This is a placeholder for the Projects tab. On GitHub, this shows your projects." },
  packages: { title: "Packages", message: "This is a placeholder for the Packages tab. On GitHub, this shows your packages." },
  stars: { title: "Stars", message: "This is a placeholder for the Stars tab. On GitHub, this shows repositories you have starred." },
};

function Body({ activeTabId = "overview" }) {
  const placeholder = TAB_PLACEHOLDERS[activeTabId];

  return (
    <main className="body-main">
      <div className="body-inner">
        {activeTabId === "overview" && <SidebarProfile />}
        <div className="body-content">
          {activeTabId === "overview" ? (
            <>
              <PopularRepositories />
              <Activity />
              <ContributionActivity />
            </>
          ) : placeholder ? (
            <TabPlaceholder title={placeholder.title} message={placeholder.message} />
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default Body;
