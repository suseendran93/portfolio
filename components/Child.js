import React, { useEffect } from "react";

const Child = (props) => {
  useEffect(() => {
    props.childToParent("Susee");
  }, [props]);

  return (
    <h1>This is a {props.name} personal portfolio from parent component</h1>
  );
};

export default Child;
