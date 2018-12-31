import React, { Component } from 'react';
import {connect} from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

const styles = {
   footer: {
     marginTop: 75,
     textAlign: 'center'
   }
};

class Footer extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <p className={classes.footer}>Star Wars and all associated names and/or images are copyright Lucasfilm Ltd.</p>
      </div>
    );
  }
}

const mapReduxToProps = reduxState => ({reduxState});

export default connect(mapReduxToProps)(withStyles(styles)(Footer));
