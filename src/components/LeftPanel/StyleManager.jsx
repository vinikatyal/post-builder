import React, { memo } from "react";
import Typography from "@material-ui/core/Typography";

import SelectColors from "./SelectColors";
import TypographySettings from "./TypographySettings";
import LogoConfiguration from "./LogoConfiguration";

function StyleManager() {
  return (
    <div>
      <Typography variant="h5" component="h5" gutterBottom>
        Style Manager
      </Typography>
      <p>
        <i>One thousand years ago, superstition and the sword ruled.</i>
      </p>

      {/* // configuration */}
      <LogoConfiguration />
      <SelectColors />
      <TypographySettings />
    </div>
  );
}

export default memo(StyleManager);
