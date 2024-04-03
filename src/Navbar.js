import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { NinjaIcon } from './Icons'
import { postData } from './useFetch'
import { FaUserNinja } from 'react-icons/fa'
import { FaRegPlusSquare } from "react-icons/fa";
import React, { useState } from 'react'
import "../src/Styles/Navbar.css";
import { IoIosArrowDropdown } from "react-icons/io";
import DropDown from './DropDown'

// import { deleteData } from "./useFetch";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <div>
        {/* Update to use Link */}
        <Link to='/' className="">
          <h1
            style={{
              color: 'var(--font-color)',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none'
            }}>
            <FaUserNinja
              fill='var(--main)'
              size={30}
              style={{ marginRight: '10px' }}
            />
            Ninja Blog
          </h1>
        </Link>
      </div>

      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? 'open' : ''}>
        {/* Update all navigation items to use Link */}
        <li>
          <Link className='nav-item' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='nav-item' to='/about-us'>
            About
          </Link>
        </li>
        <li>
          <Link className='nav-item' to='/vehicles'>
            Vehicles
          </Link>
        </li>
        <li>
          <Link className='nav-item' to='/testimonials'>
            Testimonials
          </Link>
        </li>
        <li>
          <Link className='nav-item' to='/our-team'>
            Our Team
          </Link>
        </li>
        <li>
          <Link className='nav-item' to='/contact'>
            Contact
          </Link>
        </li>
      </ul>

      <div className='nav-buttons'>
        <button className='btn button-primary'>Log In</button>
        <button className='btn button-secondary'>Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar
