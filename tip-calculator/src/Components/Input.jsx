import React, {useState} from "react";

function Input() {

  const [bill, setBill] = useState();

  return (
    <div className="calculator">
    <div className="calculator-header">
      <h2>Calculator</h2>
    </div>

    <div className="bill-amount">
      <p>What is the total bill amount?</p>
      $<input
          value={bill}
          type="number"
      />
    </div>
  </div>
  )
}

export default Input;