import React from "react";

const Display = (props) => {
  return <div className="display">
  <h1>{props.displayState}</h1>{/* Display any props data here */}
  </div>;
};

export default Display;