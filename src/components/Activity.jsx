import "./activity.css";

function Activity() {
  return (
    <div className="activity">
      <div className="activity-inner">
        <div className="activity-left">
          <div className="activity-heatmap" />
          <div className="activity-overview-row">
            <div className="activity-overview" />
            <div className="activity-graph" />
          </div>
        </div>
        <div className="activity-years" />
      </div>
    </div>
  );
}

export default Activity;
