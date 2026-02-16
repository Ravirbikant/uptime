import { useState, useMemo } from "react";
import ContributionChart from "./ContributionChart";
import YearSelector from "./YearSelector";
import ActivityOverview from "./ActivityOverview";
import ActivityGraph from "./ActivityGraph";
import { useProfile } from "../context/ProfileContext";
import "./activity.css";

function Activity() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { contributions } = useProfile();
  const totalContributions = useMemo(() => {
    const raw = contributions?.contributions || [];
    return raw
      .filter((d) => d.date.startsWith(String(selectedYear)))
      .reduce((s, d) => s + d.count, 0);
  }, [contributions, selectedYear]);

  return (
    <div className="activity">
      <div className="activity-inner">
        <div className="activity-left">
          <div className="contribution-chart-title">
            {totalContributions.toLocaleString()} contributions in{" "}
            {selectedYear}
          </div>
          <div style={{ border: "1px solid #d0d7dedd", borderRadius: "6px" }}>
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
