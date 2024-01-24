import React, { useState } from "react";

function FuncState(props) {
    // use useState() to state management(hook)
    const [counter, setCounter] = useState(0); // value= counter
                                                 // function=setCounter   
                   
    // function to decrease the value of the number
    const increaseCount =(e) => {
        console.log("The value of Number "+ counter);
        setCounter(counter +1);
    }
    
    const decreaseCounter =(e)=>{
        console.log("The value of Number "+ counter);
        setCounter(counter -1);   

    }

    const Resetcount = (e) => {
        console.log("value set to 0");
        setCounter(0);


    }

 // returning the react element
 return(
    <div>
        <h1>Tally Counter</h1>
        <br></br>
        <h1>{counter}</h1>
        <button onClick={ increaseCount } class="button">+</button>
        
        <button onClick={ decreaseCounter } className="button">-</button>
            <br></br><br></br>
        <button onClick={ Resetcount } class="buttonreset">Reset</button>

    </div>
 )
}

export default FuncState;