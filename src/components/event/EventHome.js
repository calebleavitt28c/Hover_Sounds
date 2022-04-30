import React from 'react'

const EventHome = (props) => {

  return(
    <div className="flex items-center justify-between">
      <h1 className='ml-2 text-2xl text-center font-semibold uppercase tracking-widest'>{props.date} {props.time}</h1>
    </div>
  )
}

export default EventHome