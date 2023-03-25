import React from 'react'
import './card-Menu.css'

function CardMenu({props}) {
  return (
    <div className='cardMenu'>
        <div className='ourMenu__content'>
          <p className='ourMenu__food dostBox'>{props.name}</p>
          <p className='ourMenu__price'>{props.price}</p>
        </div>
        <p className='ourMenu__content'>
          <span className='ourMenu__explain'>{props.explain}</span>
          {
            props.note ? (
            <span className='ourMenu__note'>{props.note}</span>
            ) : ('')
          }
        </p>
    </div>
  )
}

export default CardMenu