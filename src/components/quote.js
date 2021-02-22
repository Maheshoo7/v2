import React from "react"
import { Button, Grid, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    quote__text: {
        padding: 40,
        textAlign: 'center',
    }
}))

function InteriorQuote() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-"
        alignItems="center"
      >
        <Grid item md={6}>Grid 1</Grid>
        <Grid item md={6}>
            <Typography className={classes.quote__text} variant='h5'>
                I see myself as a Storyteller. Clients hire me to write their Biographies, But instead of words i use Fabrics, Wood, Architectural elements to them.
            </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default InteriorQuote
