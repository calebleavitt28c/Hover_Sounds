import React, { useState, useEffect } from 'react'

const MerchItem = (props) => {
  const { item, onAdd, deleteItem } = props

  return(
    <li className="grid grid-cols-5 grid-row-4 gap-2 p-4 h-full overflow-hidden rounded-md shadow-lg">
      <div className='flex col-span-5 gap-2'>
        <div className="w-1/3 grid grid-rows-3 content-between h-48 text-center pt-2 bg-lightgray dark:bg-darkgray dark:shadow-sm dark:shadow-gray rounded-2xl">
          <h1 className="p-2 h-1/3"><strong>{item.name}</strong></h1>
          <div />
          <div className='grid h-2/3'>
            <p className='text-lg'>${item.price}</p>
            <p className=''>{item.stock} in stock</p>
          </div>
        </div>
        <div className="w-2/3 h-48">
          <img className="h-48 rounded-2xl"
            src={item.image} alt={item.name} />
        </div>
      </div>
      <div className="col-start-1 col-span-5">
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
    </li>
  );
}

export default MerchItem