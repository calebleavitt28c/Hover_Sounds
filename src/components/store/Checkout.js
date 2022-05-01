import React, { useState, useEffect } from 'react'
import PayPal from './PayPal'
import { ToastContainer, toast } from 'react-toastify';

const Checkout = (props) => {
    const { cart } = props
    const [order, setOrder] = useState({})
    const [checkout, setCheckout] = useState(false)

    useEffect(() => {
        if (cart.item_total === 0) {
            setCheckout(false)
        }
    }, [cart.item_total])

    const createOrder = () => {
        if (cart.item_total === 0) {
            toast.error(`Your cart is empty`, { //why are two notifications created???????
                position: 'bottom-right',
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
              })
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

    const hidePayPal = () => {
        setCheckout(false)
        props.clearCart()
    }

    return (
        <div>
            {checkout  ? 
            (<PayPal order={order} hidePayPal={hidePayPal}/>) : 
            ( 
                <button className="w-full r bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                    onClick={createOrder}>Checkout
                </button> 
            )}
            <ToastContainer />
        </div>
    )   
}

export default Checkout