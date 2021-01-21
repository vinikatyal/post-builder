import React, { memo } from "react";
import EditButton from "../EditorPanel/EditButton";

function TypographySettings() {
  return (
    <div>
      <p>2. Typography</p>
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
