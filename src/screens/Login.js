import React from 'react';
import anime from 'animejs';
import env from './../../env.json';

const GOOGLE_BUTTON_ID = 'google-login-button';
const CLIENT_ID = env.GOOGLE_CLIENT_ID;

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
      targets: '.login-header .login-subheader',
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

    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        // apiKey: API_KEY,
        client_id: CLIENT_ID,
        // discoveryDocs: DISCOVERY_DOCS,
        // scope: SCOPES,
      }).then(() => {
        window.gapi.auth2.getAuthInstance().signIn().then(() => {
          // console.log('fdsafds');
          window.location = 'http://localhost:8080/facts';
          console.log(this.state.profile);
        });
      });
    });
    // if (this.state.profile) {
    // }
  }
  render() {
    return (
      <div className="login-container">
        <h1 className="login-header">eco<span className="light">spire</span></h1>
        <h3 className="login-subheader">See how you can go carbon-neutral</h3>
        <div id={GOOGLE_BUTTON_ID} />
      </div>
    );
  }
}
