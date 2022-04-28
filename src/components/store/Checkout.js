import React, { useState } from 'react'
import PayPal from './PayPal'

const Checkout = (props) => {
    const { cart } = props
    const [order, setOrder] = useState({})
    const [checkout, setCheckout] = useState(false)

    const createOrder = () => {
        if (cart.item_total === 0) {
            alert("Your cart is empty")
            return
        }
        setOrder(
            {
                description: cart.description,
                item_total: cart.item_total,
                tax_total: cart.tax_total,
            }
        )
        setCheckout(true)
    }


    return (
        <div>
            {checkout ? 
            (<PayPal order={order}/>) : 
            ( 
                <button className="w-full r bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                    onClick={() => {createOrder()}}>Checkout
                </button> 
            )}
        </div>
    )   
}

export default Checkout