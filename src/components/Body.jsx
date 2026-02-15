import "./Body.css";
import SidebarProfile from "./SidebarProfile";

function Body() {
  return (
    <main className="body-main">
      <div className="body-inner">
        <SidebarProfile />
        <div className="body-content" />
      </div>
    </main>
  );
}

export default Body;
