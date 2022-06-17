import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <a className={classes.logo} href='/'>InViDo</a>
        </div>
    </header>
  )
}


export default Header