import React from 'react';
import { Typography, Grid, CardContent, Card} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({ covidInfo: { confirmed, recovered, deaths, lastUpdate } }) => {
    
    if(!confirmed){
        return <h3 pt={10}>Loading....</h3>
    }
    
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Infected</Typography>
                <Typography variant="h5" component="h2">
                <CountUp start={0} end={confirmed?.value} duration={2.75} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of active cases from COVID-19.</Typography>
            </CardContent>
            </Grid>

            <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Recoveries</Typography>
                <Typography variant="h5"  component="h2">
                <CountUp start={0} end={recovered?.value} duration={2.75} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of recoveries cases from COVID-19.</Typography>
            </CardContent>
            </Grid>

            <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                <Typography variant="h5"  component="h2">
                <CountUp start={0} end={deaths?.value} duration={2.75} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of deaths cases from COVID-19.</Typography>
            </CardContent>
            </Grid>

        </Grid>
    </div>
    );
};

export default Cards;