import React from 'react'
import {NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import { FaHome } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
const Navbar = () => {
  return (
    <header>
      <nav className={`flex justify-end gap-x-4 p-4 drop-shadow-xl text-xs font-semibold text-white md:gap-x-20 ${styles['header-bg']} md:text-base`}>
      <NavLink to="/" className={({isActive})=>isActive?"text-orange-400":"text-white"}><FaHome className='inline-block m-1' />Home</NavLink>
      <NavLink to="/friends" className={({isActive})=>isActive?"text-orange-400":"text-white"}><GiThreeFriends className='inline-block m-1' />Friends</NavLink>
      <NavLink to="/profile" className={({isActive})=>isActive?"text-orange-400":"text-white"}><FaUser className='inline-block m-1' />Profile</NavLink>
      <NavLink to="/addpost" className={({isActive})=>isActive?"text-orange-400":"text-white"}><MdOutlinePostAdd className='inline-block m-1' />Add post</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
