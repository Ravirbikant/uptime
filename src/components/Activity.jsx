import { useState } from "react";
import ContributionChart from "./ContributionChart";
import YearSelector from "./YearSelector";
import ActivityOverview from "./ActivityOverview";
import ActivityGraph from "./ActivityGraph";
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
            <div className="activity-overview-half">
              <ActivityOverview />
            </div>
            <div className="activity-row-sep" />
            <div className="activity-graph-half">
              <ActivityGraph />
            </div>
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
