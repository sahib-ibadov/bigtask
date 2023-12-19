import React from 'react'
import './ImageButton.css'

const ImageButton = () => {
  return (
    <div className='ImageButton1'>
      
      <div className='image__div1'>
        <img className='image1' src="	https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-mid.jpg" alt="" />
      </div>
      <div className='image__ab'>
        <h3>BUY 3. GET FREE 1.</h3>
        <p>50% off for selected products in Pustok.</p>
        <a href="http://localhost:5173/"><button className='button__image1'> See More</button></a>
      </div>
      <div className='image__div2'>
        <img className='image2' src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-small.jpg" alt="" />

      </div>
      <div className='image__ba'>
        <h3 className='image__h3'>$26.00</h3>
        <p className='image__p'>Praise For <br />
        The Night child
        </p>
      <a href="http://localhost:5173/">  <button className='image__button2'>Buy Nov</button></a>
      </div>


    </div>
  )
}

export default ImageButton
