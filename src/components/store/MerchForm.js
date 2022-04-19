import React, { useState } from "react"

const MerchForm = () => {
   const [itemName, setItemName] = useState('') 
   const [price, setPrice] = useState('') 
   const [artistId, setArtistId] = useState('') 
   const [imageFile, setImageFile] = useState('') 
   const [quantity, setQuantity] = useState('') 

    const createMerch = (event) => {
        //TODO: call Lambda Function that will PUT this new merch item into the right table
    }

   return (
       <div>
           <label>Event Details</label>
           <form onSubmit={createMerch}>
                {/* <input
                    name="artistId"
                    placeholder=""
                    value={artistId}
                    onChange={(event) => setArtistId(event.target.value)}
                ></input><br></br> */}

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
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                ></input><br></br>

                <input
                    name="quantity"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                ></input><br></br>

                <button type="submit">Create Merch</button>
           </form>
       </div>
   )
}

export default MerchForm