import React from 'react'
import './Icon.css'

const Icon = () => {
    return (
        <div className='umumi__icon'>

            <div className='div__car'>
                <div className='cAR'> <i class="fa-solid fa-truck" style={{ color: "#67cc24" }}></i></div>

                <div className='div__p'>
                    <p>
                        Free Shipping Item <br />
                        Orders over $500
                    </p>
                </div>

            </div>


            <div className='div__ref'>
                <div className='raf'><i class="fa-solid fa-rotate-right" style={{ color: "#1f7718" }}></i></div>
                <div className='div__pp'>
                    <p>
                        Money Back Guarantee <br />
                        100% money back
                    </p>
                </div>

            </div>



            <div className='div__big'>
                <div className='BIG'><i class="fa-solid fa-piggy-bank" style={{ color: "#339c16" }}></i></div>

                <div className='div__ppp'>
                    <p>
                        Cash On Delivery <br />
                        Lorem ipsum dolor amet
                    </p>
                </div>


            </div>
            <div className='div__circle'>
                <div className='circle'><i class="fa-solid fa-circle-radiation" style={{ color: "#1b7b14" }}></i></div>

                <div className='div__pppp'>
                    <p>

                        Help & Support <br />
                        Call us : + 0123.4567.89
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Icon
