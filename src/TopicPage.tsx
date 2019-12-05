import React from "react"
import { useParams } from "react-router-dom";
import withStyles, {WithStyles} from "react-jss";
import {Topic, Topics} from "./types";

const styles = {
  TopicPage: {
    display: "flex",
  }
}

interface Props {
  topics: Topics
}

function getIn<T, K extends keyof T>(map: T, key: K): T[K] {
  return map[key]
}

const TopicPage: React.FC<Props & WithStyles<typeof styles>> = ({ classes, topics }) => {
  const { topicName } = useParams();
  if (!topicName) {
    throw new Error("Topic should not be null!")
  }
  //const topic: Topic = getIn<Topics, keyof Topics>(topics, topicName as keyof Topics);
  return (<div className={classes.TopicPage}>
    <h1> {topicName.toUpperCase()} </h1>
  </div>)
}

export default withStyles(styles)(TopicPage);