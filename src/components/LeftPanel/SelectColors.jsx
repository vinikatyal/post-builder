import React, { memo } from "react";

import { SketchPicker } from "react-color";

function SelectColors(props) {
  return (
    <>
      <p>1. Color Themes</p>
      <SketchPicker color={props.value} onChange={props.handleChange} />
    </>
  );
}

export default memo(SelectColors);
