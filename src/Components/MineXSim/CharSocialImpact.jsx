import React, { useState } from "react";

const CharSocialImpact = () => {
  const [activeTab, setActiveTab] = useState("Evaluative Culture");

  const tabs = [
    {
      name: "Evaluative Culture",
      content: (
        <>
          <p>
            An organisation that has cultivated an evaluative culture emphasizes
            values of transparency, accountability, and continuous improvement.
            To demonstrate a strong commitment to evaluation, organisations
            should focus on building the internal capabilities of teams along
            with developing decision-making processes and structures. Impact
            evaluations should be planned and conducted in ways that enhance
            utilisation of findings, to inform decisions and improve
            performance.
          </p>
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1730111846/culture_edpaya.jpg"
            alt="Evaluative Culture"
            className="mt-4 w-full h-auto"
          />
        </>
      ),
    },
    {
      name: "Theory of Change",
      content: (
        <>
          <p>
            A well-developed Theory of Change (ToC) ensures efficiency in the
            planning, implementation, and evaluation of development projects. A
            ToC is a visual representation of the change that social investments
            and programmes will make within the ecosystem they operate in. It
            illustrates the background and context of social investments,
            closely examining the assumptions and justifications to link impact
            to investment decisions while preparing the base for collecting and
            using data to understand and manage the social impact of those
            investments.
          </p>
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1730111847/Theoryofchange_xth4zi.jpg"
            alt="Theory of Change"
            className="mt-4 w-full h-auto"
          />
        </>
      ),
    },
    {
      name: "M&E Framework",
      content: (
        <>
          <p>
            A Monitoring & Evaluation (M&E) framework should outline the scope
            and objectives of social investments and investment strategies while
            defining the data and information needs with the corresponding
            methods and sources of information. It should outline the roles and
            responsibilities of stakeholders in contributing to building the
            impact evaluation findings while putting in place a strategy for
            using the results. A good M&E framework ensures enhanced social
            performance, reduces social and environmental risks, and builds
            trust through better communication.
          </p>
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1730111848/m_E_dn7xo0.png"
            alt="Evaluative Culture"
            className="mt-4 w-full h-auto"
          />
        </>
      ),
    },
    {
      name: "Data Systems",
      content: (
        <div className="flex lg:flex-row flex-col lg:gap-x-6">
          <div>
            <p>
              A data management system enables regular process (activity)
              monitoring to ensure the following:
            </p>
            <ul className="list-disc ml-5">
              <li>
                It tracks the use of inputs, resources & investment strategies.
              </li>
              <li>It measures programme progress.</li>
              <li>It helps to glean insights.</li>
            </ul>
            <p className="mt-4">
              A data management system should also assess contexts in which
              social organisations and Corporate Social Responsibility (CSR)
              companies operate, and constantly document beneficiary
              perceptions, including their participation, treatment, access to
              resources, and their overall experience of change. Data systems
              will aid organisations to move towards a developed culture of
              statistical literacy and adopt a more sophisticated approach to
              data production, use, analytics, visualisation, and communication.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1730111846/dataSystems_al1hmp.jpg"
            alt="Data Systems"
            className="mt-4 w-full h-[600px]"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Characteristics of Social Impact Management
      </h2>
      <div className="flex justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`px-4 py-2 font-semibold text-sm ${
              activeTab === tab.name
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-4 border rounded-lg bg-white shadow">
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </div>
    </div>
  );
};

export default CharSocialImpact;
