import React from 'react'
import coverImage from '../images/4.jpg'
import mobileCoverImage from '../images/mobile.png'
import { Button, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${mobileCoverImage})`,
    [theme.breakpoints.up("md")]:{
      backgroundImage: `url(${coverImage})`,
    },
    backgroundRepeat: 'no-repeat',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: 740,
    position: 'relative',
  },
  cover__text: {
    position: 'absolute',
    color: 'rgb(36, 36, 36)',
    top: '66%',
    left: '10%',
    [theme.breakpoints.up("md")]: {
      left: '66%'
    },
}
}))

function CoverImages() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.cover__text}>
        <Typography variant='h4'>
          New Home 
          New Beginning.
        </Typography>
        <h3>
        Your dream home is just a click away
        </h3>
        <Button style={{boxShadow: 'none'}} variant='contained' color='primary' >Book Free Consultation</Button>
      </div>
    </div>
  )
}

export default CoverImages