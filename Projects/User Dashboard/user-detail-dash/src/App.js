import logo from './logo.svg';
import './App.css';
import UserDetail from './Components/UserDetail';
import Dash from './Components/Dash';
import Bottom_Page from './Components/Bottom_Page';
function App() {
  return (
    <div className="App">
      <Dash></Dash>
      <UserDetail></UserDetail>
      <Bottom_Page></Bottom_Page>
    </div>
  );
}

export default App;
