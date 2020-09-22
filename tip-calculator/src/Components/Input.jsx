import React, {useState} from "react";

function Input(props) {

  const [inputBill, setInputBill] = useState();
  const [inputService, setInputService] = useState("Great");
  const [inputPeople, setInputPeople] = useState();

  function changeBill(event) {
    setInputBill(event.target.value)
  } 

  function changeService(event) {
    setInputService(event.target.value)
  }

  function changePeople(event) {
    setInputPeople(event.target.value)
  }

  function handleClick() {
    props.calculate(inputBill, inputService, inputPeople);
  }

  return (
    <div>
    <div className="calculator-header">
      <h2>Calculator</h2>
    </div>

    <div className="bill-amount">
      <p>What is the total bill amount?</p>
      $<input
          value={inputBill}
          onChange={changeBill}
          type="number"
          name="bill"
      />
    </div>

    <div className="service">
      <p>How was your service?</p>
      <select onChange={changeService} value={inputService}>
        <option value="Great">Great</option>
        <option value="Good">Good</option>
        <option value="Okay">Okay</option>
        <option value="Poor">Poor</option>
      </select>
    </div>

    <div className="people">
      <p>How many people are in your group?</p>
      <input
        value={inputPeople}
        onChange={changePeople}
        type="number"
        name="people"
      /> people
    </div>

    <button className="button" onClick={handleClick}>Calculate</button>
  </div>
  )
}

export default Input;