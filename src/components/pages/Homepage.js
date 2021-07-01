import React from 'react'
import Header from '../mainComponents/Header.js'
import HeroSection from '../mainComponents/HeroSection'

function Homepage() {
    return (
        <div className="homepage_container">
            <div className="homepage_background"></div>
            <div className="homepage_landing_page">
                <Header />
                <HeroSection />
            </div>   
        </div>
    )
}

export default Homepage
