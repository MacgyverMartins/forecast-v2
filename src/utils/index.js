export const getFormatedTime = (unixTime, timezone) => {
  const date = new Date(unixTime * 1000);

  const options = {
    hour: "numeric",
    minute: "numeric",
    timeZone: timezone,
  };

  const current = new Intl.DateTimeFormat("en-US", options).format(date);

  return current;
};
