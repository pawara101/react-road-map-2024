import logo from "./logo.svg";
import "./App.css";
import Car from "./Components/classComponent";
import Car2 from "./Components/functonalComponent";
import Comment from "./Components/userComponent";
import Cats from "./Components/statelessComponent";
import Main from "./Components/Main";



function App() {
  return (
    <div>
      
      <Main name="Saman" post="worker"></Main>
      <Main name="Nimal" post="cleaner"></Main>
    </div>
  );
}

export default App;
