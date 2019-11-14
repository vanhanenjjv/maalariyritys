import React from 'react';
import { Grid } from 'semantic-ui-react';
import Footer from './Footer';
import MenuBar from './MenuBar';

const Layout = ({ children }) => (
  <>
    <MenuBar />
    <Grid container centered>
      <Grid.Column>
        {children}
      </Grid.Column>
    </Grid>
    <Footer />
  </>
);

export default Layout;