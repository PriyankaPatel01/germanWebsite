import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div className='nav-bar'>

    <form className='search'>
        <input type="search" placeholder='suschen..'/>
    </form>
        <ul>
            <li>Rezept einlösen</li>
            <li>Live Bestand</li>
            <li>Videosprechstunde</li>
            <li>FAQs</li>
            <li>Kontakt</li>
            <li>Cart</li>
            <li><button>Anmelden</button></li>
        </ul>
    </div>
  )
}

export default Nav
