import React, { useState } from "react";

import { DeviceContext } from "./DeviceContext";

import { DEVICE_WIDTH } from "../constants";
const AdoriDeviceProvider = ({ children }) => {
  const [device, setDevice] = useState(DEVICE_WIDTH.desktop);

  const handleDeviceChange = (device) => {
    setDevice(device);
  };

  const value = { device, handleDeviceChange };
  return (
    <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
  );
};

export default AdoriDeviceProvider;
