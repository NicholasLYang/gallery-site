import React, { Dispatch, useRef } from "react";
import withStyles, { WithStyles } from "react-jss";
import { delay } from "./utils";
import { ActionTypes, BlockState, BlockType } from "./GalleryPage";
import { Link } from "react-router-dom";

interface Props {
  name: BlockType;
  color: string;
  logo: string;
  dispatch: Dispatch<ActionTypes>;
  activeBlock: BlockType | undefined;
  activeBlockState: BlockState;
  href: string;
}

const styles = {
  GridElement: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "ff-basic-gothic-pro, sans-serif",
    fontWeight: "300",
    fontStyle: "normal",
    textDecoration: "none",
    transition: "background-color 0.3s, border 0.3s",
    border: (props: Props) => `6px solid ${props.color}`,
    gridArea: (props: Props) => props.name,
    margin: "10px"
  },
  logo: {
    width: "80%"
  },
  name: {
    color: "black"
  }
};

const GridElement: React.FC<Props & WithStyles<typeof styles>> = ({
  classes,
  name,
  color,
  logo,
  activeBlock,
  activeBlockState,
  dispatch,
  href,
}) => {
  const containerRef = useRef(null);
  let content = <div> </div>;
  if (activeBlock === name && activeBlockState === BlockState.ACTIVE) {
    content = (
      <img className={classes.logo} src={logo} alt="Logo for company" />
    );
  }
  if (activeBlock !== name) {
    content = <h1 className={classes.name}> {name.toLocaleUpperCase()} </h1>;
  }
  return (
    <Link
      ref={containerRef}
      to={href}
      style={
        activeBlock === name && activeBlockState >= BlockState.LOADING
          ? { backgroundColor: color, border: "none" }
          : {}
      }
      className={classes.GridElement}
      onMouseEnter={() => {
        dispatch({ type: "SET_ACTIVE_BLOCK", payload: name });
        delay(250).then(() => dispatch({ type: "FINISH_LOADING" }));
      }}
      onMouseLeave={() =>
        dispatch({ type: "SET_ACTIVE_BLOCK", payload: undefined })
      }
    >
      {content}
    </Link>
  );
};

export default withStyles(styles)(GridElement);
