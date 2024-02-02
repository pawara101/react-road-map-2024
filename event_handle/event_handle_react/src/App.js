import logo from './logo.svg';
import './App.css';

function buttonClick(){
  console.log("Button clicked");
  //alert('Clicked');
}



function App() {

  return (
    <div className="App">
      <h1>React Event Handling</h1>
      <br></br><hr></hr>
      <button onClick={ buttonClick }>Click Here</button>  
      {/* if i used buttonClick() function will automaticall execute by itself */}
    </div>
  );
}

export default App;
