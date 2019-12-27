// external libs
import React from "react";

// images & assets
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

// styles


const Icons = (props) => {
  return(
    <div className={`social-icons ${props.class}`}>
      <div id="instagram" className="social-icon-white icon-aqua">
        <a href="https://instagram.com/plaatine" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      <div id="twitter" className="social-icon-white icon-pink">
        <a href="https://twitter.com/Plaatine" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>

      <div id="facebook" className="social-icon-white icon-yellow">
        <a href="https://www.facebook.com/Platine-413064029464479/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
      </div>
    </div>
  )
}


export default Icons;
