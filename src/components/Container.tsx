import React from "react";

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
        <span className="bg-ptOrangeLinear bg-clip-text font-PT text-xl font-bold text-transparent text-shadow-lg">
          10X Level
        </span>
      </div>
      <div className="container-hero"></div>
    </div>
  );
};

export default Container;
