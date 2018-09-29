import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {

  return (
    <div>
      <Paper className={props.classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          {props.paperHeadline}
        </Typography>
        <Typography component="p">
          {props.paperComment}
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  paperHeadline: PropTypes.string,
  paperComment: PropTypes.string,
};

export default withStyles(styles)(PaperSheet);