import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Addtobasket, decreaseItemFromBasket, deleteItemFromBasket } from '../../../redux/Slice/basketSlice'
import './basket.css'

const Basket = () => {
  const items=useSelector(state=>state.basket.items)
  const dispatch=useDispatch()
  let basketTotalPrice=0
  return (
    <div >
      {
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Decrease</th>
            <th scope="col">Count</th>
            <th scope="col">Increase</th>
            <th scope="col">Total Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>



        <tbody>
          
          {
            items.map((item,index)=>{
              basketTotalPrice+=item.basketTotalPrice
              return(
                <tr key={index}>
            <th scope="row">{item.product.id}</th>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td><button className='button__add' onClick={()=>{
              dispatch(decreaseItemFromBasket(item))
            }}>-</button></td>
            <td>{item.count}</td>
            <td><button className='button__add' onClick={()=>{
              dispatch(Addtobasket(item.product))
            }}>+</button></td>
            <td>{item.totalPrice}</td>
            <td><button className='button__delete' onClick={()=>{
              dispatch(deleteItemFromBasket(item.product))
            }}>delete</button></td>
          </tr>
        
              )
            })
          }
        </tbody>
      </table>
      }

      
    </div>
  )
}

export default Basket
