import "./navbar.css";
import Top from "./Top";
import ProfileTabs from "./ProfileTabs";

function Navbar({ activeTabId, onTabChange }) {
  return (
    <header className="navbar-header">
      <Top />
      <ProfileTabs activeId={activeTabId} onSelect={onTabChange} />
    </header>
  );
}

export default Navbar;
