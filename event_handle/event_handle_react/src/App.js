import logo from './logo.svg';
import './App.css';
import Loggedin from './Components/Loggedin';
import LoggedOut from './Components/LoggedOut';

const loggedIN = false;

const names = ["Nimal","Saman","Kamal","Jothipala"]
const nameCount = names.length

function App() {
  console.log(nameCount);
  return (
    
    <div className="App">
      {nameCount > 0 && names.map((name) =>{
        return (<ul>{name}</ul>)
      })}
      {nameCount == 0 && <p>Nothing provided</p>}
    </div>
  );
}

export default App;
