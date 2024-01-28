import logo from "./logo.svg";
import "./App.css";
import Car from "./Components/classComponent";
import Car2 from "./Components/functonalComponent";
import Comment from "./Components/userComponent";
import Cats from "./Components/statelessComponent";
import Main from "./Components/Main";
import TopicBox from "./Components/TopicBox";



function App() {
  return (
    <div>
      <TopicBox meal="burrito" price="230">
        <span>This is the description....</span>
      </TopicBox>
      <TopicBox meal="burger" price="2600">
        <button>Click Me</button>
      </TopicBox>
    </div>
  );
}

export default App;
