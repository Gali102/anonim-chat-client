import React from 'react'

import "../../assets/css/style.css"
import "../../assets/css/animated.css"
import "../../assets/css/fontawesome.css"
import "../../assets/css/landing.css"

import Header from './components/Header'
import Footer from './components/Footer'
import InnerHeader from './components/InnerHeader'
import Advantage from './components/Advantage'
import Features from './components/Features'

function LandingRu() {
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

export default LandingRu
