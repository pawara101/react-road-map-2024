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


  const users = [
    {
      id: 0,
      name: "Chidume Nnamdi",
      age: 54,
    },
    {
      id: 1,
      name: "Karim",
      age: 24,
    },
    {
      id: 2,
      name: "Bruno",
      age: 45,
    },
    {
      id: 3,
      name: "Ola Brown",
      age: 24,
    },
  ];
  
  return (
    <div className="App">

      <header className='App-header'>
      <DisplayUser users={users} />
      </header>
    </div>
  );
}

export default App;
