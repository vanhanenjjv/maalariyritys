import React from 'react';
import { Tab } from 'semantic-ui-react';

const Chart = ({ ready, content }) => ready ? loaded(content) : loading();

const loaded = content => (
  <Tab.Pane attached={false}>
    <div style={chart}>
      {content} 
    </div>
  </Tab.Pane>
);

const loading = () => <Tab.Pane attached={false} loading />;

const chart = {
  minHeight: '40vh'
};


export default Chart;