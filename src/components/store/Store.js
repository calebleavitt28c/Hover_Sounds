import React, { useEffect, useState } from 'react'
import MerchTable from './MerchTable'
import Cart from './Cart'
import MerchForm from './MerchForm'
import axios from 'axios'

const Store = (props) => {
    const {userType, userId} = props

    const [showStore, setShowStore] = useState(true)
    const [showMerchForm, setShowMerchForm] = useState(false)

    const [items, setItems] = useState([])

    
    useEffect(() => {
        axios.get('https://api.hoveringrecords.com/hover/store')
            .then(response => {
                setItems(response.data.Items)
            })
    }, [])

    const [cartItems, setCartItems] = useState([])
    const onAdd = (item) => {
        const exist = cartItems.find(x => x.id === item.id)
        if (exist) {
            setCartItems(
                cartItems.map(x => 
                    x.id === item.id ? {...exist, qty: exist.qty + 1} : x
                )
            )
        } else {
            setCartItems([...cartItems, {...item, qty: 1 }])
        }
    }
    const onRemove = (item) => {
        const exist = cartItems.find((x) => x.id === item.id)
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== item.id))
        } else {
            setCartItems(
                cartItems.map((x) => 
                    x.id === item.id ? { ...exist, qty: exist.qty - 1}: x
                )
            )
        }
    }

    const hideComponent = (name) => {
        switch(name) {
            case 'showMerchForm':
                setShowStore(!showStore)
                setShowMerchForm(!showMerchForm)
                break
            default:
                break
        }
    }

    return (
        <div>
            {showStore && (
                <div className="grid grid-cols-12 gap-4 p-4 h-full dark:text-lightgray dark:border-primary">
                    <div className="col-span-3 border-2 border-black dark:border-primary">
                        <MerchTable 
                            items={items}
                            onAdd={onAdd}
                        />
                    </div>
                    <div className="col-span-3 border-2 border-black dark:border-primary">
                        <Cart 
                            cartItems={cartItems}
                            onAdd={onAdd}
                            onRemove={onRemove}
                        />
                    </div>
                    <div>
                        {userType == 'artists' && (
                            <button
                                onClick={(event) => hideComponent('showMerchForm')}
                            >Add Merch to Store</button>
                        )}
                    </div>
                </div>
            )}
            <div>
                {showMerchForm && (
                    <MerchForm userId={userId} hideComponent={hideComponent}/>
                )}
            </div>
        </div>
    )
}

export default Store