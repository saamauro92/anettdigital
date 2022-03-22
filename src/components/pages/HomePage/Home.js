import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjTwo } from './Data'
import Pricing from '../../Pricing'


const Home = () => {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <Pricing />

        </>
    )
}


export default Home
