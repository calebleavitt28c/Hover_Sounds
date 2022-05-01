import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import MerchTable from './MerchTable'
import Cart from './Cart'
import MerchForm from './MerchForm'
import EditMerch from './EditMerch'

//comment
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

    const clearCart = () => {
        setCartItems([])
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
        <div className='h-[80vh]'>
            {showStore && (
                <div className="flex h-full gap-4 p-4 dark:text-lightgray dark:border-primary">
                    <div className="border-2 w-[75%] border-black dark:border-primary h-full">
                        <MerchTable 
                            items={items}
                            onAdd={onAdd}
                        />
                    </div>
                    <div className="border-2 w-[25%] border-black dark:border-primary">
                        <Cart 
                            cartItems={cartItems}
                            onAdd={onAdd}
                            onRemove={onRemove}
                            clearCart={clearCart}
                        />
                    </div>
                    <div>
                        {(artistId === userId) && (
                            <div className="flex flex-row">
                                <div className="">
                                    <button
                                        className="w-full r bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                                        onClick={(event) => hideComponent('showMerchForm')}
                                    >Add Merch</button>
                                    <br></br><br></br>
                                </div>
                                <div  className="mx-2">
                                    <button
                                        className="w-full r bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                                        onClick={(event) => hideComponent('showEditMerch')}
                                    >Manage Merch</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
            <div className="flex flex-col place-items-center mt-auto">
                {showMerchForm && (
                    <MerchForm 
                        userId={userId} 
                        hideComponent={hideComponent}
                    />
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