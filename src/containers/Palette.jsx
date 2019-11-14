import React, { Component } from 'react';
import { Segment, Grid, Dropdown, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as palette from '../actions/palette';
import areas from '../areas.json';
import colors from '../colors.json';

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: ''
    };
  }

  setColor = color => {
    const { area } = this.props;

    if (area) {
      document.getElementById(area).style.fill = color;
    }    
  }

  removeColors = () => {
    for (const area of areas) {
      document.getElementById(area.value).style.fill = 'none';
    }
  }

  render = () => {
    const { selectArea } = this.props;

    return (
      <Segment>
        <Grid container columns={2} padded>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Dropdown placeholder='Valitse alue' fluid onChange={(e, { value }) => selectArea(value)} selection options={areas} />
            </Grid.Column>         
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Dropdown placeholder='Valitse väri' clearable fluid onChange={(e, { value }) => this.setColor(value)} selection options={colors.map(c => ({ ...c, label: { style: { backgroundColor: c.value }, empty: true, circular: true }, }))} />
            </Grid.Column>        
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Button fluid secondary onClick={this.removeColors}>Poista kaikki värit</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  color: state.palette.selectedColor,
  area: state.palette.selectedArea
});

const mapDispatchToProps = dispatch => ({
  selectArea: area => dispatch(palette.setArea(area))
});

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
