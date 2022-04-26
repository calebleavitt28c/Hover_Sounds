import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AccountContext } from './Account'

const DeleteAccount = (props) => {
    let navigate = useNavigate()

    const { getSession } = useContext(AccountContext)

    const Delete = () => {
        getSession().then(({user}) => {
            user.deleteUser((err, result) => {
                if (err) {
                    console.log(err)
                    alert(err.message || JSON.stringify(err))
                } else {
                    console.log(result)
                    alert('User Deleted ' + JSON.stringify(result))
                    navigate('/home')
                }
            })
        })
    }

    const KeepAccount = (name) => {
        props.hideComponent(name)
    }

    return (
        <div>
            <p className="block text-center uppercase tracking-wide text-red text-xs font-bold">Are you sure you want to delete your account?</p>
            <div className='grid grid-cols-6 gap-2'>
                <div className='col-span-2'></div>
                <button
                    className="bg-primary col-span-1 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                    onClick={(event) => KeepAccount("showDeleteAccount")}
                >No</button>
                <button
                    className="bg-red col-span-1 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                    onClick={(event) => Delete()}
                >Yes</button>
                <div className='col-span-2'></div>
            </div>
        </div>
    )
}

export default DeleteAccount
