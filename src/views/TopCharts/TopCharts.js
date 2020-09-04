import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Page } from 'components';
import { Header, GooglePlay, AppApple } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
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

const TopCharts = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { tab, tabChild } = match.params;
  console.log(match);
  const handleTabsChange = (event, value) => {
    console.log(value);
    history.push(`/top-chart/${value}`);
  };

  const tabs = [
    { value: 'ios', label: 'iOS', icon: 'ic_ios.jpg' },
    { value: 'google-play', label: 'Google Play', icon: 'ic_google_play.png' }
  ];

  if (!tab) {
    return <Redirect to="/top-chart/ios/all" />;
  }

  // if (!tabs.find(t => t.value === tab)) {
  //   return <Redirect to="/errors/error-404" />;
  // }

  return (
    <Page className={classes.root} title="TopCharts">
      {/* <Header /> */}
      <Tabs
        style={{ minHeight: '45px', padding: '0px' }}
        className={classes.tabs}
        onChange={handleTabsChange}
        scrollButtons="auto"
        value={tab}
        variant="scrollable">
        {tabs.map(tab => (
          <Tab
            style={{ minHeight: '40px', padding: '0px' }}
            key={tab.value}
            label={tab.label}
            value={tab.value}
            icon={
              <img
                src={`/images/icon/${tab.icon}`}
                alt="react"
                width={20}
                style={{ margin: '0 10px 0 0', padding: '0px' }}
              />
            }
            classes={{
              labelContainer: classes.labelContainer,
              wrapper: classes.iconLabelWrapper
            }}
          />
        ))}
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {tab === 'ios' && <AppApple match={match} history={history} />}
        {tab === 'google-play' && <GooglePlay />}
      </div>
    </Page>
  );
};

TopCharts.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default TopCharts;
