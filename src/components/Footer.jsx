import { FaGithub } from "react-icons/fa";
import "./footer.css";

const FOOTER_LINKS = [
  "Terms",
  "Privacy",
  "Security",
  "Status",
  "Community",
  "Docs",
  "Contact",
  "Manage cookies",
  "Do not share my personal information",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <FaGithub className="footer-logo" />
          <span className="footer-copyright">© {year} GitHub, Inc.</span>
        </div>
        <nav className="footer-links">
          {FOOTER_LINKS.map((label) => (
            <a key={label} href="#" className="footer-link">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
