import "./Body.css";
import SidebarProfile from "./SidebarProfile";
import PopularRepositories from "./PopularRepositories";
import Activity from "./Activity";

function Body() {
  return (
    <main className="body-main">
      <div className="body-inner">
        <SidebarProfile />
        <div className="body-content">
          <PopularRepositories />
          <Activity />
        </div>
      </div>
    </main>
  );
}

export default Body;
