import React, {useState} from "react";

//import any components needed
import OperatorButton from "./OperatorButton.js";
import Display from "../../../components/DisplayComponents/Display";
//Import your array data to from the provided data file
import { operators } from '../../../data.js';

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div className='operatorContainer'>
      {operatorState.map((operators, index) => {
        return <OperatorButton className='operatorButton' operators = {props.operators} key = {index}/>
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};


export default Operators;