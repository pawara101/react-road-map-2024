import { Component } from 'react';
import ReactDOM from 'react-dom';

function Car2(props) {
    return(
       <div>
        <h2>This is Functional Component..... with props</h2>
        <h1>My favourite car is {props.name}</h1>
       </div> 
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Car2 name="test"/>;
root.render(element);
export default Car2;