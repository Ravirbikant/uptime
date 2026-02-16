import { GoPeople } from "react-icons/go";
import {
  VscOrganization,
  VscLocation,
  VscMail,
  VscLink,
  VscTwitter,
} from "react-icons/vsc";
import { useProfile } from "../context/ProfileContext";
import "./sidebarProfile.css";

function SidebarProfile() {
  const { user } = useProfile();
  const name = user.name ?? user.login;
  const followers = user.followers ?? 0;
  const following = user.following ?? 0;

  return (
    <aside className="sidebar-profile">
      <div className="sidebar-profile-sticky">
        <div className="sidebar-avatar-wrap">
          {user.avatar_url ? (
            <img src={user.avatar_url} alt="" className="sidebar-avatar" />
          ) : (
            <div className="sidebar-avatar" />
          )}
        </div>
        <h1 className="sidebar-name">{name}</h1>
        <p className="sidebar-login">{user.login}</p>
        <button type="button" className="sidebar-edit-btn">
          Edit profile
        </button>
        {user.bio && <p className="sidebar-bio">{user.bio}</p>}
        <div className="sidebar-follow">
          <GoPeople size={16} className="sidebar-icon" />
          <a href="#">
            <strong>{followers}</strong> followers
          </a>
          <span className="sidebar-dot">·</span>
          <a href="#">
            <strong>{following}</strong> following
          </a>
        </div>
        <div className="sidebar-details">
          {user.company && (
            <div className="sidebar-row">
              <VscOrganization size={16} className="sidebar-icon" />
              <span>{user.company}</span>
            </div>
          )}
          {user.location && (
            <div className="sidebar-row">
              <VscLocation size={16} className="sidebar-icon" />
              <span>{user.location}</span>
            </div>
          )}
          {user.email && (
            <div className="sidebar-row">
              <VscMail size={16} className="sidebar-icon" />
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
          )}
          {user.blog && (
            <div className="sidebar-row">
              <VscLink size={16} className="sidebar-icon" />
              <a
                href={
                  user.blog.startsWith("http")
                    ? user.blog
                    : `https://${user.blog}`
                }
              >
                {user.blog}
              </a>
            </div>
          )}
          {user.twitter_username && (
            <div className="sidebar-row">
              <VscTwitter size={16} className="sidebar-icon" />
              <a href={`https://twitter.com/${user.twitter_username}`}>
                @{user.twitter_username}
              </a>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default SidebarProfile;
