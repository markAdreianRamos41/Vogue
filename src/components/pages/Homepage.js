import React from 'react'
import Header from '../mainComponents/Header.js'
import HeroSection from '../mainComponents/HeroSection'

function Homepage() {
    return (
        <div className="homepage_container">
            <div className="homepage_background animateHomepageBackground"></div>
            <div className="homepage_landing_page">
                <Header />
                <HeroSection />
                <div className="page_number hide-for-mobile" style={{transform: "rotate(90deg)"}}>
                    <h1 className="animatePageNumber">01<span>/08</span></h1>
                </div>  
            </div>   
            
            
        </div>
    )
}

export default Homepage
