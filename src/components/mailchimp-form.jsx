// external libs
import React, {Fragment} from "react";
import {StaticQuery} from "gatsby";
import addToMailchimp from 'gatsby-plugin-mailchimp';



// images & assets


// styles

const MailChimpContainer = () => (
  <StaticQuery
    query={graphql`
      query {

          wordpressPage(slug: {eq: "newsletter"}) {
            id
            content
          }
        }

    `}
    render={data => <MailChimpForm content={data.wordpressPage.content} />}
  />
)


class MailChimpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(this.state.email, {LNAME: this.state.name}) // listFields are optional if you are only capturing the email address.
    .then(data => {
      console.log(data)
      window.location.href = "/merci"
    })
    .catch(() => {
    })
  };

  handleChange = (e) => {
    // console.log(e.target.name)
    this.setState({
      [`${e.target.name}`]: e.target.value
    })
  };

  addCompleted = (e) => {
    e.target.classList.add('completed')
  }

  render() {
    return(
      <Fragment>
       <h3 className="centered-text">la newsletter collaborative de Platine</h3>
        <div dangerouslySetInnerHTML={{__html: this.props.content}}/>
        <form onSubmit={this.handleSubmit} id={this.props.id} className="form-stroked dark">
          <input type="text" name="name" placeholder="prénom :" onChange={this.handleChange} onBlur={this.addCompleted}/>
          <input type="email" name="email" placeholder="adresse mail :" onChange={this.handleChange} onBlur={this.addCompleted}/>
          <button className="button simple-button"><span>envoyer</span></button>
        </form>
      </Fragment>
    )
  }
}


export default MailChimpContainer;
