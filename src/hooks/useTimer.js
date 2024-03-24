import { TimeContext } from "../contexts/timeContext";
import { useContext } from "react";

const useTime = () => {
    const currentTime = useContext(TimeContext);
    if (!currentTime) {
        throw new Error("No notification")
    }
    return currentTime; 
  };

export default useTime;