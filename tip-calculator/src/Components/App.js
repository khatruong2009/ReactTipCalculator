import React, {useState} from 'react';
import Header from "./Header";
import Input from "./Input";
import Result from "./Result";

function App() {

  var totalBill, totalTip, share, tipPercentage;

  function Calculate(bill, service, people) {
    if (service === "Great") {
      tipPercentage = .20;
    } else if (service === "Good") {
      tipPercentage = .18;
    } else if (service === "Okay") {
      tipPercentage = .165;
    } else tipPercentage = .15;

    totalTip = tipPercentage * bill;

    totalBill = totalTip + bill;

    share = totalBill / people;

    console.log(people, bill, service);
  }

  return (
    <div>
      <Header/>
      <div className="calculator">
        <Input calculate={Calculate} />
        <Result/>
      </div>
    </div>
  );
}

export default App;
