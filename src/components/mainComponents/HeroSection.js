import React from 'react'
import showcaseImage from '../../resources/Png/homepageShoesMobile.png'
import Tagline from '../subComponents/Tagline'
import Button from '../subComponents/Button'

function HeroSection() {
    return (
        <div className="hero_section">
            <img src={showcaseImage} alt="shoes" className="showcase_image" />
            <Tagline />
            <Button />
            <div className="underline"></div>
        </div>
    )
}

export default HeroSection
