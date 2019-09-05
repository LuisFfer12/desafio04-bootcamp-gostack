import React from 'react';

// import { Container } from './styles';

function Comment({ comments }) {
  return (
    <div className="post-comment">
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>
              <strong>{comment.author.name}</strong>
              {comment.content}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={author.avatar}></img>
        <div className="details">
          <strong>{author.name}</strong>
          <span>{date}</span>
        </div>
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
      <Comment comments={comments} />
    </div>
  );
}
