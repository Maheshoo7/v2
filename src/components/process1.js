import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@material-ui/core/MobileStepper';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const useStyles = makeStyles((theme) => ({
}));

function getSteps() {
    return ['Discover', 'Design', 'Move', 'step4', 'step5'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Discover the best products';
      case 1:
        return 'Get Designed by experts';
      case 2:
        return 'The execution is done';
      default:
        return 'Sorry no content';
    }
  }  
  
const tutorialSteps = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
      label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
      imgPath:
        'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];
  

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0);
    const theme = useTheme();
    const steps = getSteps()
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    console.log(steps.length)
    console.log(activeStep)

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  return (
    <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>

    <AutoPlaySwipeableViews
      index={activeStep}
      onChangeIndex={handleStepChange}
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        activeStep={activeStep}
        position="static"
        variant='none'
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
        {/* <div>
            <div>
            <AutoPlaySwipeableViews 
                index={activeStep} 
                onChangeIndex={handleStepChange}
                >
                <Typography>{getStepContent(activeStep)}</Typography>
            </AutoPlaySwipeableViews>
            </div>
            <div>
                <Button onClick={handleBack} disabled={activeStep===0}>Back</Button>
                <Button onClick={handleNext} disabled={activeStep===steps.length-1}>Next</Button>
            </div>
        </div> */}
    </div>
  );
}
