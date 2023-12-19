import React from 'react'
import './Card2.css'
const Card2 = ({item}) => {
    console.log(item)
  return (
   <div className='umimi'>
     <div className='card2'>
        <div>
             <img src={item?.image} alt="" />
        </div>
        <div>
            <p>{item?.title}</p>
            <div style={{display:"flex",gap:"15px",justifyContent:"center",marginLeft:'8px',fontSize:'15px'}}> 
                <div className='price'> ${ item?.price}</div>
                <div style={{color:'lightgray'}}><del>$21.20</del></div>  
                <div className='del'>20% </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Card2