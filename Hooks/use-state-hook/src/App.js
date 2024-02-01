import './App.css';
import { useState } from 'react';

function App() {

  const [count,setCount] = useState(0); // here 0 is initial value

  // let count = 0;

  const increaseCount = () =>{
    // count += 1;
     // right now the count is not rendering to the web page.
    // for that we use usestate()

    setCount(count+1);
    console.log(count);
  };

  function decreaseCount() {
    // count = count - 1;
    setCount(count-1);
    console.log(count);
  }

  return (
    <div className="App">
      <header className="App-header">
      <span>My Counter</span>
      <p>The count is { count }</p>
      <button className='button' onClick={ increaseCount }>+</button>
      <br></br>
      <button className='button' onClick={ decreaseCount }>-</button>
      </header>
      
    </div>
  );
}

export default App;
