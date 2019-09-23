import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="operatorButton" onClick={props.clickOperator}>
      {props.operators.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};


export default OperatorButton;