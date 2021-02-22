import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Gallery1 from "../images/gallery1.jpg"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    marginTop:70,
    // textAlign: 'center',
    color: "#212529",
    marginBottom:50,
  },
  main__title: {
    textAlign: 'center',
    marginBottom:50,
  },
  card__root: {
    maxWidth: 345,
  },
})

const cardData = [
  {
    title: "Modular Kitchen",
    cardImage: Gallery1,
    description:
      "This impressive Modular Kitchen is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    title: "Living Room",
    cardImage: Gallery1,
    description:
      "This impressive Living room is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    title: "Bedroom",
    cardImage: Gallery1,
    description:
      "This impressive Bedroom is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    title: "False Ceilings",
    cardImage: Gallery1,
    description:
      "This impressive Modular Kitchen is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    title: "Painting",
    cardImage: Gallery1,
    description:
      "This impressive Living room is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    title: "Commercial Design",
    cardImage: Gallery1,
    description:
      "This impressive Bedroom is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
]

export default function ImgMediaCard() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography className={classes.main__title} variant='h5'>Gallery Of Designs That Inspire</Typography>
    <Grid container direction="row" justify='center' alignItems='center' spacing={3}>
        {cardData.map(card => (
      <Grid item>
          <Card container direction="row" className={classes.card__root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="180"
                image={card.cardImage}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
        ))}
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Grid>
    </div>
  )
}
