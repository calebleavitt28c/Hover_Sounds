import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'

import Status from "../auth/Status"
import FanInfo from "./FanInfo"
import ArtistInfo from "./ArtistInfo"
import VenueInfo from "./VenueInfo"
import FanProfileForm from "../fan/FanProfileForm"
import ArtistProfileForm from "../artist/ArtistProfileForm"
import VenueProfileForm from "../venue/VenueProfileForm"
import ChangeEmail from "../auth/ChangeEmail"
import ChangePassword from "../auth/ChangePassword"
import DeleteAccount from "../auth/DeleteAccount"
import Cookies from "js-cookie"

const Profile = (props) => {
    const { userType, userId } = props

    const UT = Cookies.get('userType')
    const UID = Cookies.get('userId')

    const [showAttributes, setShowAttributes] = useState(true)
    const [showEditAttributes, setShowEditAttributes] = useState(false)
    const [showChangeEmail, setShowChangeEmail] = useState(false)
    const [showChangePassword, setShowChangePassword] = useState(false)
    const [showDeleteAccount, setShowDeleteAccount] = useState(false)

    const [fanAttributes, setFanAttributes] = useState({})
    const [artistAttributes, setArtistAttributes] = useState({})
    const [venueAttributes, setVenueAttributes] = useState({})

    
    useEffect(() => {
        switch (UT) {
            case 'fans':
                axios.get(`https://api.hoveringrecords.com/hover/fans/${UID}`)
                    .then(response => {
                        setFanAttributes(fanAttributes => ({
                            ...fanAttributes,
                            ...response.data.Item,
                        }))
                    })
            break
            case 'artists':
                axios.get(`https://api.hoveringrecords.com/hover/artists/${UID}`)
                    .then(response => {
                        setArtistAttributes(artistAttributes => ({
                            ...artistAttributes,
                            ...response.data.Item,
                        }))
                    })
            break
            case 'venues':
                axios.get(`https://api.hoveringrecords.com/hover/venues/${UID}`)
                    .then(response => {
                        setVenueAttributes(venueAttributes => ({
                            ...venueAttributes,
                            ...response.data.Item,
                        }))
                    })
            break
            default:
                break
        }
    }, [UT, UID])
    
    const hideComponent = (name) => {
        switch (name) {
            case "showAttributes":
                setShowAttributes(!showAttributes)
                setShowEditAttributes(!showEditAttributes)
                break
            case "showChangeEmail":
                setShowAttributes(!showAttributes)
                setShowChangeEmail(!showChangeEmail)
                break
            case "showChangePassword":
                setShowAttributes(!showAttributes)
                setShowChangePassword(!showChangePassword)
                break
            case "showDeleteAccount":
                setShowAttributes(!showAttributes)
                setShowDeleteAccount(!showDeleteAccount)
                break
            default:
                break
        }
    }

    return (
        <div>
            {showAttributes && (
                <div id="attributes" className="grid grid-cols-3">
                    <div />
                    <div className="col-span-1">
                        <Status />
                        <p className="block text-center uppercase tracking-wide text-gray text-xs font-bold">User attributes:</p>
                        <div>
                            {UT === 'fans' && (
                                <FanInfo fanAttributes={fanAttributes} />
                            )}
                            {UT === 'artists' && (
                                <ArtistInfo artistAttributes={artistAttributes} />
                            )}
                            {UT === 'venues' && (
                                <VenueInfo venueAttributes={venueAttributes} />
                            )}
                        </div>
                        <div className="grid grid-cols-4 gap-2 mt-2">
                            <button className="bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                                onClick={(event) => hideComponent('showAttributes')}
                            >Edit Profile</button>
                            <button className="bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                                onClick={(event) => hideComponent('showChangeEmail')}
                            >Change Email</button>


                            <button className="bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                                onClick={(event) => hideComponent('showChangePassword')}
                            >Change Password</button>

                            <button className="bg-red col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                                onClick={(event) => hideComponent('showDeleteAccount')}
                            >Delete Account</button>

                        </div>
                        <div className="grid grid-cols-4 gap-2 mt-4">
                            {UT === 'artists' && (
                                <Link to={`/store/${artistAttributes.id}`} className="col-span-2 py-2 px-4 bg-primary hover:bg-secondary text-center text-white font-bold rounded focus:outline-none focus:shadow-outline ease-in duration-300">Edit Your Store</Link>
                            )}
                            {(UT === 'artists' || UT === 'venues') && (
                                <Link to={`/events/edit`} className="bg-primary col-span-2 text-center hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">Edit Your Events</Link>
                            )}
                        </div>
                    </div>
                    <div />
                </div>
            )}
            <div>
                {showEditAttributes && (
                    <div>
                        {UT === 'fans' && (
                            <FanProfileForm
                                userId={UID}
                                fanAttributes={fanAttributes}
                                hideComponent={hideComponent}
                            />
                        )}
                        {UT === 'artists' && (
                            <ArtistProfileForm
                                artistAttributes={artistAttributes}
                                hideComponent={hideComponent}
                                />
                                )}
                        {UT === 'venues' && (
                            <VenueProfileForm
                                venueAttributes={venueAttributes}
                                hideComponent={hideComponent}
                            />
                        )}
                    </div>
                )}
            </div>
            <div>
                {showChangeEmail && (
                    <ChangeEmail 
                        hideComponent={hideComponent}
                    />
                )}
            </div>
            <div>
                {showChangePassword && (
                    <ChangePassword 
                        hideComponent={hideComponent}
                    />
                )}
            </div>
            <div>
                {showDeleteAccount && (
                    <DeleteAccount 
                        hideComponent={hideComponent}
                    />
                )}
            </div>
        </div>
    )
}

export default Profile