import React,{useState} from "react";

//import any components needed
import NumberButton from "./NumberButton.js";
import Display from "../../../components/DisplayComponents/Display";
//Import your array data to from the provided data file
import { numbers } from '../../../data.js';

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [number, setNumber] = useState(numbers)
  const clickNumber = (number) => {
    console.log(`${number} button clicked`)
  }
  return (
    <div className='numContainer'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
        component matching the name on the provided file. Pass
        it any props needed by the child component*/}
      {number.map(number => 
        <div key={number}>
          <NumberButton numberProp={number} clickNumberProp={clickNumber} />
        </div>)}
    </div>
  );
};
export default Numbers;