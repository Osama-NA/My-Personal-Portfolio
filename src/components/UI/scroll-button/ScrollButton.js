import React from 'react'
import ScrollButtonImage from "./scroll-btn.png";
import ScrollButtonStyle from '../../../styles/ScrollButton.styled'

const ScrollButton = ({scrollTo}) => {
  return (
    <ScrollButtonStyle className="scroll-button" onClick={scrollTo}>
      <img
        src={ScrollButtonImage}
        alt="Osama Hajj Ali portfolio scroll button"
        draggable={false}
      />
    </ScrollButtonStyle>
  )
}

export default ScrollButton