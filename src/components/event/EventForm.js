import React, { useState } from "react"

const EventForm = () => {
   const [headlineArtist, setHeadLineArtist] = useState('') 
   const [openArtistOne, setOpenArtistOne] = useState('') 
   const [openArtistTwo, setOpenArtistTwo] = useState('') 
   const [venue, setVenue] = useState('') 
   const [eventDate, setEventDate] = useState('') 
   const [eventTime, setEventTime] = useState('') 

    const createEvent = (event) => {
        //TODO: call Lambda Function that will PUT this new event into the event table
    }

   return (
       <div>
           <label>Event Details</label>
           <form onSubmit={createEvent}>
                <input
                    name="headlineArtist"
                    placeholder="Headline Artist"
                    value={headlineArtist}
                    onChange={(event) => setHeadLineArtist(event.target.value)}
                ></input><br></br>

                <input
                    name="openArtistOne"
                    placeholder="First Opening Artist"
                    value={openArtistOne}
                    onChange={(event) => setOpenArtistOne(event.target.value)}
                ></input><br></br>

                <input
                    name="openArtistTwo"
                    placeholder="Second Opening Artist"
                    value={openArtistTwo}
                    onChange={(event) => setOpenArtistTwo(event.target.value)}
                ></input><br></br>

                <input
                    name="venue"
                    placeholder="Venue"
                    value={venue}
                    onChange={(event) => setVenue(event.target.value)}
                ></input><br></br>

                <input
                    name="date"
                    placeholder="Date"
                    type="date"
                    value={eventDate}
                    onChange={(event) => setEventDate(event.target.value)}
                ></input><br></br>

                <input
                    name="time"
                    placeholder="Event Start Time"
                    type="time"
                    value={eventTime}
                    onChange={(event) => setEventTime(event.target.value)}
                ></input><br></br>

                <button type="submit">Create Event</button>
           </form>
       </div>
   )
}

export default EventForm