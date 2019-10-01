import React, {useState} from "react";

//import any components needed
import OperatorButton from "./OperatorButton.js";
import Display from "../../../components/DisplayComponents/Display";
//Import your array data to from the provided data file
import { operators } from '../../../data.js';

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState] = useState(operators)
  
  return (
    <div className="operatorContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
        component matching the name on the provided file. Pass
        it any props needed by the child component*/}
      {operatorState.map(operatorState => 
        <div key={operatorState}>
          <OperatorButton operatorProp={operatorState} clickOperatorProp={props.clickOperator} />
        </div>)}
    </div>
  );
};
export default Operators;