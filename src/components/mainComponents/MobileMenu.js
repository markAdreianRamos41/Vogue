import React from 'react'
import NavLinks from '../subComponents/NavLinks/NavLinks'
import { Scrollbars } from 'react-custom-scrollbars-2';

function MobileMenu({isMenuOpen}) {

    const clipPathOpen = {
        clipPath: "circle(110% at 43% 24%)"
    }


    const scrollStyle ={
        marginTop:"112px",
        width: "100%", 
        height: "calc(100% - 112px)" 
    }

    return (
        <div className="clip_path_container" style={isMenuOpen ? clipPathOpen : null}>
            <Scrollbars style={scrollStyle}>
                <div className="mobile_nav_inner_container">
                    <NavLinks screen="mobile"/> 
                </div>
            </Scrollbars>   
        </div>   
    )
}

export default MobileMenu
