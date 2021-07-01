import React from 'react'
import Link from './Link'

const linkList = ["Home", "Pricing", "About", "Contact"]

function NavLinks({screen}) {
    return (
        <div className={screen === "mobile" ? "nav_links hide-for-desktop" : "nav_links hide-for-mobile"} >
            <ul>
                {
                    linkList.map(item => 
                        <Link key={item} linkName={item} destination="/" />
                    )
                }
            </ul>
        </div>
    )
}

export default NavLinks
