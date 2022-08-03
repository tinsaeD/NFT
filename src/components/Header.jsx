import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='container' id="container">
        <Navbar/>
        <section className="body-1">
            <h1 style={{display: 'none'}}>The IbexClub</h1>
        </section>
    </header>
  )
}

export default Header