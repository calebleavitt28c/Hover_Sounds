import axios from 'axios'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import MerchTable from './MerchTable'

const EditMerch = (props) => {
    const { items, artistId } = props

    const BackToStore = (name) => {
        props.hideComponent(name)
    }

    const DeleteItem = (item) => {
        axios.delete(`https://api.hoveringrecords.com/hover/store/${artistId}/${item.id}`)
        .then(response => {
            console.log(response)
            toast.success(`Item has been deleted`, {
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
            toast.error(`There was an error deleting your item from the store`, {
                position: 'bottom-right',
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
              })
        })
    }

    return (
        <div>
            <button 
                className="bg-gray col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                onClick={(event) => BackToStore('showEditMerch')}
            >◄ Back</button><br></br>
            <div className="block text-center uppercase tracking-wide text-gray text-xs font-bold mb-2" >Manage the items in your Store</div>
            <div className="col-span-3 border-2 border-black dark:border-primary">
                <MerchTable 
                    items={items}
                    deleteItem={DeleteItem}
                />
            </div>
            <div className="col-span-3 border-2 border-black dark:border-primary">

            </div>
            <ToastContainer />
        </div>
    )
}

export default EditMerch