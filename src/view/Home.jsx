import React from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Marketing from '../components/Marketing'
import SatisfiedClient from '../components/SatisfiedClient'
import GrowthPartner from '../components/GrowthPartner'
import OutSmart from '../components/OutSmart'
import ActualResult from '../components/ActualResult'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <SatisfiedClient/>
        <Marketing/>
        <OutSmart/>
        <GrowthPartner/>
        <ActualResult/>
    </div>
  )
}

export default Home