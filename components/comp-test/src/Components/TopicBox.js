import React from 'react'

export default function TopicBox(props) {

const topic_text = "Hello babies"
const items = "Very good"


// food_prices = { sausages : 250 , burger:900}
  return (
    <div>
        <div className='topicBox'>
                <h1>My Favourite meal is {props.meal} and it costs me {props.price}</h1>
                {props.children}
        </div>
    </div>
  )
}
