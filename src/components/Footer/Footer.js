import React, { Component } from 'react';
import {connect} from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

const styles = {
};

class Footer extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <p>Star Wars and all associated names and/or images are copyright Lucasfilm Ltd. Images were freely collected from Wookiepedia.</p>
      </div>
    );
  }
}

const mapReduxToProps = reduxState => ({reduxState});

export default connect(mapReduxToProps)(withStyles(styles)(Footer));
