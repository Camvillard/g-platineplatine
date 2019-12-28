import React from "react";
import { Link } from "gatsby";
import { createPrintedDate } from "../utilities/cards"

const CommentChild = (props) =>  {
  return(
    <p>todo</p>
  )
}

const CommentCard = (props) => {
  const comment = props.comment
  const authorAvatar = comment.author_avatar_urls.wordpress_96 ||  "img"
  const name = comment.author_name
  const url = comment.author_url


  return(
    <div className="comment-card" >
      <img src={authorAvatar} alt={`avatar for ${name}`} className="author-avatar"/>
      <div className="comment-meta">
        <p className="author-name">
          <span dangerouslySetInnerHTML={{ __html: name}}  />
        </p>
        <p className="comment-date">le {createPrintedDate(comment.date)}</p>
      </div>
      <p className="comment-content">
        <span dangerouslySetInnerHTML={{ __html: comment.content}}  />
      </p>
    </div>
  )
}

export default CommentCard;
