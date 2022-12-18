import React from "react";
import food from "../assets/Photo/photo/d01.jpg";

const D1 = () => {
  return (
    <div>
      <img
        src={food}
        style={{
          maxHeight: "100%",
          objectFit: "none",
          width: "540px",
          height: "312px",
          position: "relative",
        }}
      ></img>
      <div
        style={{
          transform: "rotate(268deg)",
          position: "absolute",
          top: "0",
          marginLeft: "58px",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          style={{
            strokeDasharray: "110",
            strokeDashoffset: "0",
            width: "400px",
          }}
        >
          <circle cx="50" cy="50" r="23" stroke="white" fill="none" />
        </svg>
      </div>
      {/* <span>05/21 75%</span> */}
    </div>
  );
};

export default D1;
