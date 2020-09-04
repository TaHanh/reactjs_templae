import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Page } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto'
  },
  tabs: {
    // marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  },
  labelContainer: {
    width: 'auto',
    padding: 0
  },
  iconLabelWrapper: {
    flexDirection: 'row'
  }
}));

const AllAppApple = props => {
  const { match, history } = props;
  const classes = useStyles();
  console.log(match);

  return (
    <Page className={classes.root} title="AllAppApple">
      {/* <Header /> */}
      jhdfjhdfj
      <Divider className={classes.divider} />
    </Page>
  );
};

AllAppApple.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default AllAppApple;
