import React, {useState} from "react";
import withStyles, { WithStyles } from "react-jss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import TopicPage from "./TopicPage";
import amazon from "./amazon.png";
import weWork from "./wework.svg";
import facebook from "./facebook.png";
import google from "./google.png";
import {Topics} from "./types";
import AmazonPage from "./AmazonPage";
import WeWorkPage from "./WeWorkPage";
import FacebookPage from "./FacebookPage";
import GooglePage from "./GooglePage";
import AboutPage from "./AboutPage";
import SplashPage from "./SplashPage";
import GalleryPage from "./GalleryPage";

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
    width: "60vw",
    fontSize: "1.2em"
  }
};

const topics: Topics = {
  labor: {
    href: "/labor",
    color: "#ff9900",
    company: "Amazon",
    logo: amazon,
    page: AmazonPage
  },
  funding: {
    href: "/funding",
    color: "rgb(255, 182, 0)",
    company: "WeWork",
    logo: weWork,
    page: WeWorkPage
  },
  addiction: {
    href: "/addiction",
    color: "#4267B2",
    company: "Facebook",
    logo: facebook,
    page: FacebookPage
  },
  data: {
    href: "/data",
    color: "#0F9D58",
    company: "Google",
    logo: google,
    page: GooglePage
  }
};

const App: React.FC<WithStyles<typeof styles>> = ({ classes }) => {
  const [displaySplash, setDisplaySplash] = useState(true);

  if (displaySplash) {
    return <SplashPage skipSplash={() => setDisplaySplash(false)}/>
  }
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
          <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/:topicName">
            <TopicPage topics={topics}/>
          </Route>
          <Route path="/">
            <GalleryPage topics={topics} />
          </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default withStyles(styles)(App);
