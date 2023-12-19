import React from 'react'
import './Section2.css'
import { useDispatch, useSelector } from 'react-redux'
import SectionCard from '../SectionCard/SectionCard'

const Section2 = () => {
    const dispatch = useDispatch
    const { data } = useSelector(state => state.Books)


    return (
        <div >
            <h3 className='Section__2__h2'>CHILDREN’S BOOKS </h3>
                

        </div>
    )
}

export default Section2
