import React from 'react'

function Button({buttonName, destination}) {
    return (
        <div className="button">
            <a href={destination}>{buttonName}</a>
            
        </div>
        
    )
}

export default Button
