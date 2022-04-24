import React, { useState, useEffect } from "react"
import axios from "axios"

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
import { createHashHistory } from "history"

const UserInfo = (props) => {
    const { userType, userId } = props

    const [showAttributes, setShowAttributes] = useState(true)
    const [showEditAttributes, setShowEditAttributes] = useState(false)
    const [showChangeEmail, setShowChangeEmail] = useState(false)
    const [showChangePassword, setShowChangePassword] = useState(false)
    const [showDeleteAccount, setShowDeleteAccount] = useState(false)

    const [fanAttributes, setFanAttributes] = useState({})
    const [artistAttributes, setArtistAttributes] = useState({})
    const [venueAttributes, setVenueAttributes] = useState({})

    
    useEffect(() => {
        switch (userType) {
            case 'fans':
                axios.get(`https://api.hoveringrecords.com/hover/fans/${userId}`)
                    .then(response => {
                        setFanAttributes(fanAttributes => ({
                            ...fanAttributes,
                            ...response.data.Item,
                        }))
                    })
            break
            case 'artists':
                axios.get(`https://api.hoveringrecords.com/hover/artists/${userId}`)
                    .then(response => {
                        setArtistAttributes(artistAttributes => ({
                            ...artistAttributes,
                            ...response.data.Item,
                        }))
                    })
            break
            case 'venues':
                axios.get(`https://api.hoveringrecords.com/hover/venues/${userId}`)
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
    }, [])
    
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
                    <div className="col-span-1"></div>
                    <div className="col-span-1">
                        <Status />
                        <p className="block text-center uppercase tracking-wide text-gray text-xs font-bold">User attributes:</p>
                        <div>
                            {userType == 'fans' && (
                                <FanInfo fanAttributes={fanAttributes}/>
                            )}
                            {userType == 'artists' && (
                                <ArtistInfo artistAttributes={artistAttributes}/>
                            )}
                            {userType == 'venues' && (
                                <VenueInfo venueAttributes={venueAttributes}/>
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
                    </div>
                    <div className="col-span-1"></div>
                </div>
            )}
            <div>
                {showEditAttributes && (
                    <div>
                        {userType == 'fans' && (
                            <FanProfileForm
                                userId={userId}
                                fanAttributes={fanAttributes}
                                hideComponent={hideComponent}
                            />
                        )}
                        {userType == 'artists' && (
                            <ArtistProfileForm
                                artistAttributes={artistAttributes}
                                hideComponent={hideComponent}
                                />
                                )}
                        {userType == 'venues' && (
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

export default UserInfo