import React from 'react'

function Link({linkName, to}) {
    return (
        <li>
            <a href={to}>{linkName}</a>
        </li>
    )
}
export default Link
