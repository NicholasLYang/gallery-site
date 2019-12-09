import React, { useState } from "react";
import withStyles, { WithStyles } from "react-jss";
import Page1 from "./pages/Page1";
import { useSpring, animated } from "react-spring";
import { delay } from "./utils";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

const pages = [Page1, Page2, Page3];

interface Props extends WithStyles<typeof styles> {
  skipSplash: () => void;
}

const styles = {
  SplashPage: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  navButtons: {
    display: "flex",
    width: "40vw",
    justifyContent: "space-evenly"
  },
  button: {
    padding: "10px",
    fontSize: "1.2rem",
    borderRadius: "5px",
    border: "none",
    transition: "0.1s filter",
    "&:hover": {
      filter: "brightness(85%)"
    }
  }
};

enum Direction {
  Left,
  Right,
  None
}

const dirToTransition = {
  [Direction.Left]: "translate(-150%)",
  [Direction.Right]: "translate(150%)",
  [Direction.None]: "translateX(0%)"
};

const SplashPage: React.FC<Props> = ({ skipSplash, classes }) => {
  const finishPresentation = () => {
    setFading(true);
    return delay(750).then(skipSplash);
  };
  const [currentPage, setCurrentPage] = useState(0);
  const [transitionDir, setTransitionDir] = useState(Direction.None);
  const [fading, setFading] = useState(false);
  const Page = pages[currentPage];
  const props = useSpring({
    // This is objectively terrible code.
    transform: dirToTransition[transitionDir],
    opacity: fading ? 0 : 1,
    from: { transform: "translateX(100%)" }
  });
  return (
    <animated.div
      style={{ opacity: props.opacity }}
      className={classes.SplashPage}
    >
      <animated.div style={props}>
        <Page />
      </animated.div>
      <div className={classes.navButtons}>
        <button
          className={classes.button}
          disabled={currentPage === 0}
          onClick={() => {
            setTransitionDir(Direction.Right);
            delay(750).then(() => {
              if (currentPage > 0) {
                setCurrentPage(currentPage - 1);
              }
            });
          }}
        >
          BACK
        </button>
        <button
          className={classes.button}
          onClick={finishPresentation}
        >
          SKIP
        </button>
        <button
          className={classes.button}
          onClick={() => {
            setTransitionDir(Direction.Left);
            delay(750)
              .then(() => {
                if (currentPage === pages.length - 1) {
                  return finishPresentation();
                } else {
                  setCurrentPage(currentPage + 1);
                  setTransitionDir(Direction.Right);
                  return delay(100);
                }
              })
              .then(() => {
                setTransitionDir(Direction.None);
              });
          }}
        >
          NEXT
        </button>
      </div>
    </animated.div>
  );
};

export default withStyles(styles)(SplashPage);
