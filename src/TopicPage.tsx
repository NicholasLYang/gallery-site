import React from "react"
import { useParams } from "react-router-dom";
import withStyles, {WithStyles} from "react-jss";
import {Topic, Topics} from "./types";
import {useSpring, animated} from "react-spring";

const styles = {
  TopicPage: {
    display: "flex",
    flexDirection: "column"
  },
  logoContainer: {
    width: "12vw",
    height: "12vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px"
  },
  logo: {
    maxWidth: "10vw",
    maxHeight: "10vw"
  },
  topicContent: {
    width: "60vw",
    lineHeight: "1.2em"
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
  const topic: Topic = getIn<Topics, keyof Topics>(topics, topicName as keyof Topics);
  const props = useSpring({
    // This is objectively terrible code.
    opacity: 1,
    from: { opacity: 0 }
  });
  return (<animated.div style={props} className={classes.TopicPage}>
    <h1> {topicName.toUpperCase()} </h1>
    <div className={classes.logoContainer} style={{ backgroundColor: topic.color}}>
      <img className={classes.logo} src={topic.logo} alt={`Logo for ${topic.company}`} />
    </div>
    <div className={classes.topicContent}>
    <topic.page />
    </div>
  </animated.div>)
}

export default withStyles(styles)(TopicPage);