import React, { useState } from "react";
import rules from "../components/rules";
import bgMobile from "../assets/bg_mobile.png";
import bgTablet from "../assets/bg_tablet.png";
import bgLaptop from "../assets/bg_laptop.png";

const Rules = () => {
  const [expandedRuleIds, setExpandedRuleIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedRuleIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isExpanded = (id) => expandedRuleIds.includes(id);

  return (
    <div className="relative min-h-screen font-abhaya">
      {/* Backgrounds */}
      <div className="fixed inset-0 z-0">
        <div
          className="block sm:hidden w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgMobile})` }}
        ></div>
        <div
          className="hidden sm:block md:hidden w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgTablet})` }}
        ></div>
        <div
          className="hidden md:block w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgLaptop})` }}
        ></div>
      </div>

      <div className="fixed inset-0 bg-black opacity-20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 min-h-screen px-4 py-10 md:px-10 text-white">
        <h1 className="lg:text-6xl md:text-4xl text-xl font-bold text-center mb-10">
          Your Rights and Legal Rules
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rules.map((rule) => (
            <div
              key={rule.id}
              className={`bg-black bg-opacity-80 rounded-xl px-6 pt-5 pb-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col ${
                isExpanded(rule.id)
                  ? "max-h-fit"
                  : "max-h-[300px] overflow-hidden"
              }`}
            >
              <h2 className="text-xl md:text-2xl font-bold text-[#8a2be2] mb-1">
                {rule.category}
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-2">
                <span className="font-medium text-white">Issue:</span>{" "}
                {rule.issue_example}
              </p>
              <p className="text-sm md:text-lg text-gray-200">
                {isExpanded(rule.id)
                  ? rule.rights_explained
                  : rule.rights_explained.split(" ").slice(0, 30).join(" ") +
                    "..."}
              </p>
              <div className="mt-2">
                <button
                  className="text-[#d9a066] text-sm md:text-base font-semibold focus:outline-none"
                  onClick={() => toggleExpand(rule.id)}
                >
                  {isExpanded(rule.id) ? "Read less" : "Read more"}
                </button>
                <p className="text-sm text-red-400 font-semibold mt-1">
                  Penalty: {rule.penalty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rules;
