import "./Body.css";
import SidebarProfile from "./SidebarProfile";
import PopularRepositories from "./PopularRepositories";
import Activity from "./Activity";
import ContributionActivity from "./ContributionActivity";

function Body() {
  return (
    <main className="body-main">
      <div className="body-inner">
        <SidebarProfile />
        <div className="body-content">
          <PopularRepositories />
          <Activity />
          <ContributionActivity />
        </div>
      </div>
    </main>
  );
}

export default Body;
