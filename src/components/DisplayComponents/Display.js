import React from "react";

const Display = ({displayState}) => {
  return <div className="display">
  <h1>{displayState}</h1>{/* Display any props data here */}
  </div>;
};

export default Display;