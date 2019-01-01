import React, { Component } from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    margin: '0px 25px 25px 25px',
    border: '3px solid #ffe81f',
    borderRadius: '10px',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px 10px 0px 0px'
  },
  container: {
    backgroundColor: '#fff',
    padding: '20px 20px',
    borderRadius: '0px 0px 10px 10px'
  }
});

class CharacterCard extends Component {
  state = {
    
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'FETCH_SEARCH' })
  }

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
      <div className={classes.card}>
        {this.props.reduxState.search.url && 
        <img
          className={classes.image}
          src={`/images/characters/${this.props.reduxState.search.url.match(regex).join('')}.jpg`}
          alt={this.props.reduxState.search.name}
        />}
        <div className={classes.container}>
          <Typography component="h5" variant="h5">
            {this.props.reduxState.search.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Height: {this.toFeet(this.props.reduxState.search.height)}
          </Typography>
          {this.props.reduxState.search.mass &&
          <Typography variant="subtitle1" color="textSecondary">
            Weight: {this.toPounds(this.props.reduxState.search.mass)}
          </Typography>}
          <Typography variant="subtitle1" color="textSecondary">
            Gender: {this.props.reduxState.search.gender}
          </Typography>
        </div>
      </div>
    );
  }
}

CharacterCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

const mapReduxToProps = reduxState => ({reduxState});

export default connect(mapReduxToProps)(withStyles(styles)(CharacterCard));
