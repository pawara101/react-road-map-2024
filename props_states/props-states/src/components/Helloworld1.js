import React, { Component } from 'react'

export class Helloworld1 extends Component {

    constructor(props) {
        // Call parent class constructor using super keyword.
        super(props);

        this.state = {
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7gFgu1O9WUckesuKApYQv4HpehwDKh8yI78LCzGVNK6Ca3VcmxtBRkiAqutv0g1V6y8&usqp=CAU",
            text : "I am Pawara Tharkana" 
        };
    }
  render() {
    return (
      <div>
        <img src={ this.state.image }></img>
        <h2>{ this.state.text }  </h2>
        </div>
    )
  }
}

export default Helloworld1