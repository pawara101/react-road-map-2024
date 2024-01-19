import logo from "./logo.svg";
import "./App.css";
import Car from "./Components/classComponent";
import Car2 from "./Components/functonalComponent";
import Comment from "./Components/userComponent";

function App() {
  return (
    <div>
      hi
      <Comment
        avatarUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
        name="sam"
        text="Good boy"
      />
    </div>
  );
}

export default App;
