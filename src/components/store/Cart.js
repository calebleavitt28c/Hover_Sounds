import React, { useEffect, useState } from 'react'
import MerchItem from './MerchItem'

const Cart = (props) => {
    const [total, setTotal] = useState('')
    const [merchItems, setMerchItems] = useState(props.merchItems)

    const checkout = () => {
        props.checkout()
    }

    useEffect(() => {
        let sub = 0.00
        for(let item of merchItems) {
            sub+=item.price
        }
        setTotal(sub)
    })

    const cartItems = []
    
    for (let item of merchItems) {
        cartItems.push(
            <MerchItem
                itemID={item.itemID} 
                itemName={item.itemName} 
                artist={item.artist} 
                price={item.price} 
                quantity={item.qty} 
                image={item.image} 
            />
        )
    }

    return (
        <div>
            <p>Total: ${total}</p>
            <ul>
                {merchItems}
            </ul>
            <button onClick={checkout}>Checkout</button>
        </div>
    )
}

export default Cart