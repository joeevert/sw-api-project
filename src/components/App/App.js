import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import CharacterCard from '../CharacterCard/CharacterCard';
import Footer from '../Footer/Footer';

import { withStyles } from '@material-ui/core/styles';

const styles = {

};

class App extends Component {
  state = {
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_SEARCH' })
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
      <div>
        <section className="App-section">
          <Header />
          <CharacterCard />
          <button className="randomButton" onClick={this.handleClick}>
            Random Character
          </button>
        </section>
        {JSON.stringify(this.props.reduxState.search)}
        <Footer />
      </div>
    );
  }
}

const mapReduxToProps = reduxState => ({reduxState});

export default connect(mapReduxToProps)(withStyles(styles)(App));
