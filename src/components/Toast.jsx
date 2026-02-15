import { useEffect } from "react";
import { GoInfo, GoX } from "react-icons/go";
import "./toast.css";

export default function Toast({ title, message, onClose, duration = 5000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="toast" role="alert">
      <div className="toast-card">
        <div className="toast-content">
          <div className="toast-icon-wrap">
            <GoInfo className="toast-icon" />
          </div>
          <div className="toast-body">
            <div className="toast-header">
              <h3 className="toast-title">{title}</h3>
              <button
                type="button"
                onClick={onClose}
                className="toast-close"
                aria-label="Close"
              >
                <GoX className="toast-close-svg" />
              </button>
            </div>
            <p className="toast-message">{message}</p>
          </div>
        </div>
        <div className="toast-progress-track">
          <div
            className="toast-progress-bar"
            style={{ animationDuration: `${duration}ms` }}
          />
        </div>
      </div>
    </div>
  );
}
