import React from 'react';
import Donate from './../components/Donate';
import env from './../../env.json';

const CLIENT_ID = env.GOOGLE_CLIENT_ID;
const API_KEY = env.API_KEY;
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

export default class Facts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // driving: 0,
      // flying: 0,
      // averageComparison: 0,
      // offsetFootprint: 0,
    };
  }

  componentWillMount = () => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        apiKey: API_KEY,
        client_id: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(() => {
        window.gapi.auth2.getAuthInstance().signIn().then(() => {
          window.gapi.client.calendar.events.list({
            calendarId: 'primary',
            timeMin: (new Date()).toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 1000,
            orderBy: 'startTime',
          }).then((response) => {
            console.log(response);
            // const events = response.result.items;
            // this.appendPre('Upcoming events:');

            // if (events.length > 0) {
            //   for (let i = 0; i < events.length; i += 1) {
            //     const event = events[i];
            //     let when = event.start.dateTime;
            //     if (!when) {
            //       when = event.start.date;
            //     }
            //     this.appendPre(`${event.summary} (${when})`);
            //   }
            // } else {
            //   this.appendPre('No upcoming events found.');
            // }
          });
        });
      });
    });
  }

  componentDidMount = () => {
  }

  appendPre = (message) => {
    console.log(message);
  }

  render() {
    return (
      <div className="facts-container">
        <h1>Here are the Facts</h1>

        <h2>How to Offset your Carbon Footprint:</h2>
        <Donate />
        <Donate />
        <Donate />
        <Donate />
      </div>
    );
  }
}
