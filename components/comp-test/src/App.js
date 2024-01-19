import logo from "./logo.svg";
import "./App.css";
import Car from "./Components/classComponent";
import Car2 from "./Components/functonalComponent";
import Comment from "./Components/userComponent";
import Cats from "./Components/statelessComponent";



function App() {
  return (
    <div>
      <Cats name="Fluffy" colour="Gray" />
    </div>
  );
}

export default App;
