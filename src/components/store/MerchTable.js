import React from 'react'
import MerchItem from './MerchItem'

const MerchTable = (props) => {

    const addToCart = (itemID) => {
        props.addToCart(itemID)
    }

    const merchandise = [
        {
            itemID: 0,
            itemName: 'Ticket to HiM show on 05/19/2022 at 7PM at Valour',
            artistID: '8611155e-302c-49c4-9d9c-d0f94b16045c',
            artist: 'Hammocks in May',
            price: 20.00,
            qty: 50,
            image: 'https://media.istockphoto.com/photos/red-concert-tickets-picture-id894004402?k=20&m=894004402&s=612x612&w=0&h=94svqqC-k_SyvDIQGpjrfjLNRUH64MoYbZoI_YPtcB8=',
        },
        {
            itemID: 1,
            itemName: 'Hammocks in May T-Shirt 1',
            artistID: '8611155e-302c-49c4-9d9c-d0f94b16045c',
            artist: 'Hammocks in May',
            price: 20.00,
            qty: 19,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFsCM_xq9BSv4bKJFiFBEVdyK7N2dSmIvt14KTehsrlakWTDPNH_ZOO9rXDDd_KSEavs&usqp=CAU',
        },
        {
            itemID: 2,
            itemName: 'Hammocks in May T-Shirt 2',
            artistID: '8611155e-302c-49c4-9d9c-d0f94b16045c',
            artist: 'Hammocks in May',
            price: 20.00,
            qty: 22,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFsCM_xq9BSv4bKJFiFBEVdyK7N2dSmIvt14KTehsrlakWTDPNH_ZOO9rXDDd_KSEavs&usqp=CAU',
        },
        {
            itemID: 3,
            itemName: 'Hammocks in May T-Shirt 3',
            artistID: '8611155e-302c-49c4-9d9c-d0f94b16045c',
            artist: 'Hammocks in May',
            price: 20.00,
            qty: 6,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFsCM_xq9BSv4bKJFiFBEVdyK7N2dSmIvt14KTehsrlakWTDPNH_ZOO9rXDDd_KSEavs&usqp=CAU',
        }
    ]


    const merchItems = []

    for (let merch of merchandise) {
        merchItems.push(
            <MerchItem 
                itemID={merch.itemID} 
                itemName={merch.itemName} 
                artist={merch.artist} 
                price={merch.price} 
                quantity={merch.qty} 
                image={merch.image} 
                addToCart={addToCart}
            />
        )
    }

    return (
        <div className="">
            <ul className="max-h-[35.85rem] overflow-y-scroll">
                {merchItems}
            </ul>
        </div>
    )
}

export default MerchTable