import React from "react";

const Row2 = () => {
  const sdgData = [
    { id: 1, title: "Goal 1: No Poverty", value: 6203, img: "https://reporting.cgiar.org/assets/sdg/1.png" },
    { id: 2, title: "Goal 2: Zero Hunger", value: 6698, img: "https://reporting.cgiar.org/assets/sdg/2.png" },
    { id: 3, title: "Goal 3: Good Health and Well-Being for People", value: 1102, img: "https://reporting.cgiar.org/assets/sdg/3.png" },
    { id: 4, title: "Goal 4: Quality Education", value: 729, img: "https://reporting.cgiar.org/assets/sdg/4.png" },
    { id: 5, title: "Goal 5: Gender Equality", value: 5434, img: "https://reporting.cgiar.org/assets/sdg/5.png" },
    { id: 6, title: "Goal 6: Clean Water and Sanitation", value: 4321, img: "https://reporting.cgiar.org/assets/sdg/6.png" },
    { id: 7, title: "Goal 7: Affordable and Clean Energy", value: 321, img: "https://reporting.cgiar.org/assets/sdg/7.png" },
    { id: 8, title: "Goal 8: Decent Work and Economic Growth", value: 321, img: "https://reporting.cgiar.org/assets/sdg/8.png" },
    { id: 9, title: "Goal 9: Industry, Innovation, and Infrastructure", value: 321, img: "https://reporting.cgiar.org/assets/sdg/9.png" },
    { id: 10, title: "Goal 10: Reducing Inequalities", value: 321, img: "https://reporting.cgiar.org/assets/sdg/10.png" },
  ];

  const actionAreaData = [
    { title: "Systems Transformation", value: 4117, img: "https://reporting.cgiar.org/assets/action_areas/1.png" },
    { title: "Genetic Innovation", value: 3185, img: "https://reporting.cgiar.org/assets/action_areas/3.png" },
    { title: "Resilient Agrifood Systems", value: 1592, img: "https://reporting.cgiar.org/assets/action_areas/2.png" },
  ];

  const impactAreaData = [
    { title: "Nutrition, Health and Food Security", value: 4176, img: "https://reporting.cgiar.org/assets/impact_areas/1.png" },
    { title: "Climate Adaptation and Mitigation", value: 4097, img: "https://reporting.cgiar.org/assets/impact_areas/4.png" },
    { title: "Poverty Reduction, Livelihoods and Jobs", value: 3855, img: "https://reporting.cgiar.org/assets/impact_areas/2.png" },
    { title: "Environmental Health and Biodiversity", value: 3855, img: "https://reporting.cgiar.org/assets/impact_areas/5.png" },
    { title: "Gender Equality, Youth and Social Inclusion", value: 3855, img: "https://reporting.cgiar.org/assets/impact_areas/3.png" },
  ];

  const reportingUnitData = [
    { title: "Resilient Agrifood Systems", value: 3721 },
    { title: "Systems Transformation", value: 3441 },
    { title: "Regional Integrated Initiatives", value: 2431 },
    { title: "Genetic Innovation Initiatives", value: 1841 },
    { title: "Impact Area Platforms", value: 403 },
    { title: "Science Group Projects", value: 199 },
  ];

  const renderBar = (value, maxValue, color) => {
    const widthPercent = `${(value / maxValue) * 100}%`;
    return (
      <div className="relative bg-gray-200 h-4 w-full rounded-md">
        <div
          className={`absolute top-0 left-0 h-full ${color} rounded-md`}
          style={{ width: widthPercent }}
        ></div>
      </div>
    );
  };

  const maxSDGValue = Math.max(...sdgData.map((d) => d.value));
  const maxActionAreaValue = Math.max(...actionAreaData.map((d) => d.value));
  const maxImpactAreaValue = Math.max(...impactAreaData.map((d) => d.value));
  const maxReportingUnitValue = Math.max(...reportingUnitData.map((d) => d.value));

  return (
    <div className="p-6 bg-gray-100 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* SDG Contributions */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="font-bold text-lg mb-4">SDG Contributions</h3>
        <div className="max-h-[450px] overflow-y-auto space-y-4">
          {sdgData.map((sdg) => (
            <div key={sdg.id} className="flex items-center gap-4">
              <img src={sdg.img} alt={sdg.title} className="w-12 h-12" />
              <div className="flex-1">
                <div className="text-sm font-medium">{sdg.title}</div>
                {renderBar(sdg.value, maxSDGValue, "bg-green-500")}
              </div>
              <div className="text-sm font-semibold">{sdg.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Area Contributions */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="font-bold text-lg mb-4">Action Area Contributions</h3>
        {actionAreaData.map((area) => (
          <div key={area.title} className="flex items-center gap-4 mb-4">
            <img src={area.img} alt={area.title} className="w-12 h-12" />
            <div className="flex-1">
              <div className="text-sm font-medium">{area.title}</div>
              {renderBar(area.value, maxActionAreaValue, "bg-yellow-500")}
            </div>
            <div className="text-sm font-semibold">{area.value}</div>
          </div>
        ))}
      </div>

      {/* Impact Area Contributions */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="font-bold text-lg mb-4">Impact Area Contributions</h3>
        {impactAreaData.map((impact) => (
          <div key={impact.title} className="flex items-center gap-4 mb-4">
            <img src={impact.img} alt={impact.title} className="w-12 h-12" />
            <div className="flex-1">
              <div className="text-sm font-medium">{impact.title}</div>
              {renderBar(impact.value, maxImpactAreaValue, "bg-blue-500")}
            </div>
            <div className="text-sm font-semibold">{impact.value}</div>
          </div>
        ))}
      </div>

      {/* Reporting Unit Contributions */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="font-bold text-lg mb-4">Number of Results by Reporting Unit</h3>
        {reportingUnitData.map((unit) => (
          <div key={unit.title} className="mb-4">
            <div className="text-sm font-medium">{unit.title}</div>
            {renderBar(unit.value, maxReportingUnitValue, "bg-yellow-400")}
            <div className="text-sm font-semibold text-right">{unit.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row2;
