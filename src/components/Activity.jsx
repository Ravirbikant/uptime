import { useState } from "react";
import ContributionChart from "./ContributionChart";
import YearSelector from "./YearSelector";
import "./activity.css";

function Activity() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  return (
    <div className="activity">
      <div className="activity-inner">
        <div className="activity-left">
          <div className="activity-heatmap">
            <ContributionChart selectedYear={selectedYear} />
          </div>
          <div className="activity-overview-row">
            <div className="activity-overview" />
            <div className="activity-graph" />
          </div>
        </div>
        <div className="activity-years">
          <YearSelector
            selectedYear={selectedYear}
            onSelect={setSelectedYear}
          />
        </div>
      </div>
    </div>
  );
}

export default Activity;
