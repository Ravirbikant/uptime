import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiPlus, FiSearch } from "react-icons/fi";
import { IoTriangleSharp } from "react-icons/io5";
import { LuSquareMenu } from "react-icons/lu";
import { GoIssueOpened } from "react-icons/go";
import { VscGitPullRequest } from "react-icons/vsc";
import CopilotIcon from "../icons/CopilotIcon.jsx";
import NotificationsIcon from "../icons/NotificationsIcon.jsx";
import { useToast } from "../context/ToastContext";
import { useProfile } from "../context/ProfileContext";
import profileConfig from "../config/profileConfig.json";
import "./top.css";

function Top() {
  const { user } = useProfile();
  const configUser = profileConfig.user || { login: "shreeramk" };
  const username = user.login ?? configUser.login;
  const avatarUrl = user.avatar_url ?? configUser.avatar_url;
  const [showTooltip, setShowTooltip] = useState(null);
  const { showToast } = useToast();

  return (
    <div className="top-bar">
      <div className="top-left">
        <button
          type="button"
          className="top-btn"
          onMouseEnter={() => setShowTooltip("menu")}
          onMouseLeave={() => setShowTooltip(null)}
          onClick={() =>
            showToast("Menu", "On GitHub, this opens the main navigation menu.")
          }
          aria-label="Menu"
        >
          <LuSquareMenu className="top-icon-lg" />
          {showTooltip === "menu" && <span className="top-tooltip">Menu</span>}
        </button>
        <button
          type="button"
          className="top-btn top-logo"
          onMouseEnter={() => setShowTooltip("home")}
          onMouseLeave={() => setShowTooltip(null)}
          onClick={() =>
            showToast("Home", "On GitHub, this goes to the home page.")
          }
          aria-label="Home"
        >
          <AiFillGithub className="top-icon-xl" />
          {showTooltip === "home" && <span className="top-tooltip">Home</span>}
        </button>
        <button
          type="button"
          className="top-username-btn"
          onClick={() =>
            showToast("Profile", "On GitHub, this goes to your profile.")
          }
        >
          {username}
        </button>
      </div>
      <div className="top-right">
        <button
          type="button"
          className="top-search"
          onClick={() =>
            showToast(
              "Search",
              "On GitHub, this focuses the search to find repositories, issues, and more.",
            )
          }
        >
          <FiSearch className="top-icon-sm" />
          <span>Type / to search</span>
        </button>
        <button
          type="button"
          className="top-btn top-btn-split top-btn-copilot"
          onMouseEnter={() => setShowTooltip("copilot")}
          onMouseLeave={() => setShowTooltip(null)}
          onClick={() =>
            showToast("Copilot", "On GitHub, this opens GitHub Copilot.")
          }
          aria-label="Copilot"
        >
          <span className="top-copilot-icon">
            <CopilotIcon />
          </span>
          <IoTriangleSharp className="top-caret" />
          {showTooltip === "copilot" && (
            <span className="top-tooltip top-tooltip-r">Copilot</span>
          )}
        </button>
        <div className="top-sep" />
        <button
          type="button"
          className="top-btn top-btn-split"
          onMouseEnter={() => setShowTooltip("create")}
          onMouseLeave={() => setShowTooltip(null)}
          onClick={() =>
            showToast(
              "Create",
              "On GitHub, this opens the create new repository or organization dropdown.",
            )
          }
          aria-label="Create"
        >
          <FiPlus className="top-icon-sm" />
          <IoTriangleSharp className="top-caret" />
          {showTooltip === "create" && (
            <span className="top-tooltip top-tooltip-r">Create</span>
          )}
        </button>
        <button
          type="button"
          className="top-btn"
          onMouseEnter={() => setShowTooltip("issues")}
          onMouseLeave={() => setShowTooltip(null)}
          onClick={() =>
            showToast("Issues", "On GitHub, this opens your issues.")
          }
          aria-label="Issues"
        >
          <GoIssueOpened className="top-icon-sm" />
          {showTooltip === "issues" && (
            <span className="top-tooltip top-tooltip-r">Issues</span>
          )}
        </button>
        <button
          type="button"
          className="top-btn"
          onMouseEnter={() => setShowTooltip("pullRequests")}
          onMouseLeave={() => setShowTooltip(null)}
          onClick={() =>
            showToast(
              "Pull requests",
              "On GitHub, this opens your pull requests.",
            )
          }
          aria-label="Pull requests"
        >
          <VscGitPullRequest className="top-icon-sm" />
          {showTooltip === "pullRequests" && (
            <span className="top-tooltip top-tooltip-r">Pull requests</span>
          )}
        </button>
        <button
          type="button"
          className="top-btn top-btn-badge"
          onMouseEnter={() => setShowTooltip("notifications")}
          onMouseLeave={() => setShowTooltip(null)}
          onClick={() =>
            showToast(
              "Notifications",
              "On GitHub, this opens your notifications.",
            )
          }
          aria-label="Notifications"
        >
          <NotificationsIcon />
          <span className="top-badge" />
          {showTooltip === "notifications" && (
            <span className="top-tooltip top-tooltip-r">Notifications</span>
          )}
        </button>
        <button
          type="button"
          className="top-btn top-avatar-wrap"
          onMouseEnter={() => setShowTooltip("profile")}
          onMouseLeave={() => setShowTooltip(null)}
          onClick={() =>
            showToast(
              "Profile",
              "On GitHub, this opens your profile and account menu.",
            )
          }
          aria-label="Profile"
        >
          {avatarUrl ? (
            <img src={avatarUrl} alt="" className="top-avatar top-avatar-img" />
          ) : (
            <div className="top-avatar" />
          )}
          {showTooltip === "profile" && (
            <span className="top-tooltip top-tooltip-r">Profile</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default Top;
