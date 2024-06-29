import React, { useState } from 'react'

function Tour({
  id,
  image,
  rating,
  title,
  price,
  description,
  category,
  removeTours,
}) {
  const [readMore, setReadMore] = useState(true)
  return (
    <div className='tour'>
      <img src={image} alt={category} className='img' />
      <span className='tag'>{price}$</span>
      <h5 className='name'>{title}</h5>
      {readMore ? (
        <div>
          <p className='info'>{description.slice(0, 100)}...</p>
          <button className='info-btn' onClick={() => setReadMore(!readMore)}>
            Read More
          </button>
        </div>
      ) : (
        <div>
          <p className='info'>{description}</p>
          <button className='info-btn' onClick={() => setReadMore(!readMore)}>
            Read less
          </button>
        </div>
      )}
      <button
        className='btn btn-block delete-btn'
        onClick={() => removeTours(id)}
      >
        Not Intrested
      </button>
    </div>
  )
}

export default Tour
