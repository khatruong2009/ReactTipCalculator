import React from "react";


function Result(props) {
  var tipPercentage;

  // if (service == "Great") {
  //   tipPercentage = .25;
  // } else if (service == "Good") {
  //   tipPercentage = .20;
  // } else if (service == "Okay") {
  //   tipPercentage = .17;
  // } else tipPercentage = .15;
  

  return (
    <div>
      <p>{props.bill}</p>
    </div>
  )
}

export default Result;