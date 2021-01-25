import React, { memo, useState } from "react";

import { makeStyles } from "@material-ui/styles";

// material ui components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

// icons
import ListIcon from "@material-ui/icons/List";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";

// components
import MediaControlCard from "./MediaControlCard";
import MediaControlList from "./MediaControlList";

const useStyles = makeStyles((theme) => ({
  paddingDiv: {
    padding: theme.spacing(2),
  },
}));

function Episodes(props) {
  const classes = useStyles();

  const [layoutType, setLayoutType] = useState("grid"); // temp value
  const toggle = (value) => {
    setLayoutType(value);
  };

  return (
    <>
      <Typography
        style={{
          color: props.accentColor,
        }}
        variant="h5"
        component="h5"
        gutterBottom
        className={classes.paddingDiv}
      >
        Episodes
      </Typography>
      <Grid container>
        <Tooltip title="Grid View" aria-label="grid">
          <IconButton onClick={() => toggle("grid")}>
            <ViewComfyIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="List View" aria-label="list">
          <IconButton onClick={() => toggle("list")}>
            <ListIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid container spacing={3} className={classes.paddingDiv}>
        {layoutType === "list" ? (
          <>
            <MediaControlList />
            <MediaControlList />
            <MediaControlList />
            <MediaControlList />
          </>
        ) : (
          <>
            <MediaControlCard />
            <MediaControlCard />
            <MediaControlCard />
            <MediaControlCard />
          </>
        )}
      </Grid>
    </>
  );
}

export default memo(Episodes);
