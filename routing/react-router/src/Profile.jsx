import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const Navigate = useNavigate();
  return (
    <div>
        <h1>Profile</h1>

        <button onClick={() => {console.log("Back Button clicked!");
        Navigate(-1)}}>Back</button>
    </div>
  )
}

export default Profile;