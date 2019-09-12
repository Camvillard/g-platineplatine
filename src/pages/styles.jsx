import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Music from "../images/icon-music.svg"

// styles
import '../styles/main.scss';

class Styles extends React.Component {

  addCompleted = (e) =>  {
    e.target.classList.add('completed')
  }

  render() {
    return(
      <div>
        <div className="container">
          <h5 className="small-title"><span>1. texts</span></h5>

          <h1>ceci est un titre h1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis, vitae fugiat, tenetur aperiam deleniti saepe sunt quidem illum similique, asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis, vitae fugiat, tenetur aperiam deleniti saepe sunt quidem illum similique, asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium.</p>
          <h2>ceci est un titre h2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis, vitae fugiat, tenetur aperiam deleniti saepe sunt quidem illum similique, asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis, vitae fugiat, tenetur aperiam deleniti saepe sunt quidem illum similique, asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium.</p>
          <h3>ceci est un titre h3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis, vitae fugiat, tenetur aperiam deleniti saepe sunt quidem illum similique, asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis, vitae fugiat, tenetur aperiam deleniti saepe sunt quidem illum similique quidem illum similique, asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium.</p>
          <h4>ceci est un titre h4</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis, vitae fugiat, tenetur aperiam deleniti saepe sunt quidem illum similique, asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium. asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis, vitae fugiat, tenetur aperiam deleniti saepe sunt quidem illum similique, asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium.</p>

          <h5 className="small-title"><span>2. cards</span></h5>

          <div className="regular-card pink">

            <div className="card-header">
              <div className="card-icon"><Music /></div>
              <div className="header-meta">
                <p className="meta">publié le : <span className="meta-content">24/10/2019</span></p>
                <p className="meta">dans <span className="meta-content">le jukebox</span></p>
              </div>
            </div>

            <div className="card-content">
              <img src="https://contenu.platineplatine.com/wp-content/uploads/2019/08/platine_placeholder_9.jpg" alt="book open and tea"/>
              <h3 className="card-title">Comment soutenir les artistes que vous appréciez ?</h3>
              <p className="card-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis, vitae fugiat, tenetur aperiam deleniti saepe sunt quidem illum similique, asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium. asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis (...)</p>
              <Link to="/" className="button simple-button more-link"><span>lire la suite</span></Link>
            </div>

          </div>
          {/* end of .regular-card */}

          <div className="regular-card yellow">

            <div className="card-header">
              <div className="card-icon">M</div>
              <div className="header-meta">
                <p className="meta">publié le <span className="meta-content">24/10/2019</span></p>
                <p className="meta">dans <span className="meta-content">le jukebox</span></p>
              </div>
            </div>

            <div className="card-content">
              <img src="https://contenu.platineplatine.com/wp-content/uploads/2019/08/platine_placeholder_9.jpg" alt="book open and tea"/>
              <h3 className="card-title">Un article court</h3>
              <p className="card-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis, vitae fugiat, tenetur aperiam deleniti saepe sunt quidem illum similique, asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium. asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis, vitae fugiat, tenetur aperiam deleniti saepe sunt quidem illum similique, asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium.</p>
              <Link to="/" className="button simple-button more-link"><span>lire la suite</span></Link>
            </div>

          </div>
          {/* end of .regular-card */}

          <h5 className="small-title"><span>3. buttons</span></h5>


          <div className="button-block">
            <a href="#"className="button button-aqua"><span>bouton principal</span></a>
          </div>

          <div className="button-block">
            <a href="#"className="button simple-button"><span>bouton simple</span></a>
          </div>


          <h5 className="small-title"><span>4. forms</span></h5>

          <form action="" className="form-stroked">

            <input type="text" placeholder="nom, prénom :" onBlur={this.addCompleted}/>
            <input type="text" placeholder="adresse mail :" onBlur={this.addCompleted}/>
            <button className="button simple-button"><span>envoyer</span></button>

          </form>



        </div>
      </div>



    )
  }
}


export default Styles










