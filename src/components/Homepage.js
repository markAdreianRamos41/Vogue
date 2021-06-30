import React from 'react'
import Header from './mainComponents/Header.js'
import HeroSection from './mainComponents/HeroSection.js'

function Homepage() {
    return (
        <div className="homepage_container">
            <div className="homepage_landing_page">
                <Header />
                <HeroSection />
            </div>    
        </div>
    )
}

export default Homepage
