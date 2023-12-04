import React from "react";
import Startup from "./Startup";
import "./label.scss";
import LineChart from "./LineChart";
import Views from "./Views";
import Likes from "./Likes";
import TotalEn from "./TotalEn";

const Container = () => {
  return (
    <div className="flex flex-row pl-10 pt-10">
      <div className="container-text">
        <span className="font-Poppins text-xl font-bold text-white text-shadow-lg">
          Take your
        </span>
        <span className="bg-ptBlueLinear bg-clip-text font-PT text-xl font-bold text-transparent text-shadow-lg">
          {" "}
          Tumblr
        </span>
        <br />
        <span className="font-Poppins text-xl font-bold text-white text-shadow-lg">
          portfolio to the
        </span>
        <br />

        <div className="relative max-w-[25rem]">
          <div className="flex flex-row items-center justify-between">
            <Startup />
            <span className="bg-ptOrangeLinear bg-clip-text font-PT text-6xl font-bold text-transparent text-shadow-lg">
              10X Level
            </span>
          </div>
          <span className="text-[#8C96CA]">
            Start getting massive engagement from real people on Instagram with
            the best in class grows automation tools
          </span>
          <Toggle />
        </div>
      </div>
      <div className="container-hero flex flex-col gap-12">
        <LineChart />
        <Views />

        <Likes />
        <TotalEn />
      </div>
    </div>
  );
};

const Toggle = () => {
  return (
    <div className="relative mb-16 mt-7">
      <input
        aria-label="toggle2"
        id="toggle"
        type="checkbox"
        className="relative z-10 h-16 w-full cursor-pointer opacity-0"
      />
      <label className="z-2 absolute left-0 top-0 flex h-16 w-full   flex-row rounded-[12px]   border-2 border-solid border-toggleColor text-xs">
        <div className="flex w-[50%] items-center justify-center">
          Get 25 real followers for free
        </div>
        <div className="flex w-[50%] items-center justify-center">
          No credit card required.
        </div>
      </label>
    </div>
  );
};

export default Container;
