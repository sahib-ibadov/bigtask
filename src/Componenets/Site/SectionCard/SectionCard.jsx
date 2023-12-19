import React from 'react'
import './SectionCard.css'

const SectionCard = ({item}) => {
  return (
    <>

    <div className='img' style={{width:"200px",height:"200px",backgroundColor:""}}><img src={item.image} alt="" style={{width:"190px",height:"190px"}} /></div>
    <p>{item.title.slice(0,17)}</p>
    <br />
    
  
  {/* <p>{item.id}</p><br /> */}
  
  <p>{item.price}</p>
      
    </>
  )
}

export default SectionCard
