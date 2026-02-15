import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiPlus, FiSearch } from "react-icons/fi";
import { IoTriangleSharp } from "react-icons/io5";
import { LuSquareMenu } from "react-icons/lu";
import { GoIssueOpened } from "react-icons/go";
import { VscGitPullRequest } from "react-icons/vsc";
import CopilotIcon from "../icons/CopilotIcon.jsx";
import NotificationsIcon from "../icons/NotificationsIcon.jsx";
import "./Top.css";

const username = "shreeramk";

function Top() {
  const [showTooltip, setShowTooltip] = useState(null);

  return (
    <div className="top-bar">
      <div className="top-left">
        <button
          type="button"
          className="top-btn"
          onMouseEnter={() => setShowTooltip("menu")}
          onMouseLeave={() => setShowTooltip(null)}
          aria-label="Menu"
        >
          <LuSquareMenu className="top-icon-lg" />
          {showTooltip === "menu" && <span className="top-tooltip">Menu</span>}
        </button>
        <a href="#/" className="top-logo">
          <AiFillGithub className="top-icon-xl" />
        </a>
        <span className="top-username">{username}</span>
      </div>
      <div className="top-right">
        <div className="top-search">
          <FiSearch className="top-icon-sm" />
          <span>Type / to search</span>
        </div>
        <button
          type="button"
          className="top-btn top-btn-split top-btn-copilot"
          onMouseEnter={() => setShowTooltip("copilot")}
          onMouseLeave={() => setShowTooltip(null)}
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
          aria-label="Profile"
        >
          <div className="top-avatar" />
          {showTooltip === "profile" && (
            <span className="top-tooltip top-tooltip-r">Profile</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default Top;
