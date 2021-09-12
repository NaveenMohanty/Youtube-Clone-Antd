import React, { createContext, useState, useContext, useEffect } from "react";
import { getYoutubeData } from "../utils/api";

export const Context = createContext();

export function ContextConsumer() {
  return useContext(Context);
}
const youtubeVideoCode = [
  "i8V_RV5eZcY",
  "h-MIOWPT6Q0",
  "LEzC0cPQkH4",
  "zrfwcO1LS2M",
  "Lz8hJLVVYXU",
  "M243j7kM81Q",
  "hOXr-uIQn80",
  "VJj-ItImbt4",
];

export function ContextProvider({ children }) {
  useEffect(() => {
    getdata();
  }, []);
  /************************States*****************************/
  const [isDark, setIsdark] = useState(true);
  const [youtubeData, setYoutubeData] = useState([]);
  /************************functions*****************************/
  const getdata = async () => {
    let TempYoutubeData = youtubeVideoCode.map(async (code) => {
      return { ...(await getYoutubeData(code)), code };
    });

    setYoutubeData([...(await Promise.all(TempYoutubeData))]);
  };

  return (
    <Context.Provider
      value={{
        isDark,
        setIsdark,
        youtubeData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
