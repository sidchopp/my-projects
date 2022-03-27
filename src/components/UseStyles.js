// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Hex codes: Charcoal #101820FF, Yellow #FEE715FF 
const lightColor = "#f6ebf4";
const midColor = " #4cbfa6";
const darkColor = "#482673";

const UseStyles = makeStyles((theme) => ({
  darkColor: {
    color: darkColor
  },
  midColor: {
    color: midColor
  },
  lightColor: {
    color: lightColor
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    color: darkColor
  },
  anchorTag: {
    color: darkColor,
    transition: "all 0.3s ease-in-out 0s",
    '&:hover': {
      color: midColor,
      transform: "scale(1.1, 1.1)"
    }
  },
  scrollToTop: {
    background: darkColor,
    color: lightColor,
    bottom: "12.5px",
    right: "8.5px",
    position: "fixed",
    boxShadow: `0 8px 6px -6px ${darkColor}`,
    transition: "all 0.6s ease-in-out 0s",
    borderRadius: "5px",
    '&:hover': {
      backgroundColor: midColor,
      transform: "scale(1.1, 1.1)"
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(15, 0, 6),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // backgroundImage: `url(https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)`,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
  },
  myProjectsHeader: {
    marginBottom: theme.spacing(2),
    textAlign: 'center'
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  onHover: {
    transition: "all 0.6s ease-in-out 0s",
    '&:hover': {
      backgroundColor: midColor,
      transform: "scale(1.1, 1.1)"
    }
  },
  resume: {
    backgroundColor: lightColor,
    color: darkColor
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    // backgroundImage: `url(https://images.unsplash.com/photo-1489679407847-02d21ceb0e80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundPosition: 'center',

  },
}));


export default UseStyles;