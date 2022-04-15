import React from 'react'
import MerchItem from './MerchItem'

const MerchTable = (props) => {
    const {items, onAdd} = props

    return (
        <div className="">
            <ul className="posts-striped scrollbar-thin scrollbar-thumb-primary scrollbar-track-lightgray max-h-[35rem] overflow-y-scroll">
                {items.map((item) => (
                    <MerchItem key={item.itemID} item={item} onAdd={onAdd}/>
                ))}
            </ul>
        </div>
    )
}

export default MerchTable