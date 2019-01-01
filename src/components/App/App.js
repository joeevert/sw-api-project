import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import CharacterCard from '../CharacterCard/CharacterCard';
import Footer from '../Footer/Footer';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  center: {
    margin: 'auto'
  }
};

class App extends Component {
  state = {
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PEOPLE' })
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'FETCH_PEOPLE' })
  }

  render() {
    const { classes } = this.props;
    return (
      <section className="App-section">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Header />
          </Grid>
        <div className={classes.center}>
            <CharacterCard />
            <button className="randomButton" onClick={this.handleClick}>
              Random Character
            </button>
            <Footer />
          {/* {JSON.stringify(this.props.reduxState.search)} */}
        </div>
        </Grid>
      </section>
    );
  }
}

const mapReduxToProps = reduxState => ({reduxState});

export default connect(mapReduxToProps)(withStyles(styles)(App));
