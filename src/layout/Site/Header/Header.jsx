import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='navbar__main'>

      <img className='img' src="https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg" alt="" />
      <ul className='navbarx__ul'>
        <li>
        <Link style={{textDecoration:'none',  color:'white'} } to="/">Home</Link>
        </li>
        <li>
        <Link style={{textDecoration:'none',  color:'white'} }  to="/Shop">Shop</Link>
        </li>
        <li>
        <Link style={{textDecoration:'none',  color:'white'} } to="/Contact">Contact</Link>
        </li>
        <li>
        <Link style={{textDecoration:'none',  color:'white'} } to="/Wishlist">Wishlist</Link>
        </li>
        <li>
        <Link style={{textDecoration:'none',  color:'white'} } to="/Basket">Basket</Link>
        </li>
        <li>
        <Link style={{textDecoration:'none',  color:'white'} } to="/CheckOut">CheckOut</Link>
        </li>
        <li>
        <Link style={{textDecoration:'none',  color:'white'} } to="/Detail">Detail</Link>
        </li>
        <li>
        <Link style={{textDecoration:'none',  color:'white'} } to="/Order">Order</Link>
        </li>
        <li>
        <Link style={{textDecoration:'none',  color:'white'} } to="/Complate">Complate</Link>
        </li>
        <li>
        <Link style={{textDecoration:'none',  color:'white'} } to="/admin/Books">admin</Link>
        </li>
      </ul>
        <button className=' button'>Buy now</button>
    </div>
  )
}

export default Header
