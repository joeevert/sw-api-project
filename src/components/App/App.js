import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

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

  handleChange = (event) => {
    console.log('in handleChange');
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  }

  render() {
    let regex = /[0-9]/g;
  
    return (
      <div>
        <section className="App-section">
          <img className="logo" src={`/images/2000px-Star_Wars_Yellow_Logo.svg.png`}/>
          <div className="infoContainer">
            {this.props.reduxState.search.url && 
            <img src={`/images/characters/${this.props.reduxState.search.url.match(regex).join('')}.jpg`}/>}
            <div className="info">
              <h1>Name: {this.props.reduxState.search.name}</h1>
              <h1>Height: {this.props.reduxState.search.height}</h1>
              <h1>Mass: {this.props.reduxState.search.mass}</h1>
              <h1>Gender: {this.props.reduxState.search.gender}</h1>

            </div>
          </div>
          <button className="randomButton" onClick={this.handleClick}>
            Random Character
          </button>
        </section>
        {/* {JSON.stringify(this.props.reduxState.search)} */}
      </div>
    );
  }
}

const mapReduxToProps = reduxState => ({reduxState});

export default connect(mapReduxToProps)(App);
