import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Segment, Image } from 'semantic-ui-react';

const MenuBar = () => (
  <Segment inverted style={{borderRadius: '0px'}}>
    <Menu size='small'
          inverted
          pointing
          secondary
          stackable>
      <Container>
        <Menu.Item style={ {  } } header>
          <img src={`${process.env.PUBLIC_URL}/suti.png`} style={ { marginRight: 8 } } />
          Masan <br />
          maalaus- ja tapetointi
        </Menu.Item>

        <Menu.Item style={item} as={Link} to='/charts'>
          Data
        </Menu.Item>
        <Menu.Item style={item} as={Link} to='/colors'>
          Maalit ja tapetit
        </Menu.Item>
      </Container>
    </Menu>
  </Segment>
);

const item = {
  alignSelf: 'center'
}

export default MenuBar;