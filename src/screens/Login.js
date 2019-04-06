import React from 'react';
import anime from 'animejs';

const GOOGLE_BUTTON_ID = 'google-login-button';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
    };
  }

  componentDidMount() {
    window.gapi.signin2.render(
      GOOGLE_BUTTON_ID,
      {
        width: 200,
        height: 50,
        onsuccess: this.onSuccess,
      },
    );
    window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: this.onSuccess,
    });

    anime({
      targets: '.login-header',
      translateY: -100,
      opacity: [0, 1],
      easing: 'spring(1, 80, 10, 0)',
      duration: 600,
      delay: 500,
    });
  }

  onSuccess = (googleUser) => {
    // docs: https://developers.google.com/identity/sign-in/web/sign-in#before_you_begin
    this.setState({ profile: googleUser.getBasicProfile() });
    console.log(this.state.profile);
  }
  render() {
    return (
      <div className="login-container">
        <h1 className="login-header">Access your ecospire information!</h1>
        <div id={GOOGLE_BUTTON_ID} />
      </div>
    );
  }
}
