import React from 'react'
import Link from './Link'
const linkNames = ["Home", "Pricing", "About", "Contact"]


function navLinks() {
    return (
        <div className="header_nav_links">
            <ul>
                {linkNames.map(item => <Link linkName={item} to="/" key={item}/>)}
            </ul> 
        </div>
    )
}
export default navLinks
