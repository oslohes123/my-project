import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav class="navContainer">
      <div class="">
        <a class="navButton" href="/">Home</a>
      </div>
      <div><a class="navButton" href="/">Menu</a></div>
      <div><Link to = {"booking"} class= "navButton">Booking</Link></div>
      <div><a class="navButton" href="/">About</a></div>
    </nav>
  )
}

export default Nav