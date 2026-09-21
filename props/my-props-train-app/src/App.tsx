import { useState } from 'react'
import './App.css'

function App() {
  console.log(`reactLogo`)

  return (
    <>
        <h1>Test</h1>
    </>
  )
}


function welcome(props) {
    return(
        <>
            <h1>Hello, {props.name}</h1>
        </>
    )
}
export default {App, welcome}
