import React from "react";
import withStyles, { WithStyles } from "react-jss";

interface PageProps extends WithStyles<typeof styles> {}

const styles = {
  Page3: {
    fontSize: "2em",
    fontFamily: "neue-haas-grotesk-display, sans-serif",
    fontWeight: "700",
    fontStyle: "normal"
  },
  bulletPoints: {
    fontWeight: "600"
  }
};

const Page3: React.FC<PageProps> = ({ classes }) => {
  return (
    <div className={classes.Page3}>
      <h1> Our Gallery </h1>
      <ul className={classes.bulletPoints}>
        <li> Many modern tech companies fundamentally offer seamlessness </li>
        <li>
          They offer it in the form of ecosystems, delivery, transportation,
          etc.
        </li>
        <li> Examples: Amazon, Uber, Google, Netflix </li>
      </ul>
    </div>
  );
};

export default withStyles(styles)(Page3);
