import logo from "./logo.svg";
import "./App.css";
import Loggedin from "./Components/Loggedin";
import LoggedOut from "./Components/LoggedOut";
import UserList from "./Components/UserList";
const loggedIN = false;

const names = ["Nimal", "Saman", "Kamal", "Jothipala","Soysa"];
const nameCount = names.length;

function App() {
  console.log(nameCount);
  return (
//     <div className="App">
//       {/* {nameCount > 0 &&
//         names.map((name) => {
//           return <ul>{name}</ul>;
//         })}
//       {nameCount == 0 && <p>Nothing provided</p>} */}

// {/* Using ternery operator */}
//       {nameCount > 0 ? names.map((name) => {
//           return <ul>{name}</ul>;
//         }) : <p>Nothing provided</p>}
//     </div>

<UserList></UserList>
  );
}

export default App;
