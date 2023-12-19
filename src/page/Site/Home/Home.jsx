import React from 'react'
import './Home.css'
import HomeHeader from '../../../Componenets/Site/HomeHeader/HomeHeader'
import Siper from '../../../Componenets/Site/Swiper/Siper'
import Card from '../../../Componenets/Site/Card/Card'
import Icon from '../../../Componenets/Site/Icon/Icon'
import Image from '../../../Componenets/Site/Image/Image'
import Cards2 from '../../../Componenets/Site/Cards2/Cards2'
import Section from '../../../Componenets/Site/Section/Section'
import Section2 from '../../../Componenets/Site/Setion2/Section2'
import Card2 from '../../../Componenets/Site/Card2/Card2'
import Card2map from '../../../Componenets/Site/Card2map/Card2map'
import ImageButton from '../../../Componenets/Site/ImageButton/ImageButton'
import CardBasliq from '../../../Componenets/Site/CardBasliq/CardBasliq'
import Image2 from '../../../Componenets/Site/Image2/Image2'
import Sonswiper from '../../../Componenets/Site/Sonswiper/Sonswiper'



const Home = () => {
    return (
        <div className='home'>
            <HomeHeader />
            <Siper /> 
            <Icon/>
            <Image/>
            <Card />
            <Cards2/>
            <Card />
            <Section/>
            <Section2/>
            <Card2map/>
            <ImageButton/>
            <CardBasliq/>  
            <Card />
            <Image2/> 
            <Sonswiper/> 
            
            

           

        </div>



    )
}

export default Home
