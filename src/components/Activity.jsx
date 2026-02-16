import { useState, useMemo } from "react";
import { IoChevronDown } from "react-icons/io5";
import ContributionChart from "./ContributionChart";
import YearSelector from "./YearSelector";
import ActivityOverview from "./ActivityOverview";
import ActivityGraph from "./ActivityGraph";
import { useProfile } from "../context/ProfileContext";
import { useToast } from "../context/ToastContext";
import "./activity.css";

function Activity() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { showToast } = useToast();
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
          <div className="contribution-chart-header">
            <div className="contribution-chart-title">
              {totalContributions.toLocaleString()} contributions in{" "}
              {selectedYear}
            </div>
            <button
              type="button"
              className="contribution-settings-btn"
              onClick={() => showToast("Contribution settings", "On GitHub, this opens contribution settings and privacy options for your profile.")}
            >
              Contribution settings
              <IoChevronDown className="contribution-settings-chevron" />
            </button>
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
