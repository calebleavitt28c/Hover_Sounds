import React, { useState, useEffect } from 'react'

const MerchItem = (props) => {
  const { item, onAdd, deleteItem } = props

  return(
    <li>
      <div className="grid grid-cols-5 grid-row-4 gap-2 p-4 h-full overflow-hidden rounded-md shadow-lg">
        <div className="col-span-2 row-span-3">
          <h1>{item.name}</h1>
          <p>${item.price}</p>
          <p>{item.stock} in stock</p>
        </div>
        <div className="col-span-3 row-span-3">
          <img className="h-full"
            src={item.image} alt={item.name} height="400px" width="auto"/>
        </div>
        <div className="col-end-6 col-span-3 ">
          {onAdd && (
            <button className="w-full r bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
              onClick={() => onAdd(item)}>Add To Cart</button>  
          )}
          {deleteItem && (
            <div>
              <br></br>
              <button className="bg-red col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                onClick={() => deleteItem(item)}>Delete</button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MerchItem