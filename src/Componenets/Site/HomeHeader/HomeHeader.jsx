import React from 'react'
import './HomeHeader.css'

const HomeHeader = () => {
    return (
        <div className='home__header'>
            <div className='home__header__1'>
                <div> <img src="https://htmldemo.net/pustok/pustok/image/logo.png" alt="" /></div>
                <div className='home__header__1__div'>
                    <div className='home__icon'> <i class="fa-solid fa-headphones" style={{ color: "#36c110" }}></i></div>
                    <div className='home__header__1__div__p'>
                        <p>Free Support 24/7</p>
                        <p>+01-202-555-0181</p>
                    </div>
                </div>
                <div className='div__p'>
                <p>HOME <i class="fa-solid fa-chevron-down"></i></p>
                <p>SHOP <i class="fa-solid fa-chevron-down"></i></p>
                <p>PAGES <i class="fa-solid fa-chevron-down"></i></p>
                <p>BLOG <i class="fa-solid fa-chevron-down"></i></p>
                <p>CONTACT <i class="fa-solid fa-chevron-down"></i></p>


            </div>


            </div>
          
            <div className='homeHeader2'>
           <div className='div__i'> <i class="fa-solid fa-bars"></i>Browse categories</div>
           <div><input className='div__input' type="text"  placeholder='Search'/> <button className='div__input1'>Search</button></div>
           <div><p>login <br />
           or   Register</p></div>
           <div><i class="fa-solid fa-right-to-bracket"></i>Shopping Card <br />
           $0.00</div>

            </div>


        </div>
    )
}

export default HomeHeader
