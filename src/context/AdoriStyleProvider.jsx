import React, { useState } from "react";

import { StyleContext } from "./StyleContext";

const AdoriStyleProvider = ({ children }) => {
  const [styles, setStyles] = useState({
    homePage: {
      backgroundColor: "#fff",
      accentColor: "#000",
    },
  });

  const [logo, setLogo] = useState({
    type: "text",
    color: "#000",
    src: "",
  });

  const handleStyleChange = (value) => {
    setStyles(value);
  };

  const handleLogoChange = (value) => {
    setLogo(value);
  };

  const value = { styles, handleStyleChange, logo, handleLogoChange };
  return (
    <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
  );
};

export default AdoriStyleProvider;
