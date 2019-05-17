// external libs
import React from "react";
import addToMailchimp from 'gatsby-plugin-mailchimp';

// internal components


// images & assets


// styles


class MailChimpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: ''
    }
  }

  handleSubmit = (e) => {
    console.log(this.state.name)
    console.log(this.state.email)
    e.preventDefault();
    addToMailchimp(this.state.email, {LNAME: this.state.name}) // listFields are optional if you are only capturing the email address.
    .then(data => {
      // I recommend setting data to React state
      // but you can do whatever you want (including ignoring this `then()` altogether)
      console.log(data)
    })
    .catch(() => {
      // unnecessary because Mailchimp only ever
      // returns a 200 status code
      // see below for how to handle errors
    })
  };

  handleChange = (e) => {
    // console.log(e.target.name)
    this.setState({
      [`${e.target.name}`]: e.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} id={this.props.id}>
        <input type="text" name="name" placeholder="prénom :" onChange={this.handleChange} />
        <input type="email" name="email" placeholder="adresse mail :" onChange={this.handleChange}/>
        <button type="submit">envoyer</button>
      </form>
    )
  }
}


export default MailChimpForm;
