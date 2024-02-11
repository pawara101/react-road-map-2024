import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  //use if
  if (action.type === "setImage") {
    return action.data;
  } else {
    return state;
  }
};

function App() {
  // const [state, dispatch] = useReducer(reducer, initialArg, init?)
  const [state, setState] = useReducer(reducer, {
    name:'',
    image:'',
    city:'',
    position:'',
  });
  console.log(state);
  return (
    <div>
      <header></header>
      <input type="text" placeholder="Enter your Name"></input>
      <input type="text" placeholder="Enter your City"></input>
      <input type="text" placeholder="Enter your City"></input>
      <input type="text" placeholder="Enter your position"></input>
      <br></br>
      <button>Set Data</button>
    </div>
  );
}

export default App;
