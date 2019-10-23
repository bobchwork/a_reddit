import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment';

const proptypes = {
  comments: PropTypes.array,
  postComments: PropTypes.array,
  postId: PropTypes.string,
  deleteComment: PropTypes.func
}

const Comments = (props) => {
  const { deleteComment, postId, postComments, comments } = props;
  const commentsGroup = comments && comments.map((comment) => {
    return <Comment
      key={comment.id}
      comment={comment}
      deleteComment={deleteComment}
      postId={postId}
      comments={postComments}
    />
  });
  return (
    <Fragment>
      {commentsGroup}
    </Fragment>
  );
}

Comments.propType = proptypes;

export default Comments;
