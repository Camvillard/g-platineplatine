import React, { Fragment } from "react";
import { Link } from "gatsby";
import { createPrintedDate } from "../utilities/cards"

const CommentChild = (props) =>  {
  const comment = props.comment
  const authorAvatar = comment.author_avatar_urls.wordpress_96 ||  "img"
  const name = comment.author_name
  const url = comment.author_url
  return(
    <div className="comment-card child-comment">
      <div className="comment-header">
        <img src={authorAvatar} alt={`avatar for ${name}`} className="author-avatar"/>
        <div className="comment-meta">
          <a href={url} className="author-name">
            <span dangerouslySetInnerHTML={{ __html: comment.author_name}}  />
          </a>
          <p className="comment-date">le {createPrintedDate(comment.date)}</p>
        </div>
      </div>
      <div className="comment-content">
        <span dangerouslySetInnerHTML={{ __html: comment.content}} />
      </div>

    </div>
  )
}

const CommentCard = (props) => {
  const comment = props.comment
  const authorAvatar = comment.author_avatar_urls.wordpress_96 ||  "img"
  const name = comment.author_name
  const url = comment.author_url

  console.log(comment)


  return(
    <Fragment>
      <div className="comment-card">
        <div className="comment-header">
          <img src={authorAvatar} alt={`avatar for ${name}`} className="author-avatar"/>
          <div className="comment-meta">
            <a href={url} className="author-name" target="_blank" rel="noopener noreferrer">
              <span dangerouslySetInnerHTML={{ __html: name}}  />
            </a>
            <p className="comment-date">le {createPrintedDate(comment.date)}</p>
          </div>
        </div>
        <p className="comment-content">
          <span dangerouslySetInnerHTML={{ __html: comment.content}}  />
        </p>
      </div>
      {comment.children ?
        comment.children.map( com => <CommentChild key={com.node.id} comment={com.node} /> )
        : <Fragment />
      }
    </Fragment>
  )
}

export default CommentCard;
