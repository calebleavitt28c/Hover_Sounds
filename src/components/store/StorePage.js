import React from 'react'
import MerchTable from './MerchTable'
import Cart from './Cart'

const StorePage = () => {

    const cartItems = []

    const checkout = () => {
        //Hide StorePage and show CheckoutPage
    }

    const addToCart = (itemID) => {
        cartItems.push(itemID)
    }

    return (
        <div className="grid grid-cols-12 gap-4 p-4 h-full">
            <div className="col-span-3 border-2 border-black">
                <MerchTable 
                    addToCart={addToCart}
                />
            </div>
            <div className="col-span-3 border-2 border-black">
                <Cart 
                    merchItems={cartItems}
                    checkout={checkout}
                />
            </div>
        </div>
    )
}

export default StorePage