import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const Navigate = useNavigate();
  return (
    <div>
        <h1>Home Page</h1>
        <Link to="/Profile"> Profile Page</Link>
        <br></br><br></br>
        <Link to="/About"> About Page</Link>
        <br></br><br></br>
        <button onClick={() => Navigate("/Profile")}>Profile Page</button>
    </div>
  )
}

export default Home