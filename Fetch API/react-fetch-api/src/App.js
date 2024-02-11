import logo from './logo.svg';
import './App.css';

function App() {

  let items = ["item1", "item2", "item3", "item4, item5", "item6",'toggle']

  return (
    <div>

      <ul>
        {items.map((x)=>{
          return (
            <li key={x}>using the map method {x}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
