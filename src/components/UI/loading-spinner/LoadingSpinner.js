import React from 'react'
import LoadingSpinnerStyle from '../../../styles/LoadingSpinner.styled'
import loader1 from './loader1.png'
import loader2 from './loader2.png'

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerStyle className='loading-spinner'>
        <img 
            src={loader1} 
            className='loader-1'
            alt='Osama Hajj Ali portfolio loader' 
        />
        <img 
            src={loader2} 
            className='loader-2'
            alt='Osama Hajj Ali portfolio loader' 
        />
    </LoadingSpinnerStyle>
  )
}

export default LoadingSpinner