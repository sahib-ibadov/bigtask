import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Detail.css'

const Detail = () => {
  const {id}=useParams()
  const [detail,setdetail]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3000/Books/${id}`).then(res=>{
      setdetail(res.data)
      console.log(res.data)
    })
  })
  return (
    <div className='Detail'>
      <div className='detail__image'>
        <img style={{height:"300px"}} src={detail.image} alt="" />
      </div>
      <div className='detail__divs'>
      <div><p>{detail.id}</p></div>
          <div><p>{detail.title}</p></div>
          <div><p>{detail.price}</p></div>
          


      </div>
      

    </div>
  )
}

export default Detail
