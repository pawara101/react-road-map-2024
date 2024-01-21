import logo from './logo.svg';
import './App.css';
import ComponentFunc from './components/comp1';
import TestComptest from './components/testComptest';
import {func,DisplayUser} from './components/user';
import Gallery from './components/Gallery.js';

// states
import Helloworld1 from './components/Helloworld1';

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

  //Passing a function to react component
  function func() {
    console.log("Yes, I am a function");

    console.log("=======================================");
   }


   function sumfunc() {
    console.log(23+5);
   }
  
  return (
    <div className="App">

      <header className='App-header'>
        <Helloworld1></Helloworld1>
      </header>

      
    </div>
  );
}

export default App;
