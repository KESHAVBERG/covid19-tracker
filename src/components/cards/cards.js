import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react'
import styles from './cards.module.css';

import cx from 'classnames';
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, lastUpdate, deaths } }) => {
    if (!confirmed) {
        return "loading.."
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={4} justify='center'>
                <Grid item component={Card} xs={12} md={3}
                    className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary"  >
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="h5" >
                            No.of active
                        </Typography>
                    </CardContent>
                </Grid>
                {/* ************************************* */}
                <Grid item component={Card} item component={Card} xs={12} 
                md={3}
                    className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            recovered
                        </Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={recovered.value}

                                duration={2}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary"  >
                            {new Date(lastUpdate).toDateString()}

                        </Typography>
                        <Typography variant="h5" >
                            no. of recovered
                        </Typography>
                    </CardContent>
                </Grid>
                {/* ****************************** */}
                <Grid item component={Card} item component={Card} xs={12} 
                md={3}
                    className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={deaths.value}

                                duration={2}
                                separator=","
                            />

                        </Typography>
                        <Typography color="textSecondary"  >
                            {new Date(lastUpdate).toDateString()}

                        </Typography>
                        <Typography variant="h5" >
                            No.of death
                        </Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;