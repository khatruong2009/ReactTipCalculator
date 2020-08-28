import React from 'react';
import Question from './Question';
import Input from './Input';
import Result from './Result';

var bill = document.querySelector('#bill');

function Tip() {
  return (
    <div className='calculator'>
      <div className='calculator-header'>
        <h3>Calculate</h3>
      </div>

      <div className='bill-amount'>
        <Question question='How much was your bill?' />
        $<Input type='number' id='bill' />
      </div>

      <div className='service'>
        <Question question='How was your service?' />
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
        <Question question='How many people are sharing the bill?' />
        <Input type='number' id='people' /> people
      </div>

      <button className='button' type='submit' id='button'>
        Calculate
      </button>

      <div className='result'>
        <Result bill={bill} />
      </div>
    </div>
  );
}

export default Tip;
