import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
  render() {
    return (
      <div>
        <h2 style={{ marginBottom: `20px` }}>Home Page</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sed
          est culpa sint totam voluptas beatae dolores voluptatibus, aperiam
          perspiciatis molestiae at vitae architecto omnis, hic fugit
          praesentium delectus veniam iure possimus quod fugiat saepe
          exercitationem. Labore nemo fugiat saepe, aliquam numquam ratione,
          pariatur, praesentium mollitia optio ipsum quia nisi!
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

Home.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
