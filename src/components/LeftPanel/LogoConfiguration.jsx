import React, { memo, useState, useContext, useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import { SketchPicker } from "react-color";

import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import ImageIcon from "@material-ui/icons/Image";

// context
import { StyleContext } from "../../context/StyleContext";

const useStyles = makeStyles((theme) => ({
  root: {},
  sketchPick: {
    width: 180,
  },
}));

function LogoConfiguration() {
  const classes = useStyles();
  const [value, setValue] = useState("text");
  const [imgData, setImgData] = useState(null);
  const inputOpenFileRef = React.createRef();
  const { handleLogoChange, logo } = useContext(StyleContext);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const showOpenFileDlg = () => {
    inputOpenFileRef.current.click();
  };

  const handleColorChange = useCallback(
    (color) => {
      handleLogoChange({
        color: color.hex,
        type: "text",
      });
    },
    [handleLogoChange]
  );

  const handleImage = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
        handleLogoChange({ type: "logo", src: reader.result });
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div>
      <p>1. Logo</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="logo"
          name="logoFormat"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="text" control={<Radio />} label="Text" />
          <FormControlLabel value="logo" control={<Radio />} label="Logo" />
        </RadioGroup>
      </FormControl>
      {value === "logo" && (
        <div>
          <input
            ref={inputOpenFileRef}
            onChange={handleImage}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
          <Button color="primary" onClick={() => showOpenFileDlg()}>
            {imgData ? (
              <img src={imgData} alt="logo" width={25} />
            ) : (
              <ImageIcon />
            )}
            Add
          </Button>
        </div>
      )}

      {value === "text" && (
        <div>
          <SketchPicker
            className={classes.sketchPick}
            color={logo.color}
            onChange={handleColorChange}
          />
        </div>
      )}
    </div>
  );
}

export default memo(LogoConfiguration);
