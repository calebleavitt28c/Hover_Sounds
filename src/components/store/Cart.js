import React from 'react'
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
    }

    return (
        <div className="">
            <h1 className="bg-primary text-center p-2 rounded-b-sm" ><strong>
                Cart
                </strong></h1>
            <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className='row shadow-lg'>
                    <div>{item.name}</div>
                    <div className="grid grid-cols-6 content-center">
                        <div className="col-span-1">
                            <button className="bg-primary rounded-full text-white font-bold item-center mx-1 py-2 px-4"
                                onClick={() => onAdd(item)} id='add'
                            >+</button>
                        </div>
                        <div className="col-span-1">
                            <button className="bg-red rounded-full text-white font-bold item-center py-2 px-4"
                                onClick={() => onRemove(item)} id='remove'
                            >-</button>
                        </div>
                    </div>
                    <div>
                        qty: {item.qty} * ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="flow-root mx-2">
                        <div className="float-left">Subtotal:</div>
                        <div className="float-right">${subotal.toFixed(2)}</div>
                    </div>
                    <div className="flow-root mx-2">
                        <div className="float-left">Tax:</div>
                        <div className="float-right">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="flow-root mx-2">
                        <div className="float-left"><strong>Total:</strong></div>
                        <div className="float-right"><strong>${total.toFixed(2)}</strong></div>
                    </div>
                </>
            )}
            <div >
                <Checkout cart={cart}/>
            </div>
        </div>
    )
}

export default Cart