import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
    // Case 1:Run on Every Render
    useEffect(() => {
        alert("Hey I will run on every render")

    })
    // Case 2:Run only on  First Render
    useEffect(() => {
        alert("Hey I will run on first render")

    }, [])
    // Case 3:Run only when a specific dependency changes(certain value changes)
    useEffect(() => {
        alert("Hey i am running because color was changed")
    }, [color])
    // Example of cleanup function in useEffect
    useEffect(() => {
        alert("Hey Welcome to my page .This is the first render fo app.jsx")
        return () => {
            alert("Component was unmounted")
        }

    }, [])

    return (
        <div>
            I am navbar of {color} color  hehehe....
        </div>
    )
}

export default Navbar
