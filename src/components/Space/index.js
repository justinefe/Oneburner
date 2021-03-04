import React from "react";

const Space = ({ color, height, width }) => {
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        width: `${width}px`,
        height: `${height}px`,
        margin: "0 6px",
      }}
    ></div>
  );
};

export default Space;
