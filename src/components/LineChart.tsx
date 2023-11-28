import React from "react";
import "./lineChart.scss";

const LineChart = () => {
  return (
    <div className="flex flex-row items-baseline gap-4 rounded-lg p-4 shadow-btn">
      {["light", "light", "light", "deep", "light"].map((i, idx) => {
        return (
          <div
            key={idx}
            className={
              "w-4 rounded-[6px] " + `${i === "light" ? "light" : "deep"}`
            }
            style={{ height: `${idx * 8 + 60}px` }}
          />
        );
      })}
    </div>
  );
};

export default LineChart;
