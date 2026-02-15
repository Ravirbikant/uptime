import { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import profileConfig from "../config/profileConfig.json";
import { useProfile } from "../context/ProfileContext";
import "./contributionChart.css";

interface IContributionChartProps {
  selectedYear?: number;
}

const LEGEND_COLORS = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

export default function ContributionChart({
  selectedYear: propSelectedYear,
}: IContributionChartProps) {
  const { contributions } = useProfile();
  const contributionTexts = (
    profileConfig as {
      texts: {
        contributions: { learnHow: string; less: string; more: string };
      };
    }
  ).texts.contributions;
  const currentYear = new Date().getFullYear();
  const selectedYear = propSelectedYear ?? currentYear;

  const { heatmapData, totalContributions } = useMemo(() => {
    const raw = (contributions?.contributions || []) as {
      date: string;
      count: number;
    }[];
    const dataMap = new Map<string, number>();
    let total = 0;
    raw.forEach((d) => {
      dataMap.set(d.date, d.count);
      if (d.date.startsWith(String(selectedYear))) total += d.count;
    });

    const start = new Date(selectedYear, 0, 1);
    const end = new Date(selectedYear, 11, 31);
    const data: [string, number][] = [];
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split("T")[0];
      data.push([dateStr, dataMap.get(dateStr) ?? 0]);
    }
    return { heatmapData: data, totalContributions: total };
  }, [contributions, selectedYear]);

  const option = useMemo(
    () => ({
      backgroundColor: "transparent",
      tooltip: {
        formatter: (params: { data: [string, number] }) => {
          const [date, count] = params.data;
          if (count === 0) return `No contributions on ${date}`;
          if (count === 1) return `1 contribution on ${date}`;
          return `${count} contributions on ${date}`;
        },
        backgroundColor: "#161b22",
        borderColor: "#30363d",
        textStyle: { color: "#e6edf3" },
      },
      calendar: {
        range: [`${selectedYear}-01-01`, `${selectedYear}-12-31`],
        cellSize: [10, 10],
        cellGap: 0,
        top: 40,
        left: 30,
        right: 10,
        bottom: 10,
        itemStyle: { color: "#161b22", borderWidth: 0, borderRadius: 2 },
        yearLabel: { show: false },
        monthLabel: {
          color: "#e6edf3",
          fontSize: 10,
          nameMap: "en",
        },
        dayLabel: {
          color: "#7d8590",
          fontSize: 9,
          firstDay: 1,
          nameMap: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          margin: 4,
        },
        splitLine: { show: false },
      },
      visualMap: {
        show: false,
        type: "piecewise",
        dimension: 1,
        pieces: [
          { min: 0, max: 0, color: "#161b22" },
          { min: 1, max: 3, color: "#0e4429" },
          { min: 4, max: 6, color: "#006d32" },
          { min: 7, max: 9, color: "#26a641" },
          { min: 10, max: 99999, color: "#39d353" },
        ],
      },
      series: [
        {
          type: "heatmap",
          coordinateSystem: "calendar",
          data: heatmapData,
          itemStyle: { borderRadius: 2 },
        },
      ],
    }),
    [heatmapData, selectedYear],
  );

  return (
    <div className="contribution-chart">
      <div className="contribution-chart-title">
        {totalContributions.toLocaleString()} contributions in {selectedYear}
      </div>
      <div className="contribution-chart-graph">
        <ReactECharts
          echarts={echarts}
          option={option}
          style={{ height: 140, width: "100%" }}
          opts={{ renderer: "canvas" }}
        />
      </div>
      <div className="contribution-chart-footer">
        <a href="#" className="contribution-chart-link">
          {contributionTexts.learnHow}
        </a>
        <div className="contribution-chart-legend">
          <span>{contributionTexts.less}</span>
          <div className="contribution-chart-legend-squares">
            {LEGEND_COLORS.map((c: string) => (
              <div
                key={c}
                className="contribution-chart-legend-sq"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          <span>{contributionTexts.more}</span>
        </div>
      </div>
    </div>
  );
}
