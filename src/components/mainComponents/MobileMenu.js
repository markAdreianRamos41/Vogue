import React from 'react'
import NavLinks from '../subComponents/NavLinks/NavLinks'


function MobileMenu({isMenuOpen}) {

    const clipPathOpen = {
        clipPath: "circle(110% at 43% 24%)"
    }




    return (
        <div className="clip_path_container" style={isMenuOpen ? clipPathOpen : null}>
            <NavLinks screen="mobile"/> 
        </div>   
    )
}

export default MobileMenu
