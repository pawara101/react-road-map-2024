import logo from './logo.svg';
import './App.css';
import UserDetail from './Components/UserDetail';
import Dash from './Components/Dash';
import Bottom_Page from './Components/Bottom_Page';
import SingleUserDetail from './Components/SingleUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Dash></Dash>
      <br></br>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserDetail />} />
        <Route path="/user/:userId" element={<SingleUserDetail />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
