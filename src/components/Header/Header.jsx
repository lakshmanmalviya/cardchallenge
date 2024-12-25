import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.navContainer}>
      <div><Link to="/home" className='navitem'>Home</Link> </div>
      <div><Link to="/" className='navitem'>UserCard</Link></div>
    </div>
  )
}

export default Header