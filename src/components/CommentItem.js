import React from 'react';
import './VideoItem.css';

const CommentItem = ({ comment }) => {
  return (
    <div className="video-item item">
      <div className="content">
        <div className="header"> From : {comment.snippet.topLevelComment.snippet.authorDisplayName}, updated at : {comment.snippet.topLevelComment.snippet.updatedAt}</div>
        <p> {comment.snippet.topLevelComment.snippet.textDisplay} </p>
      </div>
    </div>
  )
};

export default CommentItem;
