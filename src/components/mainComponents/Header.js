import React, { useState } from 'react'
import HamburgerButton from '../subComponents/HamburgerButton'
import Logo from '../subComponents/Logo'
import MobileMenu from './MobileMenu'
import NavLinks from '../subComponents/NavLinks/NavLinks'
import SearchIcon from '../subComponents/SearchIcon'

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleHamburgerMenuClicked = () => {
        isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
    }

    return (
        <div className="header">
           <HamburgerButton handleClicked={handleHamburgerMenuClicked} isMenuOpen={isMenuOpen}/>
           <MobileMenu isMenuOpen={isMenuOpen}/>
           <Logo />
           <NavLinks screen="desktop"/>
           <SearchIcon />
           
        </div>
    )
}

export default Header
