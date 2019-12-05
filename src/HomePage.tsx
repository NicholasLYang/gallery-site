import React, { useReducer } from "react";
import withStyles, { WithStyles } from "react-jss";
import GridElement from "./GridElement";
import {Topics} from "./types";

const styles = {
  HomePage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "100px"
  },
  floorPlan: {
    width: "45vw",
    height: "45vw",
    fontSize: "0.9em",
    border: "20px solid lightblue",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 2fr",
    gridTemplateRows: "2fr 1fr 2fr",
    gridTemplateAreas: `
"labor    .  data"
".    .   ."
"funding  .  addiction" 
`
  },
  labor: {
    gridArea: "labor"
  },
  data: {
    gridArea: "data"
  },
  funding: {
    gridArea: "funding"
  },
  addiction: {
    gridArea: "addiction"
  }
};
export enum BlockState {
  INACTIVE = 0,
  LOADING,
  ACTIVE
}

export type BlockType = "addiction" | "labor" | "data" | "funding";

interface State {
  activeBlock: BlockType | undefined;
  blockState: BlockState;
}

const initialState = {
  activeBlock: undefined,

  blockState: BlockState.INACTIVE
};

export type ActionTypes =
  | { type: "SET_ACTIVE_BLOCK"; payload: BlockType | undefined }
  | { type: "FINISH_LOADING" };

function reducer(state: State, action: ActionTypes) {
  switch (action.type) {
    case "SET_ACTIVE_BLOCK":
      return { activeBlock: action.payload, blockState: BlockState.LOADING };
    case "FINISH_LOADING":
      return { ...state, blockState: BlockState.ACTIVE };
    default:
      return state;
  }
}

interface Props extends WithStyles<typeof styles> {
  topics: Topics
}

const HomePage: React.FC<Props> = ({ classes, topics }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={classes.HomePage}>
      <div className={classes.floorPlan}>
        <GridElement
          name="addiction"
          dispatch={dispatch}
          activeBlock={state.activeBlock}
          activeBlockState={state.blockState}
          {...topics.addiction}
        />
        <GridElement
          name="data"
          dispatch={dispatch}
          activeBlock={state.activeBlock}
          activeBlockState={state.blockState}
          {...topics.data}
        />
        <GridElement
          name="funding"
          dispatch={dispatch}
          activeBlock={state.activeBlock}
          activeBlockState={state.blockState}
          {...topics.funding}
        />
        <GridElement
          name="labor"
          dispatch={dispatch}
          activeBlock={state.activeBlock}
          activeBlockState={state.blockState}
          {...topics.labor}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(HomePage);
