import React, { memo, useState, useCallback } from "react";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import { SketchPicker } from "react-color";

function SelectColors(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback((e) => {
    /**
     * That's important - this is the reason why focus & selection stays
     * as it is after user clicks on div that fires up react-color.
     * This needs to be inside react-color so selection will remain and
     * document.execCommand("foreColor", false, color.hex); will color the text
     * correctly.
     */
    e.preventDefault();
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <>
      <p>1. Color Themes</p>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Select Color
      </Button>

      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        open={open}
        onClose={handleClose}
      >
        <SketchPicker color={props.value} onChange={props.handleChange} />
      </Popover>
    </>
  );
}

export default memo(SelectColors);
