import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import MobileStepper from "@material-ui/core/MobileStepper"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import { Chip, Container, Fab, Grid } from "@material-ui/core"
import DoneIcon from "@material-ui/icons/Done"
import FeedbackIcon from "@material-ui/icons/Feedback"
import HomeIcon from "@material-ui/icons/Home"
import PlaceIcon from "@material-ui/icons/Place"
import AssignmentIcon from "@material-ui/icons/Assignment"
import CustomerPhoto from "../images/gatsby-astronaut.png"
import Gallery from '../images/gallery1.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Gallery,
  },
  {
    label: "Bird",
    imgPath: Gallery,
  },
  {
    label: "Bali, Indonesia",
    imgPath: Gallery,
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath: Gallery,
  },
  {
    label: "Goč, Serbia",
    imgPath: Gallery,
  },
]

const useStyles = makeStyles(theme => ({
  root: {
    // maxWidth: 600,
    flexGrow: 1,
    marginTop: 70,
    color: "#212529",
    marginBottom: 50,
  },
  main__title: {
    textAlign: "center",
    marginBottom: 50,
  },
  // project__details: {
  //   textAlign: "right",
  // },
  img: {
    // height: 255,
    // display: "block",
    // maxWidth: 600,
    // overflow: "hidden",
    // borderRadius: 10,
    width: "100%",
  },
  project__testimonial: {
    textAlign: "center",
    padding: 50,
  },
  detail__tags: {
    marginTop: 10,
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-evenly",
    maxWidth: 400,
    margin: "0 auto",
  },
  customer__image: {
    width: 200,
    borderRadius: 10,
    border: "1px solid lightgray",
  },
  // project__description: {
  //   marginTop: 20,
  //   marginLeft: 30,
  //   marginBottom: 50,
  // },
  // project__review: {
  //   // marginTop: 20,
  //   // marginLeft: 30,
  //   textAlign:'justify',
  //   padding: 20,
  // },
}))

function SwipeableTextMobileStepper() {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = tutorialSteps.length

  const handleDelete = () => {
    console.info("You clicked the delete icon.")
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = step => {
    setActiveStep(step)
  }

  return (
    <Container className={classes.root}>
      <Typography className={classes.main__title} variant="h5">
        Recent Projects and Testimonials
      </Typography>
      <Grid container direction="row" alignItems="center">
        <Grid item md={7}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="dots"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
            }
          />
        </Grid>
        <Grid item md={5}>
          <Paper elevation={20}>
          <div className={classes.project__testimonial}>
            <img
              className={classes.customer__image}
              src={CustomerPhoto}
              alt="customer photo"
            />
            <Typography variant="h5">Customer Name</Typography>
            <div className={classes.detail__tags}>
              <Chip
                icon={<HomeIcon />}
                label="3bhk"
                size="small"
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
              />
              <Chip
                icon={<PlaceIcon />}
                label="Place"
                size="small"
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
              />
              <Chip
                icon={<AssignmentIcon />}
                label="Interior"
                size="small"
                // variant="outlined"
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
              />
              <Chip
                icon={<FeedbackIcon fontSize="small" />}
                label="Testimonial"
                size="small"
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
              />
            </div>
            <Typography variant="body2" color="textSecondary">
              I have designed my 3bhk home at Baroda through butterPly. I must
              say their service is beyond my expectations. They are very
              professional. All work done within given timeframe
            </Typography>
          </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SwipeableTextMobileStepper
