import React from 'react';
import Chart from './Chart';
import { Line } from 'react-chartjs-2';

const options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      ticks: {
        min: 0,
        max: 50,
        stepSize: 10
      }          
    }],
    xAxes: [{
      ticks: {
        callback: function(value) {
          return value.substr(value.length - 5)
        },
      }
    }]
  },
  title: {
    display: true,
    text: 'Ilmankosteus'
  }
};

const Humidity = ({ ready, data }) =>
  <Chart ready={ready} content={<Line data={data} options={options} />} />;

export default Humidity;