import React from 'react'

function HamburgerButton({handleClick, isOpen}) {


    return (
        <div className="hamburger_button" onClick={handleClick}>
            <span style={isOpen ? {width: "30px", transform: "translateX(-10px)", backgroundColor: "#ffffff"}: null}></span>
            <span style ={isOpen ? { backgroundColor: "#ffffff"} : null}></span>
            <span style={isOpen ? {width: "30px", transform: "translate(10px, -1px)", backgroundColor: "#ffffff"}: null}></span>
        </div>
    )
}

export default HamburgerButton
