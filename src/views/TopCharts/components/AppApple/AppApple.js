import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Tabs,
  Tab,
  Divider,
  colors,
  Typography,
  Box,
  Paper,
  FormControl,
  MenuItem,
  Select,
  InputLabel
} from '@material-ui/core';

import axios from 'utils/axios';
import { Redirect } from 'react-router-dom';
import AllAppApple from './components/AllAppApple';

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
  title: {},
  formControl: {
    margin: '15px 15px 15px 0',
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const AppApple = props => {
  const { className, match, history } = props;
  console.log(match);
  const classes = useStyles();
  const devices = [
    { name: 'iPhone', value: 'iPhone' },
    { name: 'iPad', value: 'iPad' }
  ];
  const countries = [
    { name: 'iPhone', value: 'iPhone' },
    { name: 'iPad', value: 'iPad' }
  ];
  const categories = [
    { name: 'iPhone', value: 'iPhone' },
    { name: 'iPad', value: 'iPad' }
  ];
  const purchases = [
    { name: 'iPhone', value: 'iPhone' },
    { name: 'iPad', value: 'iPad' }
  ];
  const [value, setValue] = React.useState({
    device: devices[0].value,
    country: countries[0].value,
    category: categories[0].value,
    purchase: purchases[0].value
  });
  const { tab, tabChild } = match.params;

  const tabs = [
    { value: 'all', label: 'All' },
    { value: 'free', label: 'Free' },
    { value: 'paid', label: 'Paid' },
    { value: 'grossing', label: 'Grossing' }
  ];

  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);
  if (!tabChild) {
    return <Redirect to="/top-chart/ios/all" />;
  }

  const handleChange = event => {
    setValue(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };
  const handleTabsChange = (event, value) => {
    console.log(value);
    history.push(value);
  };
  // useEffect(() => {
  //   let mounted = true;

  //   const fetchProfile = () => {
  //     axios.get('/api/account/profile').then(response => {
  //       if (mounted) {
  //         setProfile(response.data.profile);
  //       }
  //     });
  //   };

  //   fetchProfile();

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  // if (!profile) {
  //   return null;
  // }
  return (
    <Grid
      // {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}>
      <Typography variant="h3" className={classes.title}>
        iOS Top App Charts
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid>
          <FormControl variant="outlined" className={classes.formControl}>
            <Typography variant="subtitle2">
              <small>Device</small>
            </Typography>

            <Select
              // labelWidth={labelWidth}
              value={value.device}
              onChange={handleChange}
              inputProps={{
                name: 'device',
                id: 'outlined-age-simple'
              }}
              style={{ height: '40px' }}>
              {devices.map((item, index) => {
                return <MenuItem value={item.value}>{item.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <Typography variant="subtitle2">
              <small>Country/Region</small>
            </Typography>

            <Select
              // labelWidth={labelWidth}
              value={value.country}
              onChange={handleChange}
              inputProps={{
                name: 'country',
                id: 'outlined-age-simple'
              }}
              style={{ height: '40px' }}>
              {countries.map((item, index) => {
                return <MenuItem value={item.value}>{item.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <Typography variant="subtitle2">
              <small>Category</small>
            </Typography>

            <Select
              // labelWidth={labelWidth}
              value={value.category}
              onChange={handleChange}
              inputProps={{
                name: 'category',
                id: 'outlined-age-simple'
              }}
              style={{ height: '40px' }}>
              {categories.map((item, index) => {
                return <MenuItem value={item.value}>{item.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <Typography variant="subtitle2">
              <small>In App Purchase</small>
            </Typography>

            <Select
              // labelWidth={labelWidth}
              value={value.purchase}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'outlined-age-simple'
              }}
              style={{ height: '40px' }}>
              {purchases.map((item, index) => {
                return <MenuItem value={item.value}>{item.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      <Grid style={{ width: '100%', margin: '15px 0' }}>
        <Tabs
          className={classes.tabs}
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={tabChild}
          variant="scrollable"
          style={{ minHeight: '35px', padding: '0px' }}>
          {tabs.map(tab => (
            <Tab
              style={{ minHeight: '30px', minWidth: '80px' }}
              key={tab.value}
              label={tab.label}
              value={tab.value}

              // classes={{
              //   labelContainer: classes.labelContainer,
              //   wrapper: classes.iconLabelWrapper
              // }}
            />
          ))}
        </Tabs>
        <Divider className={classes.divider} />
      </Grid>
      <div>
        {tabChild === 'all' && <AllAppApple />}
        {tabChild === 'free' && <AllAppApple />}
        {tabChild === 'paid' && <AllAppApple />}
        {tabChild === 'grossing' && <AllAppApple />}
      </div>
    </Grid>
  );
};

AppApple.propTypes = {
  className: PropTypes.string
};

export default AppApple;
