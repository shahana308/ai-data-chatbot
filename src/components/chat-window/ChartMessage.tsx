"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Bar,
  Scatter,
  Line,
  Doughnut,
  Pie,
  Radar,
  PolarArea,
  Bubble,
} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
  data: { x: string | number; y: number; r?: number }[];
  chartType?:
    | "bar"
    | "scatter"
    | "line"
    | "doughnut"
    | "pie"
    | "radar"
    | "polarArea"
    | "bubble";
}

interface ChartMessageProps {
  chartData: ChartData;
}

const ChartMessage: React.FC<ChartMessageProps> = ({ chartData }) => {
  const { chartType = "bar" } = chartData;

  const isXYChart = ["bar", "line", "scatter"].includes(chartType);

  const commonOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
    ...(isXYChart && {
      scales: {
        x: {
          title: {
            display: true,
            text: chartData.xAxisLabel,
          },
        },
        y: {
          title: {
            display: true,
            text: chartData.yAxisLabel,
          },
        },
      },
    }),
  };

  const chartProps = {
    height: 600,
    width: 800,
    options: commonOptions,
  };

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <Bar
            {...chartProps}
            data={{
              labels: chartData.data.map((d) => String(d.x)),
              datasets: [
                {
                  label: chartData.yAxisLabel,
                  data: chartData.data.map((d) => d.y),
                  backgroundColor: "rgba(75,192,192,0.6)",
                  borderColor: "rgba(75,192,192,1)",
                  borderWidth: 1,
                },
              ],
            }}
          />
        );
      case "scatter":
        return (
          <Scatter
            {...chartProps}
            data={{
              datasets: [
                {
                  label: `${chartData.yAxisLabel} vs ${chartData.xAxisLabel}`,
                  data: chartData.data,
                  backgroundColor: "rgba(153,102,255,0.6)",
                  borderColor: "rgba(153,102,255,1)",
                },
              ],
            }}
          />
        );
      case "line":
        return (
          <Line
            {...chartProps}
            data={{
              labels: chartData.data.map((d) => String(d.x)),
              datasets: [
                {
                  label: chartData.yAxisLabel,
                  data: chartData.data.map((d) => d.y),
                  fill: false,
                  borderColor: "#36A2EB",
                  tension: 0.4,
                },
              ],
            }}
          />
        );
      case "doughnut":
        return (
          <Doughnut
            {...chartProps}
            data={{
              labels: chartData.data.map((d) => String(d.x)),
              datasets: [
                {
                  label: chartData.yAxisLabel,
                  data: chartData.data.map((d) => d.y),
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
                },
              ],
            }}
          />
        );
      case "pie":
        return (
          <Pie
            {...chartProps}
            data={{
              labels: chartData.data.map((d) => String(d.x)),
              datasets: [
                {
                  label: chartData.yAxisLabel,
                  data: chartData.data.map((d) => d.y),
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
                },
              ],
            }}
          />
        );
      case "radar":
        return (
          <Radar
            data={{
              labels: chartData.data.map((d) => String(d.x)),
              datasets: [
                {
                  label: chartData.yAxisLabel,
                  data: chartData.data.map((d) => d.y),
                  backgroundColor: "rgba(54, 162, 235, 0.2)",
                  borderColor: "rgba(54, 162, 235, 1)",
                },
              ],
            }}
          />
        );
      case "polarArea":
        return (
          <PolarArea
            data={{
              labels: chartData.data.map((d) => String(d.x)),
              datasets: [
                {
                  label: chartData.yAxisLabel,
                  data: chartData.data.map((d) => d.y),
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
                },
              ],
            }}
          />
        );
      case "bubble":
        return (
          <Bubble
            {...chartProps}
            data={{
              datasets: [
                {
                  label: chartData.yAxisLabel,
                  data: chartData.data,
                  backgroundColor: "rgba(255,99,132,0.5)",
                },
              ],
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full my-2">
      <h3 className="text-md font-semibold mb-2">{chartData.title}</h3>
      {renderChart()}
    </div>
  );
};

export default ChartMessage;
