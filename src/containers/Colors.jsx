import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Palette from './Palette';
import { connect } from 'react-redux';

class Colors extends Component {
  render = () => {
    return (
      <Grid stackable centered columns={2}>
        <Grid.Column>
        <Segment>
          <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/room.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            <svg className='ui image' id="Room" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 384">
              <polygon id="WallRight" points="281 217 511 257 512 0 281 0 281 217" fillOpacity="0.4" fill="none"/>
              <polygon id="WallLeft" points="215 240 122 282 113 282 104 278 93 273 87 273 87 261 87 257 82 257 74 257 51 257 35 263 20 269 10 280 0 297.1 0 0 207.66 0 215 240" fillOpacity="0.4" fill="none"/>
              <polygon id="Floor" points="281 230 281 265 272 265 220 252 140 290 154 301 155 306 153 316 138 326 108 345 80 357 50 367 24 359 10 352 0 353.78 0 384 512 384 512 271.29 281 230" fillOpacity="0.4" fill="none"/>
            </svg>
          </div>
         
        </Segment>
        </Grid.Column>
        <Grid.Column  >
          <Palette />
        </Grid.Column>
      </Grid>     
    );
  }
}

const mapStateToProps = state => ({
  color: state.palette.currentColor
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Colors);