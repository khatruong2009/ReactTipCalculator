import React, {useState} from "react";

function Input() {

  const [bill, setBill] = useState();

  return (
    <div>
    <div className="calculator-header">
      <h2>Calculator</h2>
    </div>

    <div className="bill-amount">
      <p>What is the total bill amount?</p>
      $<input
          value={bill}
          type="number"
          name="bill"
      />
    </div>

    <div className="service">
      <p>How was your service?</p>
      <select>
        <option>Great</option>
        <option>Good</option>
        <option>Okay</option>
        <option>Poor</option>
      </select>
    </div>

    <div className="people">
      <p>How many people are in your group?</p>
      <input></input> people
    </div>
  </div>
  )
}

export default Input;