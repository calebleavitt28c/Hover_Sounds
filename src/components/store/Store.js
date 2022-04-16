import React, { useEffect, useState } from 'react'
import MerchTable from './MerchTable'
import Cart from './Cart'
import data from './data'

const Store = () => {
    const { items } = data //TODO: change this to API call
    const [cartItems, setCartItems] = useState([])
    const onAdd = (item) => {
        const exist = cartItems.find(x => x.itemID === item.itemID)
        if (exist) {
            setCartItems(
                cartItems.map(x => 
                    x.itemID === item.itemID ? {...exist, qty: exist.qty + 1} : x
                )
            )
        } else {
            setCartItems([...cartItems, {...item, qty: 1 }])
        }
    }
    const onRemove = (item) => {
        const exist = cartItems.find((x) => x.itemID === item.itemID)
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.itemID !== item.itemID))
        } else {
            setCartItems(
                cartItems.map((x) => 
                    x.itemID === item.itemID ? { ...exist, qty: exist.qty - 1}: x
                )
            )
        }
    }

    return (
        <div className="grid grid-cols-12 gap-4 p-4 h-full dark:text-lightgray dark:border-primary">
            <div className="col-span-3 border-2 border-black dark:border-primary">
                <MerchTable 
                    items={items}
                    onAdd={onAdd}
                />
            </div>
            <div className="col-span-3 border-2 border-black dark:border-primary">
                <Cart 
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                />
            </div>
            <div>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Store