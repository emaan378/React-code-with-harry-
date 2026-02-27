import React from 'react'
import "./Card.css"

const card = (props) => {
  return (
    <div className='card'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ0trsPU-Dr2FKqxjsqJgm8W6Uj-GDO_vKg&s"
      style={{border:"2px solid black"}}
      alt="" srcset="" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
  

    </div>
  )
}

export default card
