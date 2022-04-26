import React, { useEffect, useRef } from 'react'

const PayPal = (props) => {
    const { order } = props
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
                console.log(data)
            },
            onError: (err) => {
                console.log("Error in bringing up PayPal")
                console.log(err)
                alert("Hover Sounds is ready but PayPal had an error: " + err.message)
            }
        }).render(paypal.current)
    }, [])

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default PayPal