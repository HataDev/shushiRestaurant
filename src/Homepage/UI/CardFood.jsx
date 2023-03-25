import React from 'react'
import './card-Food.css'

function CardFood({props}) {

  // const {dish, image, name, className} = prop;

  return (
    <div className='cardfood'>
        <img src={props.image} alt="" />
        <div className='infoFood'>
          <button className='btn btn__title titleOfSection'>{props.dish}</button>
          <button className='btn btn__name contentOfSection'>{props.name}</button>
        </div>
    </div>
  )
}

export default CardFood