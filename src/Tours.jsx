import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, removeTours }) => {
  return (
    <section className='tours'>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTours={removeTours} />
      })}
    </section>
  )
}

export default Tours
