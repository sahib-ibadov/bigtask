import React from 'react'
import { useSelector } from 'react-redux'
import Card2 from '../Card2/Card2'
import './Card2map.css'


const Card2map = () => {
    const { data } = useSelector(state => state.Books)
    console.log(data)
    return (
        <div className='div__map container'>
            <div className="row">
                {
                    data.map((item, index) => {
                        return <div className="col-4"  key={index}>
                            <Card2 item={item} />
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Card2map
