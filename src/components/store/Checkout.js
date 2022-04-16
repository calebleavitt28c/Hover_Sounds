import React, { useState } from 'react'
import PayPal from './PayPal'

const Checkout = (props) => {

    const [checkout, setCheckout] = useState(false)

    return (
        <div>
            {checkout ? (<PayPal />) : ( <button onClick={() => {setCheckout(true)}}>Place your Order</button> )}
        </div>
    )   
}

export default Checkout