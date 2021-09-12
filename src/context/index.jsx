import React, { createContext, useState, useContext, useEffect } from "react";
import { getYoutubeData } from "../utils/api";
import { videoIdsList } from "../utils/videoIdsList";

export const Context = createContext();

export function ContextConsumer() {
  return useContext(Context);
}
const youtubeVideoCode = videoIdsList;

export function ContextProvider({ children }) {
  /************************States*****************************/
  const [isDark, setIsdark] = useState(true);
  const [youtubeData, setYoutubeData] = useState([]);
  const [historydata, setHistorydata] = useState([]);

  /************************functions*****************************/
  const getdata = async () => {
    let TempYoutubeData = youtubeVideoCode.map(async (code) => {
      return { ...(await getYoutubeData(code)), code };
    });

    setYoutubeData([...(await Promise.all(TempYoutubeData))]);
  };
  /**********************LifeCycle*****************************/
  useEffect(() => {
    getdata();
  }, []);

  return (
    <Context.Provider
      value={{
        isDark,
        setIsdark,
        youtubeData,
        getdata,
        setHistorydata,
        historydata,
      }}
    >
      {children}
    </Context.Provider>
  );
}
