import React, { useEffect, useState } from 'react'
import MerchItem from './MerchItem'
import Checkout from './Checkout'

const Cart = (props) => {
    const { cartItems, onAdd, onRemove } = props

    const subotal = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const taxPrice = subotal * 0.14
    const total = subotal + taxPrice

    const cart = {
        description: 'Online order from Hover Sounds',
        item_total: subotal,
        tax_total: taxPrice,
        items: cartItems
    }

    return (
        <div className="">
            <h2>Cart</h2>
            <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.itemID} className='row'>
                    <div>{item.name}</div>
                    <div>
                        <button onClick={() => onAdd(item)} id='add'>+</button>
                        <button onClick={() => onRemove(item)} id='remove'>-</button>
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
                        <div><strong>Total</strong></div>
                        <div><strong>${total.toFixed(2)}</strong></div>
                    </div>
                </>
            )}
            <div>
                <Checkout cart={cart}/>
            </div>
        </div>
    )
}

export default Cart