import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { required, email, password } from '../../shared/utils/form_validations';
import { renderInput } from '../../shared/utils/form_components';

const LoginForm = ({ handleSubmit, error, submitting }) => {
  const btnState = submitting ? 'is-loading' : '';
  
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="email"
        component={renderInput}
        label="Email"
        placeholder="Email"
        validate={[required, email]}
      />
      
      <Field
        name="password"
        type="password"
        component={renderInput}
        label="Password"
        placeholder="Password"
        validate={[required, password]}
      />

      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="control">
            <button className={`button ${btnState} is-primary`}>
              Login
            </button>
            {error && <p className="help is-danger">{error}</p>}
          </div>
          <div className="control forgot-link">
            <Link to={'/forgot-password'}>Forgot password?</Link>
          </div>
        </div>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default reduxForm({ form: 'loginForm' })(LoginForm);
