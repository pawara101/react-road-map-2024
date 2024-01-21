import React from "react";

export default function DisplayUser(props) {
    const user = props.user;


  return (
    <div>
      <h1>User Details</h1>
        <h3>Name : {user.name}</h3>
    </div>
  );
}
