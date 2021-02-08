import React from 'react'
import { FiHome, FiUser, FiHeart } from 'react-icons/fi'

import { Nav, Link } from './styles'

const Navbar = () => (
  <Nav className='h-10 sm:h-12 w-full'>
    <Link to='/'><FiHome className='text-lg sm:text-xl' /></Link>
    <Link to='/favs'><FiHeart className='text-lg sm:text-x' /></Link>
    <Link to='/user'><FiUser className='text-lg sm:text-x' /></Link>
  </Nav>
)

export default Navbar
