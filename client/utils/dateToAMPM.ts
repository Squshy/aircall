export const dateToAMPM = (time: string) => {
  const date = new Date(time);
  let hours: number | string = date.getHours();
  let minutes: string = date.getMinutes().toString();

  const isPM = hours >= 12 ? "PM" : "AM";
  minutes = minutes.padStart(2, "0");
  if (hours === 0) hours = 12;
  hours = hours.toString();
  hours = hours.padStart(2, "0");
  const timeString = hours + ":" + minutes;

  return { time: timeString, AMPM: isPM };
};
