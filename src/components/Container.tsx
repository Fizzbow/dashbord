import React, { useEffect, useState } from "react";
import Startup from "./Startup";
import "./label.scss";

import navData from "../data/nav.json";

import LineChart from "./LineChart";
import Views from "./Views";
import Likes from "./Likes";
import TotalEn from "./TotalEn";

import { eventEmitter } from "../components/Nav";
import styled from "styled-components";

const Cube = styled.div`
  transform-style: preserve-3d;
`;
const Front = styled.div`
  transition: transform 1s ease-in-out;
`;

const Container = () => {
  useEffect(() => {
    eventEmitter.on("updateSocial", (item) => {
      renderCubeItems(item);
    });
    return () => {
      eventEmitter.off("updateSocial", () => {});
    };
  }, []);

  const renderCubeItems = (item: string) => {
    const cube = document.querySelector(".cube");
    if (!cube) return;
    // click animation
    if (cube.innerHTML) {
      const domId = document.getElementById(`${item}`);
      console.log({ domId });
    } else {
      // init dom render
      if (navData.socialMedia.length > 0 && navData.socialMedia.length <= 4) {
        navData.socialMedia.forEach((i, index) => {
          let transform;
          if (index === 0) {
            transform = "front";
          } else if (index === 1) {
            transform = "bottom";
          }
          const font = `<div id='${i}' class="${transform} bg-ptBlueLinear bg-clip-text font-PT text-xl font-bold text-transparent text-shadow-lg">
               ${i}</div>`;

          cube.innerHTML += font;
        });
      }
    }
  };

  return (
    <div className="flex flex-row pl-10 pt-10">
      <div className="container-text">
        <span className="font-Poppins text-xl font-bold text-white text-shadow-lg">
          Take your
        </span>

        <Cube className="cube relative h-[60px] w-[250px]">
          {/* <Front 
          className="container-text_transformZ bg-ptBlueLinear bg-clip-text font-PT text-xl font-bold text-transparent text-shadow-lg">
            {" "}
            Tumblr
          </Front> */}
        </Cube>

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
      <div className="container-hero">
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
