import React from 'react';
import axios from 'axios';
import Donate from './../components/Donate';
import airports from './../data/airports.json';
import env from './../../env.json';
import CheckoutForm from './../components/CheckoutForm';

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
            const airportPromises = [];
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

                  airportPromises.push(axios({
                    method: 'POST',
                    url: 'http://impact.brighterplanet.com/flights.json',
                    data: {
                      origin_airport: originCode,
                      destination_airport: destinationCode,
                    },
                  }));
                }
              }
            });
            Promise.all(airportPromises).then((res) => {
              res.forEach((item) => {
                const carbonEmissions = {};
                carbonEmissions.carbon = item.data.decisions.carbon.object.value * 2.205;
                carbonEmissions.equivalents = {
                  days_of_veganism: item.data.equivalents.days_of_veganism,
                  weeks_of_veganism: item.data.equivalents.weeks_of_veganism,
                  months_of_veganism: item.data.equivalents.months_of_veganism,
                  years_of_veganism: item.data.equivalents.years_of_veganism,
                  lightbulbs_for_a_year: item.data.equivalents.lightbulbs_for_a_year,
                  lightbulbs_for_a_month: item.data.equivalents.lightbulbs_for_a_month,
                  lightbulbs_for_a_week: item.data.equivalents.lightbulbs_for_a_week,
                  lightbulbs_for_an_evening: item.data.equivalents.lightbulbs_for_an_evening,
                  homes_electricity_in_a_year: item.data.equivalents.homes_electricity_in_a_year,
                  homes_electricity_in_a_month: item.data.equivalents.homes_electricity_in_a_month,
                  homes_electricity_in_a_week: item.data.equivalents.homes_electricity_in_a_week,
                  homes_electricity_in_a_day: item.data.equivalents.homes_electricity_in_a_day,
                  homes_with_lowered_thermostat_2_degrees_for_a_winter: item.data.equivalents.homes_with_lowered_thermostat_2_degrees_for_a_winter,
                  homes_with_raised_thermostat_3_degrees_for_a_summer: item.data.equivalents.homes_with_raised_thermostat_3_degrees_for_a_summer,

                };
                console.log(carbonEmissions);
              });
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
