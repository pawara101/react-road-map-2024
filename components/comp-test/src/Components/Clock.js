import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date : new Date(),
        };

        this.timer = setInterval(() => {
            this.tick()
        },1000);
    }

    tick() {
        console.log("Timer is running");
    }

    componentDidMount() {
        console.log("Mounted");
    }

    componentWillUnmount(){
        console.log("Unmount");
    }

  render() {
    return (
      <div>
        <h1>Time is : {this.state.date.toISOString()}</h1>
      </div>
    )
  }
}

export default Clock;
