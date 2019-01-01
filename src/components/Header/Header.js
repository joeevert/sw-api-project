import React, { Component } from 'react';
import {connect} from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  logo: {
    display: 'block',
    margin: '100px auto',
    maxWidth: '40%',
  }
};

class Header extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <img className={classes.logo} src={`/images/2000px-Star_Wars_Yellow_Logo.svg.png`} alt="Star Wars" />
      </div>
    );
  }
}

const mapReduxToProps = reduxState => ({reduxState});

export default connect(mapReduxToProps)(withStyles(styles)(Header));
