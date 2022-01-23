import classes from "./CalculationDisplay.module.css";
import DisplayField from "./DisplayField";

const CalculationDisplay = (props) => {
    let tipAmountPP = 0;
    let totalPP = 0;

    console.log("Props: ", props);
    if(props.inputs.numPeople > 0) {
        const total=props.inputs.billAmount * (1+(props.inputs.tipPercent/100));
        totalPP = total / props.inputs.numPeople;
        const tipAmount = props.inputs.billAmount * props.inputs.tipPercent/100;
        tipAmountPP = tipAmount/props.inputs.numPeople;
    }

    const resetHandler = () =>{
        props.onReset();
    }

  return (
    <div className={classes.card}>
      <div>
        <DisplayField label="Tip Amount" amount={tipAmountPP}></DisplayField>
        <DisplayField label="Total" amount={totalPP}></DisplayField>
      </div>
      <button className={`${classes.resetBtn}`} disabled={!props.inputs.numPeople} onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default CalculationDisplay;
