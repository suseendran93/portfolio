import React from "react";
import "./Skeleton.css";

const Skeleton = ({ width = "100%", height = "20px", circle = false, count = 1 }) => {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className={`skeleton ${circle ? "skeleton-circle" : ""}`}
          style={{
            width,
            height,
            borderRadius: circle ? "50%" : "4px",
            marginBottom: "10px",
          }}
        />
      ))}
    </>
  );
};

export default Skeleton;