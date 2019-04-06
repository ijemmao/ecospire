import React from 'react';

const GOOGLE_BUTTON_ID = 'ijemma';

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
