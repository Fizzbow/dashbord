import React, { useState, useEffect } from "react";
import EventEmitter from "eventemitter3";
import navData from "../data/nav.json";

const eventEmitter = new EventEmitter();

const Nav = (props: any) => {
  const [select, setSelect] = useState({
    flag: "progress" as FlagType,
    socialMedia: "",
  });
  useEffect(() => {
    if (!select.socialMedia) {
      /** 默认选择navData数组中第一个 */
      setSelect({ ...select, socialMedia: "Vkontakte" });
    }
  }, []);

  useEffect(() => {
    eventEmitter.emit("updateSocial", select.socialMedia);
  }, [select.socialMedia]);
  return (
    <header className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <div
          style={{
            backgroundImage: `url(${require("../assets/heartlogo.svg")})`,
          }}
          className="h-12 w-12 bg-contain bg-center"
        />
        <div className="text-2xl font-bold text-white">DO PE</div>
        <Select
          flag={select.flag}
          changeFlag={(flag: FlagType) => setSelect({ ...select, flag })}
        />

        <div className="nav-link flex flex-row gap-2">
          {navData.socialMedia.map((i, idx) => {
            return (
              <span
                onClick={() => {
                  setSelect({ ...select, socialMedia: i });
                }}
                className={`cursor-pointer  ${
                  i === select.socialMedia
                    ? "font-bold text-[#5A7CE5]"
                    : "font-extralight text-[#878EB9]"
                }`}
                key={idx}
              >
                {i}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-8">
        <button className="cursor-pointer rounded-xl  bg-btn px-6 py-3 text-white opacity-95 shadow-btn">
          Log In
        </button>
        <button className="cursor-pointer rounded-xl  bg-btn px-6 py-3 text-white opacity-95 shadow-btn">
          Register
        </button>
      </div>
    </header>
  );
};

const flags = ["progress", "pansexual", "trans"] as const;
type FlagType = (typeof flags)[number];
interface SelectProps {
  flag: FlagType;
  changeFlag: (flag: FlagType) => void;
}

const Select = ({ flag, changeFlag }: SelectProps) => {
  const [select, toggleSelect] = useState(false);
  // const imgPath = new URL(`../assets/flags/${flag}.avif`, import.meta.url).href;
  const imgStyle = {
    backgroundImage: "url(../../src/assets/flags/" + flag + ".avif)",
  };
  return (
    <div
      onClick={() => toggleSelect(!select)}
      className={`nav-select relative 
          z-10
          mx-4
          flex 
          cursor-pointer items-center justify-center rounded-xl bg-btn p-3 opacity-95 ${
            select ? "shadow-innerBtn" : "shadow-btn"
          }`}
    >
      <div
        className="nav-select_flag h-8 w-12 rounded-md bg-cover bg-center bg-no-repeat p-4 transition-[background-image]"
        style={imgStyle}
      ></div>
      <div className={`nav-select_icon mx-4  ${select && "rotate-180"}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="10"
          viewBox="0 0 15 10"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.3763 4.02132L9.11318 8.73207C8.32066 9.44141 7.04043 9.44141 6.2479 8.73207L0.984739 4.02132C-0.295491 2.87546 0.618959 0.91113 2.42754 0.911131L12.9539 0.911132C14.7624 0.911133 15.6566 2.87546 14.3763 4.02132Z"
            fill="#878EB9"
          />
        </svg>
      </div>

      <div
        className={`nav-select_items absolute top-14 mt-5 flex flex-col rounded-md bg-btn p-5 opacity-95 shadow-btn  transition-all ${
          select ? "visible" : "hidden"
        }`}
      >
        {flags.map((flag, index) => {
          return (
            <span
              className="my-2 text-[#8C96CA]"
              key={index}
              onClick={() => {
                changeFlag(flag);
              }}
            >
              {flag}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export { Nav, eventEmitter };
