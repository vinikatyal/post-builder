import React, { memo } from "react";
import Typography from "@material-ui/core/Typography";

import SelectColors from "./SelectColors";
import EditButton from "../EditorPanel/EditButton";

function StyleManager(props) {
  return (
    <div>
      <Typography variant="h5" component="h5" gutterBottom>
        Style Manager
      </Typography>
      <p>One thousand years ago, superstition and the sword ruled.</p>
      <EditButton cmd="italic" />
      <EditButton cmd="bold" />
      <EditButton cmd="formatBlock" arg="h1" name="heading" />
      <EditButton
        cmd="createLink"
        arg="https://adorilabs.com"
        name="hyperlink"
      />
      <SelectColors value={props.value} onChange={props.onChange}/>
    </div>
  );
}

export default memo(StyleManager);
