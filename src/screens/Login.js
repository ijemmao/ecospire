import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleId: 'test',
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
    const profile = googleUser.getBasicProfile();
    console.log(`Name: ${profile.getName()}`);
  }
  render() {
    return (
      <div>
        Ijemma: {this.state.googleId}

        <div id={GOOGLE_BUTTON_ID} />
      </div>
    );
  }
}
