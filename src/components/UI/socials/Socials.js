import React from 'react'
import { faGithub, faLinkedinIn, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import Link from './Link'
import SocialsStyle from '../../../styles/Socials.styled'

const Socials = () => {
  return (
    <SocialsStyle>
      <li className="cv">
        <a 
          href='https://res.cloudinary.com/osama-na/image/upload/v1666462637/CV_abbbgz.pdf'
          target='_blank' 
          rel='noreferrer'
        >
          cv
        </a>
      </li>
      <li><Link icon={faGithub} link='https://github.com/Osama-NA' /></li>
      <li><Link icon={faLinkedinIn} link='https://www.linkedin.com/in/osama-hajj-ali/' /></li>
      <li><Link icon={faInstagram} link='https://www.instagram.com/osama_a67/' /></li>
      <li><Link icon={faWhatsapp} link='https://wa.me/96181965388' /></li>
      <li><Link icon={faEnvelope} link='mailto:ossama.nae12@gmail.com' /></li>
    </SocialsStyle>
  )
}

export default Socials