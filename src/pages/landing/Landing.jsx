import React from 'react'

import "../../assets/css/style.css"
import "../../assets/css/animated.css"
import "../../assets/css/fontawesome.css"
import "../../assets/css/landing.css"

import Header from './../../templates/Header'
import Footer from './../../templates/Footer'
import InnerHeader from './components/InnerHeader'
import Advantage from './components/Advantage'
import Features from './components/Features'

function Landing() {
    return (
        <div>
            <Header />
            <InnerHeader />
            <Advantage />
            <Features />
            <Footer />
        </div>
    )
}

export default Landing
