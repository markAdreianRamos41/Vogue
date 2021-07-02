import React from 'react'

function HamburgerButton({handleClicked, isMenuOpen}) {
    return (
        <div className="hide-for-desktop" onClick={handleClicked}>
           <div className="hamburger_button animateHamburgerButton">
                <span style={isMenuOpen ? {transform: "translateX(10px)", backgroundColor: "#ffffff"} : null}></span>
                <span style={isMenuOpen ? {backgroundColor: "#ffffff"} : null}></span>
                <span style={isMenuOpen ? {transform: "translateX(-10px)", backgroundColor: "#ffffff"} : null}></span>
           </div>
        </div>
    )
}

export default HamburgerButton
