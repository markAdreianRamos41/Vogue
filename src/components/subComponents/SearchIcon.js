import React from 'react'
import searchIcon from '../../resources/Svg/SearchIcon.svg'
function SearchIcon() {
    return (
        <div className="search_icon hide-for-mobile">
            <img src={searchIcon} alt="searchIcon"/>
        </div>    
    )
}

export default SearchIcon
