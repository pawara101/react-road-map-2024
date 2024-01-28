import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Profile from './Profile';
import About from './About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* only BrowserRouter will be routed here h1 part is static over all pages */}
        <h1>Static Content</h1> 
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Profile' element={<Profile></Profile>}></Route>
          <Route path='/About' element={<About></About>}></Route>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
