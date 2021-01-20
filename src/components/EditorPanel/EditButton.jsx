import React, { memo } from "react";
import Button from "@material-ui/core/Button";

function EditButton(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      key={props.cmd}
      onMouseDown={(evt) => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      {props.name || props.cmd}
    </Button>
  );
}

export default memo(EditButton);
