import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function About() {
  const Navigate = useNavigate();
  return (
    <div>
        <h1>About</h1>
        <button onClick={()=>{Navigate(-1);
          console.log(`Back to Home Page`);
        }}>Back</button>
        <br></br>
        <button onClick={() => Navigate("/Profile")}>Profile Page</button>
    </div>
  )
}

export default About