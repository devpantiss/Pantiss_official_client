import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Row2 = () => {
  // Data for each chart
  const sdgData = [
    {
      id: 1,
      title: "Goal 1: No Poverty",
      value: 6203,
      img: "https://reporting.cgiar.org/assets/sdg/1.png",
    },
    {
      id: 2,
      title: "Goal 2: Zero Hunger",
      value: 6698,
      img: "https://reporting.cgiar.org/assets/sdg/2.png",
    },
    {
      id: 3,
      title: "Goal 3: Good Health and Well-Being for People",
      value: 1102,
      img: "https://reporting.cgiar.org/assets/sdg/3.png",
    },
    {
      id: 4,
      title: "Goal 4: Quality Education",
      value: 729,
      img: "https://reporting.cgiar.org/assets/sdg/4.png",
    },
    {
      id: 5,
      title: "Goal 5: Gender Equality",
      value: 5434,
      img: "https://reporting.cgiar.org/assets/sdg/5.png",
    },
    {
      id: 6,
      title: "Goal 6: Clean Water and Sanitation",
      value: 4321,
      img: "https://reporting.cgiar.org/assets/sdg/6.png",
    },
    {
      id: 7,
      title: "Goal 7: Affordable and Clean Energy",
      value: 321,
      img: "https://reporting.cgiar.org/assets/sdg/7.png",
    },
    {
      id: 8,
      title: "Goal 8: Decent Work and Economic Growth",
      value: 321,
      img: "https://reporting.cgiar.org/assets/sdg/8.png",
    },
    {
      id: 9,
      title: "Goal 9: Industry, Innovation, and Infrastructure",
      value: 321,
      img: "https://reporting.cgiar.org/assets/sdg/9.png",
    },
    {
      id: 10,
      title: "Goal 10: Reducing Inequalities",
      value: 321,
      img: "https://reporting.cgiar.org/assets/sdg/10.png",
    },
    {
      id: 11,
      title: "Goal 11: Sustainable Cities and Communities",
      value: 321,
      img: "https://reporting.cgiar.org/assets/sdg/11.png",
    },
    {
      id: 12,
      title: "Goal 12: Responsible Consumption and Production",
      value: 321,
      img: "https://reporting.cgiar.org/assets/sdg/12.png",
    },
    {
      id: 13,
      title: "Goal 13: Climate Action",
      value: 321,
      img: "https://reporting.cgiar.org/assets/sdg/13.png",
    },
    {
      id: 14,
      title: "Goal 14: Life Below Water",
      value: 321,
      img: "https://reporting.cgiar.org/assets/sdg/14.png",
    },
    {
      id: 15,
      title: "Goal 15: Life on Land",
      value: 321,
      img: "https://reporting.cgiar.org/assets/sdg/15.png",
    },
    {
      id: 16,
      title: "Goal 16: Peace, Justice and Strong Institutions",
      value: 321,
      img: "https://reporting.cgiar.org/assets/sdg/16.png",
    },
    {
      id: 17,
      title: "Goal 17: Partnerships for the Goals",
      value: 321,
      img: "https://reporting.cgiar.org/assets/sdg/17.png",
    },
  ];

  const actionAreaData = {
    labels: [
      "System Transformation",
      "Genetic Innovation",
      "Resilient Agrifood Systems",
    ],
    datasets: [
      {
        label: "Stories Count",
        data: [28, 22, 15],
        backgroundColor: "#f97316",
      },
    ],
  };

  const impactAreaData = {
    labels: [
      "Climate Adaptation",
      "Environment, Health, and Biodiversity",
      "Nutrition, Health, and Food",
      "Poverty Reduction",
      "Gender Equality",
    ],
    datasets: [
      {
        label: "Stories Count",
        data: [23, 27, 27, 27, 24],
        backgroundColor: [
          "#10b981",
          "#3b82f6",
          "#facc15",
          "#ef4444",
          "#6366f1",
        ],
      },
    ],
  };

  const resultsByLevelData = {
    labels: ["Initiative Output", "Initiative Outcomes"],
    datasets: [
      {
        label: "Results Count",
        data: [72, 49],
        backgroundColor: ["#3b82f6", "#ef4444"],
      },
    ],
  };

  const maxSDGValue = Math.max(...sdgData.map((sdg) => sdg.value));

  const renderBar = (value, max, color) => {
    const width = (value / max) * 100;
    return (
      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className={`h-2 rounded ${color}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="bg-transparent p-8 rounded-md shadow-md max-w-7xl mx-auto">
      <h2 className="text-4xl border-b-4 text-white border-red-600 font-bold mb-8">
        Key Results Dashboard
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-4 gap-y-6">
        {/* SDG Contributions Section */}
        <div className="bg-transparent ring-2 ring-red-600 shadow-md rounded-lg p-6">
          <h3 className="font-bold text-xl text-white border-b-2 border-red-600 mb-6">
            SDG Contributions
          </h3>
          <div className="h-[650px] overflow-y-auto space-y-4">
            {sdgData.map((sdg) => (
              <div key={sdg.id} className="flex items-center gap-4">
                <img
                  src={sdg.img}
                  alt={sdg.title}
                  className="w-14 h-14 rounded-md shadow-md"
                />
                <div className="flex-1">
                  <div className="text-base font-medium text-white">
                    {sdg.title}
                  </div>
                  {renderBar(sdg.value, maxSDGValue, "bg-green-500")}
                </div>
                <div className="text-base font-semibold text-gray-100">
                  {sdg.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bar Charts Section */}
        <div className="col-span-3 max-h-[700px] p-5 overflow-y-auto space-y-6">
          <div className="bg-transparent ring-1 ring-red-600 shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white border-b-2 border-red-600 mb-4">
              Key Result Stories by Action Area
            </h3>
            <Bar
              data={actionAreaData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
              }}
            />
          </div>

          <div className="bg-transparent ring-1 ring-red-600 shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white border-b-2 border-red-600 mb-4">
              Key Result Stories by Impact Area
            </h3>
            <Bar
              data={impactAreaData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
              }}
            />
          </div>

          <div className="bg-transparent ring-1 ring-red-600 shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white border-b-2 border-red-600 mb-4">
              Results by Level
            </h3>
            <Bar
              data={resultsByLevelData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row2;
