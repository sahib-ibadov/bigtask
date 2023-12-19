import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Addtobasket } from '../../../redux/Slice/basketSlice'
import { addWishlist } from '../../../redux/Slice/wishlistSlice'
const Cards = ({ item }) => {
    const dispatch=useDispatch()
    return (

        <>

            <div className='card' style={{ height: "290px" }}>
                <p>{item.title.slice(0, 22)}</p>
                <p> id:{item.id}</p>
                <img src={item.image} alt="" style={{ height: "150px", width: '200px' }} />
                <div className="overlay" >
                    <button style={{background:"none",border:"none"}} onClick={()=>{
                        dispatch(Addtobasket(item))
                    }}><p> <i class="fa-solid fa-basket-shopping"></i></p></button>

                      <button style={{background:"none",border:"none"}} onClick={()=>{
                        dispatch(addWishlist(item))
                      }}>  <p> <i class="fa-solid fa-heart" style={{ color: "#e00b0b;" }}></i></p></button>
                    <p><i class="fa-solid fa-arrow-right-arrow-left"></i></p>
                   <Link to={`/${item.id}`}> <p><i class="fa-solid fa-eye"></i></p></Link>

                </div>

                <div className='div__umumi__icon' style={{ display: "flex", gap: "15px", justifyContent: "center", marginLeft: '8px', fontSize: '15px' }}> <div className='price' > ${item.price}</div> <div className='div__price' >$21.20</div>  <div className='del'>20% </div></div>
            </div>

        </>
    )
}

export default Cards
