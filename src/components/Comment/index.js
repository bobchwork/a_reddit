import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import TimeAgo from 'react-timeago'
import Comments from '../Comments';
import { getChildrenComments } from '../../helpers/helper';
import './Comment.css';

const proptypes = {
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func,
  postId: PropTypes.string,
  comments: PropTypes.array,
};

const Comment = (props) => {
  const {
    created_utc,
    body,
    author,
    id,
  } = props.comment;
  const postedTimeMessage = new Date(created_utc * 1000);
  const childrenComments = getChildrenComments(id, props.comments);

  return (
    <div className="comment">
      <Row middle="xs">
        <Col xs={6}>
          <p>
            <a className="comment-user" href="/" alt={author}>
              {author}
            </a>
            <span className="caption-text">
              &middot; &nbsp;
              <TimeAgo date={postedTimeMessage} />
            </span>
          </p>
        </Col>
        <Col xs={6}>
          <img className="content-right show-cursor" onClick={() => (props.deleteComment(id, props.postId))} alt="trash"
               src="./assets/Images/delete.svg" />
        </Col>
      </Row>
      <div className="comment-body-wrapper">
        <div className="comment-body">
          <div className="comment-vote-arrows">
            <i className="material-icons material-icons.md-12">arrow_drop_up</i>
            <i className="material-icons material-icons.md-12">arrow_drop_down</i>
          </div>
          <p className="content-left">
            {body}
          </p>
        </div>
        <div className="comments-wrapper">
          <Comments
            postComments={props.comments}
            deleteComment={props.deleteComment}
            postId={props.postId}
            comments={childrenComments}
          />
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = proptypes;

export default Comment;
