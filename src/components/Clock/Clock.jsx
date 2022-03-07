import React, { useContext, useEffect, useState } from "react";
import { SettingsContext } from "..";

export default function Clock() {
  const {
    settings: { hourcycle },
  } = useContext(SettingsContext);
  const [clockDate, setClockDate] = useState(new Date());
  const options = {
    hourCycle: hourcycle,
    hour: "2-digit",
    minute: "2-digit",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setClockDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{clockDate.toLocaleTimeString("en-US", options)}</div>;
}
