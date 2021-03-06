import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlList(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            <SkipPreviousIcon
              style={{
                color: props.accentColor,
              }}
            />
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon
              className={classes.playIcon}
              style={{
                color: props.accentColor,
              }}
            />
          </IconButton>
          <IconButton aria-label="next">
            <SkipNextIcon
              style={{
                color: props.accentColor,
              }}
            />
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://smartimages.adorilabs.com/lmySERVRTYuR00DiqPxasRSruMc=/fit-in/1080x1080/https%3A//cdn.images.adorilabs.com/v1/5601ffe2-dfd5-42dd-b968-61c5a0fb05a1.jpeg"
        title="Live from space album cover"
      />
    </Card>
  );
}
