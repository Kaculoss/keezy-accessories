import React from "react";

const DummyDiv = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "1px",
        left: "1px",
        width: "1px",
        height: 0,
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: 0,
        display: "none",
      }}
    ></div>
  );
};

export default DummyDiv;
