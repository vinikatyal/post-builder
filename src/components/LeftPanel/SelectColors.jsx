import React, { memo, useState, useCallback } from "react";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import { SketchPicker } from "react-color";

function SelectColors() {
  const [open, setOpen] = useState(false);
  const [colorValue, setColorValue] = useState("");

  const handleOpen = useCallback((e) => {
    e.preventDefault();
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleColorChange = useCallback((color) => {
    setColorValue(color.hex);
    document.execCommand("foreColor", false, color.hex);
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
        <SketchPicker color={colorValue} onChange={handleColorChange} />
      </Popover>
    </>
  );
}

export default memo(SelectColors);
