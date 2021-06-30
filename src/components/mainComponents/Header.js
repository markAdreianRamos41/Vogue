import React, { useState } from 'react'
import Logo from '../subComponents/Logo'
import HamburgerButton from '../subComponents/HamburgerButton'
import PageNumber from '../subComponents/PageNumber'
import MobileMenu from './MobileMenu'


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const preventScroll = () =>  {
        if(isOpen)  {
            window.scrollTo(0, 0)
            window.onscroll = () => {
                window.scrollTo(0, 0)
            }
        }
        else {window.onscroll = () => {}}
    }
    const toggleMenu = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
        
    }
    preventScroll()
        



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
