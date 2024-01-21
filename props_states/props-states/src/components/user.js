import React from "react";

export default function DisplayUser(props) {
  const user = props.user;
  const users = props.users;

  return (
    <div>
      {users.map((user) => (
        <div>
          <p>
            Name: <span>{user.name}</span>
          </p>
          <p>
            Age: <span>{user.age}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
