import React from 'react';
// import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
 return(
 <div>
   © {new Date().getFullYear()}, built with
   <FontAwesomeIcon icon="heart" />
   {` `}
   <a href="https://www.gatsbyjs.org">Gatsby</a>
 </div>)
}

export default Footer;
