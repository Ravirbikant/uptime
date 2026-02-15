import "./tabPlaceholder.css";

export default function TabPlaceholder({ title, message }) {
  return (
    <div className="tab-placeholder">
      <h2 className="tab-placeholder-title">{title}</h2>
      <p className="tab-placeholder-message">{message}</p>
    </div>
  );
}
