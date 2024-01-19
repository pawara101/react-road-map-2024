import React from "react";
import ReactDOM from "react-dom";

function Comment(props) {
    
  return (
    <div className="comment">
      <div className="userInfo">
        <img
          className="Avatar"
          src={props.avatarUrl}  // Change props.author.avatarUrl to props.avatarUrl
          alt={props.name}      // Change props.author.name to props.name
        />
        <div className="UserInfo-name">Name : {props.name}</div>
      </div>
      <div className="comment-text">Comment :{props.text}</div>
      <div className="comment-date"> Date : {props.date}</div>
    </div>
  );
}

let currentDate = new Date();
    console.log(currentDate);
const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <Comment avatarUrl="url" name="sam" text="good" date={currentDate.getDate()}/>;

root.render(element);
export default Comment;

