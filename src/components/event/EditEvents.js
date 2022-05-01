import React, { useEffect, useState } from 'react'
import EventForm from './EventForm'
import axios from 'axios'

const EditEvents = (props) => {
  const { userId, userType } = props
  const [selected, setSelected] = useState({
    id: '',
    artist: '',
    artistId: '',
    venue: '',
    venueId: '',
    date: '',
    time: ''
  })
  const [events, setEvents] = useState([])
  const [create, setCreate] = useState(false)
  const [eventItems, setEventItems] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (userType !== undefined && userId !== undefined) {
      let type = userType.slice(0, -1)
      axios.get(`https://api.hoveringrecords.com/hover/events/${type}/${userId}`)
        .then(response => {
          let data = response.data.Items
          setEvents(data)
          setSelected(data[0])
        })
        .then(() => {
          createTable(events)
          return (
            content(userType)
          )
        })
        .then(()=> {
          setLoaded(true)
        })
    }
    
  }, [userId, userType])

  const handleClick = (obj) => {
    setSelected(obj)
    setCreate(false)
  }

  let selectedClass  = 'bg-lightgray hover:text-xs dark:bg-gray dark:text-darkgray hover:bg-lightgray dark:hover:bg-gray hover:text-darkgray ease-in duration-300'
  let nonSelectedClass = 'bg-white hover:text-xs dark:bg-darkgray hover:bg-lightgray dark:hover:bg-gray hover:text-darkgray ease-in duration-300'

  const createTable = (events) => {
    setEventItems([])
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    events.sort((a, b) => {
      let da = new Date(`${a.date} ${a.time}`)
      let db =  new Date(`${b.date} ${b.time}`)
      return da - db
    })
    for (let [i, v] of events.entries()) {
      let nd = new Date(`${v.date} ${v.time}`)
      let date = `${month[nd.getMonth()]} ${nd.getDate()}, ${nd.getFullYear()}`
      let hr = nd.getHours()
      let time = `${ hr > 12 ? hr-12 : hr }:${nd.getMinutes().toString().padStart(2, '0')} ${hr > 12 ? 'PM' : 'AM'}`
      setEventItems(oldArray => [...oldArray, (
        <li key={`event${i}`} className={nonSelectedClass} data-href={`/events/${v.id}`}>
          <div onClick={() => handleClick(v)} className="grid grid-cols-11 cursor-pointer">
            <div className="col-span-3 py-2 ml-2 text-xxs text-center font-semibold uppercase tracking-widest">{v.artist}</div>
            <div className="col-span-3 py-2 ml-2 text-xxs text-center font-semibold uppercase tracking-widest">{v.venue}</div>
            <div className="col-span-3 py-2 ml-2 text-xs text-center font-semibold uppercase tracking-widest">{date}</div>
            <div className="col-span-2 py-2 ml-2 text-xs text-center font-semibold uppercase tracking-widest">{time}</div>
          </div>
        </li>
      )])
    }  
  }

  const handleSubmit = (obj) => {
    setEvents([...events, obj])
    createTable(events)
  }
  
  const content = (userType) => {
    if (userType === 'artists' || userType === 'venues') {
        return (
          <div className='flex gap-4 p-4 h-[80%] dark:bg-darkgray dark:text-lightgray ease-in duration-300'>
            <div className="border-r w-5/12 border-black dark:border-lightgray">
              {/* events table */}
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-11 max-h-[10%] text-xs border-b uppercase bg-white dark:bg-darkgray ease-in duration-300">
                  <div className="col-span-3 py-3 text-gray text-center">Artist</div>
                  <div className="col-span-3 py-3 text-gray text-center">Venue</div>
                  <div className="col-span-3 py-3 text-gray text-center">Date</div>
                  <div className="col-span-2 py-3 text-gray text-center">Time</div>
                </div>
                <ul id={`eventListEventsEdit`} className="max-h-full scrollbar-none scrollbar-track-lightgray overflow-y-scroll">
                  {eventItems}
                </ul>        
              </div>
            </div>
            <div className='w-7/12 border-black dark:border-lightgray'>
              {/* event form */}
              <EventForm userType={userType} userId={userId} selected={selected} create={create} setCreate={setCreate} handleSubmit={handleSubmit} />
            </div>
        </div>
        )
    }
    else {
      return (<div className='flex gap-4 p-4 h-[80%] dark:bg-darkgray dark:text-lightgray ease-in duration-300'>go away</div>)
    }
  }

    return(
      content(userType)
  )
}

export default EditEvents