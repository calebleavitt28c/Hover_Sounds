import React, { useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const PayPal = (props) => {
    const { order, hidePayPal } = props
    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: order.description,
                            amount: {
                                currency_code: "USD",
                                value: (order.item_total + order.tax_total).toFixed(2)
                            },
                        },
                    ],
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order)
                console.log(data)
                props.hidePayPal()
            },
            onError: (err) => {
                console.log("Error in bringing up PayPal")
                console.log(err)
                toast.error(`Hover Sounds is ready but PayPal had an error. Please try again.`, { 
                    position: 'bottom-right',
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true
                })
            }
        }).render(paypal.current)
    }, [])

    return (
        <div>
            <div ref={paypal}></div>
            <ToastContainer />
        </div>
    )
}

export default PayPal