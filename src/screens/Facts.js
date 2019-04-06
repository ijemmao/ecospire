import React from 'react';
import Donate from './../components/Donate';
import airports from './../data/airports.json';
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
            alwaysIncludeEmail: true,
            q: 'flight',
          }).then((response) => {
            const events = response.result.items;
            console.log(events);
            events.forEach((flight) => {
              if (flight.location && flight.summary) {
                if (flight.location.split(' ').length === 2 && (flight.summary.split(' ').length === 3 || flight.summary.split(' ').length === 5)) {
                  const originCode = flight.location.split(' ')[1];
                  let destinationCode = '';
                  airports.forEach((airport) => {
                    if (airport.city === flight.summary.split(' ')[2]) {
                      destinationCode = airport.code;
                    }
                  });
                  console.log(originCode, destinationCode);
                }
              }
            });
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
