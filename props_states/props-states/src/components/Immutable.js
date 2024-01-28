import React, { Component } from "react";

class ApptestIMM extends Component {
  // Initialize items to an empty array in the constructor
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  getItem() {
    // Create a new ID and use
    // a random number as the value
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    return {
      id: this.state.items.length + 1,
      value : Math.random(),
    //   value: getRandomInt(10),
    };
  }

  // The Correct Way:
  // Add the new item only after copying the values
  addItemImmutably = () => {
    this.setState({
      items: [...this.state.items, this.getItem()],
    });
  };

  // The Wrong Way:
  // mutate items and set it back
  addItemMutably = () => {
    this.state.items.push(this.getItem());
    this.setState({ items: this.state.items });
  };

  render() {
    return (
      <div>
        <button onClick={this.addItemImmutably}>Add immutably</button>
        <button onClick={ this.addItemMutably }>Add mutably</button>
        <div>
          {this.state.items.map((item) => (
            <p key={item.id}>{item.value}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default ApptestIMM;
