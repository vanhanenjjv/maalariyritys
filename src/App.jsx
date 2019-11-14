import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import Charts from './containers/Charts';
import Colors from './containers/Colors';

const App = () => (
  <Layout>
    <Route exact path='/' component={Charts} />
    <Route path='/charts' component={Charts} />
    <Route path='/colors' component={Colors} />
  </Layout>
);

export default App;
