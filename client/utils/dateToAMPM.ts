export const dateToAMPM = (time: string) => {
  const date = new Date(time);
  let hours: number | string = date.getHours();
  const minutes: string = date.getMinutes().toString().padStart(2, "0");
  hours = hours % 12;
  hours = hours ? hours : 12;
  const isPM = hours >= 12 ? "PM" : "AM";
  if (hours === 0) hours = 12;
  hours = hours.toString().padStart(2, "0");
  const timeString = hours + ":" + minutes;

  return { time: timeString, AMPM: isPM };
};
