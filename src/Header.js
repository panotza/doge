import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/doge'>Home</Link></li>
          <li><Link to='/doge/about'>About</Link></li>
          <li><Link to='/doge/contact'>contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
