import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({ comments }) => {

  const renderList = comments.map((comment) => {
    return <CommentItem
            key={comment.snippet.topLevelComment.id}
            comment={comment}
           />;
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default CommentList;
