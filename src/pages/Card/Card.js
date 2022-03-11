import classes from "./Card.module.css";

function Card(props) {
    return (
        <div className={classes.card}>
            <img src={props.image} className={classes.cardImage} alt=""/>
            <h1 className={classes.cardTitle}>{props.title}</h1>
            <div className={classes.cardDescriptionDiv}>
                {props.description}
            </div>
        </div>
    );
}

export default Card;
