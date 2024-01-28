import React from "react";

class Asyncapplication extends React.Component {
    constructor(){
        super();
        this.state = {
            inputValue:'',
        };
    }

    //
    render() {
        return (
            <div>
                <h3> Working with setState()</h3>
                <form>
                    Type something here :-
                    <input value={ this.state.inputValue } onChange={(e) =>{
                        console.log(' Before setting state :- ', this.state.inputValue);
                        this.setState({ inputValue: e.target.value });
                        console.log(' After setting state :- ', this.state.inputValue);
                    }}></input>
                </form>
            </div>
        )
    }
}

export default Asyncapplication;