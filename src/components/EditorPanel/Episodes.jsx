import React, { memo, useState } from "react";

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

function Episodes() {
  const [layoutType, setLayoutType] = useState("grid"); // temp value
  const toggle = (value) => {
    setLayoutType(value);
  };
  return (
    <>
      <Typography variant="h5" component="h5" gutterBottom>
        Episodes
      </Typography>
      <Grid container>
        <Tooltip title="Grid View" aria-label="grid">
          <IconButton disableRipple onClick={() => toggle("grid")}>
            <ViewComfyIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="List View" aria-label="list">
          <IconButton disableRipple onClick={() => toggle("list")}>
            <ListIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid container>
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