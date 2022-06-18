import React from 'react'
import PropTypes from 'prop-types'
import DownloadItem from './DownloadItem'

const Result = ({result}) => {
  return (
    <div className='container flexible'>{ result && result.dataInfo.map((element,index) => {
      const imageElement = encodeURIComponent(element.image.toString());
      const downloadElement = encodeURIComponent(element.url.toString());
      console.log(imageElement);
       return <DownloadItem key={index} url={`https://degrenetworkapi.herokuapp.com/download?url=${downloadElement}`} image={`https://degrenetworkapi.herokuapp.com/image?url=${imageElement}`} />
    }) }</div>
  )
}

Result.propTypes = {
    result: PropTypes.object
}

export default Result