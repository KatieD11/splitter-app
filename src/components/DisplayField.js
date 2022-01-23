import classes from "./DisplayField.module.css";

const DisplayField = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <p className={classes.label}>{props.label}</p>
        <p className={classes.sublabel}>/ person</p>
      </div>
      <p className={classes.amount}>${parseFloat(props.amount).toFixed(2)}</p>
    </div>
  );
};

export default DisplayField;
