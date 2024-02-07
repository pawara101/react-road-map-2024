import React from 'react'

const users = [
    { id: '1', firstName: 'Robin', lastName: 'Wieruch' },
    { id: '2', firstName: 'Dennis', lastName: 'Wieruch' },
  ];

function UserList() {


  if (users.length==0){
    return (<div>
        <h1>User List</h1>
    <p>No users.... Please Check</p>
    </div>)
  }
  else{
    return (
    <div>
        <h1>User List</h1>
        <p>User are available</p>
    </div>
    )
  }
}

export default UserList
