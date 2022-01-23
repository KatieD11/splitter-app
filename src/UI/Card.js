import classes from "./Card.module.css";

const Card = props => {
    return (
        <div className={`${classes.card} ${classes.box_shadow} ${classes.gridContainer}`}>
            {props.children}
        </div>
    );
}

export default Card;