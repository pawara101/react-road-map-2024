import React, { Component } from 'react'

class Bike extends React.Component {
    // state object is always declared in the constructor
    constructor(props){
        super(props);
        this.state = {
            brand : "Honda",
            model: "Pulser",
            color: "red",
            Top_speed: "100",
            engine: "4-Stroke, 2-Valve, DTS-i FI Engine"
        }
    }


    render(){
        return (
            <div>
                <h1>My new Bike....</h1>
                <h2>It is {this.state.brand} {this.state.model}</h2>
                <h2>It is of { this.state.color } color and has a top speed of { this.state.Top_speed }</h2>
                <h3>The engine is { this.state.engine }</h3>
            </div>
        );
    }
}


export default Bike;