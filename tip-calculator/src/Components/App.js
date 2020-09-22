import React, {useState} from 'react';
import Header from "./Header";
import Input from "./Input";
import Result from "./Result";
import Button from "./Button";

function App() {

  return (
    <div>
      <Header/>
      <div className="calculator">
      <Input/>
      <Button/>
      <Result/>
      </div>
    </div>
  );
}

export default App;
