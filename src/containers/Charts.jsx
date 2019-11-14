import axios from 'axios';
import React, { Component } from 'react';
import { Grid, Tab } from 'semantic-ui-react';
import Humidity from '../components/Humidity';
import Temperature from '../components/Temperature';
import * as chart from '../helpers/chart';
import data from '../data.json';

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: undefined,
      humidity: undefined,
      ready: false,
      error: false
    };   
  }

  chartTabs = [
    { 
      menuItem: 'Lämpötila', 
      render: () => <Temperature ready={this.state.ready} data={this.state.temperature} />
    },
    { 
      menuItem: 'Ilmankosteus',
      render: () => <Humidity ready={this.state.ready} data={this.state.humidity} />
    }
  ];

  componentDidMount = () => {
    axios.get('https://public.bc.fi/katta/Taitaja2019/data.json')
      .then(response => {
        this.setState({
          ...this.state,
          temperature: chart.buildTemperatureData(response.data),
          humidity: chart.buildHumidityData(response.data),
          ready: true
        });
      })
      .catch(error => {
        this.setState({
          ...this.state,
          error: true
        });
      });
  }

  content = () => (
    <Grid container>
      <Grid.Row>
        <Grid.Column>
          <Tab menu={{ secondary: true, pointing: true }} panes={this.chartTabs} />
        </Grid.Column>
      </Grid.Row>
    </Grid>   
  );

  error = () => <p>Failed to fetch the data</p>;

  render = () => 
    this.state.error ? this.error() : this.content();
}

export default Charts;