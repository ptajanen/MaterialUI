import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/styles'; // imprt styles

import MainNavigation from './MainNavigation';
import Footer from './footer.js';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Postdata from './postdata';
import Post from './Post';
import Cards from './cards';




const useStyles = makeStyles({ //jss, objektit, root on luokka, lainausmerkit jos on "left" tai "25%"pelkkä numero pixel
  root: {
    padding:25,   
    background: "linear-gradient(to right top, #900346, #82013b, #740131, #670028, #59001f)"
  },
  title: {
    flexGrow: 1
  }
});


const App = ({ match }) => {
  const classes = useStyles(); 

  return (
    <div>
      <Router basename = '/'>
      <AppBar className={classes.root}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
        Material-UI demo 
        </Typography>
        <MainNavigation />
        </Toolbar>
      </AppBar>
      <switch>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />

        <Route path={`/:postId`} render={ (props) => <Post data={Postdata} {...props} />
      }/>
      </switch>
      <Cards />
      <Footer className={classes.root}/>
      </Router>
      
    </div>
  );
}

export default App;
