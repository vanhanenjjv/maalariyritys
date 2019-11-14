import React from 'react';
import { Grid, Header, List, Segment } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted style={footer}>
    <Grid container>
      <Grid.Row>
        <Header inverted>
          Masan maalaus- ja tapetointi
        </Header>
      </Grid.Row>
      <Grid.Row>
        <List inverted>
          <List.Item>
            <List.Icon name='marker' />
            <List.Content>Rautatieläisenkatu 12, 00520 Helsinki</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='phone' />
            <List.Content>
              <a href='tel:+358503331234'>050 333 1234</a>
            </List.Content> 
          </List.Item>
          
          <List.Item>
            <List.Icon name='mail' />
            <List.Content>
              <a target="blank" href='mailto:masa@masanmjat.fi'>masa@masanmjat.fi</a>
            </List.Content> 
          </List.Item>
        </List>
      </Grid.Row>
    </Grid>
  </Segment>
);

const footer = {  
  margin: '5em 0em 0em',
  padding: '3em 0em',
  borderRadius: 0
};

export default Footer;