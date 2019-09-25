import React from "react";

const NumberButton = (props) => {

  return (

    <button className={props.numberProp === "0" ? "numbersButton zeroButton" : "numberButton"} onClick={() => props.clickNumberProp(props.numberProp)}>
      {props.numberProp}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;
