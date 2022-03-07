export const getFormatedTime = (unixTime, timezone, hourCycle) => {
  const date = new Date(unixTime * 1000);

  const options = {
    hour: "numeric",
    minute: "numeric",
    timeZone: timezone,
    hourCycle,
  };

  const current = new Intl.DateTimeFormat("en-US", options).format(date);

  return current;
};
