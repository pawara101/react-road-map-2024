import React from "react";
import ReactDOM from "react-dom";

//Functional Components (Arrow Function from ES6)
const Cats = props =>{
    return (
        <div>
            <h1>
                {props.name}
            </h1>
            <h2>{props.colour}</h2>
        </div>
    )
}

export default Cats;