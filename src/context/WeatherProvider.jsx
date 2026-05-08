/* eslint-disable no-unused-vars */

import { useState } from "react";

import { WeatherContext } from "./WeatherContext";

export function WeatherProvider({ children }) {


  return (
    <WeatherContext.Provider value={{}}>
      {children}
    </WeatherContext.Provider>
  );
}