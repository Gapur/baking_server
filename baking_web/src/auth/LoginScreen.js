import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

import LoginForm from './components/LoginForm';

const { Content } = Layout;

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <Layout>
        <Content className="login-container">
          <LoginForm onSubmit={this.onSubmit} />
          <span className="login-link">
            <span>New to Baking?</span>
            <Link to="/signup">Sign up here</Link>
          </span>
        </Content>
      </Layout>
    );
  }
}

LoginScreen.propTypes = {
  push: PropTypes.func.isRequired,
};

export default connect(null, { push })(LoginScreen);
