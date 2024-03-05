import logo from './logo.svg';
import './App.css';
import { people } from './components/data';
import { getImageUrl } from './components/utils';

function App() {
  const listItems = people.map(x => 
    <li key={x.id}>
      <img src={getImageUrl(x)}></img>
      <p>
        <b>{x.name}</b>
      </p>
    </li>
    )

    console.log(people);
  return (
    <div className="App">
      <header className="App-header">
        <ul>{listItems}</ul>
      </header>
    </div>
  );
}

export default App;
