import React from "react";

export default function DisplayUser(props) {
  const user = props.user;
  const users = props.users;
  const children = props.children;

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
          {children}
        </div>
      ))}
    </div>
  );
}
