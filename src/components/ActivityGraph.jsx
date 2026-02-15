import Plot from "react-plotly.js";
import profileConfig from "../config/profileConfig.json";
import "./activityGraph.css";

const defaultBreakdown = {
  commits: 83,
  codeReview: 0,
  issues: 0,
  pullRequests: 17,
};

const defaultCategories = ["Commits", "Code review", "Issues", "Pull requests"];

export default function ActivityGraph() {
  const activityData =
    profileConfig.mockData?.activityBreakdown ?? defaultBreakdown;
  const categories =
    profileConfig.texts?.activityOverview?.categories ?? defaultCategories;
  const values = [
    activityData.commits,
    activityData.codeReview,
    activityData.issues,
    activityData.pullRequests,
  ];

  const radarData = [
    {
      type: "scatterpolar",
      r: values,
      theta: categories,
      fill: "toself",
      fillcolor: "rgba(46, 160, 67, 0.2)",
      line: {
        color: "#2ea043",
        width: 2,
      },
      marker: {
        color: "#2ea043",
        size: 6,
      },
      hovertemplate: "<b>%{theta}</b><br>%{r} contributions<extra></extra>",
    },
  ];

  const maxVal = Math.max(...values, 1);
  const rangeMax = maxVal * 1.3;

  return (
    <div className="activity-graph">
      <div className="activity-graph-inner">
        <Plot
          data={radarData}
          layout={{
            width: 300,
            height: 300,
            paper_bgcolor: "#ffffff",
            plot_bgcolor: "#ffffff",
            polar: {
              bgcolor: "#ffffff",
              radialaxis: {
                visible: false,
                range: [0, rangeMax],
                showticklabels: false,
                showline: false,
                showgrid: false,
              },
              angularaxis: {
                tickfont: {
                  size: 11,
                  color: "#656d76",
                  family:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
                },
                gridcolor: "#2ea043",
                gridwidth: 1,
                linecolor: "rgba(0,0,0,0)",
                linewidth: 0,
                rotation: 90,
                showline: false,
              },
            },
            showlegend: false,
            hoverlabel: {
              bgcolor: "#ffffff",
              bordercolor: "#d0d7de",
              font: {
                color: "#1f2328",
                size: 12,
                family:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
              },
            },
          }}
          config={{
            displayModeBar: false,
            staticPlot: false,
          }}
        />
      </div>
    </div>
  );
}
