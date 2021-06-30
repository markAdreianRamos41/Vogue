import React from 'react'
import NavLinks from '../subComponents/NavLinks'

function MobileMenu({isOpen}) {

    return (
        <div className="mobile_menu" style={isOpen ? {height: "100vh", width: "100%",  transition: "all 100ms ease-in-out"} : null}>
            <div className="inner_mobile_menu" style={isOpen ? {clipPath: "circle(100%)"} : null}>
                <NavLinks />
            </div>
        </div>
    )
}

export default MobileMenu
