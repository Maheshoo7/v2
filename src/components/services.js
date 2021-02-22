import React from "react"
import { Button, Card, CardContent, Container, Grid, makeStyles, Typography } from "@material-ui/core"
// import DateImage from '../images/date.jpg'
import Kitchen from '../images/kitchen.svg'
import Bedroom from '../images/bedroom1.svg'
import Office1 from '../images/office1.svg'
import Office from '../images/office.svg'
import CivilWorks from '../images/civil1.svg'


const useStyles = makeStyles(theme => ({
    root: {
        marginTop:70,
        textAlign: 'center',
        color: "#212529",
        backgroundColor: 'white',
        marginBottom:50,
    },
    card__content:  {
        // padding: "10px 10px",
        width: 200,
        height: 170,
        // borderRadius: '10px',
        // boxShadow: 'none',
        border: '1px solid lightgray',
        marginBottom: 13,
        color: "#212529",
    }
}))

function WhyUs() {
  const classes = useStyles()

  return (
    <Container fixed className={classes.root}>
      <Typography style={{marginBottom: 50}} variant="h5">One-stop for all the services</Typography>
      <Grid container justify="center" spacing='2' alignItems="center">
          {/* <Grid item md={1}></Grid> */}
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={Kitchen} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-clock"></i> */}
                    <Typography variant='overline'>
                        Modular Kitchen
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={Bedroom} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-user-secret"></i> */}
                    <Typography variant='overline'>
                        Bedroom
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={Office1} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-certificate"></i> */}
                    <Typography variant='overline'>
                        Living Room
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={Bedroom} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-user-secret"></i> */}
                    <Typography variant='overline'>
                        Office Design
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={Bedroom} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-user-secret"></i> */}
                    <Typography variant='overline'>
                        Civil Services
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing='2' alignItems="center">
          {/* <Grid item md={1}></Grid> */}
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={Kitchen} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-clock"></i> */}
                    <Typography variant='overline'>
                        Renovations
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={Bedroom} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-user-secret"></i> */}
                    <Typography variant='overline'>
                        False Ceilings
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={Office1} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-certificate"></i> */}
                    <Typography variant='overline'>
                        Painting
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={CivilWorks} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-hand-holding-usd"></i> */}
                    <Typography variant='overline'>
                        Fabrication
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={Bedroom} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-user-secret"></i> */}
                    <Typography variant='overline'>
                        Wallpaper
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
          {/* <Grid item md={1}></Grid> */}
      </Grid>
      <Grid container justify="center" spacing='2' alignItems="center">
          {/* <Grid item md={1}></Grid> */}
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={Kitchen} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-clock"></i> */}
                    <Typography variant='overline'>
                        Wardrobes
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={Bedroom} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-user-secret"></i> */}
                    <Typography variant='overline'>
                        Crokery units
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={Office1} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-certificate"></i> */}
                    <Typography variant='overline'>
                        Tv Units
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={Bedroom} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-user-secret"></i> */}
                    <Typography variant='overline'>
                        Pooja Room
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card className={classes.card__content}>
                <CardContent>
                    <img src={Bedroom} alt='Not found'/>
                    {/* <i style={{fontSize: '48px'}} class="las la-user-secret"></i> */}
                    <Typography variant='overline'>
                        Furniture
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WhyUs
