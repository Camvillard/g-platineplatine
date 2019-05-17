// external libs
import React from "react";

// images & assets
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";


// styles


const Icons = () => {
  return(
    <div id="social-icons">
      <div id="instagram" className="social-icon-white icon-aqua">
      <a href="#" target="_blank">
        <FaInstagram />
      </a>
      </div>

      <div id="twitter" className="social-icon-white icon-pink">
      <a href="#" target="_blank">
        <FaTwitter />
        </a>
      </div>

      <div id="facebook" className="social-icon-white icon-yellow">
      <a href="#" target="_blank">
        <FaFacebookF />
        </a>
      </div>
    </div>
  )
}


export default Icons;
