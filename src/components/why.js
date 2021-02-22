import React from "react"
import { Button, Card, CardContent, Container, Grid, makeStyles, Typography } from "@material-ui/core"
import DateImage from '../images/date.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop:70,
        marginBottom:50,
        textAlign: 'center',
        color: "#212529",
    },
    card__content:  {
        // padding: "10px 40px",
        boxShadow: 'none',
        backgroundColor: 'inherit',
        // marginTop: 50,
        color: "#212529",
    }
}))

function WhyUs() {
  const classes = useStyles()

  return (
    <Container fixed className={classes.root}>
      <Typography style={{marginBottom: 50}} variant="h5">Why butterPly?</Typography>
      <Grid container justify="space-evenly" alignItems="center">
          <Grid item md={1}></Grid>
        <Grid item xs={6} md={2}>
            <Card className={classes.card__content}>
                <CardContent>
                    {/* <img src={DateImage} style={{width:'80px'}} alt='Not found'/> */}
                    <i style={{fontSize: '48px'}} class="las la-clock"></i>
                    <p>On Time Delivery</p>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={6} md={2}>
            <Card className={classes.card__content}>
                <CardContent>
                    {/* <img src={DateImage} style={{width:'80px'}} alt='Not found'/> */}
                    <i style={{fontSize: '48px'}} class="las la-user-secret"></i>
                    <p>Design experts</p>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={6} md={2}>
            <Card className={classes.card__content}>
                <CardContent>
                    {/* <img src={DateImage} style={{width:'80px'}} alt='Not found'/> */}
                    <i style={{fontSize: '48px'}} class="las la-certificate"></i>
                    <p>5 Years warranty</p>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={6} md={2}>
            <Card className={classes.card__content}>
                <CardContent>
                    {/* <img src={DateImage} style={{width:'80px'}} alt='Not found'/> */}
                    <i style={{fontSize: '48px'}} class="las la-hand-holding-usd"></i>
                    <p>Best Pricing</p>
                </CardContent>
            </Card>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </Container>
  )
}

export default WhyUs
