import React from "react";
import withStyles, { WithStyles } from "react-jss";

interface PageProps extends WithStyles<typeof styles> {}

const styles = {
  Page1: {
    fontSize: "2em",
    fontFamily: "neue-haas-grotesk-display, sans-serif",
    fontWeight: "700",
    fontStyle: "normal"
  }
};

const Page1: React.FC<PageProps> = ({ classes }) => {
  return (
    <div className={classes.Page1}>
      <h1> Superficial Seamlessness </h1>
      <h3> By Nicholas Yang and Adriana Yuan </h3>
    </div>
  );
};

export default withStyles(styles)(Page1);
