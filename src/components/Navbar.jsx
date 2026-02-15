import "./navbar.css";
import Top from "./Top";
import ProfileTabs from "./ProfileTabs";

function Navbar() {
  return (
    <header className="navbar-header">
      <Top />
      <ProfileTabs />
    </header>
  );
}

export default Navbar;
