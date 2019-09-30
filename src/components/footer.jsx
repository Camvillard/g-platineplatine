import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
 return(
   <footer className="columns">

     <div className="column one-fourth left-section">
       <p className="footer-copyright">
        © {new Date().getFullYear()} Platine
       </p>
       <Link to="#">politique de confidentialité</Link>
       <Link to="#">mentions légales</Link>
     </div>

     <div className="column three-fourth right-section">
      <p>direction artistique + développement web par <a href="https://www.cdltbisou.com">cdltbisou</a></p>
     </div>

   </footer>
 )
}

export default Footer;
