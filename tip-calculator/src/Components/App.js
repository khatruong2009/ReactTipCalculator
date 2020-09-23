import React, {useState} from 'react';
import Header from "./Header";
import Input from "./Input";
import Result from "./Result";

function App() {

  const [totalBill, setTotalBill] = useState();
  const [totalTip, setTotalTip] = useState();
  const [totalShare, setTotalShare] = useState();

  const [hidden, setHidden] = useState(true);

  var fullBill, tip, share, tipPercentage;

  function Calculate(bill, service, people) {
    if (service === "Great") {
      tipPercentage = .20;
    } else if (service === "Good") {
      tipPercentage = .18;
    } else if (service === "Okay") {
      tipPercentage = .165;
    } else tipPercentage = .15;

    tip = (tipPercentage * bill);
    fullBill = (bill + tip);
    share = (fullBill / people);

    setTotalTip(tip.toFixed(2));
    setTotalBill(fullBill.toFixed(2));
    setTotalShare(share.toFixed(2));

    setHidden(false);
  }

  return (
    <div>
      <div className="calculator">
        <Header/>
        <div className="separate">
          <Input 
            calculate={Calculate} 
          />
          <Result 
            bill={totalBill} 
            tip={totalTip} 
            share={totalShare}
            hidden={hidden}
          />
        </div>
        
      </div>
    </div>
  );
}

export default App;
