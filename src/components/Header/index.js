import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Header.css';
import '../../Common.css';

const proptypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  profilePicture: PropTypes.string,
};

const Header = (props) => {
  const { title, subtitle, profilePicture } = props;
  return (
    <header className="header">
      <Grid>
        <Row start="xs" middle="xs">
          <Col xs={12}>
            <Row middle="xs">
              <Col>
                <img className="profile-picture" alt="me" src={profilePicture} />
              </Col>
              <Col>
                <div className="content-left">
                  <h1 className="header-title">{title}</h1>
                  <p className="common-paragraph">{subtitle}</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </header>

  );
}

Header.propTypes = proptypes;

export default Header;
