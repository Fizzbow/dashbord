// import React from "react";
// import PropTypes from "prop-types";
import "./nav.scss";
import { useState } from "react";

const Nav = (props: any) => {
  return (
    <header className="flex flex-row items-center">
      <div className="h-12 w-12 bg-[url('src/assets/heartlogo.svg')] bg-contain bg-center" />
      <div className="text-2xl font-bold text-white">DO PE</div>
      <Select />

      <div className="nav-link flex flex-row gap-2">
        <span className="font-extralight text-[#878EB9]">Vkontakte</span>
        <span className="font-extralight text-[#878EB9]">Tumblr</span>
        <span className="font-extralight text-[#878EB9]">Odnoklassniki</span>
      </div>
    </header>
  );
};

Nav.propTypes = {};

const Select = (props) => {
  const [flag, setFlag] = useState("progress");
  return (
    <div className="nav-select mx-4 flex items-center justify-center p-3">
      <div className="nav-select_flag">flagg</div>

      <div className="nav-select_icon mx-4">
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
    </div>
  );
};
Select.propTypes = {
  flag: "pansexual" | "progress" | "trans",
};

export default Nav;
