import React, { memo, useState, useCallback, useContext } from "react";
import { SketchPicker } from "react-color";

// material components
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";

// context
import { StyleContext } from "../../context/StyleContext";

function SelectColors() {
  const [open, setOpen] = useState(false);
  const [openFore, setOpenFore] = useState(false);
  const { styles, handleStyleChange } = useContext(StyleContext);

  const handleOpen = useCallback((e) => {
    e.preventDefault();
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpenFore = useCallback((e) => {
    e.preventDefault();
    setOpenFore(true);
  }, []);

  const handleCloseFore = useCallback(() => {
    setOpenFore(false);
  }, []);

  const handleColorChange = useCallback(
    (color) => {
      handleStyleChange({
        homePage: {
          backgroundColor: color.hex,
          accentColor: styles.homePage.accentColor,
        },
      });
    },
    [handleStyleChange, styles.homePage.accentColor]
  );

  const handleforegroundColorChange = useCallback(
    (color) => {
      handleStyleChange({
        homePage: {
          accentColor: color.hex,
          backgroundColor: styles.homePage.backgroundColor,
        },
      });
    },
    [handleStyleChange, styles.homePage.backgroundColor]
  );
  return (
    <>
      <p>2. Color Themes</p>
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

      <p>Accent Color</p>
      <Button variant="contained" color="primary" onClick={handleOpenFore}>
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
        open={openFore}
        onClose={handleCloseFore}
      >
        <SketchPicker
          color={styles.homePage.accentColor}
          onChange={handleforegroundColorChange}
        />
      </Popover>
    </>
  );
}

export default memo(SelectColors);
