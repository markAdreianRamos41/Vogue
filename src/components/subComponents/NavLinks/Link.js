import React from 'react'

function Link({linkName, destination}) {
    return (
       
        <li>
            <a href={destination}>{linkName}</a>
        </li>
       
    )
}

export default Link
