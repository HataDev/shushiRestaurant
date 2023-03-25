import React from 'react'
import './card-Blog.css'

function CardBlog({props}) {

  const {imgCS, date, title, content} = props;

  return (
    <div className='cardBlog'>
      <img src={imgCS} alt=""></img>
        <h6 className='cardBlog__date'>{date}</h6>
        <h3 className='cardBlog__title'>{title}</h3>
        <p className='cardBlog__content'>{content}</p>
    </div>
  )
}

export default CardBlog