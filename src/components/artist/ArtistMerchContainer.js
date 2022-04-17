import React from 'react'
import ArtistMerch from './ArtistMerch'

class ArtistMerchContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const items = [
          {
              id: '1',
              name: 'HiM Shirt 1',
              price: 20.00,
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFsCM_xq9BSv4bKJFiFBEVdyK7N2dSmIvt14KTehsrlakWTDPNH_ZOO9rXDDd_KSEavs&usqp=CAU'
          },
          {
              id: '2',
              name: 'HiM Shirt 2',
              price: 25.00,
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFsCM_xq9BSv4bKJFiFBEVdyK7N2dSmIvt14KTehsrlakWTDPNH_ZOO9rXDDd_KSEavs&usqp=CAU'
          },
          {
              id: '3',
              name: 'HiM Shirt 3',
              price: 15.00,
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFsCM_xq9BSv4bKJFiFBEVdyK7N2dSmIvt14KTehsrlakWTDPNH_ZOO9rXDDd_KSEavs&usqp=CAU'
          },
          {
            id: '12',
            name: 'HiM Shirt 1',
            price: 20.00,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFsCM_xq9BSv4bKJFiFBEVdyK7N2dSmIvt14KTehsrlakWTDPNH_ZOO9rXDDd_KSEavs&usqp=CAU'
          },
          {
              id: '24',
              name: 'HiM Shirt 2',
              price: 25.00,
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFsCM_xq9BSv4bKJFiFBEVdyK7N2dSmIvt14KTehsrlakWTDPNH_ZOO9rXDDd_KSEavs&usqp=CAU'
          },
          {
            id: '11',
            name: 'HiM Shirt 1',
            price: 20.00,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFsCM_xq9BSv4bKJFiFBEVdyK7N2dSmIvt14KTehsrlakWTDPNH_ZOO9rXDDd_KSEavs&usqp=CAU'
          },
          {
              id: '21',
              name: 'HiM Shirt 2',
              price: 25.00,
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFsCM_xq9BSv4bKJFiFBEVdyK7N2dSmIvt14KTehsrlakWTDPNH_ZOO9rXDDd_KSEavs&usqp=CAU'
          },
      ]
    const allItems = []
  
    for (let item of items) {
      allItems.push(
        <ArtistMerch key={`merch${item.id}`} id={item.id} name={item.name} price={item.price} image={item.image} />
      )
    }
    
    return(
        <ul className="mt-2 border-2 dark:border-primary h-[32.3rem] max-h-[35.85rem] items-striped scrollbar-thin scrollbar-thumb-primary scrollbar-track-lightgray overflow-y-scroll">
          {allItems}
        </ul>
    )
  }
}

export default ArtistMerchContainer