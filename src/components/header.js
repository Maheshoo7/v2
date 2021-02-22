import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  SwipeableDrawer,
  Toolbar,
} from "@material-ui/core"
import PolymerIcon from "@material-ui/icons/Polymer"
import MenuIcon from "@material-ui/icons/Menu"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import LogoImage from '../images/logo.svg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    [theme.breakpoints.up("md")] : {
      marginLeft: 100,
    }
  },
  logoImage: {
    width: 150,
  },
  list: {
    width: 250,
  },
  appBar: {
    boxShadow: "none",
  },
  menuButton: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  navLinks: {
    "& > *": {
      margin: theme.spacing(2),
      textTransform: "capitalize",
    },
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      position: "absolute",
      right: "6%",
    },
  },
}))

function Navbar() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Gallery", "About us", "Contact us", "Services", "Careers"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed" color="inherit">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item className={classes.logo}>
              <IconButton color="primary">
                <img className={classes.logoImage}  src={LogoImage} alt='logo' />
              </IconButton>
            </Grid>

            <Grid item className={classes.menuButton}>
              {["left"].map(anchor => (
                <React.Fragment key={anchor}>
                  <IconButton onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon />
                  </IconButton>
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </Grid>

            <Grid item className={classes.navLinks}>
              <Button>Bedroom</Button>
              <Button>Services</Button>
              <Button>About us</Button>
              <Button>Contact us</Button>
              <Button>Careers</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
