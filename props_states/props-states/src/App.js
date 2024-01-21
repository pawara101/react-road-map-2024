import logo from './logo.svg';
import './App.css';
import MyFunctionalComponent from './components/comp1';
import TestComptest from './components/testComptest';
import DisplayUser from './components/user';

function App() {

  const user = {
    avtar : "https://cdn-icons-png.flaticon.com/512/5556/5556499.png",
    id: 0,
    name: "Pawara ",
    age: 29,
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
