import React from "react";
import styled from "styled-components";

const Like = styled.div`
  border: 2.092px solid rgba(93, 101, 142, 0.42);
  background: linear-gradient(
    117deg,
    rgba(67, 75, 125, 0.27) 0%,
    rgba(58, 63, 94, 0.53) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const Likes = () => {
  return (
    <Like className="w-35 flex h-20 flex-row items-center rounded-2xl  p-4">
      <div
        className="h-10 w-10 bg-contain bg-no-repeat"
        style={{ backgroundImage: "url(src/assets/heart.png)" }}
      />
      <div className="ml-3 flex-grow">
        <div className="flex  flex-row justify-between font-bold">
          <span className="text-[#8C96CA]">Likes:</span>
          <span className="text-[#1AC74A]"> +24</span>
        </div>
        <span className="text-2xl font-extrabold text-white">138420</span>
      </div>
    </Like>
  );
};

export default Likes;
