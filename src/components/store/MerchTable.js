import React from 'react'
import MerchItem from './MerchItem'

const MerchTable = (props) => {
    const {items, onAdd, deleteItem} = props

    return (
        <ul className="max-h-full scrollbar-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 scrollbar-thin scrollbar-thumb-primary scrollbar-track-lightgray overflow-y-scroll">
            {items.map((item) => (
                <MerchItem key={item.id} item={item} onAdd={onAdd} deleteItem={deleteItem}/>
            ))}
        </ul>
    )
}

export default MerchTable