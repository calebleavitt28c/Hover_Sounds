import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import MerchTable from './MerchTable'
import Cart from './Cart'
import MerchForm from './MerchForm'
import EditMerch from './EditMerch'

const Store = (props) => {
    const {userType, userId} = props

    const [showStore, setShowStore] = useState(true)
    const [showMerchForm, setShowMerchForm] = useState(false)
    const [showEditMerch, setShowEditMerch] = useState(false)

    const [items, setItems] = useState([])

    let { artistId } = useParams()
    
    useEffect(() => {
        if(artistId) {
            axios.get(`https://api.hoveringrecords.com/hover/store/${artistId}`)
                .then(response => {
                    setItems(response.data.Items)
                })
        } else {
        axios.get('https://api.hoveringrecords.com/hover/store')
            .then(response => {
                setItems(response.data.Items)
            })
        }
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
            case 'showEditMerch':
                setShowStore(!showStore)
                setShowEditMerch(!showEditMerch)
                break
            default:
                break
        }
    }

    return (
        <div>
            {showStore && (
                <div className="grid grid-cols-10 gap-4 p-4 h-full dark:text-lightgray dark:border-primary">
                    <div className="col-span-8 border-2 border-black dark:border-primary">
                        <MerchTable 
                            items={items}
                            onAdd={onAdd}
                        />
                    </div>
                    <div className="col-span-2 border-2 border-black dark:border-primary">
                        <Cart 
                            cartItems={cartItems}
                            onAdd={onAdd}
                            onRemove={onRemove}
                        />
                    </div>
                    <div>
                        {artistId && (
                            <div>
                                <button
                                    onClick={(event) => hideComponent('showMerchForm')}
                                >Add Merch</button>
                                <br></br><br></br>
                                <button
                                    onClick={(event) => hideComponent('showEditMerch')}
                                >Edit Merch</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
            <div>
                {showMerchForm && (
                    <MerchForm userId={userId} hideComponent={hideComponent}/>
                )}
                {showEditMerch && (
                    <EditMerch 
                        artistId={artistId}
                        items={items}
                        hideComponent={hideComponent}
                    />
                )}
            </div>
        </div>
    )
}

export default Store