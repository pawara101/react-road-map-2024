import logo from './logo.svg';
import './App.css';

function App() {
  let count = 0;

  const increasedCount = () =>{
    count += 1;
    console.log(count);
  };

  function decreaseCount() {
    count = count - 1;
  }

  return (
    <div className="App">
      <header className="App-header">
      <span>My Counter</span>
      <p>The count is { count }</p>
      <button className='button' onClick={ increasedCount }>+</button>
      <br></br>
      <button className='button' onClick={ decreaseCount }>-</button>
      </header>
      
    </div>
  );
}

export default App;
