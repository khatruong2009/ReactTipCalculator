import React from "react";
import {bill, people, service} from "./Tip";


function Result(props) {
  var tipPercentage;

  if (service == "Great") {
    tipPercentage = .25;
  } else if (service == "Good") {
    tipPercentage = .20;
  } else if (service == "Okay") {
    tipPercentage = .17;
  } else tipPercentage = .15;
  

  return (
    <div>
      <p>{bill}</p>
    </div>
  )
}

export default Result;