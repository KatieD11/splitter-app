import icon_dollar from "../icon-dollar.svg";
import icon_person from "../icon-person.svg";
import classes from "./UserInput.module.css";

const UserInput = (props) => {
  const numPeopleInvalid =
    !props.numPeople && props.billAmount > 0 && props.tipSelected;

  const tipButtonHandler = (event) => {
    props.onTipSelected(event.target.value);
  };

  const billChangeHandler = (event) => {
    props.onBillChange(event.target.value);
  };

  const numPeopleChangeHandler = (event) => {
    props.onNumPeopleChange(event.target.value);
  };

  const customTipChangeHandler = (event) => {
    props.onCustomTip(event.target.value);
  };

  return (
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel}>Bill</label>
      <div className={classes.inputNumberField}>
        <img src={icon_dollar}></img>
        <input
          type="number"
          placeholder="0"
          onChange={billChangeHandler}
          value={props.billAmount}
        ></input>
      </div>

      <label className={classes.inputLabel}>Select Tip %</label>
      <div className={classes.grid}>
        <button
          className={`${classes.tipButton} ${
            props.tipSelected === "5" && classes.tipSelected
          }`}
          value="5"
          onClick={tipButtonHandler}
        >
          5%
        </button>
        <button
          className={`${classes.tipButton} ${
            props.tipSelected === "10" && classes.tipSelected
          }`}
          value="10"
          onClick={tipButtonHandler}
        >
          10%
        </button>
        <button
          className={`${classes.tipButton} ${
            props.tipSelected === "15" && classes.tipSelected
          }`}
          value="15"
          onClick={tipButtonHandler}
        >
          15%
        </button>
        <button
          className={`${classes.tipButton} ${
            props.tipSelected === "25" && classes.tipSelected
          }`}
          value="25"
          onClick={tipButtonHandler}
        >
          25%
        </button>
        <button
          className={`${classes.tipButton} ${
            props.tipSelected === "50" && classes.tipSelected
          }`}
          value="50"
          onClick={tipButtonHandler}
        >
          50%
        </button>
        <div className={classes.customTip}>
          <input
            type="number"
            placeholder="Custom"
            onChange={customTipChangeHandler}
            value={props.customTip}
          ></input>
        </div>
      </div>

      <div className={classes.flexContainer}>
        <label className={classes.inputLabel}>Number of people</label>
        {numPeopleInvalid && <p className={classes.invalidText}>Can't be zero</p>}
      </div>
      <div
        className={`${classes.inputNumberField} ${
          numPeopleInvalid && classes.invalid
        }`}
      >
        <img src={icon_person}></img>
        <input
          type="number"
          placeholder="0"
          onChange={numPeopleChangeHandler}
          value={props.numPeople}
        ></input>
      </div>
    </div>
  );
};

export default UserInput;
