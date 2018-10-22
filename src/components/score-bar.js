import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class LinearScore extends React.Component {
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <p>Test</p>
        <LinearProgress variant="determinate" value={this.state.completed} style={{height: 25}} />
        <br />
        <p>Test</p>
        <LinearProgress color="secondary" variant="determinate" value={this.state.completed} style={{height: 25}}/>
      </div>
    );
  }
}

LinearScore.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearScore);