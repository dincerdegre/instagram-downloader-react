import React from 'react'
import PropTypes from 'prop-types'
import DownloadItem from './DownloadItem'

const Result = ({result}) => {
  return (
    <div className='container flexible'>{ result && result.dataInfo.map((element,index) => {
       return <DownloadItem key={index} image={element.image} />
    }) }</div>
  )
}

Result.propTypes = {
}

export default Result