import React from 'react'
import Navigation from '../../Shared/Navigation/Navigation'
import AppointmentBannar from '../AppointmentBanner.js/AppointmentBannar'
import Bannar from '../Banner/Bannar'
import Details from '../Details/Details'
import Services from '../Services/Services'

const Home = () => {

  return (

    <div>
        <Navigation />
        <Bannar />
        <Details />
        <Services />
        <AppointmentBannar />
    </div>
  )
}

export default Home