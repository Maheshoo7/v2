import React, { useState } from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import { Container, Fab, Grid } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import MobileStepper from "@material-ui/core/MobileStepper"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const useStyles = makeStyles(theme => ({
  root: {
    marginTop:70,
    textAlign: 'center',
    color: "#212529",
    marginBottom:50,
  },
  image__container: {
    position: 'relative',
    marginTop:50,
  },
  img: {
    borderRadius: 10,
  },
  leftstep__button: {
    position: 'absolute',
    backgroundColor: 'white',
    top: '100%',
    left: '30%',
    [theme.breakpoints.up('sm')] : {
      top: '60%',
      left: '12%',
    },
  },
  rightstep__button: {
    position: 'absolute',
    backgroundColor: 'white',
    top: '100%',
    right: '30%',
    [theme.breakpoints.up('sm')] : {
      top: '60%',
      right: '12%',
    },
  },
}))

const tutorialSteps = [
  {
    label: "Step 1",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    content: "hello this is step 1",
  },
  {
    label: "Step 2",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    content: "hello this is step 2",
  },
  {
    label: "Step 3",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
      content: "hello this is step 3",
  },
  {
    label: "Step 4",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
      content: "hello this is step 4",
  },
  {
    label: "Step 5",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    content: "hello this is step 5",
  },
]

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const theme = useTheme()
  const maxSteps = tutorialSteps.length

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
    <div className={classes.root}>
      <Typography variant='h5'>How it works</Typography>
      <Grid container direction='row' justify='center' alignItems='center' className={classes.image__container}>
        <Grid item xs={12} md={8}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {tutorialSteps.map(step => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Fab
                className={classes.leftstep__button}
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight color="primary" />
                ) : (
                  <KeyboardArrowLeft color="primary"/>
                )}
              </Fab>

              <Fab
                className={classes.rightstep__button}
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft color="primary" />
                ) : (
                  <KeyboardArrowRight color="primary" />
                )}
              </Fab>

            <AutoPlaySwipeableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            enableMouseEvents
          >
            
            {tutorialSteps.map((step, index) => (
              <div key={step.label}>
                {/* {Math.abs(activeStep - index) <= 2 ? ( */}
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                  <p>{step.content}</p>
                {/* ) : null} */}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Grid>
      </Grid>
    </div>
  )
}

// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const tutorialSteps = [
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
//   },
//   {
//     label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
//     imgPath:
//       'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 400,
//     flexGrow: 1,
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     height: 50,
//     paddingLeft: theme.spacing(4),
//     backgroundColor: theme.palette.background.default,
//   },
//   img: {
//     height: 255,
//     display: 'block',
//     maxWidth: 400,
//     overflow: 'hidden',
//     width: '100%',
//   },
// }));

// function SwipeableTextMobileStepper() {
//   const classes = useStyles()
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = tutorialSteps.length;
//   const theme = useTheme()

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <div className={classes.root}>
//       <Paper>
//         Hello
//       </Paper>
//       <AutoPlaySwipeableViews
//       index={activeStep}
//       onChangeIndex={handleStepChange}

//       >
//         {tutorialSteps.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <img className={classes.img} src={step.imgPath} alt={step.label} />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         activeStep={activeStep}
//         position="static"
//         nextButton={
//           <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
//             Next
//             {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//             Back
//           </Button>
//         }
//       />
//     </div>
//   );
// }

// export default SwipeableTextMobileStepper;
