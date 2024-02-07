import logo from './logo.svg';
import './App.css';
import Loggedin from './Components/Loggedin';
import LoggedOut from './Components/LoggedOut';

const loggedIN = false;

const names = ["Nimal","Saman","Kamal"]

function App() {

  return (
    <div className="App">
      {loggedIN && <Loggedin />}

      {!loggedIN && <LoggedOut></LoggedOut>}
    </div>
  );
}

export default App;
