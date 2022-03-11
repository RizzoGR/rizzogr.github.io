import React from "react";
import classes from "./HomePage.module.css";
import CardList from "../CardList/CardList";

function HomePage() {
    return <div className={classes.homepage}>
        <CardList />    
    </div>;
}

export default HomePage;
