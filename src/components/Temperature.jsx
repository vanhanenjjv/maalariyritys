import React from 'react';
import Chart from './Chart';
import { Bar } from 'react-chartjs-2';

const options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      ticks: {
        min: 0,
        max: 30,
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
    text: 'Lämpötila'
  }
};

const Temperature = ({ ready, data }) => 
  <Chart ready={ready} content={<Bar data={data} options={options} />} />

export default Temperature;