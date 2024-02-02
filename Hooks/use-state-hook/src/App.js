import "./App.css";
import { useState,useEffect } from "react";

function App() {

  const  [count,countValue] = useState(0);

  // create function to increase
  const increaseVal =() => {
    countValue(count+1);
    
  }

  // create function to decrease
  const decreaseVal =() => {
    countValue(count-1);
  }

  useEffect(() =>{
    // inside here add what need to be there.
    //console.log("New count is :", {count});
    console.log(`New count is : ${count}`);
  },[count] //  [] is dependency array should be mentioned with the variable
  )
  return (
    <div>
      <h1>count : {count}</h1>
      <br></br>
      <button onClick={increaseVal}>Add</button>
      <button onClick={decreaseVal}>Drop</button>
    </div>

    
  );
}

export default App;
