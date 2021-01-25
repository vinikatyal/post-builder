import React, { memo } from "react";
import { makeStyles } from "@material-ui/styles";

// material components
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import EditButton from "../EditorPanel/EditButton";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
}));

function TypographySettings() {
  const classes = useStyles();

  return (
    <div>
      <p>2. Typography</p>

      <p>Fonts</p>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-label">Primary font</InputLabel>
        <Select labelId="select-label" id="selectFont">
          <MenuItem value={"serif1"}>Serif 1</MenuItem>
          <MenuItem value={"serif2"}>Serif 2</MenuItem>
          <MenuItem value={"sansserif"}>Sans Serif</MenuItem>
        </Select>
      </FormControl>
      <p>Fast styling</p>
      <EditButton cmd="italic" />
      <EditButton cmd="bold" />
      <EditButton cmd="formatBlock" arg="h1" name="heading" />
      <EditButton
        cmd="createLink"
        arg="https://adorilabs.com"
        name="hyperlink"
      />
    </div>
  );
}

export default memo(TypographySettings);
