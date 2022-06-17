import React from 'react'
import PropTypes from 'prop-types'
import classes from './DownloadItem.module.css'

const DownloadItem = ({image}) => {
  return (
    <div className={classes.item}>
        <img crossOrigin="anonymous" src={image} alt=""/>
    </div>
  )
}

DownloadItem.propTypes = {}

export default DownloadItem