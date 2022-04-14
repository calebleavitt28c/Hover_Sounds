import React, { useState, useEffect } from 'react'

const MerchItem = (props) => {
  const [itemID, setItemID] = useState(props.itemID)

  const addToCart = () => {
    props.addToCart(itemID)
  }

  return(
    <li onClick={addToCart}>
      <div>
        <h1>{props.itemName}</h1>
      </div>
      <div>
        <p>From {props.artist}</p>
      </div>
      <div>
        <p>${props.price}</p>
      </div>
      <div>
        <p>{props.quantity} of these items remaining</p>
      </div>
      <div>
        <img src={props.image} alt={props.itemName} height="400px" width="auto"/>
      </div>
    </li>
  );
}

export default MerchItem