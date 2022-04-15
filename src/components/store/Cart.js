import React, { useEffect, useState } from 'react'
import MerchItem from './MerchItem'

const Cart = (props) => {
    const { cartItems, onAdd, onRemove } = props

    const subotal = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const taxPrice = subotal * 0.14
    const total = subotal + taxPrice

    return (
        <div>
            <h2>Cart</h2>
            <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.itemID} className='row'>
                    <div>{item.name}</div>
                    <div>
                        <button onClick={() => onAdd(item)} class='add'>+</button>
                        <button onClick={() => onRemove(item)} class='remove'>-</button>
                    </div>
                    <div>
                        {item.qty} * ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div>
                        <div>Subtotal</div>
                        <div>${subotal.toFixed(2)}</div>
                    </div>
                    <div>
                        <div>Tax</div>
                        <div>${taxPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        <div><strong>Total</strong>Total</div>
                        <div><strong>${total.toFixed(2)}</strong></div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart