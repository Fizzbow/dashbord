import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Eye = styled.div`
  background: linear-gradient(135deg, #343a55 0%, #404869 100%) padding-box,
    linear-gradient(-45deg, #343a55 0%, #404869 100%) border-box;
  border: 2px solid transparent;
`;

const Views = () => {
  const [count, setCount] = useState(345890);

  /**
   *
   * @param callback 需要的draw函数
   * @param from 最开始的数值
   * @param to 最终数值
   * @param duration 延迟时间
   */
  function animateNumber(
    callback: (...args: any) => void,
    from: number,
    to: number,
    duration: number
  ) {
    let start: number;
    const timer = (timestamp: number) => {
      start = start || timestamp;
      const progress = ((to - from) * timestamp) / duration;

      callback(to + progress);

      if (from + progress < to) {
        requestAnimationFrame(timer);
      }
    };
    requestAnimationFrame(timer);
  }

  animateNumber(
    (value) => {
      const count = document.querySelector(".count");
      if (count) {
        const str = Math.floor(value).toString();
        const mid = str.length / 2;
        const firstHalf = str.slice(0, mid);
        const lastHalf = str.slice(mid, str.length);
        count.textContent = `${firstHalf}  ${lastHalf}`;
      }
    },
    35000,
    36000,
    5000
  );
  return (
    <div className="views w-35 flex h-20 flex-row items-center rounded-2xl p-4 shadow-btn">
      <Eye className="flex  h-14 w-14 flex-row items-center justify-center  rounded-[50%]">
        <div
          style={{ backgroundImage: `url(${require("../assets/eye.png")})` }}
          className="h-10 w-10 bg-contain bg-center bg-no-repeat"
        />
      </Eye>
      <div className="ml-2">
        <span className="font-bold text-[#8C96CA]">Views: </span>
        <span className="font-bold text-[#1AC74A]">+36%</span>
        <br />
        <span className="count text-2xl font-extrabold text-white">
          {count}
        </span>
      </div>
    </div>
  );
};

export default Views;
