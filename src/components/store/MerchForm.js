import React, { useEffect, useState } from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

const MerchForm = (props) => {

    const [itemName, setItemName] = useState('') 
    const [price, setPrice] = useState('') 
    const [userId, setUserId] = useState(props.userId) 
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
            props.hideComponent('showMerchForm') //takes you back to the store
        })
    }

    const BackToStore = (name) => {
        props.hideComponent(name)
    }

   return (
       <div>
           <button onClick={(event) => BackToStore('showMerchForm')}>Back Arrow</button><br></br>
           <label>Event Details</label>
           <form onSubmit={createMerch}>
                <input
                    name="itemName"
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(event) => setItemName(event.target.value)}
                ></input><br></br>

                <input
                    name="merch-images" 
                    id="img" 
                    placeholder="Enter Image Web Address"
                    value={imageFile}
                    onChange={(event) => setImageFile(event.target.value)}
                ></input><br></br>

                <input
                    name="price"
                    placeholder="Item Price"
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                ></input><br></br>

                <input
                    name="quantity"
                    placeholder="Quantity"
                    type="number"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                ></input><br></br>

                <button type="submit">Create Merch</button>
           </form>
       </div>
   )
}

export default MerchForm