import React, { useState } from 'react'
import Logo from '../subComponents/Logo'
import HamburgerButton from '../subComponents/HamburgerButton'
import PageNumber from '../subComponents/PageNumber'
import MobileMenu from './MobileMenu'


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    return (
        <div className="header">
            <MobileMenu isOpen={isOpen}/>
            <HamburgerButton handleClick={toggleMenu} isOpen={isOpen}/>
           
            <div className="header_left_side_mobile">
                <Logo />
                <PageNumber />
            </div>
            
        </div>
    )
}

export default Header
