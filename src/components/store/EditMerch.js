import axios from 'axios'
import React from 'react'

import MerchTable from './MerchTable'

const EditMerch = (props) => {
    const { items, artistId } = props

    const BackToStore = (name) => {
        props.hideComponent(name)
    }

    const DeleteItem = (item) => {
        axios.delete(`https://api.hoveringrecords.com/hover/store/${artistId}/${item.id}`)
            .then(response => {
                alert(item.name + " has been deleted")

            })
    }

    return (
        <div>
            <button onClick={(event) => BackToStore('showMerchForm')}>Back Arrow</button><br></br>
            <div>Edit Merch</div>
            <div className="col-span-3 border-2 border-black dark:border-primary">
                <MerchTable 
                    items={items}
                    deleteItem={DeleteItem}
                />
            </div>
            <div className="col-span-3 border-2 border-black dark:border-primary">

            </div>
        </div>
    )
}

export default EditMerch