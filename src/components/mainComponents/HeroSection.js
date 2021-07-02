import React from 'react'
import Button from '../subComponents/Button'
import SocialMediaLinks from '../subComponents/SocialMediaLinks'

function HeroSection() {
    return (
        <div className="hero_section">
          <div className="tagline_container animateTagline">
            <h1>
              CHOOSE YOUR OWN PATH
            </h1>
            <Button buttonName="See Products" destination="/"/>
          </div>

          <SocialMediaLinks />
          <div className="underline animateUnderline"></div>
        
        </div>
    )
}

export default HeroSection
