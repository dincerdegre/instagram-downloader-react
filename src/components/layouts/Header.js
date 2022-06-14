import React from 'react'
import PropTypes from 'prop-types'
import classes from './Header.module.css'

const Header = props => {
  return (
    <header className="header">
        <div className="container">
            <a className={classes.logo} href='/'>InViDo</a>
        </div>
    </header>
  )
}

Header.propTypes = {}

export default Header