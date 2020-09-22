import React, {useState} from 'react';

function Tip() {

  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [result, setResult] = useState();

  var tip = bill * 0.2;
  var total = bill + tip;

  console.log(typeof(bill));
  
  function handleChange(event) {
    setBill(parseFloat(event.target.value));
  }

  function handleChangePeople(event){
    setPeople(parseInt(event.target.value));
  }

  function handleClick(event) {
    var endResult = total / people;
    setResult(endResult.toFixed(2));
  }

  return (
    <div className='calculator'>
      <div className='calculator-header'>
        <h3>Calculate</h3>
      </div>

      <div className='bill-amount'>
        <p>How much was your bill?</p>
        $<input 
          value={bill} 
          type="number" 
          id="bill" 
          onChange={handleChange}
          />
      </div>

      <div className='service'>
        <p>How was your service?</p>
        <select id='service'>
          <option value='great' className='great'>
            Great
          </option>
          <option value='good' className='good'>
            Good
          </option>
          <option value='okay' className='okay'>
            Okay
          </option>
          <option value='bad' className='bad'>
            Bad
          </option>
        </select>
      </div>

      <div className='people'>
        <p>How many people are sharing the bill?</p>
        <input 
          value={people} 
          type='number' 
          id='people' 
          onChange={handleChangePeople}
          /> people
      </div>

      <button className='button' onClick={handleClick} id='button'>
        Calculate
      </button>

      <div className='result'>
        <p>The tip amount is ${tip.toFixed(2)}</p>
        <p>The total bill was ${total.toFixed(2)}</p>
        <p>The bill is being split between {people} people.</p>
        <p>The amount paid per person is ${result}</p>
      </div>
    </div>
  );
}

export default Tip;
