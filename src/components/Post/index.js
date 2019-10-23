import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import Comment from '../Comment';
import AccordionOpener from '../AccordionOpener';
import '../../Common.css';
import './Post.css';

const proptypes = {
  post: PropTypes.object.isRequired,
  deleteComment: PropTypes.func
};

const defaultPropTypes = {
  deleteComment: () => {
  },
};

const Post = (props) => {
  const [state, setState] = useState({
    isOpen: false,
  });
  const toggleComments = () => {
    setState({
      isOpen: !state.isOpen,
    });
  };
  const {
    comments,
    selftext,
    title,
    thumbnail,
    id
  } = props.post;

  const image = (thumbnail === 'self' || thumbnail === 'default') ? './assets/Images/defaultbg.png' : thumbnail;
  const commentsContent = [];
  comments.forEach((comment) => {
      if (comment.depth === 0) {
        commentsContent.push(
          <Comment
            comment={comment}
            postId={id}
            key={comment.id}
            deleteComment={props.deleteComment}
            comments={comments}
          />
        );
      }
    }
  );


  const commentsNumber = commentsContent.length;

  return (
    <Fragment>
      <div className="post-container rounded-borders">
        <Row top="xs">
          <Col xs={2}>
            <img className="post-image" src={image} alt="post" />
          </Col>
          <Col xs={10}>
            <Row>
              <Col xs={12}>
                <Row top="xs" className="post-row-description-container">
                  <h1 className="post-title ">
                    {title}
                  </h1>
                  <div className="post-paragraph-container module line-clamp">
                    <p className="common-paragraph">
                      {selftext || 'No description.'}
                    </p>
                  </div>
                </Row>
                <Row bottom="xs" className="post-row-comment-container" end="xs">
                  <div className="post-comments-top">
                    <p className="common-paragraph">
                      <img src='./assets/Images/mode_comment.svg' alt="comment" />
                      <span className="caption-text">
                        {commentsNumber}
                    </span>
                      <AccordionOpener isOpen={state.isOpen} onClickHandle={toggleComments} />
                    </p>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row top="xs">
          <Col xs={12}>
            <div className="post-comments-wrapper">
              {state.isOpen &&
              <div className="post-comments content-left">
                {commentsContent}
              </div>
              }
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

Post.propTypes = proptypes;
Post.defaultPropTypes = defaultPropTypes;

export default Post;
