import React, { useState, useEffect } from 'react'
import PayPal from './PayPal'

const Checkout = (props) => {
    const { cart } = props
    const [order, setOrder] = useState({})
    const [checkout, setCheckout] = useState(false)

    const createOrder = () => {
        setOrder(
            {
                description: cart.description,
                item_total: cart.item_total,
                tax_total: cart.tax_total,
            }
        )
    }


    return (
        <div>
            {checkout ? (<PayPal order={order}/>) : ( <button onClick={() => {setCheckout(true); createOrder()}}>Checkout</button> )}
        </div>
    )   
}

export default Checkout