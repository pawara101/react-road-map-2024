import logo from './logo.svg';
import './App.css';
import MyFunctionalComponent from './components/comp1';
import TestComptest from './components/testComptest';
import DisplayUser from './components/user';

function App() {

  const user = {
    id: 0,
    name: "Pawara ",
    age: 54,
  };
  

  return (
    <div className="App">

      <header className='App-header'>
      <DisplayUser user={user} />
      </header>
    </div>
  );
}

export default App;
