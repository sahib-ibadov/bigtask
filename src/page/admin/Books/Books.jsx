import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Books.css'
import { Link } from 'react-router-dom'
import { deleteData } from '../../../redux/Slice/dataSlice'



const Books = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.Books)
  const {items}=useSelector(state=>state.wishlist)
  
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            <th scope="col">Go Detail</th>

          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td><div><img style={{height:"100px"}} src={item.image} alt="" /></div></td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td><button  className='button__books'>Edit</button></td>
                  <td><button className='button__books' onClick={()=>{
                    dispatch(deleteData(item))
                  }} >Delete</button></td>
                  <Link to={`/${item.id}`}><td><button  className='button__bookss'>Go Detail </button></td></Link>
                </tr>
              )
            })
          }

        </tbody>
      </table>

    </div>
  )
}

export default Books
