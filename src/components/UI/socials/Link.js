import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = ({icon, link}) => {
  return (
    <a 
      href={link}
      target='_blank' 
      rel='noreferrer'
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}

export default Link