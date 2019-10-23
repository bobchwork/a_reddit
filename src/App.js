import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { deleteComment, getPosts } from './actions/posts';
import Header from './components/Header';
import Post from './components/Post';
import './App.css';
import './Common.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'dummy title',
      subtitle: 'Myfeeds account',
      profilePicture: null,
      posts: [],
      currentIndex: 4,
    }
    this.showMore = this.showMore.bind(this);
    this.sortPostsByLast = this.sortPostsByLast.bind(this);
  }

  componentDidMount() {
    getPosts();
    const { firstname, surname, profilePicture } = this.props.user;
    this.setState({
      profilePicture,
      title: `${firstname} ${surname}`,
    });
  }

  showMore() {
    this.setState({
      currentIndex: this.state.currentIndex + 4,
    });
  }

  sortPostsByLast() {
    // TODO: sort by last
    alert('TODO');
  }

  render() {
    const posts = this.props.posts;
    const postsContent = posts && posts.length > 0 && posts.map((post) => (
      <Post post={post} key={post.id} deleteComment={deleteComment} />
    ));

    const content = postsContent && postsContent.slice(0, this.state.currentIndex);

    return (
      <div className="app-container">
        <Header
          title={this.state.title}
          subtitle={this.state.subtitle}
          profilePicture={this.state.profilePicture}
        />
        <div className="app-container-body container rounded-borders">
          <Grid>
            <Row start="xs">
              <Col xs={12}>
                <button className="app-button app-last-commentted-button" type="button" onClick={this.sortPostsByLast}>Sort by
                  last Commentted
                </button>
              </Col>
            </Row>
            <Row start="xs">
              <Col xs={12} md={10}>
                {!content.length === 0 &&
                <div>
                  This user does not have any posts yet!
                </div>
                }
                {content.length > 0 &&
                <div className="app-post-wrapper">
                  {content}
                </div>
                }
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="container">
          <Row end="xs">
            <Col>
              <div className="button-wrapper">
                <button className="app-button see-more-button" type="button" onClick={this.showMore}>
                  <img src="./assets/Images/filled.svg" alt="see more" />
                  <span>SEE MORE</span>
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    user: state.main.user,
    posts: state.main.posts,
  }),
  {
    deleteComment,
    getPosts,
  }
)(App);
