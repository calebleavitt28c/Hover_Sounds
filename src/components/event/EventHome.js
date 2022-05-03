import React from 'react'

const EventHome = (props) => {

  return(
    <div className="flex items-center justify-between">
      <h1 className='ml-2 text-base text-center font-semibold uppercase tracking-widest'>{props.date} {props.time}</h1>
    </div>
  )
}

export default EventHome