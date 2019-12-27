// external libs
import React from "react";


class CommentForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      website: '',
      comment: ''
    }
  }

  onInputBlur = (e) => {
    const {name, value} = e.target
    console.log("name", name)
    console.log("value", value )
    this.setState({
      [`${name}`]: value
    })

  };

  showMessage = (message) => {
    const validation = document.getElementById('comment-validation')
    validation.innerHTML = `<p>${message}</p>`
  };

  clearForm = () => {
    const form = document.querySelector('#comment-form')
    console.log(form)
    form.reset()
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.postComment()
  };

  postComment = () => {
    console.log(this.state)
    typeof window !== 'undefined' && window.fetch('https://contenu.platineplatine.com/wp-json/wp/v2/comments', {
      method: 'POST',
      body: JSON.stringify( {
                author_email: this.state.email,
                author_name: this.state.name,
                author_url: this.state.website,
                content: this.state.comment,
                post: this.props.postId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      if (res.message) {
        alert(res.message)
        // this.showMessage(res.message)
      } else {
        alert("votre commentaire est en attente de valudation")
      // this.showMessage("votre commentaire est en attente de validation, il s'affichera sous peu!")
      }
    })
    this.clearForm()
    // this.showMessage(message)
  }

  render(){
    return(
      <form action="/" id="comment-form" className="form-stroked dark post-comment-form" onSubmit={this.handleSubmit}>

        <input type="text" name="name" placeholder="nom, prénom :" onBlur={this.onInputBlur}/>

        <input type="url" name="website" placeholder="site web:" onBlur={this.onInputBlur}/>


        <input type="email" name="email" placeholder="adresse mail :" onBlur={this.onInputBlur}/>

        <textarea placeholder="commentaire :" type="textarea" name="comment" rows="12" cols="33" onBlur={this.onInputBlur}/>

        <div className="button-block">
          <button type="submit" className="button button-stroked">envoyer le commentaire</button>
        </div>
      </form>
    )
  }
}

export default CommentForm;
