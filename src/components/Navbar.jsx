import React from 'react'
import {NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <header>
      <nav className={`flex justify-end gap-x-4 p-4 drop-shadow-xl text-xs font-semibold text-white md:gap-x-20 ${styles['header-bg']}`}>
      <NavLink to="/" className={({isActive})=>isActive?"text-orange-400":"text-white"}>Home</NavLink>
      <NavLink to="/friends" className={({isActive})=>isActive?"text-orange-400":"text-white"}>Friends</NavLink>
      <NavLink to="/profile" className={({isActive})=>isActive?"text-orange-400":"text-white"}>Profile</NavLink>
      <NavLink to="/addpost" className={({isActive})=>isActive?"text-orange-400":"text-white"}>Add post</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
