import React from 'react'
import PropTypes from 'prop-types'
import DownloadItem from './DownloadItem'

const Result = ({result}) => {
  return (
    <div className='container flexible'>{ result && result.dataInfo.map((element,index) => {
      const imageElement = encodeURIComponent(element.image.toString());
      console.log(imageElement);
       return <DownloadItem key={index} url={element.url} image={`https://degrenetworkapi.herokuapp.com/image?url=${imageElement}`} />
    }) }</div>
  )
}

Result.propTypes = {
    result: PropTypes.object
}

export default Result