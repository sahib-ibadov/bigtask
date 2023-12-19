import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar__main'>

    <img className='img' src="https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg" alt="" />
    <ul className='navbarx__ul'>
      <li>
      <Link style={{textDecoration:'none',  color:'white'} } to="/">Home</Link>
      </li>
      <li>
      <Link style={{textDecoration:'none',  color:'white'} } to="/admin/Books">Books</Link>
      </li>
      <li>
      <Link style={{textDecoration:'none',  color:'white'} } to="/admin/Orders">Orders</Link>
      </li>
      <li>
      <Link style={{textDecoration:'none',  color:'white'} } to="/admin/Dashboard/">Dashboard </Link>
      </li>
      <li>
      <Link style={{textDecoration:'none',  color:'white'} } to="/admin/Add/">Add </Link>
      </li>
     
     
    </ul>
      <button className=' button'>Buy now</button>
  </div>
  )
}

export default Header
