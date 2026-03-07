import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
    useEffect(() => {
        alert("Color was changed")

    }
        , [third])

    return (
        <div>
            I am navbar of {color} color  hehehe....
        </div>
    )
}

export default Navbar
