import React, { useState } from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

const MerchForm = (props) => {

    const [itemName, setItemName] = useState('') 
    const [price, setPrice] = useState('') 
    const [userId] = useState(props.userId) 
    const [imageFile, setImageFile] = useState('') 
    const [quantity, setQuantity] = useState('') 

    const createMerch = (event) => {
        event.preventDefault()
        axios.put('https://api.hoveringrecords.com/hover/store', {
            artistId: userId,
            id: uuidv4(),
            image: imageFile,
            name: itemName,
            price: parseFloat(price),
            stock: parseInt(quantity)
        })
        .then(response => {
            console.log(response)
            toast.success(`Item successfully added to your store`, {
                position: 'bottom-right',
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
            })
            props.hideComponent('showMerchForm') 
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
            toast.error(`An error occurred adding your merch. Check your input.`, {
                position: 'bottom-right',
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
            })
        })
    }

    const BackToStore = (name) => {
        props.hideComponent(name)
    }

   return (
       <div>
            <button 
                className="bg-gray col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                onClick={(event) => BackToStore('showMerchForm')}
            >◄ Back</button><br></br><br></br>
           <label className="block text-center uppercase tracking-wide text-gray text-xs font-bold mb-2">Item Details</label>
           <form className="grid grid-cols-4 gap-2" onSubmit={createMerch}>
                <input
                    className="appearance-none col-span-4 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="itemName"
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(event) => setItemName(event.target.value)}
                ></input>

                <input
                    className="appearance-none col-span-4 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="merch-images" 
                    id="img" 
                    placeholder="Enter Image Web Address"
                    value={imageFile}
                    onChange={(event) => setImageFile(event.target.value)}
                ></input>

                <input
                    className="appearance-none col-span-4 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="price"
                    placeholder="Item Price"
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                ></input>

                <input
                    className="appearance-none col-span-4 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="quantity"
                    placeholder="Quantity"
                    type="number"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                ></input><br></br>

                <button 
                    className="bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                    type="submit"
                >Create Merch</button>
           </form>
           <ToastContainer />
       </div>
   )
}

export default MerchForm