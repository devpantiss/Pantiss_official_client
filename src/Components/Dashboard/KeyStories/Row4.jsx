import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Row4 = () => {
  const data = [
    {
      tag: "Gender equality tag",
      chartData: [3113, 1139, 6568],
      chartLabels: ["Significant (1)", "Principal (2)", "Not targeted (0)"],
      backgroundColors: ["#fde68a", "#fbbf24", "#d1d5db"], // Custom colors
    },
    {
      tag: "Climate change tag",
      chartData: [1896, 4602, 4322],
      chartLabels: ["Significant (1)", "Principal (2)", "Not targeted (0)"],
      backgroundColors: ["#bbf7d0", "#34d399", "#6b7280"], // Custom colors
    },
    {
      tag: "Nutrition tag",
      chartData: [659, 2971, 3913],
      chartLabels: ["Significant (1)", "Principal (2)", "Not targeted (0)"],
      backgroundColors: ["#a5b4fc", "#6366f1", "#9ca3af"], // Custom colors
    },
    {
      tag: "Environment/biodiversity tag",
      chartData: [3702, 2971, 3640],
      chartLabels: ["Significant (1)", "Principal (2)", "Not targeted (0)"],
      backgroundColors: ["#fda4af", "#fb7185", "#e5e7eb"], // Custom colors
    },
    {
      tag: "Poverty reduction tag",
      chartData: [431, 3164, 4248],
      chartLabels: ["Significant (1)", "Principal (2)", "Not targeted (0)"],
      backgroundColors: ["#fcd34d", "#f59e0b", "#d1d5db"], // Custom colors
    },
  ];

  return (
    <div className="p-6 bg-black text-white">
      <h2 className="text-xl font-bold border-b-2 border-red-600 mb-4">Impact Area Tags</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-transparent ring-2 ring-red-600 shadow rounded p-4 h-64 flex flex-col justify-between"
          >
            <h3 className="text-sm font-bold mb-2 text-center">{item.tag}</h3>
            <div className="h-36">
              <Doughnut
                data={{
                  labels: item.chartLabels,
                  datasets: [
                    {
                      data: item.chartData,
                      backgroundColor: item.backgroundColors,
                      cutout: "50%", // Makes it a donut chart
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: { display: false },
                  },
                  maintainAspectRatio: false,
                }}
              />
            </div>
            <div className="text-center mt-2">
              <span className="text-sm text-white">(0) Not targeted</span>
              <span className="text-sm text-white ml-2">(1) Significant</span>
              <span className="text-sm text-white ml-2">(2) Principal</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row4;
