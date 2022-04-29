import React from 'react'
import { Link } from 'react-router-dom'

const EditEventsTable = (props) =>  {

  let selectedClass = 'bg-lightgray hover:text-xs dark:bg-gray dark:text-darkgray hover:bg-lightgray dark:hover:bg-gray hover:text-darkgray ease-in duration-300'
  let nonSelectedClass = 'bg-white hover:text-xs dark:bg-darkgray hover:bg-lightgray dark:hover:bg-gray hover:text-darkgray ease-in duration-300'

  const handleClick = (v) => {
    //props.setSelected(v)
  }

  const { selected } = props
  const eventItems = []
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  for (let [i, v] of props.events.entries()) {
    let nd = new Date(`${v.date} ${v.time}`)
    let date = `${month[nd.getMonth()]} ${nd.getDay()}, ${nd.getFullYear()}`
    let hr = nd.getHours()
    let time = `${ hr > 12 ? hr-12 : hr }:${nd.getMinutes().toString().padStart(2, '0')} ${hr > 12 ? 'PM' : 'AM'}`
    if (v.id === selected) {
      eventItems.push(
        <li key={`event${i}`} className={selectedClass} data-href={`/events/${v.id}`}>
          <Link to={`/events/edit/${v.id}`} className="grid grid-cols-10 cursor-pointer">
            <div className="col-span-3 py-2 ml-2 text-xs text-center font-semibold uppercase tracking-widest">{v.artist}</div>
            <div className="col-span-3 py-2 ml-2 text-xs text-center font-semibold uppercase tracking-widest">{v.venue}</div>
            <div className="col-span-2 py-2 ml-2 text-xs text-center font-semibold uppercase tracking-widest">{date}</div>
            <div className="col-span-2 py-2 ml-2 text-xs text-center font-semibold uppercase tracking-widest">{time}</div>
          </Link>
        </li>
      )
    }
    else {
      eventItems.push(
        <li key={`event${i}`} className={nonSelectedClass} data-href={`/events/${v.id}`}>
          <Link to={`/events/edit/${v.id}`} className="grid grid-cols-10 cursor-pointer">
            <div className="col-span-3 py-2 ml-2 text-xs text-center font-semibold uppercase tracking-widest">{v.artist}</div>
            <div className="col-span-3 py-2 ml-2 text-xs text-center font-semibold uppercase tracking-widest">{v.venue}</div>
            <div className="col-span-2 py-2 ml-2 text-xs text-center font-semibold uppercase tracking-widest">{date}</div>
            <div className="col-span-2 py-2 ml-2 text-xs text-center font-semibold uppercase tracking-widest">{time}</div>
          </Link>
        </li>
      )
    }
  }

  return(
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-10 max-h-[10%] text-xs border-b uppercase bg-white dark:bg-darkgray ease-in duration-300">
        <div className="col-span-3 py-3 text-gray text-center">Artist</div>
        <div className="col-span-3 py-3 text-gray text-center">Venue</div>
        <div className="col-span-2 py-3 text-gray text-center">Date</div>
        <div className="col-span-2 py-3 text-gray text-center">Time</div>
      </div>
      <ul id={`eventList${props.page}`} className="max-h-full scrollbar-none scrollbar-track-lightgray overflow-y-scroll">
        {eventItems}
      </ul>        
    </div>
  );
}


export default EditEventsTable