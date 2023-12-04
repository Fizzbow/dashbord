import React from "react";
import styled from "styled-components";
import "./totalEn.scss";

const Figcaption = styled.figcaption`
  border-radius: 75px 75px 0 0;
  width: 150px;
  height: 75px;
  border: 50px solid #31364e;
  border-bottom-style: hidden;
`;
const TotalEn = () => {
  return (
    <div className="totalEn flex w-60 flex-col items-center justify-center rounded-2xl p-10 shadow-btn">
      <figure className="relative">
        <Figcaption></Figcaption>
        <svg className="absolute left-0 top-0" width="200" height="75">
          <defs>
            <filter
              id="filter0_ii_0_98"
              x="0.31488"
              y="-5.72034"
              width="309.074"
              height="203.493"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8.368" />
              <feGaussianBlur stdDeviation="4.184" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.45098 0 0 0 0 0.482353 0 0 0 0 0.94902 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_0_98"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-8.368" />
              <feGaussianBlur stdDeviation="3.138" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.2475 0 0 0 0 0.272679 0 0 0 0 0.6 0 0 0 0.25 0"
              />
              <feBlend
                mode="multiply"
                in2="effect1_innerShadow_0_98"
                result="effect2_innerShadow_0_98"
              />
            </filter>
            <linearGradient
              id="paint0_linear_0_98"
              x1="286.098"
              y1="54.3962"
              x2="32.9658"
              y2="190.376"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7780FE" />
              <stop offset="1" stop-color="#4B5192" />
            </linearGradient>
          </defs>
          <circle
            pathLength="100"
            className="totalEn_outer fill-transparent  stroke-[50px]"
            stroke="#7780FE"
            fill="url(#paint0_linear_0_98)"
            filter="url(#filter0_ii_0_98)"
            cx="75"
            cy="75"
            r="50px"
          />
        </svg>
      </figure>
      <span className="mt-5 font-bold text-[#8C96CA]">Total engagement</span>
    </div>
  );
};
export default TotalEn;
