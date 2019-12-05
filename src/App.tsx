import React from "react";
import withStyles, { WithStyles } from "react-jss";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomePage from "./HomePage";
import TopicPage from "./TopicPage";
import amazon from "./amazon.png";
import weWork from "./wework.svg";
import facebook from "./facebook.png";
import google from "./google.png";
import {Topics} from "./types";

const styles = {
  App: {
    display: "flex",
    width: "100vw",
    fontFamily: "bely, serif",
    flexDirection: "column",
    alignItems: "center"
  },
  header: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontVariant: "small-caps"
  },
  headerLinks: {
    display: "flex",
    width: "30vw",
    justifyContent: "space-evenly"
  },
  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  mainContent: {
    width: "60vw"
  }
};

const topics: Topics = {
  labor: {
    href: "/labor",
    color: "#ff9900",
    logo: amazon
  },
  funding: {
    href: "/funding",
    color: "rgb(255, 182, 0)",
    logo: weWork
  },
  addiction: {
    href: "/addiction",
    color: "#4267B2",
    logo: facebook
  },
  data: {
    href: "/data",
    color: "#0F9D58",
    logo: google
  }
};

const App: React.FC<WithStyles<typeof styles>> = ({ classes }) => {
  return (
    <Router>
      <div className={classes.App}>
        <header className={classes.header}>
          <Link className={classes.link} to="/">
            <h1> Superficial Seamlessness </h1>
          </Link>
          <div className={classes.headerLinks}>
            <Link className={classes.link} to="/about">
              About
            </Link>
            <Link className={classes.link} to="/location">
              Location
            </Link>
            <Link className={classes.link} to="/contact">
              Contact
            </Link>
          </div>
        </header>
        <div className={classes.mainContent}>
          <Route path="/:topicName">
            <TopicPage topics={topics}/>
          </Route>
          <Route exact path="/">
            <HomePage topics={topics} />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default withStyles(styles)(App);
