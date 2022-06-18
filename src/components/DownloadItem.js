import React from 'react'
import PropTypes from 'prop-types'
import classes from './DownloadItem.module.css'

const DownloadItem = ({image,url}) => {
 
  return (
    <div className={classes.item}>
        <img crossOrigin="anonymous" src={image} alt=""/>
        <a href={url} download>Download</a>
    </div>
  )
}

DownloadItem.propTypes = {
    image: PropTypes.string,
    url: PropTypes.string
}

export default DownloadItem