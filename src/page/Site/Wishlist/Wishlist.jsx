import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Wishlist.css'
import { Addtobasket } from '../../../redux/Slice/basketSlice'
import { deleteWishlist } from '../../../redux/Slice/wishlistSlice'

const Wishlist = () => {
  const { items } = useSelector(state => state.wishlist)
  const dispatch = useDispatch()
  return (
    <div className='wishlist'>
      {
        items.map((item, index) => {
          return (
            <div className='wishlist__map' style={{ marginTop: '20px' }} key={index}>
              <div className='wishlist__ddiv' s><img className='wishlist__image' style={{ height: "200px" }} src={item.image} alt="" /></div>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.id}</p>
              <div className='divwishlist'>
              <button className='addtobasker__wishlist' onClick={() => {
                dispatch(Addtobasket(item))
              }}>add basket</button>
              <button className='addtobasker__wishlist' onClick={()=>{
                dispatch( deleteWishlist(item ))
              }}>Delete</button>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Wishlist
