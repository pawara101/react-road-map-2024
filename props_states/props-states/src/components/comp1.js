import React, { Component } from 'react'

function MyFunctionalComponent(props){

    const data1 = +props.data1;
    const data2 = +props.data2;

    const data3 = data1 + data2;

    return(
        <div>
            <h2>Data 1 : {data1}</h2>
            <h2>Data 2 : {data2}</h2>

            <h1>Data 3 : {data3}</h1>
        </div>

    );
}

function ComponentFunc(props) {
    const funcProp = props.funcProp;
    funcProp();
    return null;
  }

export default ComponentFunc;