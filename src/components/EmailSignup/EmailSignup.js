import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressButton from 'react-progress-button';

import cross from './cross.svg';
import snowboarders from '../FourOhFour/snowboarders.svg';
import './EmailSignup.css';

const EmailSignupForm = ({ onSubmitClick, onDismissClick, submitButtonStatus }) => (
  <div className="EmailSignupForm-container">
    <input
      type="email"
      name="email"
      placeholder="email"
      className="EmailSignupForm-input"
    />
    <ProgressButton
      onClick={onSubmitClick}
      state={submitButtonStatus}
    >
      Submit
    </ProgressButton>
    <button
      name="cancle"
      className="EmailSignupForm-cross"
      onClick={onDismissClick}
    >
      <img alt="cancel" src={cross} />
    </button>
  </div>
);

class EmailSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ buttonState: 'loading' });
    // make asynchronous call
    setTimeout(() => {
      this.setState({ buttonState: 'error' });
    }, 3000);
  }

  render() {
    const EmailSignupTitle = () => (
      <div className="EmailSignupTitle-container">
        <div className="row no-gutters">
          <div className="col-12 col-md-auto">
            <div
              className="EmailSignupTitle-img"
            >
              <img
                alt="snowboarders"
                src={snowboarders}
              />
            </div>
          </div>
          <div className="col-12 col-md">
            <div className="EmailSignupTitle-content">
              <div
                style={{
                  fontSize: '30px',
                  marginBottom: '0.5pc',
                  color: '#4A4A4A',
                }}
              >
                Want updates via email?
              </div>
              <div
                style={{
                  fontSize: '16px',
                  marginBottom: '0.5pc',
                  fontWeight: '300',
                  color: '#4A4A4A',
                }}
              >
                We promise not to spam your inbox.
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div className="EmailSignup-wrapper">
        <div className="row no-gutters">
          <div className="col-12 col-lg-6 col-xl-7">
            <EmailSignupTitle />
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <EmailSignupForm
              onSubmitClick={this.handleClick}
              submitButtonStatus={this.state.buttonState}
              onDismissClick={this.props.onDismissClick}
            />
          </div>
        </div>
      </div>
    );
  }
}


export default EmailSignup;
