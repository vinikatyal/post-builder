import React, { memo, useState, useCallback, useContext } from "react";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import { SketchPicker } from "react-color";

// context
import { StyleContext } from "../../context/StyleContext";

function SelectColors() {
  const [open, setOpen] = useState(false);
  const { styles, handleStyleChange } = useContext(StyleContext);

  const handleOpen = useCallback((e) => {
    e.preventDefault();
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleColorChange = useCallback(
    (color) => {
      handleStyleChange({
        homePage: {
          backgroundColor: color.hex,
        },
      });
    },
    [handleStyleChange]
  );
  return (
    <>
      <p>1. Color Themes</p>
      <p>Background</p>
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
        <SketchPicker
          color={styles.homePage.backgroundColor}
          onChange={handleColorChange}
        />
      </Popover>
    </>
  );
}

export default memo(SelectColors);
