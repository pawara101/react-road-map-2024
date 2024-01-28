import React from 'react'
const name = "Pawara"
const post = "student"
// const myobj = {
//     name : "Pawara Tharkana",
//     post : "Student",
//     city : "Kalubowila"
// }

function Main(props) {
console.log(props)
  return (
    <div>
        <ul>
            <li>{props.name}</li>
            <li>{props.post}</li>
        </ul>
        {/* <ul>
            <li>{myobj.name}</li>
            <li>{myobj.post}</li>
            
        </ul> */}
        {props.children}
    </div>
  )
}

export default Main