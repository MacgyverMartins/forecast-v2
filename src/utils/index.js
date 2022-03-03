export const getFormatedTime = (unixTime, timezone) => {
  const locale = window.navigator.userLanguage || window.navigator.language;
  const date = new Date(unixTime * 1000);

  const options = {
    hour: "numeric",
    minute: "numeric",
    timeZone: timezone,
  };

  const current = new Intl.DateTimeFormat(locale, options).format(date);

  return current;
};
