import React, { useState, useEffect } from 'react'

const MerchItem = (props) => {
  const { item, onAdd, deleteItem } = props

  return(
    <li>
      <div>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <p>{item.stock} in stock</p>
      </div>
      <div>
        <img src={item.image} alt={item.name} height="400px" width="auto"/>
      </div>
      {onAdd && (
        <button onClick={() => onAdd(item)}>Add To Cart</button>  
      )}
      {deleteItem && (
        <div>
          <br></br>
          <button onClick={() => deleteItem(item)}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default MerchItem