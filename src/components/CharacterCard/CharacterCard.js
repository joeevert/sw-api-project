import React, { Component } from 'react';
import {connect} from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

const styles = {

};

class CharacterCard extends Component {
  state = {
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'FETCH_SEARCH' })
  }

  // handleChange = (event) => {
  //   console.log('in handleChange');
  //   this.setState({
  //     ...this.state,
  //     [event.target.name]: event.target.value,
  //   })
  // }

  toFeet = (height) => {
    console.log('mass', height);
    if( height === 'unknown' ){
      return 'unknown'
    }
    else {
    let realFeet = ((height * 0.393700) / 12);
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet) * 12);
    return `${feet}'${inches}"`;
    }
  }

  toPounds = (mass) => {
    if( mass === 'unknown' ){
      return 'unknown'
    }
    else {
    let regex = /,/g;
    let newMass = parseFloat(mass.replace(regex, ''));
    let pounds = newMass * 2.20462;
    return `${Math.round(pounds)} lbs`;
    }
  }

  render() {
    let regex = /[0-9]/g;
    const { classes } = this.props;
    return (
      <div className="infoContainer">
        {this.props.reduxState.search.url && 
        <img src={`/images/characters/${this.props.reduxState.search.url.match(regex).join('')}.jpg`}/>}
        <div className="info">
          <h1>Name: {this.props.reduxState.search.name}</h1>
          <h1>Height: {this.toFeet(this.props.reduxState.search.height)}</h1>
          {this.props.reduxState.search.mass && 
          <h1>Mass: {this.toPounds(this.props.reduxState.search.mass)}</h1>}
          <h1>Gender: {this.props.reduxState.search.gender}</h1>
        </div>
      </div>
    );
  }
}

const mapReduxToProps = reduxState => ({reduxState});

export default connect(mapReduxToProps)(withStyles(styles)(CharacterCard));
