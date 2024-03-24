import React, { useState, useEffect } from "react";

export const TimeContext = React.createContext();

export const TimeProvider = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimeContext.Provider value={currentTime}>{children}</TimeContext.Provider>
  );
};
