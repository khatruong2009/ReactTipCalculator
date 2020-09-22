import React from 'react';
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

    totalBill = totalTip + Number(bill);

    share = totalBill / people;

    console.log(tipPercentage, totalTip, totalBill, share);
    return {
      tip: totalTip,
      bill: totalBill,
      share: share
    }
  }

  return (
    <div>
      <Header/>
      <div className="calculator">
        <Input 
          calculate={Calculate} 
        />
        <Result 
          bill={Calculate.bill} 
          tip={Calculate.tip} 
          share={Calculate.share}
        />
      </div>
    </div>
  );
}

export default App;
