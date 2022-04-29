import React, { useEffect, useState } from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid'
import { toast, ToastContainer } from 'react-toastify'

const EventForm = (props) => {
    const { selected, userId, userType } = props

    const [artist, setArtist] = useState('')
    const [artistId, setArtistId] = useState('')
    const [venue, setVenue] = useState('')
    const [venueId, setVenueId] = useState('')
    const [eventDate, setEventDate] = useState('')
    const [eventTime, setEventTime] = useState('')

    const [buttonText, setButtonText] = useState('Update Event')
    const [create, setHideButton] = useState(props.create)

    const createEvent = () => {
        let id
        create ? id=uuidv4() : id=selected.id
        axios.put('https://api.hoveringrecords.com/hover/events', {
                id,
                artist,
                artistId,
                venue,
                venueId,
                date: eventDate,
                time: eventTime
            })
            .then(response => {
                toast.success((create ? 'Created successfully' : 'Updated successfully'), {
                    position: 'bottom-right',
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true
                  })
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
                toast.error('An error occurred.', {
                    position: 'bottom-right',
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true
                  })
            })
    }

    const newEvent = () => {
        window.history.pushState({}, {}, '/events/edit')
        if (userType === 'artist') {
            setVenue('')
            setVenueId('')
        }
        else if (userType === 'venues') {
            setArtist('')
            setArtistId('')
        }
        setEventDate('')
        setEventTime('')

        setButtonText('Create Event')
        setHideButton(true)
    }

    useEffect(() => {
        if (userType === 'artist') {
            setVenueId(selected.venueId)
            setArtistId(userId)
        }
        else if (userType === 'venues') {
            setArtistId(selected.artistId)
            setVenueId(userId)
        }
        setArtist(selected.artist)
        setVenue(selected.venue)
        setEventDate(selected.date)
        setEventTime(selected.time)
    }, [selected, setArtistId, setVenueId, userType, userId])
    
   return (
       <div className="flex flex-col place-items-center">
            <label className="col-span-3 block text-center uppercase tracking-wide text-gray text-xs font-bold mb-2">
                Event Details
            </label>
            <form className="grid grid-cols-4 gap-2 w-2/3">
                <input
                    name="artist"
                    placeholder="Artist"
                    value={artist}
                    onChange={(event) => setArtist(event.target.value)}
                    className={`appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 disabled:bg-lightgray`}
                    disabled={userType === 'artists' ? true : false } 
                ></input>

                <input
                    name="artistId"
                    placeholder="Artist ID"
                    value={artistId}
                    onChange={(event) => setArtistId(event.target.value)}
                    className={`appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 disabled:bg-lightgray`}
                    disabled={userType === 'artists' ? true : false } 
                ></input>

                <input
                    name="venue"
                    placeholder="Venue"
                    value={venue}
                    onChange={(event) => setVenue(event.target.value)}
                    className={`appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 disabled:bg-lightgray`}
                    disabled={userType === 'venues' ? true : false } 
                ></input>

                <input
                    name="venueId"
                    placeholder="Venue"
                    value={venueId}
                    onChange={(event) => setVenueId(event.target.value)}
                    className={`appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 disabled:bg-lightgray`}
                    disabled={userType === 'venues' ? true : false } 
                ></input>

                <input
                    name="date"
                    placeholder="Date"
                    type="date"
                    value={eventDate}
                    onChange={(event) => setEventDate(event.target.value)}
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></input>

                <input
                    name="time"
                    placeholder="Event Start Time"
                    type="time"
                    value={eventTime}
                    onChange={(event) => setEventTime(event.target.value)}
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></input>
            </form>
            <div className="grid grid-cols-4 gap-2 w-2/3 mt-4">
                { create ? (
                    <div />
                )
                :
                (
                    <button onClick={newEvent} className={`bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300`}>
                        Create New Event
                    </button>
                )}
                <button onClick={createEvent} className="bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">
                    {buttonText}
                </button>
            </div>
            <ToastContainer />
       </div>
   )
}

export default EventForm