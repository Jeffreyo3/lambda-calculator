import React, {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton.js";
import Display from "../../../components/DisplayComponents/Display";
//Import your array data to from the provided data file
import { specials } from '../../../data.js';

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials)

  return (
    <div className="specialContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
        component matching the name on the provided file. Pass
        it any props needed by the child component*/}
      {specialState.map(specialState => 
        <div key={specialState}>
          <SpecialButton specialProp={specialState} clickSpecialProp={props.clickSpecial} />
        </div>)}
    </div>
  );
};
export default Specials;