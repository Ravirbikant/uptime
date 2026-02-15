import "./Body.css";
import SidebarProfile from "./SidebarProfile";
import PopularRepositories from "./PopularRepositories";

function Body() {
  return (
    <main className="body-main">
      <div className="body-inner">
        <SidebarProfile />
        <div className="body-content">
          <PopularRepositories />
        </div>
      </div>
    </main>
  );
}

export default Body;
