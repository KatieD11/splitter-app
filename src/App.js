import React, { useCallback, useState, useEffect } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import Card from "./UI/Card";
import logo from "./logo.svg";
import CalculationDisplay from "./components/CalculationDisplay";

function App() {
  const [tipSelected, setTipSelected] = useState(null);
  const [customTip, setCustomTip] = useState(null); // this state is used for the reset
  const [billAmount, setBillAmount] = useState(null);
  const [numPeople, setNumPeople] = useState(null);

  const [inputs, setInputs] = useState({
    billAmount: 0,
    tipPercent: 0,
    numPeople: null,
  });

  const tipButtonHandler = (val) => {
    setTipSelected(val);
  };

  const billChangeHandler = (val) => {
    setBillAmount(val);
  };

  const numPeopleChangeHandler = (val) => {
    setNumPeople(val);
  };

  const customTipChangeHandler = (val) => {
    setTipSelected(val);
    setCustomTip(val);
  };

  const resetHandler = () => {
    setInputs({ billAmount: 0, tipPercent: 0, numPeople: null });

    setTipSelected(null);
    setCustomTip('');
    //setBillAmount(null);
    setBillAmount('');
    setNumPeople('');
  };

  useEffect(() => {
    if (numPeople > 0 && billAmount > 0 && tipSelected) {
      setInputs({ billAmount, tipPercent: tipSelected, numPeople });
    }
  }, [numPeople, billAmount, tipSelected]);

  return (
    <div className="container-flex">
      <img src={logo} className="logo" />
      <Card>
        <UserInput
          tipSelected={tipSelected}
          billAmount={billAmount}
          numPeople={numPeople}
          customTip={customTip}
          onTipSelected={tipButtonHandler}
          onCustomTip={customTipChangeHandler}
          onBillChange={billChangeHandler}
          onNumPeopleChange={numPeopleChangeHandler}
        ></UserInput>
        <CalculationDisplay
          inputs={inputs}
          onReset={resetHandler}
        ></CalculationDisplay>
      </Card>
    </div>
  );
}

export default App;
