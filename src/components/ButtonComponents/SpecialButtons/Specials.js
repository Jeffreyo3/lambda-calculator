import React, {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton.js";
import Display from "../../../components/DisplayComponents/Display";
//Import your array data to from the provided data file
import { specials } from '../../../data.js';

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [special, setSpecial] = useState(specials)
  const clickSpecial = (special) => {
  }
  return (
    <div className="specialContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {special.map(special => <div key={special}><SpecialButton special={special} clickSpecial={clickSpecial} /></div>)}
    </div>
  );
};
export default Specials;